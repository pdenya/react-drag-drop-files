import{jsx as n,jsxs as e,Fragment as r}from"react/jsx-runtime";import t,{css as i}from"styled-components";import{useState as o,useCallback as a,useEffect as l,useRef as d}from"react";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var p=function(){return p=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},p.apply(this,arguments)};function s(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var c,u,f,v,h,x=i(c||(c=s(["\n  display: flex;\n  align-items: center;\n  min-width: 322px;\n  max-width: 508px;\n  height: 48px;\n  border: dashed 2px ",";\n  padding: 8px 16px 8px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  flex-grow: 0;\n"],["\n  display: flex;\n  align-items: center;\n  min-width: 322px;\n  max-width: 508px;\n  height: 48px;\n  border: dashed 2px ",";\n  padding: 8px 16px 8px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  flex-grow: 0;\n"])),"#0658c2"),g=t.label(u||(u=s(["\n  position: relative;\n  ",";\n  &.is-disabled {\n    border: dashed 2px ",";\n    cursor: no-drop;\n    svg {\n      fill: ",";\n      color: ",";\n      path {\n        fill: ",";\n        color: ",";\n      }\n    }\n  }\n  & > input {\n    display: none;\n  }\n"],["\n  position: relative;\n  ",";\n  &.is-disabled {\n    border: dashed 2px ",";\n    cursor: no-drop;\n    svg {\n      fill: ",";\n      color: ",";\n      path {\n        fill: ",";\n        color: ",";\n      }\n    }\n  }\n  & > input {\n    display: none;\n  }\n"])),(function(n){return n.overRide?"":x}),"#666","#666","#666","#666","#666"),m=t.div(f||(f=s(["\n  border: dashed 2px ",";\n  border-radius: 5px;\n  background-color: ",";\n  opacity: 0.9;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 999;\n  & > span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n"],["\n  border: dashed 2px ",";\n  border-radius: 5px;\n  background-color: ",";\n  opacity: 0.9;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 999;\n  & > span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n"])),"#666","#999"),b=t.div(v||(v=s(["\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  & > span {\n    font-size: 12px;\n    color: ",";\n  }\n  .file-types {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 100px;\n  }\n"],["\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  & > span {\n    font-size: 12px;\n    color: ",";\n  }\n  .file-types {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 100px;\n  }\n"])),(function(n){return n.error?"red":"#666"})),w=t.span(h||(h=s(["\n  font-size: 14px;\n  color: ",";\n  span {\n    text-decoration: underline;\n  }\n"],["\n  font-size: 14px;\n  color: ",";\n  span {\n    text-decoration: underline;\n  }\n"])),"#666"),y=function(n){return n/1e3/1e3},z=function(n){return void 0===n?"":n.map((function(n){return".".concat(n.toLowerCase())})).join(",")};function L(e){var r=e.types,t=e.minSize,i=e.maxSize;if(r){var o=r.toString(),a="";return i&&(a+="size >= ".concat(i,", ")),t&&(a+="size <= ".concat(t,", ")),n("span",p({title:"".concat(a,"types: ").concat(o),className:"file-types"},{children:o}),void 0)}return null}function C(){return e("svg",p({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[n("path",{d:"M5.33317 6.66667H22.6665V16H25.3332V6.66667C25.3332 5.196 24.1372 4 22.6665 4H5.33317C3.8625 4 2.6665 5.196 2.6665 6.66667V22.6667C2.6665 24.1373 3.8625 25.3333 5.33317 25.3333H15.9998V22.6667H5.33317V6.66667Z",fill:"#0658C2"},void 0),n("path",{d:"M10.6665 14.6667L6.6665 20H21.3332L15.9998 12L11.9998 17.3333L10.6665 14.6667Z",fill:"#0658C2"},void 0),n("path",{d:"M25.3332 18.6667H22.6665V22.6667H18.6665V25.3333H22.6665V29.3333H25.3332V25.3333H29.3332V22.6667H25.3332V18.6667Z",fill:"#0658C2"},void 0)]}),void 0)}var H=0;var E=function(t,i,o,a,l){return o?n("span",{children:"File type/size error, Hovered on types!"},void 0):n(w,{children:a?n("span",{children:"Upload disabled"},void 0):t||i?e(r,{children:[n("span",{children:"Uploaded Successfully!."},void 0)," Upload another?"]},void 0):n(r,{children:e(r,l?{children:[n("span",{children:l.split(" ")[0]},void 0)," ",l.substr(l.indexOf(" ")+1)]}:{children:[n("span",{children:"Upload"},void 0)," or drop a file right here"]},void 0)},void 0)},void 0)},S=function(t){var i=t.name,s=t.hoverTitle,c=t.types,u=t.handleChange,f=t.classes,v=t.children,h=t.maxSize,x=t.minSize,w=t.fileOrFiles,S=t.onSizeError,V=t.onTypeError,D=t.onSelect,P=t.onDrop,j=t.disabled,k=t.label,F=t.multiple,O=t.onDraggingStateChange,R=d(null),T=d(null),U=o(!1),M=U[0],Z=U[1],N=o(null),X=N[0],Y=N[1],B=o(!1),q=B[0],A=B[1],G=function(n){return c&&!function(n,e){var r=n.name.split(".").pop();return e.map((function(n){return n.toLowerCase()})).includes(r.toLowerCase())}(n,c)?(A(!0),V&&V("File type is not supported"),!1):h&&y(n.size)>h?(A(!0),S&&S("File size is too big"),!1):!(x&&y(n.size)<x)||(A(!0),S&&S("File size is too small"),!1)},I=function(n){var e=!1;if(n){if(n instanceof File)e=!G(n);else for(var r=0;r<n.length;r++){var t=n[r];e=!G(t)||e}return!e&&(u&&u(n),Y(n),Z(!0),A(!1),!0)}return!1},J=function(n){var e=n.labelRef,r=n.inputRef,t=n.multiple,i=n.handleChanges,d=n.onDrop,p=o(!1),s=p[0],c=p[1],u=a((function(){r.current.click()}),[r]),f=a((function(n){n.preventDefault(),n.stopPropagation(),H++,n.dataTransfer.items&&0!==n.dataTransfer.items.length&&c(!0)}),[]),v=a((function(n){n.preventDefault(),n.stopPropagation(),--H>0||c(!1)}),[]),h=a((function(n){n.preventDefault(),n.stopPropagation()}),[]),x=a((function(n){n.preventDefault(),n.stopPropagation(),c(!1),H=0;var e=n.dataTransfer.files;if(e&&e.length>0){var r=t?e:e[0],o=i(r);d&&o&&d(r)}}),[i]);return l((function(){var n=e.current;return n.addEventListener("click",u),n.addEventListener("dragenter",f),n.addEventListener("dragleave",v),n.addEventListener("dragover",h),n.addEventListener("drop",x),function(){n.removeEventListener("click",u),n.removeEventListener("dragenter",f),n.removeEventListener("dragleave",v),n.removeEventListener("dragover",h),n.removeEventListener("drop",x)}}),[u,f,v,h,x,e]),s}({labelRef:R,inputRef:T,multiple:F,handleChanges:I,onDrop:P});return l((function(){null==O||O(J)}),[J]),l((function(){w?(Z(!0),Y(w)):(T.current&&(T.current.value=""),Z(!1),Y(null))}),[w]),e(g,p({overRide:v,className:"".concat(f||""," ").concat(j?"is-disabled":""),ref:R,htmlFor:i,onClick:function(n){n.preventDefault(),n.stopPropagation()}},{children:[n("input",{onClick:function(n){n.stopPropagation(),T&&T.current&&T.current.click()},onChange:function(n){var e=n.target.files,r=F?e:e[0],t=I(r);D&&t&&D(r)},accept:z(c),ref:T,type:"file",name:i,disabled:j,multiple:F},void 0),J&&n(m,{children:n("span",{children:s||"Drop Here"},void 0)},void 0),!v&&e(r,{children:[n(C,{},void 0),e(b,p({error:q},{children:[E(X,M,q,j,k),n(L,{types:c,minSize:x,maxSize:h},void 0)]}),void 0)]},void 0),v]}),void 0)};export{S as FileUploader};
