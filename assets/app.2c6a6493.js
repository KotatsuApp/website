import{V as G,x as J,Q as se,a4 as ne,M as R,j,h as I,g as y,a2 as oe,Z as re,d as m,a5 as le,o as l,c as i,k as c,F as T,D as M,l as u,r as C,t as v,e as p,_ as b,b as F,w,a as q,n as B,I as ce,J as ie,H as h,p as N,m as W,u as S,K as ue,f as de,y as U,s as H,a6 as _e,a7 as pe,a8 as he,a9 as me,aa as fe,ab as ge,ac as ve,ad as be,ae as ye,af as $e,ag as we,ah as ke,ai as Te,aj as Se}from"./chunks/framework.43b9ffd8.js";import{n as xe,u as Le,V,_ as z,t as Q,b as Ee,c as X}from"./chunks/theme.47d5c5be.js";var E=function(e){if(typeof document>"u")return 0;if(document.body&&(!document.readyState||document.readyState!=="loading")){if(e!==!0&&typeof E.__cache=="number")return E.__cache;var t=document.createElement("div"),a=t.style;a.display="block",a.position="absolute",a.width="100px",a.height="100px",a.left="-999px",a.top="-999px",a.overflow="scroll",document.body.insertBefore(t,null);var s=t.clientWidth;if(s!==0)return E.__cache=100-s,document.body.removeChild(t),E.__cache;document.body.removeChild(t)}};const Ae=Symbol("glightbox");async function Fe(e,t){const s=(await G(()=>import("./chunks/glightbox.min.2a9bfc2a.js").then(n=>n.g),["assets/chunks/glightbox.min.2a9bfc2a.js","assets/chunks/theme.47d5c5be.js","assets/chunks/framework.43b9ffd8.js"])).default({openEffect:"fade",closeEffect:"fade",zoomable:!0,skin:"white",svg:{close:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17,17.8c-0.2,0-0.4-0.1-0.6-0.2L12,13.1l-4.4,4.4c-0.3,0.3-0.8,0.3-1.1,0c-0.3-0.3-0.3-0.8,0-1.1l4.4-4.4L6.4,7.6 c-0.3-0.3-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0l4.4,4.4l4.4-4.4c0.3-0.3,0.8-0.3,1.1,0c0.2,0.2,0.2,0.4,0.2,0.6s-0.1,0.4-0.2,0.6 L13.1,12l4.4,4.4c0.3,0.3,0.3,0.8,0,1.1C17.4,17.7,17.2,17.8,17,17.8z"/></svg>',next:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9,18.8c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.8,0-1.1l5.5-5.5L8.5,6.5c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l6,6 c0.3,0.3,0.3,0.8,0,1.1l-6,6C9.4,18.7,9.2,18.8,9,18.8z"/></svg>',prev:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15,18.8c-0.2,0-0.4-0.1-0.5-0.2l-6-6c-0.3-0.3-0.3-0.8,0-1.1l6-6c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1L10.1,12l5.5,5.5 c0.3,0.3,0.3,0.8,0,1.1C15.4,18.7,15.2,18.8,15,18.8z"/></svg>'}});s.reload=()=>{const n=Array.from(document.querySelectorAll(".vp-doc img")).map((o,d)=>{const _=o.parentElement instanceof HTMLAnchorElement?o.parentElement:o;_.addEventListener("click",$=>{$.preventDefault(),s.openAt(d)});const f=_.getAttribute(_ instanceof HTMLAnchorElement?"href":"src"),k=o.getAttribute("alt");return{href:f,title:k,type:"image"}});s.setElements(n)};const r=E();s.on("open",()=>K(r)),s.on("close",()=>K()),e.provide(Ae,s),J(()=>t.route.data.relativePath,()=>setTimeout(()=>{s.reload()}),{immediate:!0})}function K(e){document.documentElement.style.setProperty("--scrollbar-width",e?e+"px":"")}const Pe=e=>{if(typeof document>"u")return{stabilizeScrollPosition:r=>async(...n)=>r(...n)};const t=document.documentElement;return{stabilizeScrollPosition:s=>async(...r)=>{const n=s(...r),o=e.value;if(!o)return n;const d=o.offsetTop-t.scrollTop;return await se(),t.scrollTop=o.offsetTop-d,n}}},Z="vitepress:tabSharedState",A=typeof localStorage<"u"?localStorage:null,Y="vitepress:tabsSharedState",Ie=()=>{const e=A==null?void 0:A.getItem(Y);if(e)try{return JSON.parse(e)}catch{}return{}},Ce=e=>{A&&A.setItem(Y,JSON.stringify(e))},He=e=>{const t=ne({});J(()=>t.content,(a,s)=>{a&&s&&Ce(a)},{deep:!0}),e.provide(Z,t)},Me=(e,t)=>{const a=R(Z);if(!a)throw new Error("[vitepress-plugin-tabs] TabsSharedState should be injected");j(()=>{a.content||(a.content=Ie())});const s=I(),r=y({get(){var _;const o=t.value,d=e.value;if(o){const f=(_=a.content)==null?void 0:_[o];if(f&&d.includes(f))return f}else{const f=s.value;if(f)return f}return d[0]},set(o){const d=t.value;d?a.content&&(a.content[d]=o):s.value=o}});return{selected:r,select:o=>{r.value=o}}};let O=0;const Be=()=>(O++,""+O);function Ve(){const e=oe();return y(()=>{var s;const a=(s=e.default)==null?void 0:s.call(e);return a?a.filter(r=>typeof r.type=="object"&&"__name"in r.type&&r.type.__name==="PluginTabsTab"&&r.props).map(r=>{var n;return(n=r.props)==null?void 0:n.label}):[]})}const ee="vitepress:tabSingleState",Re=e=>{re(ee,e)},je=()=>{const e=R(ee);if(!e)throw new Error("[vitepress-plugin-tabs] TabsSingleState should be injected");return e},Ne={class:"plugin-tabs"},We=["id","aria-selected","aria-controls","tabindex","onClick"],ze=m({__name:"PluginTabs",props:{sharedStateKey:{}},setup(e){const t=e,a=Ve(),{selected:s,select:r}=Me(a,le(t,"sharedStateKey")),n=I(),{stabilizeScrollPosition:o}=Pe(n),d=o(r),_=I([]),f=$=>{var D;const L=a.value.indexOf(s.value);let g;$.key==="ArrowLeft"?g=L>=1?L-1:a.value.length-1:$.key==="ArrowRight"&&(g=L<a.value.length-1?L+1:0),g!==void 0&&(d(a.value[g]),(D=_.value[g])==null||D.focus())},k=Be();return Re({uid:k,selected:s}),($,L)=>(l(),i("div",Ne,[c("div",{ref_key:"tablist",ref:n,class:"plugin-tabs--tab-list",role:"tablist",onKeydown:f},[(l(!0),i(T,null,M(u(a),g=>(l(),i("button",{id:`tab-${g}-${u(k)}`,ref_for:!0,ref_key:"buttonRefs",ref:_,key:g,role:"tab",class:"plugin-tabs--tab","aria-selected":g===u(s),"aria-controls":`panel-${g}-${u(k)}`,tabindex:g===u(s)?0:-1,onClick:()=>u(d)(g)},v(g),9,We))),128))],544),C($.$slots,"default")]))}});const De=["id","aria-labelledby"],Ke=m({__name:"PluginTabsTab",props:{label:{}},setup(e){const{uid:t,selected:a}=je();return(s,r)=>u(a)===s.label?(l(),i("div",{key:0,id:`panel-${s.label}-${u(t)}`,class:"plugin-tabs--content",role:"tabpanel",tabindex:"0","aria-labelledby":`tab-${s.label}-${u(t)}`},[C(s.$slots,"default",{},void 0,!0)],8,De)):p("",!0)}});const Oe=b(Ke,[["__scopeId","data-v-b2b19630"]]),Ge=e=>{He(e),e.component("PluginTabs",ze),e.component("PluginTabsTab",Oe)};function Je(e){if("dataLayer"in window&&window.gtag||window.location.hostname==="localhost")return;const t=document.createElement("script");t.addEventListener("load",()=>{window.dataLayer=window.dataLayer||[];function a(...s){window.dataLayer.push(arguments)}a("js",new Date),a("config",e),window.gtag=a}),t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.body.appendChild(t)}function qe({id:e}){e&&typeof window<"u"&&Je(e)}const Ue=m({__name:"Button",props:{tag:{},theme:{},text:{},href:{},target:{}},setup(e){const t=e,a=y(()=>[t.theme??"brand"]),s=y(()=>t.href&&ie.test(t.href)),r=y(()=>t.tag?t.tag:t.href?"a":"button");return(n,o)=>(l(),F(ce(r.value),{class:B(["Button",a.value]),href:n.href?u(xe)(n.href):void 0,target:n.target??(s.value?"_blank":void 0),rel:s.value?"noreferrer":void 0,"aria-label":n.text},{default:w(()=>[q(v(n.text),1)]),_:1},8,["class","href","target","rel","aria-label"]))}});const te=b(Ue,[["__scopeId","data-v-8ce9ab5d"]]),Qe=e=>(N("data-v-68e9f21c"),e=e(),W(),e),Xe={class:"container"},Ze={class:"main"},Ye={key:0,class:"title"},et=["innerHTML"],tt={key:1,class:"text"},at=["innerHTML"],st=["innerHTML"],nt={key:0,class:"actions"},ot={key:0,class:"image"},rt={class:"image-container"},lt=Qe(()=>c("div",{class:"image-bg"},null,-1)),ct=m({__name:"HomeHero",props:{data:{}},setup(e){const t=R("hero-image-slot-exists");return Le("https://github.com/KotatsuApp/Kotatsu/releases/latest"),(a,s)=>(l(),i("div",{class:B(["VPHomeHero",{"has-image":a.data.image||u(t)}])},[c("div",Xe,[c("div",Ze,[C(a.$slots,"home-hero-info",{},()=>[a.data.title?(l(),i("h1",Ye,[c("span",{innerHTML:a.data.title,class:"clip"},null,8,et)])):p("",!0),a.data.text?(l(),i("h2",tt,[c("span",{innerHTML:a.data.text,class:"clip"},null,8,at)])):p("",!0),a.data.tagline?(l(),i("p",{key:2,innerHTML:a.data.tagline,class:"description"},null,8,st)):p("",!0)],!0),a.data.actions?(l(),i("div",nt,[(l(!0),i(T,null,M(a.data.actions,r=>(l(),i("p",{key:r.link,class:"action"},[h(te,{tag:"a",theme:r.theme,text:r.text,href:r.link},null,8,["theme","text","href"])]))),128))])):p("",!0)]),a.data.image||u(t)?(l(),i("div",ot,[c("div",rt,[lt,C(a.$slots,"image",{},()=>[h(V,{class:"image-src",image:a.data.image},null,8,["image"])],!0)])])):p("",!0)])],2))}});const it=b(ct,[["__scopeId","data-v-68e9f21c"]]),ut={class:"Feature"},dt={class:"box"},_t={key:0,class:"title"},pt=["innerHTML"],ht={key:1,class:"details"},mt=["innerHTML"],ft={class:"image"},gt=m({__name:"Feature",props:{image:{},title:{},details:{}},setup(e){return(t,a)=>(l(),i("div",ut,[c("div",dt,[t.title?(l(),i("h1",_t,[c("span",{innerHTML:t.title,class:"clip"},null,8,pt)])):p("",!0),t.details?(l(),i("p",ht,[c("p",{innerHTML:t.details},null,8,mt)])):p("",!0),c("div",ft,[h(V,{class:"image-src",image:t.image},null,8,["image"])])])]))}});const vt=b(gt,[["__scopeId","data-v-96ae1838"]]),bt={key:0,class:"Features"},yt={class:"container"},$t={class:"items"},wt=m({__name:"Features",props:{features:{}},setup(e){const t=e,a=y(()=>{const s=t.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,r)=>s.features?(l(),i("div",bt,[c("div",yt,[c("div",$t,[(l(!0),i(T,null,M(s.features,n=>(l(),i("div",{key:n.title,class:B(["item",[a.value]])},[h(vt,{image:n.image,title:n.title,details:n.details,link:n.link,"link-text":n.linkText},null,8,["image","title","details","link","link-text"])],2))),128))])])])):p("",!0)}});const kt=b(wt,[["__scopeId","data-v-367d76fc"]]),Tt=e=>(N("data-v-44e424b8"),e=e(),W(),e),St={class:"FeatureTitle"},xt=Tt(()=>c("div",{class:"container"},[c("p",{class:"title"},"What Kotatsu can do?"),c("h1",{class:"subtitle"},"And here's what it does!")],-1)),Lt=[xt],Et=m({__name:"FeatureTitle",setup(e){return(t,a)=>(l(),i("div",St,Lt))}});const At=b(Et,[["__scopeId","data-v-44e424b8"]]),Ft={key:0,class:"container"},Pt=m({__name:"Home",setup(e){const{frontmatter:t}=S();return(a,s)=>u(t).main?(l(),i("div",Ft,[h(it,{data:u(t).main},null,8,["data"]),h(At),h(kt,{features:u(t).main.features},null,8,["features"])])):p("",!0)}});const It=b(Pt,[["__scopeId","data-v-8465ccfc"]]),Ct={key:0,class:"TranslatorWidget"},Ht={class:"info"},Mt={class:"name"},Bt={class:"label"},Vt=m({__name:"TranslatorWidget",setup(e){const{page:t,frontmatter:a,lang:s}=S(),r=y(()=>s.value==="ru"?"Переводчик":s.value==="ua"?"Перекладач":"Translator"),n=y(()=>{var d,_;const o=((_=(d=t.value)==null?void 0:d.section)==null?void 0:_.translator)||Q[a.value.translator];if(o)return{...o,name:typeof o.name=="string"?o.name:o.name[s.value]}});return(o,d)=>n.value?(l(),i("article",Ct,[h(z,{href:n.value.github,"no-icon":!0,class:"body"},{default:w(()=>[n.value.avatar?(l(),F(u(V),{key:0,class:"avatar",image:n.value.avatar},null,8,["image"])):p("",!0),c("div",Ht,[c("div",Mt,v(n.value.name),1),c("div",Bt,v(r.value),1)])]),_:1},8,["href"])])):p("",!0)}});const Rt=b(Vt,[["__scopeId","data-v-323a27cf"]]),jt={key:0,class:"ScreenTranslatorWidget"},Nt={class:"info"},Wt={class:"label"},zt={class:"name"},Dt=m({__name:"ScreenTranslatorWidget",setup(e){const{page:t,frontmatter:a,lang:s}=S(),r=y(()=>s.value==="ru"?"Переводчик":s.value==="ua"?"Перекладач":"Translator"),n=y(()=>{var d,_;const o=((_=(d=t.value)==null?void 0:d.section)==null?void 0:_.translator)||Q[a.value.translator];if(o)return{...o,name:typeof o.name=="string"?o.name:o.name[s.value]}});return(o,d)=>n.value?(l(),i("article",jt,[h(z,{href:n.value.github,"no-icon":!0,class:"body"},{default:w(()=>[n.value.avatar?(l(),F(u(V),{key:0,class:"avatar",image:n.value.avatar},null,8,["image"])):p("",!0),c("div",Nt,[c("span",Wt,v(r.value)+":",1),c("span",zt,v(n.value.name),1)])]),_:1},8,["href"])])):p("",!0)}});const Kt=b(Dt,[["__scopeId","data-v-c14bd0ec"]]),Ot={key:0,class:"Breadcrumbs",itemscope:"",itemtype:"https://schema.org/BreadcrumbList"},Gt=["textContent"],Jt=["title","textContent"],qt=["href"],Ut=["content"],Qt=m({__name:"Breadcrumbs",setup(e){const{page:t}=S(),a=ue();return(s,r)=>u(t).breadcrumbs.length?(l(),i("ol",Ot,[(l(!0),i(T,null,M(u(t).breadcrumbs,(n,o)=>(l(),i("li",{key:o,itemscope:"",itemprop:"itemListElement",itemtype:"https://schema.org/ListItem",class:B(["item",{active:n.link&&u(de)(n.link)===u(a).path}])},[n.link&&o<u(t).breadcrumbs.length-1?(l(),F(z,{key:0,href:n.link,title:n.text,itemprop:"item",class:"link"},{default:w(()=>[c("span",{itemprop:"name",class:"name",textContent:v(n.text)},null,8,Gt)]),_:2},1032,["href","title"])):(l(),i(T,{key:1},[c("span",{title:n.text,itemprop:"name",class:"name",textContent:v(n.text)},null,8,Jt),n.link?(l(),i("link",{key:0,href:n.link,itemprop:"item"},null,8,qt)):p("",!0)],64)),c("meta",{itemprop:"position",content:o.toString()},null,8,Ut)],2))),128))])):p("",!0)}});const Xt=b(Qt,[["__scopeId","data-v-3fbef81b"]]),P=e=>(N("data-v-119cb7d4"),e=e(),W(),e),Zt={class:"NotFound"},Yt={class:"code"},ea={class:"title"},ta=P(()=>c("div",{class:"divider"},null,-1)),aa={class:"quote"},sa=P(()=>c("p",null,"Похоже, что вы перешли по неверной или устаревшей ссылке.",-1)),na=P(()=>c("p",null,"Информация, которую вы искали, где-то здесь. Вы можете воспользоваться поиском.",-1)),oa=P(()=>c("br",null,null,-1)),ra=P(()=>c("p",null,"Этот сайт автоматически генерируется из файлов, расположенных на GitHub, поэтому адреса могут иногда меняться.",-1)),la={class:"action"},ca=m({__name:"NotFound",setup(e){const{site:t,theme:a}=S(),{localeLinks:s}=Ee({removeCurrent:!1}),r=I("/");return j(()=>{var o;const n=window.location.pathname.replace(t.value.base,"").replace(/(^.*?\/).*$/,"/$1");s.value.length&&(r.value=((o=s.value.find(({link:d})=>d.startsWith(n)))==null?void 0:o.link)||s.value[0].link)}),(n,o)=>{var d,_,f,k,$;return l(),i("div",Zt,[c("p",Yt,v(((d=u(a).notFound)==null?void 0:d.code)??"Four-Oh-Four"),1),c("h1",ea,v(((_=u(a).notFound)==null?void 0:_.title)??"Page not found"),1),ta,c("blockquote",aa,[(f=u(a).notFound)!=null&&f.quote?(l(),i(T,{key:0},[q(v((k=u(a).notFound)==null?void 0:k.quote),1)],64)):(l(),i(T,{key:1},[sa,na,oa,ra],64))]),c("div",la,[h(te,{class:"link",href:r.value,theme:"alt",text:(($=u(a).notFound)==null?void 0:$.linkText)??"Вернуться на главную"},null,8,["href","text"])])])}}});const ia=b(ca,[["__scopeId","data-v-119cb7d4"]]),ua=m({__name:"Layout",setup(e){const{Layout:t}=X;return(a,s)=>(l(),F(u(t),null,{"home-hero-before":w(()=>[h(It)]),"aside-outline-after":w(()=>[h(Rt)]),"doc-before":w(()=>[h(Xt)]),"doc-footer-before":w(()=>[h(Kt)]),"not-found":w(()=>[h(ia)]),_:1}))}});const da={extends:X,Layout:ua,setup(){const{lang:e}=S();U(()=>{H&&(document.cookie=`nf_lang=${e.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`)})},enhanceApp({app:e,router:t}){Ge(e),Fe(e,t),qe({id:"G-X37JGMJE4R"})}};function ae(e){if(e.extends){const t=ae(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const x=ae(da),_a=m({name:"VitePressApp",setup(){const{site:e}=S();return j(()=>{U(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),we(),ke(),Te(),x.setup&&x.setup(),()=>Se(x.Layout)}});async function pa(){const e=ma(),t=ha();t.provide(pe,e);const a=he(e.route);return t.provide(me,a),t.component("Content",fe),t.component("ClientOnly",ge),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),x.enhanceApp&&await x.enhanceApp({app:t,router:e,siteData:ve}),{app:t,router:e,data:a}}function ha(){return be(_a)}function ma(){let e=H,t;return ye(a=>{let s=$e(a),r=null;return s&&(e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),r=G(()=>import(s),[])),H&&(e=!1),r},x.NotFound)}H&&pa().then(({app:e,router:t,data:a})=>{t.go().then(()=>{_e(t.route,a.site),e.mount("#app")})});export{pa as createApp};
