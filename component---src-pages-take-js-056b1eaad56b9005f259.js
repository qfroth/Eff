(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{139:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=(n(77),n(39),n(76),n(51),n(188),n(35),n(287),n(288),n(52),n(49),n(83),n(26),n(55),n(7)),i=n.n(a),s=n(279),c=n.n(s),l=n(167),u=n.n(l),d=n(174),m=n(143),p=n.n(m),f=n(146),v=n.n(f),h=n(140),y=n.n(h),g=n(144),b=n.n(g),C=n(141),w=n.n(C),k=n(142),E=n.n(k),N=n(34),x=n(179),S=n(272),O=n(168),T=function(e){function t(){return y()(this,t),w()(this,e.apply(this,arguments))}return E()(t,e),t.prototype.shouldComponentUpdate=function(e){return!!e.hiddenClassName||!!e.visible},t.prototype.render=function(){var e=this.props.className;this.props.hiddenClassName&&!this.props.visible&&(e+=" "+this.props.hiddenClassName);var t=p()({},this.props);return delete t.hiddenClassName,delete t.visible,t.className=e,o.createElement("div",p()({},t))},t}(o.Component),P=n(477),A=0,I=0;function L(e,t){var n=e["page"+(t?"Y":"X")+"Offset"],o="scroll"+(t?"Top":"Left");if("number"!=typeof n){var r=e.document;"number"!=typeof(n=r.documentElement[o])&&(n=r.body[o])}return n}function R(e,t){var n=e.style;["Webkit","Moz","Ms","ms"].forEach(function(e){n[e+"TransformOrigin"]=t}),n.transformOrigin=t}var j=function(e){function t(){y()(this,t);var n=w()(this,e.apply(this,arguments));return n.onAnimateLeave=function(){var e=n.props.afterClose;n.wrap&&(n.wrap.style.display="none"),n.inTransition=!1,n.removeScrollingEffect(),e&&e()},n.onMaskClick=function(e){Date.now()-n.openTime<300||e.target===e.currentTarget&&n.close(e)},n.onKeyDown=function(e){var t=n.props;if(t.keyboard&&e.keyCode===x.a.ESC)return e.stopPropagation(),void n.close(e);if(t.visible&&e.keyCode===x.a.TAB){var o=document.activeElement,r=n.sentinelStart;e.shiftKey?o===r&&n.sentinelEnd.focus():o===n.sentinelEnd&&r.focus()}},n.getDialogElement=function(){var e=n.props,t=e.closable,r=e.prefixCls,a={};void 0!==e.width&&(a.width=e.width),void 0!==e.height&&(a.height=e.height);var i=void 0;e.footer&&(i=o.createElement("div",{className:r+"-footer",ref:n.saveRef("footer")},e.footer));var s=void 0;e.title&&(s=o.createElement("div",{className:r+"-header",ref:n.saveRef("header")},o.createElement("div",{className:r+"-title",id:n.titleId},e.title)));var c=void 0;t&&(c=o.createElement("button",{onClick:n.close,"aria-label":"Close",className:r+"-close"},e.closeIcon||o.createElement("span",{className:r+"-close-x"})));var l=p()({},e.style,a),u={width:0,height:0,overflow:"hidden"},d=n.getTransitionName(),m=o.createElement(T,{key:"dialog-element",role:"document",ref:n.saveRef("dialog"),style:l,className:r+" "+(e.className||""),visible:e.visible},o.createElement("div",{tabIndex:0,ref:n.saveRef("sentinelStart"),style:u},"sentinelStart"),o.createElement("div",{className:r+"-content"},c,s,o.createElement("div",p()({className:r+"-body",style:e.bodyStyle,ref:n.saveRef("body")},e.bodyProps),e.children),i),o.createElement("div",{tabIndex:0,ref:n.saveRef("sentinelEnd"),style:u},"sentinelEnd"));return o.createElement(O.a,{key:"dialog",showProp:"visible",onLeave:n.onAnimateLeave,transitionName:d,component:"",transitionAppear:!0},e.visible||!e.destroyOnClose?m:null)},n.getZIndexStyle=function(){var e={},t=n.props;return void 0!==t.zIndex&&(e.zIndex=t.zIndex),e},n.getWrapStyle=function(){return p()({},n.getZIndexStyle(),n.props.wrapStyle)},n.getMaskStyle=function(){return p()({},n.getZIndexStyle(),n.props.maskStyle)},n.getMaskElement=function(){var e=n.props,t=void 0;if(e.mask){var r=n.getMaskTransitionName();t=o.createElement(T,p()({style:n.getMaskStyle(),key:"mask",className:e.prefixCls+"-mask",hiddenClassName:e.prefixCls+"-mask-hidden",visible:e.visible},e.maskProps)),r&&(t=o.createElement(O.a,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:r},t))}return t},n.getMaskTransitionName=function(){var e=n.props,t=e.maskTransitionName,o=e.maskAnimation;return!t&&o&&(t=e.prefixCls+"-"+o),t},n.getTransitionName=function(){var e=n.props,t=e.transitionName,o=e.animation;return!t&&o&&(t=e.prefixCls+"-"+o),t},n.setScrollbar=function(){n.bodyIsOverflowing&&void 0!==n.scrollbarWidth&&(document.body.style.paddingRight=n.scrollbarWidth+"px")},n.addScrollingEffect=function(){1===++I&&(n.checkScrollbar(),n.setScrollbar(),document.body.style.overflow="hidden")},n.removeScrollingEffect=function(){0===--I&&(document.body.style.overflow="",n.resetScrollbar())},n.close=function(e){var t=n.props.onClose;t&&t(e)},n.checkScrollbar=function(){var e=window.innerWidth;if(!e){var t=document.documentElement.getBoundingClientRect();e=t.right-Math.abs(t.left)}n.bodyIsOverflowing=document.body.clientWidth<e,n.bodyIsOverflowing&&(n.scrollbarWidth=Object(P.a)())},n.resetScrollbar=function(){document.body.style.paddingRight=""},n.adjustDialog=function(){if(n.wrap&&void 0!==n.scrollbarWidth){var e=n.wrap.scrollHeight>document.documentElement.clientHeight;n.wrap.style.paddingLeft=(!n.bodyIsOverflowing&&e?n.scrollbarWidth:"")+"px",n.wrap.style.paddingRight=(n.bodyIsOverflowing&&!e?n.scrollbarWidth:"")+"px"}},n.resetAdjustments=function(){n.wrap&&(n.wrap.style.paddingLeft=n.wrap.style.paddingLeft="")},n.saveRef=function(e){return function(t){n[e]=t}},n}return E()(t,e),t.prototype.componentWillMount=function(){this.inTransition=!1,this.titleId="rcDialogTitle"+A++},t.prototype.componentDidMount=function(){this.componentDidUpdate({})},t.prototype.componentDidUpdate=function(e){var t,n,o,r,a,i=this.props,s=this.props.mousePosition;if(i.visible){if(!e.visible){this.openTime=Date.now(),this.addScrollingEffect(),this.tryFocus();var c=N.findDOMNode(this.dialog);if(s){var l=(n=(t=c).getBoundingClientRect(),o={left:n.left,top:n.top},r=t.ownerDocument,a=r.defaultView||r.parentWindow,o.left+=L(a),o.top+=L(a,!0),o);R(c,s.x-l.left+"px "+(s.y-l.top)+"px")}else R(c,"")}}else if(e.visible&&(this.inTransition=!0,i.mask&&this.lastOutSideFocusNode)){try{this.lastOutSideFocusNode.focus()}catch(e){this.lastOutSideFocusNode=null}this.lastOutSideFocusNode=null}},t.prototype.componentWillUnmount=function(){(this.props.visible||this.inTransition)&&this.removeScrollingEffect()},t.prototype.tryFocus=function(){Object(S.a)(this.wrap,document.activeElement)||(this.lastOutSideFocusNode=document.activeElement,this.sentinelStart.focus())},t.prototype.render=function(){var e=this.props,t=e.prefixCls,n=e.maskClosable,r=this.getWrapStyle();return e.visible&&(r.display=null),o.createElement("div",null,this.getMaskElement(),o.createElement("div",p()({tabIndex:-1,onKeyDown:this.onKeyDown,className:t+"-wrap "+(e.wrapClassName||""),ref:this.saveRef("wrap"),onClick:n?this.onMaskClick:void 0,role:"dialog","aria-labelledby":e.title?this.titleId:null,style:r},e.wrapProps),this.getDialogElement()))},t}(o.Component),M=j;j.defaultProps={className:"",mask:!0,visible:!1,keyboard:!0,closable:!0,maskClosable:!0,destroyOnClose:!1,prefixCls:"rc-dialog"};var D=n(273),W=n(274),Q="createPortal"in N,F=function(e){function t(){y()(this,t);var n=w()(this,e.apply(this,arguments));return n.saveDialog=function(e){n._component=e},n.getComponent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.createElement(M,p()({ref:n.saveDialog},n.props,e,{key:"dialog"}))},n.getContainer=function(){var e=document.createElement("div");return n.props.getContainer?n.props.getContainer().appendChild(e):document.body.appendChild(e),e},n}return E()(t,e),t.prototype.shouldComponentUpdate=function(e){var t=e.visible;return!(!this.props.visible&&!t)},t.prototype.componentWillUnmount=function(){Q||(this.props.visible?this.renderComponent({afterClose:this.removeContainer,onClose:function(){},visible:!1}):this.removeContainer())},t.prototype.render=function(){var e=this,t=this.props.visible,n=null;return Q?((t||this._component)&&(n=o.createElement(W.a,{getContainer:this.getContainer},this.getComponent())),n):o.createElement(D.a,{parent:this,visible:t,autoDestroy:!1,getComponent:this.getComponent,getContainer:this.getContainer},function(t){var n=t.renderComponent,o=t.removeContainer;return e.renderComponent=n,e.removeContainer=o,null})},t}(o.Component);F.defaultProps={visible:!1};var q=F,_=n(4),B=n(145),z=n.n(B),U=n(194),G=n(202),H=n(187),V=n(238),K=p()({},V.a.Modal);function J(){return K}var Y=n(148),Z=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},X=void 0,$=void 0,ee=function(e){function t(){y()(this,t);var e=w()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.handleCancel=function(t){var n=e.props.onCancel;n&&n(t)},e.handleOk=function(t){var n=e.props.onOk;n&&n(t)},e.renderFooter=function(t){var n=e.props,r=n.okText,a=n.okType,i=n.cancelText,s=n.confirmLoading;return o.createElement("div",null,o.createElement(G.a,p()({onClick:e.handleCancel},e.props.cancelButtonProps),i||t.cancelText),o.createElement(G.a,p()({type:a,loading:s,onClick:e.handleOk},e.props.okButtonProps),r||t.okText))},e}return E()(t,e),b()(t,[{key:"componentDidMount",value:function(){$||(Object(U.a)(document.documentElement,"click",function(e){X={x:e.pageX,y:e.pageY},setTimeout(function(){return X=null},100)}),$=!0)}},{key:"render",value:function(){var e=this.props,t=e.footer,n=e.visible,r=e.wrapClassName,a=e.centered,i=e.prefixCls,s=Z(e,["footer","visible","wrapClassName","centered","prefixCls"]),c=o.createElement(H.a,{componentName:"Modal",defaultLocale:J()},this.renderFooter),l=o.createElement("span",{className:i+"-close-x"},o.createElement(Y.a,{className:i+"-close-icon",type:"close"}));return o.createElement(q,p()({},s,{prefixCls:i,wrapClassName:z()(v()({},i+"-centered",!!a),r),footer:void 0===t?c:t,visible:n,mousePosition:X,onClose:this.handleCancel,closeIcon:l}))}}]),t}(o.Component),te=ee;ee.defaultProps={prefixCls:"ant-modal",width:520,transitionName:"zoom",maskTransitionName:"fade",confirmLoading:!1,visible:!1,okType:"primary",okButtonDisabled:!1,cancelButtonDisabled:!1},ee.propTypes={prefixCls:_.string,onOk:_.func,onCancel:_.func,okText:_.node,cancelText:_.node,centered:_.bool,width:_.oneOfType([_.number,_.string]),confirmLoading:_.bool,visible:_.bool,align:_.object,footer:_.node,title:_.node,closable:_.bool};var ne=function(e){function t(e){y()(this,t);var n=w()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClick=function(){var e=n.props,t=e.actionFn,o=e.closeModal;if(t){var r=void 0;t.length?r=t(o):(r=t())||o(),r&&r.then&&(n.setState({loading:!0}),r.then(function(){o.apply(void 0,arguments)},function(){n.setState({loading:!1})}))}else o()},n.state={loading:!1},n}return E()(t,e),b()(t,[{key:"componentDidMount",value:function(){if(this.props.autoFocus){var e=N.findDOMNode(this);this.timeoutId=setTimeout(function(){return e.focus()})}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.children,r=e.buttonProps,a=this.state.loading;return o.createElement(G.a,p()({type:t,onClick:this.onClick,loading:a},r),n)}}]),t}(o.Component),oe=!!N.createPortal,re=function(e){var t=e.onCancel,n=e.onOk,r=e.close,a=e.zIndex,i=e.afterClose,s=e.visible,c=e.keyboard,l=e.centered,u=e.getContainer,d=e.maskStyle,m=e.okButtonProps,p=e.cancelButtonProps,f=e.iconType||"question-circle",h=e.okType||"primary",y=e.prefixCls||"ant-modal",g=y+"-confirm",b=!("okCancel"in e)||e.okCancel,C=e.width||416,w=e.style||{},k=void 0!==e.maskClosable&&e.maskClosable,E=J(),N=e.okText||(b?E.okText:E.justOkText),x=e.cancelText||E.cancelText,S=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),O=z()(g,g+"-"+e.type,e.className),T=b&&o.createElement(ne,{actionFn:t,closeModal:r,autoFocus:"cancel"===S,buttonProps:p},x);return o.createElement(te,{prefixCls:y,className:O,wrapClassName:z()(v()({},g+"-centered",!!e.centered)),onCancel:r.bind(void 0,{triggerCancel:!0}),visible:s,title:"",transitionName:"zoom",footer:"",maskTransitionName:"fade",maskClosable:k,maskStyle:d,style:w,width:C,zIndex:a,afterClose:i,keyboard:c,centered:l,getContainer:u},o.createElement("div",{className:g+"-body-wrapper"},o.createElement("div",{className:g+"-body"},o.createElement(Y.a,{type:f}),o.createElement("span",{className:g+"-title"},e.title),o.createElement("div",{className:g+"-content"},e.content)),o.createElement("div",{className:g+"-btns"},T,o.createElement(ne,{type:h,actionFn:n,closeModal:r,autoFocus:"ok"===S,buttonProps:m},N))))};function ae(e){var t=document.createElement("div");document.body.appendChild(t);var n=p()({},e,{close:r,visible:!0});function r(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n=p()({},n,{visible:!1,afterClose:a.bind.apply(a,[this].concat(t))}),oe?i(n):a.apply(void 0,t)}function a(){N.unmountComponentAtNode(t)&&t.parentNode&&t.parentNode.removeChild(t);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];var a=o&&o.length&&o.some(function(e){return e&&e.triggerCancel});e.onCancel&&a&&e.onCancel.apply(e,o)}function i(e){N.render(o.createElement(re,e),t)}return i(n),{destroy:r,update:function(e){i(n=p()({},n,e))}}}te.info=function(e){return ae(p()({type:"info",iconType:"info-circle",okCancel:!1},e))},te.success=function(e){return ae(p()({type:"success",iconType:"check-circle",okCancel:!1},e))},te.error=function(e){return ae(p()({type:"error",iconType:"close-circle",okCancel:!1},e))},te.warning=te.warn=function(e){return ae(p()({type:"warning",iconType:"exclamation-circle",okCancel:!1},e))},te.confirm=function(e){return ae(p()({type:"confirm",okCancel:!0},e))};var ie=te,se=n(480),ce=n(479),le=function(e){var t=e.options,n=void 0===t?[]:t,o=e.isTestMode,a=void 0!==o&&o,i=e.active,s=e.onSelectQuestion,c=function(e){for(var t={},n=function(){var n=r.a.createElement("svg",{className:"sider-num",viewBox:"0 0 44 44"},r.a.createElement("text",{fontSize:"36",fill:"black",fontFamily:"Verdana",textAnchor:"middle",alignmentBaseline:"baseline",x:"22",y:"34.4"},""+e));t[e]=function(){return n},e-=1};e>0;)n();return t}(n.length);return r.a.createElement(ce.a,{className:"side-menu",mode:"inline",selectedKeys:[""+i]||!1},n.map(function(e,t){var n=e.hasAnswer?"answered":"unanswered",o=(e.isCorrect,"incorrect");return r.a.createElement(ce.a.Item,{onClick:s,key:""+t,className:a?n:o},r.a.createElement(Y.a,{component:c[t+1],onClick:function(){return console.log({opt:e})}}),r.a.createElement("span",null,e.question))}))},ue=/img\[.*?\]/g,de={RIGHT_ARROW:39,LEFT_ARROW:37,UP_ARROW:38,DOWN_ARROW:40,ENTER:13},me=function(e){var t=e.data,n=t=function(e){if(e){var t=e.match(ue);t&&t.map(function(e){return"<img src="+e.substring(4,e.length-1)+" />"}).forEach(function(n,o){e=e.replace(t[o],n)})}return e}(t=function(e){return e instanceof Array&&(e=e.join("<br/>")),e}(t));return r.a.createElement("div",{className:"test-question",dangerouslySetInnerHTML:{__html:n}})},pe=(n(476),n(290)),fe=n(239),ve=function(e){var t=e.choices,n=void 0===t?{}:t,o=e.disabled,a=e.onSelect,i=e.defaultValue,s=void 0===i?[]:i;return r.a.createElement(pe.a.Group,{className:"answers-group",options:function(e){var t=e.choices,n=void 0===t?{}:t;return Object.keys(n).sort().map(function(e){return{label:"[ "+e+" ] "+n[e],value:e}})}({choices:n}),value:s.length>0?s[0]:null,disabled:o,onChange:function(e){a({answer:e.target.value,isCheckbox:!1})}})},he=function(e){var t=e.choices,n=void 0===t?{}:t,o=e.disabled,a=e.onSelect,i=e.defaultValue,s=void 0===i?[]:i;return r.a.createElement(fe.a.Group,{value:function(e){var t=e.choices,n=e.defaultValue,o=[];return Object.keys(t).forEach(function(e){n.includes(e)&&o.push("[ "+e+" ] "+t[e])}),o}({choices:n,defaultValue:s}),options:function(e){var t=e.choices,n=void 0===t?{}:t;return Object.keys(n).sort().map(function(e){return"[ "+e+" ] "+n[e]})}({choices:n}),disabled:o,onChange:function(e){return a({answer:e,isCheckbox:!0})}})},ye=function(e){var t=e.data,n=void 0===t?{}:t,o=e.answers,a=e.isCheckbox,i=e.onSelect,s=e.disabled,c={disabled:void 0!==s&&s,onSelect:i,choices:n,defaultValue:o.userAnswer};return r.a.createElement("div",{className:"focus-choices-container"},a?r.a.createElement(he,c):r.a.createElement(ve,c))},ge=(n(78),function(e){return e?e.split("\n").join("<br />"):null}),be=function(e){var t,n=e.answers,o=void 0===n?[]:n,a=e.explain;return r.a.createElement("div",{className:"test-answer"},r.a.createElement("h2",null,"Correct Answer: ",o.join(", ")),r.a.createElement("div",{className:"test-explain",dangerouslySetInnerHTML:{__html:(t=a,t instanceof Array?t.map(function(e){return ge(e)}).join("<br />"):ge(t))}}))},Ce=function(e){var t=e.question,n=e.choices,o=e.explain,a=e.onSelectAnswer,i=e.userAnswer,s=void 0===i?{}:i,c=e.answer,l=void 0===c?[]:c,u=e.showAnswer,d=void 0!==u&&u;return r.a.createElement("div",{className:"focus-container"},r.a.createElement(me,{data:t}),r.a.createElement(ye,{data:n,onSelect:a,isCheckbox:l.length>1,answers:s,disabled:d}),d&&r.a.createElement(be,{answers:l,explain:o,userAnswer:s.userAnswer}))},we=n(175),ke=function(e){function t(t){var n;return(n=e.call(this,t)||this).secondsToTime=function(e){var t=e%3600,n=t%60;return{hours:Math.floor(e/3600),minutes:Math.floor(t/60),seconds:Math.ceil(n)}},n.countDown=function(){var e=n.state.maxTime-1,t=n.secondsToTime(e);n.setState({time:t,maxTime:e}),0===e&&(n.props.onTimerEnded(),clearInterval(n.timer))},n.render=function(){var e=n.state.time,t=e.hours,o=e.minutes,a=e.seconds;return r.a.createElement("div",{className:"timer-container"},r.a.createElement("span",null,t,":",o,":",a," Remaining"))},n.state={maxTime:Object(we.a)(n.props.onTimeInSec),time:{hours:0,minutes:0,seconds:0}},n.timer=setInterval(n.countDown,1e3),n}return i()(t,e),t}(o.Component),Ee=n(237),Ne=n(185),xe=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).timeLimit=0,t.state={mode:"test",userAnswers:{},timeLimit:0,testLength:0,allQuestionList:[],questionList:[],currentQuestion:{},currentQuestionNum:"0",isError:!1,hasNext:!1,hasPrev:!1},t.componentDidMount=function(){var e=Object(Ee.b)(),n=e.url,o=e.timeLimit,r=e.testLength,a=-1!==n.search(/^http[s]?:\/\//),i=-1!==n.search(/^http:\//),s=-1!==n.search(/^https:\//),l=s||i?n:"http://"+n;a||(i?l=l.replace(/^http:\//,"http://"):s&&(l=l.replace(/^https:\//,"https://"))),c.a.get(l).then(function(e){var n=e.data,a=Object(Ee.d)(n).slice(0,r),i=a[0];t.timeLimit=o,t.setState({questionList:a,allQuestionList:n,currentQuestion:i,currentQuestionNum:"0",testLength:r,hasPrev:!1,hasNext:!0});var s=Object(we.b)({key:Ne.a.previousLinks,defaultValue:[]}).filter(function(e){return e!==l});Object(we.c)({key:Ne.a.previousLinks,value:[l].concat(s)}),document.addEventListener("keydown",t._handleKeyPress)}).catch(function(e){console.log({err:e}),Object(d.navigate)("/404/")})},t._handleKeyPress=function(e){var n=e.keyCode,o=t.state,r=o.hasNext,a=o.hasPrev,i=(n===de.DOWN_ARROW||n===de.RIGHT_ARROW)&&r,s=(n===de.UP_ARROW||n===de.LEFT_ARROW)&&a;i?t.onNextPress():s&&t.onPrevPress()},t.onNextPress=function(){var e=t.state,n=e.currentQuestionNum,o=e.questionList,r=e.testLength,a=parseInt(n)+1,i=o[a],s=a<r-1;t.setState({currentQuestionNum:""+a,currentQuestion:i,hasNext:s,hasPrev:!0})},t.onPrevPress=function(){var e=t.state,n=e.currentQuestionNum,o=e.questionList,r=e.testLength,a=parseInt(n)-1,i=o[a],s=a<r,c=a>0;t.setState({currentQuestionNum:""+a,currentQuestion:i,hasNext:s,hasPrev:c})},t.onSelectAnswer=function(e){var n=e.isCheckbox,o=e.answer,r=t.state,a=r.questionList,i=r.currentQuestion,s=r.currentQuestionNum,c=r.userAnswers,l=i.answer,u=n?o.map(function(e){return e.match(/\[ [A-Z] \] /,"")[0].replace("[ ","").replace(" ] ","")}):[o],d=l.filter(function(e){return u.includes(e)}).length===l.length;c[parseInt(s)]={testAnswer:l,userAnswer:u,isCorrect:d},a[parseInt(s)]=Object.assign({},i,{hasAnswer:u.length>0,isCorrect:d});var m=Object.keys(c).length===a.length;t.setState({userAnswers:c,allAnswered:m,questionList:a})},t.onSelectSideQuestion=function(e){var n=e.key;return t.setState({currentQuestion:t.state.questionList[parseInt(n)],currentQuestionNum:n,hasNext:parseInt(n)<t.state.testLength,hasPrev:parseInt(n)>0})},t.onSubmit=function(){return ie.confirm({title:"Are you sure?",onOk:function(){return t.onScoreTest().then(t.onEndTest)}})},t.onTimerEnded=function(){return t.onScoreTest().then(t.onEndTest)},t.onScoreTest=function(){return new Promise(function(e,n){var o=0;Object.keys(t.state.userAnswers).forEach(function(e){t.state.userAnswers[e].isCorrect&&(o+=1)});var r=o/t.state.questionList.length*100;e(Math.round(r).toFixed(0))})},t.onEndTest=function(e){return ie.confirm({title:"Test Result",content:"You score is "+e+"%",onOk:function(){var n=Ne.a.storageKey,o=Object(we.b)({key:n,defaultValue:[]}),r=u()().format("MMMM Do YYYY, h:mm:ss a"),a=t.state.testLength,i={testScore:e,testDate:r,testLength:a};Object(we.c)({key:n,value:[i].concat(o)}),t.setState({mode:"review"})}})},t.render=function(){return r.a.createElement(se.a,{className:"full"},r.a.createElement(se.a.Sider,{collapsed:!0},r.a.createElement(le,{isTestMode:"test"===t.state.mode,options:t.state.questionList,active:t.state.currentQuestionNum,onSelectQuestion:t.onSelectSideQuestion})),r.a.createElement(se.a.Content,null,r.a.createElement(se.a,{className:"focus-layout"},r.a.createElement(se.a.Header,{id:"focus-header"},r.a.createElement("h2",{id:"question-number"},"Q: ",parseInt(t.state.currentQuestionNum)+1),t.timeLimit>0&&"test"===t.state.mode&&r.a.createElement(ke,{onTimeInSec:t.timeLimit,onTimerEnded:t.onTimerEnded})),r.a.createElement(se.a.Content,null,r.a.createElement(Ce,Object.assign({},t.state.currentQuestion,{onSelectAnswer:t.onSelectAnswer,showAnswer:"review"===t.state.mode,userAnswer:t.state.userAnswers[parseInt(t.state.currentQuestionNum)]}))),r.a.createElement(se.a.Footer,null,t.state.allAnswered&&"test"===t.state.mode&&r.a.createElement(G.a,{id:"submit-test-btn",size:"large",type:"danger",onClick:t.onSubmit,ghost:!0},"Submit"),"review"===t.state.mode&&r.a.createElement(G.a,{id:"home-btn",size:"large",type:"danger",onClick:function(){return Object(d.navigate)("")},ghost:!0},"Go Home"),r.a.createElement(G.a.Group,{size:"large",className:"test-nav-buttons"},t.state.hasPrev&&r.a.createElement(G.a,{onClick:t.onPrevPress},r.a.createElement(Y.a,{type:"left"}),"Back"),t.state.hasNext&&r.a.createElement(G.a,{onClick:t.onNextPress},"Next",r.a.createElement(Y.a,{type:"right"})))))))},t}return i()(t,e),t}(o.Component);n(161),n(478),n(235),t.default=function(){return r.a.createElement("div",{id:"app-main"},r.a.createElement(xe,null))}},159:function(e,t,n){var o;e.exports=(o=n(184))&&o.default||o},161:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var o=n(0),r=n.n(o),a=n(4),i=n.n(a),s=n(147),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(159),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(36);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},175:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a});n(218);var o=function(e){var t=e.key,n=e.defaultValue,o=e.callback,r=n;if("undefined"!=typeof window){var a=window.localStorage.getItem(t);a&&"undefined"!==a?r=a instanceof String||a instanceof Number?a:JSON.parse(a):window.localStorage.setItem(t,JSON.stringify(n))}else r=n;if("function"!=typeof o)return r;o(r)},r=function(e){var t=e.key,n=e.value;if("underfined"!=typeof window){var o=a(n);window.localStorage.setItem(t,JSON.stringify(o))}},a=function(e){return JSON.parse(JSON.stringify(e))}},184:function(e,t,n){"use strict";n.r(t);n(35);var o=n(0),r=n.n(o),a=n(4),i=n.n(a),s=n(54),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},185:function(e,t,n){"use strict";t.a={storageKey:"eff-test-score",previousLinks:"eff-link-history"}},237:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"d",function(){return i});n(26),n(76),n(51),n(188),n(49),n(78);var o=function(e){var t=e.format("HH:mm:ss").split(":");return 60*parseInt(t[0])*60+60*parseInt(t[1])+parseInt(t[2])},r=function(e){return void 0===e&&(e={}),Object.keys(e).map(function(t){return t+"="+e[t]}).join("&")},a=function(){var e={};return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,n,o){var r=parseInt(o);e[n]=isNaN(r)?o:r}),e},i=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),o=[e[n],e[t]];e[t]=o[0],e[n]=o[1]}return e}},287:function(e,t,n){"use strict";var o=n(6),r=n(57)(!0);o(o.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(59)("includes")},288:function(e,t,n){"use strict";var o=n(6),r=n(277);o(o.P+o.F*n(278)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},476:function(e,t,n){"use strict";var o=n(6),r=n(22),a=n(29),i=n(17),s=[].sort,c=[1,2,3];o(o.P+o.F*(i(function(){c.sort(void 0)})||!i(function(){c.sort(null)})||!n(15)(s)),"Array",{sort:function(e){return void 0===e?s.call(a(this)):s.call(a(this),r(e))}})},477:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=void 0;function r(e){if(e||void 0===o){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var n=document.createElement("div"),r=n.style;r.position="absolute",r.top=0,r.left=0,r.pointerEvents="none",r.visibility="hidden",r.width="200px",r.height="150px",r.overflow="hidden",n.appendChild(t),document.body.appendChild(n);var a=t.offsetWidth;n.style.overflow="scroll";var i=t.offsetWidth;a===i&&(i=n.clientWidth),document.body.removeChild(n),o=a-i}return o}},478:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-take-js-056b1eaad56b9005f259.js.map