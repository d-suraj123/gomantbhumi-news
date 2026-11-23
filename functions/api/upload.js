import {json,isAdmin} from "./_auth.js";
const MAX=8*1024*1024;
const TYPES={"image/jpeg":"jpg","image/png":"png","image/webp":"webp","image/gif":"gif"};
export async function onRequestPost({request,env}){
 if(!await isAdmin(request,env.SESSION_SECRET))return json({error:"Admin login आवश्यक आहे."},401);
 if(!env.IMAGES)return json({error:"Cloudflare R2 binding IMAGES सेट केलेले नाही."},503);
 try{
  const form=await request.formData(),file=form.get("image");
  if(!file||typeof file.arrayBuffer!=="function")return json({error:"फोटो निवडा."},400);
  if(!TYPES[file.type])return json({error:"फक्त JPG, PNG, WEBP किंवा GIF फोटो अपलोड करा."},400);
  if(file.size<1||file.size>MAX)return json({error:"फोटोचा आकार 8 MB पेक्षा कमी असावा."},400);
  const key="news/"+crypto.randomUUID()+"."+TYPES[file.type];
  await env.IMAGES.put(key,file.stream(),{httpMetadata:{contentType:file.type,cacheControl:"public, max-age=31536000, immutable"}});
  return json({ok:true,key,url:"/api/image?key="+encodeURIComponent(key)});
 }catch(e){return json({error:"फोटो अपलोड करता आला नाही: "+String(e.message||e)},500)}
}