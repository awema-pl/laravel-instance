/**
 * Bundle of AWEMA product-integrator
 * Generated: 2021-01-12 11:15:00
 * Version: 1.0.0
 */

!function(){"use strict";function t(t,...e){!0===AWEMA_CONFIG.dev&&console.debug(t,e)}var e={example_data:"example-data-from-config"},a={props:{example_data:{type:String,default(){return this._config.example_data}}},inject:{},computed:{exampleFromFunction:()=>"example-function"},beforeCreate(){this._config=Object.assign(e,AWEMA.utils.object.get(AWEMA_CONFIG,"product_integrator",{}))}};let n=0;var o=function(t,e,a,n,o,s,i,r,d,c){"boolean"!=typeof i&&(d=r,r=i,i=!1);var _,u="function"==typeof a?a.options:a;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),n&&(u._scopeId=n),s?(_=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,d(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=_):e&&(_=i?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),_)if(u.functional){var l=u.render;u.render=function(t,e){return _.call(e),l(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,_):[_]}return a}({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v("Translation key "),a("code",[t._v("PRODUCT_INTEGRATOR_EXAMPLE")]),t._v(" from "),a("code",[t._v("product-integrator/resources/lang/**/js.php")]),t._v(": "+t._s(t.$lang.PRODUCT_INTEGRATOR_EXAMPLE))]),t._v(" "),a("button",{staticClass:"form-builder__send btn",on:{click:t.testDebug}},[t._v("Test console log for debug")]),t._v(" "),a("p",[t._v("From config JS file: "+t._s(this.example_data))]),t._v(" "),a("p",[t._v("Example function: "+t._s(this.exampleFromFunction))]),t._v(" "),a("p",[a("button",{staticClass:"form-builder__send btn",on:{click:t.testLoading}},[t._v("Test loading")]),t._v(" "),t.isLoading?a("span",[t._v("is loading...")]):t._e()])])},staticRenderFns:[]},void 0,{name:"product-integrator",mixins:[a],props:{name:{type:String,default:()=>`product-integrator-${n++}`},default:Object,storeData:String},computed:{productIntegrator(){return this.$store.state.productIntegrator[this.name]},isLoading(){return this.productIntegrator&&this.productIntegrator.isLoading}},created(){let t=this.storeData?this.$store.state[this.storeData]:this.default||{};this.$store.commit("productIntegrator/create",{name:this.name,data:t})},mounted(){},methods:{testDebug(){t("message",["data1"],["data2"])},testLoading(){this.isLoading||(AWEMA.emit(`productIntegrator::${this.name}:before-test-loading`),this.$store.dispatch("productIntegrator/testLoading",{name:this.name}).then(e=>{t("data",e),this.$emit("success",e.data),this.$store.$set(this.name,this.$get(e,"data",{}))}))}},beforeDestroy(){}},void 0,!1,void 0,void 0,void 0);var s={installed:!1,install:function(t){this.installed||(this.installed=!0,t.component("product-integrator",o))}},i={PRODUCT_INTEGRATOR_EXAMPLE:"product integrator example"};var r={state:()=>({}),getters:{productIntegrator:t=>e=>t[e],isLoading:(t,e)=>t=>{const a=e.productIntegrator(t);return a&&a.isLoading}},mutations:{create(t,{name:e,data:a}){Vue.set(t,e,{isLoading:!1,data:a})},setLoading(t,{name:e,status:a}){Vue.set(t[e],"isLoading",a)}},actions:{restoreData:({state:t},{name:e})=>t[e].exampleData||"example-data",testLoading:({state:e,commit:a,dispatch:n},{name:o})=>new Promise(s=>{let i;e[o];a("setLoading",{name:o,status:!0}),n("restoreData",{name:o}).then(e=>(t("data",e),["data-2"])).then(e=>{i=e,t("data-2",e)}).finally(()=>{setTimeout(()=>{a("setLoading",{name:o,status:!1}),s(i)},2e3)})})},namespaced:!0};const d={name:"product-integrator",version:"1.0.0",install(t){Vue.use(s),t._store.registerModule("productIntegrator",r),t.lang=i}};window&&"AWEMA"in window?AWEMA.use(d):(window.__awema_plugins_stack__=window.__awema_plugins_stack__||[],window.__awema_plugins_stack__.push(d))}();
