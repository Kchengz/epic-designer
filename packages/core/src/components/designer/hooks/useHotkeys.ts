import type { Revoke } from '@epic-designer/manager';
import type { DesignerState, PageSchema } from '@epic-designer/types';

import { onUnmounted } from 'vue';

import { useClipboard } from '@epic-designer/hooks';

interface DesignerHotkeysDeps {
  emit: (event: string, ...args: any[]) => void;
  handleDelete: () => false | undefined;
  pageSchema: PageSchema;
  revoke: Revoke;
  setSelectedNode: (node: any) => void;
  state: DesignerState;
}

export function useHotkeys(deps: DesignerHotkeysDeps) {
  let target: Document | HTMLElement = document;
  const { emit, handleDelete, pageSchema, revoke, setSelectedNode, state } =
    deps;

  // 使用封装的clipboard hook
  const { copy, cut, duplicate, paste } = useClipboard(
    pageSchema,
    setSelectedNode,
    (message) => revoke.push(message),
  );

  // 判断是否在可编辑元素中
  const isInInput = () => {
    const activeElement = document.activeElement;
    return (
      activeElement instanceof HTMLInputElement ||
      activeElement instanceof HTMLTextAreaElement ||
      (activeElement instanceof HTMLElement && activeElement.isContentEditable)
    );
  };

  // 防抖处理
  let lastHandledTime = 0;
  const DEBOUNCE_TIME = 50;

  const handleKeydown = (e: KeyboardEvent) => {
    const now = Date.now();

    // 防抖检查
    if (now - lastHandledTime < DEBOUNCE_TIME) {
      return;
    }

    // 忽略输入框和可编辑元素
    if (isInInput()) {
      return;
    }

    const key = e.key.toLowerCase();

    if ((key === 'delete' || key === 'backspace') && state.selectedNode) {
      e.preventDefault();
      handleDelete();
      lastHandledTime = now;
      return;
    }

    // 阻止Ctrl+S的默认行为(保存)
    if (!e.ctrlKey && !e.metaKey) {
      return;
    }

    // 阻止默认行为(添加书签)
    if (['c', 'd', 's', 'v', 'x', 'y', 'z'].includes(key)) {
      e.preventDefault();
    }

    switch (key) {
      case 'c': {
        // 复制 (Ctrl+C 或 Cmd+C)
        if (state.selectedNode) {
          copy(state.selectedNode);
          lastHandledTime = now;
        }
        break;
      }

      case 'd': {
        // 复制并粘贴 (Ctrl+D 或 Cmd+D)
        if (state.selectedNode) {
          duplicate(state.selectedNode?.id);
          lastHandledTime = now;
        }
        break;
      }

      case 's': {
        // 保存 (Ctrl+S 或 Cmd+S)
        emit('save', pageSchema);
        lastHandledTime = now;
        break;
      }

      case 'v': {
        // 粘贴 (Ctrl+V 或 Cmd+V)
        paste(state.selectedNode?.id);
        lastHandledTime = now;
        break;
      }

      case 'x': {
        // 剪切 (Ctrl+X 或 Cmd+X)
        if (state.selectedNode) {
          cut(state.selectedNode);
          lastHandledTime = now;
        }
        break;
      }

      case 'y': {
        // Ctrl+Y 重做
        revoke.redo();
        lastHandledTime = now;
        break;
      }

      case 'z': {
        // 撤销/重做 (Ctrl+Z/Cmd+Z 或 Ctrl+Shift+Z/Cmd+Shift+Z)
        if (e.shiftKey) {
          revoke.redo(); // 重做
        } else {
          revoke.undo(); // 撤销
        }
        lastHandledTime = now;
        break;
      }
    }
  };

  // 清理函数
  const cleanup = () => {
    target.removeEventListener('keydown', handleKeydown, { capture: true });
  };

  // 添加事件监听
  const setTarget = (newTarget: Document | HTMLElement) => {
    cleanup();
    target = newTarget;
    target.addEventListener('keydown', handleKeydown, { capture: true });
  };

  onUnmounted(cleanup);

  return {
    cleanup,
    setTarget,
  };
}
