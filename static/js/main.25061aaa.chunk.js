(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),l=t(30),r=t.n(l),c=t(14),s=t(15),o=t(17),m=t(16),u=t(18),d=t(31),N=t(47),h=t(156),f=t(157),v=t(153),k=function(){return i.a.createElement("div",{className:"Header"},i.a.createElement(h.a,{inverse:!0,collapseOnSelect:!0},i.a.createElement(h.a.Header,null,i.a.createElement(h.a.Brand,null,i.a.createElement(d.a,{to:"/"},"Home")),i.a.createElement(h.a.Toggle,null)),i.a.createElement(h.a.Collapse,null,i.a.createElement(f.a,null,i.a.createElement(N.LinkContainer,{to:"/standings"},i.a.createElement(v.a,null,"Standings")),i.a.createElement(N.LinkContainer,{to:"/login"},i.a.createElement(v.a,null,"Login"))),i.a.createElement(f.a,{pullRight:!0},i.a.createElement(v.a,{eventKey:1,href:"#"},"Link Right"),i.a.createElement(v.a,{eventKey:2,href:"#"},"Link Right")))))},C=t(69),y=t(32),A=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"jumbotron"},i.a.createElement("h1",null,"NBA Client"))}}]),a}(i.a.Component),S=t(22),g=t(42),E=function(e){return new Promise(function(a,t){fetch("https://data.nba.net"+e,{method:"GET"}).then(function(e){setTimeout(function(){a(e.json())},1e3)}).catch(function(e){t(e)})})},b=function(){return new Promise(function(e,a){E("/prod/v1/current/standings_conference.json").then(function(a){e(a)}).then(function(e){a(e)})})},p=function(){return new Promise(function(e,a){E("/prod/v1/current/standings_all.json").then(function(a){e(a)}).then(function(e){a(e)})})},B=[{isNBAFranchise:!0,isAllStar:!1,city:"Atlanta",altCityName:"Atlanta",fullName:"Atlanta Hawks",tricode:"ATL",teamId:"1610612737",nickname:"Hawks",urlName:"hawks",confName:"East",divName:"Southeast"},{isNBAFranchise:!0,isAllStar:!1,city:"Boston",altCityName:"Boston",fullName:"Boston Celtics",tricode:"BOS",teamId:"1610612738",nickname:"Celtics",urlName:"celtics",confName:"East",divName:"Atlantic"},{isNBAFranchise:!0,isAllStar:!1,city:"Brooklyn",altCityName:"Brooklyn",fullName:"Brooklyn Nets",tricode:"BKN",teamId:"1610612751",nickname:"Nets",urlName:"nets",confName:"East",divName:"Atlantic"},{isNBAFranchise:!0,isAllStar:!1,city:"Charlotte",altCityName:"Charlotte",fullName:"Charlotte Hornets",tricode:"CHA",teamId:"1610612766",nickname:"Hornets",urlName:"hornets",confName:"East",divName:"Southeast"},{isNBAFranchise:!0,isAllStar:!1,city:"Chicago",altCityName:"Chicago",fullName:"Chicago Bulls",tricode:"CHI",teamId:"1610612741",nickname:"Bulls",urlName:"bulls",confName:"East",divName:"Central"},{isNBAFranchise:!0,isAllStar:!1,city:"Cleveland",altCityName:"Cleveland",fullName:"Cleveland Cavaliers",tricode:"CLE",teamId:"1610612739",nickname:"Cavaliers",urlName:"cavaliers",confName:"East",divName:"Central"},{isNBAFranchise:!0,isAllStar:!1,city:"Dallas",altCityName:"Dallas",fullName:"Dallas Mavericks",tricode:"DAL",teamId:"1610612742",nickname:"Mavericks",urlName:"mavericks",confName:"West",divName:"Southwest"},{isNBAFranchise:!0,isAllStar:!1,city:"Denver",altCityName:"Denver",fullName:"Denver Nuggets",tricode:"DEN",teamId:"1610612743",nickname:"Nuggets",urlName:"nuggets",confName:"West",divName:"Northwest"},{isNBAFranchise:!0,isAllStar:!1,city:"Detroit",altCityName:"Detroit",fullName:"Detroit Pistons",tricode:"DET",teamId:"1610612765",nickname:"Pistons",urlName:"pistons",confName:"East",divName:"Central"},{isNBAFranchise:!0,isAllStar:!1,city:"Golden State",altCityName:"Golden State",fullName:"Golden State Warriors",tricode:"GSW",teamId:"1610612744",nickname:"Warriors",urlName:"warriors",confName:"West",divName:"Pacific"},{isNBAFranchise:!0,isAllStar:!1,city:"Houston",altCityName:"Houston",fullName:"Houston Rockets",tricode:"HOU",teamId:"1610612745",nickname:"Rockets",urlName:"rockets",confName:"West",divName:"Southwest"},{isNBAFranchise:!0,isAllStar:!1,city:"Indiana",altCityName:"Indiana",fullName:"Indiana Pacers",tricode:"IND",teamId:"1610612754",nickname:"Pacers",urlName:"pacers",confName:"East",divName:"Central"},{isNBAFranchise:!0,isAllStar:!1,city:"LA",altCityName:"LA Clippers",fullName:"LA Clippers",tricode:"LAC",teamId:"1610612746",nickname:"Clippers",urlName:"clippers",confName:"West",divName:"Pacific"},{isNBAFranchise:!0,isAllStar:!1,city:"Los Angeles",altCityName:"Los Angeles Lakers",fullName:"Los Angeles Lakers",tricode:"LAL",teamId:"1610612747",nickname:"Lakers",urlName:"lakers",confName:"West",divName:"Pacific"},{isNBAFranchise:!0,isAllStar:!1,city:"Memphis",altCityName:"Memphis",fullName:"Memphis Grizzlies",tricode:"MEM",teamId:"1610612763",nickname:"Grizzlies",urlName:"grizzlies",confName:"West",divName:"Southwest"},{isNBAFranchise:!0,isAllStar:!1,city:"Miami",altCityName:"Miami",fullName:"Miami Heat",tricode:"MIA",teamId:"1610612748",nickname:"Heat",urlName:"heat",confName:"East",divName:"Southeast"},{isNBAFranchise:!0,isAllStar:!1,city:"Milwaukee",altCityName:"Milwaukee",fullName:"Milwaukee Bucks",tricode:"MIL",teamId:"1610612749",nickname:"Bucks",urlName:"bucks",confName:"East",divName:"Central"},{isNBAFranchise:!0,isAllStar:!1,city:"Minnesota",altCityName:"Minnesota",fullName:"Minnesota Timberwolves",tricode:"MIN",teamId:"1610612750",nickname:"Timberwolves",urlName:"timberwolves",confName:"West",divName:"Northwest"},{isNBAFranchise:!0,isAllStar:!1,city:"New Orleans",altCityName:"New Orleans",fullName:"New Orleans Pelicans",tricode:"NOP",teamId:"1610612740",nickname:"Pelicans",urlName:"pelicans",confName:"West",divName:"Southwest"},{isNBAFranchise:!0,isAllStar:!1,city:"New York",altCityName:"New York",fullName:"New York Knicks",tricode:"NYK",teamId:"1610612752",nickname:"Knicks",urlName:"knicks",confName:"East",divName:"Atlantic"},{isNBAFranchise:!0,isAllStar:!1,city:"Oklahoma City",altCityName:"Oklahoma City",fullName:"Oklahoma City Thunder",tricode:"OKC",teamId:"1610612760",nickname:"Thunder",urlName:"thunder",confName:"West",divName:"Northwest"},{isNBAFranchise:!0,isAllStar:!1,city:"Orlando",altCityName:"Orlando",fullName:"Orlando Magic",tricode:"ORL",teamId:"1610612753",nickname:"Magic",urlName:"magic",confName:"East",divName:"Southeast"},{isNBAFranchise:!0,isAllStar:!1,city:"Philadelphia",altCityName:"Philadelphia",fullName:"Philadelphia 76ers",tricode:"PHI",teamId:"1610612755",nickname:"76ers",urlName:"sixers",confName:"East",divName:"Atlantic"},{isNBAFranchise:!0,isAllStar:!1,city:"Phoenix",altCityName:"Phoenix",fullName:"Phoenix Suns",tricode:"PHX",teamId:"1610612756",nickname:"Suns",urlName:"suns",confName:"West",divName:"Pacific"},{isNBAFranchise:!0,isAllStar:!1,city:"Portland",altCityName:"Portland",fullName:"Portland Trail Blazers",tricode:"POR",teamId:"1610612757",nickname:"Trail Blazers",urlName:"blazers",confName:"West",divName:"Northwest"},{isNBAFranchise:!0,isAllStar:!1,city:"Sacramento",altCityName:"Sacramento",fullName:"Sacramento Kings",tricode:"SAC",teamId:"1610612758",nickname:"Kings",urlName:"kings",confName:"West",divName:"Pacific"},{isNBAFranchise:!0,isAllStar:!1,city:"San Antonio",altCityName:"San Antonio",fullName:"San Antonio Spurs",tricode:"SAS",teamId:"1610612759",nickname:"Spurs",urlName:"spurs",confName:"West",divName:"Southwest"},{isNBAFranchise:!0,isAllStar:!1,city:"Toronto",altCityName:"Toronto",fullName:"Toronto Raptors",tricode:"TOR",teamId:"1610612761",nickname:"Raptors",urlName:"raptors",confName:"East",divName:"Atlantic"},{isNBAFranchise:!0,isAllStar:!1,city:"Utah",altCityName:"Utah",fullName:"Utah Jazz",tricode:"UTA",teamId:"1610612762",nickname:"Jazz",urlName:"jazz",confName:"West",divName:"Northwest"},{isNBAFranchise:!0,isAllStar:!1,city:"Washington",altCityName:"Washington",fullName:"Washington Wizards",tricode:"WAS",teamId:"1610612764",nickname:"Wizards",urlName:"wizards",confName:"East",divName:"Southeast"}],w=t(76),O=t.n(w),I=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"sweet-loading"},i.a.createElement(O.a,{sizeUnit:"px",size:150,color:"Black",loading:this.props.loading}))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={error:null,loading:!0,data:[],columns:[{Header:"Team",accessor:"team.fullName"},{Header:"Win",accessor:"win"},{Header:"Loss",accessor:"loss"},{Header:"Win %",accessor:"winPct"}]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p().then(function(a){var t=a.league.standard.teams.map(function(e){return e.team=B.find(function(a){return e.teamId===a.teamId}),e});e.setState({loading:!1,data:t})}).catch(function(a){e.setState({loading:!1,error:a})})}},{key:"renderTable",value:function(e,a,t){if(!e)return i.a.createElement("div",{className:"react-table"},i.a.createElement(g.a,{data:t,columns:a,sortable:!1,showPagination:!1,defaultPageSize:t.length,loading:e}))}},{key:"render",value:function(){var e=this.state,a=e.loading,t=e.columns,n=e.data;return i.a.createElement("div",null,i.a.createElement(I,{loading:a}),this.renderTable(a,t,n))}}]),a}(n.Component),P=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={error:null,loading:!0,data:{eastConfStandings:[],westConfStandings:[]},columns:[{Header:"Team",accessor:"team.fullName"},{Header:"Win",accessor:"win"},{Header:"Loss",accessor:"loss"},{Header:"Win %",accessor:"winPct"}]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;b().then(function(a){var t=a.league.standard.conference.east,n=a.league.standard.conference.west;e.setState({loading:!1,data:{eastConfStandings:e.getStandings(t),westConfStandings:e.getStandings(n)}})}).catch(function(a){e.setState({loading:!1,error:a})})}},{key:"getStandings",value:function(e){return console.log(e),e.map(function(e){return e.team=B.find(function(a){return e.teamId===a.teamId}),e})}},{key:"renderTable",value:function(e,a,t,n){if(!e)return i.a.createElement("div",{className:"react-table"},i.a.createElement(g.a,{data:t,columns:[{Header:n,columns:a}],sortable:!1,showPagination:!1,defaultPageSize:t.length,loading:e}))}},{key:"render",value:function(){var e=this.state,a=e.loading,t=e.columns,n=e.data;return i.a.createElement("div",null,i.a.createElement(I,{loading:a}),this.renderTable(a,t,n.eastConfStandings,"East"),this.renderTable(a,t,n.westConfStandings,"West"))}}]),a}(n.Component),W=t(154),F=t(155),H=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={activeButton:"all"},t.handleAllClick=t.handleAllClick.bind(Object(S.a)(Object(S.a)(t))),t.handleConfClick=t.handleConfClick.bind(Object(S.a)(Object(S.a)(t))),t.handleDivClick=t.handleDivClick.bind(Object(S.a)(Object(S.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"renderButtons",value:function(e){var a={all:"default",conf:"default",div:"default"};return a[e]="primary",i.a.createElement("div",{className:"button-center"},i.a.createElement(W.a,null,i.a.createElement(F.a,{bsSize:"large",bsStyle:a.all,onClick:this.handleAllClick},"All"),i.a.createElement(F.a,{bsSize:"large",bsStyle:a.conf,onClick:this.handleConfClick},"Conf"),i.a.createElement(F.a,{bsSize:"large",bsStyle:a.div,onClick:this.handleDivClick},"Div")))}},{key:"renderTable",value:function(e){switch(e){case"all":return i.a.createElement(j,null);case"conf":return i.a.createElement(P,null)}}},{key:"handleAllClick",value:function(){this.setState(function(e){return{activeButton:"all"}})}},{key:"handleConfClick",value:function(){this.setState(function(e){return{activeButton:"conf"}})}},{key:"handleDivClick",value:function(){this.setState(function(e){return{activeButton:"div"}})}},{key:"render",value:function(){var e=this.state.activeButton;return i.a.createElement("div",{className:"standings"},i.a.createElement("h1",{className:"text-center"},"Standings"),this.renderButtons(e),this.renderTable(e))}}]),a}(n.Component),z=function(){return i.a.createElement(C.a,null,i.a.createElement(y.a,{exact:!0,path:"/",component:A}),i.a.createElement(y.a,{exact:!0,path:"/home",component:A}),i.a.createElement(y.a,{exact:!0,path:"/standings",component:H}))},T=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(k,null),i.a.createElement("div",{className:"container-fluid"},i.a.createElement(z,null)))}}]),a}(n.Component);t(146),t(148),t(150),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=t(33);r.a.render(i.a.createElement(L.a,null,i.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,a,t){e.exports=t(152)}},[[81,2,1]]]);
//# sourceMappingURL=main.25061aaa.chunk.js.map