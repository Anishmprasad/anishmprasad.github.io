(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{202:function(t,e){var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(i){var s=new Uint8Array(16);t.exports=function(){return i(s),s}}else{var a=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),a[e]=t>>>((3&e)<<3)&255;return a}}},203:function(t,e){for(var i=[],s=0;s<256;++s)i[s]=(s+256).toString(16).substr(1);t.exports=function(t,e){var s=e||0,a=i;return[a[t[s++]],a[t[s++]],a[t[s++]],a[t[s++]],"-",a[t[s++]],a[t[s++]],"-",a[t[s++]],a[t[s++]],"-",a[t[s++]],a[t[s++]],"-",a[t[s++]],a[t[s++]],a[t[s++]],a[t[s++]],a[t[s++]],a[t[s++]]].join("")}},222:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),a=i(1),n=r(a),o=(r(i(150)),r(i(200)),r(i(201)),r(i(348)),r(i(15)));function r(t){return t&&t.__esModule?t:{default:t}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=function(){function t(e,i,s){h(this,t),this.x=e||0,this.y=i||0,this.z=s||0}return s(t,[{key:"copy",value:function(){return new t(this.x,this.y,this.z)}},{key:"mag",value:function(){return Math.sqrt(this.magSq())}},{key:"magSq",value:function(){return this.x*this.x+this.y*this.y+this.z*this.z}},{key:"normalize",value:function(){return this.div(this.mag()),this}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}},{key:"mult",value:function(t){return this.x*=t,this.y*=t,this.z*=t,this}},{key:"div",value:function(t){return this.x/=t,this.y/=t,this.z/=t,this}}]),t}(),u=function(){function t(e){var i=this;h(this,t),this.data=e,this.RING_RADIUS=265,this.MAX_LINK_LENGTH=290,this.MOUSE_HOVER_DIST=120,this.CLICKABLE_RADIUS_ADD=0,this.IDLE_DRAG=.02,this.ACTIVE_DRAG=.5,this.ACTIVE_RADIUS=175,this.STROKE_WIDTH=10;var s=Math.random()*Math.PI*2,a=20*Math.random(),n="https://opensource.google.com/assets/images/alphabet/"+this.data.startsWith+".gif";this.data.lame||this.data.small?this.data.lame||this.active||!this.data.small?(this.STROKE_WIDTH=5-Math.floor(4*Math.random())+0,this.IDLE_RADIUS=25-(Math.floor(6*Math.random())+17)):(this.IDLE_RADIUS=7,this.STROKE_WIDTH=6):this.IDLE_RADIUS=30,this.emptyVector=new c(0,0,0),this.hoverState=0,this.fadeCount=0,this.start=new Date,this.age=0,this.pos=new c(Math.cos(s),Math.sin(s),0),this.pos=this.pos.mult(a),this.vel=new c(0,0,0),this.acc=new c(0,0,0),this.radius=this.IDLE_RADIUS,this.center=new c(0,0,0),this.active=!1,this.thumbImg=document.createElement("img"),"undefined"===typeof this.data.iconUrlSmall||this.data.lame?this.data.startsWith&&(this.thumbImg.src=n):this.thumbImg.src=this.data.iconUrlSmall,this.thumbImg.addEventListener("error",function(){i.thumbImg.src=n})}return s(t,[{key:"getAge",value:function(){return(new Date).getTime()-this.start}},{key:"applyForces",value:function(){this.vel.add(this.acc),this.pos.add(this.vel),this.acc=new c(0,0,0)}},{key:"update",value:function(t){this.active?this.STROKE_WIDTH=10:!this.data.lame&&this.data.small&&(this.STROKE_WIDTH=6),this.age+=1,this.applyForces(),this.updateLerps(),this.drag(this.active?this.ACTIVE_DRAG:this.IDLE_DRAG),this.active?this.moveToCenter():t||(this.jitter(.15),this.keepInRing(this.RING_RADIUS,7e-5),this.rotate(.002)),this.updateLink()}},{key:"moveToCenter",value:function(){this.pos.mult(.85).add(this.center.mult(.15))}},{key:"updateMousePos",value:function(t){if(t&&!this.data.lame){var e=this.pos.copy().sub(t);this.hoverState=Math.max((this.MOUSE_HOVER_DIST-e.mag())/this.MOUSE_HOVER_DIST,0),this.hoverState*=Math.max(0,Math.min(1,(this.getAge()-1e3)/5e3))}}},{key:"updateLerps",value:function(){var t=this.active?this.ACTIVE_RADIUS:this.IDLE_RADIUS;this.radius=.1*t+.9*this.radius}},{key:"hitTest",value:function(t,e){return new c(t,e,0).sub(this.pos).mag()<this.getDisplayRadius()+this.CLICKABLE_RADIUS_ADD}},{key:"onClick",value:function(){this.active?this.deactivate():this.activate()}},{key:"activate",value:function(){this.data.lame||(this.active=!0)}},{key:"deactivate",value:function(){this.active=!1}},{key:"getDisplayRadius",value:function(){var t=this.radius;return this.active||this.data.lame||(this.data.small?t+=26*(this.hoverState||0):t+=10*(this.hoverState||0)),t}},{key:"keepInRing",value:function(t,e){var i=this.pos.copy(),s=i.mag(),a=e*(t-s);0!=s&&i.normalize().mult(a),s<80&&i.mult(10),this.acc.add(i)}},{key:"jitter",value:function(t){var e=new c(Math.random()-.5,Math.random()-.5,0);e.mult(t),this.acc.add(e)}},{key:"drag",value:function(t){this.vel.mult(1-t)}},{key:"rotate",value:function(t){var e=this.pos.copy(),i=[-e.y,e.x];e.x=i[0],e.y=i[1],e.mult(t),this.pos.add(e)}},{key:"render",value:function(t){var e=this.getDisplayRadius(),i=this.data.small&&!this.data.focus?.65:.5;t.save(),t.beginPath(),t.arc(this.pos.x,this.pos.y,e,0,2*Math.PI,!0),t.fillStyle=this.data.lame?"#ececec":"rgba("+this.data.RGB.r+","+this.data.RGB.g+","+this.data.RGB.b+","+i+")",t.fill(),this.renderWhiteFill(t),(!this.data.small||this.active||this.data.lame||this.data.focus)&&!this.active&&!this.data.lame&&this.fadeCount>=.5&&this.renderLogo(t),t.closePath(),t.restore()}},{key:"renderWhiteFill",value:function(t){var e=this.getDisplayRadius();e=this.getDisplayRadius()>this.STROKE_WIDTH/2?e-this.STROKE_WIDTH/2:e,t.globalAlpha=this.active?1:this.fadeCount,t.beginPath(),t.arc(this.pos.x,this.pos.y,e,0,2*Math.PI,!0),t.fillStyle="white",t.fill(),this.fadeCount<1&&(this.fadeCount+=.05)}},{key:"renderLogo",value:function(t){var e=this.getDisplayRadius()/1.05,i={x:this.pos.x-e/2,y:this.pos.y-e/2};t.globalAlpha=this.fadeCount<=.9?this.fadeCount:.9,t.drawImage(this.thumbImg,i.x,i.y,e,e),"undefined"==typeof this.data.iconUrlSmall&&-1==navigator.userAgent.indexOf("MSIE")&&(t.globalCompositeOperation="lighten",t.fillStyle=this.data.fallbackColor,t.fillRect(i.x,i.y,e,e))}},{key:"getLineStart",value:function(){return new c(this.pos.x,this.pos.y,0)}},{key:"getLineEnd",value:function(){return new c(this.link.pos.x,this.link.pos.y,0)}},{key:"getDotAlpha",value:function(){return Math.min(1,this.age/10)}},{key:"getLinkAlpha",value:function(){var t=this.pos.copy().sub(this.link.pos).mag();return Math.max(0,(this.MAX_LINK_LENGTH-t)/this.MAX_LINK_LENGTH)}},{key:"renderLink",value:function(t,e){null==this.link||this.data.lame||(t.save(),t.beginPath(),this.doLinkPath(t),t.strokeStyle="#ececec",t.globalAlpha=this.getLinkAlpha(),t.lineWidth=this.STROKE_WIDTH-8,t.stroke(),t.closePath(),t.restore())}},{key:"doLinkPath",value:function(t){var e=this.getLineStart(),i=this.getLineEnd();t.moveTo(e.x,e.y),t.lineTo(i.x,i.y)}},{key:"updateLink",value:function(){var t=void 0;(null!=(t=this.link)?t.pos.copy().sub(this.pos).mag():void 0)>this.MAX_LINK_LENGTH&&this.killLink()}},{key:"linkTo",value:function(t){t.data.lame||(this.linkStartTime=new Date,this.link=t)}},{key:"killLink",value:function(){this.link=null}}]),t}(),l=function(t){function e(t){h(this,e);!function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return this.AMBIENCE_RANDOM_ACTION_INTERVAL=1e3,this.AMBIENCE_WAIT_AFTER_USER_INPUT=7e3,this.LAME_NODE_COUNT=25,this.canvas,this.done=!1,this.context,this.timer=window.requestAnimationFrame,this.frameCount=0,this.nodes=[],this.activeNode,this.hoveredNode,this.nextActionTime,this.formVisible,this.mousePos,this.globalMousePos,this.hovered=!1,this.pauseInteraction=!1,this.selected_project={},this.selected_project_changed=!1,this.hovered_project={},this.projects_subscription,this.config_service=this.props.config,this.canvas_width=this.props.width,this.canvas_height=this.props.height,this}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),s(e,[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var t=this,e=this;window.innerWidth<this.props.config.MOBILE_WIDTH?this.navigateToListView():window.addEventListener("resize",function(){window.innerWidth<e.config_service.MOBILE_WIDTH&&e.router.url.indexOf("explore")>0&&e.navigateToListView()});return this.refs.canvas.width=1*this.canvas_width,this.refs.canvas.height=1*this.canvas_height,this.context=this.refs.canvas.getContext("2d"),this.context.scale(1,1),this.done=!1,this.selectNone(),this.loadProjects(this.props.data),this.doRandomAction(),this.refs.canvas.dispatchEvent(new Event("mousemove")),this.refs.canvas.addEventListener("mousemove",function(e){t.moveHandler(e)}),this.refs.canvas.addEventListener("click",function(e){t.clickHandler(e)}),this.refs.canvas.addEventListener("mouseover",function(e){t.pauseInteraction=!0}),this.refs.canvas.addEventListener("mouseout",function(e){t.pauseInteraction=!1}),requestAnimationFrame(this.update.bind(this))}},{key:"loadProjects",value:function(t){var e=t.slice(),i={lame:!0},s=this;s.nodes=[];for(var a=0;a<this.LAME_NODE_COUNT;)e.push(i),a++;e.forEach(function(t,e){e>15&&!t.lame&&(t.small=!0),s.nodes.push(new u(t))})}},{key:"doRandomAction",value:function(){var t=void 0,e=this.filterLames();if(!this.pauseInteraction)return this.getActiveNodes().length?(this.setNextActionDelay(this.AMBIENCE_RANDOM_ACTION_INTERVAL),this.selectNone()):void(null!=(t=e[Math.floor(Math.random()*e.length)])&&(this.setNextActionDelay(this.AMBIENCE_WAIT_AFTER_USER_INPUT),t.activate(),this.selectProject(t)))}},{key:"filterLames",value:function(){return this.nodes.filter(function(t){return!t.data.lame})}},{key:"getActiveNodes",value:function(){return this.nodes.filter(function(t){return t.active})}},{key:"setNextActionDelay",value:function(t){this.nextActionTime=new Date((new Date).getTime()+t)}},{key:"userActionOccurred",value:function(){this.setNextActionDelay(this.AMBIENCE_WAIT_AFTER_USER_INPUT),this.activeNode=this.getActiveNodes()[0]}},{key:"ambientActionOccurred",value:function(){this.activeNode=this.getActiveNodes()[0]}},{key:"timeUntilNextAction",value:function(){return this.nextActionTime-(new Date).getTime()}},{key:"updateAmbience",value:function(){if(this.timeUntilNextAction()<0)return this.doRandomAction(),this.ambientActionOccurred()}},{key:"clickHandler",value:function(t){var e=this.refs.canvas.getBoundingClientRect(),i=t.pageX-e.left-window.pageXOffset,s=t.pageY-e.top-window.pageYOffset,a=this.getNodeUnder(i-this.canvas_width/2,s-this.canvas_height/2);a?a.active?a.onClick():(this.selectNone(),a.onClick(),this.selectProject(a)):this.selectNone(),this.userActionOccurred()}},{key:"navigateToListView",value:function(){this.projects_service.requestParams.page_size=this.config_service.LIST_PAGE_SIZE}},{key:"moveHandler",value:function(t){this.hoveredNode=this.mousePos?this.getNodeUnder(this.mousePos.x,this.mousePos.y):null;var e=this.refs.canvas.getBoundingClientRect();this.globalMousePos={x:t.pageX-e.left-window.pageXOffset,y:t.pageY-e.top-window.pageYOffset},this.mousePos=new c(this.globalMousePos.x-this.canvas_width/2,this.globalMousePos.y-this.canvas_height/2,0),t.preventDefault(),t.stopPropagation()}},{key:"hoverHandler",value:function(){if(this.mousePos){var t=this.getNodeUnder(this.mousePos.x,this.mousePos.y);this.clearHoverStyles(),this.hoveredNode&&t&&this.setHoverStyles(t),!this.hovered&&this.hoveredNode&&this.hoveredNode.data.small&&(this.hoveredNode.fadeCount=0)}}},{key:"setHoverStyles",value:function(t){this.refs.canvas.style.cursor="pointer",this.hovered_project=t,t.data.name!=this.hoveredNode.data.name&&this.hoveredNode.small?(t.data.focus=!0,t.fadeCount=0,this.hoveredNode.data.focus=!1):(t.data.focus=!1,this.hoveredNode.data.focus=!0),this.hovered=!0}},{key:"modulo",value:function(t,e){return(+t%(e=+e)+e)%e}},{key:"clickedArrow",value:function(t,e){var i,s,a=0,n=this.filterLames();n.forEach(function(t,e){t.active&&(a=e)}),i=this.modulo(a+t,n.length),this.selectNone(),(s=n[i]).activate(),this.selectProject(s),this.userActionOccurred(),e.stopPropagation()}},{key:"loadProjectDetails",value:function(t){this.projects_service.cachedColor=this.selected_project.fallbackColor||this.selected_project.primaryColor,t.preventDefault(),t.stopPropogation}},{key:"getNodeUnder",value:function(t,e){for(var i=[],s=null,a=this.nodes.length-1;a>=0;a+=-1){var n=this.nodes[a];n.hitTest(t,e)&&!n.data.lame&&i.push(n)}return i.forEach(function(t){t.data.small||(s=t)}),i.length&&!s?i[0]:s}},{key:"createLinks",value:function(){var t=!0,e=!1,i=void 0;try{for(var s,a=this.nodes[Symbol.iterator]();!(t=(s=a.next()).done);t=!0){var n=s.value;null==n.link&&n.linkTo(this.nodes[Math.floor(Math.random()*this.nodes.length)])}}catch(o){e=!0,i=o}finally{try{!t&&a.return&&a.return()}finally{if(e)throw i}}}},{key:"clearHoverStyles",value:function(){this.refs.canvas.style.cursor="default",this.nodes.forEach(function(t){t.data.focus=!1}),this.hovered=!1}},{key:"selectProject",value:function(t){this.selected_project=t.data,this.props.selectedNode&&this.props.selectedNode(t),setTimeout(function(){this.selected_project_changed=!0,this.props.selectedProjectChanged&&this.props.selectedProjectChanged({isProjectChanged:!0})}.bind(this),200)}},{key:"selectNone",value:function(){this.selected_project={},this.selected_project_changed=!1,this.props.selectedProjectChanged&&this.props.selectedProjectChanged({isProjectChanged:!1});var t=!0,e=!1,i=void 0;try{for(var s,a=this.nodes[Symbol.iterator]();!(t=(s=a.next()).done);t=!0){s.value.deactivate()}}catch(n){e=!0,i=n}finally{try{!t&&a.return&&a.return()}finally{if(e)throw i}}}},{key:"update",value:function(){if(!this.done)return this.canvasrender(this.context),this.hoverHandler(),this.nodes.length&&(this.frameCount+=1),1==this.frameCount&&this.ambientActionOccurred(),this.createLinks(),this.nodes.forEach(function(t){t.updateMousePos(this.mousePos),t.update(this.hoveredNode==t)}.bind(this)),this.updateAmbience(),requestAnimationFrame(this.update.bind(this))}},{key:"canvasrender",value:function(t){t.clearRect(0,0,this.canvas_width,this.canvas_height),t.save(),t.translate(this.canvas_width/2,this.canvas_height/2),this.nodes.forEach(function(e,i){e.renderLink(t)}),this.nodes.forEach(function(e,i){e.data.lame&&!e.active&&e.render(t)}),this.nodes.forEach(function(e,i){e.data.lame||e.active||!e.data.small||e.render(t)}),this.nodes.forEach(function(e,i){e.data.lame||e.active||e.data.small||e.data.focus||e.render(t)}),this.nodes.forEach(function(e,i){e.data.lame||e.active||!e.data.focus||e.render(t)}),this.nodes.forEach(function(e,i){!e.data.lame&&e.active&&e.render(t)}),t.restore()}},{key:"shouldComponentUpdate",value:function(t){return t.data!=this.props.data}},{key:"render",value:function(){var t=this.props.width,e=this.props.height;return n.default.createElement("canvas",{ref:"canvas",width:t,height:e})}}]),e}();l.defaultProps={width:720,height:720,data:[{id:"tensorflow",name:"TensorFlow",summary:"TensorFlow is a fast, flexible, and scalable open source machine learning library for research and production",iconUrlSmall:"https://www.gstatic.com/opensource/project-images/tensorflow/logo.png?rs=AGWjSYQ1HC13sEyluXwZoYWC2w2i9qsPjQ&sqp=-oaymwEICEwQTCAAUAEIttCMygU",iconUrlMedium:"https://www.gstatic.com/opensource/project-images/tensorflow/logo.png?rs=AGWjSYQ7IXg35u8B_D41kSCIRrHjJYcfng&sqp=-oaymwEKCIwBEIwBIABQAQi20IzKBQ",primaryColor:"#E26026",startsWith:"t",fallbackColor:"#34A853",RGB:{r:226,g:96,b:38}}]},l.propTypes={width:o.default.number,height:o.default.number,data:o.default.array.isRequired,config:o.default.object,selectedNode:o.default.func,selectedProjectChanged:o.default.func},e.default=l},348:function(t,e,i){var s=i(349),a=i(350),n=a;n.v1=s,n.v4=a,t.exports=n},349:function(t,e,i){var s,a,n=i(202),o=i(203),r=0,h=0;t.exports=function(t,e,i){var c=e&&i||0,u=e||[],l=(t=t||{}).node||s,d=void 0!==t.clockseq?t.clockseq:a;if(null==l||null==d){var f=n();null==l&&(l=s=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==d&&(d=a=16383&(f[6]<<8|f[7]))}var v=void 0!==t.msecs?t.msecs:(new Date).getTime(),p=void 0!==t.nsecs?t.nsecs:h+1,m=v-r+(p-h)/1e4;if(m<0&&void 0===t.clockseq&&(d=d+1&16383),(m<0||v>r)&&void 0===t.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");r=v,h=p,a=d;var y=(1e4*(268435455&(v+=122192928e5))+p)%4294967296;u[c++]=y>>>24&255,u[c++]=y>>>16&255,u[c++]=y>>>8&255,u[c++]=255&y;var g=v/4294967296*1e4&268435455;u[c++]=g>>>8&255,u[c++]=255&g,u[c++]=g>>>24&15|16,u[c++]=g>>>16&255,u[c++]=d>>>8|128,u[c++]=255&d;for(var _=0;_<6;++_)u[c+_]=l[_];return e||o(u)}},350:function(t,e,i){var s=i(202),a=i(203);t.exports=function(t,e,i){var n=e&&i||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||s)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var r=0;r<16;++r)e[n+r]=o[r];return e||a(o)}}}]);
//# sourceMappingURL=17.96dae2bb.chunk.js.map