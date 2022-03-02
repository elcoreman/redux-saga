/*! For license information please see fc0e1d8e.b94ab826.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[503],{2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,s=a(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(s[u]=i[u]);if(t){l=t(i);for(var f=0;f<l.length;f++)r.call(i,l[f])&&(s[l[f]]=i[l[f]])}}return s}},1535:function(e,t,n){var r=n(2525),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,s=a?Symbol.for("react.strict_mode"):60108,c=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,h=a?Symbol.for("react.suspense_list"):60120,y=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder"),a&&Symbol.for("react.scope");var g="function"==typeof Symbol&&Symbol.iterator;function k(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||b}function S(){}function N(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw k(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=w.prototype;var O=N.prototype=new S;O.constructor=N,r(O,w.prototype),O.isPureReactComponent=!0;var C={current:null},j={suspense:null},x={current:null},P=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,r)&&!E.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:x.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g,I=[];function $(e,t,n,r){if(I.length){var a=I.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function D(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return n(r,e,""===t?"."+q(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var c=t+q(a=e[s],s);l+=D(a,c,n,r)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=g&&e[g]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),s=0;!(a=e.next()).done;)l+=D(a=a.value,c=t+q(a,s++),n,r);else if("object"===a)throw n=""+e,k(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return l}function M(e,t,n){return null==e?0:D(e,"",t,n)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function B(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(T,"$&/")+"/"),M(e,B,t=$(t,o,r,a)),A(t)}function F(){var e=C.current;if(null===e)throw k(Error(321));return e}var H={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,U,t=$(null,null,t,n)),A(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw k(Error(143));return e}},createRef:function(){return{current:null}},Component:w,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:l,Profiler:c,StrictMode:s,Suspense:d,unstable_SuspenseList:h,createElement:_,cloneElement:function(e,t,n){if(null==e)throw k(Error(267),e);var a=r({},e.props),i=e.key,l=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,s=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)P.call(t,u)&&!E.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){c=Array(u);for(var f=0;f<u;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:s}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var n=j.suspense;j.suspense=void 0===t?null:t;try{e()}finally{j.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:j,ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r}},K={default:H},V=K&&H||K;e.exports=V.default||V},7378:function(e,t,n){n(1535)},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1825:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7378),n(3905)),i=["components"],l={title:"Root Saga",hide_title:!0},s="Root Saga Patterns",c={unversionedId:"advanced/RootSaga",id:"advanced/RootSaga",isDocsHomePage:!1,title:"Root Saga",description:"A root Saga aggregates multiple Sagas to a single entry point for the sagaMiddleware to run.",source:"@site/../docs/advanced/RootSaga.md",sourceDirName:"advanced",slug:"/advanced/RootSaga",permalink:"/docs/advanced/RootSaga",editUrl:"https://github.com/redux-saga/redux-saga/edit/master/docs/../docs/advanced/RootSaga.md",tags:[],version:"current",frontMatter:{title:"Root Saga",hide_title:!0},sidebar:"docs",previous:{title:"Racing Effects",permalink:"/docs/advanced/RacingEffects"},next:{title:"Running Tasks In Parallel",permalink:"/docs/advanced/RunningTasksInParallel"}},u=[{value:"Non-blocking fork effects",id:"non-blocking-fork-effects",children:[],level:2},{value:"Nesting fork effects in all effect",id:"nesting-fork-effects-in-all-effect",children:[],level:2},{value:"Avoid nesting fork effects in race effect",id:"avoid-nesting-fork-effects-in-race-effect",children:[],level:2},{value:"Keeping the root alive",id:"keeping-the-root-alive",children:[],level:2},{value:"Keeping everything alive",id:"keeping-everything-alive",children:[],level:2}],f={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"root-saga-patterns"},"Root Saga Patterns"),(0,o.kt)("p",null,"A root Saga aggregates multiple Sagas to a single entry point for the sagaMiddleware to run."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/BeginnerTutorial"},"beginner tutorial"),", it is shown that your root saga will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default function* rootSaga() {\n  yield all([\n    helloSaga(),\n    watchIncrementAsync()\n  ])\n  // code after all-effect\n}\n")),(0,o.kt)("p",null,"This is one of a few ways to implement your root. Here, the ",(0,o.kt)("inlineCode",{parentName:"p"},"all")," effect is used with an array and your sagas will be executed in parallel. Other root implementations may help you better handle errors and more complex data flow."),(0,o.kt)("h2",{id:"non-blocking-fork-effects"},"Non-blocking fork effects"),(0,o.kt)("p",null,"Contributor @slorber mentioned in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redux-saga/redux-saga/issues/760"},"issue#760")," several other common root implementations. To start, there is one popular implementation that behaves similarly to the tutorial root saga behavior:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default function* rootSaga() {\n  yield fork(saga1)\n  yield fork(saga2)\n  yield fork(saga3)\n  // code after fork-effect\n}\n")),(0,o.kt)("p",null,"Using three unique ",(0,o.kt)("inlineCode",{parentName:"p"},"yield fork")," will give back a task descriptor three times. The resulting behavior in your app is that all of your sub-sagas are started and executed in the same order. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"fork")," is non-blocking, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rootSaga")," can finish while the child sagas continue to run and be blocked by their internal effects."),(0,o.kt)("p",null,"The difference between one big all effect and several fork effects is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"all")," effect is blocking, so ",(0,o.kt)("em",{parentName:"p"},"code after all-effect")," (see comments in above code) is executed when all children sagas complete, while ",(0,o.kt)("inlineCode",{parentName:"p"},"fork")," effects are non-blocking so ",(0,o.kt)("em",{parentName:"p"},"code after fork-effect")," is executed immediately after yielding the fork effects. Another difference is that you can get task descriptors when using fork effects, so in the subsequent code you can cancel/join the forked task via task descriptors."),(0,o.kt)("h2",{id:"nesting-fork-effects-in-all-effect"},"Nesting fork effects in all effect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const [task1, task2, task3] = yield all([ fork(saga1), fork(saga2), fork(saga3) ])\n")),(0,o.kt)("p",null,"There is another popular pattern when designing root saga: nesting ",(0,o.kt)("inlineCode",{parentName:"p"},"fork")," effects in an ",(0,o.kt)("inlineCode",{parentName:"p"},"all")," effect. By doing so, you can get an array of task descriptors, and the code after the ",(0,o.kt)("inlineCode",{parentName:"p"},"all")," effect will be executed immediately because each ",(0,o.kt)("inlineCode",{parentName:"p"},"fork")," effect is non-blocking and synchronously returning a task descriptor."),(0,o.kt)("p",null,"Note that though ",(0,o.kt)("inlineCode",{parentName:"p"},"fork")," effects are nested in an ",(0,o.kt)("inlineCode",{parentName:"p"},"all")," effect, they are always connected to the parent task through the underlying forkQueue. Uncaught errors from forked tasks bubble to the parent task and thus abort it (and all its child tasks) - they cannot be caught by the parent task."),(0,o.kt)("h2",{id:"avoid-nesting-fork-effects-in-race-effect"},"Avoid nesting fork effects in race effect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// DO NOT DO THIS. The fork effect always wins the race immediately.\nyield race([\n  fork(someSaga),\n  take('SOME-ACTION'),\n  somePromise,\n])\n")),(0,o.kt)("p",null,"On the other hand, ",(0,o.kt)("inlineCode",{parentName:"p"},"fork")," effects in a ",(0,o.kt)("inlineCode",{parentName:"p"},"race")," effect is most likely a bug. In the above code, since ",(0,o.kt)("inlineCode",{parentName:"p"},"fork")," effects are non-blocking, they will always win the race immediately."),(0,o.kt)("h2",{id:"keeping-the-root-alive"},"Keeping the root alive"),(0,o.kt)("p",null,"In practice, these implementations aren't terribly practical because your ",(0,o.kt)("inlineCode",{parentName:"p"},"rootSaga")," will terminate on the first error in any individual child effect or saga and crash your whole app! Ajax requests in particular would put your app at the mercy of the status of any endpoints your app makes requests to."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"spawn")," is an effect that will ",(0,o.kt)("em",{parentName:"p"},"disconnect")," your child saga from its parent, allowing it to fail without crashing its parent. Obviously, this does not relieve us from our responsibility as developers to still handle errors as they arise. In fact, it's possible that this might obscure certain failures from the developer's viewpoint and cause problems further down the road."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/api#spawnfn-args"},(0,o.kt)("inlineCode",{parentName:"a"},"spawn"))," effect might be considered similar to ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")," in React in that it can be used as an extra safety measure at some level of the saga tree, cutting off the failing feature and not letting the whole app crash. The difference is that there is no special syntax like the ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," that exists for React Error Boundaries. You must still write your own error handling and recovery code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default function* rootSaga() {\n  yield spawn(saga1)\n  yield spawn(saga2)\n  yield spawn(saga3)\n}\n")),(0,o.kt)("p",null,"In this implementation, even if one saga were to fail, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rootSaga")," and other sagas will not be killed. However, this can also be problematic since the failing saga would be unavailable for the app's lifetime."),(0,o.kt)("h2",{id:"keeping-everything-alive"},"Keeping everything alive"),(0,o.kt)("p",null,"In some cases, it may be desirable for your sagas to be able to restart in the event of failure. The benefit is that your app and sagas may continue to work after failing, i.e. a saga that ",(0,o.kt)("inlineCode",{parentName:"p"},"yield takeEvery(myActionType)"),". But we do not recommend this as a blanket solution to keep all sagas alive. It is very likely that it makes more sense to let your saga fail in sanely and predictably and handle/log your error."),(0,o.kt)("p",null,"For example, @ajwhite offered this scenario as a case where keeping your saga alive would cause more problems than it solves:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function* sagaThatMayCrash () {\n  // wait for something that happens _during app startup_\n  yield take('APP_INITIALIZED')\n\n  // assume it dies here\n  yield call(doSomethingThatMayCrash)\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the sagaThatMayCrash is restarted, it will restart and wait for an action that only happens once when the application starts up. In this scenario, it restarts, but it never recovers.")),(0,o.kt)("p",null,"But for the specific situations that would benefit from starting, user @granmoe proposed an implementation like this in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redux-saga/redux-saga/issues/570"},"issue#570"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function* rootSaga () {\n  const sagas = [\n    saga1,\n    saga2,\n    saga3,\n  ];\n\n  yield all(sagas.map(saga =>\n    spawn(function* () {\n      while (true) {\n        try {\n          yield call(saga)\n          break\n        } catch (e) {\n          console.log(e)\n        }\n      }\n    }))\n  );\n}\n")),(0,o.kt)("p",null,"This strategy maps our child sagas to spawned generators (detaching them from the root parent) which start our sagas as subtasks in a ",(0,o.kt)("inlineCode",{parentName:"p"},"try")," block. Our saga will run until termination, and then be automatically restarted. The ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," block harmlessly handles any error that may have been thrown by, and terminated, our saga."))}p.isMDXComponent=!0}}]);