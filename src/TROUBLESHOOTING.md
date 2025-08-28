# دليل حل المشاكل 🛠️

## المشاكل الشائعة وحلولها

### 1. مشكلة: "npm: command not found"
**السبب:** Node.js غير مثبت
**الحل:**
```bash
# حمّل وثبت Node.js من:
# https://nodejs.org
# اختر النسخة LTS
# أعد تشغيل Command Prompt بعد التثبيت
```

### 2. مشكلة: "Cannot find module"
**السبب:** المتطلبات غير مثبتة
**الحل:**
```bash
# امسح الكاش وأعد التثبيت
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install
```

### 3. مشكلة: "vite: command not found"
**السبب:** Vite غير مثبت بشكل صحيح
**الحل:**
```bash
# تثبيت Vite عالمياً
npm install -g vite

# أو استخدم npx
npx vite --version
```

### 4. مشكلة: مجلد dist لا يظهر
**السبب:** فشل في البناء
**الحل:**
```bash
# تحقق من الأخطاء
npm run build

# إذا ظهرت أخطاء، جرب:
npm cache clean --force
npm install
npm run build
```

### 5. مشكلة: "EACCES: permission denied"
**السبب:** مشكلة في الصلاحيات
**الحل:**
```bash
# على Windows (كمدير):
# افتح Command Prompt كـ Administrator

# على Mac/Linux:
sudo npm install
```

### 6. مشكلة: "Port 5173 already in use"
**السبب:** المنفذ مستخدم
**الحل:**
```bash
# استخدم منفذ مختلف
npx vite --port 3000

# أو أغلق العملية الأخرى
# Ctrl+C في الـ terminal الآخر
```

### 7. مشكلة: الموقع لا يظهر بشكل صحيح
**السبب:** مسار الملفات خاطئ
**الحل:**
- تأكد من وجود `src/App.tsx`
- تأكد من وجود `src/main.tsx`
- تأكد من وجود `src/styles/globals.css`

### 8. مشكلة: أخطاء TypeScript
**السبب:** إعدادات TypeScript
**الحل:**
```bash
# تحديث إعدادات TypeScript
# في tsconfig.json أضف:
{
  "compilerOptions": {
    "noUnusedLocals": false,
    "noUnusedParameters": false
  }
}
```

### 9. مشكلة: بطء في التحميل
**السبب:** مشاكل في الشبكة
**الحل:**
```bash
# استخدم مرآة npm أخرى
npm config set registry https://registry.npmmirror.com/

# أو استخدم yarn بدلاً من npm
npm install -g yarn
yarn install
yarn dev
```

### 10. مشكلة: مشاكل في الـ CSS
**السبب:** Tailwind لا يعمل
**الحل:**
- تأكد من وجود `@tailwindcss/vite` في package.json
- تأكد من وجود `globals.css` في `src/styles/`
- تأكد من import globals.css في main.tsx

---

## تشخيص سريع:

### تحقق من النسخ:
```bash
node --version    # يجب أن يكون 18+
npm --version     # يجب أن يكون 8+
```

### تحقق من الملفات:
```bash
# يجب أن تجد هذه الملفات:
ls package.json          ✅
ls src/App.tsx           ✅
ls src/main.tsx          ✅
ls vite.config.ts        ✅
```

### اختبار سريع:
```bash
# 1. تنظيف
npm cache clean --force

# 2. تثبيت
npm install

# 3. تشغيل
npm run dev

# 4. بناء
npm run build

# 5. تحقق من dist
ls dist/
```

---

## إذا استمرت المشاكل:

### الحل الجذري:
```bash
# 1. احذف كل شيء وابدأ من جديد
rm -rf node_modules
rm package-lock.json
rm -rf dist

# 2. إعادة تثبيت
npm install

# 3. إعادة بناء
npm run build
```

### اطلب المساعدة:
إذا لم تحل المشكلة، أرسل لي:
- **نظام التشغيل:** (Windows/Mac/Linux)
- **نسخة Node.js:** `node --version`
- **رسالة الخطأ الكاملة**
- **في أي خطوة حدثت المشكلة**

**وسأساعدك في حلها فوراً!** 🚀

---

## روابط مفيدة:
- **Node.js:** https://nodejs.org
- **Netlify:** https://netlify.com  
- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev