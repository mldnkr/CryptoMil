(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{275:function(e,c,t){},277:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t(26),n=t.n(a),i=t(28),r=t(35),l=t(27),j=t(281),o=t(283),d=t(290),h=t(287),b=t(162),x=t(289),O=t(291),u=t(292),m=t(293),p=t(294),v=t(295),g=t.p+"static/media/cryptocurrency.1548aced.png",y=t(4);var N=()=>{const[e,c]=Object(s.useState)(!0),[t,a]=Object(s.useState)(null);return Object(s.useEffect)((()=>{const e=()=>a(window.innerWidth);return window.addEventListener("resize",e),e(),()=>window.addEventListener("resize",e)}),[]),Object(s.useEffect)((()=>{c(!(t<768))}),[t]),Object(y.jsxs)("div",{className:"nav-container",children:[Object(y.jsxs)("div",{className:"logo-container",children:[Object(y.jsx)(h.a,{src:g,size:"large"}),Object(y.jsx)(o.a.Title,{level:2,className:"logo",children:Object(y.jsx)(i.b,{to:"/",children:"cryptomil"})}),Object(y.jsx)(b.a,{className:"menu-control-container",onClick:()=>c(!e),children:Object(y.jsx)(O.a,{})})]}),e&&Object(y.jsxs)(x.a,{theme:"dark",children:[Object(y.jsx)(x.a.Item,{icon:Object(y.jsx)(u.a,{}),children:Object(y.jsx)(i.b,{to:"/",children:"Home"})}),Object(y.jsx)(x.a.Item,{icon:Object(y.jsx)(m.a,{}),children:Object(y.jsx)(i.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(y.jsx)(x.a.Item,{icon:Object(y.jsx)(p.a,{}),children:Object(y.jsx)(i.b,{to:"/exchanges",children:"Exchanges"})}),Object(y.jsx)(x.a.Item,{icon:Object(y.jsx)(v.a,{}),children:Object(y.jsx)(i.b,{to:"/news",children:"News"})})]})]})},f=t(29),w=t.n(f),C=t(286),k=t(83),S=t(48),P=t(282),T=t(112),E=t(38);const M={"x-access-token":"coinrankinga4249080f5d86c192ae107c51f6d663db885cf03d5c312d1"},V=e=>({url:e,headers:M}),q=Object(T.a)({reducerPath:"cryptoApi",baseQuery:Object(E.d)({baseUrl:"https://api.coinranking.com/v2"}),endpoints:e=>({getCryptos:e.query({query:e=>V("/coins?limit=".concat(e))}),getExchanges:e.query({query:()=>V("/exchanges")}),getCryptoDetails:e.query({query:e=>V("/coin/".concat(e))}),getCryptoHistory:e.query({query:e=>{let{coinId:c,timePeriod:t}=e;return V("/coin/".concat(c,"/history?timePeriod=").concat(t))}})})}),{useGetCryptosQuery:A,useGetCryptoDetailsQuery:F,useGetCryptoHistoryQuery:I,useGetExchangesQuery:U}=q;var D=t(280);var L=function(){return Object(y.jsx)("div",{className:"loader",children:Object(y.jsx)(D.a,{})})};var Q=function(e){let{simplified:c}=e;const t=c?10:100,{data:a,isFetching:n}=A(t),[r,l]=Object(s.useState)([]),[j,o]=Object(s.useState)("");return Object(s.useEffect)((()=>{var e;const c=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.coins.filter((e=>e.name.toLowerCase().includes(j.toLowerCase())));l(c)}),[a,j]),n?Object(y.jsx)(L,{}):(console.log(r),Object(y.jsxs)(y.Fragment,{children:[!c&&Object(y.jsx)("div",{className:"search-crypto",children:Object(y.jsx)(C.a,{placeholder:"Search Cryptocurrency",onChange:e=>o(e.target.value)})}),Object(y.jsx)(k.a,{gutter:[8,8],className:"crypto-card-container",children:null===r||void 0===r?void 0:r.map((e=>Object(y.jsx)(S.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(y.jsx)(i.b,{to:"/crypto/".concat(e.uuid),children:Object(y.jsxs)(P.a,{hoverable:!0,title:"".concat(e.rank,". ").concat(e.name),extra:Object(y.jsx)("img",{className:"crypto-image",src:e.iconUrl}),children:[Object(y.jsxs)("p",{children:["Price: ",w()(e.price)]}),Object(y.jsxs)("p",{children:["Market Cap: ",w()(e.marketCap)]}),Object(y.jsxs)("p",{children:["Daily Change:"," ",Object(y.jsxs)("span",{style:{color:e.change<0?"red":"green"},children:[w()(e.change),"%"]})]})]})})},e.rank)))})]}))},$=t(126),G=t(285),H=t(296),R=t(297),z=t(298),_=t(299),J=t(300),W=t(166),Z=t(163);const{Title:B}=o.a;var K=function(e){var c;let{coinHistory:t,currentPrice:s,coinName:a}=e;const n=[],i=[];for(let o=0;o<(null===t||void 0===t||null===(r=t.data)||void 0===r||null===(l=r.history)||void 0===l?void 0:l.length);o++){var r,l;n.push(t.data.history[o].price),i.push(new Date(t.data.history[o].timestamp).toLocaleDateString())}const j={labels:i,datasets:[{label:"Price in USD",data:n,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(k.a,{className:"chart-header",children:[Object(y.jsxs)(B,{level:2,className:"chart-title",children:[a," Price Chart"]}),Object(y.jsxs)(S.a,{className:"price-container",children:[Object(y.jsxs)(B,{level:5,className:"price-change",children:[null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.change,"%"]}),Object(y.jsxs)(B,{level:5,className:"currenct-price",children:["Current ",a," Price: $ ",s]})]})]}),Object(y.jsx)(Z.a,{data:j,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})};const{Title:X,Text:Y}=o.a,{Option:ee}=G.a;var ce=function(){var e,c,t;const{coinId:a}=Object(l.f)(),[n,i]=Object(s.useState)("7d"),{data:r,isFetching:j}=F(a),{data:o}=I({coinId:a,timePeriod:n}),d=null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.coin;if(j)return Object(y.jsx)(L,{});console.log(o);const h=[{title:"Price to USD",value:"$ ".concat(d.price&&w()(d.price)),icon:Object(y.jsx)(H.a,{})},{title:"Rank",value:d.rank,icon:Object(y.jsx)(R.a,{})},{title:"24h Volume",value:"$ ".concat(d["24hVolume"]&&w()(d["24hVolume"])),icon:Object(y.jsx)(z.a,{})},{title:"Market Cap",value:"$ ".concat(d.marketCap&&w()(d.marketCap)),icon:Object(y.jsx)(H.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(w()(d.allTimeHigh.price)),icon:Object(y.jsx)(_.a,{})}],b=[{title:"Number Of Markets",value:d.numberOfMarkets,icon:Object(y.jsx)(m.a,{})},{title:"Number Of Exchanges",value:d.numberOfExchanges,icon:Object(y.jsx)(p.a,{})},{title:"Aprroved Supply",value:d.approvedSupply?Object(y.jsx)(CheckOutlined,{}):Object(y.jsx)(J.a,{}),icon:Object(y.jsx)(W.a,{})},{title:"Total Supply",value:"$ ".concat(null===d||void 0===d||null===(c=d.supply)||void 0===c?void 0:c.total),icon:Object(y.jsx)(W.a,{})},{title:"Circulating Supply",value:"$ ".concat(null===d||void 0===d||null===(t=d.supply)||void 0===t?void 0:t.circulating),icon:Object(y.jsx)(W.a,{})}];return Object(y.jsxs)(S.a,{className:"coin-detail-container",children:[Object(y.jsxs)(S.a,{className:"coin-heading-container",children:[Object(y.jsxs)(X,{level:2,className:"coin-name",children:[d.name,"(",d.symbol,") Price"]}),Object(y.jsxs)("p",{children:[d.name," live price in USD View value statistics, market cap and supply"]})]}),Object(y.jsx)(G.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period",onChange:e=>i(e),children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((e=>Object(y.jsx)(ee,{children:e},e)))}),Object(y.jsx)(K,{coinHistory:o,currentPrice:w()(d.price),coinName:d.name}),Object(y.jsxs)(S.a,{className:"stats-container",children:[Object(y.jsxs)(S.a,{className:"coin-value-statistics",children:[Object(y.jsxs)(S.a,{className:"coin-value-statistics-heading",children:[Object(y.jsxs)(X,{level:3,className:"coin-details-heading",children:[d.name," Value Statistics"]}),Object(y.jsxs)("p",{children:["An overview showing the stats of ",d.name]})]}),h.map((e=>{let{icon:c,title:t,value:s}=e;return Object(y.jsxs)(S.a,{className:"coin-stats",children:[Object(y.jsxs)(S.a,{className:"coin-stats-name",children:[Object(y.jsx)(Y,{children:c}),Object(y.jsx)(Y,{children:t})]}),Object(y.jsx)(Y,{className:"stats",children:s})]})}))]}),Object(y.jsxs)(S.a,{className:"other-stats-info",children:[Object(y.jsxs)(S.a,{className:"coin-value-statistics-heading",children:[Object(y.jsx)(X,{level:3,className:"coin-details-heading",children:"Other Statistics"}),Object(y.jsxs)("p",{children:["An overview showing the stats of ",d.name]})]}),b.map((e=>{let{icon:c,title:t,value:s}=e;return Object(y.jsxs)(S.a,{className:"coin-stats",children:[Object(y.jsxs)(S.a,{className:"coin-stats-name",children:[Object(y.jsx)(Y,{children:c}),Object(y.jsx)(Y,{children:t})]}),Object(y.jsx)(Y,{className:"stats",children:s})]})}))]})]}),Object(y.jsxs)(S.a,{className:"coin-desc-link",children:[Object(y.jsx)(k.a,{className:"coin-desc",children:Object(y.jsxs)(X,{level:3,className:"coin-details-heading",children:["What is ",d.name,"?",Object($.a)(d.description)]})}),Object(y.jsxs)(S.a,{className:"coin-links",children:[Object(y.jsxs)(X,{level:3,className:"coin-details-heading",children:[d.name," Links"]}),d.links.map((e=>Object(y.jsxs)(k.a,{className:"coin-link",children:[Object(y.jsx)(X,{level:5,className:"link-name",children:e.type}),Object(y.jsx)("a",{href:e.url,target:"_blank",rel:"norefferer",children:e.name})]},e.name)))]})]})]})},te=t(157),se=t.n(te);const ae={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"d16635816fmsh108dc8f862e2b34p1ca0eejsn27209bc45e10"},ne=Object(T.a)({reducerPath:"cryptoNewsApi ",baseQuery:Object(E.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:e=>({getCryptoNews:e.query({query:e=>{let{newsCategory:c,count:t}=e;return{url:"/news/search?q=".concat(c,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(t),headers:ae}}})})}),{useGetCryptoNewsQuery:ie}=ne,{Text:re,Title:le}=o.a,{Option:je}=G.a,oe="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";var de=function(e){var c;let{simplified:t}=e;const[a,n]=Object(s.useState)("Cryptocurrency"),{data:i}=ie({newsCategory:a,count:t?6:12}),{data:r}=A(100);return(null===i||void 0===i?void 0:i.value)?Object(y.jsxs)(k.a,{gutter:[8,8],children:[!t&&Object(y.jsx)(S.a,{span:24,children:Object(y.jsxs)(G.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"childeren",onChange:e=>n(e),filterOption:(e,c)=>c.children.toLowerCase.indexOf(e.toLowerCase)>0,children:[Object(y.jsx)("option",{value:"Cryptocurrency",children:"Cryptocurrency"}),null===r||void 0===r||null===(c=r.data)||void 0===c?void 0:c.coins.map((e=>Object(y.jsx)(je,{value:e.name,children:e.name})))]})}),i.value.map(((e,c)=>{var t,s,a,n,i,r;return Object(y.jsx)(S.a,{xs:24,sm:12,lg:12,children:Object(y.jsx)(P.a,{className:"news-card",hoverable:!0,children:Object(y.jsxs)("a",{href:e.url,target:"_blank",rel:"norefferer",children:[Object(y.jsxs)("div",{className:"news-image-container",children:[Object(y.jsx)(le,{className:"news-title",level:4,children:e.name}),Object(y.jsx)("img",{src:(null===e||void 0===e||null===(t=e.image)||void 0===t||null===(s=t.thumbnail)||void 0===s?void 0:s.contentUrl)||oe,alt:"news"})]}),Object(y.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100)," ..."):e.description}),Object(y.jsxs)("div",{className:"provider-container",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(h.a,{src:(null===(a=e.provider[0])||void 0===a||null===(n=a.image)||void 0===n||null===(i=n.thumbnail)||void 0===i?void 0:i.contentUrl)||oe,alt:""}),Object(y.jsx)(re,{className:"provider-name",children:null===(r=e.provider[0])||void 0===r?void 0:r.name})]}),Object(y.jsx)(re,{children:se()(e.datePublished).startOf("ss").fromNow()})]})]})})},c)}))]}):Object(y.jsx)(L,{})},he=t(288);const{Text:be}=o.a,{Panel:xe}=he.a;var Oe=()=>{var e;const{data:c,isFetching:t}=U(),s=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.exchanges;return console.log(c),t?Object(y.jsx)(L,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(k.a,{children:[Object(y.jsx)(S.a,{span:6,children:"Exchanges"}),Object(y.jsx)(S.a,{span:6,children:"24h Trade Volume"}),Object(y.jsx)(S.a,{span:6,children:"Markets"}),Object(y.jsx)(S.a,{span:6,children:"Change"})]}),Object(y.jsx)(k.a,{children:s.map((e=>Object(y.jsx)(S.a,{span:24,children:Object(y.jsx)(he.a,{children:Object(y.jsxs)(xe,{showArrow:!1,header:Object(y.jsxs)(k.a,{children:[Object(y.jsxs)(S.a,{span:6,children:[Object(y.jsx)(be,{children:Object(y.jsxs)("strong",{children:[e.rank,"."]})}),Object(y.jsx)(h.a,{className:"exchange-image",src:e.iconUrl}),Object(y.jsx)(be,{children:Object(y.jsx)("strong",{children:e.name})})]}),Object(y.jsxs)(S.a,{span:6,children:["$",w()(e["24hVolume"])]}),Object(y.jsx)(S.a,{span:6,children:w()(e.numberOfMarkets)}),Object(y.jsxs)(S.a,{span:6,children:[w()(e.marketShare),"%"]})]},e.id),children:[Object(y.jsx)(be,{level:5,children:"Extra Info: "}),Object(y.jsx)("a",{href:e.coinrankingUrl,target:"_blank",rel:"norefferer",children:e.coinrankingUrl})]},e.id)})})))})]})},ue=t(284);const{Title:me}=o.a;var pe=function(){var e;const{data:c,isFetching:t}=A(10),s=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return t?Object(y.jsx)(L,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(me,{className:"heading",level:2,children:"Global Crypto Stats"}),Object(y.jsxs)(k.a,{children:[Object(y.jsx)(S.a,{span:12,children:Object(y.jsx)(ue.a,{title:"Total Cryptocurrencies",value:s.total})}),Object(y.jsx)(S.a,{span:12,children:Object(y.jsx)(ue.a,{title:"Total Exchanges",value:s.totalExchanges})}),Object(y.jsx)(S.a,{span:12,children:Object(y.jsx)(ue.a,{title:"Total Market Cap",value:w()(s.totalMarketCap)})}),Object(y.jsx)(S.a,{span:12,children:Object(y.jsx)(ue.a,{title:"Total 24h Volume",value:w()(s.total24hVolume)})}),Object(y.jsx)(S.a,{span:12,children:Object(y.jsx)(ue.a,{title:"Total Markets",value:w()(s.totalMarkets)})})]}),Object(y.jsxs)("div",{className:"home-heading-container",children:[Object(y.jsx)(me,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the world"}),Object(y.jsx)(me,{level:3,className:"shore-more",children:Object(y.jsx)(i.b,{to:"/cryptocurrencies",children:"Show more"})})]}),Object(y.jsx)(Q,{simplified:!0}),Object(y.jsxs)("div",{className:"home-heading-container",children:[Object(y.jsx)(me,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(y.jsx)(me,{level:3,className:"shore-more",children:Object(y.jsx)(i.b,{to:"/news",children:"Show more"})})]}),Object(y.jsx)(de,{simplified:!0})]})};t(275);var ve=()=>Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)("div",{className:"navbar",children:Object(y.jsx)(N,{})}),Object(y.jsxs)("div",{className:"main",children:[Object(y.jsx)(j.a,{children:Object(y.jsx)("div",{className:"routes",children:Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{exact:!0,path:"/",children:Object(y.jsx)(pe,{})}),Object(y.jsx)(l.a,{exact:!0,path:"/exchanges",children:Object(y.jsx)(Oe,{})}),Object(y.jsx)(l.a,{exact:!0,path:"/cryptocurrencies",children:Object(y.jsx)(Q,{})}),Object(y.jsx)(l.a,{exact:!0,path:"/crypto/:coinId",children:Object(y.jsx)(ce,{})}),Object(y.jsx)(l.a,{exact:!0,path:"/news",children:Object(y.jsx)(de,{})})]})})}),Object(y.jsxs)("div",{className:"footer",children:[Object(y.jsxs)(o.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Copyright \xa9 2021",Object(y.jsx)("br",{}),"All Rights Reserved."]}),Object(y.jsxs)(d.b,{children:[Object(y.jsx)(i.b,{to:"/",children:"Home"}),Object(y.jsx)(i.b,{to:"/exchanges",children:"Exchanges"}),Object(y.jsx)(i.b,{to:"/news",children:"News"})]})]})]})]}),ge=t(11),ye=Object(ge.a)({reducer:{[q.reducerPath]:q.reducer,[ne.reducerPath]:ne.reducer}});t(276);const Ne=document.getElementById("root");n.a.render(Object(y.jsx)(s.StrictMode,{children:Object(y.jsx)(i.a,{children:Object(y.jsx)(r.a,{store:ye,children:Object(y.jsx)(ve,{})})})}),Ne)}},[[277,1,2]]]);
//# sourceMappingURL=main.b3cb2d9a.chunk.js.map