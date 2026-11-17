import {json} from "./_auth.js";
export async function onRequestPost(){
  const headers = new Headers({
    "content-type":"application/json; charset=utf-8",
    "cache-control":"no-store",
    "clear-site-data": '"cookies"'
  });
  headers.append("set-cookie","gb_admin_v2=; Path=/; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; HttpOnly; SameSite=Strict");
  headers.append("set-cookie","gb_admin=; Path=/; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; HttpOnly; SameSite=Strict");
  headers.append("set-cookie","gb_admin_v2=; Domain=gomantbhumi.pages.dev; Path=/; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; HttpOnly; SameSite=Strict");
  headers.append("set-cookie","gb_admin=; Domain=gomantbhumi.pages.dev; Path=/; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; HttpOnly; SameSite=Strict");
  return new Response(JSON.stringify({ok:true}),{status:200,headers});
}
