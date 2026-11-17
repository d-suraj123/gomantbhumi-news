const COOKIE="gb_admin_v3";
const enc=s=>new TextEncoder().encode(s);
function b64(bytes){let bin="";for(const x of new Uint8Array(bytes))bin+=String.fromCharCode(x);return btoa(bin).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");}
function unb64(s){s=s.replace(/-/g,"+").replace(/_/g,"/");while(s.length%4)s+="=";return Uint8Array.from(atob(s),c=>c.charCodeAt(0));}
async function sign(value,secret){const key=await crypto.subtle.importKey("raw",enc(secret),{name:"HMAC",hash:"SHA-256"},false,["sign"]);return b64(await crypto.subtle.sign("HMAC",key,enc(value)));}
export async function makeCookie(secret){const payload=b64(enc(String(Date.now()+8*60*60*1000)));const sig=await sign(payload,secret);return `${COOKIE}=${payload}.${sig}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`;}
export async function isAdmin(request,secret){if(!secret)return false;const cookie=(request.headers.get("Cookie")||"").split(";").map(x=>x.trim()).find(x=>x.startsWith(COOKIE+"="));if(!cookie)return false;const token=cookie.slice(COOKIE.length+1).split(".");if(token.length!==2)return false;const expected=await sign(token[0],secret);if(expected!==token[1])return false;try{return Number(new TextDecoder().decode(unb64(token[0])))>Date.now()}catch{return false}}
export const clearCookie=`${COOKIE}=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`;
export function json(data,status=200,headers={}){return new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...headers}})}
