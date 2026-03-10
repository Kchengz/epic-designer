import jsep from 'jsep';

// --- 类型定义 ---

// 定义上下文数据结构
export interface FormulaContext {
  event?: Record<string, any>;
  formData?: Record<string, any>;
  vars?: Record<string, any>;
}

// 定义内置函数库的类型
type FormulaFunction = (...args: any[]) => any;

// --- 内置函数库 ---

const internalFunctions: Record<string, FormulaFunction> = {
  ABS: (val: number) => Math.abs(val),
  AVERAGE: (...args: any[]) =>
    internalFunctions.SUM(...args) / (args.length || 1),
  IF: (condition: any, trueVal: any, falseVal: any) =>
    condition ? trueVal : falseVal,
  MAX: (...args: number[]) => Math.max(...args),
  MIN: (...args: number[]) => Math.min(...args),
  // 你可以继续扩展，例如农业常用的：亩转平方米
  MU_TO_SQM: (mu: number) => mu * 666.67,
  SUM: (...args: any[]) =>
    args.reduce((a, b) => (Number(a) || 0) + (Number(b) || 0), 0),
};

// --- 核心引擎类 ---

export class FormulaEngine {
  private context: FormulaContext;

  constructor(initialContext: FormulaContext = {}) {
    this.context = initialContext;
  }

  /**
   * 执行主入口
   * @param expression 表达式字符串
   * @param runtimeContext 运行时实时数据（合并构造函数中的 context）
   */
  public calculate(
    expression: string,
    runtimeContext: FormulaContext = {},
  ): any {
    if (!expression || typeof expression !== 'string') return null;

    // 合并初始上下文和运行时上下文
    const mergedContext: FormulaContext = {
      event: { ...this.context.event, ...runtimeContext.event },
      formData: { ...this.context.formData, ...runtimeContext.formData },
      vars: { ...this.context.vars, ...runtimeContext.vars },
    };

    try {
      const ast = jsep(expression);
      console.log(ast);
      return this._execute(ast, mergedContext);
    } catch (error) {
      console.error('[Epic: 公式解析错误]', error);
      return null;
    }
  }

  /**
   * 运算符实现
   */
  private _applyOperator(op: string, l: any, r: any): any {
    switch (op) {
      case '!=':
      case '!==': {
        return l !== r;
      }
      case '*': {
        return (l as number) * (r as number);
      }
      case '+': {
        return (Number(l) || 0) + (Number(r) || 0);
      }
      case '-': {
        return (l as number) - (r as number);
      }
      case '/': {
        return r === 0 ? 0 : (l as number) / (r as number);
      }
      case '<': {
        return l < r;
      }
      case '<=': {
        return l <= r;
      }
      case '==':
      case '===': {
        return l === r;
      }
      case '>': {
        return l > r;
      }
      case '>=': {
        return l >= r;
      }
      default: {
        return 0;
      }
    }
  }

  /**
   * 递归解析 AST 节点
   */
  private _execute(node: jsep.Expression, ctx: FormulaContext): any {
    switch (node.type) {
      // 3. 基础运算符: +, -, *, /
      case 'BinaryExpression': {
        const binNode = node as jsep.BinaryExpression;
        const left = this._execute(binNode.left, ctx);
        const right = this._execute(binNode.right, ctx);
        return this._applyOperator(binNode.operator, left, right);
      }

      // 4. 函数调用: SUM(...)
      case 'CallExpression': {
        const callNode = node as jsep.CallExpression;
        const callee = callNode.callee as jsep.Identifier;
        const funcName = callee.name.toUpperCase();

        const args = callNode.arguments.map((arg) => this._execute(arg, ctx));

        const func = internalFunctions[funcName];
        if (func) {
          return func(...args);
        }
        console.warn(`Function not found: ${funcName}`);
        return 0;
      }

      // 1. 常量: 123, "abc"
      case 'Literal': {
        return (node as jsep.Literal).value;
      }

      // 6. 逻辑表达式: &&, ||
      case 'LogicalExpression': {
        const logNode = node;
        const left = this._execute(logNode.left, ctx);
        const right = this._execute(logNode.right, ctx);
        return logNode.operator === '&&' ? left && right : left || right;
      }

      // 2. 带前缀的变量: $formData.qty
      case 'MemberExpression': {
        const memberNode = node as jsep.MemberExpression;
        const objectNode = memberNode.object as jsep.Identifier;
        const propertyNode = memberNode.property as jsep.Identifier;

        const objectName = objectNode.name; // 如 "$formData"
        const propertyName = propertyNode.name || (propertyNode as any).value;

        const sourceMap: Record<string, any> = {
          $event: ctx.event || {},
          $formData: ctx.formData || {},
          $vars: ctx.vars || {},
        };

        const source = sourceMap[objectName] || {};
        const value = source[propertyName];
        return value === undefined ? 0 : value;
      }

      // 5. 一元运算符: -5, !true
      case 'UnaryExpression': {
        const unaryNode = node as jsep.UnaryExpression;
        const arg = this._execute(unaryNode.argument, ctx);
        return unaryNode.operator === '-' ? -arg : arg;
      }

      default: {
        console.warn(`Unsupported node type: ${node.type}`);
        return 0;
      }
    }
  }
}
