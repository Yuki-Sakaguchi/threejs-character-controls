var DT=Object.defineProperty;var NT=(tr,yi,Bi)=>yi in tr?DT(tr,yi,{enumerable:!0,configurable:!0,writable:!0,value:Bi}):tr[yi]=Bi;var $e=(tr,yi,Bi)=>(NT(tr,typeof yi!="symbol"?yi+"":yi,Bi),Bi);let hl,os,ls,ul,dl,pl,xn,ml,fl,Rr,Ou,gl,_l,Cr,vl,wl,xl,cs,yl,Sl,hs,Ml,N,us,bl,El,ds,qn,Tl,hi,De,ps,Kn,ms,fs,gs,Al,_s,vs,ws,St,xs,Jn,Zn,ze,Rl,Cl,Pl,ys,Ss,Ms,bs,Es,Ts,As,Ll,Qn,Rs,$n,Il,Cs,ea,Ps,Ls,Ul,Dl,Nl,Is,Ol,Fl,Bl,Et,Hl,Pr,Fu,zl,Us,Ds,Ns,OT=(async()=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const tr="modulepreload",yi=function(n,e){return new URL(n,e).href},Bi={},Ju=function(n,e,t){if(!e||e.length===0)return n();const i=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=yi(r,t),r in Bi)return;Bi[r]=!0;const a=r.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(t)for(let l=i.length-1;l>=0;l--){const c=i[l];if(c.href===r&&(!a||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":tr,a||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),a)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())},Os="152",Ir={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zu=0,Vl=1,Qu=2,Wl=1,$u=2,Si=3,Mi=0,Gt=1,ui=2,Hi=0,Dr=1,jl=2,Xl=3,Yl=4,ed=5,Nr=100,td=101,id=102,ql=103,Kl=104,rd=200,nd=201,ad=202,sd=203,Jl=204,Zl=205,od=206,ld=207,cd=208,hd=209,ud=210,dd=0,pd=1,md=2,Fs=3,fd=4,gd=5,_d=6,vd=7,Bs=0,wd=1,xd=2,bi=0,yd=1,Sd=2,Md=3,bd=4,Ed=5,Ql=300,Or=301,Fr=302,Hs=303,zs=304,ia=306,ir=1e3,Kt=1001,ra=1002,At=1003,ks=1004,na=1005,Vt=1006,$l=1007,rr=1008,nr=1009,Td=1010,Ad=1011,ec=1012,Rd=1013,ar=1014,zi=1015,yn=1016,Cd=1017,Pd=1018,Br=1020,Ld=1021,Jt=1023,Id=1024,Ud=1025,sr=1026,Hr=1027,Dd=1028,Nd=1029,Od=1030,Fd=1031,Bd=1033,Gs=33776,Vs=33777,Ws=33778,js=33779,tc=35840,ic=35841,rc=35842,nc=35843,Hd=36196,ac=37492,sc=37496,oc=37808,lc=37809,cc=37810,hc=37811,uc=37812,dc=37813,pc=37814,mc=37815,fc=37816,gc=37817,_c=37818,vc=37819,wc=37820,xc=37821,Xs=36492,zd=36283,yc=36284,Sc=36285,Mc=36286,kd=2200,Gd=2201,Vd=2202,Sn=2300,zr=2301,Ys=2302,kr=2400,Gr=2401,aa=2402,qs=2500,Wd=2501,jd=0,bc=1,Ks=2,Ec=3e3,or=3001,Xd=3200,Yd=3201,Js=0,qd=1,lr="",Re="srgb",di="srgb-linear",Tc="display-p3",Zs=7680,Kd=519,Qs=35044,Ac="300 es",$s=1035;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rc=1234567;const Mn=Math.PI/180,Vr=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function eo(n,e){return(n%e+e)%e}function Jd(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Zd(n,e,t){return n!==e?(t-n)/(e-n):0}function bn(n,e,t){return(1-t)*n+t*e}function Qd(n,e,t,i){return bn(n,e,1-Math.exp(-t*i))}function $d(n,e=1){return e-Math.abs(eo(n,e*2)-e)}function ep(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function tp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ip(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rp(n,e){return n+Math.random()*(e-n)}function np(n){return n*(.5-Math.random())}function ap(n){n!==void 0&&(Rc=n);let e=Rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sp(n){return n*Mn}function op(n){return n*Vr}function to(n){return(n&n-1)===0&&n!==0}function Cc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lp(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),h=s((e+i)/2),u=a((e-i)/2),d=s((e-i)/2),m=a((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*h,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const cp={DEG2RAD:Mn,RAD2DEG:Vr,generateUUID:ti,clamp:Ct,euclideanModulo:eo,mapLinear:Jd,inverseLerp:Zd,lerp:bn,damp:Qd,pingpong:$d,smoothstep:ep,smootherstep:tp,randInt:ip,randFloat:rp,randFloatSpread:np,seededRandom:ap,degToRad:sp,radToDeg:op,isPowerOfTwo:to,ceilPowerOfTwo:Cc,floorPowerOfTwo:Pc,setQuaternionFromProperEuler:lp,normalize:it,denormalize:Ei};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],_=i[8],v=r[0],f=r[3],p=r[6],M=r[1],x=r[4],A=r[7],b=r[2],C=r[5],D=r[8];return a[0]=s*v+o*M+l*b,a[3]=s*f+o*x+l*C,a[6]=s*p+o*A+l*D,a[1]=c*v+h*M+u*b,a[4]=c*f+h*x+u*C,a[7]=c*p+h*A+u*D,a[2]=d*v+m*M+_*b,a[5]=d*f+m*x+_*C,a[8]=d*p+m*A+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,d=o*l-h*a,m=c*a-s*l,_=t*u+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(r*c-h*i)*v,e[2]=(o*i-r*s)*v,e[3]=d*v,e[4]=(h*t-r*l)*v,e[5]=(r*a-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(s*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const io=new Ve;function Lc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function En(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Ic={};function Tn(n){n in Ic||(Ic[n]=!0,console.warn(n))}function Wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ro(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const hp=new Ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),up=new Ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function dp(n){return n.convertSRGBToLinear().applyMatrix3(up)}function pp(n){return n.applyMatrix3(hp).convertLinearToSRGB()}const mp={[di]:n=>n,[Re]:n=>n.convertSRGBToLinear(),[Tc]:dp},fp={[di]:n=>n,[Re]:n=>n.convertLinearToSRGB(),[Tc]:pp},ii={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return di},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=mp[e],r=fp[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let jr;class Uc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jr===void 0&&(jr=En("canvas")),jr.width=e.width,jr.height=e.height;const i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=En("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Wr(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wr(t[i]/255)*255):t[i]=Wr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Dc{constructor(e=null){this.isSource=!0,this.uuid=ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(no(r[s].image)):a.push(no(r[s]))}else a=no(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function no(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Uc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gp=0;class Pt extends ki{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=Kt,r=Kt,a=Vt,s=rr,o=Jt,l=nr,c=Pt.DEFAULT_ANISOTROPY,h=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=ti(),this.name="",this.source=new Dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Tn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===or?Re:lr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ir:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ir:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Re?or:Ec}set encoding(e){Tn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===or?Re:lr}}Pt.DEFAULT_IMAGE=null,Pt.DEFAULT_MAPPING=Ql,Pt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],u=s[5],d=s[9],m=s[2],_=s[6],v=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(d-_)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(d+_)<.1&&Math.abs(o+u+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(o+1)/2,M=(u+1)/2,x=(v+1)/2,A=(l+h)/4,b=(c+m)/4,C=(d+_)/4;return p>M&&p>x?p<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(p),r=A/i,a=b/i):M>x?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=A/r,a=C/r):x<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(x),i=b/a,r=C/a),this.set(i,r,a,t),this}let f=Math.sqrt((_-d)*(_-d)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(_-d)/f,this.y=(c-m)/f,this.z=(h-l)/f,this.w=Math.acos((o+u+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cr extends ki{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Tn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===or?Re:lr),this.texture=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Vt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nc extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _p extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Nt=class{constructor(n=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=n,this._y=e,this._z=t,this._w=i}static slerpFlat(n,e,t,i,r,a,s){let o=t[i+0],l=t[i+1],c=t[i+2],h=t[i+3];const u=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(s===0){n[e+0]=o,n[e+1]=l,n[e+2]=c,n[e+3]=h;return}if(s===1){n[e+0]=u,n[e+1]=d,n[e+2]=m,n[e+3]=_;return}if(h!==_||o!==u||l!==d||c!==m){let v=1-s;const f=o*u+l*d+c*m+h*_,p=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const A=Math.sqrt(M),b=Math.atan2(A,f*p);v=Math.sin(v*b)/A,s=Math.sin(s*b)/A}const x=s*p;if(o=o*v+u*x,l=l*v+d*x,c=c*v+m*x,h=h*v+_*x,v===1-s){const A=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=A,l*=A,c*=A,h*=A}}n[e]=o,n[e+1]=l,n[e+2]=c,n[e+3]=h}static multiplyQuaternionsFlat(n,e,t,i,r,a){const s=t[i],o=t[i+1],l=t[i+2],c=t[i+3],h=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return n[e]=s*m+c*h+o*d-l*u,n[e+1]=o*m+c*u+l*h-s*d,n[e+2]=l*m+c*d+s*u-o*h,n[e+3]=c*m-s*h-o*u-l*d,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,e,t,i){return this._x=n,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,e){const t=n._x,i=n._y,r=n._z,a=n._order,s=Math.cos,o=Math.sin,l=s(t/2),c=s(i/2),h=s(r/2),u=o(t/2),d=o(i/2),m=o(r/2);switch(a){case"XYZ":this._x=u*c*h+l*d*m,this._y=l*d*h-u*c*m,this._z=l*c*m+u*d*h,this._w=l*c*h-u*d*m;break;case"YXZ":this._x=u*c*h+l*d*m,this._y=l*d*h-u*c*m,this._z=l*c*m-u*d*h,this._w=l*c*h+u*d*m;break;case"ZXY":this._x=u*c*h-l*d*m,this._y=l*d*h+u*c*m,this._z=l*c*m+u*d*h,this._w=l*c*h-u*d*m;break;case"ZYX":this._x=u*c*h-l*d*m,this._y=l*d*h+u*c*m,this._z=l*c*m-u*d*h,this._w=l*c*h+u*d*m;break;case"YZX":this._x=u*c*h+l*d*m,this._y=l*d*h+u*c*m,this._z=l*c*m-u*d*h,this._w=l*c*h-u*d*m;break;case"XZY":this._x=u*c*h-l*d*m,this._y=l*d*h-u*c*m,this._z=l*c*m+u*d*h,this._w=l*c*h+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(n,e){const t=e/2,i=Math.sin(t);return this._x=n.x*i,this._y=n.y*i,this._z=n.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(n){const e=n.elements,t=e[0],i=e[4],r=e[8],a=e[1],s=e[5],o=e[9],l=e[2],c=e[6],h=e[10],u=t+s+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-o)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(t>s&&t>h){const d=2*Math.sqrt(1+t-s-h);this._w=(c-o)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(s>h){const d=2*Math.sqrt(1+s-t-h);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(o+c)/d}else{const d=2*Math.sqrt(1+h-t-s);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(n,e){let t=n.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=t):(this._x=0,this._y=-n.z,this._z=n.y,this._w=t)):(this._x=n.y*e.z-n.z*e.y,this._y=n.z*e.x-n.x*e.z,this._z=n.x*e.y-n.y*e.x,this._w=t),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(Ct(this.dot(n),-1,1)))}rotateTowards(n,e){const t=this.angleTo(n);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(n,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,e){const t=n._x,i=n._y,r=n._z,a=n._w,s=e._x,o=e._y,l=e._z,c=e._w;return this._x=t*c+a*s+i*l-r*o,this._y=i*c+a*o+r*s-t*l,this._z=r*c+a*l+t*o-i*s,this._w=a*c-t*s-i*o-r*l,this._onChangeCallback(),this}slerp(n,e){if(e===0)return this;if(e===1)return this.copy(n);const t=this._x,i=this._y,r=this._z,a=this._w;let s=a*n._w+t*n._x+i*n._y+r*n._z;if(s<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,s=-s):this.copy(n),s>=1)return this._w=a,this._x=t,this._y=i,this._z=r,this;const o=1-s*s;if(o<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*t+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(o),c=Math.atan2(l,s),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=a*h+this._w*u,this._x=t*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(n,e,t){return this.copy(n).slerp(e,t)}random(){const n=Math.random(),e=Math.sqrt(1-n),t=Math.sqrt(n),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),t*Math.sin(r),t*Math.cos(r),e*Math.sin(i))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,e=0){return this._x=n[e],this._y=n[e+1],this._z=n[e+2],this._w=n[e+3],this._onChangeCallback(),this}toArray(n=[],e=0){return n[e]=this._x,n[e+1]=this._y,n[e+2]=this._z,n[e+3]=this._w,n}fromBufferAttribute(n,e){return this._x=n.getX(e),this._y=n.getY(e),this._z=n.getZ(e),this._w=n.getW(e),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class Bu{constructor(e=0,t=0,i=0){Bu.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*r-o*i,h=l*i+o*t-a*r,u=l*r+a*i-s*t,d=-a*t-s*i-o*r;return this.x=c*l+d*-a+h*-o-u*-s,this.y=h*l+d*-s+u*-a-c*-o,this.z=u*l+d*-o+c*-s-h*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const ao=new I,Oc=new Nt;class Ti{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let s=0,o=a.count;s<o;s++)Ri.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Ri)}else r.boundingBox===null&&r.computeBoundingBox(),Xr.copy(r.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(An),sa.subVectors(this.max,An),Yr.subVectors(e.a,An),qr.subVectors(e.b,An),Kr.subVectors(e.c,An),Gi.subVectors(qr,Yr),Vi.subVectors(Kr,qr),hr.subVectors(Yr,Kr);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-hr.z,hr.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,hr.z,0,-hr.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-hr.y,hr.x,0];return!so(t,Yr,qr,Kr,sa)||(t=[1,0,0,0,1,0,0,0,1],!so(t,Yr,qr,Kr,sa))?!1:(oa.crossVectors(Gi,Vi),t=[oa.x,oa.y,oa.z],so(t,Yr,qr,Kr,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new I,new I,new I,new I,new I,new I,new I,new I],Ri=new I,Xr=new Ti,Yr=new I,qr=new I,Kr=new I,Gi=new I,Vi=new I,hr=new I,An=new I,sa=new I,oa=new I,ur=new I;function so(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){ur.fromArray(n,a);const o=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),c=t.dot(ur),h=i.dot(ur);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vp=new Ti,Rn=new I,oo=new I;class Ci{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vp.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rn.subVectors(e,this.center);const t=Rn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Rn,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rn.copy(e.center).add(oo)),this.expandByPoint(Rn.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new I,lo=new I,la=new I,Wi=new I,co=new I,ca=new I,ho=new I;let uo=class{constructor(n=new I,e=new I(0,0,-1)){this.origin=n,this.direction=e}set(n,e){return this.origin.copy(n),this.direction.copy(e),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,e){return e.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,Pi)),this}closestPointToPoint(n,e){e.subVectors(n,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const e=Pi.subVectors(n,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(n):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(n))}distanceSqToSegment(n,e,t,i){lo.copy(n).add(e).multiplyScalar(.5),la.copy(e).sub(n).normalize(),Wi.copy(this.origin).sub(lo);const r=n.distanceTo(e)*.5,a=-this.direction.dot(la),s=Wi.dot(this.direction),o=-Wi.dot(la),l=Wi.lengthSq(),c=Math.abs(1-a*a);let h,u,d,m;if(c>0)if(h=a*o-s,u=a*s-o,m=r*c,h>=0)if(u>=-m)if(u<=m){const _=1/c;h*=_,u*=_,d=h*(h+a*u+2*s)+u*(a*h+u+2*o)+l}else u=r,h=Math.max(0,-(a*u+s)),d=-h*h+u*(u+2*o)+l;else u=-r,h=Math.max(0,-(a*u+s)),d=-h*h+u*(u+2*o)+l;else u<=-m?(h=Math.max(0,-(-a*r+s)),u=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l):u<=m?(h=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+l):(h=Math.max(0,-(a*r+s)),u=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l);else u=a>0?-r:r,h=Math.max(0,-(a*u+s)),d=-h*h+u*(u+2*o)+l;return t&&t.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(lo).addScaledVector(la,u),d}intersectSphere(n,e){Pi.subVectors(n.center,this.origin);const t=Pi.dot(this.direction),i=Pi.dot(Pi)-t*t,r=n.radius*n.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=t-a,o=t+a;return o<0?null:s<0?this.at(o,e):this.at(s,e)}intersectsSphere(n){return this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const e=n.normal.dot(this.direction);if(e===0)return n.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(n.normal)+n.constant)/e;return t>=0?t:null}intersectPlane(n,e){const t=this.distanceToPlane(n);return t===null?null:this.at(t,e)}intersectsPlane(n){const e=n.distanceToPoint(this.origin);return e===0||n.normal.dot(this.direction)*e<0}intersectBox(n,e){let t,i,r,a,s,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(t=(n.min.x-u.x)*l,i=(n.max.x-u.x)*l):(t=(n.max.x-u.x)*l,i=(n.min.x-u.x)*l),c>=0?(r=(n.min.y-u.y)*c,a=(n.max.y-u.y)*c):(r=(n.max.y-u.y)*c,a=(n.min.y-u.y)*c),t>a||r>i||((r>t||isNaN(t))&&(t=r),(a<i||isNaN(i))&&(i=a),h>=0?(s=(n.min.z-u.z)*h,o=(n.max.z-u.z)*h):(s=(n.max.z-u.z)*h,o=(n.min.z-u.z)*h),t>o||s>i)||((s>t||t!==t)&&(t=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(n){return this.intersectBox(n,Pi)!==null}intersectTriangle(n,e,t,i,r){co.subVectors(e,n),ca.subVectors(t,n),ho.crossVectors(co,ca);let a=this.direction.dot(ho),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Wi.subVectors(this.origin,n);const o=s*this.direction.dot(ca.crossVectors(Wi,ca));if(o<0)return null;const l=s*this.direction.dot(co.cross(Wi));if(l<0||o+l>a)return null;const c=-s*Wi.dot(ho);return c<0?null:this.at(c/a,r)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class He{constructor(){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,a,s,o,l,c,h,u,d,m,_,v,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=_,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),a=1/Jr.setFromMatrixColumn(e,1).length(),s=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=s*h,m=s*u,_=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=_+m*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,_=c*h,v=c*u;t[0]=d+v*o,t[4]=_*o-m,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=m*o-_,t[6]=v+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,_=c*h,v=c*u;t[0]=d-v*o,t[4]=-s*u,t[8]=_+m*o,t[1]=m+_*o,t[5]=s*h,t[9]=v-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*h,m=s*u,_=o*h,v=o*u;t[0]=l*h,t[4]=_*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,m=s*c,_=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=_*u+m,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+_,t[10]=d-v*u}else if(e.order==="XZY"){const d=s*l,m=s*c,_=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=s*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wp,e,xp)}lookAt(e,t,i){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ji.crossVectors(i,jt),ji.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ji.crossVectors(i,jt)),ji.normalize(),ha.crossVectors(jt,ji),r[0]=ji.x,r[4]=ha.x,r[8]=jt.x,r[1]=ji.y,r[5]=ha.y,r[9]=jt.y,r[2]=ji.z,r[6]=ha.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],_=i[2],v=i[6],f=i[10],p=i[14],M=i[3],x=i[7],A=i[11],b=i[15],C=r[0],D=r[4],Y=r[8],w=r[12],T=r[1],Z=r[5],K=r[9],B=r[13],G=r[2],W=r[6],ne=r[10],$=r[14],Q=r[3],ie=r[7],re=r[11],ye=r[15];return a[0]=s*C+o*T+l*G+c*Q,a[4]=s*D+o*Z+l*W+c*ie,a[8]=s*Y+o*K+l*ne+c*re,a[12]=s*w+o*B+l*$+c*ye,a[1]=h*C+u*T+d*G+m*Q,a[5]=h*D+u*Z+d*W+m*ie,a[9]=h*Y+u*K+d*ne+m*re,a[13]=h*w+u*B+d*$+m*ye,a[2]=_*C+v*T+f*G+p*Q,a[6]=_*D+v*Z+f*W+p*ie,a[10]=_*Y+v*K+f*ne+p*re,a[14]=_*w+v*B+f*$+p*ye,a[3]=M*C+x*T+A*G+b*Q,a[7]=M*D+x*Z+A*W+b*ie,a[11]=M*Y+x*K+A*ne+b*re,a[15]=M*w+x*B+A*$+b*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],_=e[3],v=e[7],f=e[11],p=e[15];return _*(+a*l*u-r*c*u-a*o*d+i*c*d+r*o*m-i*l*m)+v*(+t*l*m-t*c*d+a*s*d-r*s*m+r*c*h-a*l*h)+f*(+t*c*u-t*o*m-a*s*u+i*s*m+a*o*h-i*c*h)+p*(-r*o*h-t*l*u+t*o*d+r*s*u-i*s*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],_=e[12],v=e[13],f=e[14],p=e[15],M=u*f*c-v*d*c+v*l*m-o*f*m-u*l*p+o*d*p,x=_*d*c-h*f*c-_*l*m+s*f*m+h*l*p-s*d*p,A=h*v*c-_*u*c+_*o*m-s*v*m-h*o*p+s*u*p,b=_*u*l-h*v*l-_*o*d+s*v*d+h*o*f-s*u*f,C=t*M+i*x+r*A+a*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=M*D,e[1]=(v*d*a-u*f*a-v*r*m+i*f*m+u*r*p-i*d*p)*D,e[2]=(o*f*a-v*l*a+v*r*c-i*f*c-o*r*p+i*l*p)*D,e[3]=(u*l*a-o*d*a-u*r*c+i*d*c+o*r*m-i*l*m)*D,e[4]=x*D,e[5]=(h*f*a-_*d*a+_*r*m-t*f*m-h*r*p+t*d*p)*D,e[6]=(_*l*a-s*f*a-_*r*c+t*f*c+s*r*p-t*l*p)*D,e[7]=(s*d*a-h*l*a+h*r*c-t*d*c-s*r*m+t*l*m)*D,e[8]=A*D,e[9]=(_*u*a-h*v*a-_*i*m+t*v*m+h*i*p-t*u*p)*D,e[10]=(s*v*a-_*o*a+_*i*c-t*v*c-s*i*p+t*o*p)*D,e[11]=(h*o*a-s*u*a-h*i*c+t*u*c+s*i*m-t*o*m)*D,e[12]=b*D,e[13]=(h*v*r-_*u*r+_*i*d-t*v*d-h*i*f+t*u*f)*D,e[14]=(_*o*r-s*v*r-_*i*l+t*v*l+s*i*f-t*o*f)*D,e[15]=(s*u*r-h*o*r+h*i*l-t*u*l-s*i*d+t*o*d)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,u=o+o,d=a*c,m=a*h,_=a*u,v=s*h,f=s*u,p=o*u,M=l*c,x=l*h,A=l*u,b=i.x,C=i.y,D=i.z;return r[0]=(1-(v+p))*b,r[1]=(m+A)*b,r[2]=(_-x)*b,r[3]=0,r[4]=(m-A)*C,r[5]=(1-(d+p))*C,r[6]=(f+M)*C,r[7]=0,r[8]=(_+x)*D,r[9]=(f-M)*D,r[10]=(1-(d+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Jr.set(r[0],r[1],r[2]).length();const s=Jr.set(r[4],r[5],r[6]).length(),o=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const l=1/a,c=1/s,h=1/o;return ri.elements[0]*=l,ri.elements[1]*=l,ri.elements[2]*=l,ri.elements[4]*=c,ri.elements[5]*=c,ri.elements[6]*=c,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,t.setFromRotationMatrix(ri),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s){const o=this.elements,l=2*a/(t-e),c=2*a/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r),d=-(s+a)/(s-a),m=-2*s*a/(s-a);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,a,s){const o=this.elements,l=1/(t-e),c=1/(i-r),h=1/(s-a),u=(t+e)*l,d=(i+r)*c,m=(s+a)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Jr=new I,ri=new He,wp=new I(0,0,0),xp=new I(1,1,1),ji=new I,ha=new I,jt=new I,Fc=new He,Bc=new Nt;class ua{constructor(e=0,t=0,i=0,r=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yp=0;const zc=new I,Zr=new Nt,Li=new He,da=new I,Cn=new I,Sp=new I,Mp=new Nt,kc=new I(1,0,0),Gc=new I(0,1,0),Vc=new I(0,0,1),bp={type:"added"},Wc={type:"removed"};class ct extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new I,t=new ua,i=new Nt,r=new I(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new Ve}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis(Vc,e)}translateOnAxis(e,t){return zc.copy(e).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis(Vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?da.copy(e):da.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Cn,da,this.up):Li.lookAt(da,Cn,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(Li),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Wc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,e,Sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,Mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),m=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ct.DEFAULT_UP=new I(0,1,0),ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new I,Ii=new I,po=new I,Ui=new I,Qr=new I,$r=new I,jc=new I,mo=new I,fo=new I,go=new I;let pa=!1,ma=class Lr{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ni.subVectors(e,t),r.cross(ni);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){ni.subVectors(r,t),Ii.subVectors(i,t),po.subVectors(e,t);const s=ni.dot(ni),o=ni.dot(Ii),l=ni.dot(po),c=Ii.dot(Ii),h=Ii.dot(po),u=s*c-o*o;if(u===0)return a.set(-2,-1,-1);const d=1/u,m=(c*l-o*h)*d,_=(s*h-o*l)*d;return a.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ui),Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getUV(e,t,i,r,a,s,o,l){return pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pa=!0),this.getInterpolation(e,t,i,r,a,s,o,l)}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,Ui),l.setScalar(0),l.addScaledVector(a,Ui.x),l.addScaledVector(s,Ui.y),l.addScaledVector(o,Ui.z),l}static isFrontFacing(e,t,i,r){return ni.subVectors(i,t),Ii.subVectors(e,t),ni.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ni.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Lr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Lr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pa=!0),Lr.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Lr.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Lr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Lr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;Qr.subVectors(r,i),$r.subVectors(a,i),mo.subVectors(e,i);const l=Qr.dot(mo),c=$r.dot(mo);if(l<=0&&c<=0)return t.copy(i);fo.subVectors(e,r);const h=Qr.dot(fo),u=$r.dot(fo);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(Qr,s);go.subVectors(e,a);const m=Qr.dot(go),_=$r.dot(go);if(_>=0&&m<=_)return t.copy(a);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector($r,o);const f=h*_-m*u;if(f<=0&&u-h>=0&&m-_>=0)return jc.subVectors(a,r),o=(u-h)/(u-h+(m-_)),t.copy(r).addScaledVector(jc,o);const p=1/(f+v+d);return s=v*p,o=d*p,t.copy(i).addScaledVector(Qr,s).addScaledVector($r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ep=0;class ai extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Dr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Jl,this.blendDst=Zl,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},fa={h:0,s:0,l:0};function _o(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?n+(e-n)*6*t:t<.5?e:t<.6666666666666666?n+(e-n)*6*(.6666666666666666-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ii.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ii.workingColorSpace){return this.r=e,this.g=t,this.b=i,ii.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ii.workingColorSpace){if(e=eo(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=_o(s,a,e+.3333333333333333),this.g=_o(s,a,e),this.b=_o(s,a,e-.3333333333333333)}return ii.toWorkingColorSpace(this,r),this}setStyle(e,t=Re){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){const i=Xc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return ii.fromWorkingColorSpace(It.copy(this),e),Math.round(Ct(It.r*255,0,255))*65536+Math.round(Ct(It.g*255,0,255))*256+Math.round(Ct(It.b*255,0,255))}getHexString(e=Re){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ii.workingColorSpace){ii.fromWorkingColorSpace(It.copy(this),t);const i=It.r,r=It.g,a=It.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case i:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-i)/u+2;break;case a:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ii.workingColorSpace){return ii.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Re){ii.fromWorkingColorSpace(It.copy(this),e);const t=It.r,i=It.g,r=It.b;return e!==Re?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(si),si.h+=e,si.s+=t,si.l+=i,this.setHSL(si.h,si.s,si.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(fa);const i=bn(si.h,fa.h,t),r=bn(si.s,fa.s,t),a=bn(si.l,fa.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ue;Ue.NAMES=Xc;class dr extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new I,ga=new Ie;class Ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ga.fromBufferAttribute(this,t),ga.applyMatrix3(e),this.setXY(t,ga.x,ga.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),a=it(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Yc extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qc extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Di extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tp=0;const Zt=new He,vo=new ct,en=new I,Xt=new Ti,Pn=new Ti,Rt=new I;class pi extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lc(e)?qc:Yc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ve().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(en).negate(),this.translate(en.x,en.y,en.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Di(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Xt.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Pn.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Xt.min,Pn.min),Xt.expandByPoint(Rt),Rt.addVectors(Xt.max,Pn.max),Xt.expandByPoint(Rt)):(Xt.expandByPoint(Pn.min),Xt.expandByPoint(Pn.max))}Xt.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Rt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(en.fromBufferAttribute(e,c),Rt.add(en)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,s=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new I,h[T]=new I;const u=new I,d=new I,m=new I,_=new Ie,v=new Ie,f=new Ie,p=new I,M=new I;function x(T,Z,K){u.fromArray(r,T*3),d.fromArray(r,Z*3),m.fromArray(r,K*3),_.fromArray(s,T*2),v.fromArray(s,Z*2),f.fromArray(s,K*2),d.sub(u),m.sub(u),v.sub(_),f.sub(_);const B=1/(v.x*f.y-f.x*v.y);isFinite(B)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(B),M.copy(m).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(B),c[T].add(p),c[Z].add(p),c[K].add(p),h[T].add(M),h[Z].add(M),h[K].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let T=0,Z=A.length;T<Z;++T){const K=A[T],B=K.start,G=K.count;for(let W=B,ne=B+G;W<ne;W+=3)x(i[W+0],i[W+1],i[W+2])}const b=new I,C=new I,D=new I,Y=new I;function w(T){D.fromArray(a,T*3),Y.copy(D);const Z=c[T];b.copy(Z),b.sub(D.multiplyScalar(D.dot(Z))).normalize(),C.crossVectors(Y,Z);const K=C.dot(h[T])<0?-1:1;l[T*4]=b.x,l[T*4+1]=b.y,l[T*4+2]=b.z,l[T*4+3]=K}for(let T=0,Z=A.length;T<Z;++T){const K=A[T],B=K.start,G=K.count;for(let W=B,ne=B+G;W<ne;W+=3)w(i[W+0]),w(i[W+1]),w(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new I,a=new I,s=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,f),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let p=0;p<h;p++)d[_++]=c[m++]}return new Ot(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new He,mi=new uo,_a=new Ci,Jc=new I,tn=new I,rn=new I,nn=new I,wo=new I,va=new I,wa=new Ie,xa=new Ie,ya=new Ie,Zc=new I,Qc=new I,$c=new I,Sa=new I,Ma=new I;class Wt extends ct{constructor(e=new pi,t=new dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){va.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(wo.fromBufferAttribute(u,e),s?va.addScaledVector(wo,h):va.addScaledVector(wo.sub(t),h))}t.add(va)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(a),mi.copy(e.ray).recast(e.near),!(_a.containsPoint(mi.origin)===!1&&(mi.intersectSphere(_a,Jc)===null||mi.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Kc.copy(a).invert(),mi.copy(e.ray).applyMatrix4(Kc),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const r=this.geometry,a=this.material,s=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(s!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const v=u[m],f=a[v.materialIndex],p=Math.max(v.start,d.start),M=Math.min(s.count,Math.min(v.start+v.count,d.start+d.count));for(let x=p,A=M;x<A;x+=3){const b=s.getX(x),C=s.getX(x+1),D=s.getX(x+2);i=ba(this,f,e,mi,l,c,h,b,C,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(s.count,d.start+d.count);for(let v=m,f=_;v<f;v+=3){const p=s.getX(v),M=s.getX(v+1),x=s.getX(v+2);i=ba(this,a,e,mi,l,c,h,p,M,x),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const v=u[m],f=a[v.materialIndex],p=Math.max(v.start,d.start),M=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let x=p,A=M;x<A;x+=3){const b=x,C=x+1,D=x+2;i=ba(this,f,e,mi,l,c,h,b,C,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let v=m,f=_;v<f;v+=3){const p=v,M=v+1,x=v+2;i=ba(this,a,e,mi,l,c,h,p,M,x),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}}function Ap(n,e,t,i,r,a,s,o){let l;if(e.side===Gt?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Mi,o),l===null)return null;Ma.copy(o),Ma.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:n}}function ba(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,tn),n.getVertexPosition(l,rn),n.getVertexPosition(c,nn);const h=Ap(n,e,t,i,tn,rn,nn,Sa);if(h){r&&(wa.fromBufferAttribute(r,o),xa.fromBufferAttribute(r,l),ya.fromBufferAttribute(r,c),h.uv=ma.getInterpolation(Sa,tn,rn,nn,wa,xa,ya,new Ie)),a&&(wa.fromBufferAttribute(a,o),xa.fromBufferAttribute(a,l),ya.fromBufferAttribute(a,c),h.uv1=ma.getInterpolation(Sa,tn,rn,nn,wa,xa,ya,new Ie),h.uv2=h.uv1),s&&(Zc.fromBufferAttribute(s,o),Qc.fromBufferAttribute(s,l),$c.fromBufferAttribute(s,c),h.normal=ma.getInterpolation(Sa,tn,rn,nn,Zc,Qc,$c,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};ma.getNormal(tn,rn,nn,u.normal),h.face=u}return h}class an extends pi{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,s,a,0),_("z","y","x",1,-1,i,t,-e,s,a,1),_("x","z","y",1,1,e,i,t,r,s,2),_("x","z","y",1,-1,e,i,-t,r,s,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Di(c,3)),this.setAttribute("normal",new Di(h,3)),this.setAttribute("uv",new Di(u,2));function _(v,f,p,M,x,A,b,C,D,Y,w){const T=A/D,Z=b/Y,K=A/2,B=b/2,G=C/2,W=D+1,ne=Y+1;let $=0,Q=0;const ie=new I;for(let re=0;re<ne;re++){const ye=re*Z-B;for(let pe=0;pe<W;pe++){const k=pe*T-K;ie[v]=k*M,ie[f]=ye*x,ie[p]=G,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[f]=0,ie[p]=C>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(pe/D),u.push(1-re/Y),$+=1}}for(let re=0;re<Y;re++)for(let ye=0;ye<D;ye++){const pe=d+ye+W*re,k=d+ye+W*(re+1),ee=d+(ye+1)+W*(re+1),me=d+(ye+1)+W*re;l.push(pe,k,me),l.push(k,ee,me),Q+=6}o.addGroup(m,Q,w),m+=Q,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sn(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=sn(n[t]);for(const r in i)e[r]=i[r]}return e}function Rp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eh(n){return n.getRenderTarget()===null?n.outputColorSpace:di}const Cp={clone:sn,merge:Ft};var Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sn(e.uniforms),this.uniformsGroups=Rp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class th extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends th{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Mn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const on=-90,ln=1;class Ip extends ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Bt(on,ln,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const a=new Bt(on,ln,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const s=new Bt(on,ln,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const o=new Bt(on,ln,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Bt(on,ln,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Bt(on,ln,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,a,s,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=bi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class ih extends Pt{constructor(e,t,i,r,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,i,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Up extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Tn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===or?Re:lr),this.texture=new ih(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new an(5,5,5),a=new pr({name:"CubemapFromEquirect",uniforms:sn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Hi});a.uniforms.tEquirect.value=t;const s=new Wt(r,a),o=t.minFilter;return t.minFilter===rr&&(t.minFilter=Vt),new Ip(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const xo=new I,Dp=new I,Np=new Ve;class mr{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xo.subVectors(i,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Np.getNormalMatrix(e),r=this.coplanarPoint(xo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Ci,Ea=new I;class yo{constructor(e=new mr,t=new mr,i=new mr,r=new mr,a=new mr,s=new mr){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],a=i[1],s=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],m=i[9],_=i[10],v=i[11],f=i[12],p=i[13],M=i[14],x=i[15];return t[0].setComponents(o-r,u-l,v-d,x-f).normalize(),t[1].setComponents(o+r,u+l,v+d,x+f).normalize(),t[2].setComponents(o+a,u+c,v+m,x+p).normalize(),t[3].setComponents(o-a,u-c,v-m,x-p).normalize(),t[4].setComponents(o-s,u-h,v-_,x-M).normalize(),t[5].setComponents(o+s,u+h,v+_,x+M).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ea.x=r.normal.x>0?e.max.x:e.min.x,Ea.y=r.normal.y>0?e.max.y:e.min.y,Ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rh(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Op(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const u=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function a(c,h,u){const d=h.array,m=h.updateRange;n.bindBuffer(u,c),m.count===-1?n.bufferSubData(u,0,d):(t?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,r(c,h)):u.version<c.version&&(a(u.buffer,c,h),u.version=c.version)}return{get:s,remove:o,update:l}}class Ta extends pi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,m=[],_=[],v=[],f=[];for(let p=0;p<h;p++){const M=p*d-s;for(let x=0;x<c;x++){const A=x*u-a;_.push(A,-M,0),v.push(0,0,1),f.push(x/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const x=M+c*p,A=M+c*(p+1),b=M+1+c*(p+1),C=M+1+c*p;m.push(x,A,C),m.push(A,b,C)}this.setIndex(m),this.setAttribute("position",new Di(_,3)),this.setAttribute("normal",new Di(v,3)),this.setAttribute("uv",new Di(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp="vec3 transformed = vec3( position );",Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,im=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ym=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Um=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zm=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Af=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Rf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Cf=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pf=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lf=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,If=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Df=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yf=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ng=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:Fp,alphamap_pars_fragment:Bp,alphatest_fragment:Hp,alphatest_pars_fragment:zp,aomap_fragment:kp,aomap_pars_fragment:Gp,begin_vertex:Vp,beginnormal_vertex:Wp,bsdfs:jp,iridescence_fragment:Xp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Kp,clipping_planes_pars_vertex:Jp,clipping_planes_vertex:Zp,color_fragment:Qp,color_pars_fragment:$p,color_pars_vertex:em,color_vertex:tm,common:im,cube_uv_reflection_fragment:rm,defaultnormal_vertex:nm,displacementmap_pars_vertex:am,displacementmap_vertex:sm,emissivemap_fragment:om,emissivemap_pars_fragment:lm,encodings_fragment:cm,encodings_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:dm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Tm,envmap_vertex:fm,fog_vertex:gm,fog_pars_vertex:_m,fog_fragment:vm,fog_pars_fragment:wm,gradientmap_pars_fragment:xm,lightmap_fragment:ym,lightmap_pars_fragment:Sm,lights_lambert_fragment:Mm,lights_lambert_pars_fragment:bm,lights_pars_begin:Em,lights_toon_fragment:Am,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Pm,lights_physical_fragment:Lm,lights_physical_pars_fragment:Im,lights_fragment_begin:Um,lights_fragment_maps:Dm,lights_fragment_end:Nm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:Hm,map_fragment:zm,map_pars_fragment:km,map_particle_fragment:Gm,map_particle_pars_fragment:Vm,metalnessmap_fragment:Wm,metalnessmap_pars_fragment:jm,morphcolor_vertex:Xm,morphnormal_vertex:Ym,morphtarget_pars_vertex:qm,morphtarget_vertex:Km,normal_fragment_begin:Jm,normal_fragment_maps:Zm,normal_pars_fragment:Qm,normal_pars_vertex:$m,normal_vertex:ef,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:rf,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:af,iridescence_pars_fragment:sf,output_fragment:of,packing:lf,premultiplied_alpha_fragment:cf,project_vertex:hf,dithering_fragment:uf,dithering_pars_fragment:df,roughnessmap_fragment:pf,roughnessmap_pars_fragment:mf,shadowmap_pars_fragment:ff,shadowmap_pars_vertex:gf,shadowmap_vertex:_f,shadowmask_pars_fragment:vf,skinbase_vertex:wf,skinning_pars_vertex:xf,skinning_vertex:yf,skinnormal_vertex:Sf,specularmap_fragment:Mf,specularmap_pars_fragment:bf,tonemapping_fragment:Ef,tonemapping_pars_fragment:Tf,transmission_fragment:Af,transmission_pars_fragment:Rf,uv_pars_fragment:Cf,uv_pars_vertex:Pf,uv_vertex:Lf,worldpos_vertex:If,background_vert:Uf,background_frag:Df,backgroundCube_vert:Nf,backgroundCube_frag:Of,cube_vert:Ff,cube_frag:Bf,depth_vert:Hf,depth_frag:zf,distanceRGBA_vert:kf,distanceRGBA_frag:Gf,equirect_vert:Vf,equirect_frag:Wf,linedashed_vert:jf,linedashed_frag:Xf,meshbasic_vert:Yf,meshbasic_frag:qf,meshlambert_vert:Kf,meshlambert_frag:Jf,meshmatcap_vert:Zf,meshmatcap_frag:Qf,meshnormal_vert:$f,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ig,meshphysical_vert:rg,meshphysical_frag:ng,meshtoon_vert:ag,meshtoon_frag:sg,points_vert:og,points_frag:lg,shadow_vert:cg,shadow_frag:hg,sprite_vert:ug,sprite_frag:dg},le={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaTest:{value:0}}},fi={basic:{uniforms:Ft([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ft([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ft([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ft([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ft([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ft([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ft([le.points,le.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ft([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ft([le.common,le.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ft([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ft([le.sprite,le.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Ft([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Ft([le.lights,le.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};fi.physical={uniforms:Ft([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Aa={r:0,b:0,g:0};function pg(n,e,t,i,r,a,s){const o=new Ue(0);let l=a===!0?0:1,c,h,u=null,d=0,m=null;function _(f,p){let M=!1,x=p.isScene===!0?p.background:null;switch(x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?v(o,l):x&&x.isColor&&(v(x,1),M=!0),n.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,s),M=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,s),M=!0;break}(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ia)?(h===void 0&&(h=new Wt(new an(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:sn(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=x.colorSpace!==Re,(u!==x||d!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=n.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Wt(new Ta(2,2),new pr({name:"BackgroundMaterial",uniforms:sn(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Re,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,p){f.getRGB(Aa,eh(n)),i.buffers.color.setClear(Aa.r,Aa.g,Aa.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(o,l)},render:_}}function mg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=f(null);let c=l,h=!1;function u(G,W,ne,$,Q){let ie=!1;if(s){const re=v($,ne,W);c!==re&&(c=re,m(c.object)),ie=p(G,$,ne,Q),ie&&M(G,$,ne,Q)}else{const re=W.wireframe===!0;(c.geometry!==$.id||c.program!==ne.id||c.wireframe!==re)&&(c.geometry=$.id,c.program=ne.id,c.wireframe=re,ie=!0)}Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(ie||h)&&(h=!1,Y(G,W,ne,$),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function m(G){return i.isWebGL2?n.bindVertexArray(G):a.bindVertexArrayOES(G)}function _(G){return i.isWebGL2?n.deleteVertexArray(G):a.deleteVertexArrayOES(G)}function v(G,W,ne){const $=ne.wireframe===!0;let Q=o[G.id];Q===void 0&&(Q={},o[G.id]=Q);let ie=Q[W.id];ie===void 0&&(ie={},Q[W.id]=ie);let re=ie[$];return re===void 0&&(re=f(d()),ie[$]=re),re}function f(G){const W=[],ne=[],$=[];for(let Q=0;Q<r;Q++)W[Q]=0,ne[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ne,attributeDivisors:$,object:G,attributes:{},index:null}}function p(G,W,ne,$){const Q=c.attributes,ie=W.attributes;let re=0;const ye=ne.getAttributes();for(const pe in ye)if(ye[pe].location>=0){const k=Q[pe];let ee=ie[pe];if(ee===void 0&&(pe==="instanceMatrix"&&G.instanceMatrix&&(ee=G.instanceMatrix),pe==="instanceColor"&&G.instanceColor&&(ee=G.instanceColor)),k===void 0||k.attribute!==ee||ee&&k.data!==ee.data)return!0;re++}return c.attributesNum!==re||c.index!==$}function M(G,W,ne,$){const Q={},ie=W.attributes;let re=0;const ye=ne.getAttributes();for(const pe in ye)if(ye[pe].location>=0){let k=ie[pe];k===void 0&&(pe==="instanceMatrix"&&G.instanceMatrix&&(k=G.instanceMatrix),pe==="instanceColor"&&G.instanceColor&&(k=G.instanceColor));const ee={};ee.attribute=k,k&&k.data&&(ee.data=k.data),Q[pe]=ee,re++}c.attributes=Q,c.attributesNum=re,c.index=$}function x(){const G=c.newAttributes;for(let W=0,ne=G.length;W<ne;W++)G[W]=0}function A(G){b(G,0)}function b(G,W){const ne=c.newAttributes,$=c.enabledAttributes,Q=c.attributeDivisors;ne[G]=1,$[G]===0&&(n.enableVertexAttribArray(G),$[G]=1),Q[G]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,W),Q[G]=W)}function C(){const G=c.newAttributes,W=c.enabledAttributes;for(let ne=0,$=W.length;ne<$;ne++)W[ne]!==G[ne]&&(n.disableVertexAttribArray(ne),W[ne]=0)}function D(G,W,ne,$,Q,ie){i.isWebGL2===!0&&(ne===n.INT||ne===n.UNSIGNED_INT)?n.vertexAttribIPointer(G,W,ne,Q,ie):n.vertexAttribPointer(G,W,ne,$,Q,ie)}function Y(G,W,ne,$){if(i.isWebGL2===!1&&(G.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Q=$.attributes,ie=ne.getAttributes(),re=W.defaultAttributeValues;for(const ye in ie){const pe=ie[ye];if(pe.location>=0){let k=Q[ye];if(k===void 0&&(ye==="instanceMatrix"&&G.instanceMatrix&&(k=G.instanceMatrix),ye==="instanceColor"&&G.instanceColor&&(k=G.instanceColor)),k!==void 0){const ee=k.normalized,me=k.itemSize,he=t.get(k);if(he===void 0)continue;const U=he.buffer,Ce=he.type,Te=he.bytesPerElement;if(k.isInterleavedBufferAttribute){const oe=k.data,Ee=oe.stride,Je=k.offset;if(oe.isInstancedInterleavedBuffer){for(let Se=0;Se<pe.locationSize;Se++)b(pe.location+Se,oe.meshPerAttribute);G.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Se=0;Se<pe.locationSize;Se++)A(pe.location+Se);n.bindBuffer(n.ARRAY_BUFFER,U);for(let Se=0;Se<pe.locationSize;Se++)D(pe.location+Se,me/pe.locationSize,Ce,ee,Ee*Te,(Je+me/pe.locationSize*Se)*Te)}else{if(k.isInstancedBufferAttribute){for(let oe=0;oe<pe.locationSize;oe++)b(pe.location+oe,k.meshPerAttribute);G.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let oe=0;oe<pe.locationSize;oe++)A(pe.location+oe);n.bindBuffer(n.ARRAY_BUFFER,U);for(let oe=0;oe<pe.locationSize;oe++)D(pe.location+oe,me/pe.locationSize,Ce,ee,me*Te,me/pe.locationSize*oe*Te)}}else if(re!==void 0){const ee=re[ye];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(pe.location,ee);break;case 3:n.vertexAttrib3fv(pe.location,ee);break;case 4:n.vertexAttrib4fv(pe.location,ee);break;default:n.vertexAttrib1fv(pe.location,ee)}}}}C()}function w(){K();for(const G in o){const W=o[G];for(const ne in W){const $=W[ne];for(const Q in $)_($[Q].object),delete $[Q];delete W[ne]}delete o[G]}}function T(G){if(o[G.id]===void 0)return;const W=o[G.id];for(const ne in W){const $=W[ne];for(const Q in $)_($[Q].object),delete $[Q];delete W[ne]}delete o[G.id]}function Z(G){for(const W in o){const ne=o[W];if(ne[G.id]===void 0)continue;const $=ne[G.id];for(const Q in $)_($[Q].object),delete $[Q];delete ne[G.id]}}function K(){B(),h=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:K,resetDefaultState:B,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:Z,initAttributes:x,enableAttribute:A,disableUnusedAttributes:C}}function fg(n,e,t,i){const r=i.isWebGL2;let a;function s(c){a=c}function o(c,h){n.drawArrays(a,c,h),t.update(h,a,1)}function l(c,h,u){if(u===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](a,c,h,u),t.update(h,a,u)}this.setMode=s,this.render=o,this.renderInstances=l}function gg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,A=s||e.has("OES_texture_float"),b=x&&A,C=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:b,maxSamples:C}}function _g(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new mr,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||r;return r=d,i=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const _=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,p=n.get(u);if(!r||_===null||_.length===0||a&&!f)a?h(null):c();else{const M=a?0:i,x=M*4;let A=p.clippingState||null;l.value=A,A=h(_,d,x,m);for(let b=0;b!==x;++b)A[b]=t[b];p.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,_){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=l.value,_!==!0||f===null){const p=m+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,A=m;x!==v;++x,A+=4)s.copy(u[x]).applyMatrix4(M,o),s.normal.toArray(f,A),f[A+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function vg(n){let e=new WeakMap;function t(s,o){return o===Hs?s.mapping=Or:o===zs&&(s.mapping=Fr),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Hs||o===zs)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Up(l.height/2);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class So extends th{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cn=4,nh=[.125,.215,.35,.446,.526,.582],gr=20,Mo=new So,ah=new Ue;let bo=null;const _r=(1+Math.sqrt(5))/2,hn=1/_r,sh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,_r,hn),new I(0,_r,-hn),new I(hn,0,_r),new I(-hn,0,_r),new I(_r,hn,0),new I(-_r,hn,0)];class oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){bo=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bo),e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:yn,format:Jt,colorSpace:di,depthBuffer:!1},r=lh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wg(a)),this._blurMaterial=xg(a,e,t)}return r}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,i,r){const a=new Bt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(ah),l.toneMapping=bi,l.autoClear=!1;const u=new dr({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),d=new Wt(new an,u);let m=!1;const _=e.background;_?_.isColor&&(u.color.copy(_),e.background=null,m=!0):(u.color.copy(ah),m=!0);for(let v=0;v<6;v++){const f=v%3;f===0?(a.up.set(0,s[v],0),a.lookAt(o[v],0,0)):f===1?(a.up.set(0,0,s[v]),a.lookAt(0,o[v],0)):(a.up.set(0,s[v],0),a.lookAt(0,0,o[v]));const p=this._cubeSize;Ra(r,f*p,v>2?p:0,p,p),l.setRenderTarget(r),m&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Or||e.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Wt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ra(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Mo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=sh[(r-1)%sh.length];this._blur(e,r-1,r,a,s)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Wt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*gr-1),v=a/_,f=isFinite(a)?1+Math.floor(h*v):gr;f>gr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${gr}`);const p=[];let M=0;for(let D=0;D<gr;++D){const Y=D/v,w=Math.exp(-Y*Y/2);p.push(w),D===0?M+=w:D<f&&(M+=2*w)}for(let D=0;D<p.length;D++)p[D]=p[D]/M;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const A=this._sizeLods[r],b=3*A*(r>x-cn?r-x+cn:0),C=4*(this._cubeSize-A);Ra(t,b,C,3*A,2*A),l.setRenderTarget(t),l.render(u,Mo)}}function wg(n){const e=[],t=[],i=[];let r=n;const a=n-cn+1+nh.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-cn?l=nh[s-n+cn-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,v=3,f=2,p=1,M=new Float32Array(v*_*m),x=new Float32Array(f*_*m),A=new Float32Array(p*_*m);for(let C=0;C<m;C++){const D=C%3*2/3-1,Y=C>2?0:-1,w=[D,Y,0,D+2/3,Y,0,D+2/3,Y+1,0,D,Y,0,D+2/3,Y+1,0,D,Y+1,0];M.set(w,v*_*C),x.set(d,f*_*C);const T=[C,C,C,C,C,C];A.set(T,p*_*C)}const b=new pi;b.setAttribute("position",new Ot(M,v)),b.setAttribute("uv",new Ot(x,f)),b.setAttribute("faceIndex",new Ot(A,p)),e.push(b),r>cn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lh(n,e,t){const i=new cr(n,e,t);return i.texture.mapping=ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ra(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xg(n,e,t){const i=new Float32Array(gr),r=new I(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function ch(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function hh(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hs||l===zs,h=l===Or||l===Fr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new oh(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new oh(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",a),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Sg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Mg(n,e,t,i){const r={},a=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",s),delete r[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const v=m[_];for(let f=0,p=v.length;f<p;f++)e.update(v[f],n.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const M=m.array;v=m.version;for(let x=0,A=M.length;x<A;x+=3){const b=M[x+0],C=M[x+1],D=M[x+2];d.push(b,C,C,D,D,b)}}else{const M=_.array;v=_.version;for(let x=0,A=M.length/3-1;x<A;x+=3){const b=x+0,C=x+1,D=x+2;d.push(b,C,C,D,D,b)}}const f=new(Lc(d)?qc:Yc)(d,1);f.version=v;const p=a.get(u);p&&e.remove(p),a.set(u,f)}function h(u){const d=a.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function bg(n,e,t,i){const r=i.isWebGL2;let a;function s(d){a=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,m){n.drawElements(a,m,o,d*l),t.update(m,a,1)}function u(d,m,_){if(_===0)return;let v,f;if(r)v=n,f="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[f](a,m,o,d*l,_),t.update(m,a,_)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=u}function Eg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Tg(n,e){return n[0]-e[0]}function Ag(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Rg(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,s=new rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let M=function(){B.dispose(),a.delete(h),h.removeEventListener("dispose",M)};v!==void 0&&v.texture.dispose();const x=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],Y=h.morphAttributes.color||[];let w=0;x===!0&&(w=1),A===!0&&(w=2),b===!0&&(w=3);let T=h.attributes.position.count*w,Z=1;T>e.maxTextureSize&&(Z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const K=new Float32Array(T*Z*4*_),B=new Nc(K,T,Z,_);B.type=zi,B.needsUpdate=!0;const G=w*4;for(let W=0;W<_;W++){const ne=C[W],$=D[W],Q=Y[W],ie=T*Z*4*W;for(let re=0;re<ne.count;re++){const ye=re*G;x===!0&&(s.fromBufferAttribute(ne,re),K[ie+ye+0]=s.x,K[ie+ye+1]=s.y,K[ie+ye+2]=s.z,K[ie+ye+3]=0),A===!0&&(s.fromBufferAttribute($,re),K[ie+ye+4]=s.x,K[ie+ye+5]=s.y,K[ie+ye+6]=s.z,K[ie+ye+7]=0),b===!0&&(s.fromBufferAttribute(Q,re),K[ie+ye+8]=s.x,K[ie+ye+9]=s.y,K[ie+ye+10]=s.z,K[ie+ye+11]=Q.itemSize===4?s.w:1)}}v={count:_,texture:B,size:new Ie(T,Z)},a.set(h,v),h.addEventListener("dispose",M)}let f=0;for(let M=0;M<d.length;M++)f+=d[M];const p=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];i[h.id]=_}for(let x=0;x<m;x++){const A=_[x];A[0]=x,A[1]=d[x]}_.sort(Ag);for(let x=0;x<8;x++)x<m&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Tg);const v=h.morphAttributes.position,f=h.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const A=o[x],b=A[0],C=A[1];b!==Number.MAX_SAFE_INTEGER&&C?(v&&h.getAttribute("morphTarget"+x)!==v[b]&&h.setAttribute("morphTarget"+x,v[b]),f&&h.getAttribute("morphNormal"+x)!==f[b]&&h.setAttribute("morphNormal"+x,f[b]),r[x]=C,p+=C):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),f&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const M=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Cg(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),u}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const uh=new Pt,dh=new Nc,ph=new _p,mh=new ih,fh=[],gh=[],_h=new Float32Array(16),vh=new Float32Array(9),wh=new Float32Array(4);function un(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=fh[r];if(a===void 0&&(a=new Float32Array(r),fh[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ca(n,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Pg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function Dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,i))return;wh.set(i),n.uniformMatrix2fv(this.addr,!1,wh),bt(t,i)}}function Ng(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,i))return;vh.set(i),n.uniformMatrix3fv(this.addr,!1,vh),bt(t,i)}}function Og(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,i))return;_h.set(i),n.uniformMatrix4fv(this.addr,!1,_h),bt(t,i)}}function Fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function jg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||uh,r)}function Xg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ph,r)}function Yg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mh,r)}function qg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||dh,r)}function Kg(n){switch(n){case 5126:return Pg;case 35664:return Lg;case 35665:return Ig;case 35666:return Ug;case 35674:return Dg;case 35675:return Ng;case 35676:return Og;case 5124:case 35670:return Fg;case 35667:case 35671:return Bg;case 35668:case 35672:return Hg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return qg}}function Jg(n,e){n.uniform1fv(this.addr,e)}function Zg(n,e){const t=un(e,this.size,2);n.uniform2fv(this.addr,t)}function Qg(n,e){const t=un(e,this.size,3);n.uniform3fv(this.addr,t)}function $g(n,e){const t=un(e,this.size,4);n.uniform4fv(this.addr,t)}function e_(n,e){const t=un(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function t_(n,e){const t=un(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function i_(n,e){const t=un(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function r_(n,e){n.uniform1iv(this.addr,e)}function n_(n,e){n.uniform2iv(this.addr,e)}function a_(n,e){n.uniform3iv(this.addr,e)}function s_(n,e){n.uniform4iv(this.addr,e)}function o_(n,e){n.uniform1uiv(this.addr,e)}function l_(n,e){n.uniform2uiv(this.addr,e)}function c_(n,e){n.uniform3uiv(this.addr,e)}function h_(n,e){n.uniform4uiv(this.addr,e)}function u_(n,e,t){const i=this.cache,r=e.length,a=Ca(t,r);Mt(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||uh,a[s])}function d_(n,e,t){const i=this.cache,r=e.length,a=Ca(t,r);Mt(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||ph,a[s])}function p_(n,e,t){const i=this.cache,r=e.length,a=Ca(t,r);Mt(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||mh,a[s])}function m_(n,e,t){const i=this.cache,r=e.length,a=Ca(t,r);Mt(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||dh,a[s])}function f_(n){switch(n){case 5126:return Jg;case 35664:return Zg;case 35665:return Qg;case 35666:return $g;case 35674:return e_;case 35675:return t_;case 35676:return i_;case 5124:case 35670:return r_;case 35667:case 35671:return n_;case 35668:case 35672:return a_;case 35669:case 35673:return s_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}class g_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Kg(t.type)}}class __{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=f_(t.type)}}class v_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const To=/(\w+)(\])?(\[|\.)?/g;function xh(n,e){n.seq.push(e),n.map[e.id]=e}function w_(n,e,t){const i=n.name,r=i.length;for(To.lastIndex=0;;){const a=To.exec(i),s=To.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){xh(t,c===void 0?new g_(o,n,e):new __(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new v_(o),xh(t,h)),t=h}}}class Pa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);w_(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function yh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let x_=0;function y_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function S_(n){switch(n){case di:return["Linear","( value )"];case Re:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Sh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+y_(n.getShaderSource(e),s)}else return r}function M_(n,e){const t=S_(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function b_(n,e){let t;switch(e){case yd:t="Linear";break;case Sd:t="Reinhard";break;case Md:t="OptimizedCineon";break;case bd:t="ACESFilmic";break;case Ed:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function E_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ln).join(`
`)}function T_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function A_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Ln(n){return n!==""}function Mh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const R_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(n){return n.replace(R_,C_)}function C_(n,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ao(t)}const P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(n){return n.replace(P_,L_)}function L_(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Th(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function I_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$u?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function U_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Or:case Fr:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function N_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bs:e="ENVMAP_BLENDING_MULTIPLY";break;case wd:e="ENVMAP_BLENDING_MIX";break;case xd:e="ENVMAP_BLENDING_ADD";break}return e}function O_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function F_(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=I_(t),c=U_(t),h=D_(t),u=N_(t),d=O_(t),m=t.isWebGL2?"":E_(t),_=T_(a),v=r.createProgram();let f,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[_].filter(Ln).join(`
`),f.length>0&&(f+=`
`),p=[m,_].filter(Ln).join(`
`),p.length>0&&(p+=`
`)):(f=[Th(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ln).join(`
`),p=[m,Th(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Ne.tonemapping_pars_fragment:"",t.toneMapping!==bi?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,M_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ln).join(`
`)),s=Ao(s),s=Mh(s,t),s=bh(s,t),o=Ao(o),o=Mh(o,t),o=bh(o,t),s=Eh(s),o=Eh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+f+s,A=M+p+o,b=yh(r,r.VERTEX_SHADER,x),C=yh(r,r.FRAGMENT_SHADER,A);if(r.attachShader(v,b),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const w=r.getProgramInfoLog(v).trim(),T=r.getShaderInfoLog(b).trim(),Z=r.getShaderInfoLog(C).trim();let K=!0,B=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,b,C);else{const G=Sh(r,b,"vertex"),W=Sh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+G+`
`+W)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(T===""||Z==="")&&(B=!1);B&&(this.diagnostics={runnable:K,programLog:w,vertexShader:{log:T,prefix:f},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(b),r.deleteShader(C);let D;this.getUniforms=function(){return D===void 0&&(D=new Pa(r,v)),D};let Y;return this.getAttributes=function(){return Y===void 0&&(Y=A_(r,v)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=x_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=C,this}let B_=0;class H_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new z_(e),t.set(e,i)),i}}class z_{constructor(e){this.id=B_++,this.code=e,this.usedTimes=0}}function k_(n,e,t,i,r,a,s){const o=new Hc,l=new H_,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===1?"uv1":w===2?"uv2":w===3?"uv3":"uv"}function f(w,T,Z,K,B){const G=K.fog,W=B.geometry,ne=w.isMeshStandardMaterial?K.environment:null,$=(w.isMeshStandardMaterial?t:e).get(w.envMap||ne),Q=$&&$.mapping===ia?$.image.height:null,ie=_[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ye=re!==void 0?re.length:0;let pe=0;W.morphAttributes.position!==void 0&&(pe=1),W.morphAttributes.normal!==void 0&&(pe=2),W.morphAttributes.color!==void 0&&(pe=3);let k,ee,me,he;if(ie){const be=fi[ie];k=be.vertexShader,ee=be.fragmentShader}else k=w.vertexShader,ee=w.fragmentShader,l.update(w),me=l.getVertexShaderID(w),he=l.getFragmentShaderID(w);const U=n.getRenderTarget(),Ce=B.isInstancedMesh===!0,Te=!!w.map,oe=!!w.matcap,Ee=!!$,Je=!!w.aoMap,Se=!!w.lightMap,Oe=!!w.bumpMap,mt=!!w.normalMap,dt=!!w.displacementMap,xt=!!w.emissiveMap,ft=!!w.metalnessMap,qe=!!w.roughnessMap,st=w.clearcoat>0,Ut=w.iridescence>0,E=w.sheen>0,y=w.transmission>0,V=st&&!!w.clearcoatMap,ae=st&&!!w.clearcoatNormalMap,se=st&&!!w.clearcoatRoughnessMap,ce=Ut&&!!w.iridescenceMap,P=Ut&&!!w.iridescenceThicknessMap,J=E&&!!w.sheenColorMap,z=E&&!!w.sheenRoughnessMap,ue=!!w.specularMap,ve=!!w.specularColorMap,xe=!!w.specularIntensityMap,fe=y&&!!w.transmissionMap,ge=y&&!!w.thicknessMap,Pe=!!w.gradientMap,tt=!!w.alphaMap,gt=w.alphaTest>0,L=!!w.extensions,j=!!W.attributes.uv1,te=!!W.attributes.uv2,de=!!W.attributes.uv3;return{isWebGL2:h,shaderID:ie,shaderName:w.type,vertexShader:k,fragmentShader:ee,defines:w.defines,customVertexShaderID:me,customFragmentShaderID:he,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:di,map:Te,matcap:oe,envMap:Ee,envMapMode:Ee&&$.mapping,envMapCubeUVHeight:Q,aoMap:Je,lightMap:Se,bumpMap:Oe,normalMap:mt,displacementMap:d&&dt,emissiveMap:xt,normalMapObjectSpace:mt&&w.normalMapType===qd,normalMapTangentSpace:mt&&w.normalMapType===Js,metalnessMap:ft,roughnessMap:qe,clearcoat:st,clearcoatMap:V,clearcoatNormalMap:ae,clearcoatRoughnessMap:se,iridescence:Ut,iridescenceMap:ce,iridescenceThicknessMap:P,sheen:E,sheenColorMap:J,sheenRoughnessMap:z,specularMap:ue,specularColorMap:ve,specularIntensityMap:xe,transmission:y,transmissionMap:fe,thicknessMap:ge,gradientMap:Pe,opaque:w.transparent===!1&&w.blending===Dr,alphaMap:tt,alphaTest:gt,combine:w.combine,mapUv:Te&&v(w.map.channel),aoMapUv:Je&&v(w.aoMap.channel),lightMapUv:Se&&v(w.lightMap.channel),bumpMapUv:Oe&&v(w.bumpMap.channel),normalMapUv:mt&&v(w.normalMap.channel),displacementMapUv:dt&&v(w.displacementMap.channel),emissiveMapUv:xt&&v(w.emissiveMap.channel),metalnessMapUv:ft&&v(w.metalnessMap.channel),roughnessMapUv:qe&&v(w.roughnessMap.channel),clearcoatMapUv:V&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:P&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:J&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:z&&v(w.sheenRoughnessMap.channel),specularMapUv:ue&&v(w.specularMap.channel),specularColorMapUv:ve&&v(w.specularColorMap.channel),specularIntensityMapUv:xe&&v(w.specularIntensityMap.channel),transmissionMapUv:fe&&v(w.transmissionMap.channel),thicknessMapUv:ge&&v(w.thicknessMap.channel),alphaMapUv:tt&&v(w.alphaMap.channel),vertexTangents:mt&&!!W.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:te,vertexUv3s:de,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Te||tt),fog:!!G,useFog:w.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:w.toneMapped?n.toneMapping:bi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ui,flipSided:w.side===Gt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:L&&w.extensions.derivatives===!0,extensionFragDepth:L&&w.extensions.fragDepth===!0,extensionDrawBuffers:L&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const Z in w.defines)T.push(Z),T.push(w.defines[Z]);return w.isRawShaderMaterial===!1&&(M(T,w),x(T,w),T.push(n.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function M(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function x(w,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),w.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),w.push(o.mask)}function A(w){const T=_[w.type];let Z;if(T){const K=fi[T];Z=Cp.clone(K.uniforms)}else Z=w.uniforms;return Z}function b(w,T){let Z;for(let K=0,B=c.length;K<B;K++){const G=c[K];if(G.cacheKey===T){Z=G,++Z.usedTimes;break}}return Z===void 0&&(Z=new F_(n,T,w,a),c.push(Z)),Z}function C(w){if(--w.usedTimes===0){const T=c.indexOf(w);c[T]=c[c.length-1],c.pop(),w.destroy()}}function D(w){l.remove(w)}function Y(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:A,acquireProgram:b,releaseProgram:C,releaseShaderCache:D,programs:c,dispose:Y}}function G_(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function i(a,s,o){n.get(a)[s]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function V_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ah(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rh(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(u,d,m,_,v,f){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:f},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=v,p.group=f),e++,p}function o(u,d,m,_,v,f){const p=s(u,d,m,_,v,f);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(u,d,m,_,v,f){const p=s(u,d,m,_,v,f);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||V_),i.length>1&&i.sort(d||Ah),r.length>1&&r.sort(d||Ah)}function h(){for(let u=e,d=n.length;u<d;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:h,sort:c}}function W_(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new Rh,n.set(i,[s])):r>=a.length?(s=new Rh,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function j_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ue};break;case"SpotLight":t={position:new I,direction:new I,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function X_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Y_=0;function q_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function K_(n,e){const t=new j_,i=X_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new I);const a=new I,s=new He,o=new He;function l(h,u){let d=0,m=0,_=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let v=0,f=0,p=0,M=0,x=0,A=0,b=0,C=0,D=0,Y=0;h.sort(q_);const w=u===!0?Math.PI:1;for(let Z=0,K=h.length;Z<K;Z++){const B=h[Z],G=B.color,W=B.intensity,ne=B.distance,$=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=G.r*W*w,m+=G.g*W*w,_+=G.b*W*w;else if(B.isLightProbe)for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(B.sh.coefficients[Q],W);else if(B.isDirectionalLight){const Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity*w),B.castShadow){const ie=B.shadow,re=i.get(B);re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,r.directionalShadow[v]=re,r.directionalShadowMap[v]=$,r.directionalShadowMatrix[v]=B.shadow.matrix,A++}r.directional[v]=Q,v++}else if(B.isSpotLight){const Q=t.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(G).multiplyScalar(W*w),Q.distance=ne,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,r.spot[p]=Q;const ie=B.shadow;if(B.map&&(r.spotLightMap[D]=B.map,D++,ie.updateMatrices(B),B.castShadow&&Y++),r.spotLightMatrix[p]=ie.matrix,B.castShadow){const re=i.get(B);re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,r.spotShadow[p]=re,r.spotShadowMap[p]=$,C++}p++}else if(B.isRectAreaLight){const Q=t.get(B);Q.color.copy(G).multiplyScalar(W),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),r.rectArea[M]=Q,M++}else if(B.isPointLight){const Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity*w),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){const ie=B.shadow,re=i.get(B);re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,re.shadowCameraNear=ie.camera.near,re.shadowCameraFar=ie.camera.far,r.pointShadow[f]=re,r.pointShadowMap[f]=$,r.pointShadowMatrix[f]=B.shadow.matrix,b++}r.point[f]=Q,f++}else if(B.isHemisphereLight){const Q=t.get(B);Q.skyColor.copy(B.color).multiplyScalar(W*w),Q.groundColor.copy(B.groundColor).multiplyScalar(W*w),r.hemi[x]=Q,x++}}M>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==v||T.pointLength!==f||T.spotLength!==p||T.rectAreaLength!==M||T.hemiLength!==x||T.numDirectionalShadows!==A||T.numPointShadows!==b||T.numSpotShadows!==C||T.numSpotMaps!==D)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=M,r.point.length=f,r.hemi.length=x,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+D-Y,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=Y,T.directionalLength=v,T.pointLength=f,T.spotLength=p,T.rectAreaLength=M,T.hemiLength=x,T.numDirectionalShadows=A,T.numPointShadows=b,T.numSpotShadows=C,T.numSpotMaps=D,r.version=Y_++)}function c(h,u){let d=0,m=0,_=0,v=0,f=0;const p=u.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){const A=h[M];if(A.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(p),d++}else if(A.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(p),_++}else if(A.isRectAreaLight){const b=r.rectArea[v];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(A.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),m++}else if(A.isHemisphereLight){const b=r.hemi[f];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:r}}function Ch(n,e){const t=new K_(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function s(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function J_(n,e){let t=new WeakMap;function i(a,s=0){const o=t.get(a);let l;return o===void 0?(l=new Ch(n,e),t.set(a,[l])):s>=o.length?(l=new Ch(n,e),o.push(l)):l=o[s],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Z_ extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q_ extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tv(n,e,t){let i=new yo;const r=new Ie,a=new Ie,s=new rt,o=new Z_({depthPacking:Yd}),l=new Q_,c={},h=t.maxTextureSize,u={[Mi]:Gt,[Gt]:Mi,[ui]:ui},d=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:$_,fragmentShader:ev}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new pi;_.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Wt(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let p=this.type;this.render=function(b,C,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const Y=n.getRenderTarget(),w=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(Hi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const K=p!==Si&&this.type===Si,B=p===Si&&this.type!==Si;for(let G=0,W=b.length;G<W;G++){const ne=b[G],$=ne.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const Q=$.getFrameExtents();if(r.multiply(Q),a.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/Q.x),r.x=a.x*Q.x,$.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/Q.y),r.y=a.y*Q.y,$.mapSize.y=a.y)),$.map===null||K===!0||B===!0){const re=this.type!==Si?{minFilter:At,magFilter:At}:{};$.map!==null&&$.map.dispose(),$.map=new cr(r.x,r.y,re),$.map.texture.name=ne.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const ie=$.getViewportCount();for(let re=0;re<ie;re++){const ye=$.getViewport(re);s.set(a.x*ye.x,a.y*ye.y,a.x*ye.z,a.y*ye.w),Z.viewport(s),$.updateMatrices(ne,re),i=$.getFrustum(),A(C,D,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===Si&&M($,D),$.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(Y,w,T)};function M(b,C){const D=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new cr(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,D,d,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,D,m,v,null)}function x(b,C,D,Y){let w=null;const T=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)w=T;else if(w=D.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Z=w.uuid,K=C.uuid;let B=c[Z];B===void 0&&(B={},c[Z]=B);let G=B[K];G===void 0&&(G=w.clone(),B[K]=G),w=G}if(w.visible=C.visible,w.wireframe=C.wireframe,Y===Si?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:u[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Z=n.properties.get(w);Z.light=D}return w}function A(b,C,D,Y,w){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===Si)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const Z=e.update(b),K=b.material;if(Array.isArray(K)){const B=Z.groups;for(let G=0,W=B.length;G<W;G++){const ne=B[G],$=K[ne.materialIndex];if($&&$.visible){const Q=x(b,$,Y,w);n.renderBufferDirect(D,null,Z,Q,b,ne)}}}else if(K.visible){const B=x(b,K,Y,w);n.renderBufferDirect(D,null,Z,B,b,null)}}const T=b.children;for(let Z=0,K=T.length;Z<K;Z++)A(T[Z],C,D,Y,w)}}function iv(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const j=new rt;let te=null;const de=new rt(0,0,0,0);return{setMask:function(be){te!==be&&!L&&(n.colorMask(be,be,be,be),te=be)},setLocked:function(be){L=be},setClear:function(be,ot,nt,Dt,er){er===!0&&(be*=Dt,ot*=Dt,nt*=Dt),j.set(be,ot,nt,Dt),de.equals(j)===!1&&(n.clearColor(be,ot,nt,Dt),de.copy(j))},reset:function(){L=!1,te=null,de.set(-1,0,0,0)}}}function a(){let L=!1,j=null,te=null,de=null;return{setTest:function(be){be?U(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(be){j!==be&&!L&&(n.depthMask(be),j=be)},setFunc:function(be){if(te!==be){switch(be){case dd:n.depthFunc(n.NEVER);break;case pd:n.depthFunc(n.ALWAYS);break;case md:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case fd:n.depthFunc(n.EQUAL);break;case gd:n.depthFunc(n.GEQUAL);break;case _d:n.depthFunc(n.GREATER);break;case vd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=be}},setLocked:function(be){L=be},setClear:function(be){de!==be&&(n.clearDepth(be),de=be)},reset:function(){L=!1,j=null,te=null,de=null}}}function s(){let L=!1,j=null,te=null,de=null,be=null,ot=null,nt=null,Dt=null,er=null;return{setTest:function(_t){L||(_t?U(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(_t){j!==_t&&!L&&(n.stencilMask(_t),j=_t)},setFunc:function(_t,ei,xi){(te!==_t||de!==ei||be!==xi)&&(n.stencilFunc(_t,ei,xi),te=_t,de=ei,be=xi)},setOp:function(_t,ei,xi){(ot!==_t||nt!==ei||Dt!==xi)&&(n.stencilOp(_t,ei,xi),ot=_t,nt=ei,Dt=xi)},setLocked:function(_t){L=_t},setClear:function(_t){er!==_t&&(n.clearStencil(_t),er=_t)},reset:function(){L=!1,j=null,te=null,de=null,be=null,ot=null,nt=null,Dt=null,er=null}}}const o=new r,l=new a,c=new s,h=new WeakMap,u=new WeakMap;let d={},m={},_=new WeakMap,v=[],f=null,p=!1,M=null,x=null,A=null,b=null,C=null,D=null,Y=null,w=!1,T=null,Z=null,K=null,B=null,G=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,$=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ne=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ne=$>=2);let ie=null,re={};const ye=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),k=new rt().fromArray(ye),ee=new rt().fromArray(pe);function me(L,j,te,de){const be=new Uint8Array(4),ot=n.createTexture();n.bindTexture(L,ot),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<te;nt++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(j,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(j+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return ot}const he={};he[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(he[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),U(n.DEPTH_TEST),l.setFunc(Fs),dt(!1),xt(Vl),U(n.CULL_FACE),Oe(Hi);function U(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Ce(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Te(L,j){return m[L]!==j?(n.bindFramebuffer(L,j),m[L]=j,i&&(L===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=j),L===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=j)),!0):!1}function oe(L,j){let te=v,de=!1;if(L)if(te=_.get(j),te===void 0&&(te=[],_.set(j,te)),L.isWebGLMultipleRenderTargets){const be=L.texture;if(te.length!==be.length||te[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,nt=be.length;ot<nt;ot++)te[ot]=n.COLOR_ATTACHMENT0+ot;te.length=be.length,de=!0}}else te[0]!==n.COLOR_ATTACHMENT0&&(te[0]=n.COLOR_ATTACHMENT0,de=!0);else te[0]!==n.BACK&&(te[0]=n.BACK,de=!0);de&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Ee(L){return f!==L?(n.useProgram(L),f=L,!0):!1}const Je={[Nr]:n.FUNC_ADD,[td]:n.FUNC_SUBTRACT,[id]:n.FUNC_REVERSE_SUBTRACT};if(i)Je[ql]=n.MIN,Je[Kl]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Je[ql]=L.MIN_EXT,Je[Kl]=L.MAX_EXT)}const Se={[rd]:n.ZERO,[nd]:n.ONE,[ad]:n.SRC_COLOR,[Jl]:n.SRC_ALPHA,[ud]:n.SRC_ALPHA_SATURATE,[cd]:n.DST_COLOR,[od]:n.DST_ALPHA,[sd]:n.ONE_MINUS_SRC_COLOR,[Zl]:n.ONE_MINUS_SRC_ALPHA,[hd]:n.ONE_MINUS_DST_COLOR,[ld]:n.ONE_MINUS_DST_ALPHA};function Oe(L,j,te,de,be,ot,nt,Dt){if(L===Hi){p===!0&&(Ce(n.BLEND),p=!1);return}if(p===!1&&(U(n.BLEND),p=!0),L!==ed){if(L!==M||Dt!==w){if((x!==Nr||C!==Nr)&&(n.blendEquation(n.FUNC_ADD),x=Nr,C=Nr),Dt)switch(L){case Dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFunc(n.ONE,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,b=null,D=null,Y=null,M=L,w=Dt}return}be=be||j,ot=ot||te,nt=nt||de,(j!==x||be!==C)&&(n.blendEquationSeparate(Je[j],Je[be]),x=j,C=be),(te!==A||de!==b||ot!==D||nt!==Y)&&(n.blendFuncSeparate(Se[te],Se[de],Se[ot],Se[nt]),A=te,b=de,D=ot,Y=nt),M=L,w=!1}function mt(L,j){L.side===ui?Ce(n.CULL_FACE):U(n.CULL_FACE);let te=L.side===Gt;j&&(te=!te),dt(te),L.blending===Dr&&L.transparent===!1?Oe(Hi):Oe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const de=L.stencilWrite;c.setTest(de),de&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),qe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function dt(L){T!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),T=L)}function xt(L){L!==Zu?(U(n.CULL_FACE),L!==Z&&(L===Vl?n.cullFace(n.BACK):L===Qu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),Z=L}function ft(L){L!==K&&(ne&&n.lineWidth(L),K=L)}function qe(L,j,te){L?(U(n.POLYGON_OFFSET_FILL),(B!==j||G!==te)&&(n.polygonOffset(j,te),B=j,G=te)):Ce(n.POLYGON_OFFSET_FILL)}function st(L){L?U(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function Ut(L){L===void 0&&(L=n.TEXTURE0+W-1),ie!==L&&(n.activeTexture(L),ie=L)}function E(L,j,te){te===void 0&&(ie===null?te=n.TEXTURE0+W-1:te=ie);let de=re[te];de===void 0&&(de={type:void 0,texture:void 0},re[te]=de),(de.type!==L||de.texture!==j)&&(ie!==te&&(n.activeTexture(te),ie=te),n.bindTexture(L,j||he[L]),de.type=L,de.texture=j)}function y(){const L=re[ie];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(L){k.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),k.copy(L))}function ge(L){ee.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ee.copy(L))}function Pe(L,j){let te=u.get(j);te===void 0&&(te=new WeakMap,u.set(j,te));let de=te.get(L);de===void 0&&(de=n.getUniformBlockIndex(j,L.name),te.set(L,de))}function tt(L,j){const te=u.get(j).get(L);h.get(j)!==te&&(n.uniformBlockBinding(j,te,L.__bindingPointIndex),h.set(j,te))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ie=null,re={},m={},_=new WeakMap,v=[],f=null,p=!1,M=null,x=null,A=null,b=null,C=null,D=null,Y=null,w=!1,T=null,Z=null,K=null,B=null,G=null,k.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:U,disable:Ce,bindFramebuffer:Te,drawBuffers:oe,useProgram:Ee,setBlending:Oe,setMaterial:mt,setFlipSided:dt,setCullFace:xt,setLineWidth:ft,setPolygonOffset:qe,setScissorTest:st,activeTexture:Ut,bindTexture:E,unbindTexture:y,compressedTexImage2D:V,compressedTexImage3D:ae,texImage2D:ve,texImage3D:xe,updateUBOMapping:Pe,uniformBlockBinding:tt,texStorage2D:z,texStorage3D:ue,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:P,compressedTexSubImage3D:J,scissor:fe,viewport:ge,reset:gt}}function rv(n,e,t,i,r,a,s){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,y){return p?new OffscreenCanvas(E,y):En("canvas")}function x(E,y,V,ae){let se=1;if((E.width>ae||E.height>ae)&&(se=ae/Math.max(E.width,E.height)),se<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ce=y?Pc:Math.floor,P=ce(se*E.width),J=ce(se*E.height);v===void 0&&(v=M(P,J));const z=V?M(P,J):v;return z.width=P,z.height=J,z.getContext("2d").drawImage(E,0,0,P,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+P+"x"+J+")."),z}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function A(E){return to(E.width)&&to(E.height)}function b(E){return o?!1:E.wrapS!==Kt||E.wrapT!==Kt||E.minFilter!==At&&E.minFilter!==Vt}function C(E,y){return E.generateMipmaps&&y&&E.minFilter!==At&&E.minFilter!==Vt}function D(E){n.generateMipmap(E)}function Y(E,y,V,ae,se=!1){if(o===!1)return y;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce=y;return y===n.RED&&(V===n.FLOAT&&(ce=n.R32F),V===n.HALF_FLOAT&&(ce=n.R16F),V===n.UNSIGNED_BYTE&&(ce=n.R8)),y===n.RG&&(V===n.FLOAT&&(ce=n.RG32F),V===n.HALF_FLOAT&&(ce=n.RG16F),V===n.UNSIGNED_BYTE&&(ce=n.RG8)),y===n.RGBA&&(V===n.FLOAT&&(ce=n.RGBA32F),V===n.HALF_FLOAT&&(ce=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ce=ae===Re&&se===!1?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)),(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(E,y,V){return C(E,V)===!0||E.isFramebufferTexture&&E.minFilter!==At&&E.minFilter!==Vt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function T(E){return E===At||E===ks||E===na?n.NEAREST:n.LINEAR}function Z(E){const y=E.target;y.removeEventListener("dispose",Z),B(y),y.isVideoTexture&&_.delete(y)}function K(E){const y=E.target;y.removeEventListener("dispose",K),W(y)}function B(E){const y=i.get(E);if(y.__webglInit===void 0)return;const V=E.source,ae=f.get(V);if(ae){const se=ae[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&G(E),Object.keys(ae).length===0&&f.delete(V)}i.remove(E)}function G(E){const y=i.get(E);n.deleteTexture(y.__webglTexture);const V=E.source,ae=f.get(V);delete ae[y.__cacheKey],s.memory.textures--}function W(E){const y=E.texture,V=i.get(E),ae=i.get(y);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),s.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)n.deleteFramebuffer(V.__webglFramebuffer[se]),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[se]);else{if(n.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let se=0;se<V.__webglColorRenderbuffer.length;se++)V.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[se]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let se=0,ce=y.length;se<ce;se++){const P=i.get(y[se]);P.__webglTexture&&(n.deleteTexture(P.__webglTexture),s.memory.textures--),i.remove(y[se])}i.remove(y),i.remove(E)}let ne=0;function $(){ne=0}function Q(){const E=ne;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),ne+=1,E}function ie(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function re(E,y){const V=i.get(E);if(E.isVideoTexture&&st(E),E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){const ae=E.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(V,E,y);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+y)}function ye(E,y){const V=i.get(E);if(E.version>0&&V.__version!==E.version){Ce(V,E,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+y)}function pe(E,y){const V=i.get(E);if(E.version>0&&V.__version!==E.version){Ce(V,E,y);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+y)}function k(E,y){const V=i.get(E);if(E.version>0&&V.__version!==E.version){Te(V,E,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+y)}const ee={[ir]:n.REPEAT,[Kt]:n.CLAMP_TO_EDGE,[ra]:n.MIRRORED_REPEAT},me={[At]:n.NEAREST,[ks]:n.NEAREST_MIPMAP_NEAREST,[na]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[$l]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR};function he(E,y,V){if(V?(n.texParameteri(E,n.TEXTURE_WRAP_S,ee[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ee[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ee[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,me[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,me[y.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==Kt||y.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,T(y.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==At&&y.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===At||y.minFilter!==na&&y.minFilter!==rr||y.type===zi&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===yn&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(E,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function U(E,y){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",Z));const ae=y.source;let se=f.get(ae);se===void 0&&(se={},f.set(ae,se));const ce=ie(y);if(ce!==E.__cacheKey){se[ce]===void 0&&(se[ce]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,V=!0),se[ce].usedTimes++;const P=se[E.__cacheKey];P!==void 0&&(se[E.__cacheKey].usedTimes--,P.usedTimes===0&&G(y)),E.__cacheKey=ce,E.__webglTexture=se[ce].texture}return V}function Ce(E,y,V){let ae=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=n.TEXTURE_3D);const se=U(E,y),ce=y.source;t.bindTexture(ae,E.__webglTexture,n.TEXTURE0+V);const P=i.get(ce);if(ce.version!==P.__version||se===!0){t.activeTexture(n.TEXTURE0+V),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const J=b(y)&&A(y.image)===!1;let z=x(y.image,J,!1,h);z=Ut(y,z);const ue=A(z)||o,ve=a.convert(y.format,y.colorSpace);let xe=a.convert(y.type),fe=Y(y.internalFormat,ve,xe,y.colorSpace);he(ae,y,ue);let ge;const Pe=y.mipmaps,tt=o&&y.isVideoTexture!==!0,gt=P.__version===void 0||se===!0,L=w(y,z,ue);if(y.isDepthTexture)fe=n.DEPTH_COMPONENT,o?y.type===zi?fe=n.DEPTH_COMPONENT32F:y.type===ar?fe=n.DEPTH_COMPONENT24:y.type===Br?fe=n.DEPTH24_STENCIL8:fe=n.DEPTH_COMPONENT16:y.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===sr&&fe===n.DEPTH_COMPONENT&&y.type!==ec&&y.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ar,xe=a.convert(y.type)),y.format===Hr&&fe===n.DEPTH_COMPONENT&&(fe=n.DEPTH_STENCIL,y.type!==Br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Br,xe=a.convert(y.type))),gt&&(tt?t.texStorage2D(n.TEXTURE_2D,1,fe,z.width,z.height):t.texImage2D(n.TEXTURE_2D,0,fe,z.width,z.height,0,ve,xe,null));else if(y.isDataTexture)if(Pe.length>0&&ue){tt&&gt&&t.texStorage2D(n.TEXTURE_2D,L,fe,Pe[0].width,Pe[0].height);for(let j=0,te=Pe.length;j<te;j++)ge=Pe[j],tt?t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge.width,ge.height,ve,xe,ge.data):t.texImage2D(n.TEXTURE_2D,j,fe,ge.width,ge.height,0,ve,xe,ge.data);y.generateMipmaps=!1}else tt?(gt&&t.texStorage2D(n.TEXTURE_2D,L,fe,z.width,z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,z.width,z.height,ve,xe,z.data)):t.texImage2D(n.TEXTURE_2D,0,fe,z.width,z.height,0,ve,xe,z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){tt&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,L,fe,Pe[0].width,Pe[0].height,z.depth);for(let j=0,te=Pe.length;j<te;j++)ge=Pe[j],y.format!==Jt?ve!==null?tt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,z.depth,ve,ge.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,fe,ge.width,ge.height,z.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,z.depth,ve,xe,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,fe,ge.width,ge.height,z.depth,0,ve,xe,ge.data)}else{tt&&gt&&t.texStorage2D(n.TEXTURE_2D,L,fe,Pe[0].width,Pe[0].height);for(let j=0,te=Pe.length;j<te;j++)ge=Pe[j],y.format!==Jt?ve!==null?tt?t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,j,fe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge.width,ge.height,ve,xe,ge.data):t.texImage2D(n.TEXTURE_2D,j,fe,ge.width,ge.height,0,ve,xe,ge.data)}else if(y.isDataArrayTexture)tt?(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,L,fe,z.width,z.height,z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,ve,xe,z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,z.width,z.height,z.depth,0,ve,xe,z.data);else if(y.isData3DTexture)tt?(gt&&t.texStorage3D(n.TEXTURE_3D,L,fe,z.width,z.height,z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,ve,xe,z.data)):t.texImage3D(n.TEXTURE_3D,0,fe,z.width,z.height,z.depth,0,ve,xe,z.data);else if(y.isFramebufferTexture){if(gt)if(tt)t.texStorage2D(n.TEXTURE_2D,L,fe,z.width,z.height);else{let j=z.width,te=z.height;for(let de=0;de<L;de++)t.texImage2D(n.TEXTURE_2D,de,fe,j,te,0,ve,xe,null),j>>=1,te>>=1}}else if(Pe.length>0&&ue){tt&&gt&&t.texStorage2D(n.TEXTURE_2D,L,fe,Pe[0].width,Pe[0].height);for(let j=0,te=Pe.length;j<te;j++)ge=Pe[j],tt?t.texSubImage2D(n.TEXTURE_2D,j,0,0,ve,xe,ge):t.texImage2D(n.TEXTURE_2D,j,fe,ve,xe,ge);y.generateMipmaps=!1}else tt?(gt&&t.texStorage2D(n.TEXTURE_2D,L,fe,z.width,z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,xe,z)):t.texImage2D(n.TEXTURE_2D,0,fe,ve,xe,z);C(y,ue)&&D(ae),P.__version=ce.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Te(E,y,V){if(y.image.length!==6)return;const ae=U(E,y),se=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+V);const ce=i.get(se);if(se.version!==ce.__version||ae===!0){t.activeTexture(n.TEXTURE0+V),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const P=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,z=[];for(let j=0;j<6;j++)!P&&!J?z[j]=x(y.image[j],!1,!0,c):z[j]=J?y.image[j].image:y.image[j],z[j]=Ut(y,z[j]);const ue=z[0],ve=A(ue)||o,xe=a.convert(y.format,y.colorSpace),fe=a.convert(y.type),ge=Y(y.internalFormat,xe,fe,y.colorSpace),Pe=o&&y.isVideoTexture!==!0,tt=ce.__version===void 0||ae===!0;let gt=w(y,ue,ve);he(n.TEXTURE_CUBE_MAP,y,ve);let L;if(P){Pe&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,ge,ue.width,ue.height);for(let j=0;j<6;j++){L=z[j].mipmaps;for(let te=0;te<L.length;te++){const de=L[te];y.format!==Jt?xe!==null?Pe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,0,0,de.width,de.height,xe,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,0,0,de.width,de.height,xe,fe,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,ge,de.width,de.height,0,xe,fe,de.data)}}}else{L=y.mipmaps,Pe&&tt&&(L.length>0&&gt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,ge,z[0].width,z[0].height));for(let j=0;j<6;j++)if(J){Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,z[j].width,z[j].height,xe,fe,z[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ge,z[j].width,z[j].height,0,xe,fe,z[j].data);for(let te=0;te<L.length;te++){const de=L[te].image[j].image;Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,0,0,de.width,de.height,xe,fe,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,ge,de.width,de.height,0,xe,fe,de.data)}}else{Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xe,fe,z[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ge,xe,fe,z[j]);for(let te=0;te<L.length;te++){const de=L[te];Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,0,0,xe,fe,de.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,ge,xe,fe,de.image[j])}}}C(y,ve)&&D(n.TEXTURE_CUBE_MAP),ce.__version=se.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function oe(E,y,V,ae,se){const ce=a.convert(V.format,V.colorSpace),P=a.convert(V.type),J=Y(V.internalFormat,ce,P,V.colorSpace);i.get(y).__hasExternalTextures||(se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,0,J,y.width,y.height,y.depth,0,ce,P,null):t.texImage2D(se,0,J,y.width,y.height,0,ce,P,null)),t.bindFramebuffer(n.FRAMEBUFFER,E),qe(y)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,se,i.get(V).__webglTexture,0,ft(y)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,se,i.get(V).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(E,y,V){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let ae=n.DEPTH_COMPONENT16;if(V||qe(y)){const se=y.depthTexture;se&&se.isDepthTexture&&(se.type===zi?ae=n.DEPTH_COMPONENT32F:se.type===ar&&(ae=n.DEPTH_COMPONENT24));const ce=ft(y);qe(y)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,ae,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,ae,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){const ae=ft(y);V&&qe(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,y.width,y.height):qe(y)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const ae=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let se=0;se<ae.length;se++){const ce=ae[se],P=a.convert(ce.format,ce.colorSpace),J=a.convert(ce.type),z=Y(ce.internalFormat,P,J,ce.colorSpace),ue=ft(y);V&&qe(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,z,y.width,y.height):qe(y)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,z,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,z,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Je(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),re(y.depthTexture,0);const V=i.get(y.depthTexture).__webglTexture,ae=ft(y);if(y.depthTexture.format===sr)qe(y)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(y.depthTexture.format===Hr)qe(y)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Se(E){const y=i.get(E),V=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Je(y.__webglFramebuffer,E)}else if(V){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]=n.createRenderbuffer(),Ee(y.__webglDepthbuffer[ae],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Ee(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(E,y,V){const ae=i.get(E);y!==void 0&&oe(ae.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),V!==void 0&&Se(E)}function mt(E){const y=E.texture,V=i.get(E),ae=i.get(y);E.addEventListener("dispose",K),E.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=y.version,s.memory.textures++);const se=E.isWebGLCubeRenderTarget===!0,ce=E.isWebGLMultipleRenderTargets===!0,P=A(E)||o;if(se){V.__webglFramebuffer=[];for(let J=0;J<6;J++)V.__webglFramebuffer[J]=n.createFramebuffer()}else{if(V.__webglFramebuffer=n.createFramebuffer(),ce)if(r.drawBuffers){const J=E.texture;for(let z=0,ue=J.length;z<ue;z++){const ve=i.get(J[z]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&qe(E)===!1){const J=ce?y:[y];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let z=0;z<J.length;z++){const ue=J[z];V.__webglColorRenderbuffer[z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[z]);const ve=a.convert(ue.format,ue.colorSpace),xe=a.convert(ue.type),fe=Y(ue.internalFormat,ve,xe,ue.colorSpace,E.isXRRenderTarget===!0),ge=ft(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,fe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+z,n.RENDERBUFFER,V.__webglColorRenderbuffer[z])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(V.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),he(n.TEXTURE_CUBE_MAP,y,P);for(let J=0;J<6;J++)oe(V.__webglFramebuffer[J],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J);C(y,P)&&D(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const J=E.texture;for(let z=0,ue=J.length;z<ue;z++){const ve=J[z],xe=i.get(ve);t.bindTexture(n.TEXTURE_2D,xe.__webglTexture),he(n.TEXTURE_2D,ve,P),oe(V.__webglFramebuffer,E,ve,n.COLOR_ATTACHMENT0+z,n.TEXTURE_2D),C(ve,P)&&D(n.TEXTURE_2D)}t.unbindTexture()}else{let J=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?J=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(J,ae.__webglTexture),he(J,y,P),oe(V.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,J),C(y,P)&&D(J),t.unbindTexture()}E.depthBuffer&&Se(E)}function dt(E){const y=A(E)||o,V=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ae=0,se=V.length;ae<se;ae++){const ce=V[ae];if(C(ce,y)){const P=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,J=i.get(ce).__webglTexture;t.bindTexture(P,J),D(P),t.unbindTexture()}}}function xt(E){if(o&&E.samples>0&&qe(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],V=E.width,ae=E.height;let se=n.COLOR_BUFFER_BIT;const ce=[],P=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=i.get(E),z=E.isWebGLMultipleRenderTargets===!0;if(z)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){ce.push(n.COLOR_ATTACHMENT0+ue),E.depthBuffer&&ce.push(P);const ve=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(ve===!1&&(E.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),z&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,J.__webglColorRenderbuffer[ue]),ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[P]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])),z){const xe=i.get(y[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,V,ae,0,0,V,ae,se,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),z)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,J.__webglColorRenderbuffer[ue]);const ve=i.get(y[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}}function ft(E){return Math.min(u,E.samples)}function qe(E){const y=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function st(E){const y=s.render.frame;_.get(E)!==y&&(_.set(E,y),E.update())}function Ut(E,y){const V=E.colorSpace,ae=E.format,se=E.type;return E.isCompressedTexture===!0||E.format===$s||V!==di&&V!==lr&&(V===Re?o===!1?e.has("EXT_sRGB")===!0&&ae===Jt?(E.format=$s,E.minFilter=Vt,E.generateMipmaps=!1):y=Uc.sRGBToLinear(y):(ae!==Jt||se!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}this.allocateTextureUnit=Q,this.resetTextureUnits=$,this.setTexture2D=re,this.setTexture2DArray=ye,this.setTexture3D=pe,this.setTextureCube=k,this.rebindTextures=Oe,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=qe}function nv(n,e,t){const i=t.isWebGL2;function r(a,s=lr){let o;if(a===nr)return n.UNSIGNED_BYTE;if(a===Cd)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Pd)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Td)return n.BYTE;if(a===Ad)return n.SHORT;if(a===ec)return n.UNSIGNED_SHORT;if(a===Rd)return n.INT;if(a===ar)return n.UNSIGNED_INT;if(a===zi)return n.FLOAT;if(a===yn)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Ld)return n.ALPHA;if(a===Jt)return n.RGBA;if(a===Id)return n.LUMINANCE;if(a===Ud)return n.LUMINANCE_ALPHA;if(a===sr)return n.DEPTH_COMPONENT;if(a===Hr)return n.DEPTH_STENCIL;if(a===$s)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Dd)return n.RED;if(a===Nd)return n.RED_INTEGER;if(a===Od)return n.RG;if(a===Fd)return n.RG_INTEGER;if(a===Bd)return n.RGBA_INTEGER;if(a===Gs||a===Vs||a===Ws||a===js)if(s===Re)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Gs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Vs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ws)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Gs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Vs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ws)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===js)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===tc||a===ic||a===rc||a===nc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===tc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ic)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===rc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===nc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Hd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ac||a===sc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===ac)return s===Re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===sc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===oc||a===lc||a===cc||a===hc||a===uc||a===dc||a===pc||a===mc||a===fc||a===gc||a===_c||a===vc||a===wc||a===xc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===oc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===lc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===cc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===hc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===uc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===dc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===pc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===mc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===fc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===gc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_c)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===vc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===wc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===xc)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Xs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Xs)return s===Re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===zd||a===yc||a===Sc||a===Mc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Xs)return o.COMPRESSED_RED_RGTC1_EXT;if(a===yc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Sc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Mc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Br?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class av extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vr extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sv={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ov extends Pt{constructor(e,t,i,r,a,s,o,l,c,h){if(h=h!==void 0?h:sr,h!==sr&&h!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===sr&&(i=ar),i===void 0&&h===Hr&&(i=Br),super(null,r,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1}}class lv extends ki{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null;const v=t.getContextAttributes();let f=null,p=null;const M=[],x=[],A=new Set,b=new Map,C=new Bt;C.layers.enable(1),C.viewport=new rt;const D=new Bt;D.layers.enable(2),D.viewport=new rt;const Y=[C,D],w=new av;w.layers.enable(1),w.layers.enable(2);let T=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ee=M[k];return ee===void 0&&(ee=new Ro,M[k]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(k){let ee=M[k];return ee===void 0&&(ee=new Ro,M[k]=ee),ee.getGripSpace()},this.getHand=function(k){let ee=M[k];return ee===void 0&&(ee=new Ro,M[k]=ee),ee.getHandSpace()};function K(k){const ee=x.indexOf(k.inputSource);if(ee===-1)return;const me=M[ee];me!==void 0&&(me.update(k.inputSource,k.frame,c||s),me.dispatchEvent({type:k.type,data:k.inputSource}))}function B(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",G);for(let k=0;k<M.length;k++){const ee=x[k];ee!==null&&(x[k]=null,M[k].disconnect(ee))}T=null,Z=null,e.setRenderTarget(f),m=null,d=null,u=null,r=null,p=null,pe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",B),r.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),p=new cr(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ee=null,me=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=v.stencil?Hr:sr,me=v.stencil?Br:ar);const U={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:a};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(U),r.updateRenderState({layers:[d]}),p=new cr(d.textureWidth,d.textureHeight,{format:Jt,type:nr,depthTexture:new ov(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ce=e.properties.get(p);Ce.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(k){for(let ee=0;ee<k.removed.length;ee++){const me=k.removed[ee],he=x.indexOf(me);he>=0&&(x[he]=null,M[he].disconnect(me))}for(let ee=0;ee<k.added.length;ee++){const me=k.added[ee];let he=x.indexOf(me);if(he===-1){for(let Ce=0;Ce<M.length;Ce++)if(Ce>=x.length){x.push(me),he=Ce;break}else if(x[Ce]===null){x[Ce]=me,he=Ce;break}if(he===-1)break}const U=M[he];U&&U.connect(me)}}const W=new I,ne=new I;function $(k,ee,me){W.setFromMatrixPosition(ee.matrixWorld),ne.setFromMatrixPosition(me.matrixWorld);const he=W.distanceTo(ne),U=ee.projectionMatrix.elements,Ce=me.projectionMatrix.elements,Te=U[14]/(U[10]-1),oe=U[14]/(U[10]+1),Ee=(U[9]+1)/U[5],Je=(U[9]-1)/U[5],Se=(U[8]-1)/U[0],Oe=(Ce[8]+1)/Ce[0],mt=Te*Se,dt=Te*Oe,xt=he/(-Se+Oe),ft=xt*-Se;ee.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ft),k.translateZ(xt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const qe=Te+xt,st=oe+xt,Ut=mt-ft,E=dt+(he-ft),y=Ee*oe/st*qe,V=Je*oe/st*qe;k.projectionMatrix.makePerspective(Ut,E,y,V,qe,st),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Q(k,ee){ee===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ee.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;w.near=D.near=C.near=k.near,w.far=D.far=C.far=k.far,(T!==w.near||Z!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,Z=w.far);const ee=k.parent,me=w.cameras;Q(w,ee);for(let he=0;he<me.length;he++)Q(me[he],ee);me.length===2?$(w,C,D):w.projectionMatrix.copy(C.projectionMatrix),ie(k,w,ee)};function ie(k,ee,me){me===null?k.matrix.copy(ee.matrixWorld):(k.matrix.copy(me.matrixWorld),k.matrix.invert(),k.matrix.multiply(ee.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const he=k.children;for(let U=0,Ce=he.length;U<Ce;U++)he[U].updateMatrixWorld(!0);k.projectionMatrix.copy(ee.projectionMatrix),k.projectionMatrixInverse.copy(ee.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Vr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.getPlanes=function(){return A};let re=null;function ye(k,ee){if(h=ee.getViewerPose(c||s),_=ee,h!==null){const me=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let he=!1;me.length!==w.cameras.length&&(w.cameras.length=0,he=!0);for(let U=0;U<me.length;U++){const Ce=me[U];let Te=null;if(m!==null)Te=m.getViewport(Ce);else{const Ee=u.getViewSubImage(d,Ce);Te=Ee.viewport,U===0&&(e.setRenderTargetTextures(p,Ee.colorTexture,d.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(p))}let oe=Y[U];oe===void 0&&(oe=new Bt,oe.layers.enable(U),oe.viewport=new rt,Y[U]=oe),oe.matrix.fromArray(Ce.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ce.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Te.x,Te.y,Te.width,Te.height),U===0&&(w.matrix.copy(oe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),he===!0&&w.cameras.push(oe)}}for(let me=0;me<M.length;me++){const he=x[me],U=M[me];he!==null&&U!==void 0&&U.update(he,ee,c||s)}if(re&&re(k,ee),ee.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ee.detectedPlanes});let me=null;for(const he of A)ee.detectedPlanes.has(he)||(me===null&&(me=[]),me.push(he));if(me!==null)for(const he of me)A.delete(he),b.delete(he),i.dispatchEvent({type:"planeremoved",data:he});for(const he of ee.detectedPlanes)if(!A.has(he))A.add(he),b.set(he,ee.lastChangedTime),i.dispatchEvent({type:"planeadded",data:he});else{const U=b.get(he);he.lastChangedTime>U&&(b.set(he,he.lastChangedTime),i.dispatchEvent({type:"planechanged",data:he}))}}_=null}const pe=new rh;pe.setAnimationLoop(ye),this.setAnimationLoop=function(k){re=k},this.dispose=function(){}}}function cv(n,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,eh(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,M,x,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(f,p):p.isMeshToonMaterial?(a(f,p),u(f,p)):p.isMeshPhongMaterial?(a(f,p),h(f,p)):p.isMeshStandardMaterial?(a(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,A)):p.isMeshMatcapMaterial?(a(f,p),_(f,p)):p.isMeshDepthMaterial?a(f,p):p.isMeshDistanceMaterial?(a(f,p),v(f,p)):p.isMeshNormalMaterial?a(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,M,x):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Gt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Gt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(f.envMap.value=M,f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const x=n.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=x*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const M=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hv(n,e,t,i){let r={},a={},s=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const A=x.program;i.uniformBlockBinding(M,A)}function c(M,x){let A=r[M.id];A===void 0&&(_(M),A=h(M),r[M.id]=A,M.addEventListener("dispose",f));const b=x.program;i.updateUBOMapping(M,b);const C=e.render.frame;a[M.id]!==C&&(d(M),a[M.id]=C)}function h(M){const x=u();M.__bindingPointIndex=x;const A=n.createBuffer(),b=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,b,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,A),A}function u(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=r[M.id],A=M.uniforms,b=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,D=A.length;C<D;C++){const Y=A[C];if(m(Y,C,b)===!0){const w=Y.__offset,T=Array.isArray(Y.value)?Y.value:[Y.value];let Z=0;for(let K=0;K<T.length;K++){const B=T[K],G=v(B);typeof B=="number"?(Y.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,w+Z,Y.__data)):B.isMatrix3?(Y.__data[0]=B.elements[0],Y.__data[1]=B.elements[1],Y.__data[2]=B.elements[2],Y.__data[3]=B.elements[0],Y.__data[4]=B.elements[3],Y.__data[5]=B.elements[4],Y.__data[6]=B.elements[5],Y.__data[7]=B.elements[0],Y.__data[8]=B.elements[6],Y.__data[9]=B.elements[7],Y.__data[10]=B.elements[8],Y.__data[11]=B.elements[0]):(B.toArray(Y.__data,Z),Z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,w,Y.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,x,A){const b=M.value;if(A[x]===void 0){if(typeof b=="number")A[x]=b;else{const C=Array.isArray(b)?b:[b],D=[];for(let Y=0;Y<C.length;Y++)D.push(C[Y].clone());A[x]=D}return!0}else if(typeof b=="number"){if(A[x]!==b)return A[x]=b,!0}else{const C=Array.isArray(A[x])?A[x]:[A[x]],D=Array.isArray(b)?b:[b];for(let Y=0;Y<C.length;Y++){const w=C[Y];if(w.equals(D[Y])===!1)return w.copy(D[Y]),!0}}return!1}function _(M){const x=M.uniforms;let A=0;const b=16;let C=0;for(let D=0,Y=x.length;D<Y;D++){const w=x[D],T={boundary:0,storage:0},Z=Array.isArray(w.value)?w.value:[w.value];for(let K=0,B=Z.length;K<B;K++){const G=Z[K],W=v(G);T.boundary+=W.boundary,T.storage+=W.storage}if(w.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=A,D>0){C=A%b;const K=b-C;C!==0&&K-T.boundary<0&&(A+=b-C,w.__offset=A)}A+=T.storage}return C=A%b,C>0&&(A+=b-C),M.__size=A,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function f(M){const x=M.target;x.removeEventListener("dispose",f);const A=s.indexOf(x.__bindingPointIndex);s.splice(A,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);s=[],r={},a={}}return{bind:l,update:c,dispose:p}}function uv(){const n=En("canvas");return n.style.display="block",n}class Ph{constructor(e={}){const{canvas:t=uv(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=s;let m=null,_=null;const v=[],f=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Re,this.useLegacyLights=!0,this.toneMapping=bi,this.toneMappingExposure=1;const p=this;let M=!1,x=0,A=0,b=null,C=-1,D=null;const Y=new rt,w=new rt;let T=null,Z=t.width,K=t.height,B=1,G=null,W=null;const ne=new rt(0,0,Z,K),$=new rt(0,0,Z,K);let Q=!1;const ie=new yo;let re=!1,ye=!1,pe=null;const k=new He,ee=new I,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return b===null?B:1}let U=i;function Ce(S,H){for(let X=0;X<S.length;X++){const F=S[X],q=t.getContext(F,H);if(q!==null)return q}return null}try{const S={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Os}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",tt,!1),U===null){const H=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&H.shift(),U=Ce(H,S),U===null)throw Ce(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Te,oe,Ee,Je,Se,Oe,mt,dt,xt,ft,qe,st,Ut,E,y,V,ae,se,ce,P,J,z,ue,ve;function xe(){Te=new Sg(U),oe=new gg(U,Te,e),Te.init(oe),z=new nv(U,Te,oe),Ee=new iv(U,Te,oe),Je=new Eg(U),Se=new G_,Oe=new rv(U,Te,Ee,Se,oe,z,Je),mt=new vg(p),dt=new yg(p),xt=new Op(U,oe),ue=new mg(U,Te,xt,oe),ft=new Mg(U,xt,Je,ue),qe=new Cg(U,ft,xt,Je),ce=new Rg(U,oe,Oe),V=new _g(Se),st=new k_(p,mt,dt,Te,oe,ue,V),Ut=new cv(p,Se),E=new W_,y=new J_(Te,oe),se=new pg(p,mt,dt,Ee,qe,d,l),ae=new tv(p,qe,oe),ve=new hv(U,Je,oe,Ee),P=new fg(U,Te,Je,oe),J=new bg(U,Te,Je,oe),Je.programs=st.programs,p.capabilities=oe,p.extensions=Te,p.properties=Se,p.renderLists=E,p.shadowMap=ae,p.state=Ee,p.info=Je}xe();const fe=new lv(p,U);this.xr=fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(Z,K,!1))},this.getSize=function(S){return S.set(Z,K)},this.setSize=function(S,H,X=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,K=H,t.width=Math.floor(S*B),t.height=Math.floor(H*B),X===!0&&(t.style.width=S+"px",t.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(Z*B,K*B).floor()},this.setDrawingBufferSize=function(S,H,X){Z=S,K=H,B=X,t.width=Math.floor(S*X),t.height=Math.floor(H*X),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(Y)},this.getViewport=function(S){return S.copy(ne)},this.setViewport=function(S,H,X,F){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,H,X,F),Ee.viewport(Y.copy(ne).multiplyScalar(B).floor())},this.getScissor=function(S){return S.copy($)},this.setScissor=function(S,H,X,F){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,H,X,F),Ee.scissor(w.copy($).multiplyScalar(B).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(S){Ee.setScissorTest(Q=S)},this.setOpaqueSort=function(S){G=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(S=!0,H=!0,X=!0){let F=0;S&&(F|=U.COLOR_BUFFER_BIT),H&&(F|=U.DEPTH_BUFFER_BIT),X&&(F|=U.STENCIL_BUFFER_BIT),U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),E.dispose(),y.dispose(),Se.dispose(),mt.dispose(),dt.dispose(),qe.dispose(),ue.dispose(),ve.dispose(),st.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",be),fe.removeEventListener("sessionend",ot),pe&&(pe.dispose(),pe=null),nt.stop()};function ge(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const S=Je.autoReset,H=ae.enabled,X=ae.autoUpdate,F=ae.needsUpdate,q=ae.type;xe(),Je.autoReset=S,ae.enabled=H,ae.autoUpdate=X,ae.needsUpdate=F,ae.type=q}function tt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function gt(S){const H=S.target;H.removeEventListener("dispose",gt),L(H)}function L(S){j(S),Se.remove(S)}function j(S){const H=Se.get(S).programs;H!==void 0&&(H.forEach(function(X){st.releaseProgram(X)}),S.isShaderMaterial&&st.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,X,F,q,_e){H===null&&(H=me);const Ae=q.isMesh&&q.matrixWorld.determinant()<0,Le=PT(S,H,X,F,q);Ee.setMaterial(F,Ae);let Be=X.index,Ke=1;F.wireframe===!0&&(Be=ft.getWireframeAttribute(X),Ke=2);const We=X.drawRange,Ge=X.attributes.position;let lt=We.start*Ke,zt=(We.start+We.count)*Ke;_e!==null&&(lt=Math.max(lt,_e.start*Ke),zt=Math.min(zt,(_e.start+_e.count)*Ke)),Be!==null?(lt=Math.max(lt,0),zt=Math.min(zt,Be.count)):Ge!=null&&(lt=Math.max(lt,0),zt=Math.min(zt,Ge.count));const ci=zt-lt;if(ci<0||ci===1/0)return;ue.setup(q,F,Le,X,Be);let Er,yt=P;if(Be!==null&&(Er=xt.get(Be),yt=J,yt.setIndex(Er)),q.isMesh)F.wireframe===!0?(Ee.setLineWidth(F.wireframeLinewidth*he()),yt.setMode(U.LINES)):yt.setMode(U.TRIANGLES);else if(q.isLine){let Xe=F.linewidth;Xe===void 0&&(Xe=1),Ee.setLineWidth(Xe*he()),q.isLineSegments?yt.setMode(U.LINES):q.isLineLoop?yt.setMode(U.LINE_LOOP):yt.setMode(U.LINE_STRIP)}else q.isPoints?yt.setMode(U.POINTS):q.isSprite&&yt.setMode(U.TRIANGLES);if(q.isInstancedMesh)yt.renderInstances(lt,ci,q.count);else if(X.isInstancedBufferGeometry){const Xe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,al=Math.min(X.instanceCount,Xe);yt.renderInstances(lt,ci,al)}else yt.render(lt,ci)},this.compile=function(S,H){function X(F,q,_e){F.transparent===!0&&F.side===ui&&F.forceSinglePass===!1?(F.side=Gt,F.needsUpdate=!0,ss(F,q,_e),F.side=Mi,F.needsUpdate=!0,ss(F,q,_e),F.side=ui):ss(F,q,_e)}_=y.get(S),_.init(),f.push(_),S.traverseVisible(function(F){F.isLight&&F.layers.test(H.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),_.setupLights(p.useLegacyLights),S.traverse(function(F){const q=F.material;if(q)if(Array.isArray(q))for(let _e=0;_e<q.length;_e++){const Ae=q[_e];X(Ae,S,F)}else X(q,S,F)}),f.pop(),_=null};let te=null;function de(S){te&&te(S)}function be(){nt.stop()}function ot(){nt.start()}const nt=new rh;nt.setAnimationLoop(de),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(S){te=S,fe.setAnimationLoop(S),S===null?nt.stop():nt.start()},fe.addEventListener("sessionstart",be),fe.addEventListener("sessionend",ot),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(H),H=fe.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,H,b),_=y.get(S,f.length),_.init(),f.push(_),k.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ie.setFromProjectionMatrix(k),ye=this.localClippingEnabled,re=V.init(this.clippingPlanes,ye),m=E.get(S,v.length),m.init(),v.push(m),Dt(S,H,0,p.sortObjects),m.finish(),p.sortObjects===!0&&m.sort(G,W),re===!0&&V.beginShadows();const X=_.state.shadowsArray;if(ae.render(X,S,H),re===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(m,S),_.setupLights(p.useLegacyLights),H.isArrayCamera){const F=H.cameras;for(let q=0,_e=F.length;q<_e;q++){const Ae=F[q];er(m,S,Ae,Ae.viewport)}}else er(m,S,H);b!==null&&(Oe.updateMultisampleRenderTarget(b),Oe.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(p,S,H),ue.resetDefaultState(),C=-1,D=null,f.pop(),f.length>0?_=f[f.length-1]:_=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Dt(S,H,X,F){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)_.pushLight(S),S.castShadow&&_.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ie.intersectsSprite(S)){F&&ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(k);const _e=qe.update(S),Ae=S.material;Ae.visible&&m.push(S,_e,Ae,X,ee.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ie.intersectsObject(S))){S.isSkinnedMesh&&S.skeleton.frame!==Je.render.frame&&(S.skeleton.update(),S.skeleton.frame=Je.render.frame);const _e=qe.update(S),Ae=S.material;if(F&&(_e.boundingSphere===null&&_e.computeBoundingSphere(),ee.copy(_e.boundingSphere.center).applyMatrix4(S.matrixWorld).applyMatrix4(k)),Array.isArray(Ae)){const Le=_e.groups;for(let Be=0,Ke=Le.length;Be<Ke;Be++){const We=Le[Be],Ge=Ae[We.materialIndex];Ge&&Ge.visible&&m.push(S,_e,Ge,X,ee.z,We)}}else Ae.visible&&m.push(S,_e,Ae,X,ee.z,null)}}const q=S.children;for(let _e=0,Ae=q.length;_e<Ae;_e++)Dt(q[_e],H,X,F)}function er(S,H,X,F){const q=S.opaque,_e=S.transmissive,Ae=S.transparent;_.setupLightsView(X),re===!0&&V.setGlobalState(p.clippingPlanes,X),_e.length>0&&_t(q,_e,H,X),F&&Ee.viewport(Y.copy(F)),q.length>0&&ei(q,H,X),_e.length>0&&ei(_e,H,X),Ae.length>0&&ei(Ae,H,X),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function _t(S,H,X,F){if(pe===null){const Le=oe.isWebGL2;pe=new cr(1024,1024,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?yn:nr,minFilter:rr,samples:Le&&o===!0?4:0})}const q=p.getRenderTarget();p.setRenderTarget(pe),p.clear();const _e=p.toneMapping;p.toneMapping=bi,ei(S,X,F),Oe.updateMultisampleRenderTarget(pe),Oe.updateRenderTargetMipmap(pe);let Ae=!1;for(let Le=0,Be=H.length;Le<Be;Le++){const Ke=H[Le],We=Ke.object,Ge=Ke.geometry,lt=Ke.material,zt=Ke.group;if(lt.side===ui&&We.layers.test(F.layers)){const ci=lt.side;lt.side=Gt,lt.needsUpdate=!0,xi(We,X,F,Ge,lt,zt),lt.side=ci,lt.needsUpdate=!0,Ae=!0}}Ae===!0&&(Oe.updateMultisampleRenderTarget(pe),Oe.updateRenderTargetMipmap(pe)),p.setRenderTarget(q),p.toneMapping=_e}function ei(S,H,X){const F=H.isScene===!0?H.overrideMaterial:null;for(let q=0,_e=S.length;q<_e;q++){const Ae=S[q],Le=Ae.object,Be=Ae.geometry,Ke=F===null?Ae.material:F,We=Ae.group;Le.layers.test(X.layers)&&xi(Le,H,X,Be,Ke,We)}}function xi(S,H,X,F,q,_e){S.onBeforeRender(p,H,X,F,q,_e),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(p,H,X,F,S,_e),q.transparent===!0&&q.side===ui&&q.forceSinglePass===!1?(q.side=Gt,q.needsUpdate=!0,p.renderBufferDirect(X,H,F,q,S,_e),q.side=Mi,q.needsUpdate=!0,p.renderBufferDirect(X,H,F,q,S,_e),q.side=ui):p.renderBufferDirect(X,H,F,q,S,_e),S.onAfterRender(p,H,X,F,q,_e)}function ss(S,H,X){H.isScene!==!0&&(H=me);const F=Se.get(S),q=_.state.lights,_e=_.state.shadowsArray,Ae=q.state.version,Le=st.getParameters(S,q.state,_e,H,X),Be=st.getProgramCacheKey(Le);let Ke=F.programs;F.environment=S.isMeshStandardMaterial?H.environment:null,F.fog=H.fog,F.envMap=(S.isMeshStandardMaterial?dt:mt).get(S.envMap||F.environment),Ke===void 0&&(S.addEventListener("dispose",gt),Ke=new Map,F.programs=Ke);let We=Ke.get(Be);if(We!==void 0){if(F.currentProgram===We&&F.lightsStateVersion===Ae)return Uu(S,Le),We}else Le.uniforms=st.getUniforms(S),S.onBuild(X,Le,p),S.onBeforeCompile(Le,p),We=st.acquireProgram(Le,Be),Ke.set(Be,We),F.uniforms=Le.uniforms;const Ge=F.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ge.clippingPlanes=V.uniform),Uu(S,Le),F.needsLights=IT(S),F.lightsStateVersion=Ae,F.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMap.value=q.state.directionalShadowMap,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotShadowMap.value=q.state.spotShadowMap,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMap.value=q.state.pointShadowMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix);const lt=We.getUniforms(),zt=Pa.seqWithValue(lt.seq,Ge);return F.currentProgram=We,F.uniformsList=zt,We}function Uu(S,H){const X=Se.get(S);X.outputColorSpace=H.outputColorSpace,X.instancing=H.instancing,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function PT(S,H,X,F,q){H.isScene!==!0&&(H=me),Oe.resetTextureUnits();const _e=H.fog,Ae=F.isMeshStandardMaterial?H.environment:null,Le=b===null?p.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:di,Be=(F.isMeshStandardMaterial?dt:mt).get(F.envMap||Ae),Ke=F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!F.normalMap&&!!X.attributes.tangent,Ge=!!X.morphAttributes.position,lt=!!X.morphAttributes.normal,zt=!!X.morphAttributes.color,ci=F.toneMapped?p.toneMapping:bi,Er=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=Er!==void 0?Er.length:0,Xe=Se.get(F),al=_.state.lights;if(re===!0&&(ye===!0||S!==D)){const qt=S===D&&F.id===C;V.setState(F,S,qt)}let sl=!1;F.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==al.state.version||Xe.outputColorSpace!==Le||q.isInstancedMesh&&Xe.instancing===!1||!q.isInstancedMesh&&Xe.instancing===!0||q.isSkinnedMesh&&Xe.skinning===!1||!q.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Be||F.fog===!0&&Xe.fog!==_e||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==V.numPlanes||Xe.numIntersection!==V.numIntersection)||Xe.vertexAlphas!==Ke||Xe.vertexTangents!==We||Xe.morphTargets!==Ge||Xe.morphNormals!==lt||Xe.morphColors!==zt||Xe.toneMapping!==ci||oe.isWebGL2===!0&&Xe.morphTargetsCount!==yt)&&(sl=!0):(sl=!0,Xe.__version=F.version);let Tr=Xe.currentProgram;sl===!0&&(Tr=ss(F,H,q));let Du=!1,Yn=!1,ol=!1;const kt=Tr.getUniforms(),Ar=Xe.uniforms;if(Ee.useProgram(Tr.program)&&(Du=!0,Yn=!0,ol=!0),F.id!==C&&(C=F.id,Yn=!0),Du||D!==S){if(kt.setValue(U,"projectionMatrix",S.projectionMatrix),oe.logarithmicDepthBuffer&&kt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),D!==S&&(D=S,Yn=!0,ol=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const qt=kt.map.cameraPosition;qt!==void 0&&qt.setValue(U,ee.setFromMatrixPosition(S.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&kt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||q.isSkinnedMesh)&&kt.setValue(U,"viewMatrix",S.matrixWorldInverse)}if(q.isSkinnedMesh){kt.setOptional(U,q,"bindMatrix"),kt.setOptional(U,q,"bindMatrixInverse");const qt=q.skeleton;qt&&(oe.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),kt.setValue(U,"boneTexture",qt.boneTexture,Oe),kt.setValue(U,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ll=X.morphAttributes;if((ll.position!==void 0||ll.normal!==void 0||ll.color!==void 0&&oe.isWebGL2===!0)&&ce.update(q,X,Tr),(Yn||Xe.receiveShadow!==q.receiveShadow)&&(Xe.receiveShadow=q.receiveShadow,kt.setValue(U,"receiveShadow",q.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Ar.envMap.value=Be,Ar.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Yn&&(kt.setValue(U,"toneMappingExposure",p.toneMappingExposure),Xe.needsLights&&LT(Ar,ol),_e&&F.fog===!0&&Ut.refreshFogUniforms(Ar,_e),Ut.refreshMaterialUniforms(Ar,F,B,K,pe),Pa.upload(U,Xe.uniformsList,Ar,Oe)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Pa.upload(U,Xe.uniformsList,Ar,Oe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&kt.setValue(U,"center",q.center),kt.setValue(U,"modelViewMatrix",q.modelViewMatrix),kt.setValue(U,"normalMatrix",q.normalMatrix),kt.setValue(U,"modelMatrix",q.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const qt=F.uniformsGroups;for(let cl=0,UT=qt.length;cl<UT;cl++)if(oe.isWebGL2){const Nu=qt[cl];ve.update(Nu,Tr),ve.bind(Nu,Tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tr}function LT(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function IT(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,H,X){Se.get(S.texture).__webglTexture=H,Se.get(S.depthTexture).__webglTexture=X;const F=Se.get(S);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=X===void 0,F.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,H){const X=Se.get(S);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,X=0){b=S,x=H,A=X;let F=!0,q=null,_e=!1,Ae=!1;if(S){const Le=Se.get(S);Le.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(U.FRAMEBUFFER,null),F=!1):Le.__webglFramebuffer===void 0?Oe.setupRenderTarget(S):Le.__hasExternalTextures&&Oe.rebindTextures(S,Se.get(S.texture).__webglTexture,Se.get(S.depthTexture).__webglTexture);const Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ae=!0);const Ke=Se.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(q=Ke[H],_e=!0):oe.isWebGL2&&S.samples>0&&Oe.useMultisampledRTT(S)===!1?q=Se.get(S).__webglMultisampledFramebuffer:q=Ke,Y.copy(S.viewport),w.copy(S.scissor),T=S.scissorTest}else Y.copy(ne).multiplyScalar(B).floor(),w.copy($).multiplyScalar(B).floor(),T=Q;if(Ee.bindFramebuffer(U.FRAMEBUFFER,q)&&oe.drawBuffers&&F&&Ee.drawBuffers(S,q),Ee.viewport(Y),Ee.scissor(w),Ee.setScissorTest(T),_e){const Le=Se.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,X)}else if(Ae){const Le=Se.get(S.texture),Be=H||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.__webglTexture,X||0,Be)}C=-1},this.readRenderTargetPixels=function(S,H,X,F,q,_e,Ae){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){Ee.bindFramebuffer(U.FRAMEBUFFER,Le);try{const Be=S.texture,Ke=Be.format,We=Be.type;if(Ke!==Jt&&z.convert(Ke)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=We===yn&&(Te.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Te.has("EXT_color_buffer_float"));if(We!==nr&&z.convert(We)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===zi&&(oe.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-F&&X>=0&&X<=S.height-q&&U.readPixels(H,X,F,q,z.convert(Ke),z.convert(We),_e)}finally{const Be=b!==null?Se.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(S,H,X=0){const F=Math.pow(2,-X),q=Math.floor(H.image.width*F),_e=Math.floor(H.image.height*F);Oe.setTexture2D(H,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,S.x,S.y,q,_e),Ee.unbindTexture()},this.copyTextureToTexture=function(S,H,X,F=0){const q=H.image.width,_e=H.image.height,Ae=z.convert(X.format),Le=z.convert(X.type);Oe.setTexture2D(X,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment),H.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,S.x,S.y,q,_e,Ae,Le,H.image.data):H.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,S.x,S.y,H.mipmaps[0].width,H.mipmaps[0].height,Ae,H.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,F,S.x,S.y,Ae,Le,H.image),F===0&&X.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(S,H,X,F,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=S.max.x-S.min.x+1,Ae=S.max.y-S.min.y+1,Le=S.max.z-S.min.z+1,Be=z.convert(F.format),Ke=z.convert(F.type);let We;if(F.isData3DTexture)Oe.setTexture3D(F,0),We=U.TEXTURE_3D;else if(F.isDataArrayTexture)Oe.setTexture2DArray(F,0),We=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const Ge=U.getParameter(U.UNPACK_ROW_LENGTH),lt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),zt=U.getParameter(U.UNPACK_SKIP_PIXELS),ci=U.getParameter(U.UNPACK_SKIP_ROWS),Er=U.getParameter(U.UNPACK_SKIP_IMAGES),yt=X.isCompressedTexture?X.mipmaps[0]:X.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,yt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),X.isDataTexture||X.isData3DTexture?U.texSubImage3D(We,q,H.x,H.y,H.z,_e,Ae,Le,Be,Ke,yt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(We,q,H.x,H.y,H.z,_e,Ae,Le,Be,yt.data)):U.texSubImage3D(We,q,H.x,H.y,H.z,_e,Ae,Le,Be,Ke,yt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ge),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ci),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Er),q===0&&F.generateMipmaps&&U.generateMipmap(We),Ee.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Oe.setTextureCube(S,0):S.isData3DTexture?Oe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Oe.setTexture2DArray(S,0):Oe.setTexture2D(S,0),Ee.unbindTexture()},this.resetState=function(){x=0,A=0,b=null,Ee.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Re?or:Ec}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===or?Re:di}}class dv extends Ph{}dv.prototype.isWebGL1Renderer=!0;class pv extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class mv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new I;class Co{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),a=it(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Co(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Lh=new I,Ih=new rt,Uh=new rt,fv=new I,Dh=new He,dn=new I;class gv extends Wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)dn.fromBufferAttribute(t,i),this.applyBoneTransform(i,dn),this.boundingBox.expandByPoint(dn)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)dn.fromBufferAttribute(t,i),this.applyBoneTransform(i,dn),this.boundingSphere.expandByPoint(dn)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Ih.fromBufferAttribute(r.attributes.skinIndex,e),Uh.fromBufferAttribute(r.attributes.skinWeight,e),Lh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const s=Uh.getComponent(a);if(s!==0){const o=Ih.getComponent(a);Dh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(fv.copy(Lh).applyMatrix4(Dh),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Nh extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _v extends Pt{constructor(e=null,t=1,i=1,r,a,s,o,l,c=At,h=At,u,d){super(null,s,o,l,c,h,r,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oh=new He,vv=new He;class Po{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new He;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let a=0,s=e.length;a<s;a++){const o=e[a]?e[a].matrixWorld:vv;Oh.multiplyMatrices(o,t[a]),Oh.toArray(i,a*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Po(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Cc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new _v(t,e,e,Jt,zi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const a=e.bones[i];let s=t[a];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),s=new Nh),this.bones.push(s),this.boneInverses.push(new He().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,a=t.length;r<a;r++){const s=t[r];e.bones.push(s.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class Fh extends Ot{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pn=new He,Bh=new He,La=[],Hh=new Ti,wv=new He,In=new Wt,Un=new Ci;class xv extends Wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fh(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,wv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pn),Hh.copy(e.boundingBox).applyMatrix4(pn),this.boundingBox.union(Hh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pn),Un.copy(e.boundingSphere).applyMatrix4(pn),this.boundingSphere.union(Un)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(In.geometry=this.geometry,In.material=this.material,In.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Un.copy(this.boundingSphere),Un.applyMatrix4(i),e.ray.intersectsSphere(Un)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,pn),Bh.multiplyMatrices(i,pn),In.matrixWorld=Bh,In.raycast(e,La);for(let s=0,o=La.length;s<o;s++){const l=La[s];l.instanceId=a,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class zh extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kh=new I,Gh=new I,Vh=new He,Lo=new uo,Ia=new Ci;class Io extends ct{constructor(e=new pi,t=new zh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)kh.fromBufferAttribute(t,r-1),Gh.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=kh.distanceTo(Gh);e.setAttribute("lineDistance",new Di(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=a,e.ray.intersectsSphere(Ia)===!1)return;Vh.copy(r).invert(),Lo.copy(e.ray).applyMatrix4(Vh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,h=new I,u=new I,d=new I,m=this.isLineSegments?2:1,_=i.index,v=i.attributes.position;if(_!==null){const f=Math.max(0,s.start),p=Math.min(_.count,s.start+s.count);for(let M=f,x=p-1;M<x;M+=m){const A=_.getX(M),b=_.getX(M+1);if(c.fromBufferAttribute(v,A),h.fromBufferAttribute(v,b),Lo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,s.start),p=Math.min(v.count,s.start+s.count);for(let M=f,x=p-1;M<x;M+=m){if(c.fromBufferAttribute(v,M),h.fromBufferAttribute(v,M+1),Lo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}const Wh=new I,jh=new I;class yv extends Io{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Wh.fromBufferAttribute(t,r),jh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Wh.distanceTo(jh);e.setAttribute("lineDistance",new Di(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sv extends Io{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xh extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yh=new He,Uo=new uo,Ua=new Ci,Da=new I;class Mv extends ct{constructor(e=new pi,t=new Xh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(r),Ua.radius+=a,e.ray.intersectsSphere(Ua)===!1)return;Yh.copy(r).invert(),Uo.copy(e.ray).applyMatrix4(Yh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let m=u,_=d;m<_;m++){const v=c.getX(m);Da.fromBufferAttribute(h,v),qh(Da,v,l,r,e,t,this)}}else{const u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let m=u,_=d;m<_;m++)Da.fromBufferAttribute(h,m),qh(Da,m,l,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function qh(n,e,t,i,r,a,s){const o=Uo.distanceSqToPoint(n);if(o<t){const l=new I;Uo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class Na extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Js,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wr extends Na{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bv extends ai{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Js,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Xi(n,e,t){return Kh(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function Oa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Kh(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ev(n){function e(r,a){return n[r]-n[a]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Jh(n,e,t){const i=n.length,r=new n.constructor(i);for(let a=0,s=0;s!==i;++a){const o=t[a]*e;for(let l=0;l!==e;++l)r[s++]=n[o+l]}return r}function Zh(n,e,t,i){let r=1,a=n[0];for(;a!==void 0&&a[i]===void 0;)a=n[r++];if(a===void 0)return;let s=a[i];if(s!==void 0)if(Array.isArray(s))do s=a[i],s!==void 0&&(e.push(a.time),t.push.apply(t,s)),a=n[r++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[i],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=n[r++];while(a!==void 0);else do s=a[i],s!==void 0&&(e.push(a.time),t.push(s)),a=n[r++];while(a!==void 0)}class Dn{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],a=t[i-1];e:{t:{let s;i:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=r,r=t[++i],e<r)break t}s=t.length;break i}if(!(e>=a)){const o=t[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=a,a=t[--i-1],e>=a)break t}s=i,i=0;break i}break e}for(;i<s;){const o=i+s>>>1;e<t[o]?s=o:i=o+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Tv extends Dn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kr,endingEnd:kr}}intervalChanged_(e,t,i){const r=this.parameterPositions;let a=e-2,s=e+1,o=r[a],l=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case Gr:a=e,o=2*t-i;break;case aa:a=r.length-2,o=t+r[a]-r[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gr:s=e,l=2*i-t;break;case aa:s=1,l=i+r[1]-r[0];break;default:s=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(i-t)/(r-t),v=_*_,f=v*_,p=-d*f+2*d*v-d*_,M=(1+d)*f+(-1.5-2*d)*v+(-.5+d)*_+1,x=(-1-m)*f+(1.5+m)*v+.5*_,A=m*f-m*v;for(let b=0;b!==o;++b)a[b]=p*s[h+b]+M*s[c+b]+x*s[l+b]+A*s[u+b];return a}}class Qh extends Dn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)a[d]=s[c+d]*u+s[l+d]*h;return a}}class Av extends Dn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class gi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Av(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sn:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Ys:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sn;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Ys}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);const o=this.getValueSize();this.times=Xi(i,a,s),this.values=Xi(this.values,a*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(r!==void 0&&Kh(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Xi(this.times),t=Xi(this.values),i=this.getValueSize(),r=this.getInterpolation()===Ys,a=e.length-1;let s=1;for(let o=1;o<a;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{const u=o*i,d=u-i,m=u+i;for(let _=0;_!==i;++_){const v=t[u+_];if(v!==t[d+_]||v!==t[m+_]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const u=o*i,d=s*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++s}}if(a>0){e[s]=e[a];for(let o=a*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=Xi(e,0,s),this.values=Xi(t,0,s*i)):(this.times=e,this.values=t),this}clone(){const e=Xi(this.times,0),t=Xi(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}gi.prototype.TimeBufferType=Float32Array,gi.prototype.ValueBufferType=Float32Array,gi.prototype.DefaultInterpolation=zr;class mn extends gi{}mn.prototype.ValueTypeName="bool",mn.prototype.ValueBufferType=Array,mn.prototype.DefaultInterpolation=Sn,mn.prototype.InterpolantFactoryMethodLinear=void 0,mn.prototype.InterpolantFactoryMethodSmooth=void 0;class $h extends gi{}$h.prototype.ValueTypeName="color";class Nn extends gi{}Nn.prototype.ValueTypeName="number";class Rv extends Dn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Nt.slerpFlat(a,0,s,c-o,s,c,l);return a}}class xr extends gi{InterpolantFactoryMethodLinear(e){return new Rv(this.times,this.values,this.getValueSize(),e)}}xr.prototype.ValueTypeName="quaternion",xr.prototype.DefaultInterpolation=zr,xr.prototype.InterpolantFactoryMethodSmooth=void 0;class fn extends gi{}fn.prototype.ValueTypeName="string",fn.prototype.ValueBufferType=Array,fn.prototype.DefaultInterpolation=Sn,fn.prototype.InterpolantFactoryMethodLinear=void 0,fn.prototype.InterpolantFactoryMethodSmooth=void 0;class On extends gi{}On.prototype.ValueTypeName="vector";class Do{constructor(e,t=-1,i,r=qs){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(Pv(i[s]).scale(r));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,s=i.length;a!==s;++a)t.push(gi.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const a=t.length,s=[];for(let o=0;o<a;o++){let l=[],c=[];l.push((o+a-1)%a,o,(o+1)%a),c.push(0,1,0);const h=Ev(l);l=Jh(l,1,h),c=Jh(c,1,h),!r&&l[0]===0&&(l.push(a),c.push(c[0])),s.push(new Nn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(a);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(c)}}const s=[];for(const o in r)s.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,u,d,m,_){if(d.length!==0){const v=[],f=[];Zh(d,v,f,m),v.length!==0&&_.push(new h(u,v,f))}},r=[],a=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)d[u[m].morphTargets[_]]=-1;for(const _ in d){const v=[],f=[];for(let p=0;p!==u[m].morphTargets.length;++p){const M=u[m];v.push(M.time),f.push(M.morphTarget===_?1:0)}r.push(new Nn(".morphTargetInfluence["+_+"]",v,f))}l=d.length*s}else{const d=".bones["+t[h].name+"]";i(On,d+".position",u,"pos",r),i(xr,d+".quaternion",u,"rot",r),i(On,d+".scale",u,"scl",r)}}return r.length===0?null:new this(a,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nn;case"vector":case"vector2":case"vector3":case"vector4":return On;case"color":return $h;case"quaternion":return xr;case"bool":case"boolean":return mn;case"string":return fn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Pv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cv(n.type);if(n.times===void 0){const t=[],i=[];Zh(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const gn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Lv{constructor(e,t,i){const r=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const Iv=new Lv;class Fn{constructor(e){this.manager=e!==void 0?e:Iv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ni={};class Uv extends Error{constructor(e,t){super(e),this.response=t}}class eu extends Fn{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=gn.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:i,onError:r});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ni[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,_=m!==0;let v=0;const f=new ReadableStream({start(p){M();function M(){u.read().then(({done:x,value:A})=>{if(x)p.close();else{v+=A.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:m});for(let C=0,D=h.length;C<D;C++){const Y=h[C];Y.onProgress&&Y.onProgress(b)}p.enqueue(A),M()}})}}});return new Response(f)}else throw new Uv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{gn.add(e,c);const h=Ni[e];delete Ni[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=Ni[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dv extends Fn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=gn.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=En("img");function l(){h(),gn.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(u){h(),r&&r(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class tu extends Fn{constructor(e){super(e)}load(e,t,i,r){const a=new Pt,s=new Dv(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class Fa extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const No=new He,iu=new I,ru=new I;class Oo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(iu),ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ru),t.updateMatrixWorld(),No.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(No)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nv extends Oo{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Vr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ov extends Fa{constructor(e,t,i=0,r=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=r,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new Nv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const nu=new He,Bn=new I,Fo=new I;class Fv extends Oo{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Bn.setFromMatrixPosition(e.matrixWorld),i.position.copy(Bn),Fo.copy(i.position),Fo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Fo),i.updateMatrixWorld(),r.makeTranslation(-Bn.x,-Bn.y,-Bn.z),nu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu)}}class Bv extends Fa{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Fv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Hv extends Oo{constructor(){super(new So(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class au extends Fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Hv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zv extends Fa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class kv extends Fn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=gn.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){gn.add(e,l),t&&t(l),a.manager.itemEnd(e)}).catch(function(l){r&&r(l),a.manager.itemError(e),a.manager.itemEnd(e)}),a.manager.itemStart(e)}}class Gv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=su(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=su();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function su(){return(typeof performance>"u"?Date:performance).now()}class Vv{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,a,s;switch(t){case"quaternion":r=this._slerp,a=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,a=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,a=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=a,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,a=e*r+r;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==r;++o)i[a+o]=i[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(i,a,0,o,r)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,a=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-a,t)}s>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let a=i,s=r;a!==s;++a)t[a]=t[r+a%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,a){if(r>=.5)for(let s=0;s!==a;++s)e[t+s]=e[i+s]}_slerp(e,t,i,r){Nt.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,a){const s=this._workIndex*a;Nt.multiplyQuaternionsFlat(e,s,e,t,e,i),Nt.slerpFlat(e,t,e,t,e,s,r)}_lerp(e,t,i,r,a){const s=1-r;for(let o=0;o!==a;++o){const l=t+o;e[l]=e[l]*s+e[i+o]*r}}_lerpAdditive(e,t,i,r,a){for(let s=0;s!==a;++s){const o=t+s;e[o]=e[o]+e[i+s]*r}}}const Ho="\\[\\]\\.:\\/",Wv=new RegExp("["+Ho+"]","g"),zo="[^"+Ho+"]",jv="[^"+Ho.replace("\\.","")+"]",Xv=/((?:WC+[\/:])*)/.source.replace("WC",zo),Yv=/(WCOD+)?/.source.replace("WCOD",jv),qv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zo),Kv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zo),Jv=new RegExp("^"+Xv+Yv+qv+Kv+"$"),Zv=["material","materials","bones","map"];class Qv{constructor(e,t,i){const r=i||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ze{constructor(e,t,i){this.path=t,this.parsedPath=i||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,i):new Ze(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wv,"")}static parseTrackName(e){const t=Jv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const a=i.nodeName.substring(r+1);Zv.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let s=0;s<a.length;s++){const o=a[s];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let a=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[r];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=Qv,Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray],Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class $v{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const a=t.tracks,s=a.length,o=new Array(s),l={endingStart:kr,endingEnd:kr};for(let c=0;c!==s;++c){const h=a[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Gd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,a=e._clip.duration,s=a/r,o=r/a;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,a=r.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=a,l[1]=a+i,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const a=this._startTime;if(a!==null){const l=(e-a)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Wd:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulateAdditive(o);break;case qs:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,a=this._loopCount;const s=i===Vd;if(e===0)return a===-1?r:s&&(a&1)===1?t-r:r;if(i===kd){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,a+=Math.abs(o);const l=this.repetitions-a;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=a,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(s&&(a&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Gr,r.endingEnd=Gr):(e?r.endingStart=this.zeroSlopeAtStart?Gr:kr:r.endingStart=aa,t?r.endingEnd=this.zeroSlopeAtEnd?Gr:kr:r.endingEnd=aa)}_scheduleFading(e,t,i){const r=this._mixer,a=r.time;let s=this._weightInterpolant;s===null&&(s=r._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,l=s.sampleValues;return o[0]=a,l[0]=t,o[1]=a+e,l[1]=i,this}}const e0=new Float32Array(1);class t0 extends ki{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,a=r.length,s=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==a;++u){const d=r[u],m=d.name;let _=h[m];if(_!==void 0)++_.referenceCount,s[u]=_;else{if(_=s[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,m));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;_=new Vv(Ze.create(i,m,v),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,m),s[u]=_}o[u].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,a=this._actionsByClip[r];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const a=t[i];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,a=this._actionsByClip;let s=a[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const a=e._clip.uuid,s=this._actionsByClip,o=s[a],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete s[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const a=t[i];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,a=this._bindings;let s=r[t];s===void 0&&(s={},r[t]=s),s[i]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,a=i.path,s=this._bindingsByRootAndName,o=s[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[a],Object.keys(o).length===0&&delete s[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Qh(new Float32Array(2),new Float32Array(2),1,e0),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,a=t[r];e.__cacheIndex=r,t[r]=e,a.__cacheIndex=i,t[i]=a}clipAction(e,t,i){const r=t||this._root,a=r.uuid;let s=typeof e=="string"?Do.findByName(r,e):e;const o=s!==null?s.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(s!==null?i=s.blendMode:i=qs),l!==void 0){const u=l.actionByRoot[a];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const h=new $v(this,s,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,a),h}existingAction(e,t){const i=t||this._root,r=i.uuid,a=typeof e=="string"?Do.findByName(i,e):e,s=a?a.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,a=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,a,s);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,a=r[i];if(a!==void 0){const s=a.knownActions;for(let o=0,l=s.length;o!==l;++o){const c=s[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const s in i){const o=i[s].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,a=r[t];if(a!==void 0)for(const s in a){const o=a[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class ou{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Os}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Os);const i0=""+new URL("rapier_wasm3d_bg-a8e9a6c4.wasm",import.meta.url).href,r0=async(n={},e)=>{let t;if(e.startsWith("data:")){const i=e.replace(/^data:.*?base64,/,"");let r;if(typeof Buffer=="function"&&typeof Buffer.from=="function")r=Buffer.from(i,"base64");else if(typeof atob=="function"){const a=atob(i);r=new Uint8Array(a.length);for(let s=0;s<a.length;s++)r[s]=a.charCodeAt(s)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(r,n)}else{const i=await fetch(e),r=i.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&r.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(i,n);else{const a=await i.arrayBuffer();t=await WebAssembly.instantiate(a,n)}}return t.instance.exports},Ye=new Array(32).fill(void 0);Ye.push(void 0,null,!0,!1);function Qe(n){return Ye[n]}let Hn=Ye.length;function n0(n){n<36||(Ye[n]=Hn,Hn=n)}function zn(n){const e=Qe(n);return n0(n),e}function wt(n){Hn===Ye.length&&Ye.push(Ye.length+1);const e=Hn;return Hn=Ye[e],Ye[e]=n,e}function we(n){return n==null}let ko=new Float64Array;function Ba(){return ko.byteLength===0&&(ko=new Float64Array(vn.buffer)),ko}let Go=new Int32Array;function et(){return Go.byteLength===0&&(Go=new Int32Array(vn.buffer)),Go}const a0=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let lu=new a0("utf-8",{ignoreBOM:!0,fatal:!0});lu.decode();let Vo=new Uint8Array;function s0(){return Vo.byteLength===0&&(Vo=new Uint8Array(vn.buffer)),Vo}function cu(n,e){return lu.decode(s0().subarray(n,n+e))}Fu=function(){try{const i=ke(-16);P0(i);var e=et()[i/4+0],t=et()[i/4+1];return cu(e,t)}finally{ke(16),ts(e,t)}};function R(n,e){if(!(n instanceof e))throw new Error(`expected instance of ${e.name}`);return n.ptr}let Wo=new Float32Array;function Yi(){return Wo.byteLength===0&&(Wo=new Float32Array(vn.buffer)),Wo}let at=32;function ht(n){if(at==1)throw new Error("out of js stack");return Ye[--at]=n,at}function hu(n,e){return Yi().subarray(n/4,n/4+e)}let jo=new Uint32Array;function uu(){return jo.byteLength===0&&(jo=new Uint32Array(vn.buffer)),jo}function o0(n,e){return uu().subarray(n/4,n/4+e)}let Yt=0;function yr(n,e){const t=e(n.length*4);return Yi().set(n,t/4),Yt=n.length,t}function Ha(n,e){const t=e(n.length*4);return uu().set(n,t/4),Yt=n.length,t}function Xo(n,e){try{return n.apply(this,e)}catch(t){zE(wt(t))}}const za=Object.freeze({X:0,0:"X",Y:1,1:"Y",Z:2,2:"Z",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"});class qi{static __wrap(e){const t=Object.create(qi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();zy(e)}constructor(){const e=ky();return qi.__wrap(e)}}class _n{static __wrap(e){const t=Object.create(_n.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();lw(e)}constructor(){const e=cw();return _n.__wrap(e)}}class kn{static __wrap(e){const t=Object.create(kn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();iw(e)}constructor(){const e=rw();return kn.__wrap(e)}handle(){return Wn(this.ptr)}translationApplied(){const e=nw(this.ptr);return O.__wrap(e)}translationRemaining(){const e=aw(this.ptr);return O.__wrap(e)}toi(){return Sr(this.ptr)}worldWitness1(){const e=$a(this.ptr);return O.__wrap(e)}worldWitness2(){const e=sw(this.ptr);return O.__wrap(e)}worldNormal1(){const e=$o(this.ptr);return O.__wrap(e)}worldNormal2(){const e=ow(this.ptr);return O.__wrap(e)}}class ut{static __wrap(e){const t=Object.create(ut.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();QS(e)}coTranslation(e){const t=Gy(this.ptr,e);return O.__wrap(t)}coRotation(e){const t=Vy(this.ptr,e);return Fe.__wrap(t)}coSetTranslation(e,t,i,r){Wy(this.ptr,e,t,i,r)}coSetTranslationWrtParent(e,t,i,r){jy(this.ptr,e,t,i,r)}coSetRotation(e,t,i,r,a){Xy(this.ptr,e,t,i,r,a)}coSetRotationWrtParent(e,t,i,r,a){Yy(this.ptr,e,t,i,r,a)}coIsSensor(e){return qy(this.ptr,e)!==0}coShapeType(e){return Ky(this.ptr,e)>>>0}coHalfspaceNormal(e){const t=Jy(this.ptr,e);return t===0?void 0:O.__wrap(t)}coHalfExtents(e){const t=Zy(this.ptr,e);return t===0?void 0:O.__wrap(t)}coSetHalfExtents(e,t){R(t,O),Qy(this.ptr,e,t.ptr)}coRadius(e){try{const r=ke(-16);$y(r,this.ptr,e);var t=et()[r/4+0],i=Yi()[r/4+1];return t===0?void 0:i}finally{ke(16)}}coSetRadius(e,t){eS(this.ptr,e,t)}coHalfHeight(e){try{const r=ke(-16);tS(r,this.ptr,e);var t=et()[r/4+0],i=Yi()[r/4+1];return t===0?void 0:i}finally{ke(16)}}coSetHalfHeight(e,t){iS(this.ptr,e,t)}coRoundRadius(e){try{const r=ke(-16);rS(r,this.ptr,e);var t=et()[r/4+0],i=Yi()[r/4+1];return t===0?void 0:i}finally{ke(16)}}coSetRoundRadius(e,t){nS(this.ptr,e,t)}coVertices(e){try{const r=ke(-16);aS(r,this.ptr,e);var t=et()[r/4+0],i=et()[r/4+1];let a;return t!==0&&(a=hu(t,i).slice(),ts(t,i*4)),a}finally{ke(16)}}coIndices(e){try{const r=ke(-16);sS(r,this.ptr,e);var t=et()[r/4+0],i=et()[r/4+1];let a;return t!==0&&(a=o0(t,i).slice(),ts(t,i*4)),a}finally{ke(16)}}coHeightfieldHeights(e){try{const r=ke(-16);oS(r,this.ptr,e);var t=et()[r/4+0],i=et()[r/4+1];let a;return t!==0&&(a=hu(t,i).slice(),ts(t,i*4)),a}finally{ke(16)}}coHeightfieldScale(e){const t=lS(this.ptr,e);return t===0?void 0:O.__wrap(t)}coHeightfieldNRows(e){try{const r=ke(-16);cS(r,this.ptr,e);var t=et()[r/4+0],i=et()[r/4+1];return t===0?void 0:i>>>0}finally{ke(16)}}coHeightfieldNCols(e){try{const r=ke(-16);hS(r,this.ptr,e);var t=et()[r/4+0],i=et()[r/4+1];return t===0?void 0:i>>>0}finally{ke(16)}}coParent(e){try{const r=ke(-16);uS(r,this.ptr,e);var t=et()[r/4+0],i=Ba()[r/8+1];return t===0?void 0:i}finally{ke(16)}}coSetEnabled(e,t){dS(this.ptr,e,t)}coIsEnabled(e){return pS(this.ptr,e)!==0}coFriction(e){return mS(this.ptr,e)}coRestitution(e){return fS(this.ptr,e)}coDensity(e){return gS(this.ptr,e)}coMass(e){return _S(this.ptr,e)}coVolume(e){return vS(this.ptr,e)}coCollisionGroups(e){return wS(this.ptr,e)>>>0}coSolverGroups(e){return xS(this.ptr,e)>>>0}coActiveHooks(e){return yS(this.ptr,e)>>>0}coActiveCollisionTypes(e){return SS(this.ptr,e)}coActiveEvents(e){return MS(this.ptr,e)>>>0}coContactForceEventThreshold(e){return bS(this.ptr,e)}coContainsPoint(e,t){return R(t,O),ES(this.ptr,e,t.ptr)!==0}coCastShape(e,t,i,r,a,s,o,l){R(t,O),R(i,Me),R(r,O),R(a,Fe),R(s,O);const c=TS(this.ptr,e,t.ptr,i.ptr,r.ptr,a.ptr,s.ptr,o,l);return c===0?void 0:Za.__wrap(c)}coCastCollider(e,t,i,r,a,s){R(t,O),R(r,O);const o=AS(this.ptr,e,t.ptr,i,r.ptr,a,s);return o===0?void 0:Ja.__wrap(o)}coIntersectsShape(e,t,i,r){return R(t,Me),R(i,O),R(r,Fe),RS(this.ptr,e,t.ptr,i.ptr,r.ptr)!==0}coContactShape(e,t,i,r,a){R(t,Me),R(i,O),R(r,Fe);const s=CS(this.ptr,e,t.ptr,i.ptr,r.ptr,a);return s===0?void 0:Vn.__wrap(s)}coContactCollider(e,t,i){const r=PS(this.ptr,e,t,i);return r===0?void 0:Vn.__wrap(r)}coProjectPoint(e,t,i){R(t,O);const r=LS(this.ptr,e,t.ptr,i);return ja.__wrap(r)}coIntersectsRay(e,t,i,r){return R(t,O),R(i,O),IS(this.ptr,e,t.ptr,i.ptr,r)!==0}coCastRay(e,t,i,r,a){return R(t,O),R(i,O),US(this.ptr,e,t.ptr,i.ptr,r,a)}coCastRayAndGetNormal(e,t,i,r,a){R(t,O),R(i,O);const s=DS(this.ptr,e,t.ptr,i.ptr,r,a);return s===0?void 0:Ya.__wrap(s)}coSetSensor(e,t){NS(this.ptr,e,t)}coSetRestitution(e,t){OS(this.ptr,e,t)}coSetFriction(e,t){FS(this.ptr,e,t)}coFrictionCombineRule(e){return BS(this.ptr,e)>>>0}coSetFrictionCombineRule(e,t){HS(this.ptr,e,t)}coRestitutionCombineRule(e){return zS(this.ptr,e)>>>0}coSetRestitutionCombineRule(e,t){kS(this.ptr,e,t)}coSetCollisionGroups(e,t){GS(this.ptr,e,t)}coSetSolverGroups(e,t){VS(this.ptr,e,t)}coSetActiveHooks(e,t){WS(this.ptr,e,t)}coSetActiveEvents(e,t){jS(this.ptr,e,t)}coSetActiveCollisionTypes(e,t){XS(this.ptr,e,t)}coSetShape(e,t){R(t,Me),YS(this.ptr,e,t.ptr)}coSetContactForceEventThreshold(e,t){qS(this.ptr,e,t)}coSetDensity(e,t){KS(this.ptr,e,t)}coSetMass(e,t){JS(this.ptr,e,t)}coSetMassProperties(e,t,i,r,a){R(i,O),R(r,O),R(a,Fe),ZS(this.ptr,e,t,i.ptr,r.ptr,a.ptr)}constructor(){const e=$S();return ut.__wrap(e)}len(){return eM(this.ptr)>>>0}contains(e){return mu(this.ptr,e)!==0}createCollider(e,t,i,r,a,s,o,l,c,h,u,d,m,_,v,f,p,M,x,A,b,C,D,Y){try{const Z=ke(-16);R(t,Me),R(i,O),R(r,Fe),R(o,O),R(l,O),R(c,Fe),R(Y,pt),tM(Z,this.ptr,e,t.ptr,i.ptr,r.ptr,a,s,o.ptr,l.ptr,c.ptr,h,u,d,m,_,v,f,p,M,x,A,b,C,D,Y.ptr);var w=et()[Z/4+0],T=Ba()[Z/8+1];return w===0?void 0:T}finally{ke(16)}}remove(e,t,i,r){R(t,vi),R(i,pt),iM(this.ptr,e,t.ptr,i.ptr,r)}isHandleValid(e){return mu(this.ptr,e)!==0}forEachColliderHandle(e){try{rM(this.ptr,ht(e))}finally{Ye[at++]=void 0}}}class Yo{static __wrap(e){const t=Object.create(Yo.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Kb(e)}collider1(){return Wn(this.ptr)}collider2(){return Jb(this.ptr)}total_force(){const e=_u(this.ptr);return O.__wrap(e)}total_force_magnitude(){return Zb(this.ptr)}max_force_direction(){const e=Qb(this.ptr);return O.__wrap(e)}max_force_magnitude(){return $b(this.ptr)}}class qo{static __wrap(e){const t=Object.create(qo.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();dM(e)}normal(){const e=_M(this.ptr);return O.__wrap(e)}local_n1(){const e=vM(this.ptr);return O.__wrap(e)}local_n2(){const e=wM(this.ptr);return O.__wrap(e)}subshape1(){return xM(this.ptr)>>>0}subshape2(){return yM(this.ptr)>>>0}num_contacts(){return SM(this.ptr)>>>0}contact_local_p1(e){const t=MM(this.ptr,e);return t===0?void 0:O.__wrap(t)}contact_local_p2(e){const t=bM(this.ptr,e);return t===0?void 0:O.__wrap(t)}contact_dist(e){return EM(this.ptr,e)}contact_fid1(e){return TM(this.ptr,e)>>>0}contact_fid2(e){return AM(this.ptr,e)>>>0}contact_impulse(e){return RM(this.ptr,e)}contact_tangent_impulse_x(e){return CM(this.ptr,e)}contact_tangent_impulse_y(e){return PM(this.ptr,e)}num_solver_contacts(){return LM(this.ptr)>>>0}solver_contact_point(e){const t=IM(this.ptr,e);return t===0?void 0:O.__wrap(t)}solver_contact_dist(e){return UM(this.ptr,e)}solver_contact_friction(e){return DM(this.ptr,e)}solver_contact_restitution(e){return NM(this.ptr,e)}solver_contact_tangent_velocity(e){const t=OM(this.ptr,e);return O.__wrap(t)}}class Ko{static __wrap(e){const t=Object.create(Ko.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();UE(e)}collider1(){return pM(this.ptr)}collider2(){return mM(this.ptr)}numContactManifolds(){return fM(this.ptr)>>>0}contactManifold(e){const t=gM(this.ptr,e);return t===0?void 0:qo.__wrap(t)}}class ka{static __wrap(e){const t=Object.create(ka.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Vb(e)}constructor(){const e=Wb();return ka.__wrap(e)}vertices(){const e=jb(this.ptr);return zn(e)}colors(){const e=Xb(this.ptr);return zn(e)}render(e,t,i,r,a){R(e,pt),R(t,ut),R(i,_i),R(r,wi),R(a,Oi),Yb(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a.ptr)}}class Jo{static __wrap(e){const t=Object.create(Jo.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();yE(e)}takeGravity(){const e=SE(this.ptr);return e===0?void 0:O.__wrap(e)}takeIntegrationParameters(){const e=ME(this.ptr);return e===0?void 0:Ki.__wrap(e)}takeIslandManager(){const e=bE(this.ptr);return e===0?void 0:vi.__wrap(e)}takeBroadPhase(){const e=EE(this.ptr);return e===0?void 0:qi.__wrap(e)}takeNarrowPhase(){const e=TE(this.ptr);return e===0?void 0:Oi.__wrap(e)}takeBodies(){const e=AE(this.ptr);return e===0?void 0:pt.__wrap(e)}takeColliders(){const e=RE(this.ptr);return e===0?void 0:ut.__wrap(e)}takeImpulseJoints(){const e=CE(this.ptr);return e===0?void 0:_i.__wrap(e)}takeMultibodyJoints(){const e=PE(this.ptr);return e===0?void 0:wi.__wrap(e)}}yl=class kl{static __wrap(e){const t=Object.create(kl.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();qb(e)}constructor(e){const t=eE(e);return kl.__wrap(t)}drainCollisionEvents(e){try{tE(this.ptr,ht(e))}finally{Ye[at++]=void 0}}drainContactForceEvents(e){try{iE(this.ptr,ht(e))}finally{Ye[at++]=void 0}}clear(){rE(this.ptr)}};class Qt{static __wrap(e){const t=Object.create(Qt.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();ix(e)}static spherical(e,t){R(e,O),R(t,O);const i=rx(e.ptr,t.ptr);return Qt.__wrap(i)}static prismatic(e,t,i,r,a,s){R(e,O),R(t,O),R(i,O);const o=nx(e.ptr,t.ptr,i.ptr,r,a,s);return o===0?void 0:Qt.__wrap(o)}static fixed(e,t,i,r){R(e,O),R(t,Fe),R(i,O),R(r,Fe);const a=ax(e.ptr,t.ptr,i.ptr,r.ptr);return Qt.__wrap(a)}static revolute(e,t,i){R(e,O),R(t,O),R(i,O);const r=sx(e.ptr,t.ptr,i.ptr);return r===0?void 0:Qt.__wrap(r)}}class _i{static __wrap(e){const t=Object.create(_i.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Cw(e)}jointType(e){return hw(this.ptr,e)>>>0}jointBodyHandle1(e){return uw(this.ptr,e)}jointBodyHandle2(e){return dw(this.ptr,e)}jointFrameX1(e){const t=pw(this.ptr,e);return Fe.__wrap(t)}jointFrameX2(e){const t=mw(this.ptr,e);return Fe.__wrap(t)}jointAnchor1(e){const t=fw(this.ptr,e);return O.__wrap(t)}jointAnchor2(e){const t=gw(this.ptr,e);return O.__wrap(t)}jointSetAnchor1(e,t){R(t,O),_w(this.ptr,e,t.ptr)}jointSetAnchor2(e,t){R(t,O),vw(this.ptr,e,t.ptr)}jointContactsEnabled(e){return ww(this.ptr,e)!==0}jointSetContactsEnabled(e,t){xw(this.ptr,e,t)}jointLimitsEnabled(e,t){return yw(this.ptr,e,t)!==0}jointLimitsMin(e,t){return Sw(this.ptr,e,t)}jointLimitsMax(e,t){return Mw(this.ptr,e,t)}jointSetLimits(e,t,i,r){bw(this.ptr,e,t,i,r)}jointConfigureMotorModel(e,t,i){Ew(this.ptr,e,t,i)}jointConfigureMotorVelocity(e,t,i,r){Tw(this.ptr,e,t,i,r)}jointConfigureMotorPosition(e,t,i,r,a){Aw(this.ptr,e,t,i,r,a)}jointConfigureMotor(e,t,i,r,a,s){Rw(this.ptr,e,t,i,r,a,s)}constructor(){const e=Pw();return _i.__wrap(e)}createJoint(e,t,i,r){return R(e,Qt),Lw(this.ptr,e.ptr,t,i,r)}remove(e,t){Iw(this.ptr,e,t)}len(){return Uw(this.ptr)>>>0}contains(e){return Dw(this.ptr,e)!==0}forEachJointHandle(e){try{Nw(this.ptr,ht(e))}finally{Ye[at++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{Ow(this.ptr,e,ht(t))}finally{Ye[at++]=void 0}}}class Ki{static __wrap(e){const t=Object.create(Ki.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Fw(e)}constructor(){const e=Bw();return Ki.__wrap(e)}get dt(){return es(this.ptr)}get erp(){return Sr(this.ptr)}get allowedLinearError(){return Hw(this.ptr)}get predictionDistance(){return zw(this.ptr)}get maxVelocityIterations(){return kw(this.ptr)>>>0}get maxVelocityFrictionIterations(){return Gw(this.ptr)>>>0}get maxStabilizationIterations(){return Vw(this.ptr)>>>0}get minIslandSize(){return Ww(this.ptr)>>>0}get maxCcdSubsteps(){return jw(this.ptr)>>>0}set dt(e){du(this.ptr,e)}set erp(e){pu(this.ptr,e)}set allowedLinearError(e){Xw(this.ptr,e)}set predictionDistance(e){Yw(this.ptr,e)}set maxVelocityIterations(e){qw(this.ptr,e)}set maxVelocityFrictionIterations(e){Kw(this.ptr,e)}set maxStabilizationIterations(e){Jw(this.ptr,e)}set minIslandSize(e){Zw(this.ptr,e)}set maxCcdSubsteps(e){Qw(this.ptr,e)}}class vi{static __wrap(e){const t=Object.create(vi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();$w(e)}constructor(){const e=ex();return vi.__wrap(e)}forEachActiveRigidBodyHandle(e){try{tx(this.ptr,ht(e))}finally{Ye[at++]=void 0}}}class Ga{static __wrap(e){const t=Object.create(Ga.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();L0(e)}constructor(e){const t=I0(e);return Ga.__wrap(t)}up(){const e=U0(this.ptr);return O.__wrap(e)}setUp(e){R(e,O),D0(this.ptr,e.ptr)}offset(){return N0(this.ptr)}setOffset(e){O0(this.ptr,e)}slideEnabled(){return F0(this.ptr)!==0}setSlideEnabled(e){B0(this.ptr,e)}autostepMaxHeight(){try{const i=ke(-16);H0(i,this.ptr);var e=et()[i/4+0],t=Yi()[i/4+1];return e===0?void 0:t}finally{ke(16)}}autostepMinWidth(){try{const i=ke(-16);z0(i,this.ptr);var e=et()[i/4+0],t=Yi()[i/4+1];return e===0?void 0:t}finally{ke(16)}}autostepIncludesDynamicBodies(){const e=k0(this.ptr);return e===16777215?void 0:e!==0}autostepEnabled(){return G0(this.ptr)!==0}enableAutostep(e,t,i){V0(this.ptr,e,t,i)}disableAutostep(){W0(this.ptr)}maxSlopeClimbAngle(){return j0(this.ptr)}setMaxSlopeClimbAngle(e){X0(this.ptr,e)}minSlopeSlideAngle(){return Y0(this.ptr)}setMinSlopeSlideAngle(e){q0(this.ptr,e)}snapToGroundDistance(){try{const i=ke(-16);K0(i,this.ptr);var e=et()[i/4+0],t=Yi()[i/4+1];return e===0?void 0:t}finally{ke(16)}}enableSnapToGround(e){J0(this.ptr,e)}disableSnapToGround(){Z0(this.ptr)}snapToGroundEnabled(){return Q0(this.ptr)!==0}computeColliderMovement(e,t,i,r,a,s,o,l,c,h,u){try{R(t,pt),R(i,ut),R(r,Gn),R(s,O),$0(this.ptr,e,t.ptr,i.ptr,r.ptr,a,s.ptr,o,!we(l),we(l)?0:l,c,!we(h),we(h)?0:h,ht(u))}finally{Ye[at++]=void 0}}computedMovement(){const e=Qa(this.ptr);return O.__wrap(e)}computedGrounded(){return Qo(this.ptr)!==0}numComputedCollisions(){return ew(this.ptr)>>>0}computedCollision(e,t){return R(t,kn),tw(this.ptr,e,t.ptr)!==0}}class wi{static __wrap(e){const t=Object.create(wi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();_x(e)}jointType(e){return ox(this.ptr,e)>>>0}jointFrameX1(e){const t=lx(this.ptr,e);return Fe.__wrap(t)}jointFrameX2(e){const t=cx(this.ptr,e);return Fe.__wrap(t)}jointAnchor1(e){const t=hx(this.ptr,e);return O.__wrap(t)}jointAnchor2(e){const t=ux(this.ptr,e);return O.__wrap(t)}jointContactsEnabled(e){return dx(this.ptr,e)!==0}jointSetContactsEnabled(e,t){px(this.ptr,e,t)}jointLimitsEnabled(e,t){return mx(this.ptr,e,t)!==0}jointLimitsMin(e,t){return fx(this.ptr,e,t)}jointLimitsMax(e,t){return gx(this.ptr,e,t)}constructor(){const e=vx();return wi.__wrap(e)}createJoint(e,t,i,r){return R(e,Qt),wx(this.ptr,e.ptr,t,i,r)}remove(e,t){xx(this.ptr,e,t)}contains(e){return yx(this.ptr,e)!==0}forEachJointHandle(e){try{Sx(this.ptr,ht(e))}finally{Ye[at++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{Mx(this.ptr,e,ht(t))}finally{Ye[at++]=void 0}}}class Oi{static __wrap(e){const t=Object.create(Oi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();sM(e)}constructor(){const e=oM();return Oi.__wrap(e)}contacts_with(e,t){lM(this.ptr,e,wt(t))}contact_pair(e,t){const i=cM(this.ptr,e,t);return i===0?void 0:Ko.__wrap(i)}intersections_with(e,t){hM(this.ptr,e,wt(t))}intersection_pair(e,t){return uM(this.ptr,e,t)!==0}}class Va{static __wrap(e){const t=Object.create(Va.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();nE(e)}constructor(){const e=aE();return Va.__wrap(e)}step(e,t,i,r,a,s,o,l,c,h){R(e,O),R(t,Ki),R(i,vi),R(r,qi),R(a,Oi),R(s,pt),R(o,ut),R(l,_i),R(c,wi),R(h,_n),sE(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a.ptr,s.ptr,o.ptr,l.ptr,c.ptr,h.ptr)}stepWithEvents(e,t,i,r,a,s,o,l,c,h,u,d,m,_){R(e,O),R(t,Ki),R(i,vi),R(r,qi),R(a,Oi),R(s,pt),R(o,ut),R(l,_i),R(c,wi),R(h,_n),R(u,yl),oE(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a.ptr,s.ptr,o.ptr,l.ptr,c.ptr,h.ptr,u.ptr,wt(d),wt(m),wt(_))}}class Wa{static __wrap(e){const t=Object.create(Wa.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();BM(e)}colliderHandle(){return HM(this.ptr)}point(){const e=Qa(this.ptr);return O.__wrap(e)}isInside(){return Qo(this.ptr)!==0}featureType(){return zM(this.ptr)>>>0}featureId(){try{const i=ke(-16);kM(i,this.ptr);var e=et()[i/4+0],t=et()[i/4+1];return e===0?void 0:t>>>0}finally{ke(16)}}}class ja{static __wrap(e){const t=Object.create(ja.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();FM(e)}point(){const e=Qa(this.ptr);return O.__wrap(e)}isInside(){return Qo(this.ptr)!==0}}class Gn{static __wrap(e){const t=Object.create(Gn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();lE(e)}constructor(){const e=cE();return Gn.__wrap(e)}update(e,t){R(e,pt),R(t,ut),hE(this.ptr,e.ptr,t.ptr)}castRay(e,t,i,r,a,s,o,l,c,h,u){try{R(e,pt),R(t,ut),R(i,O),R(r,O);const d=uE(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a,s,o,!we(l),we(l)?0:l,!we(c),we(c)?0:c,!we(h),we(h)?0:h,ht(u));return d===0?void 0:Zo.__wrap(d)}finally{Ye[at++]=void 0}}castRayAndGetNormal(e,t,i,r,a,s,o,l,c,h,u){try{R(e,pt),R(t,ut),R(i,O),R(r,O);const d=dE(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a,s,o,!we(l),we(l)?0:l,!we(c),we(c)?0:c,!we(h),we(h)?0:h,ht(u));return d===0?void 0:Xa.__wrap(d)}finally{Ye[at++]=void 0}}intersectionsWithRay(e,t,i,r,a,s,o,l,c,h,u,d){try{R(e,pt),R(t,ut),R(i,O),R(r,O),pE(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a,s,ht(o),l,!we(c),we(c)?0:c,!we(h),we(h)?0:h,!we(u),we(u)?0:u,ht(d))}finally{Ye[at++]=void 0,Ye[at++]=void 0}}intersectionWithShape(e,t,i,r,a,s,o,l,c,h){try{const m=ke(-16);R(e,pt),R(t,ut),R(i,O),R(r,Fe),R(a,Me),mE(m,this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a.ptr,s,!we(o),we(o)?0:o,!we(l),we(l)?0:l,!we(c),we(c)?0:c,ht(h));var u=et()[m/4+0],d=Ba()[m/8+1];return u===0?void 0:d}finally{ke(16),Ye[at++]=void 0}}projectPoint(e,t,i,r,a,s,o,l,c){try{R(e,pt),R(t,ut),R(i,O);const h=fE(this.ptr,e.ptr,t.ptr,i.ptr,r,a,!we(s),we(s)?0:s,!we(o),we(o)?0:o,!we(l),we(l)?0:l,ht(c));return h===0?void 0:Wa.__wrap(h)}finally{Ye[at++]=void 0}}projectPointAndGetFeature(e,t,i,r,a,s,o,l){try{R(e,pt),R(t,ut),R(i,O);const c=gE(this.ptr,e.ptr,t.ptr,i.ptr,r,!we(a),we(a)?0:a,!we(s),we(s)?0:s,!we(o),we(o)?0:o,ht(l));return c===0?void 0:Wa.__wrap(c)}finally{Ye[at++]=void 0}}intersectionsWithPoint(e,t,i,r,a,s,o,l,c){try{R(e,pt),R(t,ut),R(i,O),_E(this.ptr,e.ptr,t.ptr,i.ptr,ht(r),a,!we(s),we(s)?0:s,!we(o),we(o)?0:o,!we(l),we(l)?0:l,ht(c))}finally{Ye[at++]=void 0,Ye[at++]=void 0}}castShape(e,t,i,r,a,s,o,l,c,h,u,d,m){try{R(e,pt),R(t,ut),R(i,O),R(r,Fe),R(a,O),R(s,Me);const _=vE(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a.ptr,s.ptr,o,l,c,!we(h),we(h)?0:h,!we(u),we(u)?0:u,!we(d),we(d)?0:d,ht(m));return _===0?void 0:Ja.__wrap(_)}finally{Ye[at++]=void 0}}intersectionsWithShape(e,t,i,r,a,s,o,l,c,h,u){try{R(e,pt),R(t,ut),R(i,O),R(r,Fe),R(a,Me),wE(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a.ptr,ht(s),o,!we(l),we(l)?0:l,!we(c),we(c)?0:c,!we(h),we(h)?0:h,ht(u))}finally{Ye[at++]=void 0,Ye[at++]=void 0}}collidersWithAabbIntersectingAabb(e,t,i){try{R(e,O),R(t,O),xE(this.ptr,e.ptr,t.ptr,ht(i))}finally{Ye[at++]=void 0}}}class Xa{static __wrap(e){const t=Object.create(Xa.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();DE(e)}colliderHandle(){return Wn(this.ptr)}normal(){const e=jM(this.ptr);return O.__wrap(e)}toi(){return XM(this.ptr)}featureType(){return YM(this.ptr)>>>0}featureId(){try{const i=ke(-16);qM(i,this.ptr);var e=et()[i/4+0],t=et()[i/4+1];return e===0?void 0:t>>>0}finally{ke(16)}}}class Zo{static __wrap(e){const t=Object.create(Zo.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();KM(e)}colliderHandle(){return Wn(this.ptr)}toi(){return Sr(this.ptr)}}class Ya{static __wrap(e){const t=Object.create(Ya.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();GM(e)}normal(){const e=$a(this.ptr);return O.__wrap(e)}toi(){return Sr(this.ptr)}featureType(){return VM(this.ptr)>>>0}featureId(){try{const i=ke(-16);WM(i,this.ptr);var e=et()[i/4+0],t=et()[i/4+1];return e===0?void 0:t>>>0}finally{ke(16)}}}class pt{static __wrap(e){const t=Object.create(pt.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Iy(e)}rbTranslation(e){const t=bx(this.ptr,e);return O.__wrap(t)}rbRotation(e){const t=Ex(this.ptr,e);return Fe.__wrap(t)}rbSleep(e){Tx(this.ptr,e)}rbIsSleeping(e){return Ax(this.ptr,e)!==0}rbIsMoving(e){return Rx(this.ptr,e)!==0}rbNextTranslation(e){const t=Cx(this.ptr,e);return O.__wrap(t)}rbNextRotation(e){const t=Px(this.ptr,e);return Fe.__wrap(t)}rbSetTranslation(e,t,i,r,a){Lx(this.ptr,e,t,i,r,a)}rbSetRotation(e,t,i,r,a,s){Ix(this.ptr,e,t,i,r,a,s)}rbSetLinvel(e,t,i){R(t,O),Ux(this.ptr,e,t.ptr,i)}rbSetAngvel(e,t,i){R(t,O),Dx(this.ptr,e,t.ptr,i)}rbSetNextKinematicTranslation(e,t,i,r){Nx(this.ptr,e,t,i,r)}rbSetNextKinematicRotation(e,t,i,r,a){Ox(this.ptr,e,t,i,r,a)}rbRecomputeMassPropertiesFromColliders(e,t){R(t,ut),Fx(this.ptr,e,t.ptr)}rbSetAdditionalMass(e,t,i){Bx(this.ptr,e,t,i)}rbSetAdditionalMassProperties(e,t,i,r,a,s){R(i,O),R(r,O),R(a,Fe),Hx(this.ptr,e,t,i.ptr,r.ptr,a.ptr,s)}rbLinvel(e){const t=zx(this.ptr,e);return O.__wrap(t)}rbAngvel(e){const t=kx(this.ptr,e);return O.__wrap(t)}rbLockTranslations(e,t,i){Gx(this.ptr,e,t,i)}rbSetEnabledTranslations(e,t,i,r,a){Vx(this.ptr,e,t,i,r,a)}rbLockRotations(e,t,i){Wx(this.ptr,e,t,i)}rbSetEnabledRotations(e,t,i,r,a){jx(this.ptr,e,t,i,r,a)}rbDominanceGroup(e){return Xx(this.ptr,e)}rbSetDominanceGroup(e,t){Yx(this.ptr,e,t)}rbEnableCcd(e,t){qx(this.ptr,e,t)}rbMass(e){return Kx(this.ptr,e)}rbInvMass(e){return Jx(this.ptr,e)}rbEffectiveInvMass(e){const t=Zx(this.ptr,e);return O.__wrap(t)}rbLocalCom(e){const t=Qx(this.ptr,e);return O.__wrap(t)}rbWorldCom(e){const t=$x(this.ptr,e);return O.__wrap(t)}rbInvPrincipalInertiaSqrt(e){const t=ey(this.ptr,e);return O.__wrap(t)}rbPrincipalInertiaLocalFrame(e){const t=ty(this.ptr,e);return Fe.__wrap(t)}rbPrincipalInertia(e){const t=iy(this.ptr,e);return O.__wrap(t)}rbEffectiveWorldInvInertiaSqrt(e){const t=ry(this.ptr,e);return qa.__wrap(t)}rbEffectiveAngularInertia(e){const t=ny(this.ptr,e);return qa.__wrap(t)}rbWakeUp(e){ay(this.ptr,e)}rbIsCcdEnabled(e){return sy(this.ptr,e)!==0}rbNumColliders(e){return oy(this.ptr,e)>>>0}rbCollider(e,t){return ly(this.ptr,e,t)}rbBodyType(e){return cy(this.ptr,e)>>>0}rbSetBodyType(e,t,i){hy(this.ptr,e,t,i)}rbIsFixed(e){return uy(this.ptr,e)!==0}rbIsKinematic(e){return dy(this.ptr,e)!==0}rbIsDynamic(e){return py(this.ptr,e)!==0}rbLinearDamping(e){return my(this.ptr,e)}rbAngularDamping(e){return fy(this.ptr,e)}rbSetLinearDamping(e,t){gy(this.ptr,e,t)}rbSetAngularDamping(e,t){_y(this.ptr,e,t)}rbSetEnabled(e,t){vy(this.ptr,e,t)}rbIsEnabled(e){return wy(this.ptr,e)!==0}rbGravityScale(e){return xy(this.ptr,e)}rbSetGravityScale(e,t,i){yy(this.ptr,e,t,i)}rbResetForces(e,t){Sy(this.ptr,e,t)}rbResetTorques(e,t){My(this.ptr,e,t)}rbAddForce(e,t,i){R(t,O),by(this.ptr,e,t.ptr,i)}rbApplyImpulse(e,t,i){R(t,O),Ey(this.ptr,e,t.ptr,i)}rbAddTorque(e,t,i){R(t,O),Ty(this.ptr,e,t.ptr,i)}rbApplyTorqueImpulse(e,t,i){R(t,O),Ay(this.ptr,e,t.ptr,i)}rbAddForceAtPoint(e,t,i,r){R(t,O),R(i,O),Ry(this.ptr,e,t.ptr,i.ptr,r)}rbApplyImpulseAtPoint(e,t,i,r){R(t,O),R(i,O),Cy(this.ptr,e,t.ptr,i.ptr,r)}rbUserData(e){return Py(this.ptr,e)>>>0}rbSetUserData(e,t){Ly(this.ptr,e,t)}constructor(){const e=Uy();return pt.__wrap(e)}createRigidBody(e,t,i,r,a,s,o,l,c,h,u,d,m,_,v,f,p,M,x,A,b,C,D,Y){return R(t,O),R(i,Fe),R(o,O),R(l,O),R(c,O),R(h,O),R(u,Fe),Dy(this.ptr,e,t.ptr,i.ptr,r,a,s,o.ptr,l.ptr,c.ptr,h.ptr,u.ptr,d,m,_,v,f,p,M,x,A,b,C,D,Y)}remove(e,t,i,r,a){R(t,vi),R(i,ut),R(r,_i),R(a,wi),Ny(this.ptr,e,t.ptr,i.ptr,r.ptr,a.ptr)}len(){return Oy(this.ptr)>>>0}contains(e){return Fy(this.ptr,e)!==0}forEachRigidBodyHandle(e){try{By(this.ptr,ht(e))}finally{Ye[at++]=void 0}}propagateModifiedBodyPositionsToColliders(e){R(e,ut),Hy(this.ptr,e.ptr)}}class Fe{static __wrap(e){const t=Object.create(Fe.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();NE(e)}constructor(e,t,i,r){const a=Pb(e,t,i,r);return Fe.__wrap(a)}static identity(){const e=Lb();return Fe.__wrap(e)}get x(){return es(this.ptr)}get y(){return gu(this.ptr)}get z(){return Sr(this.ptr)}get w(){return Ib(this.ptr)}}class qa{static __wrap(e){const t=Object.create(qa.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();FE(e)}elements(){const e=Gb(this.ptr);return zn(e)}}class Ka{static __wrap(e){const t=Object.create(Ka.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();HE(e)}constructor(){const e=BE();return Ka.__wrap(e)}serializeAll(e,t,i,r,a,s,o,l,c){R(e,O),R(t,Ki),R(i,vi),R(r,qi),R(a,Oi),R(s,pt),R(o,ut),R(l,_i),R(c,wi);const h=LE(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a.ptr,s.ptr,o.ptr,l.ptr,c.ptr);return zn(h)}deserializeAll(e){const t=IE(this.ptr,wt(e));return t===0?void 0:Jo.__wrap(t)}}class Me{static __wrap(e){const t=Object.create(Me.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();JM(e)}static cuboid(e,t,i){const r=ZM(e,t,i);return Me.__wrap(r)}static roundCuboid(e,t,i,r){const a=QM(e,t,i,r);return Me.__wrap(a)}static ball(e){const t=$M(e);return Me.__wrap(t)}static halfspace(e){R(e,O);const t=eb(e.ptr);return Me.__wrap(t)}static capsule(e,t){const i=tb(e,t);return Me.__wrap(i)}static cylinder(e,t){const i=ib(e,t);return Me.__wrap(i)}static roundCylinder(e,t,i){const r=rb(e,t,i);return Me.__wrap(r)}static cone(e,t){const i=nb(e,t);return Me.__wrap(i)}static roundCone(e,t,i){const r=ab(e,t,i);return Me.__wrap(r)}static polyline(e,t){const i=yr(e,oi),r=Yt,a=Ha(t,oi),s=sb(i,r,a,Yt);return Me.__wrap(s)}static trimesh(e,t){const i=yr(e,oi),r=Yt,a=Ha(t,oi),s=ob(i,r,a,Yt);return Me.__wrap(s)}static heightfield(e,t,i,r){const a=yr(i,oi),s=Yt;R(r,O);const o=lb(e,t,a,s,r.ptr);return Me.__wrap(o)}static segment(e,t){R(e,O),R(t,O);const i=cb(e.ptr,t.ptr);return Me.__wrap(i)}static triangle(e,t,i){R(e,O),R(t,O),R(i,O);const r=hb(e.ptr,t.ptr,i.ptr);return Me.__wrap(r)}static roundTriangle(e,t,i,r){R(e,O),R(t,O),R(i,O);const a=ub(e.ptr,t.ptr,i.ptr,r);return Me.__wrap(a)}static convexHull(e){const t=yr(e,oi),i=db(t,Yt);return i===0?void 0:Me.__wrap(i)}static roundConvexHull(e,t){const i=yr(e,oi),r=pb(i,Yt,t);return r===0?void 0:Me.__wrap(r)}static convexMesh(e,t){const i=yr(e,oi),r=Yt,a=Ha(t,oi),s=mb(i,r,a,Yt);return s===0?void 0:Me.__wrap(s)}static roundConvexMesh(e,t,i){const r=yr(e,oi),a=Yt,s=Ha(t,oi),o=fb(r,a,s,Yt,i);return o===0?void 0:Me.__wrap(o)}castShape(e,t,i,r,a,s,o,l,c){R(e,O),R(t,Fe),R(i,O),R(r,Me),R(a,O),R(s,Fe),R(o,O);const h=gb(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a.ptr,s.ptr,o.ptr,l,c);return h===0?void 0:Za.__wrap(h)}intersectsShape(e,t,i,r,a){return R(e,O),R(t,Fe),R(i,Me),R(r,O),R(a,Fe),_b(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a.ptr)!==0}contactShape(e,t,i,r,a,s){R(e,O),R(t,Fe),R(i,Me),R(r,O),R(a,Fe);const o=vb(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a.ptr,s);return o===0?void 0:Vn.__wrap(o)}containsPoint(e,t,i){return R(e,O),R(t,Fe),R(i,O),wb(this.ptr,e.ptr,t.ptr,i.ptr)!==0}projectPoint(e,t,i,r){R(e,O),R(t,Fe),R(i,O);const a=xb(this.ptr,e.ptr,t.ptr,i.ptr,r);return ja.__wrap(a)}intersectsRay(e,t,i,r,a){return R(e,O),R(t,Fe),R(i,O),R(r,O),yb(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a)!==0}castRay(e,t,i,r,a,s){return R(e,O),R(t,Fe),R(i,O),R(r,O),Sb(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a,s)}castRayAndGetNormal(e,t,i,r,a,s){R(e,O),R(t,Fe),R(i,O),R(r,O);const o=Mb(this.ptr,e.ptr,t.ptr,i.ptr,r.ptr,a,s);return o===0?void 0:Ya.__wrap(o)}}class Ja{static __wrap(e){const t=Object.create(Ja.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Rb(e)}colliderHandle(){return Wn(this.ptr)}toi(){return Sr(this.ptr)}witness1(){const e=$a(this.ptr);return O.__wrap(e)}witness2(){const e=fu(this.ptr);return O.__wrap(e)}normal1(){const e=$o(this.ptr);return O.__wrap(e)}normal2(){const e=Cb(this.ptr);return O.__wrap(e)}}class Vn{static __wrap(e){const t=Object.create(Vn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();nM(e)}distance(){return aM(this.ptr)}point1(){const e=Qa(this.ptr);return O.__wrap(e)}point2(){const e=$a(this.ptr);return O.__wrap(e)}normal1(){const e=fu(this.ptr);return O.__wrap(e)}normal2(){const e=$o(this.ptr);return O.__wrap(e)}}class Za{static __wrap(e){const t=Object.create(Za.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();bb(e)}toi(){return es(this.ptr)}witness1(){const e=Eb(this.ptr);return O.__wrap(e)}witness2(){const e=_u(this.ptr);return O.__wrap(e)}normal1(){const e=Tb(this.ptr);return O.__wrap(e)}normal2(){const e=Ab(this.ptr);return O.__wrap(e)}}class O{static __wrap(e){const t=Object.create(O.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();OE(e)}static zero(){const e=Ub();return O.__wrap(e)}constructor(e,t,i){const r=Db(e,t,i);return O.__wrap(r)}get x(){return es(this.ptr)}set x(e){du(this.ptr,e)}get y(){return gu(this.ptr)}set y(e){Nb(this.ptr,e)}get z(){return Sr(this.ptr)}set z(e){pu(this.ptr,e)}xyz(){const e=Ob(this.ptr);return O.__wrap(e)}yxz(){const e=Fb(this.ptr);return O.__wrap(e)}zxy(){const e=Bb(this.ptr);return O.__wrap(e)}xzy(){const e=Hb(this.ptr);return O.__wrap(e)}yzx(){const e=zb(this.ptr);return O.__wrap(e)}zyx(){const e=kb(this.ptr);return O.__wrap(e)}}function l0(n){zn(n)}function c0(n){return wt(n)}function h0(n,e){const t=Qe(e),i=typeof t=="number"?t:void 0;Ba()[n/8+1]=we(i)?0:i,et()[n/4+0]=!we(i)}function u0(n){const e=Qe(n);return typeof e=="boolean"?e?1:0:2}function d0(n){return typeof Qe(n)=="function"}function p0(n){const e=Xa.__wrap(n);return wt(e)}function m0(n){const e=Yo.__wrap(n);return wt(e)}function f0(){return Xo(function(n,e,t){const i=Qe(n).call(Qe(e),Qe(t));return wt(i)},arguments)}function g0(){return Xo(function(n,e,t,i){const r=Qe(n).call(Qe(e),Qe(t),Qe(i));return wt(r)},arguments)}function _0(){return Xo(function(n,e,t,i,r){const a=Qe(n).call(Qe(e),Qe(t),Qe(i),Qe(r));return wt(a)},arguments)}function v0(n,e,t,i){const r=Qe(n).bind(Qe(e),Qe(t),Qe(i));return wt(r)}function w0(n){const e=Qe(n).buffer;return wt(e)}function x0(n,e,t){const i=new Uint8Array(Qe(n),e>>>0,t>>>0);return wt(i)}function y0(n){const e=new Uint8Array(Qe(n));return wt(e)}function S0(n,e,t){Qe(n).set(Qe(e),t>>>0)}function M0(n){return Qe(n).length}function b0(n,e,t){const i=new Float32Array(Qe(n),e>>>0,t>>>0);return wt(i)}function E0(n,e,t){Qe(n).set(Qe(e),t>>>0)}function T0(n){return Qe(n).length}function A0(n){const e=new Float32Array(n>>>0);return wt(e)}function R0(n,e){throw new Error(cu(n,e))}function C0(){return wt(vn)}URL=globalThis.URL;const g=await r0({"./rapier_wasm3d_bg.js":{__wbindgen_object_drop_ref:l0,__wbindgen_number_new:c0,__wbindgen_number_get:h0,__wbindgen_boolean_get:u0,__wbindgen_is_function:d0,__wbg_rawraycolliderintersection_new:p0,__wbg_rawcontactforceevent_new:m0,__wbg_call_168da88779e35f61:f0,__wbg_call_3999bee59e9f7719:g0,__wbg_call_e1f72c051cdab859:_0,__wbg_bind_10dfe70e95d2a480:v0,__wbg_buffer_3f3d764d4747d564:w0,__wbg_newwithbyteoffsetandlength_d9aa266703cb98be:x0,__wbg_new_8c3f0052272a457a:y0,__wbg_set_83db9690f9353e79:S0,__wbg_length_9e1ae1900cb0fbd5:M0,__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4:b0,__wbg_set_0e0314cf6675c1b9:E0,__wbg_length_9a2deed95d22668d:T0,__wbg_newwithlength_a7168e4a1e8f5e12:A0,__wbindgen_throw:R0,__wbindgen_memory:C0}},i0),vn=g.memory,P0=g.version,L0=g.__wbg_rawkinematiccharactercontroller_free,I0=g.rawkinematiccharactercontroller_new,U0=g.rawkinematiccharactercontroller_up,D0=g.rawkinematiccharactercontroller_setUp,N0=g.rawkinematiccharactercontroller_offset,O0=g.rawkinematiccharactercontroller_setOffset,F0=g.rawkinematiccharactercontroller_slideEnabled,B0=g.rawkinematiccharactercontroller_setSlideEnabled,H0=g.rawkinematiccharactercontroller_autostepMaxHeight,z0=g.rawkinematiccharactercontroller_autostepMinWidth,k0=g.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,G0=g.rawkinematiccharactercontroller_autostepEnabled,V0=g.rawkinematiccharactercontroller_enableAutostep,W0=g.rawkinematiccharactercontroller_disableAutostep,j0=g.rawkinematiccharactercontroller_maxSlopeClimbAngle,X0=g.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,Y0=g.rawkinematiccharactercontroller_minSlopeSlideAngle,q0=g.rawkinematiccharactercontroller_setMinSlopeSlideAngle,K0=g.rawkinematiccharactercontroller_snapToGroundDistance,J0=g.rawkinematiccharactercontroller_enableSnapToGround,Z0=g.rawkinematiccharactercontroller_disableSnapToGround,Q0=g.rawkinematiccharactercontroller_snapToGroundEnabled,$0=g.rawkinematiccharactercontroller_computeColliderMovement,Qa=g.rawkinematiccharactercontroller_computedMovement,Qo=g.rawkinematiccharactercontroller_computedGrounded,ew=g.rawkinematiccharactercontroller_numComputedCollisions,tw=g.rawkinematiccharactercontroller_computedCollision,iw=g.__wbg_rawcharactercollision_free,rw=g.rawcharactercollision_new,Wn=g.rawcharactercollision_handle,nw=g.rawcharactercollision_translationApplied,aw=g.rawcharactercollision_translationRemaining,Sr=g.rawcharactercollision_toi,$a=g.rawcharactercollision_worldWitness1,sw=g.rawcharactercollision_worldWitness2,$o=g.rawcharactercollision_worldNormal1,ow=g.rawcharactercollision_worldNormal2,lw=g.__wbg_rawccdsolver_free,cw=g.rawccdsolver_new,hw=g.rawimpulsejointset_jointType,uw=g.rawimpulsejointset_jointBodyHandle1,dw=g.rawimpulsejointset_jointBodyHandle2,pw=g.rawimpulsejointset_jointFrameX1,mw=g.rawimpulsejointset_jointFrameX2,fw=g.rawimpulsejointset_jointAnchor1,gw=g.rawimpulsejointset_jointAnchor2,_w=g.rawimpulsejointset_jointSetAnchor1,vw=g.rawimpulsejointset_jointSetAnchor2,ww=g.rawimpulsejointset_jointContactsEnabled,xw=g.rawimpulsejointset_jointSetContactsEnabled,yw=g.rawimpulsejointset_jointLimitsEnabled,Sw=g.rawimpulsejointset_jointLimitsMin,Mw=g.rawimpulsejointset_jointLimitsMax,bw=g.rawimpulsejointset_jointSetLimits,Ew=g.rawimpulsejointset_jointConfigureMotorModel,Tw=g.rawimpulsejointset_jointConfigureMotorVelocity,Aw=g.rawimpulsejointset_jointConfigureMotorPosition,Rw=g.rawimpulsejointset_jointConfigureMotor,Cw=g.__wbg_rawimpulsejointset_free,Pw=g.rawimpulsejointset_new,Lw=g.rawimpulsejointset_createJoint,Iw=g.rawimpulsejointset_remove,Uw=g.rawimpulsejointset_len,Dw=g.rawimpulsejointset_contains,Nw=g.rawimpulsejointset_forEachJointHandle,Ow=g.rawimpulsejointset_forEachJointAttachedToRigidBody,Fw=g.__wbg_rawintegrationparameters_free,Bw=g.rawintegrationparameters_new,es=g.rawintegrationparameters_dt,Hw=g.rawintegrationparameters_allowedLinearError,zw=g.rawintegrationparameters_predictionDistance,kw=g.rawintegrationparameters_maxVelocityIterations,Gw=g.rawintegrationparameters_maxVelocityFrictionIterations,Vw=g.rawintegrationparameters_maxStabilizationIterations,Ww=g.rawintegrationparameters_minIslandSize,jw=g.rawintegrationparameters_maxCcdSubsteps,du=g.rawintegrationparameters_set_dt,pu=g.rawintegrationparameters_set_erp,Xw=g.rawintegrationparameters_set_allowedLinearError,Yw=g.rawintegrationparameters_set_predictionDistance,qw=g.rawintegrationparameters_set_maxVelocityIterations,Kw=g.rawintegrationparameters_set_maxVelocityFrictionIterations,Jw=g.rawintegrationparameters_set_maxStabilizationIterations,Zw=g.rawintegrationparameters_set_minIslandSize,Qw=g.rawintegrationparameters_set_maxCcdSubsteps,$w=g.__wbg_rawislandmanager_free,ex=g.rawislandmanager_new,tx=g.rawislandmanager_forEachActiveRigidBodyHandle,ix=g.__wbg_rawgenericjoint_free,rx=g.rawgenericjoint_spherical,nx=g.rawgenericjoint_prismatic,ax=g.rawgenericjoint_fixed,sx=g.rawgenericjoint_revolute,ox=g.rawmultibodyjointset_jointType,lx=g.rawmultibodyjointset_jointFrameX1,cx=g.rawmultibodyjointset_jointFrameX2,hx=g.rawmultibodyjointset_jointAnchor1,ux=g.rawmultibodyjointset_jointAnchor2,dx=g.rawmultibodyjointset_jointContactsEnabled,px=g.rawmultibodyjointset_jointSetContactsEnabled,mx=g.rawmultibodyjointset_jointLimitsEnabled,fx=g.rawmultibodyjointset_jointLimitsMin,gx=g.rawmultibodyjointset_jointLimitsMax,_x=g.__wbg_rawmultibodyjointset_free,vx=g.rawmultibodyjointset_new,wx=g.rawmultibodyjointset_createJoint,xx=g.rawmultibodyjointset_remove,yx=g.rawmultibodyjointset_contains,Sx=g.rawmultibodyjointset_forEachJointHandle,Mx=g.rawmultibodyjointset_forEachJointAttachedToRigidBody,bx=g.rawrigidbodyset_rbTranslation,Ex=g.rawrigidbodyset_rbRotation,Tx=g.rawrigidbodyset_rbSleep,Ax=g.rawrigidbodyset_rbIsSleeping,Rx=g.rawrigidbodyset_rbIsMoving,Cx=g.rawrigidbodyset_rbNextTranslation,Px=g.rawrigidbodyset_rbNextRotation,Lx=g.rawrigidbodyset_rbSetTranslation,Ix=g.rawrigidbodyset_rbSetRotation,Ux=g.rawrigidbodyset_rbSetLinvel,Dx=g.rawrigidbodyset_rbSetAngvel,Nx=g.rawrigidbodyset_rbSetNextKinematicTranslation,Ox=g.rawrigidbodyset_rbSetNextKinematicRotation,Fx=g.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,Bx=g.rawrigidbodyset_rbSetAdditionalMass,Hx=g.rawrigidbodyset_rbSetAdditionalMassProperties,zx=g.rawrigidbodyset_rbLinvel,kx=g.rawrigidbodyset_rbAngvel,Gx=g.rawrigidbodyset_rbLockTranslations,Vx=g.rawrigidbodyset_rbSetEnabledTranslations,Wx=g.rawrigidbodyset_rbLockRotations,jx=g.rawrigidbodyset_rbSetEnabledRotations,Xx=g.rawrigidbodyset_rbDominanceGroup,Yx=g.rawrigidbodyset_rbSetDominanceGroup,qx=g.rawrigidbodyset_rbEnableCcd,Kx=g.rawrigidbodyset_rbMass,Jx=g.rawrigidbodyset_rbInvMass,Zx=g.rawrigidbodyset_rbEffectiveInvMass,Qx=g.rawrigidbodyset_rbLocalCom,$x=g.rawrigidbodyset_rbWorldCom,ey=g.rawrigidbodyset_rbInvPrincipalInertiaSqrt,ty=g.rawrigidbodyset_rbPrincipalInertiaLocalFrame,iy=g.rawrigidbodyset_rbPrincipalInertia,ry=g.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt,ny=g.rawrigidbodyset_rbEffectiveAngularInertia,ay=g.rawrigidbodyset_rbWakeUp,sy=g.rawrigidbodyset_rbIsCcdEnabled,oy=g.rawrigidbodyset_rbNumColliders,ly=g.rawrigidbodyset_rbCollider,cy=g.rawrigidbodyset_rbBodyType,hy=g.rawrigidbodyset_rbSetBodyType,uy=g.rawrigidbodyset_rbIsFixed,dy=g.rawrigidbodyset_rbIsKinematic,py=g.rawrigidbodyset_rbIsDynamic,my=g.rawrigidbodyset_rbLinearDamping,fy=g.rawrigidbodyset_rbAngularDamping,gy=g.rawrigidbodyset_rbSetLinearDamping,_y=g.rawrigidbodyset_rbSetAngularDamping,vy=g.rawrigidbodyset_rbSetEnabled,wy=g.rawrigidbodyset_rbIsEnabled,xy=g.rawrigidbodyset_rbGravityScale,yy=g.rawrigidbodyset_rbSetGravityScale,Sy=g.rawrigidbodyset_rbResetForces,My=g.rawrigidbodyset_rbResetTorques,by=g.rawrigidbodyset_rbAddForce,Ey=g.rawrigidbodyset_rbApplyImpulse,Ty=g.rawrigidbodyset_rbAddTorque,Ay=g.rawrigidbodyset_rbApplyTorqueImpulse,Ry=g.rawrigidbodyset_rbAddForceAtPoint,Cy=g.rawrigidbodyset_rbApplyImpulseAtPoint,Py=g.rawrigidbodyset_rbUserData,Ly=g.rawrigidbodyset_rbSetUserData,Iy=g.__wbg_rawrigidbodyset_free,Uy=g.rawrigidbodyset_new,Dy=g.rawrigidbodyset_createRigidBody,Ny=g.rawrigidbodyset_remove,Oy=g.rawrigidbodyset_len,Fy=g.rawrigidbodyset_contains,By=g.rawrigidbodyset_forEachRigidBodyHandle,Hy=g.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,zy=g.__wbg_rawbroadphase_free,ky=g.rawbroadphase_new,Gy=g.rawcolliderset_coTranslation,Vy=g.rawcolliderset_coRotation,Wy=g.rawcolliderset_coSetTranslation,jy=g.rawcolliderset_coSetTranslationWrtParent,Xy=g.rawcolliderset_coSetRotation,Yy=g.rawcolliderset_coSetRotationWrtParent,qy=g.rawcolliderset_coIsSensor,Ky=g.rawcolliderset_coShapeType,Jy=g.rawcolliderset_coHalfspaceNormal,Zy=g.rawcolliderset_coHalfExtents,Qy=g.rawcolliderset_coSetHalfExtents,$y=g.rawcolliderset_coRadius,eS=g.rawcolliderset_coSetRadius,tS=g.rawcolliderset_coHalfHeight,iS=g.rawcolliderset_coSetHalfHeight,rS=g.rawcolliderset_coRoundRadius,nS=g.rawcolliderset_coSetRoundRadius,aS=g.rawcolliderset_coVertices,sS=g.rawcolliderset_coIndices,oS=g.rawcolliderset_coHeightfieldHeights,lS=g.rawcolliderset_coHeightfieldScale,cS=g.rawcolliderset_coHeightfieldNRows,hS=g.rawcolliderset_coHeightfieldNCols,uS=g.rawcolliderset_coParent,dS=g.rawcolliderset_coSetEnabled,pS=g.rawcolliderset_coIsEnabled,mS=g.rawcolliderset_coFriction,fS=g.rawcolliderset_coRestitution,gS=g.rawcolliderset_coDensity,_S=g.rawcolliderset_coMass,vS=g.rawcolliderset_coVolume,wS=g.rawcolliderset_coCollisionGroups,xS=g.rawcolliderset_coSolverGroups,yS=g.rawcolliderset_coActiveHooks,SS=g.rawcolliderset_coActiveCollisionTypes,MS=g.rawcolliderset_coActiveEvents,bS=g.rawcolliderset_coContactForceEventThreshold,ES=g.rawcolliderset_coContainsPoint,TS=g.rawcolliderset_coCastShape,AS=g.rawcolliderset_coCastCollider,RS=g.rawcolliderset_coIntersectsShape,CS=g.rawcolliderset_coContactShape,PS=g.rawcolliderset_coContactCollider,LS=g.rawcolliderset_coProjectPoint,IS=g.rawcolliderset_coIntersectsRay,US=g.rawcolliderset_coCastRay,DS=g.rawcolliderset_coCastRayAndGetNormal,NS=g.rawcolliderset_coSetSensor,OS=g.rawcolliderset_coSetRestitution,FS=g.rawcolliderset_coSetFriction,BS=g.rawcolliderset_coFrictionCombineRule,HS=g.rawcolliderset_coSetFrictionCombineRule,zS=g.rawcolliderset_coRestitutionCombineRule,kS=g.rawcolliderset_coSetRestitutionCombineRule,GS=g.rawcolliderset_coSetCollisionGroups,VS=g.rawcolliderset_coSetSolverGroups,WS=g.rawcolliderset_coSetActiveHooks,jS=g.rawcolliderset_coSetActiveEvents,XS=g.rawcolliderset_coSetActiveCollisionTypes,YS=g.rawcolliderset_coSetShape,qS=g.rawcolliderset_coSetContactForceEventThreshold,KS=g.rawcolliderset_coSetDensity,JS=g.rawcolliderset_coSetMass,ZS=g.rawcolliderset_coSetMassProperties,QS=g.__wbg_rawcolliderset_free,$S=g.rawcolliderset_new,eM=g.rawcolliderset_len,mu=g.rawcolliderset_contains,tM=g.rawcolliderset_createCollider,iM=g.rawcolliderset_remove,rM=g.rawcolliderset_forEachColliderHandle,nM=g.__wbg_rawshapecontact_free,aM=g.rawshapecontact_distance,sM=g.__wbg_rawnarrowphase_free,oM=g.rawnarrowphase_new,lM=g.rawnarrowphase_contacts_with,cM=g.rawnarrowphase_contact_pair,hM=g.rawnarrowphase_intersections_with,uM=g.rawnarrowphase_intersection_pair,dM=g.__wbg_rawcontactmanifold_free,pM=g.rawcontactpair_collider1,mM=g.rawcontactpair_collider2,fM=g.rawcontactpair_numContactManifolds,gM=g.rawcontactpair_contactManifold,_M=g.rawcontactmanifold_normal,vM=g.rawcontactmanifold_local_n1,wM=g.rawcontactmanifold_local_n2,xM=g.rawcontactmanifold_subshape1,yM=g.rawcontactmanifold_subshape2,SM=g.rawcontactmanifold_num_contacts,MM=g.rawcontactmanifold_contact_local_p1,bM=g.rawcontactmanifold_contact_local_p2,EM=g.rawcontactmanifold_contact_dist,TM=g.rawcontactmanifold_contact_fid1,AM=g.rawcontactmanifold_contact_fid2,RM=g.rawcontactmanifold_contact_impulse,CM=g.rawcontactmanifold_contact_tangent_impulse_x,PM=g.rawcontactmanifold_contact_tangent_impulse_y,LM=g.rawcontactmanifold_num_solver_contacts,IM=g.rawcontactmanifold_solver_contact_point,UM=g.rawcontactmanifold_solver_contact_dist,DM=g.rawcontactmanifold_solver_contact_friction,NM=g.rawcontactmanifold_solver_contact_restitution,OM=g.rawcontactmanifold_solver_contact_tangent_velocity,FM=g.__wbg_rawpointprojection_free,BM=g.__wbg_rawpointcolliderprojection_free,HM=g.rawpointcolliderprojection_colliderHandle,zM=g.rawpointcolliderprojection_featureType,kM=g.rawpointcolliderprojection_featureId,GM=g.__wbg_rawrayintersection_free,VM=g.rawrayintersection_featureType,WM=g.rawrayintersection_featureId,jM=g.rawraycolliderintersection_normal,XM=g.rawraycolliderintersection_toi,YM=g.rawraycolliderintersection_featureType,qM=g.rawraycolliderintersection_featureId,KM=g.__wbg_rawraycollidertoi_free,JM=g.__wbg_rawshape_free,ZM=g.rawshape_cuboid,QM=g.rawshape_roundCuboid,$M=g.rawshape_ball,eb=g.rawshape_halfspace,tb=g.rawshape_capsule,ib=g.rawshape_cylinder,rb=g.rawshape_roundCylinder,nb=g.rawshape_cone,ab=g.rawshape_roundCone,sb=g.rawshape_polyline,ob=g.rawshape_trimesh,lb=g.rawshape_heightfield,cb=g.rawshape_segment,hb=g.rawshape_triangle,ub=g.rawshape_roundTriangle,db=g.rawshape_convexHull,pb=g.rawshape_roundConvexHull,mb=g.rawshape_convexMesh,fb=g.rawshape_roundConvexMesh,gb=g.rawshape_castShape,_b=g.rawshape_intersectsShape,vb=g.rawshape_contactShape,wb=g.rawshape_containsPoint,xb=g.rawshape_projectPoint,yb=g.rawshape_intersectsRay,Sb=g.rawshape_castRay,Mb=g.rawshape_castRayAndGetNormal,bb=g.__wbg_rawshapetoi_free,Eb=g.rawshapetoi_witness1,Tb=g.rawshapetoi_normal1,Ab=g.rawshapetoi_normal2,Rb=g.__wbg_rawshapecollidertoi_free,fu=g.rawshapecollidertoi_witness2,Cb=g.rawshapecollidertoi_normal2,Pb=g.rawrotation_new,Lb=g.rawrotation_identity,gu=g.rawrotation_y,Ib=g.rawrotation_w,Ub=g.rawvector_zero,Db=g.rawvector_new,Nb=g.rawvector_set_y,Ob=g.rawvector_xyz,Fb=g.rawvector_yxz,Bb=g.rawvector_zxy,Hb=g.rawvector_xzy,zb=g.rawvector_yzx,kb=g.rawvector_zyx,Gb=g.rawsdpmatrix3_elements,Vb=g.__wbg_rawdebugrenderpipeline_free,Wb=g.rawdebugrenderpipeline_new,jb=g.rawdebugrenderpipeline_vertices,Xb=g.rawdebugrenderpipeline_colors,Yb=g.rawdebugrenderpipeline_render,qb=g.__wbg_raweventqueue_free,Kb=g.__wbg_rawcontactforceevent_free,Jb=g.rawcontactforceevent_collider2,_u=g.rawcontactforceevent_total_force,Zb=g.rawcontactforceevent_total_force_magnitude,Qb=g.rawcontactforceevent_max_force_direction,$b=g.rawcontactforceevent_max_force_magnitude,eE=g.raweventqueue_new,tE=g.raweventqueue_drainCollisionEvents,iE=g.raweventqueue_drainContactForceEvents,rE=g.raweventqueue_clear,nE=g.__wbg_rawphysicspipeline_free,aE=g.rawphysicspipeline_new,sE=g.rawphysicspipeline_step,oE=g.rawphysicspipeline_stepWithEvents,lE=g.__wbg_rawquerypipeline_free,cE=g.rawquerypipeline_new,hE=g.rawquerypipeline_update,uE=g.rawquerypipeline_castRay,dE=g.rawquerypipeline_castRayAndGetNormal,pE=g.rawquerypipeline_intersectionsWithRay,mE=g.rawquerypipeline_intersectionWithShape,fE=g.rawquerypipeline_projectPoint,gE=g.rawquerypipeline_projectPointAndGetFeature,_E=g.rawquerypipeline_intersectionsWithPoint,vE=g.rawquerypipeline_castShape,wE=g.rawquerypipeline_intersectionsWithShape,xE=g.rawquerypipeline_collidersWithAabbIntersectingAabb,yE=g.__wbg_rawdeserializedworld_free,SE=g.rawdeserializedworld_takeGravity,ME=g.rawdeserializedworld_takeIntegrationParameters,bE=g.rawdeserializedworld_takeIslandManager,EE=g.rawdeserializedworld_takeBroadPhase,TE=g.rawdeserializedworld_takeNarrowPhase,AE=g.rawdeserializedworld_takeBodies,RE=g.rawdeserializedworld_takeColliders,CE=g.rawdeserializedworld_takeImpulseJoints,PE=g.rawdeserializedworld_takeMultibodyJoints,LE=g.rawserializationpipeline_serializeAll,IE=g.rawserializationpipeline_deserializeAll,UE=g.__wbg_rawcontactpair_free,DE=g.__wbg_rawraycolliderintersection_free,NE=g.__wbg_rawrotation_free,OE=g.__wbg_rawvector_free,FE=g.__wbg_rawsdpmatrix3_free;g.rawvector_set_x,g.rawvector_set_z,g.rawpointprojection_isInside,g.rawpointcolliderprojection_isInside,g.rawcolliderset_isHandleValid,g.rawshapecontact_point1,g.rawshapecontact_point2,g.rawshapecontact_normal2,g.rawpointprojection_point,g.rawpointcolliderprojection_point,g.rawrayintersection_normal,g.rawshapecollidertoi_witness1,g.rawshapecontact_normal1,g.rawshapecollidertoi_normal1,g.rawshapetoi_witness2;const BE=g.rawserializationpipeline_new;g.rawintegrationparameters_erp,g.rawrayintersection_toi,g.rawraycollidertoi_toi,g.rawshapetoi_toi,g.rawshapecollidertoi_toi,g.rawrotation_x,g.rawrotation_z,g.rawvector_x,g.rawvector_y,g.rawvector_z,g.rawraycolliderintersection_colliderHandle,g.rawraycollidertoi_colliderHandle,g.rawshapecollidertoi_colliderHandle,g.rawcontactforceevent_collider1;const HE=g.__wbg_rawserializationpipeline_free,ke=g.__wbindgen_add_to_stack_pointer,ts=g.__wbindgen_free,oi=g.__wbindgen_malloc,zE=g.__wbindgen_exn_store;Es=class{constructor(e,t,i){this.x=e,this.y=t,this.z=i}},N=class Gl{static new(e,t,i){return new Es(e,t,i)}static intoRaw(e){return new O(e.x,e.y,e.z)}static zeros(){return Gl.new(0,0,0)}static fromRaw(e){if(!e)return null;let t=Gl.new(e.x,e.y,e.z);return e.free(),t}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z}},cs=class{constructor(e,t,i,r){this.x=e,this.y=t,this.z=i,this.w=r}},De=class{static identity(){return new cs(0,0,0,1)}static fromRaw(e){if(!e)return null;let t=new cs(e.x,e.y,e.z,e.w);return e.free(),t}static intoRaw(e){return new Fe(e.x,e.y,e.z,e.w)}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w}},Al=class{constructor(e){this.elements=e}get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}},_s=class{static fromRaw(e){const t=new Al(e.elements());return e.free(),t}},function(n){n[n.Dynamic=0]="Dynamic",n[n.Fixed=1]="Fixed",n[n.KinematicPositionBased=2]="KinematicPositionBased",n[n.KinematicVelocityBased=3]="KinematicVelocityBased"}(hi||(hi={})),ds=class{constructor(e,t,i){this.rawSet=e,this.colliderSet=t,this.handle=i}finalizeDeserialization(e){this.colliderSet=e}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(e,t){return this.rawSet.rbLockTranslations(this.handle,e,t)}lockRotations(e,t){return this.rawSet.rbLockRotations(this.handle,e,t)}setEnabledTranslations(e,t,i,r){return this.rawSet.rbSetEnabledTranslations(this.handle,e,t,i,r)}restrictTranslations(e,t,i,r){this.setEnabledTranslations(e,t,i,r)}setEnabledRotations(e,t,i,r){return this.rawSet.rbSetEnabledRotations(this.handle,e,t,i,r)}restrictRotations(e,t,i,r){this.setEnabledRotations(e,t,i,r)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(e){this.rawSet.rbSetDominanceGroup(this.handle,e)}enableCcd(e){this.rawSet.rbEnableCcd(this.handle,e)}translation(){let e=this.rawSet.rbTranslation(this.handle);return N.fromRaw(e)}rotation(){let e=this.rawSet.rbRotation(this.handle);return De.fromRaw(e)}nextTranslation(){let e=this.rawSet.rbNextTranslation(this.handle);return N.fromRaw(e)}nextRotation(){let e=this.rawSet.rbNextRotation(this.handle);return De.fromRaw(e)}setTranslation(e,t){this.rawSet.rbSetTranslation(this.handle,e.x,e.y,e.z,t)}setLinvel(e,t){let i=N.intoRaw(e);this.rawSet.rbSetLinvel(this.handle,i,t),i.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(e,t){this.rawSet.rbSetGravityScale(this.handle,e,t)}setRotation(e,t){this.rawSet.rbSetRotation(this.handle,e.x,e.y,e.z,e.w,t)}setAngvel(e,t){let i=N.intoRaw(e);this.rawSet.rbSetAngvel(this.handle,i,t),i.free()}setNextKinematicTranslation(e){this.rawSet.rbSetNextKinematicTranslation(this.handle,e.x,e.y,e.z)}setNextKinematicRotation(e){this.rawSet.rbSetNextKinematicRotation(this.handle,e.x,e.y,e.z,e.w)}linvel(){return N.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return N.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return N.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return N.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return N.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertiaSqrt(){return N.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle))}principalInertia(){return N.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return De.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertiaSqrt(){return _s.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle))}effectiveAngularInertia(){return _s.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(e){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,e))}setEnabled(e){this.rawSet.rbSetEnabled(this.handle,e)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(e,t){return this.rawSet.rbSetBodyType(this.handle,e,t)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(e){this.rawSet.rbSetLinearDamping(this.handle,e)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(e,t){this.rawSet.rbSetAdditionalMass(this.handle,e,t)}setAdditionalMassProperties(e,t,i,r,a){let s=N.intoRaw(t),o=N.intoRaw(i),l=De.intoRaw(r);this.rawSet.rbSetAdditionalMassProperties(this.handle,e,s,o,l,a),s.free(),o.free(),l.free()}setAngularDamping(e){this.rawSet.rbSetAngularDamping(this.handle,e)}resetForces(e){this.rawSet.rbResetForces(this.handle,e)}resetTorques(e){this.rawSet.rbResetTorques(this.handle,e)}addForce(e,t){const i=N.intoRaw(e);this.rawSet.rbAddForce(this.handle,i,t),i.free()}applyImpulse(e,t){const i=N.intoRaw(e);this.rawSet.rbApplyImpulse(this.handle,i,t),i.free()}addTorque(e,t){const i=N.intoRaw(e);this.rawSet.rbAddTorque(this.handle,i,t),i.free()}applyTorqueImpulse(e,t){const i=N.intoRaw(e);this.rawSet.rbApplyTorqueImpulse(this.handle,i,t),i.free()}addForceAtPoint(e,t,i){const r=N.intoRaw(e),a=N.intoRaw(t);this.rawSet.rbAddForceAtPoint(this.handle,r,a,i),r.free(),a.free()}applyImpulseAtPoint(e,t,i){const r=N.intoRaw(e),a=N.intoRaw(t);this.rawSet.rbApplyImpulseAtPoint(this.handle,r,a,i),r.free(),a.free()}},qn=class Fi{constructor(e){this.enabled=!0,this.status=e,this.translation=N.zeros(),this.rotation=De.identity(),this.gravityScale=1,this.linvel=N.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=N.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=N.zeros(),this.principalAngularInertia=N.zeros(),this.angularInertiaLocalFrame=De.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.dominanceGroup=0}static dynamic(){return new Fi(hi.Dynamic)}static kinematicPositionBased(){return new Fi(hi.KinematicPositionBased)}static kinematicVelocityBased(){return new Fi(hi.KinematicVelocityBased)}static fixed(){return new Fi(hi.Fixed)}static newDynamic(){return new Fi(hi.Dynamic)}static newKinematicPositionBased(){return new Fi(hi.KinematicPositionBased)}static newKinematicVelocityBased(){return new Fi(hi.KinematicVelocityBased)}static newStatic(){return new Fi(hi.Fixed)}setDominanceGroup(e){return this.dominanceGroup=e,this}setEnabled(e){return this.enabled=e,this}setTranslation(e,t,i){if(typeof e!="number"||typeof t!="number"||typeof i!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:i},this}setRotation(e){return De.copy(this.rotation,e),this}setGravityScale(e){return this.gravityScale=e,this}setAdditionalMass(e){return this.mass=e,this.massOnly=!0,this}setLinvel(e,t,i){if(typeof e!="number"||typeof t!="number"||typeof i!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:e,y:t,z:i},this}setAngvel(e){return N.copy(this.angvel,e),this}setAdditionalMassProperties(e,t,i,r){return this.mass=e,N.copy(this.centerOfMass,t),N.copy(this.principalAngularInertia,i),De.copy(this.angularInertiaLocalFrame,r),this.massOnly=!1,this}enabledTranslations(e,t,i){return this.translationsEnabledX=e,this.translationsEnabledY=t,this.translationsEnabledZ=i,this}restrictTranslations(e,t,i){return this.enabledTranslations(e,t,i)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(e,t,i){return this.rotationsEnabledX=e,this.rotationsEnabledY=t,this.rotationsEnabledZ=i,this}restrictRotations(e,t,i){return this.enabledRotations(e,t,i)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(e){return this.linearDamping=e,this}setAngularDamping(e){return this.angularDamping=e,this}setCanSleep(e){return this.canSleep=e,this}setSleeping(e){return this.sleeping=e,this}setCcdEnabled(e){return this.ccdEnabled=e,this}setUserData(e){return this.userData=e,this}};class is{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(e,t){let i=this.index(e);for(;this.data.length<=i;)this.data.push(null);this.data[i]==null&&(this.size+=1),this.data[i]=t}len(){return this.size}delete(e){let t=this.index(e);t<this.data.length&&(this.data[t]!=null&&(this.size-=1),this.data[t]=null)}clear(){this.data=new Array}get(e){let t=this.index(e);return t<this.data.length?this.data[t]:null}forEach(e){for(const t of this.data)t!=null&&e(t)}getAll(){return this.data.filter(e=>e!=null)}index(e){return this.fconv[0]=e,this.uconv[0]}}hl=class{constructor(e){this.raw=e||new pt,this.map=new is,e&&e.forEachRigidBodyHandle(t=>{this.map.set(t,new ds(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createRigidBody(e,t){let i=N.intoRaw(t.translation),r=De.intoRaw(t.rotation),a=N.intoRaw(t.linvel),s=N.intoRaw(t.centerOfMass),o=N.intoRaw(t.angvel),l=N.intoRaw(t.principalAngularInertia),c=De.intoRaw(t.angularInertiaLocalFrame),h=this.raw.createRigidBody(t.enabled,i,r,t.gravityScale,t.mass,t.massOnly,s,a,o,l,c,t.translationsEnabledX,t.translationsEnabledY,t.translationsEnabledZ,t.rotationsEnabledX,t.rotationsEnabledY,t.rotationsEnabledZ,t.linearDamping,t.angularDamping,t.status,t.canSleep,t.sleeping,t.ccdEnabled,t.dominanceGroup);i.free(),r.free(),a.free(),s.free(),o.free(),l.free(),c.free();const u=new ds(this.raw,e,h);return u.userData=t.userData,this.map.set(h,u),u}remove(e,t,i,r,a){for(let s=0;s<this.raw.rbNumColliders(e);s+=1)i.unmap(this.raw.rbCollider(e,s));r.forEachJointHandleAttachedToRigidBody(e,s=>r.unmap(s)),a.forEachJointHandleAttachedToRigidBody(e,s=>a.unmap(s)),this.raw.remove(e,t.raw,i.raw,r.raw,a.raw),this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachActiveRigidBody(e,t){e.forEachActiveRigidBodyHandle(i=>{t(this.get(i))})}getAll(){return this.map.getAll()}},Fl=class{constructor(e){this.raw=e||new Ki}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get erp(){return this.raw.erp}get allowedLinearError(){return this.raw.allowedLinearError}get predictionDistance(){return this.raw.predictionDistance}get maxVelocityIterations(){return this.raw.maxVelocityIterations}get maxVelocityFrictionIterations(){return this.raw.maxVelocityFrictionIterations}get maxStabilizationIterations(){return this.raw.maxStabilizationIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(e){this.raw.dt=e}set erp(e){this.raw.erp=e}set allowedLinearError(e){this.raw.allowedLinearError=e}set predictionDistance(e){this.raw.predictionDistance=e}set maxVelocityIterations(e){this.raw.maxVelocityIterations=e}set maxVelocityFrictionIterations(e){this.raw.maxVelocityFrictionIterations=e}set maxStabilizationIterations(e){this.raw.maxStabilizationIterations=e}set minIslandSize(e){this.raw.minIslandSize=e}set maxCcdSubsteps(e){this.raw.maxCcdSubsteps=e}},function(n){n[n.Revolute=0]="Revolute",n[n.Fixed=1]="Fixed",n[n.Prismatic=2]="Prismatic",n[n.Spherical=3]="Spherical"}(Et||(Et={})),function(n){n[n.AccelerationBased=0]="AccelerationBased",n[n.ForceBased=1]="ForceBased"}(Hl||(Hl={})),Rr=class Hu{constructor(e,t,i){this.rawSet=e,this.bodySet=t,this.handle=i}static newTyped(e,t,i){switch(e.jointType(i)){case Et.Revolute:return new bl(e,t,i);case Et.Prismatic:return new pl(e,t,i);case Et.Fixed:return new Dl(e,t,i);case Et.Spherical:return new Rl(e,t,i);default:return new Hu(e,t,i)}}finalizeDeserialization(e){this.bodySet=e}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return De.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return De.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return N.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return N.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(e){const t=N.intoRaw(e);this.rawSet.jointSetAnchor1(this.handle,t),t.free()}setAnchor2(e){const t=N.intoRaw(e);this.rawSet.jointSetAnchor2(this.handle,t),t.free()}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}},Ms=class extends Rr{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(e,t){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),e,t)}configureMotorModel(e){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),e)}configureMotorVelocity(e,t){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),e,t)}configureMotorPosition(e,t,i){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),e,t,i)}configureMotor(e,t,i,r){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),e,t,i,r)}},Dl=class extends Rr{},pl=class extends Ms{rawAxis(){return za.X}},bl=class extends Ms{rawAxis(){return za.AngX}},Rl=class extends Rr{},Ou=class ta{constructor(){}static fixed(e,t,i,r){let a=new ta;return a.anchor1=e,a.anchor2=i,a.frame1=t,a.frame2=r,a.jointType=Et.Fixed,a}static spherical(e,t){let i=new ta;return i.anchor1=e,i.anchor2=t,i.jointType=Et.Spherical,i}static prismatic(e,t,i){let r=new ta;return r.anchor1=e,r.anchor2=t,r.axis=i,r.jointType=Et.Prismatic,r}static revolute(e,t,i){let r=new ta;return r.anchor1=e,r.anchor2=t,r.axis=i,r.jointType=Et.Revolute,r}intoRaw(){let e=N.intoRaw(this.anchor1),t=N.intoRaw(this.anchor2),i,r,a=!1,s=0,o=0;switch(this.jointType){case Et.Fixed:let l=De.intoRaw(this.frame1),c=De.intoRaw(this.frame2);r=Qt.fixed(e,l,t,c),l.free(),c.free();break;case Et.Prismatic:i=N.intoRaw(this.axis),this.limitsEnabled&&(a=!0,s=this.limits[0],o=this.limits[1]),r=Qt.prismatic(e,t,i,a,s,o),i.free();break;case Et.Spherical:r=Qt.spherical(e,t);break;case Et.Revolute:i=N.intoRaw(this.axis),r=Qt.revolute(e,t,i),i.free();break}return e.free(),t.free(),r}},Ol=class{constructor(e){this.raw=e||new _i,this.map=new is,e&&e.forEachJointHandle(t=>{this.map.set(t,Rr.newTyped(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createJoint(e,t,i,r,a){const s=t.intoRaw(),o=this.raw.createJoint(s,i,r,a);s.free();let l=Rr.newTyped(this.raw,e,o);return this.map.set(o,l),l}remove(e,t){this.raw.remove(e,t),this.unmap(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}},Pr=class zu{constructor(e,t){this.rawSet=e,this.handle=t}static newTyped(e,t){switch(e.jointType(t)){case Et.Revolute:return new El(e,t);case Et.Prismatic:return new ml(e,t);case Et.Fixed:return new Nl(e,t);case Et.Spherical:return new Cl(e,t);default:return new zu(e,t)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}},bs=class extends Pr{},Nl=class extends Pr{},ml=class extends bs{rawAxis(){return za.X}},El=class extends bs{rawAxis(){return za.AngX}},Cl=class extends Pr{},zl=class{constructor(e){this.raw=e||new wi,this.map=new is,e&&e.forEachJointHandle(t=>{this.map.set(t,Pr.newTyped(this.raw,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}createJoint(e,t,i,r){const a=e.intoRaw(),s=this.raw.createJoint(a,t,i,r);a.free();let o=Pr.newTyped(this.raw,s);return this.map.set(s,o),o}remove(e,t){this.raw.remove(e,t),this.map.delete(e)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}getAll(){return this.map.getAll()}},function(n){n[n.Average=0]="Average",n[n.Min=1]="Min",n[n.Multiply=2]="Multiply",n[n.Max=3]="Max"}(Qn||(Qn={})),ul=class{constructor(e){this.raw=e||new _n}free(){this.raw&&this.raw.free(),this.raw=void 0}},Bl=class{constructor(e){this.raw=e||new vi}free(){this.raw&&this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(e){this.raw.forEachActiveRigidBodyHandle(e)}},Tl=class{constructor(e){this.raw=e||new qi}free(){this.raw&&this.raw.free(),this.raw=void 0}},vl=class{constructor(e){this.raw=e||new Oi,this.tempManifold=new Pl(null)}free(){this.raw&&this.raw.free(),this.raw=void 0}contactsWith(e,t){this.raw.contacts_with(e,t)}intersectionsWith(e,t){this.raw.intersections_with(e,t)}contactPair(e,t,i){const r=this.raw.contact_pair(e,t);if(r){const a=r.collider1()!=e;let s;for(s=0;s<r.numContactManifolds();++s)this.tempManifold.raw=r.contactManifold(s),this.tempManifold.raw&&i(this.tempManifold,a),this.tempManifold.free();r.free()}}intersectionPair(e,t){return this.raw.intersection_pair(e,t)}},Pl=class{constructor(e){this.raw=e}free(){this.raw&&this.raw.free(),this.raw=void 0}normal(){return N.fromRaw(this.raw.normal())}localNormal1(){return N.fromRaw(this.raw.local_n1())}localNormal2(){return N.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(e){return N.fromRaw(this.raw.contact_local_p1(e))}localContactPoint2(e){return N.fromRaw(this.raw.contact_local_p2(e))}contactDist(e){return this.raw.contact_dist(e)}contactFid1(e){return this.raw.contact_fid1(e)}contactFid2(e){return this.raw.contact_fid2(e)}contactImpulse(e){return this.raw.contact_impulse(e)}contactTangentImpulseX(e){return this.raw.contact_tangent_impulse_x(e)}contactTangentImpulseY(e){return this.raw.contact_tangent_impulse_y(e)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(e){return N.fromRaw(this.raw.solver_contact_point(e))}solverContactDist(e){return this.raw.solver_contact_dist(e)}solverContactFriction(e){return this.raw.solver_contact_friction(e)}solverContactRestitution(e){return this.raw.solver_contact_restitution(e)}solverContactTangentVelocity(e){return N.fromRaw(this.raw.solver_contact_tangent_velocity(e))}},Jn=class ku{constructor(e,t,i,r,a){this.distance=e,this.point1=t,this.point2=i,this.normal1=r,this.normal2=a}static fromRaw(e){if(!e)return null;const t=new ku(e.distance(),N.fromRaw(e.point1()),N.fromRaw(e.point2()),N.fromRaw(e.normal1()),N.fromRaw(e.normal2()));return e.free(),t}},function(n){n[n.Vertex=0]="Vertex",n[n.Edge=1]="Edge",n[n.Face=2]="Face",n[n.Unknown=3]="Unknown"}(xn||(xn={})),Ds=class Gu{constructor(e,t){this.point=e,this.isInside=t}static fromRaw(e){if(!e)return null;const t=new Gu(N.fromRaw(e.point()),e.isInside());return e.free(),t}},Us=class Vu{constructor(e,t,i,r,a){this.featureType=xn.Unknown,this.featureId=void 0,this.collider=e,this.point=t,this.isInside=i,a!==void 0&&(this.featureId=a),r!==void 0&&(this.featureType=r)}static fromRaw(e,t){if(!t)return null;const i=new Vu(e.get(t.colliderHandle()),N.fromRaw(t.point()),t.isInside(),t.featureType(),t.featureId());return t.free(),i}},Sl=class{constructor(e,t){this.origin=e,this.dir=t}pointAt(e){return{x:this.origin.x+this.dir.x*e,y:this.origin.y+this.dir.y*e,z:this.origin.z+this.dir.z*e}}},us=class Wu{constructor(e,t,i,r){this.featureType=xn.Unknown,this.featureId=void 0,this.toi=e,this.normal=t,r!==void 0&&(this.featureId=r),i!==void 0&&(this.featureType=i)}static fromRaw(e){if(!e)return null;const t=new Wu(e.toi(),N.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),t}},hs=class ju{constructor(e,t,i,r,a){this.featureType=xn.Unknown,this.featureId=void 0,this.collider=e,this.toi=t,this.normal=i,a!==void 0&&(this.featureId=a),r!==void 0&&(this.featureType=r)}static fromRaw(e,t){if(!t)return null;const i=new ju(e.get(t.colliderHandle()),t.toi(),N.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),i}},Ml=class Xu{constructor(e,t){this.collider=e,this.toi=t}static fromRaw(e,t){if(!t)return null;const i=new Xu(e.get(t.colliderHandle()),t.toi());return t.free(),i}},Zn=class Yu{constructor(e,t,i,r,a){this.toi=e,this.witness1=t,this.witness2=i,this.normal1=r,this.normal2=a}static fromRaw(e,t){if(!t)return null;const i=new Yu(t.toi(),N.fromRaw(t.witness1()),N.fromRaw(t.witness2()),N.fromRaw(t.normal1()),N.fromRaw(t.normal2()));return t.free(),i}},xs=class qu extends Zn{constructor(e,t,i,r,a,s){super(t,i,r,a,s),this.collider=e}static fromRaw(e,t){if(!t)return null;const i=new qu(e.get(t.colliderHandle()),t.toi(),N.fromRaw(t.witness1()),N.fromRaw(t.witness2()),N.fromRaw(t.normal1()),N.fromRaw(t.normal2()));return t.free(),i}},St=class{static fromRaw(e,t){const i=e.coShapeType(t);let r,a,s,o,l,c,h;switch(i){case ze.Ball:return new ls(e.coRadius(t));case ze.Cuboid:return r=e.coHalfExtents(t),new Ps(r.x,r.y,r.z);case ze.RoundCuboid:return r=e.coHalfExtents(t),a=e.coRoundRadius(t),new ms(r.x,r.y,r.z,a);case ze.Capsule:return l=e.coHalfHeight(t),c=e.coRadius(t),new As(l,c);case ze.Segment:return s=e.coVertices(t),new vs(N.new(s[0],s[1],s[2]),N.new(s[3],s[4],s[5]));case ze.Polyline:return s=e.coVertices(t),o=e.coIndices(t),new Ns(s,o);case ze.Triangle:return s=e.coVertices(t),new Ss(N.new(s[0],s[1],s[2]),N.new(s[3],s[4],s[5]),N.new(s[6],s[7],s[8]));case ze.RoundTriangle:return s=e.coVertices(t),a=e.coRoundRadius(t),new gs(N.new(s[0],s[1],s[2]),N.new(s[3],s[4],s[5]),N.new(s[6],s[7],s[8]),a);case ze.HalfSpace:return h=N.fromRaw(e.coHalfspaceNormal(t)),new fl(h);case ze.TriMesh:return s=e.coVertices(t),o=e.coIndices(t),new ys(s,o);case ze.HeightField:const u=e.coHeightfieldScale(t),d=e.coHeightfieldHeights(t),m=e.coHeightfieldNRows(t),_=e.coHeightfieldNCols(t);return new Is(m,_,d,u);case ze.ConvexPolyhedron:return s=e.coVertices(t),o=e.coIndices(t),new ea(s,o);case ze.RoundConvexPolyhedron:return s=e.coVertices(t),o=e.coIndices(t),a=e.coRoundRadius(t),new Kn(s,o,a);case ze.Cylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),new Ls(l,c);case ze.RoundCylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),a=e.coRoundRadius(t),new fs(l,c,a);case ze.Cone:return l=e.coHalfHeight(t),c=e.coRadius(t),new Cs(l,c);case ze.RoundCone:return l=e.coHalfHeight(t),c=e.coRadius(t),a=e.coRoundRadius(t),new ps(l,c,a);default:throw new Error("unknown shape type: "+i)}}castShape(e,t,i,r,a,s,o,l,c){let h=N.intoRaw(e),u=De.intoRaw(t),d=N.intoRaw(i),m=N.intoRaw(a),_=De.intoRaw(s),v=N.intoRaw(o),f=this.intoRaw(),p=r.intoRaw(),M=Zn.fromRaw(null,f.castShape(h,u,d,p,m,_,v,l,c));return h.free(),u.free(),d.free(),m.free(),_.free(),v.free(),f.free(),p.free(),M}intersectsShape(e,t,i,r,a){let s=N.intoRaw(e),o=De.intoRaw(t),l=N.intoRaw(r),c=De.intoRaw(a),h=this.intoRaw(),u=i.intoRaw(),d=h.intersectsShape(s,o,u,l,c);return s.free(),o.free(),l.free(),c.free(),h.free(),u.free(),d}contactShape(e,t,i,r,a,s){let o=N.intoRaw(e),l=De.intoRaw(t),c=N.intoRaw(r),h=De.intoRaw(a),u=this.intoRaw(),d=i.intoRaw(),m=Jn.fromRaw(u.contactShape(o,l,d,c,h,s));return o.free(),l.free(),c.free(),h.free(),u.free(),d.free(),m}containsPoint(e,t,i){let r=N.intoRaw(e),a=De.intoRaw(t),s=N.intoRaw(i),o=this.intoRaw(),l=o.containsPoint(r,a,s);return r.free(),a.free(),s.free(),o.free(),l}projectPoint(e,t,i,r){let a=N.intoRaw(e),s=De.intoRaw(t),o=N.intoRaw(i),l=this.intoRaw(),c=Ds.fromRaw(l.projectPoint(a,s,o,r));return a.free(),s.free(),o.free(),l.free(),c}intersectsRay(e,t,i,r){let a=N.intoRaw(t),s=De.intoRaw(i),o=N.intoRaw(e.origin),l=N.intoRaw(e.dir),c=this.intoRaw(),h=c.intersectsRay(a,s,o,l,r);return a.free(),s.free(),o.free(),l.free(),c.free(),h}castRay(e,t,i,r,a){let s=N.intoRaw(t),o=De.intoRaw(i),l=N.intoRaw(e.origin),c=N.intoRaw(e.dir),h=this.intoRaw(),u=h.castRay(s,o,l,c,r,a);return s.free(),o.free(),l.free(),c.free(),h.free(),u}castRayAndGetNormal(e,t,i,r,a){let s=N.intoRaw(t),o=De.intoRaw(i),l=N.intoRaw(e.origin),c=N.intoRaw(e.dir),h=this.intoRaw(),u=us.fromRaw(h.castRayAndGetNormal(s,o,l,c,r,a));return s.free(),o.free(),l.free(),c.free(),h.free(),u}},function(n){n[n.Ball=0]="Ball",n[n.Cuboid=1]="Cuboid",n[n.Capsule=2]="Capsule",n[n.Segment=3]="Segment",n[n.Polyline=4]="Polyline",n[n.Triangle=5]="Triangle",n[n.TriMesh=6]="TriMesh",n[n.HeightField=7]="HeightField",n[n.ConvexPolyhedron=9]="ConvexPolyhedron",n[n.Cylinder=10]="Cylinder",n[n.Cone=11]="Cone",n[n.RoundCuboid=12]="RoundCuboid",n[n.RoundTriangle=13]="RoundTriangle",n[n.RoundCylinder=14]="RoundCylinder",n[n.RoundCone=15]="RoundCone",n[n.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",n[n.HalfSpace=17]="HalfSpace"}(ze||(ze={})),ls=class extends St{constructor(e){super(),this.type=ze.Ball,this.radius=e}intoRaw(){return Me.ball(this.radius)}},fl=class extends St{constructor(e){super(),this.type=ze.HalfSpace,this.normal=e}intoRaw(){let e=N.intoRaw(this.normal),t=Me.halfspace(e);return e.free(),t}},Ps=class extends St{constructor(e,t,i){super(),this.type=ze.Cuboid,this.halfExtents=N.new(e,t,i)}intoRaw(){return Me.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}},ms=class extends St{constructor(e,t,i,r){super(),this.type=ze.RoundCuboid,this.halfExtents=N.new(e,t,i),this.borderRadius=r}intoRaw(){return Me.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}},As=class extends St{constructor(e,t){super(),this.type=ze.Capsule,this.halfHeight=e,this.radius=t}intoRaw(){return Me.capsule(this.halfHeight,this.radius)}},vs=class extends St{constructor(e,t){super(),this.type=ze.Segment,this.a=e,this.b=t}intoRaw(){let e=N.intoRaw(this.a),t=N.intoRaw(this.b),i=Me.segment(e,t);return e.free(),t.free(),i}},Ss=class extends St{constructor(e,t,i){super(),this.type=ze.Triangle,this.a=e,this.b=t,this.c=i}intoRaw(){let e=N.intoRaw(this.a),t=N.intoRaw(this.b),i=N.intoRaw(this.c),r=Me.triangle(e,t,i);return e.free(),t.free(),i.free(),r}},gs=class extends St{constructor(e,t,i,r){super(),this.type=ze.RoundTriangle,this.a=e,this.b=t,this.c=i,this.borderRadius=r}intoRaw(){let e=N.intoRaw(this.a),t=N.intoRaw(this.b),i=N.intoRaw(this.c),r=Me.roundTriangle(e,t,i,this.borderRadius);return e.free(),t.free(),i.free(),r}},Ns=class extends St{constructor(e,t){super(),this.type=ze.Polyline,this.vertices=e,this.indices=t??new Uint32Array(0)}intoRaw(){return Me.polyline(this.vertices,this.indices)}},ys=class extends St{constructor(e,t){super(),this.type=ze.TriMesh,this.vertices=e,this.indices=t}intoRaw(){return Me.trimesh(this.vertices,this.indices)}},ea=class extends St{constructor(e,t){super(),this.type=ze.ConvexPolyhedron,this.vertices=e,this.indices=t}intoRaw(){return this.indices?Me.convexMesh(this.vertices,this.indices):Me.convexHull(this.vertices)}},Kn=class extends St{constructor(e,t,i){super(),this.type=ze.RoundConvexPolyhedron,this.vertices=e,this.indices=t,this.borderRadius=i}intoRaw(){return this.indices?Me.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Me.roundConvexHull(this.vertices,this.borderRadius)}},Is=class extends St{constructor(e,t,i,r){super(),this.type=ze.HeightField,this.nrows=e,this.ncols=t,this.heights=i,this.scale=r}intoRaw(){let e=N.intoRaw(this.scale),t=Me.heightfield(this.nrows,this.ncols,this.heights,e);return e.free(),t}},Ls=class extends St{constructor(e,t){super(),this.type=ze.Cylinder,this.halfHeight=e,this.radius=t}intoRaw(){return Me.cylinder(this.halfHeight,this.radius)}},fs=class extends St{constructor(e,t,i){super(),this.type=ze.RoundCylinder,this.borderRadius=i,this.halfHeight=e,this.radius=t}intoRaw(){return Me.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}},Cs=class extends St{constructor(e,t){super(),this.type=ze.Cone,this.halfHeight=e,this.radius=t}intoRaw(){return Me.cone(this.halfHeight,this.radius)}},ps=class extends St{constructor(e,t,i){super(),this.type=ze.RoundCone,this.halfHeight=e,this.radius=t,this.borderRadius=i}intoRaw(){return Me.roundCone(this.halfHeight,this.radius,this.borderRadius)}},function(n){n[n.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",n[n.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",n[n.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",n[n.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",n[n.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",n[n.FIXED_FIXED=32]="FIXED_FIXED",n[n.DEFAULT=15]="DEFAULT",n[n.ALL=60943]="ALL"}(os||(os={})),Rs=class{constructor(e,t,i,r){this.colliderSet=e,this.handle=t,this._parent=i,this._shape=r}finalizeDeserialization(e){this.handle!=null&&(this._parent=e.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=St.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return N.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return De.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(e){this.colliderSet.raw.coSetSensor(this.handle,e)}setShape(e){let t=e.intoRaw();this.colliderSet.raw.coSetShape(this.handle,t),t.free(),this._shape=e}setEnabled(e){this.colliderSet.raw.coSetEnabled(this.handle,e)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(e){this.colliderSet.raw.coSetRestitution(this.handle,e)}setFriction(e){this.colliderSet.raw.coSetFriction(this.handle,e)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(e){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,e)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(e){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,e)}setCollisionGroups(e){this.colliderSet.raw.coSetCollisionGroups(this.handle,e)}setSolverGroups(e){this.colliderSet.raw.coSetSolverGroups(this.handle,e)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(e){this.colliderSet.raw.coSetActiveHooks(this.handle,e)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(e){this.colliderSet.raw.coSetActiveEvents(this.handle,e)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(e){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,e)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(e){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,e)}setDensity(e){this.colliderSet.raw.coSetDensity(this.handle,e)}setMass(e){this.colliderSet.raw.coSetMass(this.handle,e)}setMassProperties(e,t,i,r){let a=N.intoRaw(t),s=N.intoRaw(i),o=De.intoRaw(r);this.colliderSet.raw.coSetMassProperties(this.handle,e,a,s,o),a.free(),s.free(),o.free()}setTranslation(e){this.colliderSet.raw.coSetTranslation(this.handle,e.x,e.y,e.z)}setTranslationWrtParent(e){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,e.x,e.y,e.z)}setRotation(e){this.colliderSet.raw.coSetRotation(this.handle,e.x,e.y,e.z,e.w)}setRotationWrtParent(e){this.colliderSet.raw.coSetRotationWrtParent(this.handle,e.x,e.y,e.z,e.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return N.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(e){const t=N.intoRaw(e);this.colliderSet.raw.coSetHalfExtents(this.handle,t)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(e){this.colliderSet.raw.coSetRadius(this.handle,e)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(e){this.colliderSet.raw.coSetRoundRadius(this.handle,e)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(e){this.colliderSet.raw.coSetHalfHeight(this.handle,e)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let e=this.colliderSet.raw.coHeightfieldScale(this.handle);return N.fromRaw(e)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(e){let t=N.intoRaw(e),i=this.colliderSet.raw.coContainsPoint(this.handle,t);return t.free(),i}projectPoint(e,t){let i=N.intoRaw(e),r=Ds.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,i,t));return i.free(),r}intersectsRay(e,t){let i=N.intoRaw(e.origin),r=N.intoRaw(e.dir),a=this.colliderSet.raw.coIntersectsRay(this.handle,i,r,t);return i.free(),r.free(),a}castShape(e,t,i,r,a,s,o){let l=N.intoRaw(e),c=N.intoRaw(i),h=De.intoRaw(r),u=N.intoRaw(a),d=t.intoRaw(),m=Zn.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,l,d,c,h,u,s,o));return l.free(),c.free(),h.free(),u.free(),d.free(),m}castCollider(e,t,i,r,a){let s=N.intoRaw(e),o=N.intoRaw(i),l=xs.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,s,t.handle,o,r,a));return s.free(),o.free(),l}intersectsShape(e,t,i){let r=N.intoRaw(t),a=De.intoRaw(i),s=e.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,s,r,a);return r.free(),a.free(),s.free(),o}contactShape(e,t,i,r){let a=N.intoRaw(t),s=De.intoRaw(i),o=e.intoRaw(),l=Jn.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,a,s,r));return a.free(),s.free(),o.free(),l}contactCollider(e,t){return Jn.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,e.handle,t))}castRay(e,t,i){let r=N.intoRaw(e.origin),a=N.intoRaw(e.dir),s=this.colliderSet.raw.coCastRay(this.handle,r,a,t,i);return r.free(),a.free(),s}castRayAndGetNormal(e,t,i){let r=N.intoRaw(e.origin),a=N.intoRaw(e.dir),s=us.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,r,a,t,i));return r.free(),a.free(),s}},function(n){n[n.Density=0]="Density",n[n.Mass=1]="Mass",n[n.MassProps=2]="MassProps"}(Cr||(Cr={})),$n=class Tt{constructor(e){this.enabled=!0,this.shape=e,this.massPropsMode=Cr.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=De.identity(),this.translation=N.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=Qn.Average,this.restitutionCombineRule=Qn.Average,this.activeCollisionTypes=os.DEFAULT,this.activeEvents=0,this.activeHooks=0,this.mass=0,this.centerOfMass=N.zeros(),this.contactForceEventThreshold=0,this.principalAngularInertia=N.zeros(),this.angularInertiaLocalFrame=De.identity()}static ball(e){const t=new ls(e);return new Tt(t)}static capsule(e,t){const i=new As(e,t);return new Tt(i)}static segment(e,t){const i=new vs(e,t);return new Tt(i)}static triangle(e,t,i){const r=new Ss(e,t,i);return new Tt(r)}static roundTriangle(e,t,i,r){const a=new gs(e,t,i,r);return new Tt(a)}static polyline(e,t){const i=new Ns(e,t);return new Tt(i)}static trimesh(e,t){const i=new ys(e,t);return new Tt(i)}static cuboid(e,t,i){const r=new Ps(e,t,i);return new Tt(r)}static roundCuboid(e,t,i,r){const a=new ms(e,t,i,r);return new Tt(a)}static heightfield(e,t,i,r){const a=new Is(e,t,i,r);return new Tt(a)}static cylinder(e,t){const i=new Ls(e,t);return new Tt(i)}static roundCylinder(e,t,i){const r=new fs(e,t,i);return new Tt(r)}static cone(e,t){const i=new Cs(e,t);return new Tt(i)}static roundCone(e,t,i){const r=new ps(e,t,i);return new Tt(r)}static convexHull(e){const t=new ea(e,null);return new Tt(t)}static convexMesh(e,t){const i=new ea(e,t);return new Tt(i)}static roundConvexHull(e,t){const i=new Kn(e,null,t);return new Tt(i)}static roundConvexMesh(e,t,i){const r=new Kn(e,t,i);return new Tt(r)}setTranslation(e,t,i){if(typeof e!="number"||typeof t!="number"||typeof i!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:i},this}setRotation(e){return De.copy(this.rotation,e),this}setSensor(e){return this.isSensor=e,this}setEnabled(e){return this.enabled=e,this}setDensity(e){return this.massPropsMode=Cr.Density,this.density=e,this}setMass(e){return this.massPropsMode=Cr.Mass,this.mass=e,this}setMassProperties(e,t,i,r){return this.massPropsMode=Cr.MassProps,this.mass=e,N.copy(this.centerOfMass,t),N.copy(this.principalAngularInertia,i),De.copy(this.angularInertiaLocalFrame,r),this}setRestitution(e){return this.restitution=e,this}setFriction(e){return this.friction=e,this}setFrictionCombineRule(e){return this.frictionCombineRule=e,this}setRestitutionCombineRule(e){return this.restitutionCombineRule=e,this}setCollisionGroups(e){return this.collisionGroups=e,this}setSolverGroups(e){return this.solverGroups=e,this}setActiveHooks(e){return this.activeHooks=e,this}setActiveEvents(e){return this.activeEvents=e,this}setActiveCollisionTypes(e){return this.activeCollisionTypes=e,this}setContactForceEventThreshold(e){return this.contactForceEventThreshold=e,this}},Il=class{constructor(e){this.raw=e||new ut,this.map=new is,e&&e.forEachColliderHandle(t=>{this.map.set(t,new Rs(this,t,null))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}castClosure(e){return t=>{if(e)return e(this.get(t))}}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createCollider(e,t,i){let r=i!=null&&i!=null;if(r&&isNaN(i))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let a=t.shape.intoRaw(),s=N.intoRaw(t.translation),o=De.intoRaw(t.rotation),l=N.intoRaw(t.centerOfMass),c=N.intoRaw(t.principalAngularInertia),h=De.intoRaw(t.angularInertiaLocalFrame),u=this.raw.createCollider(t.enabled,a,s,o,t.massPropsMode,t.mass,l,c,h,t.density,t.friction,t.restitution,t.frictionCombineRule,t.restitutionCombineRule,t.isSensor,t.collisionGroups,t.solverGroups,t.activeCollisionTypes,t.activeHooks,t.activeEvents,t.contactForceEventThreshold,r,r?i:0,e.raw);a.free(),s.free(),o.free(),l.free(),c.free(),h.free();let d=r?e.get(i):null,m=new Rs(this,u,d,t.shape);return this.map.set(u,m),m}remove(e,t,i,r){this.raw.remove(e,t.raw,i.raw,r),this.unmap(e)}unmap(e){this.map.delete(e)}get(e){return this.map.get(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}},xl=class{constructor(e){this.raw=e||new Va}free(){this.raw&&this.raw.free(),this.raw=void 0}step(e,t,i,r,a,s,o,l,c,h,u,d){let m=N.intoRaw(e);u?this.raw.stepWithEvents(m,t.raw,i.raw,r.raw,a.raw,s.raw,o.raw,l.raw,c.raw,h.raw,u.raw,d,d?d.filterContactPair:null,d?d.filterIntersectionPair:null):this.raw.step(m,t.raw,i.raw,r.raw,a.raw,s.raw,o.raw,l.raw,c.raw,h.raw),m.free()}},function(n){n[n.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",n[n.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",n[n.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",n[n.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",n[n.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",n[n.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",n[n.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",n[n.ONLY_FIXED=6]="ONLY_FIXED"}(_l||(_l={})),wl=class{constructor(e){this.raw=e||new Gn}free(){this.raw&&this.raw.free(),this.raw=void 0}update(e,t){this.raw.update(e.raw,t.raw)}castRay(e,t,i,r,a,s,o,l,c,h){let u=N.intoRaw(i.origin),d=N.intoRaw(i.dir),m=Ml.fromRaw(t,this.raw.castRay(e.raw,t.raw,u,d,r,a,s,o,l,c,h));return u.free(),d.free(),m}castRayAndGetNormal(e,t,i,r,a,s,o,l,c,h){let u=N.intoRaw(i.origin),d=N.intoRaw(i.dir),m=hs.fromRaw(t,this.raw.castRayAndGetNormal(e.raw,t.raw,u,d,r,a,s,o,l,c,h));return u.free(),d.free(),m}intersectionsWithRay(e,t,i,r,a,s,o,l,c,h,u){let d=N.intoRaw(i.origin),m=N.intoRaw(i.dir),_=v=>s(hs.fromRaw(t,v));this.raw.intersectionsWithRay(e.raw,t.raw,d,m,r,a,_,o,l,c,h,u),d.free(),m.free()}intersectionWithShape(e,t,i,r,a,s,o,l,c,h){let u=N.intoRaw(i),d=De.intoRaw(r),m=a.intoRaw(),_=this.raw.intersectionWithShape(e.raw,t.raw,u,d,m,s,o,l,c,h);return u.free(),d.free(),m.free(),_}projectPoint(e,t,i,r,a,s,o,l,c){let h=N.intoRaw(i),u=Us.fromRaw(t,this.raw.projectPoint(e.raw,t.raw,h,r,a,s,o,l,c));return h.free(),u}projectPointAndGetFeature(e,t,i,r,a,s,o,l){let c=N.intoRaw(i),h=Us.fromRaw(t,this.raw.projectPointAndGetFeature(e.raw,t.raw,c,r,a,s,o,l));return c.free(),h}intersectionsWithPoint(e,t,i,r,a,s,o,l,c){let h=N.intoRaw(i);this.raw.intersectionsWithPoint(e.raw,t.raw,h,r,a,s,o,l,c),h.free()}castShape(e,t,i,r,a,s,o,l,c,h,u,d,m){let _=N.intoRaw(i),v=De.intoRaw(r),f=N.intoRaw(a),p=s.intoRaw(),M=xs.fromRaw(t,this.raw.castShape(e.raw,t.raw,_,v,f,p,o,l,c,h,u,d,m));return _.free(),v.free(),f.free(),p.free(),M}intersectionsWithShape(e,t,i,r,a,s,o,l,c,h,u){let d=N.intoRaw(i),m=De.intoRaw(r),_=a.intoRaw();this.raw.intersectionsWithShape(e.raw,t.raw,d,m,_,s,o,l,c,h,u),d.free(),m.free(),_.free()}collidersWithAabbIntersectingAabb(e,t,i){let r=N.intoRaw(e),a=N.intoRaw(t);this.raw.collidersWithAabbIntersectingAabb(r,a,i),r.free(),a.free()}},ws=class{constructor(e){this.raw=e||new Ka}free(){this.raw&&this.raw.free(),this.raw=void 0}serializeAll(e,t,i,r,a,s,o,l,c){let h=N.intoRaw(e);const u=this.raw.serializeAll(h,t.raw,i.raw,r.raw,a.raw,s.raw,o.raw,l.raw,c.raw);return h.free(),u}deserializeAll(e){return Ts.fromRaw(this.raw.deserializeAll(e))}},dl=class{constructor(e,t){this.vertices=e,this.colors=t}},Ul=class{constructor(e){this.raw=e||new ka}free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(e,t,i,r,a){this.raw.render(e.raw,t.raw,i.raw,r.raw,a.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}},Ll=class{},gl=class{constructor(e,t,i,r,a){this.params=t,this.bodies=i,this.colliders=r,this.queries=a,this.raw=new Ga(e),this.rawCharacterCollision=new kn,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(e){let t=N.intoRaw(e);return this.raw.setUp(t)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(e){this._applyImpulsesToDynamicBodies=e}characterMass(){return this._characterMass}setCharacterMass(e){this._characterMass=e}offset(){return this.raw.offset()}setOffset(e){this.raw.setOffset(e)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(e){this.raw.setSlideEnabled(e)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(e,t,i){this.raw.enableAutostep(e,t,i)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(e){this.raw.setMaxSlopeClimbAngle(e)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(e){this.raw.setMinSlopeSlideAngle(e)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(e){this.raw.enableSnapToGround(e)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(e,t,i,r,a){let s=N.intoRaw(t);this.raw.computeColliderMovement(this.params.dt,this.bodies.raw,this.colliders.raw,this.queries.raw,e.handle,s,this._applyImpulsesToDynamicBodies,this._characterMass,i,r,this.colliders.castClosure(a)),s.free()}computedMovement(){return N.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(e,t){if(this.raw.computedCollision(e,this.rawCharacterCollision)){let i=this.rawCharacterCollision;return t=t??new Ll,t.translationApplied=N.fromRaw(i.translationApplied()),t.translationRemaining=N.fromRaw(i.translationRemaining()),t.toi=i.toi(),t.witness1=N.fromRaw(i.worldWitness1()),t.witness2=N.fromRaw(i.worldWitness2()),t.normal1=N.fromRaw(i.worldNormal1()),t.normal2=N.fromRaw(i.worldNormal2()),t.collider=this.colliders.get(i.handle()),t}else return null}},Ts=class Ku{constructor(e,t,i,r,a,s,o,l,c,h,u,d,m,_){this.gravity=e,this.integrationParameters=new Fl(t),this.islands=new Bl(i),this.broadPhase=new Tl(r),this.narrowPhase=new vl(a),this.bodies=new hl(s),this.colliders=new Il(o),this.impulseJoints=new Ol(l),this.multibodyJoints=new zl(c),this.ccdSolver=new ul(h),this.queryPipeline=new wl(u),this.physicsPipeline=new xl(d),this.serializationPipeline=new ws(m),this.debugRenderPipeline=new Ul(_),this.characterControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(e=>e.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0}static fromRaw(e){return e?new Ku(N.fromRaw(e.takeGravity()),e.takeIntegrationParameters(),e.takeIslandManager(),e.takeBroadPhase(),e.takeNarrowPhase(),e.takeBodies(),e.takeColliders(),e.takeImpulseJoints(),e.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(e){return new ws().deserializeAll(e)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new dl(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(e,t){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,e,t),this.queryPipeline.update(this.bodies,this.colliders)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}updateSceneQueries(){this.propagateModifiedBodyPositionsToColliders(),this.queryPipeline.update(this.bodies,this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(e){this.integrationParameters.dt=e}get maxVelocityIterations(){return this.integrationParameters.maxVelocityIterations}set maxVelocityIterations(e){this.integrationParameters.maxVelocityIterations=e}get maxVelocityFrictionIterations(){return this.integrationParameters.maxVelocityFrictionIterations}set maxVelocityFrictionIterations(e){this.integrationParameters.maxVelocityFrictionIterations=e}get maxStabilizationIterations(){return this.integrationParameters.maxStabilizationIterations}set maxStabilizationIterations(e){this.integrationParameters.maxStabilizationIterations=e}createRigidBody(e){return this.bodies.createRigidBody(this.colliders,e)}createCharacterController(e){let t=new gl(e,this.integrationParameters,this.bodies,this.colliders,this.queryPipeline);return this.characterControllers.add(t),t}removeCharacterController(e){this.characterControllers.delete(e),e.free()}createCollider(e,t){let i=t?t.handle:void 0;return this.colliders.createCollider(this.bodies,e,i)}createImpulseJoint(e,t,i,r){return this.impulseJoints.createJoint(this.bodies,e,t.handle,i.handle,r)}createMultibodyJoint(e,t,i,r){return this.multibodyJoints.createJoint(e,t.handle,i.handle,r)}getRigidBody(e){return this.bodies.get(e)}getCollider(e){return this.colliders.get(e)}getImpulseJoint(e){return this.impulseJoints.get(e)}getMultibodyJoint(e){return this.multibodyJoints.get(e)}removeRigidBody(e){this.bodies&&this.bodies.remove(e.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(e,t){this.colliders&&this.colliders.remove(e.handle,this.islands,this.bodies,t)}removeImpulseJoint(e,t){this.impulseJoints&&this.impulseJoints.remove(e.handle,t)}removeMultibodyJoint(e,t){this.impulseJoints&&this.multibodyJoints.remove(e.handle,t)}forEachCollider(e){this.colliders.forEach(e)}forEachRigidBody(e){this.bodies.forEach(e)}forEachActiveRigidBody(e){this.bodies.forEachActiveRigidBody(this.islands,e)}castRay(e,t,i,r,a,s,o,l){return this.queryPipeline.castRay(this.bodies,this.colliders,e,t,i,r,a,s?s.handle:null,o?o.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(e,t,i,r,a,s,o,l){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,e,t,i,r,a,s?s.handle:null,o?o.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(e,t,i,r,a,s,o,l,c){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,e,t,i,r,a,s,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionWithShape(e,t,i,r,a,s,o,l){let c=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,e,t,i,r,a,s?s.handle:null,o?o.handle:null,this.colliders.castClosure(l));return c!=null?this.colliders.get(c):null}projectPoint(e,t,i,r,a,s,o){return this.queryPipeline.projectPoint(this.bodies,this.colliders,e,t,i,r,a?a.handle:null,s?s.handle:null,this.colliders.castClosure(o))}projectPointAndGetFeature(e,t,i,r,a,s){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,e,t,i,r?r.handle:null,a?a.handle:null,this.colliders.castClosure(s))}intersectionsWithPoint(e,t,i,r,a,s,o){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,e,this.colliders.castClosure(t),i,r,a?a.handle:null,s?s.handle:null,this.colliders.castClosure(o))}castShape(e,t,i,r,a,s,o,l,c,h,u){return this.queryPipeline.castShape(this.bodies,this.colliders,e,t,i,r,a,s,o,l,c?c.handle:null,h?h.handle:null,this.colliders.castClosure(u))}intersectionsWithShape(e,t,i,r,a,s,o,l,c){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,e,t,i,this.colliders.castClosure(r),a,s,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(e,t,i){this.queryPipeline.collidersWithAabbIntersectingAabb(e,t,this.colliders.castClosure(i))}contactsWith(e,t){this.narrowPhase.contactsWith(e.handle,this.colliders.castClosure(t))}intersectionsWith(e,t){this.narrowPhase.intersectionsWith(e.handle,this.colliders.castClosure(t))}contactPair(e,t,i){this.narrowPhase.contactPair(e.handle,t.handle,i)}intersectionPair(e,t){return this.narrowPhase.intersectionPair(e.handle,t.handle)}};const Mr=new pv;Mr.background=new Ue(11067120);const Ji=new Ph;Ji.setSize(window.innerWidth,window.innerHeight),Ji.setPixelRatio(window.devicePixelRatio),Ji.shadowMap.enabled=!0,document.body.appendChild(Ji.domElement);const vu={type:"change"},el={type:"start"},wu={type:"end"};class kE extends ki{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ir.ROTATE,MIDDLE:Ir.DOLLY,RIGHT:Ir.PAN},this.touches={ONE:Ur.ROTATE,TWO:Ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",st),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",st),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(vu),i.update(),a=r.NONE},this.update=function(){const P=new I,J=new Nt().setFromUnitVectors(e.up,new I(0,1,0)),z=J.clone().invert(),ue=new I,ve=new Nt,xe=2*Math.PI;return function(){const fe=i.object.position;P.copy(fe).sub(i.target),P.applyQuaternion(J),o.setFromVector3(P),i.autoRotate&&a===r.NONE&&w(D()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ge=i.minAzimuthAngle,Pe=i.maxAzimuthAngle;return isFinite(ge)&&isFinite(Pe)&&(ge<-Math.PI?ge+=xe:ge>Math.PI&&(ge-=xe),Pe<-Math.PI?Pe+=xe:Pe>Math.PI&&(Pe-=xe),ge<=Pe?o.theta=Math.max(ge,Math.min(Pe,o.theta)):o.theta=o.theta>(ge+Pe)/2?Math.max(ge,o.theta):Math.min(Pe,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),P.setFromSpherical(o),P.applyQuaternion(z),fe.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||ue.distanceToSquared(i.object.position)>s||8*(1-ve.dot(i.object.quaternion))>s?(i.dispatchEvent(vu),ue.copy(i.object.position),ve.copy(i.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",y),i.domElement.removeEventListener("pointerdown",Oe),i.domElement.removeEventListener("pointercancel",dt),i.domElement.removeEventListener("wheel",qe),i.domElement.removeEventListener("pointermove",mt),i.domElement.removeEventListener("pointerup",dt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",st),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const s=1e-6,o=new ou,l=new ou;let c=1;const h=new I;let u=!1;const d=new Ie,m=new Ie,_=new Ie,v=new Ie,f=new Ie,p=new Ie,M=new Ie,x=new Ie,A=new Ie,b=[],C={};function D(){return 2*Math.PI/60/60*i.autoRotateSpeed}function Y(){return Math.pow(.95,i.zoomSpeed)}function w(P){l.theta-=P}function T(P){l.phi-=P}const Z=function(){const P=new I;return function(J,z){P.setFromMatrixColumn(z,0),P.multiplyScalar(-J),h.add(P)}}(),K=function(){const P=new I;return function(J,z){i.screenSpacePanning===!0?P.setFromMatrixColumn(z,1):(P.setFromMatrixColumn(z,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(J),h.add(P)}}(),B=function(){const P=new I;return function(J,z){const ue=i.domElement;if(i.object.isPerspectiveCamera){const ve=i.object.position;P.copy(ve).sub(i.target);let xe=P.length();xe*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*J*xe/ue.clientHeight,i.object.matrix),K(2*z*xe/ue.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(J*(i.object.right-i.object.left)/i.object.zoom/ue.clientWidth,i.object.matrix),K(z*(i.object.top-i.object.bottom)/i.object.zoom/ue.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function G(P){i.object.isPerspectiveCamera?c/=P:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*P)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(P){i.object.isPerspectiveCamera?c*=P:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/P)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ne(P){d.set(P.clientX,P.clientY)}function $(P){M.set(P.clientX,P.clientY)}function Q(P){v.set(P.clientX,P.clientY)}function ie(P){m.set(P.clientX,P.clientY),_.subVectors(m,d).multiplyScalar(i.rotateSpeed);const J=i.domElement;w(2*Math.PI*_.x/J.clientHeight),T(2*Math.PI*_.y/J.clientHeight),d.copy(m),i.update()}function re(P){x.set(P.clientX,P.clientY),A.subVectors(x,M),A.y>0?G(Y()):A.y<0&&W(Y()),M.copy(x),i.update()}function ye(P){f.set(P.clientX,P.clientY),p.subVectors(f,v).multiplyScalar(i.panSpeed),B(p.x,p.y),v.copy(f),i.update()}function pe(P){P.deltaY<0?W(Y()):P.deltaY>0&&G(Y()),i.update()}function k(P){let J=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?w(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?w(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),J=!0;break}J&&(P.preventDefault(),i.update())}function ee(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const P=.5*(b[0].pageX+b[1].pageX),J=.5*(b[0].pageY+b[1].pageY);d.set(P,J)}}function me(){if(b.length===1)v.set(b[0].pageX,b[0].pageY);else{const P=.5*(b[0].pageX+b[1].pageX),J=.5*(b[0].pageY+b[1].pageY);v.set(P,J)}}function he(){const P=b[0].pageX-b[1].pageX,J=b[0].pageY-b[1].pageY,z=Math.sqrt(P*P+J*J);M.set(0,z)}function U(){i.enableZoom&&he(),i.enablePan&&me()}function Ce(){i.enableZoom&&he(),i.enableRotate&&ee()}function Te(P){if(b.length==1)m.set(P.pageX,P.pageY);else{const z=ce(P),ue=.5*(P.pageX+z.x),ve=.5*(P.pageY+z.y);m.set(ue,ve)}_.subVectors(m,d).multiplyScalar(i.rotateSpeed);const J=i.domElement;w(2*Math.PI*_.x/J.clientHeight),T(2*Math.PI*_.y/J.clientHeight),d.copy(m)}function oe(P){if(b.length===1)f.set(P.pageX,P.pageY);else{const J=ce(P),z=.5*(P.pageX+J.x),ue=.5*(P.pageY+J.y);f.set(z,ue)}p.subVectors(f,v).multiplyScalar(i.panSpeed),B(p.x,p.y),v.copy(f)}function Ee(P){const J=ce(P),z=P.pageX-J.x,ue=P.pageY-J.y,ve=Math.sqrt(z*z+ue*ue);x.set(0,ve),A.set(0,Math.pow(x.y/M.y,i.zoomSpeed)),G(A.y),M.copy(x)}function Je(P){i.enableZoom&&Ee(P),i.enablePan&&oe(P)}function Se(P){i.enableZoom&&Ee(P),i.enableRotate&&Te(P)}function Oe(P){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",mt),i.domElement.addEventListener("pointerup",dt)),V(P),P.pointerType==="touch"?Ut(P):xt(P))}function mt(P){i.enabled!==!1&&(P.pointerType==="touch"?E(P):ft(P))}function dt(P){ae(P),b.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",mt),i.domElement.removeEventListener("pointerup",dt)),i.dispatchEvent(wu),a=r.NONE}function xt(P){let J;switch(P.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Ir.DOLLY:if(i.enableZoom===!1)return;$(P),a=r.DOLLY;break;case Ir.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;Q(P),a=r.PAN}else{if(i.enableRotate===!1)return;ne(P),a=r.ROTATE}break;case Ir.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;ne(P),a=r.ROTATE}else{if(i.enablePan===!1)return;Q(P),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(el)}function ft(P){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;ie(P);break;case r.DOLLY:if(i.enableZoom===!1)return;re(P);break;case r.PAN:if(i.enablePan===!1)return;ye(P);break}}function qe(P){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(P.preventDefault(),i.dispatchEvent(el),pe(P),i.dispatchEvent(wu))}function st(P){i.enabled===!1||i.enablePan===!1||k(P)}function Ut(P){switch(se(P),b.length){case 1:switch(i.touches.ONE){case Ur.ROTATE:if(i.enableRotate===!1)return;ee(),a=r.TOUCH_ROTATE;break;case Ur.PAN:if(i.enablePan===!1)return;me(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case Ur.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;U(),a=r.TOUCH_DOLLY_PAN;break;case Ur.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ce(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(el)}function E(P){switch(se(P),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Te(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;oe(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Je(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Se(P),i.update();break;default:a=r.NONE}}function y(P){i.enabled!==!1&&P.preventDefault()}function V(P){b.push(P)}function ae(P){delete C[P.pointerId];for(let J=0;J<b.length;J++)if(b[J].pointerId==P.pointerId){b.splice(J,1);return}}function se(P){let J=C[P.pointerId];J===void 0&&(J=new Ie,C[P.pointerId]=J),J.set(P.pageX,P.pageY)}function ce(P){const J=P.pointerId===b[0].pointerId?b[1]:b[0];return C[J.pointerId]}i.domElement.addEventListener("contextmenu",y),i.domElement.addEventListener("pointerdown",Oe),i.domElement.addEventListener("pointercancel",dt),i.domElement.addEventListener("wheel",qe,{passive:!1}),this.update()}}const Zi=new Bt(45,window.innerWidth/window.innerHeight,.1,1e3);Zi.position.x=0,Zi.position.y=3,Zi.position.z=5;const br=new kE(Zi,Ji.domElement);br.enableDamping=!0,br.minDistance=5,br.maxDistance=15,br.maxPolarAngle=Math.PI/2-.05,br.update();const GE=new zv(16777215,.7),li=new au(16777215,1);li.position.set(-60,100,-10),li.castShadow=!0,li.shadow.camera.top=50,li.shadow.camera.bottom=-50,li.shadow.camera.left=-50,li.shadow.camera.right=50,li.shadow.camera.near=.1,li.shadow.camera.far=200,li.shadow.mapSize.width=4096,li.shadow.mapSize.height=4096;function rs(n){n.wrapS=n.wrapT=ir,n.repeat.x=n.repeat.y=10}function VE({scene:n,world:e,nsubdivs:t=20,scale:i,transition:r}){const a={x:.5,y:.5,z:.5,...i},s={x:0,y:0,z:0,...r},o=new tu,l=new Ta(a.x,a.z,t,t),c=new Na({map:o.load("./assets/textures/sand/Sand 002_COLOR.jpg"),normalMap:o.load("./assets/textures/sand/Sand 002_NRM.jpg"),displacementMap:o.load("./assets/textures/sand/Sand 002_DISP.jpg"),displacementScale:.1,aoMap:o.load("./assets/textures/sand/Sand 002_OCC.jpg")});rs(c.map),rs(c.normalMap),rs(c.displacementMap),rs(c.aoMap);const h=new Wt(l,c);h.receiveShadow=!0,h.castShadow=!0,h.rotation.x=-Math.PI/2,h.position.x=s.x,h.position.z=s.z,n.add(h);const u=h.geometry.attributes.position.array,d=a.x/t,m=a.z/t,_=new Map;for(let x=0;x<u.length;x+=3){let A=Math.floor(Math.abs(u[x]+a.x/2)/d),b=Math.floor(Math.abs(u[x+1]-a.z/2)/m);const C=Math.random();u[x+2]=a.y*C+s.y,_.get(b)||_.set(b,new Map),_.get(b).set(A,C)}h.geometry.computeVertexNormals();let v=[];for(let x=0;x<=t;++x)for(let A=0;A<=t;++A)v.push(_.get(A).get(x));let f=qn.fixed();r&&f.setTranslation(s.x,s.y,s.z);let p=e.createRigidBody(f),M=$n.heightfield(t,t,new Float32Array(v),new Es(a.x,a.y,a.z));return e.createCollider(M,p),{rigid:p,mesh:h}}function WE({scene:n,world:e,scale:t,transition:i}){const r={x:.5,y:.5,z:.5,...t},a={x:0,y:0,z:0,...i},s=new Wt(new an(r.x*2,r.y*2,r.z*2),new bv({color:"red"}));s.castShadow=!0,s.receiveShadow=!0,n.add(s);const o=qn.dynamic();i&&o.setTranslation(a.x,a.y,a.z);const l=e.createRigidBody(o),c=$n.cuboid(r.x,r.y,r.z);return e.createCollider(c,l),{rigid:l,mesh:s}}function xu(n,e){if(e===jd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ks||e===bc){let t=n.getIndex();if(t===null){const s=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Ks)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=n.clone();return a.setIndex(r),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class jE extends Fn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new JE(t)}),this.register(function(t){return new rT(t)}),this.register(function(t){return new nT(t)}),this.register(function(t){return new aT(t)}),this.register(function(t){return new QE(t)}),this.register(function(t){return new $E(t)}),this.register(function(t){return new eT(t)}),this.register(function(t){return new tT(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new iT(t)}),this.register(function(t){return new ZE(t)}),this.register(function(t){return new YE(t)}),this.register(function(t){return new sT(t)}),this.register(function(t){return new oT(t)})}load(e,t,i,r){const a=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Bo.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),a.manager.itemError(e),a.manager.itemEnd(e)},l=new eu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{a.parse(c,s,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let a;const s={},o={},l=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yu){try{s[je.KHR_BINARY_GLTF]=new lT(e)}catch(h){r&&r(h);return}a=JSON.parse(s[je.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yT(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,s[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const u=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:s[u]=new qE;break;case je.KHR_DRACO_MESH_COMPRESSION:s[u]=new cT(a,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:s[u]=new hT;break;case je.KHR_MESH_QUANTIZATION:s[u]=new uT;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,a){i.parse(e,t,r,a)})}}function XE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class YE{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const a=t.json,s=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let o;const l=new Ue(16777215);s.color!==void 0&&l.fromArray(s.color);const c=s.range!==void 0?s.range:0;switch(s.type){case"directional":o=new au(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Bv(l),o.distance=c;break;case"spot":o=new Ov(l),o.distance=c,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,o.angle=s.spot.outerConeAngle,o.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return o.position.set(0,0,0),o.decay=2,$i(o,s),s.intensity!==void 0&&(o.intensity=s.intensity),o.name=t.createUniqueName(s.name||"light_"+e),r=Promise.resolve(o),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(s){return i._getNodeRef(t.cache,a,s)})}}class qE{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return dr}extendParams(e,t,i){const r=[];e.color=new Ue(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}a.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",a.baseColorTexture,Re))}return Promise.all(r)}}class KE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class JE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:wr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(o,o)}return Promise.all(a)}}class ZE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:wr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],s=r.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(a)}}class QE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:wr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=r.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Re)),s.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(a)}}class $E{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:wr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(a)}}class eT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:wr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],s=r.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Ue(o[0],o[1],o[2]),Promise.all(a)}}class tT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:wr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class iT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:wr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],s=r.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Ue(o[0],o[1],o[2]),s.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,Re)),Promise.all(a)}}class rT{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const a=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}}class nT{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=r.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,s.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aT{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=r.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,s.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sT{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(m){return m.buffer}):s.ready.then(function(){const m=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(m),h,u,d,r.mode,r.filter),m})})}else return null}}class oT{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==$t.TRIANGLES&&l.mode!==$t.TRIANGLE_STRIP&&l.mode!==$t.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=i.extensions[this.name].attributes,s=[],o={};for(const l in a)s.push(this.parser.getDependency("accessor",a[l]).then(c=>(o[l]=c,o[l])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,d=[];for(const m of h){const _=new He,v=new I,f=new Nt,p=new I(1,1,1),M=new xv(m.geometry,m.material,u);for(let x=0;x<u;x++)o.TRANSLATION&&v.fromBufferAttribute(o.TRANSLATION,x),o.ROTATION&&f.fromBufferAttribute(o.ROTATION,x),o.SCALE&&p.fromBufferAttribute(o.SCALE,x),M.setMatrixAt(x,_.compose(v,f,p));for(const x in o)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,o[x]);ct.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const yu="glTF",jn=12,Su={JSON:1313821514,BIN:5130562};class lT{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,jn),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-jn,a=new DataView(e,jn);let s=0;for(;s<r;){const o=a.getUint32(s,!0);s+=4;const l=a.getUint32(s,!0);if(s+=4,l===Su.JSON){const c=new Uint8Array(e,jn+s,o);this.content=i.decode(c)}else if(l===Su.BIN){const c=jn+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const h in s){const u=il[h]||h.toLowerCase();o[u]=s[h]}for(const h in e.attributes){const u=il[h]||h.toLowerCase();if(s[h]!==void 0){const d=i.accessors[e.attributes[h]],m=wn[d.componentType];c[u]=m.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u){r.decodeDracoFile(h,function(d){for(const m in d.attributes){const _=d.attributes[m],v=l[m];v!==void 0&&(_.normalized=v)}u(d)},o,c)})})}}class hT{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class uT{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Mu extends Dn{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let s=0;s!==r;s++)t[s]=i[a+s];return t}interpolate_(e,t,i,r){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=r-t,u=(i-t)/h,d=u*u,m=d*u,_=e*c,v=_-c,f=-2*m+3*d,p=m-d,M=1-f,x=p-d+u;for(let A=0;A!==o;A++){const b=s[v+A+o],C=s[v+A+l]*h,D=s[_+A+o],Y=s[_+A]*h;a[A]=M*b+x*C+f*D+p*Y}return a}}const dT=new Nt;class pT extends Mu{interpolate_(e,t,i,r){const a=super.interpolate_(e,t,i,r);return dT.fromArray(a).normalize().toArray(a),a}}const $t={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bu={9728:At,9729:Vt,9984:ks,9985:$l,9986:na,9987:rr},Eu={33071:Kt,33648:ra,10497:ir},tl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},il={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mT={CUBICSPLINE:void 0,LINEAR:zr,STEP:Sn},rl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Na({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),n.DefaultMaterial}function Xn(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function $i(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gT(n,e,t){let i=!1,r=!1,a=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(a=!0),i&&r&&a)break}if(!i&&!r&&!a)return Promise.resolve(n);const s=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;s.push(d)}if(r){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(d)}if(a){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(n.morphAttributes.position=h),r&&(n.morphAttributes.normal=u),a&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function _T(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vT(n){const e=n.extensions&&n.extensions[je.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Tu(e.attributes):t=n.indices+":"+Tu(n.attributes)+":"+n.mode,t}function Tu(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function nl(n){switch(n){case Int8Array:return .007874015748031496;case Uint8Array:return .00392156862745098;case Int16Array:return 3051850947599719e-20;case Uint16Array:return 15259021896696422e-21;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const xT=new He;class yT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new XE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,a=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,a=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&a<98?this.textureLoader=new tu(this.options.manager):this.textureLoader=new kv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new eu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const o={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:i,userData:{}};Xn(a,o,r),$i(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){const s=t[r].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let r=0,a=e.length;r<a;r++){const s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),a=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,h]of s.children.entries())a(h,o.children[c])};return a(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const a=e(t[r]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(a,s){i.load(Bo.resolveURL(t.uri,r.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const s=tl[r.type],o=wn[r.componentType],l=r.normalized===!0,c=new o(r.count*s);return Promise.resolve(new Ot(c,s,l))}const a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(s){const o=s[0],l=tl[r.type],c=wn[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let v,f;if(m&&m!==u){const p=Math.floor(d/m),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let x=t.cache.get(M);x||(v=new c(o,p*m,r.count*m/h),x=new mv(v,m/h),t.cache.add(M,x)),f=new Co(x,l,d%m/h,_)}else o===null?v=new c(r.count*l):v=new c(o,d,r.count*l),f=new Ot(v,l,_);if(r.sparse!==void 0){const p=tl.SCALAR,M=wn[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,A=r.sparse.values.byteOffset||0,b=new M(s[1],x,r.sparse.count*p),C=new c(s[2],A,r.sparse.count*l);o!==null&&(f=new Ot(f.array.slice(),f.itemSize,f.normalized));for(let D=0,Y=b.length;D<Y;D++){const w=b[D];if(f.setX(w,C[D*l]),l>=2&&f.setY(w,C[D*l+1]),l>=3&&f.setZ(w,C[D*l+2]),l>=4&&f.setW(w,C[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let s=this.textureLoader;if(a.uri){const o=i.manager.getHandler(a.uri);o!==null&&(s=o)}return this.loadTextureImage(e,r,s)}loadTextureImage(e,t,i){const r=this,a=this.json,s=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(a.samplers||{})[s.sampler]||{};return h.magFilter=bu[u.magFilter]||Vt,h.minFilter=bu[u.minFilter]||rr,h.wrapS=Eu[u.wrapS]||ir,h.wrapT=Eu[u.wrapT]||ir,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=r.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=i.getDependency("bufferView",s.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:s.mimeType});return l=o.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,m){let _=d;t.isImageBitmapLoader===!0&&(_=function(v){const f=new Pt(v);f.needsUpdate=!0,d(f)}),t.load(Bo.resolveURL(u,a.path),_,void 0,m)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=s.mimeType||wT(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){const a=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),a.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=a.associations.get(s);s=a.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),a.associations.set(s,l)}}return r!==void 0&&(s.colorSpace=r),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Xh,ai.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new zh,ai.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||a||s){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),a&&(l.vertexColors=!0),s&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Na}loadMaterial(e){const t=this,i=this.json,r=this.extensions,a=i.materials[e];let s;const o={},l=a.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const u=r[je.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),c.push(u.extendParams(o,a,t))}else{const u=a.pbrMetallicRoughness||{};if(o.color=new Ue(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Re)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=ui);const h=a.alphaMode||rl.OPAQUE;if(h===rl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===rl.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==dr&&(c.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Ie(1,1),a.normalTexture.scale!==void 0)){const u=a.normalTexture.scale;o.normalScale.set(u,u)}return a.occlusionTexture!==void 0&&s!==dr&&(c.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==dr&&(o.emissive=new Ue().fromArray(a.emissiveFactor)),a.emissiveTexture!==void 0&&s!==dr&&c.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Re)),Promise.all(c).then(function(){const u=new s(o);return a.name&&(u.name=a.name),$i(u,a),t.associations.set(u,{materials:e}),a.extensions&&Xn(r,u,a),u})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");let i=t;for(let r=1;this.nodeNamesUsed[i];++r)i=t+"_"+r;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function a(o){return i[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Au(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=vT(c),u=r[h];if(u)s.push(u.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=a(c):d=Au(new pi,c,t),r[h]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,r=this.extensions,a=i.meshes[e],s=a.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const h=s[l].material===void 0?fT(this.cache):this.getDependency("material",s[l].material);o.push(h)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let m=0,_=h.length;m<_;m++){const v=h[m],f=s[m];let p;const M=c[m];if(f.mode===$t.TRIANGLES||f.mode===$t.TRIANGLE_STRIP||f.mode===$t.TRIANGLE_FAN||f.mode===void 0)p=a.isSkinnedMesh===!0?new gv(v,M):new Wt(v,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),f.mode===$t.TRIANGLE_STRIP?p.geometry=xu(p.geometry,bc):f.mode===$t.TRIANGLE_FAN&&(p.geometry=xu(p.geometry,Ks));else if(f.mode===$t.LINES)p=new yv(v,M);else if(f.mode===$t.LINE_STRIP)p=new Io(v,M);else if(f.mode===$t.LINE_LOOP)p=new Sv(v,M);else if(f.mode===$t.POINTS)p=new Mv(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(p.geometry.morphAttributes).length>0&&_T(p,a),p.name=t.createUniqueName(a.name||"mesh_"+e),$i(p,a),f.extensions&&Xn(r,p,f),t.assignFinalMaterial(p),u.push(p)}for(let m=0,_=u.length;m<_;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return u[0];const d=new vr;t.associations.set(d,{meshes:e});for(let m=0,_=u.length;m<_;m++)d.add(u[m]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Bt(cp.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new So(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),$i(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,a=t.joints.length;r<a;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const a=r.pop(),s=r,o=[],l=[];for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u){o.push(u);const d=new He;a!==null&&d.fromArray(a.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Po(o,l)})}loadAnimation(e){const t=this.json.animations[e],i=t.name?t.name:"animation_"+e,r=[],a=[],s=[],o=[],l=[];for(let c=0,h=t.channels.length;c<h;c++){const u=t.channels[c],d=t.samplers[u.sampler],m=u.target,_=m.node,v=t.parameters!==void 0?t.parameters[d.input]:d.input,f=t.parameters!==void 0?t.parameters[d.output]:d.output;m.node!==void 0&&(r.push(this.getDependency("node",_)),a.push(this.getDependency("accessor",v)),s.push(this.getDependency("accessor",f)),o.push(d),l.push(m))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2],m=c[3],_=c[4],v=[];for(let f=0,p=h.length;f<p;f++){const M=h[f],x=u[f],A=d[f],b=m[f],C=_[f];if(M===void 0)continue;M.updateMatrix();let D;switch(Qi[C.path]){case Qi.weights:D=Nn;break;case Qi.rotation:D=xr;break;case Qi.position:case Qi.scale:default:D=On;break}const Y=M.name?M.name:M.uuid,w=b.interpolation!==void 0?mT[b.interpolation]:zr,T=[];Qi[C.path]===Qi.weights?M.traverse(function(K){K.morphTargetInfluences&&T.push(K.name?K.name:K.uuid)}):T.push(Y);let Z=A.array;if(A.normalized){const K=nl(Z.constructor),B=new Float32Array(Z.length);for(let G=0,W=Z.length;G<W;G++)B[G]=Z[G]*K;Z=B}for(let K=0,B=T.length;K<B;K++){const G=new D(T[K]+"."+Qi[C.path],x.array,Z,w);b.interpolation==="CUBICSPLINE"&&(G.createInterpolant=function(W){const ne=this instanceof xr?pT:Mu;return new ne(this.times,this.values,this.getValueSize()/3,W)},G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),v.push(G)}}return new Do(i,void 0,v)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(a){const s=i._getNodeRef(i.meshCache,r.mesh,a);return r.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),s})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],a=i._loadNodeShallow(e),s=[],o=r.children||[];for(let c=0,h=o.length;c<h;c++)s.push(i.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([a,Promise.all(s),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,xT)});for(let m=0,_=u.length;m<_;m++)h.add(u[m]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],s=a.name?r.createUniqueName(a.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(r.getDependency("camera",a.camera).then(function(c){return r._getNodeRef(r.cameraCache,a.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(a.isBone===!0?h=new Nh:c.length>1?h=new vr:c.length===1?h=c[0]:h=new ct,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(a.name&&(h.userData.name=a.name,h.name=s),$i(h,a),a.extensions&&Xn(i,h,a),a.matrix!==void 0){const u=new He;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,a=new vr;i.name&&(a.name=r.createUniqueName(i.name)),$i(a,i),i.extensions&&Xn(t,a,i);const s=i.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(r.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)a.add(l[h]);const c=h=>{const u=new Map;for(const[d,m]of r.associations)(d instanceof ai||d instanceof Pt)&&u.set(d,m);return h.traverse(d=>{const m=r.associations.get(d);m!=null&&u.set(d,m)}),u};return r.associations=c(a),a})}}function ST(n,e,t){const i=e.attributes,r=new Ti;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=nl(wn[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new I,l=new I;for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],m=d.min,_=d.max;if(m!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(_[2]))),d.normalized){const v=nl(wn[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const s=new Ci;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=s}function Au(n,e,t){const i=e.attributes,r=[];function a(s,o){return t.getDependency("accessor",s).then(function(l){n.setAttribute(o,l)})}for(const s in i){const o=il[s]||s.toLowerCase();o in n.attributes||r.push(a(i[s],o))}if(e.indices!==void 0&&!n.index){const s=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(s)}return $i(n,e),ST(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?gT(n,e.targets,t):n})}const Ru="w",ns="a",Cu="s",as="d",MT=[Ru,ns,Cu,as],Pu=.28;class bT{constructor(e,t,i,r,a,s,o,l,c){$e(this,"model");$e(this,"mixer");$e(this,"animationsMap",new Map);$e(this,"orbitControl");$e(this,"camera");$e(this,"toggleRun",!0);$e(this,"currentAction");$e(this,"walkDirection",new I);$e(this,"rotateAngle",new I(0,1,0));$e(this,"rotateQuartenion",new Nt);$e(this,"cameraTarget",new I);$e(this,"storedFall",0);$e(this,"fadeDuration",.2);$e(this,"runVelocity",5);$e(this,"walkVelocity",2);$e(this,"world");$e(this,"ray");$e(this,"rigidBody");this.model=e,this.mixer=t,this.animationsMap=i,this.orbitControl=r,this.camera=a,this.currentAction=s,this.animationsMap.forEach((h,u)=>{u===s&&h.play()}),this.world=o,this.ray=l,this.rigidBody=c}lerp(e,t,i){return e*(1-i)+t*i}switchRunToggle(){this.toggleRun=!this.toggleRun}update(e,t){var o;const i=MT.some(l=>t[l]===!0);let r="";if(i&&this.toggleRun?r="Run":i?r="Walk":r="Idle",this.currentAction!==r){const l=this.animationsMap.get(r);(o=this.animationsMap.get(this.currentAction))==null||o.fadeOut(this.fadeDuration),l==null||l.reset().fadeIn(this.fadeDuration).play(),this.currentAction=r}this.mixer.update(e),this.walkDirection.x=this.walkDirection.y=this.walkDirection.z=0;let a=0;if(this.currentAction==="Run"||this.currentAction==="Walk"){const l=Math.atan2(this.camera.position.x-this.model.position.x,this.camera.position.z-this.model.position.z),c=this.directionOffset(t);this.rotateQuartenion.setFromAxisAngle(this.rotateAngle,l+c),this.model.quaternion.rotateTowards(this.rotateQuartenion,.2),this.camera.getWorldDirection(this.walkDirection),this.walkDirection.y=0,this.walkDirection.normalize(),this.walkDirection.applyAxisAngle(this.rotateAngle,c),a=this.currentAction==="Run"?this.runVelocity:this.walkVelocity}const s=this.rigidBody.translation();if(s.y<-1)this.rigidBody.setNextKinematicTranslation({x:0,y:10,z:0});else{const l=this.camera.position.sub(this.model.position);this.model.position.x=s.x,this.model.position.y=s.y,this.model.position.z=s.z,this.updateCameraTarget(l),this.walkDirection.y+=this.lerp(this.storedFall,-9.81*e,.1),this.storedFall=this.walkDirection.y,this.ray.origin.x=s.x,this.ray.origin.y=s.y,this.ray.origin.z=s.z;const c=this.world.castRay(this.ray,.5,!1);if(c){const h=this.ray.pointAt(c.toi),u=s.y-(h.y+Pu);u<0&&(this.storedFall=0,this.walkDirection.y=this.lerp(0,Math.abs(u),.5))}this.walkDirection.x=this.walkDirection.x*a*e,this.walkDirection.z=this.walkDirection.z*a*e,this.rigidBody.setNextKinematicTranslation({x:s.x+this.walkDirection.x,y:s.y+this.walkDirection.y,z:s.z+this.walkDirection.z})}}updateCameraTarget(e){const t=this.rigidBody.translation();this.camera.position.x=t.x+e.x,this.camera.position.y=t.y+e.y,this.camera.position.z=t.z+e.z,this.cameraTarget.x=this.model.position.x,this.cameraTarget.y=this.model.position.y+1,this.cameraTarget.z=this.model.position.z,this.orbitControl.target=this.cameraTarget}directionOffset(e){let t=0;return e[Ru]?e[ns]?t=Math.PI/4:e[as]&&(t=-Math.PI/4):e[Cu]?e[ns]?t=Math.PI/4+Math.PI/2:e[as]?t=-Math.PI/4-Math.PI/2:t=Math.PI:e[ns]?t=Math.PI/2:e[as]&&(t=-Math.PI/2),t}}const ET="./assets/models/Soldier.glb?url";class TT{constructor(e,t,i,r){$e(this,"scene");$e(this,"world");$e(this,"camera");$e(this,"orbitControls");$e(this,"isReady",!1);$e(this,"model");$e(this,"controls");this.scene=e,this.world=t,this.camera=i,this.orbitControls=r,this.model=null,this.controls=null,this.init()}init(){new jE().load(ET,e=>{const t=e.scene;t.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),this.scene.add(t),this.model=t;const i=e.animations,r=new t0(t),a=new Map;i.filter(c=>c.name!="TPose").forEach(c=>{a.set(c.name,r.clipAction(c))});const s=qn.kinematicPositionBased().setTranslation(-1,3,1),o=this.world.createRigidBody(s),l=$n.ball(Pu);this.world.createCollider(l,o),this.controls=new bT(t,r,a,this.orbitControls,this.camera,"Idle",this.world,new Sl({x:0,y:0,z:0},{x:0,y:-1,z:0}),o),this.isReady=!0})}}class AT{constructor(){$e(this,"isRun",!1);$e(this,"callbacks",[]);$e(this,"clock",new Gv)}add(e){this.callbacks.indexOf(e)>-1||this.callbacks.push(e)}remove(e){const t=this.callbacks.indexOf(e);t>-1&&this.callbacks.splice(t,1)}run(){this.isRun&&(this.callbacks.forEach(e=>e(this.clock)),window.requestAnimationFrame(this.run.bind(this)))}start(){this.isRun||(this.isRun=!0,this.run())}stop(){this.isRun=!1}}const Lu=new AT;function Iu(){const n=window.innerWidth,e=window.innerHeight;Ji.setPixelRatio(window.devicePixelRatio),Ji.setSize(n,e),Zi.aspect=n/e,Zi.updateProjectionMatrix()}function RT(){window.addEventListener("resize",Iu),Iu()}Ju(()=>import("./rapier-3daf1080.js").then(async n=>(await n.__tla,n)),[],import.meta.url).then(CT);function CT(){const n={x:0,y:-9.81,z:0},e=new Ts(n),t=[];RT(),Mr.add(GE),Mr.add(li),VE({scene:Mr,world:e,scale:{x:70,y:2,z:70}});const i=WE({scene:Mr,world:e,transition:{x:5,y:8}});t.push(i);const r=new TT(Mr,e,Zi,br);Lu.add(s=>{var o;if(r.isReady){let l=s.getDelta();(o=r==null?void 0:r.controls)==null||o.update(l,a)}e.step(),t.forEach(l=>{let c=l.rigid.translation(),h=l.rigid.rotation();l.mesh.position.x=c.x,l.mesh.position.y=c.y,l.mesh.position.z=c.z,l.mesh.setRotationFromQuaternion(new Nt(h.x,h.y,h.z,h.w))}),br.update(),Ji.render(Mr,Zi)});const a={};document.addEventListener("keydown",s=>{var o;s.shiftKey&&r.isReady?(o=r==null?void 0:r.controls)==null||o.switchRunToggle():a[s.key.toLocaleLowerCase()]=!0}),document.addEventListener("keyup",s=>{a[s.key.toLocaleLowerCase()]=!1}),Lu.start()}})();export{hl as $,os as A,ls as B,ul as C,dl as D,pl as E,xn as F,ml as G,fl as H,Rr as I,Ou as J,gl as K,_l as L,Cr as M,vl as N,wl as O,xl as P,cs as Q,yl as R,Sl as S,hs as T,Ml as U,N as V,us as W,bl as X,El as Y,ds as Z,qn as _,OT as __tla,Tl as a,hi as a0,De as a1,ps as a2,Kn as a3,ms as a4,fs as a5,gs as a6,Al as a7,_s as a8,vs as a9,ws as aa,St as ab,xs as ac,Jn as ad,Zn as ae,ze as af,Rl as ag,Cl as ah,Pl as ai,ys as aj,Ss as ak,Ms as al,bs as am,Es as an,Ts as ao,As as b,Ll as c,Qn as d,Rs as e,$n as f,Il as g,Cs as h,ea as i,Ps as j,Ls as k,Ul as l,Dl as m,Nl as n,Is as o,Ol as p,Fl as q,Bl as r,Et as s,Hl as t,Pr as u,Fu as v,zl as w,Us as x,Ds as y,Ns as z};
