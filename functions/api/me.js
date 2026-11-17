import {json,isAdmin} from "./_auth.js";
export async function onRequestGet({request,env}){return isAdmin(request,env.SESSION_SECRET)?json({ok:true}):json({error:"Unauthorized"},401);}
