(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4,5,6,7,8,9,10,11,12],{255:function(t,n,e){t.exports=e.p+"img/logo.8371196.png"},256:function(t,n,e){"use strict";e.r(n);var o=e(257),r=e.n(o);for(var l in o)["default"].indexOf(l)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(l);n.default=r.a},257:function(t,n){},258:function(t,n,e){"use strict";e.r(n);var o=e(259),r=e.n(o);for(var l in o)["default"].indexOf(l)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(l);n.default=r.a},259:function(t,n){},260:function(t,n,e){var content=e(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(106).default)("6b148018",content,!0,{sourceMap:!1})},261:function(t,n,e){var content=e(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(106).default)("1205b857",content,!0,{sourceMap:!1})},263:function(t,n,e){"use strict";e.r(n);e(266);var o=e(267),r={components:{apexchart:e.n(o).a},props:{json:{type:void 0,required:!0}},data:function(){return{series:void 0,options:{options:{zoom:{enabled:!0}},tooltip:{x:{format:"yyyy/mm/dd HH:mm:ss"}},xaxis:{type:"datetime",labels:{datetimeUTC:!1}},yaxis:{type:"numeric",labels:{formatter:function(t){return t.toFixed(0)}},title:{text:"売却冊数"}},fill:{opacity:.5}}}},created:function(){var t={};for(var i in this.json.isbn)this.json.isbn[i].issold&&(this.json.isbn[i].soldtime in t?t[this.json.isbn[i].soldtime]++:t[this.json.isbn[i].soldtime]=1);var datalist=[];for(var n in t)datalist.push([1e3*n,t[n]]);this.series=[{data:datalist}]}},l=e(45),component=Object(l.a)(r,(function(){var t=this;return(0,t._self._c)("apexchart",{attrs:{type:"area",height:"320",options:t.options,series:t.series}})}),[],!1,null,null,null);n.default=component.exports},264:function(t,n,e){"use strict";e(260)},265:function(t,n,e){var o=e(105)(!1);o.push([t.i,".container[data-v-14a18c1e]{min-height:100vh;top:0}",""]),t.exports=o},268:function(t,n,e){"use strict";var o=e(2),r=e(64).findIndex,l=e(107),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},269:function(t,n,e){"use strict";e(261)},270:function(t,n,e){var o=e(105)(!1);o.push([t.i,".fullheight[data-v-1d52fd9d]{min-height:95vh}",""]),t.exports=o},271:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}));var o=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},r=[function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",[n("h1",[t._v("Usage")])])}]},272:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}));var o=function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"tile is-ancestor"},[n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-child box is-full"},[n("p",{staticClass:"title"},[t._v("\n          Developers\n        ")]),t._v(" "),n("div",{staticClass:"content"},[n("ul",[n("li",[t._v("Y.Narita "),n("b-tag",{attrs:{icon:"code-tags"}},[t._v("Dev")])],1),t._v(" "),n("li",[t._v("\n              S.Sasaki "),n("b-tag",{attrs:{icon:"code-tags"}},[t._v("Dev")]),n("b-tag",{attrs:{icon:"file-document-outline"}},[t._v("Doc")]),n("br")],1),t._v(" "),n("li",[t._v("J.Otani "),n("b-tag",{attrs:{icon:"code-tags"}},[t._v("Dev")]),n("br")],1),t._v(" "),n("li",[t._v("L.Kono "),n("b-tag",{attrs:{icon:"code-tags"}},[t._v("Dev")]),n("br")],1),t._v(" "),n("li",[t._v("\n              K.Katayama "),n("b-tag",{attrs:{icon:"monitor-screenshot"}},[t._v("UI/UX")]),n("b-tag",{attrs:{icon:"file-document-outline"}},[t._v("Doc")]),n("br")],1),t._v(" "),n("li",[t._v("\n              Y.Murakami "),n("b-tag",{attrs:{icon:"palette-outline"}},[t._v("Logo")]),n("b-tag",{attrs:{icon:"monitor-screenshot"}},[t._v("UI/UX")]),n("br")],1),t._v(" "),n("li",[t._v("\n              I.Shiotsuki "),n("b-tag",{attrs:{icon:"palette-outline"}},[t._v("Logo")]),n("b-tag",{attrs:{icon:"monitor-screenshot"}},[t._v("UI/UX")]),n("br")],1),t._v(" "),n("li",[t._v("\n              M.Takano "),n("b-tag",{attrs:{icon:"monitor-screenshot"}},[t._v("UI/UX")]),n("br")],1),t._v(" "),n("li",[t._v("\n              N.Kasami "),n("b-tag",{attrs:{icon:"monitor-screenshot"}},[t._v("UI/UX")]),n("b-tag",{attrs:{icon:"file-document-outline"}},[t._v("Doc")]),n("br")],1),t._v(" "),n("li",[t._v("K.Inoue "),n("b-tag",{attrs:{icon:"palette-outline"}},[t._v("Logo")]),n("br")],1),t._v(" "),t._v("\n\n            Thank you for developing this."),n("br")])])])])]),t._v(" "),t._m(1)])},r=[function(){var t=this,n=t._self._c;t._self._setupProxy;return n("section",{staticClass:"section"},[n("h1",{staticClass:"title"},[t._v("\n      About\n    ")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("\n      Developer, Version, Framework\n    ")])])},function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"tile is-ancestor"},[n("div",{staticClass:"tile"},[n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-child notification--white box is-primary"},[n("p",{staticClass:"title"},[t._v("\n            Version\n          ")]),t._v(" "),n("p",[t._v("2021/7/20 Version1.0.0 クーポン以外の実装")]),t._v(" "),n("p",[t._v("2022/3/30 Version1.1.0 クーポンの実装、Dashbordの改良")]),t._v(" "),n("p",[t._v("\n            2022/6/2 Version1.2.0\n            Saveページにエクスポート機能の実装、ISBNTableにチェックボックスの実装\n          ")])])]),t._v(" "),n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-child notification--white box is-link"},[n("p",{staticClass:"title"},[t._v("\n            What we used\n          ")]),t._v(" "),n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[t._v("Nuxt.js")]),t._v(" "),n("a",{attrs:{href:"https://buefy.org",target:"_blank",rel:"noopener"}},[t._v("Buefy")])])])])])}]},274:function(t,n,e){var content=e(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(106).default)("472a8d68",content,!0,{sourceMap:!1})},275:function(t,n,e){"use strict";e.r(n);var o=e(271),r=e(256);for(var l in r)["default"].indexOf(l)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(l);var c=e(45),component=Object(c.a)(r.default,o.a,o.b,!1,null,null,null);n.default=component.exports},276:function(t,n,e){"use strict";e.r(n);var o=e(272),r=e(258);for(var l in r)["default"].indexOf(l)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(l);var c=e(45),component=Object(c.a)(r.default,o.a,o.b,!1,null,"71072da8",null);n.default=component.exports},278:function(t,n,e){"use strict";e.r(n);var o={props:{json:{type:void 0,required:!0}},data:function(){return{activepane:5}},methods:{setActivePane:function(t){this.activepane=t,this.$emit("changePane",this.activepane)}}},r=(e(264),e(45)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"box container"},[n("b-menu",[n("img",{attrs:{src:e(255),width:"256",height:"256"}}),t._v(" "),n("b-menu-list",{attrs:{label:"General"}},[n("b-menu-item",{attrs:{icon:"view-dashboard-variant-outline",label:"DashBoard",disabled:null==t.json,active:0===t.activepane},on:{click:function(n){return t.setActivePane(0)}}}),t._v(" "),n("b-menu-item",{attrs:{icon:"book-open-blank-variant",label:"Sell",disabled:null==t.json,active:1===t.activepane},on:{click:function(n){return t.setActivePane(1)}}})],1),t._v(" "),n("b-menu-list",{attrs:{label:"Tool"}},[n("b-menu-item",{attrs:{icon:"file-refresh-outline",label:"Convert",active:2===t.activepane},on:{click:function(n){return t.setActivePane(2)}}}),t._v(" "),n("b-menu-item",{attrs:{icon:"arrow-up-bold-circle-outline",label:"Load",active:3===t.activepane},on:{click:function(n){return t.setActivePane(3)}}}),t._v(" "),n("b-menu-item",{attrs:{icon:"download",label:"Save",disabled:null==t.json,active:4===t.activepane},on:{click:function(n){return t.setActivePane(4)}}})],1),t._v(" "),n("b-menu-list",{attrs:{label:"Others"}},[n("b-menu-item",{attrs:{icon:"help-circle-outline",label:"Usage",active:5===t.activepane},on:{click:function(n){return t.setActivePane(5)}}}),t._v(" "),n("b-menu-item",{attrs:{icon:"information-outline",label:"About",active:6===t.activepane},on:{click:function(n){return t.setActivePane(6)}}})],1)],1)],1)}),[],!1,null,"14a18c1e",null);n.default=component.exports},279:function(t,n,e){"use strict";e.r(n);var o={props:{json:{type:void 0,required:!0}},data:function(){return{isbntable:Object}},created:function(){for(var i in this.isbntable=[],this.json.isbn)this.isbntable.push({isbn:i,issold:this.json.isbn[i].issold,soldtime:this.json.isbn[i].soldtime})}},r=e(45),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",[n("EarningGraph",{attrs:{json:t.json}}),t._v(" "),n("b-table",{attrs:{data:t.isbntable,focusable:"",paginated:"","per-page":"10"}},[n("b-table-column",{attrs:{field:"isbn",label:"ISBN",sortable:""},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n      "+t._s(n.row.isbn)+"\n    ")]}}])}),t._v(" "),n("b-table-column",{attrs:{field:"issold",label:"売却",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.issold?n("span",{staticClass:"tag is-success"},[t._v("\n        売却済\n      ")]):n("span",{staticClass:"tag is-danger"},[t._v("\n        未売却\n      ")])]}}])}),t._v(" "),n("b-table-column",{attrs:{field:"soldtime",label:"時刻",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.issold?n("span",[t._v("\n        "+t._s(new Date(1e3*e.row.soldtime).toLocaleDateString()+" "+new Date(1e3*e.row.soldtime).toLocaleTimeString())+"\n      ")]):n("span",{staticClass:"tag is-danger"},[t._v("\n        データなし\n      ")])]}}])})],1)],1)}),[],!1,null,"267aaf96",null);n.default=component.exports;installComponents(component,{EarningGraph:e(263).default})},280:function(t,n,e){"use strict";e.r(n);e(14),e(37),e(183),e(268);var o={props:{json:{type:Object,required:!0}},data:function(){return{inputisbn:null,couponnum:0,sellisbn:[],checkboxPosition:"left",checkedRows:[],columns:[{field:"id",label:"ID",width:"40"},{field:"isbn",label:"ISBN"}]}},methods:{addISBN:function(){var t=this;null===this.json.isbn?(this.$emit("addlog","E-000",null),this.$buefy.toast.open({message:"データがインポートされていません",type:"is-danger"})):!function(){for(var i=0;i<t.sellisbn.length;i++)if(t.sellisbn[i].isbn===t.inputisbn)return!0;return!1}()?t.inputisbn in t.json.isbn?t.json.isbn[t.inputisbn].issold?(this.$emit("addlog","E-003",this.inputisbn),this.$buefy.toast.open({message:this.inputisbn+" は既に売れています",type:"is-danger"})):(this.sellisbn.push({id:this.sellisbn.length,isbn:this.inputisbn}),this.inputisbn=null):(this.$emit("addlog","E-002",this.inputisbn),this.$buefy.toast.open({message:this.inputisbn+" なんて本は存在しません",type:"is-danger"})):(this.$emit("addlog","E-001",this.inputisbn),this.$buefy.toast.open({message:this.inputisbn+" は既に追加されています",type:"is-danger"}))},removeCheckedISBN:function(){var t=this;this.checkedRows.forEach((function(n){t.sellisbn.splice(t.sellisbn.findIndex((function(t){return t.id===n.id})),1)}))},sell:function(){0===this.sellisbn.length?(this.$emit("addlog","E-004",this.sellisbn),this.$buefy.toast.open({message:"ISBNが入力されていません",type:"is-danger"})):this.sellisbn.length<this.couponnum?(this.$emit("addlog","E-005",this.couponnum),this.$emit("addlog","E-006",this.sellisbn),this.$buefy.toast.open({message:"クーポンは "+this.couponnum+"枚で 本の数 "+this.sellisbn.length+" を超えています",type:"is-danger"})):(this.$emit("sell",this.sellisbn),this.$emit("addCoupon",this.couponnum,this.sellisbn),this.$buefy.toast.open({message:this.sellisbn.length+" 冊の本を売却しました"}),this.sellisbn.splice(0))}}},r=(e(269),e(45)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"fullheight"},[n("b-field",{attrs:{message:"ISBNを入力してください"}},[n("b-input",{attrs:{placeholder:"ISBN"},model:{value:t.inputisbn,callback:function(n){t.inputisbn=n},expression:"inputisbn"}}),t._v(" "),n("b-button",{attrs:{type:"is-primary",label:"追加"},on:{click:t.addISBN}})],1),t._v(" "),n("b-table",{attrs:{data:t.sellisbn,columns:t.columns,"checked-rows":t.checkedRows,checkable:""},on:{"update:checkedRows":function(n){t.checkedRows=n},"update:checked-rows":function(n){t.checkedRows=n}},scopedSlots:t._u([{key:"empty",fn:function(){return[n("div",{staticClass:"has-text-centered"},[t._v("\n        まだ入力されていません\n      ")])]},proxy:!0}])}),t._v(" "),n("b-field",{attrs:{message:"クーポンの数を入力してください"}},[n("b-numberinput",{attrs:{min:"0",placeholder:"0","controls-position":"compact"},model:{value:t.couponnum,callback:function(n){t.couponnum=n},expression:"couponnum"}})],1),t._v(" "),n("b-button",{attrs:{type:"is-info",label:"すべて売却"},on:{click:t.sell}}),t._v(" "),n("b-button",{attrs:{type:"is-danger",label:"選択されたものを取り消し"},on:{click:t.removeCheckedISBN}})],1)}),[],!1,null,"1d52fd9d",null);n.default=component.exports},281:function(t,n,e){"use strict";e.r(n);e(14),e(25),e(26),e(262),e(181),e(27),e(182),e(46),e(36),e(47),e(30),e(48),e(49);function o(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){d=!0,l=t},f:function(){try{c||null==e.return||e.return()}finally{if(d)throw l}}}}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var l={data:function(){return{isbntabledata:""}},methods:{convert:function(){var t,data={version:"2.0.0",isbn:{},union:{},log:{}},n=o(this.isbntabledata.split("\n"));try{for(n.s();!(t=n.n()).done;){var i=t.value;""!==i&&(i in data.isbn?this.$buefy.notification.open({message:"ISBN "+i+" が重複していました",position:"is-bottom-right",type:"is-danger",hasIcon:!0}):data.isbn[i]={issold:!1,soldtime:null})}}catch(t){n.e(t)}finally{n.f()}var e=JSON.stringify(data),r=new Blob([e],{type:"application/json"}),link=document.createElement("a");link.href=window.URL.createObjectURL(r),link.download="isbn.json",link.click()}}},c=e(45),component=Object(c.a)(l,(function(){var t=this,n=t._self._c;return n("div",[n("b-field",{attrs:{label:"ISBNを改行区切りで入力してください"}},[n("b-input",{attrs:{type:"textarea"},model:{value:t.isbntabledata,callback:function(n){t.isbntabledata=n},expression:"isbntabledata"}})],1),t._v(" "),n("b-button",{attrs:{disabled:0===t.isbntabledata.length},on:{click:function(n){return t.convert()}}},[t._v("\n    保存\n  ")])],1)}),[],!1,null,"e1bbc492",null);n.default=component.exports},282:function(t,n,e){"use strict";e.r(n);e(36),e(50);var o={data:function(){return{file:void 0}},methods:{read:function(){var t=this,n=new FileReader;n.onload=function(){var e=JSON.parse(n.result);"2.0.0"===e.version?t.$buefy.toast.open({message:"本 "+Object.keys(e.isbn).length+" 冊を正常にインポートしました"}):t.$buefy.toast.open({message:"非サポートのバージョンですが、本 "+Object.keys(e.isbn).length+" 冊をインポートしました",type:"is-danger"}),t.$emit("jsondata",JSON.parse(n.result))},n.readAsText(this.file)}}},r=e(45),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("section",[n("b-field",[n("b-upload",{attrs:{"drag-drop":""},model:{value:t.file,callback:function(n){t.file=n},expression:"file"}},[n("section",{staticClass:"section"},[n("div",{staticClass:"content has-text-centered"},[n("p",[n("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),t._v(" "),void 0===t.file?n("p",[t._v("\n            データをドラッグ&ドロップ\n          ")]):n("p",[t._v("\n            "+t._s(t.file.name)+"\n            "+t._s(t.file.size)+"byte\n          ")])])])])],1),t._v(" "),n("b-button",{attrs:{type:"is-info",label:"読み込み",disabled:void 0===t.file},on:{click:t.read}})],1)}),[],!1,null,"2630d04a",null);n.default=component.exports},283:function(t,n,e){"use strict";e.r(n);e(14),e(25),e(26),e(262),e(181),e(108);var o={props:{json:{type:Object,required:!0}},methods:{save:function(){var t=JSON.stringify(this.json),n=new Blob([t],{type:"text/plain"}),link=document.createElement("a");link.href=window.URL.createObjectURL(n),link.download="isbn.json",link.click()},exportation:function(){var data="";for(var t in this.json.isbn)data+=t.toString()+","+this.json.isbn[t].issold+","+this.json.isbn[t].soldtime+"\n";var n=new Blob([data],{type:"text/plain"}),link=document.createElement("a");link.href=window.URL.createObjectURL(n),link.download="isbn.csv",link.click()}}},r=e(45),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",[n("b-button",{on:{click:t.save}},[t._v("\n    Save json\n  ")]),t._v(" "),n("b-button",{on:{click:t.exportation}},[t._v("\n    Export CSVfile\n  ")])],1)}),[],!1,null,null,null);n.default=component.exports},286:function(t,n,e){"use strict";e(274)},287:function(t,n,e){var o=e(105)(!1);o.push([t.i,".container[data-v-abbdb1a4]{min-width:100%;min-height:100%;margin:0;display:flex}.main[data-v-abbdb1a4]{padding-left:300px;width:100%;margin:32px}.sidebar[data-v-abbdb1a4]{width:300px;height:100%;position:fixed}.v-enter[data-v-abbdb1a4],.v-leave-active[data-v-abbdb1a4],.v-leave-to[data-v-abbdb1a4]{transition:opacity .1s}.v-enter[data-v-abbdb1a4],.v-leave-to[data-v-abbdb1a4]{opacity:0}",""]),t.exports=o},296:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{activepane:5,json:void 0}},methods:{getPane:function(input){this.activepane=input},getJsonData:function(t){this.json=t},sell:function(t){for(var n=parseInt((new Date).getTime()/1e3),i=0;i<t.length;i++)this.json.isbn[t[i].isbn].issold=!0,this.json.isbn[t[i].isbn].soldtime=n},addCoupon:function(t,n){var e=parseInt((new Date).getTime()/1e3);this.json.union[e]={},this.json.union[e].couponnum=t,this.json.union[e].sellisbn=[];for(var i=0;i<n.length;i++)this.json.union[e].sellisbn.push(n[i].isbn)},addlog:function(t,n){var e=parseInt((new Date).getTime()/1e3);this.json.log[e]={},this.json.log[e].logtype=t,this.json.log[e].comment=n}}},r=(e(286),e(45)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"container"},[n("div",{staticClass:"sidebar"},[n("SideBar",{attrs:{json:t.json},on:{changePane:t.getPane}})],1),t._v(" "),n("div",{staticClass:"main"},[n("transition",{attrs:{mode:"out-in"}},[0===t.activepane?n("DashBoard",{attrs:{json:t.json}}):t._e(),t._v(" "),1===t.activepane?n("Sell",{attrs:{json:t.json},on:{sell:t.sell,addCoupon:t.addCoupon,addlog:t.addlog}}):t._e(),t._v(" "),2===t.activepane?n("Convert"):t._e(),t._v(" "),3===t.activepane?n("Load",{on:{jsondata:t.getJsonData}}):t._e(),t._v(" "),4===t.activepane?n("Save",{attrs:{json:t.json}}):t._e(),t._v(" "),5===t.activepane?n("Usage"):t._e(),t._v(" "),6===t.activepane?n("About"):t._e()],1)],1)])}),[],!1,null,"abbdb1a4",null);n.default=component.exports;installComponents(component,{SideBar:e(278).default,DashBoard:e(279).default,Sell:e(280).default,Convert:e(281).default,Load:e(282).default,Save:e(283).default,Usage:e(275).default,About:e(276).default})}}]);