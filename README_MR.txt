गोमंतभूमी - Cloudflare Pages + D1 (मोफत सुरुवातीचा सेटअप)
===========================================================

या पॅकेजमध्ये:
- public/ : न्यूज पोर्टल
- public/admin.html : Admin Dashboard
- functions/api/ : सुरक्षित API (login, news CRUD)
- schema.sql : D1 database टेबल तयार करण्यासाठी

महत्त्वाचे:
हे तयार केलेले starter project आहे. तुमच्या Cloudflare/GitHub खात्यात लॉगिन किंवा deployment मी तुमच्या वतीने करू शकत नाही. तुम्हाला स्वतः खालील स्टेप्स पूर्ण कराव्या लागतील.

भाग 1 - खाते तयार करा
1. https://github.com/ येथे मोफत खाते तयार करा किंवा लॉगिन करा.
2. https://dash.cloudflare.com/ येथे मोफत खाते तयार करा किंवा लॉगिन करा.

भाग 2 - GitHub वर कोड अपलोड
1. ZIP extract करा.
2. GitHub मध्ये New repository निवडा. नाव: gomantbhumi-news
3. Repository Public किंवा Private ठेऊ शकता.
4. या ZIP मधील सर्व फाईल्स आणि folders repository च्या root मध्ये upload करा. (public आणि functions folders root मध्येच असावेत.)
5. Commit changes करा.

भाग 3 - Cloudflare Pages deploy
1. Cloudflare Dashboard > Workers & Pages उघडा.
2. Create application > Pages > Connect to Git निवडा.
3. GitHub जोडून gomantbhumi-news repository निवडा.
4. Project name: gomantbhumi (उपलब्ध असल्यास)
5. Production branch: main
6. Framework preset: None
7. Build command रिकामे ठेवा.
8. Build output directory: public
9. Save and Deploy.
10. Deploy झाल्यावर Cloudflare मोफत *.pages.dev पत्ता देईल. तो project नावावर अवलंबून असेल.

भाग 4 - D1 database
1. Cloudflare Dashboard > Storage & databases > D1 SQL Database.
2. Create database. नाव: gomantbhumi-db
3. Database उघडून Console/Query मध्ये schema.sql मधील संपूर्ण SQL paste करून Execute करा.
4. Workers & Pages > gomantbhumi project > Settings > Bindings > Add > D1 database.
5. Variable name: DB
6. तुमचे gomantbhumi-db database निवडा आणि Save करा.
7. नवीन deployment करा (Redeploy).

भाग 5 - Admin password आणि session secret
1. Cloudflare Pages project > Settings > Variables and Secrets.
2. Production environment मध्ये खालील दोन secrets जोडा:
   ADMIN_PASSWORD = स्वतःचा मजबूत, वेगळा password
   SESSION_SECRET = किमान 32 random characters चा गुप्त मजकूर
3. हे secrets कोणालाही पाठवू नका. Chat मध्येही लिहू नका.
4. Save करा आणि Redeploy करा.

भाग 6 - Admin वापरणे
1. तुमच्या pages.dev वेबसाइटवर /admin.html उघडा.
2. ADMIN_PASSWORD ने login करा.
3. बातमीचे शीर्षक, विभाग, सारांश, पूर्ण बातमी भरा.
4. फोटोसाठी सध्या सार्वजनिक HTTPS image URL द्या.
5. YouTube/video link टाकू शकता.
6. प्रकाशित बातम्या मुख्य पानावर दिसतील.

फोटो अपलोडबद्दल:
या पहिल्या आवृत्तीत Admin मध्ये फोटोची URL द्यायची आहे. थेट फाईल अपलोडसाठी Cloudflare R2 जोडण्याची पुढील आवृत्ती तयार करता येईल. R2 च्या मोफत मर्यादा/खाते अटी वेगळ्या तपासाव्यात.

सुरक्षा आणि मर्यादा:
- हा सुरुवातीचा CMS आहे. पत्रकारांसाठी वेगवेगळे user accounts/roles नाहीत.
- पासवर्ड आणि SESSION_SECRET सुरक्षित ठेवा.
- सार्वजनिक बातमी प्रकाशित करण्यापूर्वी मजकूर, फोटो हक्क आणि तथ्य तपासा.
- Free plan चे usage limits लागू होतात; traffic वाढल्यास मर्यादा लागू शकतात.
- हे deploy केल्याशिवाय public URL अस्तित्वात येणार नाही.
- SEO साठी पुढील आवृत्तीत sitemap.xml, robots.txt, canonical URLs, Open Graph, structured data आणि social share जोडता येतील.

Cloudflare अधिकृत मार्गदर्शक:
https://developers.cloudflare.com/pages/get-started/git-integration/
https://developers.cloudflare.com/pages/functions/get-started/
https://developers.cloudflare.com/pages/functions/bindings/
https://developers.cloudflare.com/pages/platform/limits/
