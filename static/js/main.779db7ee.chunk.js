(this["webpackJsonp25x5-timer"]=this["webpackJsonp25x5-timer"]||[]).push([[0],{21:function(e,n,t){e.exports=t.p+"static/media/beep.342c532d.mp3"},22:function(e,n,t){e.exports=t(35)},27:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(11),c=t.n(i),o=(t(27),t(5)),u=t(6),l=t(9),p=t(8),s=t(1),m=t(2),d=t(4);function f(){var e=Object(s.a)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  color: gray;\n"]);return f=function(){return e},e}function b(){var e=Object(s.a)(["\n  ","\n  border-radius: 60px;\n  margin-left: 15px;\n  span {\n    height: 55px;\n    margin-top: -5px;\n  }\n"]);return b=function(){return e},e}function x(){var e=Object(s.a)(["\n  ","\n  border-radius: 21px;\n  margin-right: 15px;\n  span {\n    height: 42px;\n    margin-top: -10px;\n  }\n"]);return x=function(){return e},e}function g(){var e=Object(s.a)(["\n    display: flex;\n"]);return g=function(){return e},e}function h(){var e=Object(s.a)(["\n  margin-top: 5px;\n  margin-bottom: 15px;\n  font-size: 14px;\n  text-align: center;\n  text-transform: capitalize;\n  color: gray;\n"]);return h=function(){return e},e}function v(){var e=Object(s.a)(["\n  width: 175px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return v=function(){return e},e}var E=m.a.section(v()),O=m.a.div(h()),j=function(e){var n=e.disable;return"\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 42px;\n  height: 42px;\n  background-color: #E9E9E9;\n  box-shadow: 8px 8px 15px 2px rgba(13, 39, 80, .3),\n            -3px -3px 10px 2px rgba(255, 255, 255, 1);\n  color: white;\n  font-size: 36px;\n  cursor: ".concat(n?"not-allowed":"pointer",";\n  span {\n    height: 42px;\n    margin-top: -2px;\n  }\n")},y=m.a.div(g()),k=m.a.div(x(),j),T=m.a.div(b(),j),R=m.a.div(f()),S=function(e){var n=e.title,t=e.value,r=e.id,i=e.increment,c=e.decrement;return a.a.createElement(E,null,a.a.createElement(O,{id:"".concat(r,"-label")},"".concat(n)),a.a.createElement(y,null,a.a.createElement(k,{id:"".concat(r,"-increment"),onClick:i},a.a.createElement("span",null,"+")),a.a.createElement(R,{id:"".concat(r,"-length")},t),a.a.createElement(T,{id:"".concat(r,"-decrement"),onClick:c},a.a.createElement("span",null,"-"))))},w=Object(d.b)((function(e,n){return"Timer"===n.title?{value:e.timerLength,id:"timer"}:"Break"===n.title?{value:e.breakTime,id:"break"}:void 0}),(function(e,n){return"Timer"===n.title?{increment:function(){return e({type:"INC_TIMER",payload:n});var n},decrement:function(){return e({type:"DEC_TIMER",payload:n});var n}}:"Break"===n.title?{increment:function(){return e({type:"INC_BREAK",payload:n});var n},decrement:function(){return e({type:"DEC_BREAK",payload:n});var n}}:void 0}))(S);function L(){var e=Object(s.a)(["\n    font-size: 24px;\n    color: gray;\n"]);return L=function(){return e},e}function C(){var e=Object(s.a)(["\n    font-size: 42px;\n    color: gray;\n"]);return C=function(){return e},e}function I(){var e=Object(s.a)(["\n  font-size: 16px;\n  text-align: center;\n  text-transform: capitalize;\n  color: gray;\n"]);return I=function(){return e},e}var _=m.a.div(I()),B=m.a.div(C()),A=(m.a.div(L()),function(e){var n=e.timerLabel,t=e.current;return a.a.createElement("section",{id:"timer"},a.a.createElement(B,{id:"time-left"},t),a.a.createElement(_,{id:"timer-label"},n))});function N(){var e=Object(s.a)(["\n  ","\n  border-radius: 60px;\n  margin-left: 15px;\n"]);return N=function(){return e},e}function z(){var e=Object(s.a)(["\n  ","\n  border-radius: 60px;\n  margin-right: 15px;\n"]);return z=function(){return e},e}function D(){var e=Object(s.a)(["\n  display: flex;\n  margin-top: 10px;\n"]);return D=function(){return e},e}var M=m.a.section(D()),K=function(e){var n=e.disable;return"\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 75px;\n  height: 40px;\n  background-color: #E9E9E9;\n  box-shadow: 8px 8px 15px 2px rgba(13, 39, 80, .3),\n            -3px -3px 10px 2px rgba(255, 255, 255, 1);\n  color: gray;\n  font-size: 12px;\n  cursor: ".concat(n?"not-allowed":"pointer",";\n  span {\n    height: 15px;\n  }\n")},U=m.a.div(z(),K),W=m.a.div(N(),K),J=function(e){var n=e.paused,t=e.startStop,r=e.resetTimer,i=n?a.a.createElement("span",null,"Start"):a.a.createElement("span",null,"Stop");return a.a.createElement(M,{id:"timer-controls"},a.a.createElement(U,{id:"start_stop",onClick:t},a.a.createElement("span",null,i)),a.a.createElement(W,{id:"reset",onClick:function(){r();var e=document.getElementById("beep");e.pause(),e.currentTime=0}},a.a.createElement("span",null,"Reset")))};function P(){var e=Object(s.a)(["\n    width: 250px;\n    height: 250px;\n    border-radius: 50%;\n    display: flex; \n    flex-direction: column; \n    align-items: center;\n    justify-content: center;\n    background-color: #E9E9E9;\n        box-shadow: 28px 28px 50px 15px rgba(13, 39, 80, .2),\n            -23px -23px 45px rgba(250, 250, 250, 1)\n"]);return P=function(){return e},e}function G(){var e=Object(s.a)(["\n    width: 350px;\n    height: 350px;\n    border-radius: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content:center;\n    background-color: #E5E5E5;\n    box-shadow: 28px 28px 50px 15px rgba(13, 39, 80, .2),\n            -23px -23px 45px 15px rgba(245, 245, 245, 1),\n            inset -31px -31px 43px rgba(245, 245, 245, .64),\n            inset 26px 26px 48px 15px  rgba(13, 39, 80, .2);\n    "]);return G=function(){return e},e}var q=m.a.div(G()),F=m.a.section(P()),H=function(e){var n=e.paused,t=e.timerLabel,r=e.current,i=e.startStop,c=e.resetTimer;return a.a.createElement(q,null,a.a.createElement(F,{id:"timer-wrapper"},a.a.createElement(A,{current:r,timerLabel:t}),a.a.createElement(J,{paused:n,startStop:i,resetTimer:c})))},Q=function(e){var n=Math.floor(e/60),t=e%60,r="00",a="00";return r=n<10?"0".concat(n):"".concat(n),a=t<10?"0".concat(t):"".concat(t),"".concat(r,":").concat(a)},V=Object(d.b)((function(e){return{paused:e.paused,timerLabel:e.timerLabel,current:Q(e.current)}}),(function(e){return{startStop:function(){return e({type:"START_STOP"})},resetTimer:function(){return e({type:"RESET_TIMER"})}}}))(H),X=t(12),Y=function(e){Object(l.a)(t,e);var n=Object(p.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).state={interval:null},r.startTimer=r.startTimer.bind(Object(X.a)(r)),r}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.paused||this.startTimer()}},{key:"componentDidUpdate",value:function(e,n,t){this.props.paused&&clearInterval(this.state.interval),!this.props.paused&&e.paused&&this.startTimer()}},{key:"startTimer",value:function(){var e=setInterval(this.props.countdownSeconds,1e3);this.setState({interval:e})}},{key:"render",value:function(){return null}}]),t}(r.Component),Z=Y=Object(d.b)((function(e){return{paused:e.paused,current:e.current}}),(function(e){return{countdownSeconds:function(){return e({type:"COUNTDOWN "})}}}))(Y),$=t(21),ee=t.n($),ne=function(e){Object(l.a)(t,e);var n=Object(p.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,n,t){"play"===this.props.audioState&&"play"!==e.audioState&&this.timeOverAudio.play(),"reset"===this.props.audioState&&(this.timeOverAudio.pause(),this.timeOverAudio.currentTime=0)}},{key:"render",value:function(){var e=this;return a.a.createElement("audio",{id:"beep",src:ee.a,ref:function(n){e.timeOverAudio=n}})}}]),t}(a.a.Component),te=ne=Object(d.b)((function(e){return{audioState:e.audio}}),null)(ne);function re(){var e=Object(s.a)(["\n    margin-top: 0.5rem;\n    font-weight: light;\n}\n\n a {\n    margin-left: 0.2rem;\n}\n\n.footer-link {\n    color: gray;\n    border-bottom: 1px solid transparent;\n}\n\n.footer-link i {\n    font-size: 1.2rem;\n    margin-left: 1px;\n}\n\n.footer-link:hover {\n    color: white;\n}\n"]);return re=function(){return e},e}function ae(){var e=Object(s.a)(["\n    display: inline-block;\n    margin: 0.5rem;\n"]);return ae=function(){return e},e}function ie(){var e=Object(s.a)(["\n    color: gray;\n    font-size: 12px;\n    text-align: center;\n    margin-top: 3%;\n    width: 100%;\n"]);return ie=function(){return e},e}var ce=m.a.div(ie()),oe=m.a.span(ae()),ue=m.a.p(re()),le=function(){return a.a.createElement(ce,null,a.a.createElement(ue,null,"\xa9 Copyright 2020 -",a.a.createElement("a",{className:"footer-link",href:"https://github.com/anguyen0208",target:"_blank",rel:"noopener noreferrer"},"Anh Nguyen"),a.a.createElement(oe,null," | "),a.a.createElement(oe,null,"Repo Link: ","  ",a.a.createElement("a",{className:"footer-link",href:"https://github.com/anguyen0208/25-5-timer",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("i",{className:"fab fa-github"})))))};function pe(){var e=Object(s.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n"]);return pe=function(){return e},e}function se(){var e=Object(s.a)(["\n    display: flex;\n    margin-top: 2%;\n"]);return se=function(){return e},e}function me(){var e=Object(s.a)(['\n    width: 100%;\n    height: 100vh;\n    background-color: #E5E5E5;\n    font-family: "Arial Black", Gadget, sans-serif;\n']);return me=function(){return e},e}var de=m.a.div(me()),fe=m.a.div(se()),be=m.a.div(pe()),xe=function(e){Object(l.a)(t,e);var n=Object(p.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(de,null,a.a.createElement(be,null,a.a.createElement(Z,null),a.a.createElement(te,null),a.a.createElement(V,null),a.a.createElement(fe,null,a.a.createElement(w,{title:"Timer"}),a.a.createElement(w,{title:"Break"})),a.a.createElement(le,null)))}}]),t}(r.Component),ge=xe=Object(d.b)((function(e){return{paused:e.paused}}),null)(xe),he=t(13),ve=t(3),Ee=function(e){document.getElementById(e).play()},Oe=function(e){var n=document.getElementById(e);n.pause(),n.currentTime=0},je={timerLabel:"Work Time",timerLength:25,breakTime:5,current:1500,paused:!0,isRunning:!1,isSession:!0},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INC_TIMER":return!e.isRunning&&e.timerLength<60?Object(ve.a)(Object(ve.a)({},e),{},{timerLength:e.timerLength+1,current:60*(e.timerLength+1)}):e;case"DEC_TIMER":return!e.isRunning&&e.timerLength>1?Object(ve.a)(Object(ve.a)({},e),{},{timerLength:e.timerLength-1,current:60*(e.timerLength-1)}):e;case"INC_BREAK":return!e.isRunning&&e.breakTime<60?Object(ve.a)(Object(ve.a)({},e),{},{breakTime:e.breakTime+1}):e;case"DEC_BREAK":return!e.isRunning&&e.breakTime>1?Object(ve.a)(Object(ve.a)({},e),{},{breakTime:e.breakTime-1}):e;case"START_STOP":return Object(ve.a)(Object(ve.a)({},e),{},{paused:!e.paused,isRunning:!e.isRunning});case"RESET_TIMER":return console.log("reset"),Oe("beep"),je;case"COUNTDOWN ":return e.isRunning?e.current<1&&e.isSession?(Ee("beep"),Object(ve.a)(Object(ve.a)({},e),{},{timerLabel:"Break Time",current:60*e.breakTime,isSession:!1})):e.current<1&&!e.isSession?(Ee("beep"),Object(ve.a)(Object(ve.a)({},e),{},{timerLabel:"Work Time",current:60*e.timerLength,isSession:!0})):Object(ve.a)(Object(ve.a)({},e),{},{current:e.current-1}):e;default:return e}},ke=Object(he.b)(ye);c.a.render(a.a.createElement(d.a,{store:ke},a.a.createElement(ge,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.779db7ee.chunk.js.map