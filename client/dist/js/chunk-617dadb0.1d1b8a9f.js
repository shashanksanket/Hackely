(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-617dadb0"],{"1b3e":function(e,t,n){"use strict";n("e8f6")},2607:function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"t",(function(){return te})),n.d(o,"_",(function(){return ne}));var i={};n.r(i),n.d(i,"can",(function(){return ie})),n.d(i,"canViewVerticalNavMenuLink",(function(){return re})),n.d(i,"canViewVerticalNavMenuGroup",(function(){return ae})),n.d(i,"canViewVerticalNavMenuHeader",(function(){return le})),n.d(i,"canViewHorizontalNavMenuLink",(function(){return se})),n.d(i,"canViewHorizontalNavMenuHeaderLink",(function(){return ce})),n.d(i,"canViewHorizontalNavMenuGroup",(function(){return ue})),n.d(i,"canViewHorizontalNavMenuHeaderGroup",(function(){return pe}));var r,a,l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-horizontal",[n("router-view"),e.showCustomizer?n("app-customizer",{attrs:{slot:"customizer"},slot:"customizer"}):e._e()],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"horizontal-layout",class:[e.layoutClasses],staticStyle:{height:"inherit"},attrs:{"data-col":e.isNavMenuHidden?"1-column":null}},[n("b-navbar",{staticClass:"header-navbar navbar-shadow align-items-center navbar-brand-center navbar-fixed",class:{"fixed-top":"xl"!==e.$store.getters["app/currentBreakPoint"]},style:{backgroundColor:"static"===e.navbarType&&e.scrolledTo&&"light"===e.skin?"white":null,boxShadow:"static"===e.navbarType&&e.scrolledTo?"rgba(0, 0, 0, 0.05) 0px 4px 20px 0px":null},attrs:{toggleable:!1}},[e._t("navbar",(function(){return[n("app-navbar-horizontal-layout-brand"),n("app-navbar-horizontal-layout",{attrs:{"toggle-vertical-menu-active":e.toggleVerticalMenuActive}})]}),{toggleVerticalMenuActive:e.toggleVerticalMenuActive})],2),n("div",{staticClass:"horizontal-menu-wrapper"},[e.isNavMenuHidden?e._e():n("div",{staticClass:"header-navbar navbar-expand-sm navbar navbar-horizontal navbar-light navbar-shadow menu-border d-none d-xl-block",class:[e.navbarMenuTypeClass]},[n("horizontal-nav-menu")],1),n("vertical-nav-menu",{staticClass:"d-block d-xl-none",attrs:{"is-vertical-menu-active":e.isVerticalMenuActive,"toggle-vertical-menu-active":e.toggleVerticalMenuActive},scopedSlots:e._u([{key:"header",fn:function(t){return[e._t("vertical-menu-header",null,null,t)]}}],null,!0)})],1),n("div",{staticClass:"sidenav-overlay",class:e.overlayClasses,on:{click:function(t){e.isVerticalMenuActive=!1}}}),n("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[n(e.layoutContentRenderer,{key:"layout-content-renderer-left"===e.layoutContentRenderer?e.$route.meta.navActiveLink||e.$route.name:null,tag:"component",scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,n){return{key:n,fn:function(t){return[e._t(n,null,null,t)]}}}))],null,!0)})],1),n("footer",{staticClass:"footer footer-light",class:[e.footerTypeClass]},[e._t("footer",(function(){return[n("app-footer")]}))],2),e._t("customizer")],2)},u=[],p=n("3033"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-container d-flex content align-items-center"},[n("ul",{staticClass:"nav navbar-nav d-xl-none"},[n("li",{staticClass:"nav-item"},[n("b-link",{staticClass:"nav-link",on:{click:e.toggleVerticalMenuActive}},[n("feather-icon",{attrs:{icon:"MenuIcon",size:"21"}})],1)],1)]),n("b-navbar-nav",{staticClass:"nav align-items-center ml-auto"},[n("cart-dropdown"),n("notification-dropdown"),n("user-dropdown")],1)],1)},m=[],v=n("aa59"),h=n("042b"),f=n("6957"),b=n("e2f5"),g=n("9f5c"),w=n("809a"),C=n("8a2e"),y=n("5c02"),k=n("eef9"),I={components:{BLink:v["a"],BNavbarNav:h["a"],Bookmarks:f["a"],Locale:b["a"],DarkToggler:g["a"],SearchBar:w["a"],CartDropdown:C["a"],NotificationDropdown:y["a"],UserDropdown:k["a"]},props:{toggleVerticalMenuActive:{type:Function,default:()=>{}}}},x=I,M=n("2877"),A=Object(M["a"])(x,d,m,!1,null,null,null),O=A.exports,z={},L=Object(M["a"])(z,r,a,!1,null,null,null),_=L.exports,H=n("62cb"),N=n("b8f2"),T=n("d0b9"),V=n("ed09");const j=()=>{const e=Object(V["ref"])(null),t=()=>{e.value=window.scrollY};return window.addEventListener("scroll",t),Object(V["onUnmounted"])(()=>{window.removeEventListener("scroll",t)}),{scrolledTo:e}};var B=n("1ae3"),P=n("e08f"),S=n("0d19"),E=n("4360");function G(e,t,n){const o=Object(V["computed"])(()=>E["a"].getters["app/currentBreakPoint"]),i=Object(V["computed"])(()=>{const i=[];return"xl"===o.value?i.push("horizontal-menu"):(i.push("vertical-overlay-menu"),i.push(n.value?"menu-open":"menu-hide")),i.push("navbar-"+e.value),"sticky"===t.value&&i.push("footer-fixed"),"static"===t.value&&i.push("footer-static"),"hidden"===t.value&&i.push("footer-hidden"),i}),r=Object(V["computed"])(()=>"sticky"===e.value?"fixed-top":"static"===e.value?"":"hidden"===e.value?"d-none":"floating-nav"),a=Object(V["computed"])(()=>"static"===t.value?"footer-static":"hidden"===t.value?"d-none":"");return{layoutClasses:i,navbarMenuTypeClass:r,footerTypeClass:a}}var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-container main-menu-content"},[n("horizontal-nav-menu-items",{attrs:{items:e.navMenuItems}})],1)},$=[],F=[{header:"Dashboards",icon:"HomeIcon",children:[{title:"eCommerce",route:"dashboard-ecommerce",icon:"ShoppingCartIcon"},{title:"Analytics",route:"dashboard-analytics",icon:"ActivityIcon"}]}],R=[{header:"Apps",icon:"PackageIcon",children:[{title:"Email",route:"apps-email",icon:"MailIcon"},{title:"Chat",route:"apps-chat",icon:"MessageSquareIcon"},{title:"Todo",route:"apps-todo",icon:"CheckSquareIcon"},{title:"Calendar",route:"apps-calendar",icon:"CalendarIcon"},{title:"Invoice",icon:"FileTextIcon",children:[{title:"List",route:"apps-invoice-list"},{title:"Preview",route:{name:"apps-invoice-preview",params:{id:4987}}},{title:"Edit",route:{name:"apps-invoice-edit",params:{id:4987}}},{title:"Add",route:{name:"apps-invoice-add"}}]},{title:"eCommerce",icon:"ShoppingCartIcon",children:[{title:"Shop",route:"apps-e-commerce-shop"},{title:"Details",route:{name:"apps-e-commerce-product-details",params:{slug:"apple-watch-series-5-27"}}},{title:"Wishlist",route:"apps-e-commerce-wishlist"},{title:"Checkout",route:"apps-e-commerce-checkout"}]},{title:"User",icon:"UserIcon",children:[{title:"List",route:"apps-users-list"},{title:"View",route:{name:"apps-users-view",params:{id:21}}},{title:"Edit",route:{name:"apps-users-edit",params:{id:21}}}]}]}],q=[{header:"Pages",icon:"FileTextIcon",children:[{title:"Authentication",icon:"LockIcon",children:[{title:"Login v1",route:"auth-login-v1",target:"_blank"},{title:"Login v2",route:"auth-login-v2",target:"_blank"},{title:"Register v1",route:"auth-register-v1",target:"_blank"},{title:"Register v2",route:"auth-register-v2",target:"_blank"},{title:"Forgot Password v1",route:"auth-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",route:"auth-forgot-password-v2",target:"_blank"},{title:"Reset Password v1",route:"auth-reset-password-v1",target:"_blank"},{title:"Reset Password v2",route:"auth-reset-password-v2",target:"_blank"}]},{title:"Account Settings",route:"pages-account-setting",icon:"SettingsIcon"},{title:"Profile",route:"pages-profile",icon:"UserIcon"},{title:"Faq",route:"pages-faq",icon:"HelpCircleIcon"},{title:"Knowledge Base",route:"pages-knowledge-base",icon:"AlertCircleIcon"},{title:"Pricing",route:"pages-pricing",icon:"DollarSignIcon"},{title:"Blog",icon:"ClipboardIcon",children:[{title:"List",route:"pages-blog-list"},{title:"Detail",route:{name:"pages-blog-detail",params:{id:1}}},{title:"Edit",route:{name:"pages-blog-edit",params:{id:1}}}]},{title:"Mail Templates",icon:"MailIcon",children:[{title:"Welcome",href:"https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html"},{title:"Reset Password",href:"https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html"},{title:"Verify Email",href:"https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html"},{title:"Deactivate Account",href:"https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html"},{title:"Invoice",href:"https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html"},{title:"Promotional",href:"https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html"}]},{title:"Miscellaneous",icon:"FileIcon",children:[{title:"Coming Soon",route:"misc-coming-soon",target:"_blank"},{title:"Not Authorized",route:"misc-not-authorized",target:"_blank"},{title:"Under Maintenance",route:"misc-under-maintenance",target:"_blank"},{title:"Error",route:"misc-error",target:"_blank"}]}]}],U=[{header:"Charts & Maps",icon:"PieChartIcon",children:[{title:"Charts",icon:"PieChartIcon",children:[{title:"Apex Chart",route:"charts-apex-chart"},{title:"Chartjs",route:"charts-chartjs"},{title:"Echart",route:"charts-echart"}]},{title:"Leaflet",route:"maps-leaflet",icon:"MapIcon"}]}],W=[{header:"User Interface",icon:"LayersIcon",children:[{title:"Typography",route:"ui-typography",icon:"TypeIcon"},{title:"Colors",route:"ui-colors",icon:"DropletIcon"},{title:"Feather",route:"ui-feather",icon:"EyeIcon"},{title:"Cards",icon:"CreditCardIcon",children:[{title:"Basic",route:"card-basic"},{title:"Advance",route:"card-advance"},{title:"Statistic",route:"card-statistic"},{title:"Analytic",route:"card-analytic"},{title:"Card Action",route:"card-action"}]},{title:"Components",icon:"ArchiveIcon",children:[{title:"Alert",route:"components-alert"},{title:"Aspect",route:"components-aspect"},{title:"Avatar",route:"components-avatar"},{title:"Badge",route:"components-badge"},{title:"Breadcrumb",route:"components-breadcrumb"},{title:"Button",route:"components-button"},{title:"Button Group",route:"components-button-group"},{title:"Button Toolbar",route:"components-button-toolbar"},{title:"Calendar",route:"components-calendar"},{title:"Carousel",route:"components-carousel"},{title:"Collapse",route:"components-collapse"},{title:"Dropdown",route:"components-dropdown"},{title:"Embed",route:"components-embed"},{title:"Image",route:"components-image"},{title:"List Group",route:"components-list-group"},{title:"Media Objects",route:"components-media"},{title:"Modal",route:"components-modal"},{title:"Nav",route:"components-nav"},{title:"Overlay",route:"components-overlay"},{title:"Pagination",route:"components-pagination"},{title:"Pagination Nav",route:"components-pagination-nav"},{title:"Pill",route:"components-pill"},{title:"Pill Badge",route:"components-pill-badge"},{title:"Popover",route:"components-popover"},{title:"Progress",route:"components-progress"},{title:"Sidebar",route:"components-sidebar"},{title:"spinner",route:"components-spinner"},{title:"Tab",route:"components-tab"},{title:"Time",route:"components-time"},{title:"Timeline",route:"components-timeline"},{title:"Toasts",route:"components-toasts"},{title:"Tooltip",route:"components-tooltip"}]},{title:"Extensions",icon:"PlusCircleIcon",children:[{title:"Sweet Alert",route:"extensions-sweet-alert"},{title:"Toastification",route:"extensions-toastification"},{title:"Slider",route:"extensions-slider"},{title:"Drag & Drop",route:"extensions-drag-and-drop"},{title:"Tour",route:"extensions-tour"},{title:"Clipboard",route:"extensions-clipboard"},{title:"Context Menu",route:"extensions-context-menu"},{title:"Swiper",route:"extensions-swiper"},{title:"I18n",route:"extensions-i18n"}]},{title:"Page Layouts",icon:"LayoutIcon",children:[{title:"Layout Boxed",route:"page-layout-boxed-layout"},{title:"Without Menu",route:"page-layout-without-menu"},{title:"Layout Empty",route:"page-layout-layout-empty"},{title:"Layout Blank",route:"page-layout-layout-blank"}]}]}],J=[{header:"Forms & Tables",icon:"EditIcon",children:[{title:"Forms Elements",icon:"CopyIcon",children:[{title:"Input",route:"forms-element-input"},{title:"Input Group",route:"forms-element-input-group"},{title:"Input Mask",route:"forms-element-input-mask"},{title:"Textarea",route:"forms-element-textarea"},{title:"Auto Suggest",route:"extensions-auto-suggest"},{title:"Checkbox",route:"forms-element-checkbox"},{title:"Radio",route:"forms-element-radio"},{title:"Switch",route:"forms-element-switch"},{title:"Select",route:"forms-element-select"},{title:"Vue Select",route:"extensions-vue-select"},{title:"Spinbutton",route:"forms-element-spinbutton"},{title:"File Input",route:"forms-element-file-input"},{title:"Quill Editor",route:"extensions-quill-editor"},{title:"Form Datepicker",route:"forms-element-datepicker"},{title:"Form Timepicker",route:"forms-element-timepicker"},{title:"Date Time Picker",route:"extensions-date-time-picker"},{title:"Form Rating",route:"forms-element-rating"},{title:"Form Tag",route:"forms-element-tag"}]},{title:"Form Layout",route:"form-layout",icon:"CopyIcon"},{title:"Form Wizard",route:"form-wizard",icon:"PackageIcon"},{title:"Form Validation",route:"form-validation",icon:"CheckCircleIcon"},{title:"Form Repeater",route:"form-repeater",icon:"CopyIcon"},{title:"BS Table",route:"table-bs-table",icon:"ServerIcon"},{title:"Good Table",route:"table-good-table",icon:"GridIcon"}]}],Y=[{header:"Others",icon:"MoreHorizontalIcon",children:[{title:"Access Control",route:"access-control",icon:"ShieldIcon",action:"read",resource:"ACL"},{title:"Menu Levels",icon:"MenuIcon",children:[{title:"Menu Level 2.1",route:null},{title:"Menu Level 2.2",children:[{title:"Menu Level 3.1",route:null},{title:"Menu Level 3.2",route:null}]}]},{title:"Disabled Menu",route:null,icon:"EyeOffIcon",disabled:!0},{title:"Raise Support",href:"https://pixinvent.ticksy.com/",icon:"LifeBuoyIcon"},{title:"Documentation",href:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation",icon:"FileTextIcon"}]}],K=[...F,...R,...W,...J,...q,...U,...Y],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"nav navbar-nav",attrs:{id:"main-menu-navigation"}},e._l(e.items,(function(t){return n(e.resolveNavComponent(t),{key:t.header||t.title,tag:"component",attrs:{item:t}})})),1)},X=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewHorizontalNavMenuHeaderLink(e.item)?n("li",{staticClass:"nav-item",class:{"sidebar-group-active active":e.isActive}},[n("b-link",{staticClass:"nav-link",attrs:{to:{name:e.item.route}}},[n("feather-icon",{attrs:{size:"14",icon:e.item.icon}}),n("span",[e._v(e._s(e.t(e.item.title)))])],1)],1):e._e()},ee=[];const te=e=>{const t=Object(V["getCurrentInstance"])().proxy;return t.$t?t.$t(e):e},ne=null,oe=()=>({...o}),ie=(e,t)=>{const n=Object(V["getCurrentInstance"])().proxy;return!n.$can||n.$can(e,t)},re=e=>ie(e.action,e.resource),ae=e=>{const t=e.children.some(e=>ie(e.action,e.resource));return e.action&&e.resource?ie(e.action,e.resource)&&t:t},le=e=>ie(e.action,e.resource),se=e=>ie(e.action,e.resource),ce=e=>ie(e.action,e.resource),ue=e=>{const t=e.children.some(e=>ie(e.action,e.resource));return e.action&&e.resource?ie(e.action,e.resource)&&t:t},pe=e=>{const t=e.children.some(e=>e.children?ue(e):se(e));return e.action&&e.resource?ie(e.action,e.resource)&&t:t},de=()=>({...i});var me=n("a18c"),ve=n("ca6e");const he=e=>e.children?"horizontal-nav-menu-group":"horizontal-nav-menu-link",fe=e=>{if(Object(ve["a"])(e.route)){const{route:t}=me["a"].resolve(e.route);return t.name}return e.route},be=e=>{const t=me["a"].currentRoute.matched,n=fe(e);return!!n&&t.some(e=>e.name===n||e.meta.navActiveLink===n)},ge=e=>{const t=me["a"].currentRoute.matched;return e.some(e=>e.children?ge(e.children):be(e,t))},we=e=>Object(V["computed"])(()=>{const t={};return e.route?t.to="string"===typeof e.route?{name:e.route}:e.route:(t.href=e.href,t.target="_blank",t.rel="nofollow"),t.target||(t.target=e.target||null),t});function Ce(e){const t=Object(V["ref"])(!1),n=()=>{t.value=be(e)};return{isActive:t,updateIsActive:n}}var ye={watch:{$route:{immediate:!0,handler(){this.updateIsActive()}}}},ke={components:{BLink:v["a"]},mixins:[ye],props:{item:{type:Object,required:!0}},setup(e){const{isActive:t,updateIsActive:n}=Ce(e.item),{t:o}=oe(),{canViewHorizontalNavMenuHeaderLink:i}=de();return{isActive:t,updateIsActive:n,canViewHorizontalNavMenuHeaderLink:i,t:o}}},Ie=ke,xe=Object(M["a"])(Ie,Z,ee,!1,null,null,null),Me=xe.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewHorizontalNavMenuHeaderGroup(e.item)?n("li",{staticClass:"dropdown nav-item",class:{"sidebar-group-active active open":e.isActive,show:e.isOpen},on:{mouseenter:function(){return e.updateGroupOpen(!0)},mouseleave:function(){return e.updateGroupOpen(!1)}}},[n("b-link",{staticClass:"nav-link dropdown-toggle d-flex align-items-center"},[n("feather-icon",{attrs:{size:"14",icon:e.item.icon}}),n("span",[e._v(e._s(e.t(e.item.header)))])],1),n("ul",{staticClass:"dropdown-menu"},e._l(e.item.children,(function(t){return n(e.resolveHorizontalNavMenuItemComponent(t),{key:t.title,tag:"component",attrs:{item:t}})})),1)],1):e._e()},Oe=[];function ze(e){const t=Object(V["ref"])(!1),n=e=>{t.value=e},o=Object(V["ref"])(!1),i=()=>{o.value=ge(e.children)};return{isOpen:t,isActive:o,updateGroupOpen:n,updateIsActive:i}}var Le={watch:{$route:{immediate:!0,handler(){this.updateIsActive()}}}},_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewVerticalNavMenuGroup(e.item)?n("li",{staticClass:"dropdown dropdown-submenu",class:{show:e.isOpen,disabled:e.item.disabled,"sidebar-group-active active open":e.isActive,openLeft:e.openChildDropdownOnLeft},on:{mouseenter:function(){return e.updateGroupOpen(!0)},mouseleave:function(){return e.updateGroupOpen(!1)}}},[n("b-link",{staticClass:"dropdown-item",class:{"dropdown-toggle":e.item.children},attrs:{href:"#"},on:{click:function(){return e.updateGroupOpen(!e.isOpen)}}},[n("feather-icon",{attrs:{icon:e.item.icon||"CircleIcon"}}),n("span",{staticClass:"menu-title"},[e._v(e._s(e.t(e.item.title)))])],1),n("ul",{ref:"refChildDropdown",staticClass:"dropdown-menu"},e._l(e.item.children,(function(t){return n(e.resolveNavItemComponent(t),{key:t.header||t.title,ref:"groupChild",refInFor:!0,tag:"component",attrs:{item:t}})})),1)],1):e._e()},He=[],Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewHorizontalNavMenuLink(e.item)?n("li",{class:{active:e.isActive,disabled:e.item.disabled}},[n("b-link",e._b({staticClass:"dropdown-item"},"b-link",e.linkProps,!1),[n("feather-icon",{attrs:{icon:e.item.icon||"CircleIcon",size:"24"}}),n("span",{staticClass:"menu-title"},[e._v(e._s(e.t(e.item.title)))])],1)],1):e._e()},Te=[];function Ve(e){const t=Object(V["ref"])(!1),n=we(e),o=()=>{t.value=be(e)};return{isActive:t,linkProps:n,updateIsActive:o}}var je={watch:{$route:{immediate:!0,handler(){this.updateIsActive()}}}},Be={components:{BLink:v["a"]},mixins:[je],props:{item:{type:Object,required:!0}},setup(e){const{isActive:t,linkProps:n,updateIsActive:o}=Ve(e.item),{t:i}=oe(),{canViewHorizontalNavMenuLink:r}=de();return{isActive:t,linkProps:n,updateIsActive:o,canViewHorizontalNavMenuLink:r,t:i}}},Pe=Be,Se=Object(M["a"])(Pe,Ne,Te,!1,null,null,null),Ee=Se.exports;function Ge(e){const t=Object(V["ref"])(null),n=Object(V["ref"])(!1),o=Object(V["ref"])(!1),i=e=>{o.value=e,e?Object(V["nextTick"])(()=>{const e=t.value.offsetWidth,o=window.innerWidth-16,{left:i}=t.value.getBoundingClientRect(),r=i+e-o;n.value=r>0;const a=t.value.getBoundingClientRect().top,l=t.value.getBoundingClientRect().height;if(window.innerHeight-a-l-28<1){const e=window.innerHeight-a-70;t.value.style.maxHeight=e+"px",t.value.style.overflowY="auto",t.value.style.overflowX="hidden"}}):n.value=!1},r=Object(V["ref"])(!1),a=()=>{r.value=ge(e.children)};return{isOpen:o,isActive:r,updateGroupOpen:i,updateIsActive:a,refChildDropdown:t,openChildDropdownOnLeft:n}}var De={watch:{$route:{immediate:!0,handler(){this.updateIsActive()}}}},$e={name:"HorizontalNavMenuGroup",components:{HorizontalNavMenuLink:Ee,BLink:v["a"]},mixins:[De],props:{item:{type:Object,required:!0}},setup(e){const{refChildDropdown:t,isActive:n,isOpen:o,updateGroupOpen:i,updateIsActive:r,openChildDropdownOnLeft:a}=Ge(e.item),{t:l}=oe(),{canViewVerticalNavMenuGroup:s}=de();return{refChildDropdown:t,openChildDropdownOnLeft:a,resolveNavItemComponent:he,isOpen:o,isActive:n,updateGroupOpen:i,updateIsActive:r,canViewVerticalNavMenuGroup:s,t:l}}},Fe=$e,Re=Object(M["a"])(Fe,_e,He,!1,null,null,null),qe=Re.exports,Ue={components:{BLink:v["a"],HorizontalNavMenuGroup:qe,HorizontalNavMenuLink:Ee},mixins:[Le],props:{item:{type:Object,required:!0}},setup(e){const{isActive:t,updateIsActive:n,isOpen:o,updateGroupOpen:i}=ze(e.item),{t:r}=oe(),{canViewHorizontalNavMenuHeaderGroup:a}=de();return{isOpen:o,isActive:t,updateGroupOpen:i,updateIsActive:n,resolveHorizontalNavMenuItemComponent:he,canViewHorizontalNavMenuHeaderGroup:a,t:r}}},We=Ue,Je=Object(M["a"])(We,Ae,Oe,!1,null,null,null),Ye=Je.exports,Ke={components:{HorizontalNavMenuHeaderLink:Me,HorizontalNavMenuHeaderGroup:Ye},props:{items:{type:Array,required:!0}},setup(){const e=e=>e.children?"horizontal-nav-menu-header-group":"horizontal-nav-menu-header-link";return{resolveNavComponent:e}}},Qe=Ke,Xe=Object(M["a"])(Qe,Q,X,!1,null,null,null),Ze=Xe.exports,et={components:{HorizontalNavMenuItems:Ze},setup(){return{navMenuItems:K}}},tt=et,nt=(n("1b3e"),Object(M["a"])(tt,D,$,!1,null,null,null)),ot=nt.exports,it=n("2c28"),rt=n("32b8"),at=n("1dff"),lt={watch:{$route(){this.$store.state.app.windowWidth<at["a"].xl&&(this.isVerticalMenuActive=!1)}}},st={components:{AppBreadcrumb:p["a"],AppNavbarHorizontalLayout:O,AppNavbarHorizontalLayoutBrand:_,AppFooter:H["a"],HorizontalNavMenu:ot,BNavbar:T["a"],LayoutContentRendererDefault:B["a"],LayoutContentRendererLeft:P["a"],LayoutContentRendererLeftDetached:S["a"],VerticalNavMenu:it["a"]},mixins:[lt],computed:{layoutContentRenderer(){const e=this.$route.meta.contentRenderer;return"sidebar-left"===e?"layout-content-renderer-left":"sidebar-left-detached"===e?"layout-content-renderer-left-detached":"layout-content-renderer-default"}},setup(){const{skin:e,navbarType:t,footerType:n,routerTransition:o,isNavMenuHidden:i}=Object(N["a"])(),{isVerticalMenuActive:r,toggleVerticalMenuActive:a,overlayClasses:l,resizeHandler:s}=Object(rt["a"])(t,n);s(),window.addEventListener("resize",s),Object(V["onUnmounted"])(()=>{window.removeEventListener("resize",s)});const{navbarMenuTypeClass:c,layoutClasses:u,footerTypeClass:p}=G(t,n,r),{scrolledTo:d}=j();return{skin:e,layoutClasses:u,navbarType:t,navbarMenuTypeClass:c,isNavMenuHidden:i,routerTransition:o,footerTypeClass:p,scrolledTo:d,isVerticalMenuActive:r,toggleVerticalMenuActive:a,overlayClasses:l}}},ct=st,ut=(n("80a5"),Object(M["a"])(ct,c,u,!1,null,null,null)),pt=ut.exports,dt=n("4778"),mt={components:{LayoutHorizontal:pt,AppCustomizer:dt["a"]},data(){return{showCustomizer:at["b"].layout.customizer}}},vt=mt,ht=Object(M["a"])(vt,l,s,!1,null,null,null);t["default"]=ht.exports},"80a5":function(e,t,n){"use strict";n("f249")},e8f6:function(e,t,n){},f249:function(e,t,n){}}]);
//# sourceMappingURL=chunk-617dadb0.1d1b8a9f.js.map