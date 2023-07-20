"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[678],{66678:(e,t,n)=>{n.r(t),n.d(t,{default:()=>le});var r=n(67294),o=n(10267),a=n(51252),c=n(97975),i=n(56941),l=n(91121),u=n(14416),s=n(45697),f=n.n(s),p=n(74866),d=n(89475),b=n(44515),g=n(58298),y=n(64178);var O=n(9386),j=n(99716),m=n(41066),v=n(40923),h=n(48521);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=function(e){var t=e.initialValues,n=e.onSaveGenre,c=e.handleSubmit,i=E((0,r.useState)(!(!t||!t.is_featured)),2),l=i[0],u=i[1],s=(0,r.createRef)();(0,r.useEffect)((function(){s.current.focus()}),[]);return(0,h.jsxs)(o.Z,{className:"animated fadeIn m-3",children:[(0,h.jsx)("div",{className:"w-100",children:(0,h.jsx)("div",{className:"float-right px-3",children:(0,h.jsx)(b.Z,{name:"show_on_landing_page",checked:l,label:(0,y.PV)("books.toggle.is-featured.label"),onChange:function(){u(!l)},component:v.Z})})}),(0,h.jsx)(a.Z,{xs:12,children:(0,h.jsx)(b.Z,{name:"name",label:"genres.input.name.label",required:!0,inputRef:s,groupText:"list-alt",component:O.Z})}),(0,h.jsx)(a.Z,{xs:12,children:(0,h.jsx)(b.Z,{name:"description",label:"genres.input.description.label",component:m.Z})}),(0,h.jsx)(a.Z,{xs:12,children:(0,h.jsx)(j.Z,P({onSave:c((function(e){n(e)}))},e))})]})};S.propTypes={initialValues:f().object,onSaveGenre:f().func,handleSubmit:f().func};const D=(0,g.Z)({form:"genreForm",validate:function(e){var t={};return e.name||(t.name=(0,y.PV)("genres.input.name.validate.label")),t}})(S);var Z=n(54848);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){var t=e.addGenre,n={onSaveGenre:function(e){t(e,Z.x$.OBJ)},onCancel:e.toggleModal};return(0,h.jsx)(p.Z,C({},e,{content:(0,h.jsx)(D,C({},n))}))};N.propTypes={addGenre:f().func,toggleModal:f().func};const M=(0,u.$j)(null,{addGenre:d._N})(N);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e){var t=e.genre,n=e.editGenre,r={onSaveGenre:function(e){n(t.id,e)},onCancel:e.toggleModal,initialValues:{name:t.name,description:t.description,is_featured:t.show_on_landing_page}};return(0,h.jsx)(p.Z,_({},e,{content:(0,h.jsx)(D,_({},r))}))};T.propTypes={genre:f().object,editGenre:f().func,toggleModal:f().func};const $=(0,u.$j)(null,{editGenre:d.nI})(T);var V=n(49847);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(e){var t=e.genreId,n=e.deleteGenre,r=e.toggleModal,o=e.totalRecord;return(0,h.jsx)(p.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{actions:(0,h.jsx)(V.Z,{onDelete:function(){n(t,Z.x$.OBJ,o)},onCancel:r})}))};L.propTypes={genreId:f().number,deleteGenre:f().func,toggleModal:f().func};const W=(0,u.$j)(null,{deleteGenre:d.LM})(L);var K=n(40887);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(e){var t=e.genre,n=e.isCreate,r=e.isEdit,o=e.isDelete,a=e.totalRecord,c={genre:t},i={genreId:t?t.id:null,totalRecord:a},l={modalTitle:(0,y.OH)(n,r,o,"genres.input.new-btn.label","genres.modal.edit.title","genres.modal.delete.title"),NewComponent:M,EditComponent:$,DeleteComponent:W,deleteKey:t?t.name:null,editConfig:c,delConfig:i,props:e};return(0,h.jsx)(K.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l))};J.propTypes={genre:f().object,isCreate:f().bool,isEdit:f().bool,isDelete:f().bool};const q=J;var H=n(97089),U=n(70212),X=n(4838),Y=n(30475),ee=n(44007),te=n(44411);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ie=function(e){var t=e.genres,n=e.fetchGenres,r=e.toggleModal,u=e.isLoading,s=e.totalRecord,f=ae((0,ee.h7)(),5),p=f[0],d=f[1],b=f[2],g=f[3],O=f[4],j={genre:g,isCreate:p,isEdit:d,isDelete:b,toggleModal:r,totalRecord:s},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];O(e,t,n),r()},v=[{name:(0,y.PV)("react-data-table.name.column"),selector:"name",sortable:!0,minWidth:"400px"},{name:(0,y.PV)("react-data-table.action.column"),selector:"id",right:!0,cell:function(e){return(0,h.jsx)(U.Z,{onOpenModal:m,item:e})},ignoreRowClick:!0,allowOverflow:!0,button:!0}];return(0,h.jsxs)(o.Z,{className:"animated fadeIn",children:[(0,h.jsxs)(a.Z,{sm:12,className:"mb-2",children:[(0,h.jsx)(X.Z,{}),(0,h.jsx)(H.Z,{title:"Genres"}),(0,h.jsx)("h5",{className:"page-heading",children:(0,y.PV)("genres.title")}),(0,h.jsx)("div",{className:"d-flex justify-content-end",children:(0,h.jsx)(c.Z,{onClick:function(){return m(!1)},size:"md",color:"primary ml-2 text-white",children:(0,y.PV)("genres.input.new-btn.label")})})]}),(0,h.jsx)(a.Z,{sm:12,children:(0,h.jsx)("div",{className:"sticky-table-container",children:(0,h.jsx)(i.Z,{children:(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(Y.Z,{items:t,columns:v,loading:u,emptyStateMessageId:"genres.empty-state.title",emptyNotFoundStateMessageId:"genres.not-found.empty-state.title",totalRows:s,onOpenModal:O,onChange:function(e){n(e,Z.x$.OBJ,!0)},icon:Z.qv.GENRES}),(0,h.jsx)(q,re({},j))]})})})})]})};ie.propTypes={genres:f().array,totalRecord:f().number,isLoading:f().bool,fetchGenres:f().func,toggleModal:f().func};const le=(0,u.$j)((function(e){return{genres:e.genres,isLoading:e.isLoading,totalRecord:e.totalRecord}}),{fetchGenres:d.BQ,toggleModal:te.$})(ie)},89475:(e,t,n)=>{n.d(t,{BQ:()=>j,_N:()=>m,nI:()=>v,LM:()=>h});var r=n(87757),o=n.n(r),a=n(65551),c=n(79352),i=n(80677),l=n(76374),u=n(44411),s=n(30193),f=n(35248),p=n(96486),d=n.n(p),b=n(64178),g=n(54848);function y(e,t,n,r,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,o)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){y(a,r,o,c,i,"next",e)}function i(e){y(a,r,o,c,i,"throw",e)}c(void 0)}))}}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var n=O(o().mark((function n(r){var u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t&&r((0,i.K)(!0)),u=g.BC.GENRE,!d().isEmpty(e)&&(e.limit||e.order_By||e.search)&&(u+=(0,s.Z)(e)),n.next=5,c.Z.get(u).then((function(e){r({type:a.kn.FETCH_GENRES,payload:e.data.data}),r((0,f.Q)(e.data.totalRecords)),t&&r((0,i.K)(!1))})).catch((function(e){var n=e.response;r((0,l.fz)({text:n.data.message,type:a.rW.ERROR})),t&&r((0,i.K)(!1))}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},m=function(e,t){return function(){var n=O(o().mark((function n(r){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.post(g.BC.GENRE,e).then((function(e){r({type:a.kn.ADD_GENRE,payload:e.data.data}),r((0,l.fz)({text:(0,b.PV)("genres.success.create.message")})),r((0,u.$)()),r(j(t))})).catch((function(e){var t=e.response;r((0,l.fz)({text:t.data.message,type:a.rW.ERROR}))}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(e,t){return function(){var n=O(o().mark((function n(r){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.put(g.BC.GENRE+"/"+e,t).then((function(e){r({type:a.kn.EDIT_GENRE,payload:e.data.data}),r((0,l.fz)({text:(0,b.PV)("genres.success.edit.message")})),r((0,u.$)())})).catch((function(e){var t=e.response;r((0,l.fz)({text:t.data.message,type:a.rW.ERROR}))}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(e){var t=arguments.length>2?arguments[2]:void 0;return function(){var n=O(o().mark((function n(r){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.delete(g.BC.GENRE+"/"+e).then((function(){r({type:a.kn.DELETE_GENRE,payload:e}),r((0,f.Q)(t-1)),r((0,l.fz)({text:(0,b.PV)("genres.success.delete.message")})),r((0,u.$)())})).catch((function(e){var t=e.response;r((0,l.fz)({text:t.data.message,type:a.rW.ERROR}))}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}}]);