import {json,clearCookie} from "./_auth.js";
export async function onRequestPost(){
  return json({ok:true},200,{
    "set-cookie":clearCookie + "; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
    "clear-site-data": '"cookies"'
  });
}
