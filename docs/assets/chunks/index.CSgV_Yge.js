import{i as f,B as d,C as u,D as m,F as p,G as x,H as y,I as C,p as g,j as v}from"../guide_components_EBuilder.md.C4lLO-WR.js";import{g as w}from"./index.Dmr5GdgH.js";import{m as l,h as n,am as b,j as c,N as h,aq as T}from"./framework.Bkcw4pAp.js";const j=f([String,Object,Function]),A={Close:g},z={Close:g,SuccessFilled:d,InfoFilled:p,WarningFilled:u,CircleCloseFilled:m},K={success:d,warning:u,error:m,info:p},E={validating:x,success:y,error:C};var D={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const F=e=>(t,a)=>I(t,a,l(e)),I=(e,t,a)=>w(a,e,e).replace(/\{(\w+)\}/g,(r,s)=>{var o;return`${(o=t==null?void 0:t[s])!=null?o:`{${s}}`}`}),N=e=>{const t=n(()=>l(e).name),a=b(e)?e:c(e);return{lang:t,locale:a,t:F(e)}},S=Symbol("localeContextKey"),J=e=>{const t=e||h(S,c());return N(n(()=>t.value||D))},i=c(0),k=2e3,_=Symbol("zIndexContextKey"),O=e=>{const t=e||(T()?h(_,void 0):void 0),a=n(()=>{const o=l(t);return v(o)?o:k}),r=n(()=>a.value+i.value);return{initialZIndex:a,currentZIndex:r,nextZIndex:()=>(i.value++,r.value)}};export{A as C,K as T,E as V,O as a,z as b,N as c,k as d,F as e,j as i,S as l,I as t,J as u,_ as z};
