# النشر من الهاتف خطوة بخطوة

## 1. رفع الموقع
1. افتح https://github.com وسجل الدخول.
2. اضغط New لإنشاء مستودع باسم `gold-ai-trader-pro`.
3. اجعله Public ثم Create repository.
4. اضغط Add file ثم Upload files.
5. ارفع `index.html` و`manifest.webmanifest` و`icon.svg` و`robots.txt` و`.nojekyll`.
6. اضغط Commit changes.
7. افتح Settings ثم Pages.
8. اختر Deploy from a branch، ثم `main` و`/(root)` واضغط Save.

## 2. تشغيل واجهة API
1. افتح https://dash.cloudflare.com.
2. من Workers & Pages اختر Create ثم Worker.
3. اختر Edit code، واحذف المثال والصق محتوى `worker.js`.
4. اضغط Deploy، ثم انسخ عنوان Worker.
5. في ملف `index.html` ابحث عن `/api/chart?symbol=XAUUSD%3DX&interval=${interval}&range=5d`.
6. استبدل المسار بعنوان Worker الكامل مع `/api/chart?...`، ثم ارفع `index.html` المعدل إلى GitHub مجدداً.

## 3. اختبار الاتصال
افتح رابط Worker مع هذا المسار:
`/api/chart?symbol=XAUUSD%3DX&interval=5m&range=5d`
إذا عاد JSON وفيه بيانات شموع، افتح رابط الموقع وتأكد من ظهور «متصل».
إذا عاد خطأ، فمزود Yahoo قد يمنع الطلب أو يغير الخدمة؛ لا تعتمد على إشارات الموقع حتى يعمل مصدر البيانات.
