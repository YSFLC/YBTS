(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{293:function(t,n,o){"use strict";o.r(n);o(47),o(15),o(25),o(26),o(265),o(183),o(109);var e={props:{json:{type:Object,required:!0}},methods:{save:function(){var t=JSON.stringify(this.json),n=new Blob([t],{type:"text/plain"}),link=document.createElement("a");link.href=window.URL.createObjectURL(n),link.download="isbn.json",link.click()},exportation:function(){var data="";for(var t in this.json.isbn)data+=t.toString()+","+this.json.isbn[t].issold+","+this.json.isbn[t].soldtime+"\n";var n=new Blob([data],{type:"text/plain"}),link=document.createElement("a");link.href=window.URL.createObjectURL(n),link.download="isbn.csv",link.click()}}},l=o(46),component=Object(l.a)(e,(function(){var t=this,n=t._self._c;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"box"},[t._v("\n    バージョン: "+t._s(this.json.version)),n("br"),t._v("\n    商品数: "+t._s(Object.keys(this.json.isbn).length)),n("br"),t._v("\n    エラーログ数: "+t._s(Object.keys(this.json.log).length)),n("br"),t._v(" "),n("b-tooltip",{attrs:{label:"JSON形式で保存します アプリで読み込みが可能です",position:"is-bottom"}},[n("b-button",{on:{click:t.save}},[t._v("\n        JSON形式で保存\n      ")])],1),t._v(" "),n("b-tooltip",{attrs:{label:"CSV形式で保存します Excelなどで処理できますが アプリで読み込みはできません",position:"is-bottom"}},[n("b-button",{on:{click:t.exportation}},[t._v("\n        Export CSVfile\n      ")])],1)],1)])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"hero-body box"},[n("p",{staticClass:"title is-large"},[t._v("\n      Save\n    ")]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("\n      データの保存/変換\n    ")])])}],!1,null,null,null);n.default=component.exports}}]);