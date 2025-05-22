import{t as tt}from"./main-Di3R_i59.js";function et(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var G={exports:{}},ut=G.exports,ot;function dt(){return ot||(ot=1,function(e,i){(function(d,y){e.exports=y()})(ut,function(){var d=1e3,y=6e4,E=36e5,g="millisecond",v="second",S="minute",l="hour",m="day",M="week",$="month",h="quarter",w="year",f="date",o="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,C={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var r=["th","st","nd","rd"],t=a%100;return"["+a+(r[(t-20)%10]||r[t]||r[0])+"]"}},T=function(a,r,t){var s=String(a);return!s||s.length>=r?a:""+Array(r+1-s.length).join(t)+a},z={s:T,z:function(a){var r=-a.utcOffset(),t=Math.abs(r),s=Math.floor(t/60),n=t%60;return(r<=0?"+":"-")+T(s,2,"0")+":"+T(n,2,"0")},m:function a(r,t){if(r.date()<t.date())return-a(t,r);var s=12*(t.year()-r.year())+(t.month()-r.month()),n=r.clone().add(s,$),c=t-n<0,u=r.clone().add(s+(c?-1:1),$);return+(-(s+(t-n)/(c?n-u:u-n))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:$,y:w,w:M,d:m,D:f,h:l,m:S,s:v,ms:g,Q:h}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},x="en",k={};k[x]=C;var A="$isDayjsObject",Y=function(a){return a instanceof J||!(!a||!a[A])},q=function a(r,t,s){var n;if(!r)return x;if(typeof r=="string"){var c=r.toLowerCase();k[c]&&(n=c),t&&(k[c]=t,n=c);var u=r.split("-");if(!n&&u.length>1)return a(u[0])}else{var D=r.name;k[D]=r,n=D}return!s&&n&&(x=n),n||!s&&x},O=function(a,r){if(Y(a))return a.clone();var t=typeof r=="object"?r:{};return t.date=a,t.args=arguments,new J(t)},b=z;b.l=q,b.i=Y,b.w=function(a,r){return O(a,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var J=function(){function a(t){this.$L=q(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[A]=!0}var r=a.prototype;return r.parse=function(t){this.$d=function(s){var n=s.date,c=s.utc;if(n===null)return new Date(NaN);if(b.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var u=n.match(p);if(u){var D=u[2]-1||0,_=(u[7]||"0").substring(0,3);return c?new Date(Date.UTC(u[1],D,u[3]||1,u[4]||0,u[5]||0,u[6]||0,_)):new Date(u[1],D,u[3]||1,u[4]||0,u[5]||0,u[6]||0,_)}}return new Date(n)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return b},r.isValid=function(){return this.$d.toString()!==o},r.isSame=function(t,s){var n=O(t);return this.startOf(s)<=n&&n<=this.endOf(s)},r.isAfter=function(t,s){return O(t)<this.startOf(s)},r.isBefore=function(t,s){return this.endOf(s)<O(t)},r.$g=function(t,s,n){return b.u(t)?this[s]:this.set(n,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,s){var n=this,c=!!b.u(s)||s,u=b.p(t),D=function(P,U){var N=b.w(n.$u?Date.UTC(n.$y,U,P):new Date(n.$y,U,P),n);return c?N:N.endOf(m)},_=function(P,U){return b.w(n.toDate()[P].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(U)),n)},H=this.$W,j=this.$M,I=this.$D,F="set"+(this.$u?"UTC":"");switch(u){case w:return c?D(1,0):D(31,11);case $:return c?D(1,j):D(0,j+1);case M:var B=this.$locale().weekStart||0,W=(H<B?H+7:H)-B;return D(c?I-W:I+(6-W),j);case m:case f:return _(F+"Hours",0);case l:return _(F+"Minutes",1);case S:return _(F+"Seconds",2);case v:return _(F+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,s){var n,c=b.p(t),u="set"+(this.$u?"UTC":""),D=(n={},n[m]=u+"Date",n[f]=u+"Date",n[$]=u+"Month",n[w]=u+"FullYear",n[l]=u+"Hours",n[S]=u+"Minutes",n[v]=u+"Seconds",n[g]=u+"Milliseconds",n)[c],_=c===m?this.$D+(s-this.$W):s;if(c===$||c===w){var H=this.clone().set(f,1);H.$d[D](_),H.init(),this.$d=H.set(f,Math.min(this.$D,H.daysInMonth())).$d}else D&&this.$d[D](_);return this.init(),this},r.set=function(t,s){return this.clone().$set(t,s)},r.get=function(t){return this[b.p(t)]()},r.add=function(t,s){var n,c=this;t=Number(t);var u=b.p(s),D=function(j){var I=O(c);return b.w(I.date(I.date()+Math.round(j*t)),c)};if(u===$)return this.set($,this.$M+t);if(u===w)return this.set(w,this.$y+t);if(u===m)return D(1);if(u===M)return D(7);var _=(n={},n[S]=y,n[l]=E,n[v]=d,n)[u]||1,H=this.$d.getTime()+t*_;return b.w(H,this)},r.subtract=function(t,s){return this.add(-1*t,s)},r.format=function(t){var s=this,n=this.$locale();if(!this.isValid())return n.invalidDate||o;var c=t||"YYYY-MM-DDTHH:mm:ssZ",u=b.z(this),D=this.$H,_=this.$m,H=this.$M,j=n.weekdays,I=n.months,F=n.meridiem,B=function(U,N,Z,V){return U&&(U[N]||U(s,c))||Z[N].slice(0,V)},W=function(U){return b.s(D%12||12,U,"0")},P=F||function(U,N,Z){var V=U<12?"AM":"PM";return Z?V.toLowerCase():V};return c.replace(L,function(U,N){return N||function(Z){switch(Z){case"YY":return String(s.$y).slice(-2);case"YYYY":return b.s(s.$y,4,"0");case"M":return H+1;case"MM":return b.s(H+1,2,"0");case"MMM":return B(n.monthsShort,H,I,3);case"MMMM":return B(I,H);case"D":return s.$D;case"DD":return b.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return B(n.weekdaysMin,s.$W,j,2);case"ddd":return B(n.weekdaysShort,s.$W,j,3);case"dddd":return j[s.$W];case"H":return String(D);case"HH":return b.s(D,2,"0");case"h":return W(1);case"hh":return W(2);case"a":return P(D,_,!0);case"A":return P(D,_,!1);case"m":return String(_);case"mm":return b.s(_,2,"0");case"s":return String(s.$s);case"ss":return b.s(s.$s,2,"0");case"SSS":return b.s(s.$ms,3,"0");case"Z":return u}return null}(U)||u.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,s,n){var c,u=this,D=b.p(s),_=O(t),H=(_.utcOffset()-this.utcOffset())*y,j=this-_,I=function(){return b.m(u,_)};switch(D){case w:c=I()/12;break;case $:c=I();break;case h:c=I()/3;break;case M:c=(j-H)/6048e5;break;case m:c=(j-H)/864e5;break;case l:c=j/E;break;case S:c=j/y;break;case v:c=j/d;break;default:c=j}return n?c:b.a(c)},r.daysInMonth=function(){return this.endOf($).$D},r.$locale=function(){return k[this.$L]},r.locale=function(t,s){if(!t)return this.$L;var n=this.clone(),c=q(t,s,!0);return c&&(n.$L=c),n},r.clone=function(){return b.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},a}(),rt=J.prototype;return O.prototype=rt,[["$ms",g],["$s",v],["$m",S],["$H",l],["$W",m],["$M",$],["$y",w],["$D",f]].forEach(function(a){rt[a[1]]=function(r){return this.$g(r,a[0],a[1])}}),O.extend=function(a,r){return a.$i||(a(r,J,O),a.$i=!0),O},O.locale=q,O.isDayjs=Y,O.unix=function(a){return O(1e3*a)},O.en=k[x],O.Ls=k,O.p={},O})}(G)),G.exports}var lt=dt();const R=et(lt);var Q={exports:{}},ft=Q.exports,st;function mt(){return st||(st=1,function(e,i){(function(d,y){e.exports=y()})(ft,function(){return function(d,y,E){d=d||{};var g=y.prototype,v={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function S(m,M,$,h){return g.fromToBase(m,M,$,h)}E.en.relativeTime=v,g.fromToBase=function(m,M,$,h,w){for(var f,o,p,L=$.$locale().relativeTime||v,C=d.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],T=C.length,z=0;z<T;z+=1){var x=C[z];x.d&&(f=h?E(m).diff($,x.d,!0):$.diff(m,x.d,!0));var k=(d.rounding||Math.round)(Math.abs(f));if(p=f>0,k<=x.r||!x.r){k<=1&&z>0&&(x=C[z-1]);var A=L[x.l];w&&(k=w(""+k)),o=typeof A=="string"?A.replace("%d",k):A(k,M,x.l,p);break}}if(M)return o;var Y=p?L.future:L.past;return typeof Y=="function"?Y(o):Y.replace("%s",o)},g.to=function(m,M){return S(m,M,this,!0)},g.from=function(m,M){return S(m,M,this)};var l=function(m){return m.$u?E.utc():E()};g.toNow=function(m){return this.to(l(this),m)},g.fromNow=function(m){return this.from(l(this),m)}}})}(Q)),Q.exports}var ht=mt();const vt=et(ht);var K={exports:{}},$t=K.exports,it;function pt(){return it||(it=1,function(e,i){(function(d,y){e.exports=y()})($t,function(){var d="minute",y=/[+-]\d\d(?::?\d\d)?/g,E=/([+-]|\d\d)/g;return function(g,v,S){var l=v.prototype;S.utc=function(o){var p={date:o,utc:!0,args:arguments};return new v(p)},l.utc=function(o){var p=S(this.toDate(),{locale:this.$L,utc:!0});return o?p.add(this.utcOffset(),d):p},l.local=function(){return S(this.toDate(),{locale:this.$L,utc:!1})};var m=l.parse;l.parse=function(o){o.utc&&(this.$u=!0),this.$utils().u(o.$offset)||(this.$offset=o.$offset),m.call(this,o)};var M=l.init;l.init=function(){if(this.$u){var o=this.$d;this.$y=o.getUTCFullYear(),this.$M=o.getUTCMonth(),this.$D=o.getUTCDate(),this.$W=o.getUTCDay(),this.$H=o.getUTCHours(),this.$m=o.getUTCMinutes(),this.$s=o.getUTCSeconds(),this.$ms=o.getUTCMilliseconds()}else M.call(this)};var $=l.utcOffset;l.utcOffset=function(o,p){var L=this.$utils().u;if(L(o))return this.$u?0:L(this.$offset)?$.call(this):this.$offset;if(typeof o=="string"&&(o=function(x){x===void 0&&(x="");var k=x.match(y);if(!k)return null;var A=(""+k[0]).match(E)||["-",0,0],Y=A[0],q=60*+A[1]+ +A[2];return q===0?0:Y==="+"?q:-q}(o),o===null))return this;var C=Math.abs(o)<=16?60*o:o,T=this;if(p)return T.$offset=C,T.$u=o===0,T;if(o!==0){var z=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(T=this.local().add(C+z,d)).$offset=C,T.$x.$localOffset=z}else T=this.utc();return T};var h=l.format;l.format=function(o){var p=o||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,p)},l.valueOf=function(){var o=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*o},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var w=l.toDate;l.toDate=function(o){return o==="s"&&this.$offset?S(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():w.call(this)};var f=l.diff;l.diff=function(o,p,L){if(o&&this.$u===o.$u)return f.call(this,o,p,L);var C=this.local(),T=S(o).local();return f.call(C,T,p,L)}}})}(K)),K.exports}var bt=pt();const yt=et(bt);var X={exports:{}},gt=X.exports,at;function wt(){return at||(at=1,function(e,i){(function(d,y){e.exports=y()})(gt,function(){var d={year:0,month:1,day:2,hour:3,minute:4,second:5},y={};return function(E,g,v){var S,l=function(h,w,f){f===void 0&&(f={});var o=new Date(h),p=function(L,C){C===void 0&&(C={});var T=C.timeZoneName||"short",z=L+"|"+T,x=y[z];return x||(x=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:L,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:T}),y[z]=x),x}(w,f);return p.formatToParts(o)},m=function(h,w){for(var f=l(h,w),o=[],p=0;p<f.length;p+=1){var L=f[p],C=L.type,T=L.value,z=d[C];z>=0&&(o[z]=parseInt(T,10))}var x=o[3],k=x===24?0:x,A=o[0]+"-"+o[1]+"-"+o[2]+" "+k+":"+o[4]+":"+o[5]+":000",Y=+h;return(v.utc(A).valueOf()-(Y-=Y%1e3))/6e4},M=g.prototype;M.tz=function(h,w){h===void 0&&(h=S);var f,o=this.utcOffset(),p=this.toDate(),L=p.toLocaleString("en-US",{timeZone:h}),C=Math.round((p-new Date(L))/1e3/60),T=15*-Math.round(p.getTimezoneOffset()/15)-C;if(!Number(T))f=this.utcOffset(0,w);else if(f=v(L,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(T,!0),w){var z=f.utcOffset();f=f.add(o-z,"minute")}return f.$x.$timezone=h,f},M.offsetName=function(h){var w=this.$x.$timezone||v.tz.guess(),f=l(this.valueOf(),w,{timeZoneName:h}).find(function(o){return o.type.toLowerCase()==="timezonename"});return f&&f.value};var $=M.startOf;M.startOf=function(h,w){if(!this.$x||!this.$x.$timezone)return $.call(this,h,w);var f=v(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return $.call(f,h,w).tz(this.$x.$timezone,!0)},v.tz=function(h,w,f){var o=f&&w,p=f||w||S,L=m(+v(),p);if(typeof h!="string")return v(h).tz(p);var C=function(k,A,Y){var q=k-60*A*1e3,O=m(q,Y);if(A===O)return[q,A];var b=m(q-=60*(O-A)*1e3,Y);return O===b?[q,O]:[k-60*Math.min(O,b)*1e3,Math.max(O,b)]}(v.utc(h,o).valueOf(),L,p),T=C[0],z=C[1],x=v(T).utcOffset(z);return x.$x.$timezone=p,x},v.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},v.tz.setDefault=function(h){S=h}}})}(X)),X.exports}var xt=wt();const Mt=et(xt);R.extend(vt);R.extend(yt);R.extend(Mt);function St(e=[],i=!1){return`
	  <div class="posts-container">
	    ${e.length>0?e.map(d=>Dt(d)).join(""):renderEmptyState(i)}
	  </div>
	`}function Dt(e){const i=R.utc(e.created_at).tz("Asia/Almaty").fromNow();return`
	  <div class="post bg-body" data-post-id="${e.id}">
	    <div class="post-votes bg-body">
	      <button class="vote-btn upvote text-body" aria-label="Upvote">
		<i class="bi bi-arrow-up text-body"></i>
	      </button>
	      <span class="vote-count text-body">${e.votes}</span>
	      <button class="vote-btn downvote text-body" aria-label="Downvote">
		<i class="bi bi-arrow-down text-body"></i>
	      </button>
	    </div>
	    <div class="post-content bg-body">
	      <div class="post-header">
		<span class="post-community text-body">r/${e.community}</span>
		<span class="post-author text-body">Posted by u/${e.author}</span>
		<span class="post-time text-body">${i}</span>
	      </div>
	      <h3 class="post-title text-body">${e.title}</h3>
	      ${e.image?`
		<div class="post-image-container bg-body">
		  <img src="http://localhost:5000/${e.image}" class="post-image" alt="${e.title}">
		</div>
	      `:""}
	      <div class="post-text text-body">${e.content}</div>
	      <div class="post-actions">
		<button class="action-btn comment-btn text-body">
		  <i class="bi bi-chat text-body"></i> ${e.comment_count} Comments
		</button>
		<button class="action-btn share-btn text-body" data-bs-toggle="modal" data-bs-target="#shareModal-${e.id}">
		  <i class="bi bi-share text-body"></i> Share
		</button>
		<button class="action-btn save-btn text-body">
		  <i class="bi bi-bookmark text-body"></i> Save
		</button>
	      </div>
	    </div>
	  </div>
	`}function Tt(e){return`
    <div class="modal fade" id="commentsModal-${e}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content bg-body text-body">
          <div class="modal-header border-secondary">
            <h5 class="modal-title">Comments</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${Ot(e)}
            <div class="comments-list mt-4">
              ${Lt(e)}
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function Ot(e){return`
    <div class="comment-form bg-body text-body p-3 rounded">
      <form class="add-comment-form" data-post-id="${e}">
        <div class="form-group mb-3">
          <textarea class="form-control bg-body text-body" rows="3" placeholder="What are your thoughts?" required></textarea>
        </div>
        <div class="form-actions d-flex justify-content-end">
          <button type="submit" class="btn btn-primary">Comment</button>
        </div>
      </form>
    </div>
  `}function Lt(e){return`<div class="comments-list mt-4" id="comments-list-${e}"></div>`}async function nt(e){const i=document.querySelector(`#comments-list-${e}`);if(i){console.log(`Loading comments for post ${e}`),i.innerHTML='<div class="text-muted">Loading comments...</div>';try{const d=await fetch(`http://localhost:5000/api/comments/${e}`);if(!d.ok)throw new Error("Failed to fetch");const y=await d.json();if(console.log(y),!Array.isArray(y))throw new Error("Invalid format");const E=y.map(g=>`
      <div class="comment bg-body text-body p-3 mb-3 rounded border border-secondary" data-comment-id="${g.id}">
        <div class="d-flex">
          <img src="${g.avatar?"http://localhost:5000/"+g.avatar:"https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"}" 
            alt="${g.author}" 
            class="rounded-circle me-3" 
            width="32" 
            height="32">

          <div class="comment-body flex-grow-1">
            <div class="comment-header d-flex align-items-center mb-2">
              <span class="author fw-bold me-2">${g.username}</span>
              <span class="timestamp text-muted small">${R.utc(g.created_at).tz("Asia/Almaty").fromNow()}</span>
            </div>
            <div class="comment-content mb-2">${g.content}</div>
            <div class="comment-actions d-flex align-items-center">
              <button class="btn btn-sm btn-outline-secondary me-2 vote-btn upvote">
                <i class="bi bi-arrow-up"></i>
              </button>
              <span class="vote-count me-2">${g.total_votes}</span>
              <button class="btn btn-sm btn-outline-secondary me-3 vote-btn downvote">
                <i class="bi bi-arrow-down"></i>
              </button>
              <button class="btn btn-sm btn-link text-decoration-none">Reply</button>
            </div>
          </div>
        </div>
      </div>
    `).join("");i.innerHTML=E||'<div class="text-muted">No comments yet.</div>',kt()}catch(d){i.innerHTML='<div class="text-danger">Failed to load comments.</div>',console.error(d)}}}function Ct(e){document.querySelectorAll(`[data-target="#commentsModal-${e}"]`).forEach(i=>{i.addEventListener("click",()=>{nt(e)})}),document.querySelectorAll(`.add-comment-form[data-post-id="${e}"]`).forEach(i=>{i.addEventListener("submit",async d=>{d.preventDefault();const y=i.querySelector("textarea"),E=y.value.trim();if(E)try{if(!(await fetch(`http://localhost:5000/api/comments/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${tt}`},body:JSON.stringify({content:E})})).ok)throw new Error("Failed to post comment");y.value="",await nt(e)}catch(g){console.error("Error posting comment:",g)}})})}function kt(e){document.querySelectorAll(".comment .vote-btn").forEach(i=>{i.addEventListener("click",async function(){const d=this.closest(".comment"),y=d.dataset.commentId,E=this.classList.contains("upvote"),g=this.classList.contains("downvote"),v=d.querySelector(".vote-count");let S=parseInt(v.textContent);const l=d.querySelector(".upvote"),m=d.querySelector(".downvote"),M=this.classList.contains("active");let $;M?$=0:E?$=1:g&&($=-1);try{const h=await fetch("http://localhost:5000/api/votes/comment",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${tt}`},body:JSON.stringify({commentId:y,vote:$})});if(!h.ok)throw new Error("Failed to update vote");const w=await h.json();l.classList.remove("active"),m.classList.remove("active"),M?S+=E?-1:1:(this.classList.add("active"),E?S+=m.classList.contains("active")?2:1:S-=l.classList.contains("active")?2:1),v.textContent=S}catch(h){console.error("Error updating comment vote:",h)}})})}function Et(e,i){return`
    <div class="modal fade" id="shareModal-${e}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-body text-body">
          <div class="modal-header border-secondary">
            <h5 class="modal-title">Share Post</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <button class="btn btn-outline-primary w-100 mb-2" id="copyLinkBtn-${e}">
              <i class="bi bi-clipboard"></i> Copy Link
            </button>
            <a href="https://t.me/share/url?url=${encodeURIComponent(i)}" target="_blank" class="btn btn-outline-info w-100 mb-2">
              <i class="bi bi-telegram"></i> Share on Telegram
            </a>
            <a href="https://wa.me/?text=${encodeURIComponent(i)}" target="_blank" class="btn btn-outline-success w-100">
              <i class="bi bi-whatsapp"></i> Share on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `}function _t(e,i){const d=document.getElementById(`copyLinkBtn-${e}`);d&&d.addEventListener("click",()=>{navigator.clipboard.writeText(i).then(()=>{d.textContent="Copied!",setTimeout(()=>d.innerHTML='<i class="bi bi-clipboard"></i> Copy Link',1500)}).catch(()=>alert("Failed to copy link"))})}const ct=document.getElementById("main");async function zt(){try{const e=await fetch("http://localhost:5000/api/threads",{method:"GET",credentials:"same-origin",headers:{Authorization:`Bearer ${tt}`}});if(e.ok){const i=await e.json();return console.log(i),i}else{const i=await e.json();return console.error("Error:",i.message||"Unknown error"),[]}}catch(e){return console.error("Network error:",e.message||"Unknown error"),[]}}async function Ht(){try{const e=await zt();ct.innerHTML=St(e),At(),e.forEach(i=>{document.body.insertAdjacentHTML("beforeend",Et(i.id,`${window.location.origin}/posts/${i.id}`)),_t(i.id,`${window.location.origin}/posts/${i.id}`)})}catch(e){console.error("Error loading posts:",e),ct.innerHTML='<div class="alert alert-danger">Failed to load posts</div>'}}function At(){document.querySelectorAll(".vote-btn").forEach(e=>{e.addEventListener("click",async function(){const i=this.closest(".post"),d=i.dataset.postId,y=this.classList.contains("upvote"),E=this.classList.contains("downvote"),g=i.querySelector(".vote-count");let v=parseInt(g.textContent);const S=i.querySelector(".upvote"),l=i.querySelector(".downvote"),m=this.classList.contains("active");let M;m?M=0:y?M=1:E&&(M=-1);try{const $=await fetch("http://localhost:5000/api/votes/thread",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${tt}`},body:JSON.stringify({threadId:d,vote:M})});if(!$.ok)throw new Error("Failed to update vote");const h=await $.json();S.classList.remove("active"),l.classList.remove("active"),m?v+=y?-1:1:(this.classList.add("active"),y?v+=l.classList.contains("active")?2:1:v-=S.classList.contains("active")?2:1),g.textContent=v}catch($){console.error("Error updating vote:",$)}})}),document.querySelectorAll(".comment-btn").forEach(e=>{e.addEventListener("click",async()=>{const i=e.closest(".post").dataset.postId;document.getElementById(`commentsModal-${i}`)||(document.body.insertAdjacentHTML("beforeend",Tt(i)),Ct(i)),await nt(i),new bootstrap.Modal(document.getElementById(`commentsModal-${i}`)).show()})})}document.addEventListener("DOMContentLoaded",Ht);
