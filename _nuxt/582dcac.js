(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{335:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return d}));var n=r(337),o=r(1),l=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),v=Object(o.g)("v-card__text"),d=Object(o.g)("v-card__title");n.a},337:function(e,t,r){"use strict";r(10),r(6),r(9),r(11),r(8),r(12);var n=r(2),o=(r(23),r(167),r(338),r(173)),l=r(0),c=(r(107),r(340),r(175)),v=r(128),d=r(29),h=r(129),_=r(174),f=r(33),m=r(1),x=r(7);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var k=Object(x.a)(d.a,Object(h.b)(["absolute","fixed","top","bottom"]),_.a,f.a).extend({name:"v-progress-linear",directives:{intersect:v.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(e,this.isReversed?"right":"left",Object(m.f)(this.normalizedValue,"%")),Object(n.a)(e,"width",Object(m.f)(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?c.b:c.c},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(m.f)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(m.k)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},onObserve:function(e,t,r){this.isVisible=r},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),O=l.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(k,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),w=r(79);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function B(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(x.a)(O,w.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return B(B({"v-card":!0},w.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=B({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=O.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},338:function(e,t,r){var content=r(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("e23b7040",content,!0,{sourceMap:!1})},339:function(e,t,r){var n=r(15)(!1);n.push([e.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__text,.theme--light.v-card .v-card__subtitle{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__text,.theme--dark.v-card .v-card__subtitle{color:rgba(255,255,255,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;overflow-wrap:break-word;position:relative;white-space:normal}.v-card>*:first-child:not(.v-btn):not(.v-chip),.v-card>.v-card__progress+*:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>*:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12) !important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(0.25, 0.8, 0.25, 1)}.v-sheet.v-card--hover:hover,.v-sheet.v-card--hover:focus{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12)}.v-card--link{cursor:pointer}.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.2s opacity}.v-card--disabled{pointer-events:none;user-select:none}.v-card--disabled>*:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12)}',""]),e.exports=n},340:function(e,t,r){var content=r(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("cf87dc84",content,!0,{sourceMap:!1})},341:function(e,t,r){var n=r(15)(!1);n.push([e.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(0.4, 0, 0.6, 1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-rtl}.v-progress-linear__stream{animation:stream-ltr .25s infinite linear;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{animation:stream-rtl .25s infinite linear;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg, rgba(255, 255, 255, 0.25) 25%, transparent 0, transparent 50%, rgba(255, 255, 255, 0.25) 0, rgba(255, 255, 255, 0.25) 75%, transparent 0, transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{animation-name:query-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{animation-name:query-short-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short{animation-play-state:running}.v-progress-linear--visible .v-progress-linear__stream{animation-play-state:running}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}100%{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}100%{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}100%{left:-8%;right:107%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}100%{right:100%;left:-35%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}100%{right:-35%;left:100%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}100%{right:107%;left:-8%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}100%{right:-8%;left:107%}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),e.exports=n},359:function(e,t,r){var content=r(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("661d782b",content,!0,{sourceMap:!1})},364:function(e,t,r){e.exports=r.p+"img/gh-project.c70bb1b.png"},365:function(e,t,r){e.exports=r.p+"img/share-info.95f0594.png"},366:function(e,t,r){"use strict";r(359)},367:function(e,t,r){var n=r(15)(!1);n.push([e.i,"\nh2[data-v-edd41dd4] {\n  margin: 2rem auto 1rem;\n}\n",""]),e.exports=n},371:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({data:function(){return{projectBoard:r(364),shareInfo:r(365)}}}),o=(r(366),r(82)),l=r(109),c=r.n(l),v=r(224),d=r(337),h=r(335),_=r(369),f=r(136),m=r(370),x=r(330),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("プロジェクト管理")]),e._v(" "),r("v-card-text",[r("p",[e._v("\n          こんにちは。米谷がはじめてPM（プロジェクトマネージャー）をやって気がついたことをシェアします。\n          やってよかったこと、改善できることをまとめていきます。\n        ")]),e._v(" "),r("p",[e._v("まずやってよかったこと")]),e._v(" "),r("ul",[r("li",[e._v("GitHub Projects タスク共有ツール")]),e._v(" "),r("li",[e._v("フォーマッターを使う")]),e._v(" "),r("li",[e._v("バックエンドの人にモックサーバーを作ってもらった")])]),e._v(" "),r("p",[e._v("また今回の反省でもっと良くできること")]),e._v(" "),r("ul",[r("li",[e._v("フォーマッターをファイル保存時に実行する設定")]),e._v(" "),r("li",[e._v("フロントエンドとバックエンドのリポジトリは分離する")])]),e._v(" "),r("h2",[e._v("プロジェクトの進め方")]),e._v(" "),r("p",[e._v("はじめにどんなふうにプロジェクトを進めたのかレポートします。")]),e._v(" "),r("p",[e._v("\n          今回のプロジェクト（SD\n          Scope）は米谷がはじめてPMとして開発をしました。\n          島本さんと２人体制で取り組みました。\n          ２人で開発するには情報共有やタスクの振り分けが大事になってきます。\n          ４月からプロジェクトが始まりましたが、５月で一区切りつきました。\n          その間にGUIがスケジュールを遅らせることはありませんでした。\n          慌ただしい週もあったのは反省ですが、素晴らしいことだと思います！\n        ")]),e._v(" "),r("h3",[e._v("情報共有")]),e._v(" "),r("p",[e._v("\n          プロジェクトを進める中で基本的な情報があります。\n          たとえば、最新のブランチはどれか、 モニターの解像度はいくらか、\n          バックエンドの起動方法、 APIの仕様書のリンクなど。\n          主にプロジェクト固有の情報になります。\n          これらの情報を貯めておく場所として\n          "),r("a",{attrs:{href:"https://docs.github.com/ja/github/managing-your-work-on-github/about-project-boards"}},[e._v("GitHub Project Board")]),e._v("\n          を使いました。\n        ")]),e._v(" "),r("v-row",[r("v-col",[r("v-img",{attrs:{src:e.projectBoard,"max-height":"400px",contain:""}})],1),e._v(" "),r("v-col",[r("v-img",{attrs:{src:e.shareInfo,"max-height":"500px",contain:""}})],1)],1),e._v(" "),r("p",[e._v("\n          これはいわゆるカンバン形式のタスク管理ツールです。\n          実際に使ってみると１発で使い方がわかると思うので説明は特にしません。\n        ")]),e._v(" "),r("p",[e._v("GH Projectのカラムのひとつを「共有情報」に割り当てました。")]),e._v(" "),r("h3",[e._v("タスク共有")]),e._v(" "),r("p",[e._v("タスクの管理もGitHub Project Boardを使いました。 流れとしては、")]),e._v(" "),r("ul",[r("li",[e._v("\n            米谷がプロジェクト全体の\n            マネージャー（今回は廣川さん→窪田さん）からフロントのタスクを割り当てられ\n          ")]),e._v(" "),r("li",[e._v("タスクへと整理・分割して Boardに書き込む")]),e._v(" "),r("li",[e._v("作業する人はBoardにあるタスクを上から取り掛かる")])]),e._v(" "),r("p",[e._v("こんな感じです。")]),e._v(" "),r("h3",[e._v("質問しやすい環境作り")]),e._v(" "),r("p",[e._v("\n          今回は２人での開発だったので関係なかったんですが、\n          slackのチャンネルなどで質問を受ける場を作るといいと思います。\n          Yグループの全体ではなかなか書き込みにくいため、\n          専用のチャンネルを作るなど質問に特化した場所を設置したほうがいいと思います。\n        ")]),e._v(" "),r("p",[e._v("\n          自分で調べることは大事ですが、たとえば「今回のプロジェクトのファイル構成」などはいくらググっても出てきません。\n          プロジェクトについて知っている人から教えてもらう必要があります。\n        ")]),e._v(" "),r("p",[e._v("\n          また、ZeroMQのバージョンの違いによるエラーのように\n          GUI班でよくあるトラブルというのも誰かに教えてもらった方が早かったりします。\n        ")]),e._v(" "),r("h2",[e._v("フォーマッターを使う")]),e._v(" "),r("p",[e._v("\n          JavaScript,\n          TypeScriptでコードを書いていると人によってばらつきがあります。\n          インデントがスペース２個なのか４個なのか。アロー関数を書くとき\n          (element) => func なのか element => {func}なのか。\n          ばらつきがあると他の人が書いたコードが読みにくくなってしまいます。\n        ")]),e._v(" "),r("p",[e._v('\n          そこで登場するのがフォーマッターです。フォーマッターとは、\n          ルールに従ってコードを整形（format）してくれるプログラムのことです。\n          言語によって有名なフォーマッターがあります。JS, TSの場合"ESLint +\n          Prettier" という組み合わせがよく使われます。\n        ')]),e._v(" "),r("h3",[e._v("参考")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://qiita.com/soarflat/items/06377f3b96964964a65d"}},[e._v("* Prettier 入門 ～ESLintとの違いを理解して併用する～ - Qiita")])])])],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",nuxt:"",to:"/"}},[e._v(" Home ")])],1)],1)],1)],1)}),[],!1,null,"edd41dd4",null);t.default=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VCol:_.a,VImg:f.a,VRow:m.a,VSpacer:x.a})}}]);