(this["webpackJsonpjs-calculator"]=this["webpackJsonpjs-calculator"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),l=a.n(n),c=a(2),i=a.n(c),s=(a(12),a(3)),o=a(4),r=a(6),d=a(5),m=(a(13),function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).clearHandle=function(){n.setState({input:"",first:!0})},n.handleClick=function(t){0==n.state.input.charAt(0)&&0==n.state.first&&"0"==t.target.innerHTML||"."==n.state.input.charAt(n.state.input.indexOf(".")>=0)&&0==n.state.first&&"."==t.target.innerHTML||n.setState({input:n.state.input.concat(t.target.innerHTML),first:!1})},n.handleOutput=function(t){var e=n.state.input.match(/\d{1,10}[\.?\d{1,10}]*/g),a=n.state.input.match(/[x+-/]/g).filter((function(t){return"."!=t})),l=parseFloat(e[0]);console.log(e),console.log(a),e.length<a.length&&a.splice(0,a.length-1);for(var c=1;c<e.length;c++){switch(a[c-1]){case"+":console.log("+"),l+=parseFloat(e[c]);break;case"-":console.log("-"),l-=parseFloat(e[c]);break;case"x":console.log("x"),l*=parseFloat(e[c]);break;case"/":console.log("/"),l/=parseFloat(e[c])}console.log(l+"   turn    "+c)}e.length==a.length&&a.indexOf("-")>=0&&(l=-l),n.setState({input:l.toString()}),console.log(l)},n.state={input:"",output:0,firstNo:"",secondNo:"",first:!0},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid fill-viewport"},l.a.createElement("h1",{className:"title text text-responsive text-center "},"Calculator"),l.a.createElement("div",{className:"container bg bg-warning rounded -lg col-lg-6"},l.a.createElement("div",{className:"row "},l.a.createElement("h1",{id:"display",className:" p-3 rounded-lg col-9 bg-warning "},this.state.first?0:this.state.input),l.a.createElement("button",{id:"clear",onClick:this.clearHandle,className:"btn btn-dark m-1 col"},"C"),l.a.createElement("div",{className:"w-100"}),l.a.createElement("button",{id:"seven",onClick:this.handleClick,className:"btn btn-dark m-1 col"},"7"),l.a.createElement("button",{id:"eight",onClick:this.handleClick,className:"btn btn-dark m-1 col"},"8"),l.a.createElement("button",{id:"nine",onClick:this.handleClick,className:"btn btn-dark col m-1 "},"9"),l.a.createElement("button",{id:"add",onClick:this.handleClick,className:"btn btn-dark col m-1"},"+"),l.a.createElement("div",{className:"w-100"}),l.a.createElement("button",{id:"four",onClick:this.handleClick,className:"btn btn-dark col m-1"},"4"),l.a.createElement("button",{id:"five",onClick:this.handleClick,className:"btn btn-dark col m-1"},"5"),l.a.createElement("button",{id:"six",onClick:this.handleClick,className:"btn btn-dark col m-1"},"6"),l.a.createElement("button",{id:"subtract",onClick:this.handleClick,className:"btn btn-dark col m-1"},"-"),l.a.createElement("div",{className:"w-100"}),l.a.createElement("button",{id:"one",onClick:this.handleClick,className:"btn btn-dark col m-1"},"1"),l.a.createElement("button",{id:"two",onClick:this.handleClick,className:"btn btn-dark col m-1"},"2"),l.a.createElement("button",{id:"three",onClick:this.handleClick,className:"btn btn-dark col m-1"},"3"),l.a.createElement("button",{id:"multiply",onClick:this.handleClick,className:"btn btn-dark col m-1"},"x"),l.a.createElement("div",{className:"w-100"}),l.a.createElement("button",{id:"decimal",onClick:this.handleClick,className:"btn btn-dark col m-1"},"."),l.a.createElement("button",{id:"zero",onClick:this.handleClick,className:"btn btn-dark col m-1"},"0"),l.a.createElement("button",{id:"equals",onClick:this.handleOutput,className:"btn btn-dark col m-1"},"="),l.a.createElement("button",{id:"divide",onClick:this.handleClick,className:"btn btn-dark col m-1"},"/"),l.a.createElement("div",{className:"w-100"}))))}}]),a}(l.a.Component));a(14);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root"))},7:function(t,e,a){t.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.fb1a5406.chunk.js.map