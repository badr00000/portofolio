# حل مشاكل تشغيل المشروع

## المشكلة الأساسية
اسم المجلد يحتوي على مسافات ورموز خاصة مما يسبب مشكلة في Command Line.

## الحلول:

### الحل الأول (الأفضل): تغيير اسم المجلد
1. أغلق VS Code والـ Command Prompt
2. غير اسم المجلد من:
   `Data & AI Expert Portfolio Website (Community)`
   إلى:
   `badr-portfolio` أو `portfolio-website`

### الحل الثاني: استخدام علامات الاقتباس
استخدم الأوامر مع علامات اقتباس:
```bash
cd "Data & AI Expert Portfolio Website (Community)"
npm install
npm run dev
```

## خطوات التشغيل الصحيحة:

### 1. تثبيت المتطلبات أولاً
```bash
npm install
```

### 2. تشغيل المشروع
```bash
npm run dev
```

## إذا استمرت المشاكل:

### حذف node_modules وإعادة التثبيت:
```bash
rmdir /s node_modules
del package-lock.json
npm install
npm run dev
```

### أو باستخدام PowerShell:
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run dev
```

## التحقق من Node.js:
تأكد من أن لديك Node.js إصدار 18 أو أحدث:
```bash
node --version
npm --version
```

## هيكل الملفات الصحيح:
يجب أن يكون App.tsx في مجلد src وليس في الجذر:
- ✅ `/src/App.tsx` 
- ❌ `/App.tsx`

## نصائح إضافية:
- استخدم أسماء مجلدات بدون مسافات أو رموز خاصة
- تأكد من وجود جميع الملفات في المكان الصحيح
- قم بتشغيل `npm install` قبل `npm run dev`