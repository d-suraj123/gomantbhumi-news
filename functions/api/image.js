import {json} from "./_auth.js";
export async function onRequestGet({request,env}){
 if(!env.IMAGES)return json({error:"Cloudflare R2 binding IMAGES सेट केलेले नाही."},503);
 const key=new URL(request.url).searchParams.get("key")||"";
 if(!key.startsWith("news/")||key.includes(".."))return json({error:"चुकीची फोटो लिंक."},400);
 const object=await env.IMAGES.get(key);
 if(!object)return json({error:"फोटो सापडला नाही."},404);
 const headers=new Headers();
 object.writeHttpMetadata(headers);
 headers.set("etag",object.httpEtag);
 headers.set("cache-control","public, max-age=31536000, immutable");
 return new Response(object.body,{headers});
}