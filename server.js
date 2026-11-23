#!/usr/bin/env node
/* ============================================================================
 *  مسار لوجستي — خادم API في ملف واحد (نسخة الرفع من الهاتف على GitHub)
 *  ---------------------------------------------------------------------------
 *  وُلِّد آليًا من: server/server.js, server/lib/admin.js, server/lib/assistant.js, server/lib/auctions.js, server/lib/auth.js, server/lib/carriers.js, server/lib/live.js, server/lib/pricing.js, server/lib/push.js, server/lib/reports.js, server/lib/store.js, server/lib/visitors.js, server/lib/wallet.js
 *  لا يحتاج أي تثبيت حزم:  node server.js
 *  متغيّرات مهمة:  PORT · DATA_DIR · ADMIN_PASSWORD · CORS_ORIGINS · SEED_DEMO
 * ========================================================================== */
'use strict';
const __bundleDir = __dirname;
const __mods = Object.create(null);
const __cache = Object.create(null);
function __def(id, fn) { __mods[id] = fn; }
function __req(id) {
  if (__cache[id]) return __cache[id].exports;
  if (!__mods[id]) throw new Error('وحدة غير موجودة في الحزمة: ' + id);
  const m = { exports: {} };
  __cache[id] = m;
  __mods[id](m, m.exports, __req, __bundleDir);
  return m.exports;
}

// بيانات الشحنات التجريبية مضمّنة (بدل ملف seed/shipments-demo.json)
const __SEED_SHIPMENTS = [{"trackingNumber":"HDTA6351661","referenceNumber":"REF-48392017","status":"shipped","progress":90,"source":"الولايات المتحدة الأمريكية","sourceCity":"شيكاغو","destPort":"ميناء عدن","currentLocation":"جمارك نهم","sender":"شركة CDW","senderPhone":"1-800-225-5345","receiver":"طه ثابت محمد الموشكي","receiverPhone":"+967777772061","authorizedPerson":"المالك طه ثابت الموشكي","payer":"طه ثابت محمد الموشكي","payerPhone":"+967777772061","invoiceNo":"INV-2025-001","invoiceValue":147500,"shippingCost":10000,"additionalFees":14000,"customsFees":14000,"paid":7000,"remaining":7000,"weight":5000,"goods":"أجهزة كمبيوتر مكتبية - أجهزة كمبيوترات محمول - طابعات حجم صغير - طابعات حجم كبير - طابعات حجم متوسط - هاردسك - شاشات - بلايستيشن - 2 باصات نوع سوزوكي موديل 2022 لون رصاصي ياباني وارد أمريكي","goodsType":"إلكترونيات + مركبات","pieces":852,"size":"600 × 400 × 300","penalties":0,"lat":15.406811,"lng":45.327783,"creationDate":"2025-12-17","expectedDeliveryDate":"2026-06-15","shippingCompany":"DHL Express","mapLink":"https://maps.app.goo.gl/uH1dN7yoEXmAZnww5","adminNotes":"مدة الرحلة تشمل نقل بري + بحري + ترانزيت - قد يتغير الجدول حسب الجمارك والظروف - النظام يعمل بنسبة تتبع تقديرية 90% - تاريخ الوصول النهائي المتوقع: 2026/06/15","history":[{"location":"شيكاغو – مركز تجميع الشحن (USA)","date":"2025-12-17","time":"09:30","status":"تم استلام الشحنة وتجهيزها للنقل الداخلي"},{"location":"ميناء لوس أنجلوس / لونغ بيتش – أمريكا","date":"2025-12-22","time":"18:10","status":"تحميل الشحنة داخل حاوية بحرية"},{"location":"ميناء روتردام – هولندا","date":"2026-01-10","time":"11:45","status":"إعادة شحن عبر الخط الأوروبي"},{"location":"ميناء جبل علي – الإمارات","date":"2026-02-05","time":"16:20","status":"تجهيز للمرحلة الإقليمية"},{"location":"ميناء عدن – اليمن","date":"2026-06-12","time":"08:00","status":"وصول نهائي تمهيدًا للتسليم"}],"demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"DHL836945583","status":"shipped","progress":60,"source":"الولايات المتحدة الأمريكية","destPort":"ميناء جبل علي","currentLocation":"ميناء جبل علي","sender":"MedTech Industries","senderPhone":"+123456789","receiver":"طه ثابت محمد الموشكي","authorizedPerson":"طه ثابت محمد الموشكي","receiverPhone":"+967777772061","payer":"طلال قائد المخلافي","invoiceValue":197000,"shippingCost":12000,"customsFees":0,"paid":6000,"remaining":6000,"goods":"500 هاتف جوال، 1280 قطعة معدات طبية، أجهزة مختبرات طبية، باص هايص أبيض موديل 2023","lat":25,"lng":55,"creationDate":"2025-01-15","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"DKD97694954","status":"shipped","progress":45,"source":"الولايات المتحدة الأمريكية","destPort":"اليمن - صنعاء","currentLocation":"صلالة - سلطنة عمان","sender":"مزاد Copart","receiver":"طلال قائد أحمد المخلافي","payer":"طلال قائد أحمد المخلافي","invoiceValue":356470,"shippingCost":33000,"customsFees":0,"paid":16500,"remaining":16500,"goods":"6 لاندكروزر 2022، 6 رافور 2023-2026، 6 يارس وكورولا","lat":17,"lng":54,"creationDate":"2025-01-20","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"DHL95467546","status":"shipped","progress":30,"source":"الولايات المتحدة الأمريكية","destPort":"اليمن - صنعاء","currentLocation":"مياه خليج عدن","sender":"مزاد Copart","receiver":"طلال قائد المخلافي","invoiceValue":110000,"shippingCost":12000,"customsFees":0,"paid":6000,"remaining":6000,"goods":"10 سيارات Toyota RAV4 كهربائية موديلات 2024-2026","lat":12.8,"lng":45,"creationDate":"2025-01-25","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20250115031","status":"shipped","progress":55,"source":"الولايات المتحدة","destPort":"جبل علي","currentLocation":"ميناء جبل علي","sender":"Auto Export","receiver":"طلال قائد احمد يحيى","invoiceValue":38500,"shippingCost":3500,"customsFees":0,"paid":1750,"remaining":1750,"goods":"سيارة تويوتا لاندكروزر GXR 2023","lat":25,"lng":55,"creationDate":"2025-01-15","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20240212026","status":"shipped","progress":50,"source":"الولايات المتحدة","destPort":"جبل علي","currentLocation":"ميناء جبل علي","sender":"Auto Export","receiver":"طلال قائد احمد يحيى","invoiceValue":24800,"shippingCost":2200,"customsFees":0,"paid":1100,"remaining":1100,"goods":"سيارة لكزس RX350","lat":25,"lng":55,"creationDate":"2025-02-12","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20240426027","status":"shipped","progress":35,"source":"الولايات المتحدة","destPort":"صلالة","currentLocation":"صلالة - عمان","sender":"Medical Devices","receiver":"طلال قائد احمد يحيى","invoiceValue":9400,"shippingCost":900,"customsFees":0,"paid":450,"remaining":450,"goods":"أجهزة تشخيص طبية متطورة","lat":17,"lng":54,"creationDate":"2025-04-26","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20250422032","status":"shipped","progress":40,"source":"الولايات المتحدة","destPort":"عدن","currentLocation":"خليج عدن","sender":"Lab Supply","receiver":"طلال قائد احمد يحيى","invoiceValue":13200,"shippingCost":1200,"customsFees":0,"paid":600,"remaining":600,"goods":"معدات مختبرات وتحاليل طبية","lat":12.8,"lng":45,"creationDate":"2025-04-22","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20240710028","status":"processing","progress":10,"source":"الولايات المتحدة","destPort":"نيويورك","currentLocation":"نيويورك - قيد التجهيز","sender":"Industrial Supply","receiver":"طلال قائد احمد يحيى","invoiceValue":11200,"shippingCost":1050,"customsFees":0,"paid":0,"remaining":1050,"goods":"معدات صناعية أمريكية","lat":40.71,"lng":-74.01,"creationDate":"2025-07-10","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20240918029","status":"processing","progress":5,"source":"الولايات المتحدة","destPort":"نيويورك","currentLocation":"نيويورك - قيد التجهيز","sender":"Home Furniture","receiver":"طلال قائد احمد يحيى","invoiceValue":3600,"shippingCost":340,"customsFees":0,"paid":0,"remaining":340,"goods":"أثاث منزلي فاخر","lat":40.71,"lng":-74.01,"creationDate":"2025-09-18","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20250911033","status":"processing","progress":8,"source":"الولايات المتحدة","destPort":"نيويورك","currentLocation":"نيويورك - قيد التجهيز","sender":"Auto Parts","receiver":"طلال قائد احمد يحيى","invoiceValue":6950,"shippingCost":680,"customsFees":0,"paid":0,"remaining":680,"goods":"فلاتر، حساسات، أدوات صيانة، معدات ورش","lat":40.71,"lng":-74.01,"creationDate":"2025-09-11","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20190812001","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Global Auto Parts LLC","receiver":"طلال قائد احمد يحيى","invoiceValue":1250,"shippingCost":250,"customsFees":0,"paid":1250,"remaining":0,"goods":"فلاتر زيت، فلاتر هواء، أقمشة فرامل، حساسات محرك","deliveryDate":"2019-08-25","lat":15.35,"lng":44.21,"creationDate":"2019-08-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20190918002","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Medical Supply Inc","receiver":"طلال قائد احمد يحيى","invoiceValue":4800,"shippingCost":400,"customsFees":0,"paid":4800,"remaining":0,"goods":"أجهزة قياس ضغط رقمية وأجهزة فحص سكر","deliveryDate":"2019-10-01","lat":15.35,"lng":44.21,"creationDate":"2019-09-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20191105003","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"American Furniture Co","receiver":"طلال قائد احمد يحيى","invoiceValue":3200,"shippingCost":350,"customsFees":0,"paid":3200,"remaining":0,"goods":"طقم كنب أمريكي فاخر وطاولات خشبية","deliveryDate":"2019-11-20","lat":15.35,"lng":44.21,"creationDate":"2019-10-15","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20191221004","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"USA Export Group","receiver":"طلال قائد احمد يحيى","invoiceValue":2650,"shippingCost":300,"customsFees":0,"paid":2650,"remaining":0,"goods":"أجهزة كمبيوتر مكتبية وملحقاتها","deliveryDate":"2020-01-05","lat":15.35,"lng":44.21,"creationDate":"2019-12-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20200214005","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"USA Export","receiver":"طلال قائد احمد يحيى","invoiceValue":8900,"shippingCost":1200,"customsFees":0,"paid":8900,"remaining":0,"goods":"سيارة تويوتا كامري 2018","deliveryDate":"2020-03-01","lat":15.35,"lng":44.21,"creationDate":"2020-01-15","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20200422006","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Medical Supply","receiver":"طلال قائد احمد يحيى","invoiceValue":5600,"shippingCost":500,"customsFees":0,"paid":5600,"remaining":0,"goods":"أجهزة تخطيط قلب وأجهزة مراقبة المرضى","deliveryDate":"2020-05-10","lat":15.35,"lng":44.21,"creationDate":"2020-03-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20200618007","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Auto Parts","receiver":"طلال قائد احمد يحيى","invoiceValue":1950,"shippingCost":200,"customsFees":0,"paid":1950,"remaining":0,"goods":"محركات صغيرة، مضخات وقود، شمعات احتراق","deliveryDate":"2020-07-05","lat":15.35,"lng":44.21,"creationDate":"2020-05-15","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20200909008","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Office Furniture","receiver":"طلال قائد احمد يحيى","invoiceValue":2900,"shippingCost":280,"customsFees":0,"paid":2900,"remaining":0,"goods":"مكاتب تنفيذية وكراسي جلدية","deliveryDate":"2020-09-25","lat":15.35,"lng":44.21,"creationDate":"2020-08-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20201125009","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Tech Export","receiver":"طلال قائد احمد يحيى","invoiceValue":3850,"shippingCost":350,"customsFees":0,"paid":3850,"remaining":0,"goods":"أجهزة لابتوب وطابعات ليزر","deliveryDate":"2020-12-10","lat":15.35,"lng":44.21,"creationDate":"2020-10-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20210112010","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Auto Export","receiver":"طلال قائد احمد يحيى","invoiceValue":10200,"shippingCost":1300,"customsFees":0,"paid":10200,"remaining":0,"goods":"سيارة هوندا أكورد 2019","deliveryDate":"2021-02-01","lat":15.35,"lng":44.21,"creationDate":"2020-12-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20210327011","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Medical Devices","receiver":"طلال قائد احمد يحيى","invoiceValue":6400,"shippingCost":600,"customsFees":0,"paid":6400,"remaining":0,"goods":"أجهزة تنفس صناعي","deliveryDate":"2021-04-15","lat":15.35,"lng":44.21,"creationDate":"2021-02-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20210614012","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Furniture Export","receiver":"طلال قائد احمد يحيى","invoiceValue":4300,"shippingCost":400,"customsFees":0,"paid":4300,"remaining":0,"goods":"أثاث فاخر أمريكي","deliveryDate":"2021-07-01","lat":15.35,"lng":44.21,"creationDate":"2021-05-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20210830013","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Industrial Supply","receiver":"طلال قائد احمد يحيى","invoiceValue":7850,"shippingCost":750,"customsFees":0,"paid":7850,"remaining":0,"goods":"مولدات كهربائية صناعية","deliveryDate":"2021-09-20","lat":15.35,"lng":44.21,"creationDate":"2021-07-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20211018014","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Auto Parts","receiver":"طلال قائد احمد يحيى","invoiceValue":2150,"shippingCost":220,"customsFees":0,"paid":2150,"remaining":0,"goods":"قطع غيار سيارات أصلية","deliveryDate":"2021-11-05","lat":15.35,"lng":44.21,"creationDate":"2021-09-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20211222015","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Lab Equipment","receiver":"طلال قائد احمد يحيى","invoiceValue":5900,"shippingCost":550,"customsFees":0,"paid":5900,"remaining":0,"goods":"معدات مختبرية طبية","deliveryDate":"2022-01-10","lat":15.35,"lng":44.21,"creationDate":"2021-11-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20220215016","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Auto Export","receiver":"طلال قائد احمد يحيى","invoiceValue":9800,"shippingCost":1100,"customsFees":0,"paid":9800,"remaining":0,"goods":"سيارة هيونداي إلنترا 2020","deliveryDate":"2022-03-10","lat":15.35,"lng":44.21,"creationDate":"2022-01-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20220428017","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Medical Imaging","receiver":"طلال قائد احمد يحيى","invoiceValue":12500,"shippingCost":1100,"customsFees":0,"paid":12500,"remaining":0,"goods":"أجهزة أشعة طبية","deliveryDate":"2022-05-20","lat":15.35,"lng":44.21,"creationDate":"2022-02-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20220712018","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Home Furniture","receiver":"طلال قائد احمد يحيى","invoiceValue":3450,"shippingCost":320,"customsFees":0,"paid":3450,"remaining":0,"goods":"أثاث منزلي فاخر","deliveryDate":"2022-08-01","lat":15.35,"lng":44.21,"creationDate":"2022-06-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20220923019","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Agri Equipment","receiver":"طلال قائد احمد يحيى","invoiceValue":6700,"shippingCost":650,"customsFees":0,"paid":6700,"remaining":0,"goods":"معدات زراعية أمريكية","deliveryDate":"2022-10-15","lat":15.35,"lng":44.21,"creationDate":"2022-08-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20221130020","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Auto Parts","receiver":"طلال قائد احمد يحيى","invoiceValue":4850,"shippingCost":450,"customsFees":0,"paid":4850,"remaining":0,"goods":"محركات سيارات وناقلات حركة","deliveryDate":"2022-12-20","lat":15.35,"lng":44.21,"creationDate":"2022-10-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20230118021","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Auto Export","receiver":"طلال قائد احمد يحيى","invoiceValue":14200,"shippingCost":1500,"customsFees":0,"paid":14200,"remaining":0,"goods":"سيارة تويوتا راف فور 2021","deliveryDate":"2023-02-10","lat":15.35,"lng":44.21,"creationDate":"2022-12-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20230325022","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Surgical Supply","receiver":"طلال قائد احمد يحيى","invoiceValue":8950,"shippingCost":850,"customsFees":0,"paid":8950,"remaining":0,"goods":"معدات جراحية متخصصة","deliveryDate":"2023-04-15","lat":15.35,"lng":44.21,"creationDate":"2023-02-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20230614023","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Office Furniture","receiver":"طلال قائد احمد يحيى","invoiceValue":2980,"shippingCost":280,"customsFees":0,"paid":2980,"remaining":0,"goods":"أثاث مكتبي حديث","deliveryDate":"2023-07-01","lat":15.35,"lng":44.21,"creationDate":"2023-05-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20230829024","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Tech Supply","receiver":"طلال قائد احمد يحيى","invoiceValue":4500,"shippingCost":420,"customsFees":0,"paid":4500,"remaining":0,"goods":"أجهزة حاسوب وشاشات","deliveryDate":"2023-09-20","lat":15.35,"lng":44.21,"creationDate":"2023-07-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20231117025","status":"delivered","progress":100,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"صنعاء - تم التسليم","sender":"Auto Parts","receiver":"طلال قائد احمد يحيى","invoiceValue":2300,"shippingCost":250,"customsFees":0,"paid":2300,"remaining":0,"goods":"قطع غيار سيارات متنوعة","deliveryDate":"2023-12-05","lat":15.35,"lng":44.21,"creationDate":"2023-10-01","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"},{"trackingNumber":"USY20241125030","status":"pending","progress":85,"source":"الولايات المتحدة","destPort":"صنعاء","currentLocation":"في انتظار التسليم","sender":"Auto Parts","receiver":"طلال قائد احمد يحيى","invoiceValue":5750,"shippingCost":550,"customsFees":0,"paid":275,"remaining":275,"goods":"محركات وناقلات حركة","lat":15.35,"lng":44.21,"creationDate":"2024-11-25","demo":true,"data_source":"بيانات تجريبية مستوردة من النظام السابق"}];
try {
  const __fs = require('node:fs');
  const __path = require('node:path');
  const __dataDir = process.env.DATA_DIR || __path.join(__dirname, 'data');
  const __seedFile = __path.join(__dataDir, 'seed-shipments.json');
  if (String(process.env.SEED_DEMO || '1') !== '0' && !__fs.existsSync(__seedFile)) {
    __fs.mkdirSync(__dataDir, { recursive: true });
    __fs.writeFileSync(__seedFile, JSON.stringify(__SEED_SHIPMENTS));
  }
} catch (e) { console.error('[bundle] تعذّر تجهيز بيانات البداية:', e.message); }

// ==================== server/server.js ====================
__def("server/server.js", function (module, exports, __req, __bundleDir) {
/**
 * server.js — الخادم الخلفي لنظام «المسار العالمي اللوجستي» (المرحلة 1)
 * ---------------------------------------------------------------------
 * • بدون أي تبعيات خارجية (Node 20+ فقط) — يعمل بـ: node server/server.js
 * • يقدّم الواجهة من مجلد app/ ويوفر واجهة REST تحت /api
 * • مصادقة حقيقية (scrypt + رموز موقّعة) وصلاحيات على الخادم
 * • بث لحظي SSE لتحديثات الشحنات والإشعارات
 * • بوابة بيانات حية مع وسم المصدر ووقت الجلب
 */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { URL } = require('url');

const { db, audit, DATA_DIR, flush: flushStore, writable } = __req("server/lib/store.js");
const A = __req("server/lib/auth.js");
const live = __req("server/lib/live.js");
const auctions = __req("server/lib/auctions.js");
const wallet = __req("server/lib/wallet.js");
const admin = __req("server/lib/admin.js");
const push = __req("server/lib/push.js");
const visitors = __req("server/lib/visitors.js");
const pricing = __req("server/lib/pricing.js");
const reports = __req("server/lib/reports.js");
const carriers = __req("server/lib/carriers.js");
const assistant = __req("server/lib/assistant.js");

// هل مجلد البيانات على قرص دائم؟ (يُضبط تلقائيًا على المنصّات المعروفة)
const ON_RENDER = !!process.env.RENDER;
const ON_RAILWAY = !!process.env.RAILWAY_ENVIRONMENT;
const STORAGE_PERSISTENT = process.env.STORAGE_PERSISTENT
  ? process.env.STORAGE_PERSISTENT === 'true'
  : (ON_RENDER || ON_RAILWAY) ? /^\/(data|var\/data)/.test(process.env.DATA_DIR || '') : true;

const PORT = +(process.env.PORT || 8080);
const HOST = process.env.HOST || '0.0.0.0';
const APP_DIR = path.join(__bundleDir, '..', 'app');
const VERSION = '1.0.0-phase5';
const PUBLIC_URL = (process.env.PUBLIC_URL || process.env.RENDER_EXTERNAL_URL || '').replace(/\/$/, '');
const CORS_ORIGINS = (process.env.CORS_ORIGINS || '*').trim();

// ============================ أدوات مساعدة ============================
const json = (res, code, obj) => {
  const body = JSON.stringify(obj);
  res.writeHead(code, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(body),
    'cache-control': 'no-store',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'content-type,authorization',
    'access-control-allow-methods': 'GET,POST,PATCH,DELETE,OPTIONS'
  });
  res.end(body);
};
const fail = (res, code, message, extra = {}) => json(res, code, { ok: false, error: message, ...extra });
const ok = (res, data = {}, code = 200) => json(res, code, { ok: true, ...data });

function readBody(req, limit = 2 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on('data', (c) => {
      size += c.length;
      if (size > limit) { reject(Object.assign(new Error('حجم الطلب كبير جدًا'), { status: 413 })); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => {
      if (!chunks.length) return resolve({});
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))); }
      catch (e) { reject(Object.assign(new Error('صيغة JSON غير صحيحة'), { status: 400 })); }
    });
    req.on('error', reject);
  });
}

const ipOf = (req) => (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket.remoteAddress || 'unknown';
const nowIso = () => new Date().toISOString();

// ============================ البث اللحظي (SSE) ============================
const streams = new Set();
function broadcast(topic, event, payload) {
  const msg = `event: ${event}\ndata: ${JSON.stringify({ topic, at: nowIso(), payload })}\n\n`;
  for (const s of streams) {
    if (s.topics.includes('*') || s.topics.some((t) => topic.startsWith(t))) {
      try { s.res.write(msg); } catch (_) { streams.delete(s); }
    }
  }
}
setInterval(() => { for (const s of streams) { try { s.res.write(':ping\n\n'); } catch (_) { streams.delete(s); } } }, 25000).unref();

function notify(userId, title, body, link = null, type = 'system') {
  const n = db.notifications.insert({ id: crypto.randomUUID(), user_id: userId, type, title, body, link, read_at: null, created_at: nowIso() });
  broadcast('notifications:' + userId, 'notification', n);
  return n;
}

// ============================ الصلاحيات ============================
function requireAuth(req, res, minRole = 'user') {
  const user = A.userFromRequest(req);
  if (!user) { fail(res, 401, 'مطلوب تسجيل الدخول (رمز غير صالح أو منتهٍ)'); return null; }
  if (!A.hasRole(user, minRole)) { fail(res, 403, 'لا تملك صلاحية لهذا الإجراء'); return null; }
  return user;
}

// ============================ التسجيل الأول للمدير ============================
function bootstrapAdmin() {
  if (db.users.all().length > 0) return;
  const password = process.env.ADMIN_PASSWORD || crypto.randomBytes(9).toString('base64url');
  const admin = db.users.insert({
    id: crypto.randomUUID(),
    fullName: 'مدير النظام',
    email: 'admin@almasar.local',
    phone: '',
    username: 'admin',
    password_hash: A.hashPassword(password),
    role: 'super_admin',
    status: 'active',
    created_at: nowIso()
  });
  wallet.accounts.ensure(admin.id);
  const file = path.join(DATA_DIR, 'BOOTSTRAP_ADMIN.txt');
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(file, `اسم المستخدم: admin\nكلمة المرور: ${password}\nتاريخ الإنشاء: ${nowIso()}\n\nغيّر كلمة المرور بعد أول دخول، ثم احذف هذا الملف.\n`, { mode: 0o600 });
  console.log('\n=================================================');
  console.log(' تم إنشاء حساب المدير العام لأول مرة:');
  console.log('   اسم المستخدم: admin');
  console.log('   كلمة المرور : ' + password);
  console.log(' (محفوظة أيضًا في ' + file + ')');
  console.log('=================================================\n');
  return admin;
}

// استيراد بيانات الشحنات التجريبية مرة واحدة بوسم demo
function seedDemoShipments() {
  if (db.shipments.all().length > 0) return;
  if (String(process.env.SEED_DEMO || '') === '0') { console.log('[seed] تم التعطيل عبر SEED_DEMO=0'); return; }
  // مصدر البيانات التجريبية: مجلد البيانات أولًا، ثم ملف النسخة المستودعية (seed/shipments-demo.json)
  const candidates = [
    path.join(DATA_DIR, 'seed-shipments.json'),
    path.join(__bundleDir, '..', 'seed', 'shipments-demo.json'),
  ];
  const f = candidates.find((c) => fs.existsSync(c));
  if (!f) return;
  try {
    const rows = JSON.parse(fs.readFileSync(f, 'utf8'));
    for (const r of rows) db.shipments.insert({ ...r, demo: true, data_source: 'بيانات تجريبية من النظام السابق' });
    console.log(`[seed] تم استيراد ${rows.length} شحنة تجريبية موسومة demo=true`);
  } catch (e) { console.error('[seed] فشل الاستيراد:', e.message); }
}

// ============================ المعالجات ============================
async function handleApi(req, res, url) {
  const p = url.pathname.replace(/\/+$/, '') || '/api';
  const m = req.method;
  const q = url.searchParams;

  // ---------- صحة الخدمة ----------
  if (p === '/api/health' && m === 'GET') {
    return ok(res, {
      ...healthPayload(),
      users: db.users.all().length, shipments: db.shipments.all().length,
      live_sources: ['fx', 'weather', 'news', 'crypto', 'macro'], realtime: 'SSE'
    });
  }

  // ---------- المصادقة ----------
  if (p === '/api/auth/register' && m === 'POST') {
    const b = await readBody(req);
    const need = ['fullName', 'email', 'phone', 'username', 'password'];
    for (const k of need) if (!b[k] || String(b[k]).trim().length < 3) return fail(res, 400, `الحقل ${k} مطلوب`);
    if (String(b.password).length < 8) return fail(res, 400, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل');
    if (db.users.findOne((u) => u.username === b.username || u.email === b.email || u.phone === b.phone))
      return fail(res, 409, 'اسم المستخدم أو البريد أو الهاتف مستخدم بالفعل');
    const role = ['user', 'agent'].includes(b.role) ? b.role : 'user'; // الأدوار الإدارية لا تُمنح ذاتيًا
    const user = db.users.insert({
      id: crypto.randomUUID(), fullName: String(b.fullName).trim(), email: String(b.email).trim().toLowerCase(),
      phone: String(b.phone).trim(), username: String(b.username).trim(),
      password_hash: A.hashPassword(b.password), role, status: 'pending',
      idNumber: b.idNumber || null, commercialReg: b.commercialReg || null, created_at: nowIso()
    });
    wallet.accounts.ensure(user.id);
    db.users.all().filter((u) => u.role === 'super_admin').forEach((adm) => notify(adm.id, 'طلب تسجيل جديد', `${user.fullName} (${role}) بانتظار الموافقة`, '#settings', 'user'));
    audit({ id: null, fullName: 'زائر' }, 'register', 'user', user.id, { ip: ipOf(req) });
    return ok(res, { user: publicUser(user), message: 'تم إنشاء الطلب، بانتظار موافقة الإدارة' }, 201);
  }

  if (p === '/api/auth/login' && m === 'POST') {
    const rl = A.rateLimit('login:' + ipOf(req), +(process.env.LOGIN_RATE_LIMIT || 40), 15 * 60e3);
    if (!rl.ok) return fail(res, 429, 'محاولات كثيرة، أعد المحاولة لاحقًا', { retry_after: rl.retryAfter });
    const b = await readBody(req);
    const id = String(b.identifier || '').trim().toLowerCase();
    if (!id || !b.password) return fail(res, 400, 'أدخل اسم المستخدم وكلمة المرور');
    const user = db.users.findOne((u) => u.username?.toLowerCase() === id || u.email?.toLowerCase() === id || u.phone === id);
    if (!user || !A.verifyPassword(b.password, user.password_hash)) {
      audit({ id: null, fullName: 'زائر' }, 'login_failed', 'user', user ? user.id : null, { ip: ipOf(req) });
      return fail(res, 401, 'بيانات الدخول غير صحيحة');
    }
    if (user.status !== 'active') return fail(res, 403, user.status === 'pending' ? 'الحساب بانتظار موافقة الإدارة' : 'الحساب موقوف');
    const tokens = A.issueSession(user, { ip: ipOf(req), ua: req.headers['user-agent'] });
    audit(user, 'login', 'user', user.id, { ip: ipOf(req) });
    return ok(res, { ...tokens, user: publicUser(user) });
  }

  if (p === '/api/auth/refresh' && m === 'POST') {
    const b = await readBody(req);
    const body = A.verifyToken(b.refresh_token);
    if (!body || body.typ !== 'refresh') return fail(res, 401, 'رمز التحديث غير صالح');
    // لا يكفي أن يكون التوقيع صحيحًا: يجب أن تكون الجلسة ما زالت قائمة في الخادم
    // (يمنع إعادة استخدام رمز بعد تجديده أو بعد تسجيل الخروج)
    if (!A.sessionExists(b.refresh_token)) return fail(res, 401, 'الجلسة منتهية أو أُبطلت، سجّل الدخول من جديد');
    const user = db.users.byId(body.sub);
    if (!user || user.status !== 'active') return fail(res, 401, 'المستخدم غير متاح');
    A.revokeRefresh(b.refresh_token);
    return ok(res, { ...A.issueSession(user, { ip: ipOf(req) }), user: publicUser(user) });
  }

  if (p === '/api/auth/logout' && m === 'POST') {
    const b = await readBody(req);
    if (b.refresh_token) A.revokeRefresh(b.refresh_token);
    return ok(res, { message: 'تم تسجيل الخروج' });
  }

  if (p === '/api/auth/me' && m === 'GET') {
    const user = requireAuth(req, res);
    if (!user) return;
    return ok(res, { user: publicUser(user) });
  }

  if (p === '/api/auth/change-password' && m === 'POST') {
    const user = requireAuth(req, res); if (!user) return;
    const b = await readBody(req);
    if (!A.verifyPassword(b.current_password || '', user.password_hash)) return fail(res, 400, 'كلمة المرور الحالية غير صحيحة');
    if (!b.new_password || String(b.new_password).length < 8) return fail(res, 400, 'كلمة المرور الجديدة قصيرة');
    db.users.update(user.id, { password_hash: A.hashPassword(b.new_password), password_changed_at: nowIso() });
    audit(user, 'change_password', 'user', user.id, { ip: ipOf(req) });
    return ok(res, { message: 'تم تغيير كلمة المرور' });
  }

  // ---------- الشحنات ----------
  if (p === '/api/shipments' && m === 'GET') {
    const user = requireAuth(req, res); if (!user) return;
    let rows = db.shipments.all().slice();
    const status = q.get('status'), term = (q.get('q') || '').trim().toLowerCase();
    if (status && status !== 'all') rows = rows.filter((s) => s.status === status);
    if (term) rows = rows.filter((s) => [s.trackingNumber, s.referenceNumber, s.sender, s.receiver, s.goods, s.currentLocation, s.destPort]
      .filter(Boolean).some((v) => String(v).toLowerCase().includes(term)));
    const from = q.get('from'), to = q.get('to');
    if (from) rows = rows.filter((s) => (s.creationDate || '') >= from);
    if (to) rows = rows.filter((s) => (s.creationDate || '') <= to);
    rows.sort((a, b) => String(b.creationDate || '').localeCompare(String(a.creationDate || '')));
    const total = rows.length;
    const page = Math.max(1, +(q.get('page') || 1)), limit = Math.min(200, Math.max(1, +(q.get('limit') || 50)));
    rows = rows.slice((page - 1) * limit, page * limit);
    return ok(res, { total, page, limit, items: rows });
  }

  if (p === '/api/shipments' && m === 'POST') {
    const user = requireAuth(req, res, 'shipping_staff'); if (!user) return;
    const b = await readBody(req);
    if (!b.trackingNumber) return fail(res, 400, 'رقم الشحنة مطلوب');
    if (db.shipments.findOne((s) => s.trackingNumber === b.trackingNumber)) return fail(res, 409, 'رقم الشحنة موجود مسبقًا');
    let priced = null;
    if (!b.shippingCost && (b.weight || b.service)) {
      try {
        const quote = pricing.quoteForShipment(b, user.role);
        if (quote.matched) {
          priced = { total: quote.total, rule: quote.rule, breakdown: quote.breakdown, quoted_at: nowIso() };
        }
      } catch (_) { /* التسعير لا يمنع إنشاء الشحنة */ }
    }
    const ship = db.shipments.insert({
      ...b,
      ...(priced ? { shippingCost: priced.total, price_quote: priced } : {}),
      id: crypto.randomUUID(), created_by: user.id, demo: false, data_source: 'إدخال يدوي عبر النظام', created_at: nowIso()
    });
    broadcast('shipments', 'shipment_created', ship);
    notify(user.id, 'تم إنشاء شحنة', `الشحنة ${ship.trackingNumber} أُضيفت بنجاح`, '#/shipment/' + ship.trackingNumber, 'shipment');
    audit(user, 'create', 'shipment', ship.trackingNumber, { ip: ipOf(req) });
    return ok(res, { shipment: ship }, 201);
  }

  const shipMatch = p.match(/^\/api\/shipments\/([^/]+)$/);
  if (shipMatch) {
    const code = decodeURIComponent(shipMatch[1]);
    const ship = db.shipments.findOne((s) => s.trackingNumber === code);
    if (!ship) return fail(res, 404, 'الشحنة غير موجودة');
    if (m === 'GET') {
      const user = requireAuth(req, res); if (!user) return;
      return ok(res, { shipment: ship });
    }
    if (m === 'PATCH') {
      const user = requireAuth(req, res, 'shipping_staff'); if (!user) return;
      const b = await readBody(req);
      const updated = db.shipments.update(ship.id, b);
      broadcast('shipments', 'shipment_updated', updated);
      audit(user, 'update', 'shipment', code, { details: Object.keys(b), ip: ipOf(req) });
      return ok(res, { shipment: updated });
    }
    if (m === 'DELETE') {
      const user = requireAuth(req, res, 'super_admin'); if (!user) return;
      db.shipments.remove(ship.id);
      broadcast('shipments', 'shipment_deleted', { trackingNumber: code });
      audit(user, 'delete', 'shipment', code, { ip: ipOf(req) });
      return ok(res, { message: 'تم الحذف' });
    }
  }

  // ---------- المستخدمون (إدارة) ----------
  if (p === '/api/users' && m === 'GET') {
    const user = requireAuth(req, res, 'super_admin'); if (!user) return;
    return ok(res, { items: db.users.all().map(publicUser) });
  }
  const userMatch = p.match(/^\/api\/users\/([^/]+)$/);
  if (userMatch && (m === 'PATCH' || m === 'DELETE')) {
    const admin = requireAuth(req, res, 'super_admin'); if (!admin) return;
    const target = db.users.byId(userMatch[1]);
    if (!target) return fail(res, 404, 'المستخدم غير موجود');
    if (target.role === 'super_admin' && target.id !== admin.id) return fail(res, 403, 'لا يمكن تعديل مدير عام آخر');
    if (m === 'PATCH') {
      const b = await readBody(req);
      const patch = {};
      if (b.status && ['active', 'pending', 'inactive'].includes(b.status)) patch.status = b.status;
      if (b.role && A.ROLE_RANK[b.role]) patch.role = b.role;
      if (b.fullName) patch.fullName = b.fullName;
      const updated = db.users.update(target.id, patch);
      audit(admin, 'update_user', 'user', target.id, { details: patch, ip: ipOf(req) });
      notify(target.id, 'تحديث الحساب', 'تم تحديث حالة/صلاحية حسابك', '#settings', 'user');
      return ok(res, { user: publicUser(updated) });
    }
    if (m === 'DELETE') {
      if (target.id === admin.id) return fail(res, 400, 'لا يمكن حذف حسابك');
      db.users.remove(target.id);
      audit(admin, 'delete_user', 'user', target.id, { ip: ipOf(req) });
      return ok(res, { message: 'تم حذف المستخدم' });
    }
  }

  // ---------- المفضلة ----------
  if (p === '/api/favorites' && m === 'GET') {
    const user = requireAuth(req, res); if (!user) return;
    return ok(res, { items: db.favorites.find((f) => f.user_id === user.id) });
  }
  if (p === '/api/favorites' && m === 'POST') {
    const user = requireAuth(req, res); if (!user) return;
    const b = await readBody(req);
    if (!b.item_type || !b.item_id) return fail(res, 400, 'نوع العنصر ومعرّفه مطلوبان');
    const exists = db.favorites.findOne((f) => f.user_id === user.id && f.item_type === b.item_type && String(f.item_id) === String(b.item_id));
    if (exists) return ok(res, { favorite: exists, duplicate: true });
    const fav = db.favorites.insert({ id: crypto.randomUUID(), user_id: user.id, item_type: b.item_type, item_id: String(b.item_id), meta: b.meta || null, created_at: nowIso() });
    return ok(res, { favorite: fav }, 201);
  }
  if (p.startsWith('/api/favorites/') && m === 'DELETE') {
    const user = requireAuth(req, res); if (!user) return;
    const [type, ...rest] = decodeURIComponent(p.replace('/api/favorites/', '')).split('/');
    const id = rest.join('/');
    const fav = db.favorites.findOne((f) => f.user_id === user.id && f.item_type === type && f.item_id === id);
    if (!fav) return fail(res, 404, 'غير موجود في المفضلة');
    db.favorites.remove(fav.id);
    return ok(res, { message: 'تم الحذف من المفضلة' });
  }

  // ---------- التقييمات ----------
  if (p === '/api/reviews' && m === 'GET') {
    const type = q.get('item_type'), id = q.get('item_id');
    let rows = db.reviews.all().slice();
    if (type) rows = rows.filter((r) => r.item_type === type);
    if (id) rows = rows.filter((r) => r.item_id === String(id));
    const avg = rows.length ? +(rows.reduce((s, r) => s + r.rating, 0) / rows.length).toFixed(2) : null;
    return ok(res, { items: rows.sort((a, b) => b.created_at.localeCompare(a.created_at)), average: avg, count: rows.length });
  }
  if (p === '/api/reviews' && m === 'POST') {
    const user = requireAuth(req, res); if (!user) return;
    const b = await readBody(req);
    const rating = Math.round(Number(b.rating));
    if (!b.item_type || !b.item_id) return fail(res, 400, 'العنصر مطلوب');
    if (!(rating >= 1 && rating <= 5)) return fail(res, 400, 'التقييم من 1 إلى 5');
    const dup = db.reviews.findOne((r) => r.user_id === user.id && r.item_type === b.item_type && r.item_id === String(b.item_id));
    if (dup) return fail(res, 409, 'لقد قيّمت هذا العنصر مسبقًا');
    const rev = db.reviews.insert({
      id: crypto.randomUUID(), user_id: user.id, user_name: user.fullName,
      item_type: b.item_type, item_id: String(b.item_id), rating,
      comment: String(b.comment || '').slice(0, 1000), created_at: nowIso()
    });
    audit(user, 'review', b.item_type, b.item_id, { details: { rating }, ip: ipOf(req) });
    return ok(res, { review: rev }, 201);
  }

  // ---------- الإشعارات ----------
  if (p === '/api/notifications' && m === 'GET') {
    const user = requireAuth(req, res); if (!user) return;
    const items = db.notifications.find((n) => n.user_id === user.id).sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(0, 100);
    return ok(res, { items, unread: items.filter((n) => !n.read_at).length });
  }
  if (p === '/api/notifications/read' && m === 'POST') {
    const user = requireAuth(req, res); if (!user) return;
    const b = await readBody(req);
    let n = 0;
    for (const item of db.notifications.find((x) => x.user_id === user.id)) {
      if (!item.read_at && (!b.id || item.id === b.id)) { db.notifications.update(item.id, { read_at: nowIso() }); n++; }
    }
    return ok(res, { marked: n });
  }

  // ---------- البيانات الحية ----------
  const liveMatch = p.match(/^\/api\/live\/(fx|weather|news|crypto|macro)$/);
  if (liveMatch && m === 'GET') {
    try {
      const data = await live.get(liveMatch[1]);
      return ok(res, { kind: liveMatch[1], ...data });
    } catch (e) {
      return fail(res, e.status || 502, e.message);
    }
  }
  if (p === '/api/live/ports' && m === 'GET') return ok(res, { ports: live.PORTS });

  // ---------- البث اللحظي ----------
  // ========================================================================
  // ================== المرحلة 3: تتبّع الزوار + الإشعارات + الإدارة ==================
  // ========================================================================

  // ---------- تتبّع زيارة (عام، بلا مصادقة) ----------
  if (p === '/api/track/visit' && m === 'POST') {
    const b = await readBody(req, 16 * 1024);
    const who = A.userFromRequest(req);
    const r = visitors.track({
      visitor_id: b.visitor_id, path: b.path, referrer: b.referrer, screen: b.screen,
      ua: req.headers['user-agent'], ip: ipOf(req), user_id: who ? who.id : null
    });
    return ok(res, { visitor_id: r.visitor.id, blocked: !!r.visitor.blocked, created: !!r.created });
  }
  if (p === '/api/track/ping' && m === 'POST') {
    const b = await readBody(req, 4 * 1024);
    const who = A.userFromRequest(req);
    const r = visitors.track({ visitor_id: b.visitor_id, path: b.path || '/ping', ua: req.headers['user-agent'], ip: ipOf(req), user_id: who ? who.id : null });
    return ok(res, { ok: true, blocked: !!r.visitor.blocked });
  }

  // ---------- إشعارات الويب (Web Push) ----------
  if (p === '/api/push/public-key' && m === 'GET') {
    return ok(res, { public_key: push.publicVapidKey(), subject: process.env.VAPID_SUBJECT || 'mailto:admin@almasar.local' });
  }
  if (p === '/api/push/subscribe' && m === 'POST') {
    const user = requireAuth(req, res, 'user'); if (!user) return;
    const b = await readBody(req, 16 * 1024);
    try {
      const sub = push.saveSubscription(user, { ...b, ua: req.headers['user-agent'] });
      audit(user, 'push_subscribe', 'push_subscription', sub.id, { ip: ipOf(req) });
      return ok(res, { subscription: { id: sub.id, platform: sub.platform } });
    } catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (p === '/api/push/unsubscribe' && m === 'POST') {
    const user = requireAuth(req, res, 'user'); if (!user) return;
    const b = await readBody(req, 8 * 1024);
    const done = push.removeSubscription(b.endpoint);
    return ok(res, { removed: done });
  }
  if (p === '/api/push/test' && m === 'POST') {
    const user = requireAuth(req, res, 'user'); if (!user) return;
    const title = 'إشعار تجريبي من المسار اللوجستي';
    const body = 'إن وصل هذا الإشعار إلى جهازك فقناة الدفع تعمل ✅';
    notify(user.id, title, body, '#settings', 'test');
    const subs = db.push_subscriptions.find((s) => s.user_id === user.id && s.active);
    let sent = 0, failed = 0; const errors = [];
    for (const sub of subs) {
      try { await push.sendWebPush(sub, { title, body, url: '/' }); sent++; }
      catch (e) { failed++; errors.push(String(e.message).slice(0, 160)); }
    }
    return ok(res, { subscriptions: subs.length, sent, failed, errors: errors.slice(0, 3) });
  }
  if (p === '/api/push/device' && m === 'POST') {
    const user = requireAuth(req, res, 'user'); if (!user) return;
    const b = await readBody(req, 8 * 1024);
    try { return ok(res, { device: push.saveDeviceToken(user, b) }); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (p === '/api/push/status' && m === 'GET') {
    const user = requireAuth(req, res, 'user'); if (!user) return;
    return ok(res, {
      channels: push.channelsStatus(),
      my_subscriptions: db.push_subscriptions.find((s) => s.user_id === user.id).length,
      my_devices: db.device_tokens.find((d) => d.user_id === user.id).length
    });
  }

  // ---------- لوحة الإدارة: المستخدمون ----------
  if (p === '/api/admin/users' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, admin.listUsers({
      role: q.get('role') || null, status: q.get('status') || null, kind: q.get('kind') || null,
      q: q.get('q') || null, page: +(q.get('page') || 1), limit: Math.min(100, +(q.get('limit') || 50))
    }));
  }
  if (p === '/api/admin/users' && m === 'POST') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    const b = await readBody(req);
    try { return ok(res, { user: admin.createUser(b, user) }, 201); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  const adminUserMatch = p.match(/^\/api\/admin\/users\/([^/]+)$/);
  if (adminUserMatch && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    try { return ok(res, admin.userDetail(adminUserMatch[1])); }
    catch (e) { return fail(res, e.status || 404, e.message); }
  }
  if (adminUserMatch && m === 'PATCH') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    const b = await readBody(req);
    try { return ok(res, { user: admin.updateUser(adminUserMatch[1], b, user) }); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (adminUserMatch && m === 'DELETE') {
    const user = requireAuth(req, res, 'super_admin'); if (!user) return;
    try { return ok(res, admin.deleteUser(adminUserMatch[1], user)); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  const adminResetMatch = p.match(/^\/api\/admin\/users\/([^/]+)\/reset-password$/);
  if (adminResetMatch && m === 'POST') {
    const user = requireAuth(req, res, 'super_admin'); if (!user) return;
    const b = await readBody(req, 8 * 1024);
    try { return ok(res, admin.resetPassword(adminResetMatch[1], user, b.password || null)); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (p === '/api/admin/clients' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, admin.listClients({ q: q.get('q') || null, status: q.get('status') || null, page: +(q.get('page') || 1), limit: Math.min(100, +(q.get('limit') || 50)) }));
  }

  // ---------- لوحة الإدارة: الزوار ----------
  if (p === '/api/admin/visitors' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, visitors.list({ q: q.get('q') || null, page: +(q.get('page') || 1), limit: Math.min(200, +(q.get('limit') || 50)), device: q.get('device') || null }));
  }
  if (p === '/api/admin/visitors/stats' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, visitors.stats(+(q.get('days') || 14)));
  }
  const visitorBlockMatch = p.match(/^\/api\/admin\/visitors\/([^/]+)\/block$/);
  if (visitorBlockMatch && m === 'POST') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    const b = await readBody(req, 4 * 1024);
    try {
      const v = visitors.setBlocked(visitorBlockMatch[1], b.blocked !== false);
      audit(user, b.blocked === false ? 'admin_visitor_unblock' : 'admin_visitor_block', 'visitor', v.id, { ip: ipOf(req) });
      return ok(res, { visitor: v });
    } catch (e) { return fail(res, e.status || 400, e.message); }
  }

  // ---------- لوحة الإدارة: حملات الإشعارات ----------
  if (p === '/api/admin/notifications' && m === 'POST') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    const b = await readBody(req, 64 * 1024);
    try {
      const out = await admin.sendCampaign(b, user, { notify });
      return ok(res, out, 201);
    } catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (p === '/api/admin/notifications' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, admin.listCampaigns({ page: +(q.get('page') || 1), limit: Math.min(100, +(q.get('limit') || 30)) }));
  }
  if (p === '/api/admin/notifications/log' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, { items: db.notify_log.all().slice().reverse().slice(0, 200) });
  }

  // ========================================================================
  // ================== المرحلة 4: التسعير · التقارير · التتبّع · التصدير ==================
  // ========================================================================

  // ---------- قواعد التسعير ----------
  if (p === '/api/pricing/rules' && m === 'GET') {
    const user = requireAuth(req, res, 'shipping_staff'); if (!user) return;
    return ok(res, { items: pricing.list({ active: q.get('active') === null ? null : q.get('active') === 'true', q: q.get('q') || null }) });
  }
  if (p === '/api/pricing/rules' && m === 'POST') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    const b = await readBody(req);
    try { return ok(res, { rule: pricing.create(b, user) }, 201); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  const pricingMatch = p.match(/^\/api\/pricing\/rules\/([^/]+)$/);
  if (pricingMatch && m === 'PATCH') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    const b = await readBody(req);
    try { return ok(res, { rule: pricing.update(pricingMatch[1], b, user) }); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (pricingMatch && m === 'DELETE') {
    const user = requireAuth(req, res, 'super_admin'); if (!user) return;
    try { return ok(res, pricing.remove(pricingMatch[1], user)); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (p === '/api/pricing/quote' && m === 'POST') {
    const user = requireAuth(req, res, 'user'); if (!user) return;
    const b = await readBody(req, 16 * 1024);
    try { return ok(res, { quote: pricing.quote({ ...b, client_role: b.client_role || user.role }) }); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (p === '/api/pricing/services' && m === 'GET') {
    return ok(res, { services: pricing.SERVICES, labels: pricing.SERVICE_LABEL });
  }

  // ---------- المساعد الذكي: معاينة عامة للحالة (بلا بيانات) ----------
  if (p === '/api/assistant/public' && m === 'GET') {
    const st = assistant.status();
    return ok(res, { status: { ai_ready: st.ai_ready, engine: st.engine, active_name: st.active_name, enabled: st.enabled } });
  }

  // ---------- المساعد الذكي (المرحلة 5) ----------
  if (p === '/api/assistant/status' && m === 'GET') {
    const user = requireAuth(req, res, 'user'); if (!user) return;
    return ok(res, { status: assistant.status() });
  }
  if (p === '/api/assistant/chat' && m === 'POST') {
    const user = requireAuth(req, res, 'user'); if (!user) return;
    const rl = A.rateLimit('assistant:' + user.id, 20, 60000);
    if (!rl.ok) return fail(res, 429, `هدّئ قليلًا — جرّب بعد ${rl.retryAfter} ثانية`, { retry_after: rl.retryAfter });
    const b = await readBody(req, 32 * 1024);
    try {
      const r = await assistant.chat({ user, message: b.message, conversation_id: b.conversation_id || null, channel: b.channel || 'web' });
      broadcast('assistant:' + user.id, 'assistant_reply', { at: nowIso(), engine: r.engine, conversation_id: r.conversation_id });
      return ok(res, r);
    } catch (e) { return fail(res, e.status || 500, e.message, e.quota ? { quota: e.quota } : {}); }
  }
  if (p === '/api/assistant/conversations' && m === 'GET') {
    const user = requireAuth(req, res, 'user'); if (!user) return;
    return ok(res, { items: assistant.myConversations(user) });
  }
  if (p === '/api/assistant/conversations' && m === 'POST') {
    const user = requireAuth(req, res, 'user'); if (!user) return;
    const b = await readBody(req, 8 * 1024);
    try { return ok(res, assistant.chat({ user, message: b.message || 'مرحبًا', conversation_id: null, channel: 'web' })); }
    catch (e) { return fail(res, e.status || 500, e.message); }
  }
  const asstConv = p.match(/^\/api\/assistant\/conversations\/([^/]+)$/);
  if (asstConv && m === 'GET') {
    const user = requireAuth(req, res, 'user'); if (!user) return;
    try { return ok(res, { conversation: assistant.conversation(user, asstConv[1]) }); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (p === '/api/assistant/feedback' && m === 'POST') {
    const user = requireAuth(req, res, 'user'); if (!user) return;
    const b = await readBody(req, 8 * 1024);
    try { return ok(res, assistant.feedback(b.message_id, b.value === undefined ? null : b.value, user)); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  // إدارة المساعد
  if (p === '/api/admin/assistant/status' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, { status: assistant.status() });
  }
  if (p === '/api/admin/assistant/settings' && m === 'PATCH') {
    const user = requireAuth(req, res, 'super_admin'); if (!user) return;
    const b = await readBody(req, 8 * 1024);
    try { return ok(res, { settings: assistant.saveSettings(b, user), status: assistant.status() }); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (p === '/api/admin/assistant/stats' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, { stats: assistant.stats({ days: Math.min(180, +(q.get('days') || 30)) }) });
  }
  if (p === '/api/admin/assistant/conversations' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, assistant.adminConversations({
      page: Math.max(1, +(q.get('page') || 1)), limit: Math.min(100, +(q.get('limit') || 20)),
      engine: q.get('engine') || null, q: q.get('q') || null
    }));
  }
  const asstAdminConv = p.match(/^\/api\/admin\/assistant\/conversations\/([^/]+)$/);
  if (asstAdminConv && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    try { return ok(res, { conversation: assistant.conversation(user, asstAdminConv[1], { isAdmin: true }) }); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (p === '/api/admin/assistant/test' && m === 'POST') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    const b = await readBody(req, 16 * 1024);
    try { return ok(res, await assistant.chat({ user, message: String(b.message || 'اختبار'), conversation_id: null, channel: 'admin_test' })); }
    catch (e) { return fail(res, e.status || 500, e.message); }
  }
  if (p === '/api/admin/assistant/faq' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, { items: assistant.listFaq({ q: q.get('q') || null, active: q.get('active') }) });
  }
  if (p === '/api/admin/assistant/faq' && m === 'POST') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    const b = await readBody(req, 16 * 1024);
    try { return ok(res, { item: assistant.createFaq(b, user) }, 201); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  const faqMatch = p.match(/^\/api\/admin\/assistant\/faq\/([^/]+)$/);
  if (faqMatch && m === 'PATCH') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    const b = await readBody(req, 16 * 1024);
    try { return ok(res, { item: assistant.updateFaq(faqMatch[1], b, user) }); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (faqMatch && m === 'DELETE') {
    const user = requireAuth(req, res, 'super_admin'); if (!user) return;
    try { return ok(res, assistant.removeFaq(faqMatch[1], user)); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }

  // ---------- التقارير المالية ----------
  if (p === '/api/admin/reports/summary' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, reports.summary({ days: +(q.get('days') || 30) }));
  }
  if (p === '/api/admin/reports/series' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, { series: reports.series({ days: Math.min(180, +(q.get('days') || 30)) }) });
  }
  if (p === '/api/admin/reports/top-clients' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, { items: reports.topClients({ limit: Math.min(50, +(q.get('limit') || 10)), by: q.get('by') || 'paid' }) });
  }
  if (p === '/api/admin/reports/export' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    const type = q.get('type') || 'entries';
    let body;
    try { body = reports.csv(type); } catch (e) { return fail(res, e.status || 400, e.message); }
    audit(user, 'report_export', 'report', type, { ip: ipOf(req) });
    res.writeHead(200, {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': `attachment; filename="masar-${type}-${new Date().toISOString().slice(0, 10)}.csv"`,
      'content-length': Buffer.byteLength(body),
      'access-control-allow-origin': '*'
    });
    return res.end(body);
  }

  // ---------- سجل التدقيق المتقدّم ----------
  if (p === '/api/admin/audit/query' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, reports.auditQuery({
      action: q.get('action') || null, actor: q.get('actor') || null, entity: q.get('entity') || null,
      from: q.get('from') || null, to: q.get('to') || null, q: q.get('q') || null,
      page: +(q.get('page') || 1), limit: Math.min(200, +(q.get('limit') || 50))
    }));
  }

  // ---------- شركات الشحن والتتبّع ----------
  if (p === '/api/admin/carriers' && m === 'GET') {
    const user = requireAuth(req, res, 'shipping_staff'); if (!user) return;
    return ok(res, { providers: carriers.status(), active: carriers.activeProvider() });
  }
  if (p === '/api/admin/carriers/events' && m === 'POST') {
    const user = requireAuth(req, res, 'shipping_staff'); if (!user) return;
    const b = await readBody(req, 16 * 1024);
    try { return ok(res, { event: carriers.addManualEvent(b, user) }, 201); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }
  if (p === '/api/admin/carriers/track' && m === 'POST') {
    const user = requireAuth(req, res, 'shipping_staff'); if (!user) return;
    const b = await readBody(req, 8 * 1024);
    try { return ok(res, { result: await carriers.track(b.tracking_number, { provider: b.provider || null }) }); }
    catch (e) { return fail(res, e.status || 400, e.message); }
  }

  // ---------- لوحة الإدارة: حالة الخادم والنسخ الاحتياطي ----------
  if (p === '/api/admin/server' && m === 'GET') {
    const user = requireAuth(req, res, 'branch_manager'); if (!user) return;
    return ok(res, admin.serverStatus({ uptime_s: Math.round(process.uptime()) }));
  }
  if (p === '/api/admin/backup' && m === 'GET') {
    const user = requireAuth(req, res, 'super_admin'); if (!user) return;
    const bundle = admin.backupBundle();
    const body = JSON.stringify(bundle, null, 1);
    audit(user, 'admin_backup', 'system', null, { ip: ipOf(req), details: { collections: bundle.collections } });
    res.writeHead(200, {
      'content-type': 'application/json; charset=utf-8',
      'content-disposition': `attachment; filename="masar-backup-${new Date().toISOString().slice(0, 10)}.json"`,
      'content-length': Buffer.byteLength(body),
      'access-control-allow-origin': '*'
    });
    return res.end(body);
  }

  if (p === '/api/stream' && m === 'GET') {
    const user = A.userFromRequest(req);
    if (!user) return fail(res, 401, 'مطلوب تسجيل الدخول للبث');
    res.writeHead(200, {
      'content-type': 'text/event-stream; charset=utf-8',
      'cache-control': 'no-cache, no-transform',
      connection: 'keep-alive',
      'x-accel-buffering': 'no'
    });
    const topics = (q.get('topics') || 'shipments,notifications:' + user.id).split(',').map((s) => s.trim()).filter(Boolean);
    const client = { res, topics, user: user.id };
    streams.add(client);
    res.write(`event: hello\ndata: ${JSON.stringify({ topics, at: nowIso(), user: user.id })}\n\n`);
    req.on('close', () => streams.delete(client));
    return; // لا نُغلق الاتصال
  }

  // ---------- إدارة: سجل التدقيق والاستيراد ----------
  if (p === '/api/admin/audit' && m === 'GET') {
    const user = requireAuth(req, res, 'super_admin'); if (!user) return;
    return ok(res, { items: db.audit.all().slice().reverse().slice(0, 200) });
  }
  if (p === '/api/admin/stats' && m === 'GET') {
    const user = requireAuth(req, res, 'super_admin'); if (!user) return;
    const ships = db.shipments.all();
    return ok(res, {
      users: db.users.all().length,
      pending: db.users.find((u) => u.status === 'pending').length,
      shipments: ships.length,
      demo_shipments: ships.filter((s) => s.demo).length,
      favorites: db.favorites.all().length,
      reviews: db.reviews.all().length,
      notifications: db.notifications.all().length,
      audit_events: db.audit.all().length
    });
  }
  if (p === '/api/admin/import' && m === 'POST') {
    const user = requireAuth(req, res, 'super_admin'); if (!user) return;
    const b = await readBody(req, 8 * 1024 * 1024);
    const out = { users: 0, shipments: 0, warehouses: 0 };
    if (Array.isArray(b.shipments)) {
      for (const s of b.shipments) {
        if (!s.trackingNumber) continue;
        if (db.shipments.findOne((x) => x.trackingNumber === s.trackingNumber)) continue;
        db.shipments.insert({ ...s, id: crypto.randomUUID(), demo: false, data_source: 'مستورد من النظام السابق' });
        out.shipments++;
      }
    }
    if (Array.isArray(b.systemUsers)) {
      for (const u of b.systemUsers) {
        if (!u.username || !u.password) continue; // كلمة مرور قديمة بنص صريح → لا تُنقل، يُطلب إعادة تعيينها
        if (db.users.findOne((x) => x.username === u.username)) continue;
        db.users.insert({
          id: crypto.randomUUID(), fullName: u.fullName || u.name || u.username, email: u.email || '',
          phone: u.phone || '', username: u.username, password_hash: A.hashPassword(u.password),
          role: ['super_admin', 'branch_manager', 'warehouse_manager', 'shipping_staff', 'support_staff', 'agent', 'user'].includes(u.role) ? u.role : 'user',
          status: 'active', migrated_from: 'legacy-local', created_at: nowIso()
        });
        out.users++;
      }
    }
    audit(user, 'import', 'system', null, { details: out, ip: ipOf(req) });
    return ok(res, out);
  }

  // ============================ المزادات (المرحلة 2) ============================
  if (p === '/api/auctions/mine/bids' && m === 'GET') {
    const user = requireAuth(req, res); if (!user) return;
    const mine = db.bids.find((b) => b.user_id === user.id).sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(0, 100);
    const items = mine.map((b) => {
      const a = db.auctions.byId(b.auction_id);
      return { ...b, amount: auctions.toMoney(b.amount), auction: a ? auctions.publicAuction(a, user) : null };
    });
    return ok(res, { items });
  }

  if (p === '/api/auctions' && m === 'GET') {
    const user = A.userFromRequest(req);
    const data = auctions.list({
      status: q.get('status') || 'active', category: q.get('category') || null,
      q: q.get('q') || null, sort: q.get('sort') || 'ending',
      page: +(q.get('page') || 1), limit: Math.min(60, +(q.get('limit') || 30)), viewer: user
    });
    return ok(res, data);
  }

  if (p === '/api/auctions' && m === 'POST') {
    const user = requireAuth(req, res, 'shipping_staff'); if (!user) return;
    const b = await readBody(req);
    try {
      const a = auctions.create(b, user, { demo: !!b.demo });
      broadcast('auctions', 'auction_created', auctions.publicAuction(a, null));
      audit(user, 'auction_create_route', 'auction', a.id, { ip: ipOf(req) });
      return ok(res, { auction: auctions.publicAuction(a, user) }, 201);
    } catch (e) { return fail(res, e.status || 400, e.message); }
  }

  const aucIdMatch = p.match(/^\/api\/auctions\/([^/]+)$/);
  if (aucIdMatch && m === 'GET') {
    const user = A.userFromRequest(req);
    try { return ok(res, { auction: auctions.detail(aucIdMatch[1], user) }); }
    catch (e) { return fail(res, e.status || 404, e.message); }
  }

  const bidMatch = p.match(/^\/api\/auctions\/([^/]+)\/bids$/);
  if (bidMatch && m === 'POST') {
    const user = requireAuth(req, res); if (!user) return;
    const b = await readBody(req);
    try {
      const result = auctions.placeBid(bidMatch[1], user, b.amount, ipOf(req));
      const payload = { auction_id: bidMatch[1], current_bid: result.auction.current_bid, bid_count: result.auction.bid_count, min_next_bid: result.auction.min_next_bid, ends_at: result.auction.ends_at, extended: result.extended };
      broadcast('auctions', 'auction_bid', payload);
      broadcast('auction:' + bidMatch[1], 'auction_bid', payload);
      if (result.previous && result.previous.id) {
        notify(result.previous.id, 'تم تجاوز مزايدتك', `مزاد «${result.auction.title}» — السعر الآن ${result.auction.current_bid} $`, '#/auction/' + bidMatch[1], 'auction');
      }
      return ok(res, { auction: result.auction, bid: result.bid, extended: result.extended, balance: wallet.balance(user.id) });
    } catch (e) { return fail(res, e.status || 400, e.message, e.min_next ? { min_next: e.min_next } : {}); }
  }

  const cancelMatch = p.match(/^\/api\/auctions\/([^/]+)\/cancel$/);
  if (cancelMatch && m === 'POST') {
    const user = requireAuth(req, res); if (!user) return;
    try {
      const a = auctions.cancel(cancelMatch[1], user);
      broadcast('auctions', 'auction_closed', { id: a.id, outcome: 'cancelled' });
      return ok(res, { auction: auctions.publicAuction(a, user) });
    } catch (e) { return fail(res, e.status || 400, e.message); }
  }

  const watchMatch = p.match(/^\/api\/auctions\/([^/]+)\/watch$/);
  if (watchMatch && (m === 'POST' || m === 'DELETE')) {
    const user = requireAuth(req, res); if (!user) return;
    const a = db.auctions.byId(watchMatch[1]);
    if (!a) return fail(res, 404, 'المزاد غير موجود');
    const existing = db.favorites.findOne((f) => f.user_id === user.id && f.item_type === 'auction' && f.item_id === a.id);
    if (m === 'POST') {
      if (!existing) db.favorites.insert({ id: crypto.randomUUID(), user_id: user.id, item_type: 'auction', item_id: a.id, meta: { title: a.title }, created_at: nowIso() });
      return ok(res, { watching: true });
    }
    if (existing) db.favorites.remove(existing.id);
    return ok(res, { watching: false });
  }

  // ============================ المحفظة (المرحلة 2) ============================
  if (p === '/api/wallet/me' && m === 'GET') {
    const user = requireAuth(req, res); if (!user) return;
    const b = wallet.balance(user.id);
    return ok(res, { balance: { available: +(b.available_cents / 100).toFixed(2), held: +(b.held_cents / 100).toFixed(2), currency: b.currency } });
  }
  if (p === '/api/wallet/entries' && m === 'GET') {
    const user = requireAuth(req, res); if (!user) return;
    const items = wallet.entries(user.id, 100).map((e) => ({ ...e, amount: +(e.amount_cents / 100).toFixed(2) }));
    return ok(res, { items });
  }
  if (p === '/api/wallet/demo-credit' && m === 'POST') {
    const user = requireAuth(req, res); if (!user) return;
    if (process.env.DEMO_MODE === 'false') return fail(res, 403, 'الرصيد التجريبي معطّل في هذه البيئة');
    const b = await readBody(req);
    const amount = Math.min(50000, Math.max(1, Number(b.amount) || 5000));
    const r = wallet.credit(user.id, Math.round(amount * 100), { ref_type: 'demo_credit', note: 'رصيد تجريبي — بيئة عرض (ليس مالًا حقيقيًا)', demo: true });
    audit(user, 'demo_credit', 'wallet', user.id, { details: { amount }, ip: ipOf(req) });
    return ok(res, { balance: { available: +(r.account.available_cents / 100).toFixed(2), held: +(r.account.held_cents / 100).toFixed(2) }, demo: true, warning: 'هذا رصيد تجريبي للعرض فقط ولا يمثل مالًا حقيقيًا' });
  }
  if (p === '/api/admin/credit' && m === 'POST') {
    const admin = requireAuth(req, res, 'super_admin'); if (!admin) return;
    const b = await readBody(req);
    const target = db.users.byId(b.user_id);
    if (!target) return fail(res, 404, 'المستخدم غير موجود');
    const amount = Math.round(Number(b.amount) * 100);
    if (!(amount > 0)) return fail(res, 400, 'المبلغ غير صالح');
    const r = wallet.credit(target.id, amount, { ref_type: 'admin_credit', note: b.note || 'شحن إداري', demo: !!b.demo });
    audit(admin, 'wallet_credit', 'user', target.id, { details: { amount: b.amount, note: b.note }, ip: ipOf(req) });
    notify(target.id, 'شحن رصيد', `تم شحن محفظتك بمبلغ ${b.amount} $`, null, 'wallet');
    return ok(res, { user_id: target.id, balance: { available: +(r.account.available_cents / 100).toFixed(2), held: +(r.account.held_cents / 100).toFixed(2) } });
  }
  if (p === '/api/admin/wallet' && m === 'GET') {
    const admin = requireAuth(req, res, 'super_admin'); if (!admin) return;
    return ok(res, { accounts: db.wallet_accounts.all().map((a) => ({ user_id: a.user_id, available: +(a.available_cents / 100).toFixed(2), held: +(a.held_cents / 100).toFixed(2) })) });
  }

  return fail(res, 404, 'المسار غير موجود: ' + p);
}

// ============================ الملفات الثابتة ============================
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };

function serveStatic(req, res, pathname) {
  let rel = decodeURIComponent(pathname);
  if (rel === '/' || rel === '') rel = '/index.html';
  const file = path.join(APP_DIR, path.normalize(rel).replace(/^(\.\.[/\\])+/, ''));
  if (!file.startsWith(APP_DIR)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) {
      // توجيه أي مسار غير معروف إلى التطبيق (روابط عميقة لاحقًا)
      const fallback = path.join(APP_DIR, 'index.html');
      return fs.readFile(fallback, (e2, buf) => {
        if (e2) {
          res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
          return res.end('<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><title>خادم المسار اللوجستي</title>'
            + '<div style="font-family:Tahoma,sans-serif;max-width:620px;margin:60px auto;text-align:center;line-height:2">'
            + '<h2>✅ خادم المسار العالمي اللوجستي يعمل</h2>'
            + '<p>هذا خادم بيانات فقط. الواجهة موجودة داخل تطبيق الهاتف.</p>'
            + '<p><a href="/health">فحص الصحة /health</a></p></div></html>');
        }
        res.writeHead(200, { 'content-type': MIME['.html'] });
        res.end(buf);
      });
    }
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, { 'content-type': MIME[ext] || 'application/octet-stream', 'cache-control': ext === '.html' ? 'no-cache' : 'public, max-age=3600' });
    fs.createReadStream(file).pipe(res);
  });
}

// ============================ الخادم ============================
// ---------- CORS: يُطبَّق على كل استجابة (API + الملفات) لدعم تطبيق الهاتف ----------
function corsHeaders(req) {
  const origin = req.headers.origin || '';
  let allow = '*';
  if (CORS_ORIGINS !== '*') {
    const list = CORS_ORIGINS.split(',').map((x) => x.trim()).filter(Boolean);
    allow = list.includes(origin) ? origin : list[0] || '';
  }
  return {
    'access-control-allow-origin': allow,
    'access-control-allow-methods': 'GET,POST,PATCH,DELETE,OPTIONS',
    'access-control-allow-headers': 'content-type,authorization,accept,origin',
    'access-control-max-age': '86400',
    'access-control-expose-headers': 'content-length,content-type',
    ...(allow !== '*' ? { vary: 'Origin' } : {})
  };
}

/** فحص صحة الخادم — يستخدمه Render/Railway/Docker */
function healthPayload() {
  const mem = process.memoryUsage();
  return {
    ok: true,
    status: 'ok',
    version: VERSION,
    uptime_s: Math.round(process.uptime()),
    node: process.version,
    time: nowIso(),
    storage: { type: 'filesystem-json', dir: DATA_DIR, writable: writable(), persistent: STORAGE_PERSISTENT },
    public_url: PUBLIC_URL || null,
    counts: {
      users: db.users.all().length,
      shipments: db.shipments.all().length,
      auctions: db.auctions.all().length,
      wallet_entries: db.wallet_entries.all().length
    }
  };
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  // ترويسات CORS على كل استجابة
  const ch = corsHeaders(req);
  for (const [k, v] of Object.entries(ch)) { try { res.setHeader(k, v); } catch (_) {} }
  if (req.method === 'OPTIONS') { res.writeHead(204, ch); return res.end(); }

  // فحص الصحة: /health و /healthz (نص/JSON) — وأيضًا / بشرط قبول JSON فقط
  if ((url.pathname === '/health' || url.pathname === '/healthz') && (req.method === 'GET' || req.method === 'HEAD')) {
    const body = JSON.stringify(healthPayload());
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'content-length': Buffer.byteLength(body) });
    return res.end(req.method === 'HEAD' ? undefined : body);
  }
  const wantsJson = String(req.headers.accept || '').includes('application/json') && !String(req.headers.accept || '').includes('text/html');
  if (url.pathname === '/' && wantsJson) {
    const body = JSON.stringify(healthPayload());
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
    return res.end(body);
  }

  if (url.pathname.startsWith('/api/')) {
    try { await handleApi(req, res, url); }
    catch (e) {
      console.error('[api]', req.method, url.pathname, e.message);
      if (!res.headersSent) fail(res, e.status || 500, e.message || 'خطأ داخلي');
    }
    return;
  }
  serveStatic(req, res, url.pathname);
});

const adminForSeed = bootstrapAdmin() || db.users.findOne((u) => u.role === 'super_admin');
seedDemoShipments();
try {
  const seededAuctions = auctions.seedDemo(adminForSeed || db.users.findOne((u) => u.role === 'super_admin'));
  if (seededAuctions) console.log(`[seed] تم إنشاء ${seededAuctions} مزادات تجريبية موسومة demo=true`);
  for (const u of db.users.all()) wallet.accounts.ensure(u.id);
  const seededRules = pricing.seedDefaults(adminForSeed || db.users.findOne((u) => u.role === 'super_admin'));
  if (seededRules) console.log(`[seed] تم إنشاء ${seededRules} قاعدة تسعير افتراضية قابلة للتعديل`);
  const seededFaq = assistant.seedFaq();
  if (seededFaq) console.log(`[seed] ${seededFaq} سؤالًا شائعًا جاهزًا للمساعد الذكي`);
} catch (e) { console.error('[seed] فشل تهيئة المزادات:', e.message); }

server.listen(PORT, HOST, () => {
  console.log(`✅ خادم المسار العالمي اللوجستي يعمل على http://${HOST}:${PORT}`);
  console.log(`   الإصدار: ${VERSION} | التخزين: ${DATA_DIR}`);
  if (PUBLIC_URL) console.log(`   الرابط العام (HTTPS): ${PUBLIC_URL}`);
  console.log(`   الواجهة: /  | فحص الصحة: /health  (وأيضًا /api/health)`);
  const canWrite = writable();
  console.log(`   قاعدة البيانات: ملفات JSON محلية ${canWrite ? '(قابلة للكتابة ✅)' : '(غير قابلة للكتابة ❌ — البيانات لن تُحفظ!)'}`);
  if (!STORAGE_PERSISTENT) {
    console.log('');
    console.log('   ⚠️  تنبيه: هذا التخزين يبدو غير دائم (قرص مؤقت).');
    console.log('      على Render/Railway أضف قرصًا دائمًا واضبط DATA_DIR=/data');
    console.log('      وإلا ستضيع المستخدمون والمزادات والمحفظة عند كل إعادة نشر.');
    console.log('');
  }
});

// ---------- إغلاق آمن: تفريغ الكتابة على القرص قبل الخروج (SIGTERM في السحابة) ----------
let shuttingDown = false;
async function shutdown(signal) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.log(`\n[shutdown] وصل ${signal} — حفظ البيانات ثم إغلاق...`);
  try { server.close(); } catch (_) {}
  try { await flushStore(); console.log('[shutdown] تم حفظ كل المجموعات ✅'); }
  catch (e) { console.error('[shutdown] فشل الحفظ:', e.message); }
  process.exit(0);
}
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

// ============================ مجدول إغلاق المزادات (كل ثانية) ============================
setInterval(() => {
  try {
    auctions.tick({
      onClosed: (r) => {
        const money = auctions.toMoney(r.amount || 0);
        const payload = { id: r.auction.id, title: r.auction.title, outcome: r.outcome, winner_id: r.winner_id || null, amount: r.amount ? money : 0 };
        broadcast('auctions', 'auction_closed', payload);
        broadcast('auction:' + r.auction.id, 'auction_closed', payload);
        if (r.outcome === 'sold') {
          notify(r.winner_id, '🎉 فزت بالمزاد', `فزت بمزاد «${r.auction.title}» بمبلغ ${money} $ — رُحّل المبلغ إلى حساب الضمان`, '#/auction/' + r.auction.id, 'auction');
          if (r.seller_id) notify(r.seller_id, 'تم بيع مزادك', `«${r.auction.title}» أُغلق بمبلغ ${money} $`, '#/auction/' + r.auction.id, 'auction');
        } else if (r.seller_id) {
          notify(r.seller_id, 'انتهى المزاد دون بيع', `«${r.auction.title}» — ${r.outcome === 'reserve_not_met' ? 'لم يُستوفَ سعر الحجز' : 'لا مزايدات'}`, '#/auction/' + r.auction.id, 'auction');
        }
      }
    });
  } catch (e) { console.error('[scheduler]', e.message); }
}, 1000).unref();

process.on('SIGTERM', () => { server.close(() => process.exit(0)); });
process.on('SIGINT', () => { server.close(() => process.exit(0)); });

function publicUser(u) {
  if (!u) return null;
  const { password_hash, ...rest } = u;
  return rest;
}

module.exports = { server };

});

// ==================== server/lib/admin.js ====================
__def("server/lib/admin.js", function (module, exports, __req, __bundleDir) {
/**
 * admin.js — إدارة متكاملة: المستخدمون، العملاء، الزوار، الإشعارات، الخادم
 * ----------------------------------------------------------------------
 * كل المنطق هنا (لا في الواجهة) حتى تبقى الصلاحيات والتحقق على الخادم.
 */
'use strict';
const crypto = require('crypto');
const { db, audit, DATA_DIR } = __req("server/lib/store.js");
const A = __req("server/lib/auth.js");
const wallet = __req("server/lib/wallet.js");
const push = __req("server/lib/push.js");
const visitors = __req("server/lib/visitors.js");

const nowIso = () => new Date().toISOString();
const ROLE_LABEL = {
  user: 'مستخدم', agent: 'وكيل', support_staff: 'دعم فني', shipping_staff: 'موظف شحن',
  branch_manager: 'مدير فرع', warehouse_manager: 'مدير مستودع', super_admin: 'مدير عام'
};
const STAFF_ROLES = ['support_staff', 'shipping_staff', 'branch_manager', 'warehouse_manager', 'super_admin'];
const CLIENT_ROLES = ['user', 'agent'];
const publicUser = (u) => {
  const { password_hash, ...rest } = u;
  return { ...rest, role_label: ROLE_LABEL[u.role] || u.role, kind: STAFF_ROLES.includes(u.role) ? 'staff' : 'client' };
};

// ============================ المستخدمون ============================
function listUsers({ role = null, status = null, q = null, kind = null, page = 1, limit = 50 } = {}) {
  let rows = db.users.all().slice();
  if (role) rows = rows.filter((u) => u.role === role);
  if (kind === 'client') rows = rows.filter((u) => CLIENT_ROLES.includes(u.role));
  if (kind === 'staff') rows = rows.filter((u) => STAFF_ROLES.includes(u.role));
  if (status) rows = rows.filter((u) => u.status === status);
  if (q) {
    const s = String(q).toLowerCase();
    rows = rows.filter((u) => [u.fullName, u.email, u.phone, u.username].some((f) => String(f || '').toLowerCase().includes(s)));
  }
  rows.sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)));
  const total = rows.length;
  const from = (Math.max(1, page) - 1) * limit;
  return { total, page, limit, items: rows.slice(from, from + limit).map(publicUser) };
}

function userDetail(id) {
  const u = db.users.byId(id);
  if (!u) throw Object.assign(new Error('المستخدم غير موجود'), { status: 404 });
  return {
    user: publicUser(u),
    wallet: wallet.balance(u.id),
    shipments: db.shipments.find((s) => s.user_id === u.id || s.created_by === u.id).length,
    notifications: db.notifications.find((n) => n.user_id === u.id).length,
    favorites: db.favorites.find((f) => f.user_id === u.id).length,
    sessions: db.sessions.find((s) => s.user_id === u.id && !s.revoked_at).length,
    audit: db.audit.find((a) => a.actor_id === u.id).slice(-10).reverse()
  };
}

function updateUser(id, patch, actor) {
  const u = db.users.byId(id);
  if (!u) throw Object.assign(new Error('المستخدم غير موجود'), { status: 404 });
  const allowed = {};
  if (patch.status && ['active', 'pending', 'suspended', 'deleted'].includes(patch.status)) allowed.status = patch.status;
  if (patch.role && Object.keys(ROLE_LABEL).includes(patch.role)) {
    if (A.ROLE_RANK[actor.role] <= A.ROLE_RANK[patch.role] && actor.id !== u.id) {
      throw Object.assign(new Error('لا يمكنك منح رتبة مساوية أو أعلى من رتبتك'), { status: 403 });
    }
    allowed.role = patch.role;
  }
  ['fullName', 'phone', 'email', 'idNumber', 'commercialReg', 'notes'].forEach((k) => { if (patch[k] !== undefined) allowed[k] = patch[k]; });
  if (patch.lat !== undefined) allowed.lat = patch.lat;
  if (patch.lng !== undefined) allowed.lng = patch.lng;
  const updated = db.users.update(id, allowed);
  if (allowed.status === 'suspended' || allowed.status === 'deleted') revokeAllSessions(id);
  audit(actor, 'admin_user_update', 'user', id, { details: allowed });
  return publicUser(updated);
}

function resetPassword(id, actor, newPassword = null) {
  const u = db.users.byId(id);
  if (!u) throw Object.assign(new Error('المستخدم غير موجود'), { status: 404 });
  const temp = newPassword || crypto.randomBytes(6).toString('base64url').slice(0, 10) + 'aA1';
  db.users.update(id, { password_hash: A.hashPassword(temp), password_reset_at: nowIso() });
  revokeAllSessions(id);
  audit(actor, 'admin_password_reset', 'user', id, {});
  return { username: u.username, temporary_password: temp, note: 'تُعرض مرة واحدة فقط — سلّمها للمستخدم واطلب تغييرها فورًا.' };
}

function revokeAllSessions(userId) {
  const u = db.users.byId(userId);
  if (u) db.users.update(userId, { token_version: (u.token_version || 0) + 1 }); // يُبطل رموز الوصول فورًا
  let n = 0;
  db.sessions.find((s) => s.user_id === userId && !s.revoked_at).forEach((s) => {
    db.sessions.update(s.id, { revoked_at: nowIso() });
    n++;
  });
  return n;
}

function createUser(payload, actor) {
  const need = ['fullName', 'username', 'password'];
  need.forEach((k) => { if (!payload[k]) throw Object.assign(new Error(`الحقل ${k} مطلوب`), { status: 400 }); });
  if (String(payload.password).length < 8) throw Object.assign(new Error('كلمة المرور 8 أحرف على الأقل'), { status: 400 });
  if (db.users.findOne((u) => u.username === payload.username || (payload.email && u.email === payload.email)))
    throw Object.assign(new Error('اسم المستخدم أو البريد مستخدم'), { status: 409 });
  const role = Object.keys(ROLE_LABEL).includes(payload.role) ? payload.role : 'user';
  if (A.ROLE_RANK[role] >= A.ROLE_RANK[actor.role]) throw Object.assign(new Error('لا يمكنك إنشاء مستخدم برتبة مساوية أو أعلى'), { status: 403 });
  const u = db.users.insert({
    id: crypto.randomUUID(), fullName: payload.fullName, username: payload.username,
    email: payload.email || null, phone: payload.phone || null,
    password_hash: A.hashPassword(payload.password), role,
    status: payload.status === 'pending' ? 'pending' : 'active',
    created_by: actor.id, created_at: nowIso()
  });
  wallet.accounts.ensure(u.id);
  audit(actor, 'admin_user_create', 'user', u.id, { details: { role } });
  return publicUser(u);
}

function deleteUser(id, actor) {
  const u = db.users.byId(id);
  if (!u) throw Object.assign(new Error('المستخدم غير موجود'), { status: 404 });
  if (u.id === actor.id) throw Object.assign(new Error('لا يمكنك حذف حسابك الحالي'), { status: 400 });
  if (A.ROLE_RANK[u.role] >= A.ROLE_RANK[actor.role]) throw Object.assign(new Error('لا يمكنك حذف مستخدم برتبة مساوية أو أعلى'), { status: 403 });
  // حذف ناعم: يُعطَّل الحساب ويبقى أثره في السجل والبيانات المرتبطة
  db.users.update(id, { status: 'deleted', deleted_at: nowIso(), deleted_by: actor.id });
  revokeAllSessions(id);
  audit(actor, 'admin_user_delete', 'user', id, {});
  return { ok: true, soft_deleted: true };
}

// ============================ العملاء ============================
function listClients({ q = null, page = 1, limit = 50, status = null } = {}) {
  let rows = db.users.find((u) => CLIENT_ROLES.includes(u.role));
  if (status) rows = rows.filter((u) => u.status === status);
  if (q) {
    const s = String(q).toLowerCase();
    rows = rows.filter((u) => [u.fullName, u.email, u.phone, u.username].some((f) => String(f || '').toLowerCase().includes(s)));
  }
  const items = rows.map((u) => {
    const ships = db.shipments.find((s) => s.user_id === u.id || s.created_by === u.id);
    const bal = wallet.balance(u.id);
    return {
      ...publicUser(u),
      shipments: ships.length,
      shipments_delivered: ships.filter((s) => String(s.status || '').includes('تسليم') || String(s.status || '').toLowerCase().includes('deliver')).length,
      wallet_available: bal.available_cents / 100,
      wallet_held: bal.held_cents / 100,
      last_seen: u.last_login_at || null
    };
  }).sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)));
  const total = items.length;
  const from = (Math.max(1, page) - 1) * limit;
  return { total, page, limit, items: items.slice(from, from + limit) };
}

// ============================ الإشعارات ============================
function resolveAudience({ audience = 'all', values = [] } = {}) {
  const active = db.users.find((u) => u.status === 'active');
  switch (audience) {
    case 'clients': return active.filter((u) => CLIENT_ROLES.includes(u.role));
    case 'staff': return active.filter((u) => STAFF_ROLES.includes(u.role));
    case 'role': return active.filter((u) => values.includes(u.role));
    case 'users': return active.filter((u) => values.includes(u.id));
    case 'visitors': return []; // الزوار غير المسجّلين لا صندوق لهم — تُستخدم لهم إشعارات الويب فقط
    case 'all':
    default: return active;
  }
}

/**
 * إرسال حملة إشعارات.
 * deps: { notify(user,title,body,link,type) } لضمان البث اللحظي عبر SSE من الطبقة الرئيسية.
 */
async function sendCampaign(payload, actor, deps = {}) {
  const title = String(payload.title || '').trim();
  const body = String(payload.body || '').trim();
  if (title.length < 3) throw Object.assign(new Error('عنوان الإشعار قصير جدًا'), { status: 400 });
  if (body.length < 2) throw Object.assign(new Error('نص الإشعار مطلوب'), { status: 400 });
  const channels = Array.isArray(payload.channels) && payload.channels.length ? payload.channels : ['inapp'];
  const audience = payload.audience || 'all';
  const values = Array.isArray(payload.values) ? payload.values : [];
  const recipients = resolveAudience({ audience, values });
  const link = payload.link || null;
  const type = payload.type || 'admin';

  const campaign = db.campaigns.insert({
    id: crypto.randomUUID(), title, body, link, type, audience, audience_values: values,
    channels, created_by: actor.id, created_by_name: actor.fullName,
    target_count: recipients.length, sent_count: 0, push_results: null,
    status: 'sending', created_at: nowIso()
  });

  // 1) صندوق الإشعارات داخل التطبيق + SSE
  let inapp = 0;
  if (channels.includes('inapp')) {
    for (const u of recipients) {
      if (deps.notify) deps.notify(u.id, title, body, link, type);
      else db.notifications.insert({ id: crypto.randomUUID(), user_id: u.id, type, title, body, link, read_at: null, created_at: nowIso() });
      inapp++;
    }
  }

  // 2) Web Push
  const results = { inapp, webpush: null, fcm: null, apns: null };
  if (channels.includes('webpush')) {
    const ids = new Set(recipients.map((u) => u.id));
    const subs = db.push_subscriptions.find((s) => s.active && (audience === 'all' ? true : ids.has(s.user_id)));
    let sent = 0, failed = 0, gone = 0; const errors = [];
    for (const sub of subs) {
      try {
        await push.sendWebPush(sub, { title, body, url: link || '/', campaign_id: campaign.id, at: nowIso() });
        sent++;
        db.push_subscriptions.update(sub.id, { last_ok_at: nowIso(), fail_count: 0 });
      } catch (e) {
        failed++;
        errors.push(String(e.message).slice(0, 140));
        const fails = (sub.fail_count || 0) + 1;
        if (e.gone) { db.push_subscriptions.update(sub.id, { active: false, fail_count: fails }); gone++; }
        else db.push_subscriptions.update(sub.id, { fail_count: fails, last_error: String(e.message).slice(0, 200) });
      }
    }
    results.webpush = { subscriptions: subs.length, sent, failed, deactivated: gone, errors: errors.slice(0, 3) };
    logChannel(campaign.id, 'webpush', results.webpush);
  }

  // 3) FCM / APNs
  const devices = db.device_tokens.find((d) => d.active);
  const android = devices.filter((d) => d.platform === 'android').map((d) => d.token);
  const ios = devices.filter((d) => d.platform === 'ios').map((d) => d.token);
  if (channels.includes('fcm') && android.length) { results.fcm = await push.sendFcm(android, title, body, { campaign_id: campaign.id, link: link || '' }); logChannel(campaign.id, 'fcm', results.fcm); }
  if (channels.includes('apns') && ios.length) { results.apns = await push.sendApns(ios, title, body, { campaign_id: campaign.id, link: link || '' }); logChannel(campaign.id, 'apns', results.apns); }

  db.campaigns.update(campaign.id, { status: 'sent', sent_count: inapp, push_results: results, sent_at: nowIso() });
  audit(actor, 'admin_campaign_send', 'campaign', campaign.id, { details: { audience, recipients: recipients.length, channels } });
  return { campaign: db.campaigns.byId(campaign.id), results };
}

function logChannel(campaignId, channel, result) {
  db.notify_log.insert({
    id: crypto.randomUUID(), campaign_id: campaignId, channel,
    status: result.status || (result.sent > 0 ? 'sent' : 'failed'),
    sent: result.sent || 0, failed: result.failed || 0,
    detail: result.note || (result.errors && result.errors[0]) || null,
    created_at: nowIso()
  });
}

function listCampaigns({ page = 1, limit = 30 } = {}) {
  const rows = db.campaigns.all().slice().sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)));
  const total = rows.length;
  const from = (Math.max(1, page) - 1) * limit;
  return { total, page, limit, items: rows.slice(from, from + limit) };
}

// ============================ حالة الخادم ============================
function serverStatus({ uptime_s = 0 } = {}) {
  const users = db.users.all();
  const ships = db.shipments.all();
  const mem = process.memoryUsage();
  return {
    version: process.env.APP_VERSION || '1.0.0-phase3',
    uptime_s,
    node: process.version,
    pid: process.pid,
    memory_mb: Math.round(mem.rss / 1048576),
    data_dir: DATA_DIR,
    storage: 'JSON-on-disk',
    counts: {
      users: users.length,
      active_users: users.filter((u) => u.status === 'active').length,
      pending_users: users.filter((u) => u.status === 'pending').length,
      suspended_users: users.filter((u) => u.status === 'suspended').length,
      staff: users.filter((u) => STAFF_ROLES.includes(u.role)).length,
      clients: users.filter((u) => CLIENT_ROLES.includes(u.role)).length,
      visitors: db.visitors.all().length,
      sessions: db.sessions.find((s) => !s.revoked_at).length,
      shipments: ships.length,
      auctions: db.auctions.all().length,
      bids: db.bids.all().length,
      notifications: db.notifications.all().length,
      campaigns: db.campaigns.all().length,
      audit: db.audit.all().length,
      push_subscriptions: db.push_subscriptions.find((s) => s.active).length,
      device_tokens: db.device_tokens.find((d) => d.active).length
    },
    push_channels: push.channelsStatus(),
    live_sources: ['fx', 'weather', 'news', 'crypto', 'macro']
  };
}

function backupBundle() {
  const names = ['users', 'sessions', 'shipments', 'favorites', 'reviews', 'notifications', 'audit', 'auctions', 'bids',
    'wallet_accounts', 'wallet_entries', 'wallet_holds', 'visitors', 'push_subscriptions', 'device_tokens', 'campaigns', 'notify_log'];
  const data = {};
  names.forEach((n) => { data[n] = db[n] ? db[n].all() : []; });
  return { created_at: nowIso(), version: 'phase3', collections: names.length, data };
}

module.exports = {
  ROLE_LABEL, STAFF_ROLES, CLIENT_ROLES, publicUser,
  listUsers, userDetail, updateUser, resetPassword, createUser, deleteUser, revokeAllSessions,
  listClients, resolveAudience, sendCampaign, listCampaigns,
  serverStatus, backupBundle, visitors
};

});

// ==================== server/lib/assistant.js ====================
__def("server/lib/assistant.js", function (module, exports, __req, __bundleDir) {
/**
 * assistant.js — المساعد الذكي الحقيقي (المرحلة 5)
 * -------------------------------------------------
 * المبدأ: لا ادّعاء ذكاء اصطناعي بلا ذكاء اصطناعي.
 *
 * طبقتان:
 *   1) model  — استدعاء HTTP حقيقي لمزوّد LLM (OpenAI / متوافق مع OpenAI / Anthropic /
 *               Google Gemini / Ollama محلي) عند توفّر المفتاح في البيئة أو في الإعدادات.
 *   2) rules  — محرّك قواعد مُسنَد إلى بيانات حقيقية من قاعدة البيانات (شحنات المستخدم،
 *               رصيده، المزادات، قواعد التسعير، قاعدة أسئلة شائعة يديرها المدير).
 *
 * أي إجابة تُرجع دائمًا: engine ('model' | 'rules')، provider، grounded، sources[]
 * وحقل reason صريح عند غياب المزوّد — بلا أي تمويه.
 */
'use strict';
const crypto = require('crypto');
const { db, audit } = __req("server/lib/store.js");
const wallet = __req("server/lib/wallet.js");
const pricing = __req("server/lib/pricing.js");

const nowIso = () => new Date().toISOString();
const ROLE_LABEL = {
  user: 'مستخدم', agent: 'وكيل', support_staff: 'دعم فني', shipping_staff: 'موظف شحن',
  branch_manager: 'مدير فرع', warehouse_manager: 'مدير مستودع', super_admin: 'مدير عام'
};
const STATUS_LABEL = {
  pending: 'بانتظار الشحن', processing: 'قيد التجهيز', shipped: 'تم الشحن',
  in_transit: 'في الطريق', customs: 'في الجمارك', arrived: 'وصلت',
  out_for_delivery: 'قيد التوصيل', delivered: 'تم التسليم', delayed: 'متأخرة', cancelled: 'ملغاة'
};
const SERVICE_LABEL = { air: 'جوي', sea: 'بحري', land: 'بري' };

// ============================ المزوّدون ============================
const PROVIDERS = [
  {
    id: 'openai', name: 'OpenAI', kind: 'openai', env: 'AI_API_KEY', altEnv: ['OPENAI_API_KEY'],
    baseEnv: 'AI_BASE_URL', defaultBase: 'https://api.openai.com/v1', modelEnv: 'AI_MODEL', defaultModel: 'gpt-4o-mini',
    docs: 'https://platform.openai.com/api-keys'
  },
  {
    id: 'openrouter', name: 'OpenRouter (متوافق مع OpenAI)', kind: 'openai', env: 'OPENROUTER_API_KEY',
    baseEnv: null, defaultBase: 'https://openrouter.ai/api/v1', modelEnv: 'OPENROUTER_MODEL', defaultModel: 'openai/gpt-4o-mini',
    docs: 'https://openrouter.ai/keys'
  },
  {
    id: 'anthropic', name: 'Anthropic Claude', kind: 'anthropic', env: 'ANTHROPIC_API_KEY',
    baseEnv: null, defaultBase: 'https://api.anthropic.com/v1', modelEnv: 'ANTHROPIC_MODEL', defaultModel: 'claude-3-5-sonnet-latest',
    docs: 'https://console.anthropic.com/settings/keys'
  },
  {
    id: 'gemini', name: 'Google Gemini', kind: 'gemini', env: 'GEMINI_API_KEY', altEnv: ['GOOGLE_API_KEY'],
    baseEnv: null, defaultBase: 'https://generativelanguage.googleapis.com/v1beta', modelEnv: 'GEMINI_MODEL', defaultModel: 'gemini-1.5-flash',
    docs: 'https://aistudio.google.com/app/apikey'
  },
  {
    id: 'ollama', name: 'Ollama (نموذج محلي)', kind: 'ollama', env: 'OLLAMA_HOST',
    baseEnv: null, defaultBase: 'http://127.0.0.1:11434', modelEnv: 'OLLAMA_MODEL', defaultModel: 'llama3.1',
    docs: 'https://ollama.com — يعمل محليًا بلا مفاتيح ولا إنترنت'
  }
];

const PROVIDER_BY_ID = Object.fromEntries(PROVIDERS.map((p) => [p.id, p]));
const envVal = (p) => {
  const keys = [p.env, ...(p.altEnv || [])];
  for (const k of keys) if (k && process.env[k]) return process.env[k];
  return null;
};
const modelFor = (p) => process.env[p.modelEnv] || p.defaultModel;
const baseFor = (p) => (process.env[p.baseEnv] || p.defaultBase || '').replace(/\/$/, '');

function settings() {
  const s = db.settings.all() || {};
  return s.assistant || {};
}
function saveSettings(patch, actor) {
  const all = db.settings.all() || {};
  const cur = all.assistant || {};
  const next = { ...cur, ...patch };
  // تحقق
  if (next.daily_limit !== undefined) {
    const n = Number(next.daily_limit);
    if (!Number.isFinite(n) || n < 1 || n > 1000) throw Object.assign(new Error('الحد اليومي بين 1 و1000'), { status: 400 });
    next.daily_limit = Math.round(n);
  }
  if (next.temperature !== undefined) {
    const t = Number(next.temperature);
    if (!Number.isFinite(t) || t < 0 || t > 1) throw Object.assign(new Error('الحرارة بين 0 و1'), { status: 400 });
    next.temperature = t;
  }
  if (next.max_tokens !== undefined) {
    const n = Number(next.max_tokens);
    if (!Number.isFinite(n) || n < 64 || n > 4096) throw Object.assign(new Error('أقصى عدد رموز بين 64 و4096'), { status: 400 });
    next.max_tokens = Math.round(n);
  }
  if (next.provider && !['auto', 'rules', ...PROVIDERS.map((p) => p.id)].includes(next.provider)) {
    throw Object.assign(new Error('مزوّد غير معروف'), { status: 400 });
  }
  if (next.system_prompt && String(next.system_prompt).length > 2000) throw Object.assign(new Error('التعليمات أطول من 2000 حرف'), { status: 400 });
  all.assistant = next;
  all.updated_at = nowIso();
  db.settings.replaceAll(all);
  audit(actor, 'assistant_settings_update', 'settings', 'assistant', { details: patch });
  return next;
}

/** حالة المزوّدين بصراحة: ready + سبب */
function status() {
  const s = settings();
  const providers = PROVIDERS.map((p) => {
    const key = envVal(p);
    const ready = !!key;
    return {
      id: p.id, name: p.name, kind: p.kind, ready,
      env: p.env, alt_env: p.altEnv || [], docs: p.docs,
      model: modelFor(p),
      base_url: p.id === 'openai' || p.id === 'ollama' ? baseFor(p) : null,
      note: ready ? `مفعّل عبر ${p.env}` : `غير مهيّأ: أضف ${p.env} في بيئة الخادم`
    };
  });
  const forced = s.provider && s.provider !== 'auto' ? s.provider : null;
  let active = null;
  if (forced === 'rules') active = 'rules';
  else if (forced && PROVIDER_BY_ID[forced] && envVal(PROVIDER_BY_ID[forced])) active = forced;
  else {
    const detected = providers.find((p) => p.ready);
    active = detected ? detected.id : 'rules';
  }
  const aiReady = active !== 'rules';
  return {
    engine: aiReady ? 'model' : 'rules',
    active,
    active_name: aiReady ? PROVIDER_BY_ID[active].name : 'محرّك قواعد مبني على بياناتك',
    ai_ready: aiReady,
    providers,
    enabled: s.enabled !== false,
    settings: {
      provider: s.provider || 'auto',
      daily_limit: s.daily_limit ?? 40,
      temperature: s.temperature ?? 0.3,
      max_tokens: s.max_tokens ?? 500,
      system_prompt: s.system_prompt || ''
    },
    reason: aiReady
      ? null
      : 'لا يوجد مفتاح LLM في بيئة الخادم — الإجابات تأتي من محرّك القواعد المبني على بياناتك الحقيقية، وليست من نموذج ذكاء اصطناعي.',
    honest_note: 'المساعد لا يخترع بيانات: كل رقم يخصّ الشحنات أو الرصيد أو الأسعار يُقرأ من قاعدة البيانات.'
  };
}

// ============================ السياق المُسنَد ============================
function userShipments(user, limit = 5) {
  return db.shipments
    .find((s) => s.user_id === user.id || s.created_by === user.id || String(s.receiverPhone || '') === String(user.phone || '\u0000'))
    .slice(-limit)
    .reverse();
}

function context(user) {
  const ships = userShipments(user, 8);
  const bal = wallet.balance(user.id);
  const auctionsOpen = db.auctions.find((a) => a.status === 'live' || a.status === 'active').length;
  const myBids = db.bids.find((b) => b.user_id === user.id).length;
  return {
    user: { id: user.id, name: user.fullName, role: user.role, role_label: ROLE_LABEL[user.role] || user.role },
    wallet: { available: bal.available_cents / 100, held: bal.held_cents / 100, currency: bal.currency || 'USD' },
    shipments: ships.map((s) => ({
      tracking: s.trackingNumber, status: s.status, status_label: STATUS_LABEL[s.status] || s.status,
      from: [s.source, s.sourceCity].filter(Boolean).join(' — '),
      dest: s.destPort || s.destination || null,
      location: s.currentLocation || null,
      progress: s.progress ?? null,
      remaining: s.remaining ?? null,
      cost: s.shippingCost ?? null,
      demo: !!s.demo
    })),
    shipments_total: db.shipments.find((s) => s.user_id === user.id || s.created_by === user.id).length,
    auctions_open: auctionsOpen,
    my_bids: myBids,
    faq: db.assistant_faq.find((f) => f.active !== false).length
  };
}

// ============================ قاعدة الأسئلة الشائعة ============================
function norm(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[إأآا]/g, 'ا').replace(/[ىي]/g, 'ي').replace(/ة/g, 'ه')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
}
const STOP = new Set(['من', 'في', 'على', 'عن', 'ما', 'هل', 'هو', 'هي', 'الى', 'إلى', 'او', 'أو', 'و', 'the', 'a', 'is', 'what']);

function tokens(s) {
  return norm(s).split(' ').filter((t) => t.length > 2 && !STOP.has(t));
}

function searchFaq(question, limit = 3) {
  const q = tokens(question);
  if (!q.length) return [];
  const scored = [];
  for (const f of db.assistant_faq.find((x) => x.active !== false)) {
    const kws = tokens([f.question, f.answer, (f.keywords || []).join(' ')].join(' '));
    const set = new Set(kws);
    let score = 0; let hits = 0;
    for (const t of q) {
      if (set.has(t)) { score += 2; hits++; }
      else if (kws.some((k) => k.length > 3 && (k.startsWith(t) || t.startsWith(k)))) { score += 1; hits++; }
    }
    if (score > 0) scored.push({ score, hits, item: f });
  }
  scored.sort((a, b) => b.score - a.score || b.hits - a.hits || String(a.item.question).localeCompare(String(b.item.question)));
  return scored.slice(0, limit);
}

function seedFaq() {
  if (db.assistant_faq.all().length) return 0;
  const rows = [
    { question: 'كيف أتتبع شحنتي؟', answer: 'أرسل لي رقم التتبّع (مثال: HDTA6351661) أو افتح صفحة «تتبع الشحنة». التتبّع يعرض الحالة والموقع الحالي ونسبة التقدّم، ويمكن للموظف إضافة تحديثات من لوحة الإدارة ← الشحن والتتبّع.', keywords: ['تتبع', 'شحنة', 'رقم', 'تتبع الشحنة', 'وين'] },
    { question: 'كيف تُحسب تكلفة الشحن؟', answer: 'تُحسب آليًا على الخادم من قواعد التسعير: رسم ثابت + سعر الكيلو × الوزن + سعر المتر المكعّب × الحجم، ثم تُطبَّق نسب الزيادة أو الخصم والحد الأدنى للقيمة. أرسل لي الوزن ونوع الخدمة (جوي/بحري/بري) لأعطيك اقتباسًا فوريًا من نفس المحرّك.', keywords: ['سعر', 'تكلفة', 'كم', 'تسعير', 'حاسبة', 'الشحن'] },
    { question: 'ما الفرق بين الشحن الجوي والبحري؟', answer: 'الجوي أسرع وأغلى (مناسب للشحنات الصغيرة والعاجلة)، والبحري أرخص وأبطأ (مناسب للحاويات والأحجام الكبيرة). القاعدة تُختار تلقائيًا حسب نوع الخدمة والوزن في محرّك التسعير.', keywords: ['جوي', 'بحري', 'بري', 'فرق', 'حاوية'] },
    { question: 'كيف أشحن سيارة من المزاد؟', answer: 'اختر المزاد، ثم أنشئ طلب شحن بري أو بحري حسب الموقع. النظام يدعم مزادات السيارات ويعرض الشحنات المرتبطة بها في صفحة المزادات، مع بوابة دفع محفوظة في المحفظة (الضمان) للمزايدة.', keywords: ['سيارة', 'مزاد', 'شحن سيارة', 'مركبة'] },
    { question: 'كيف تعمل المحفظة الإلكترونية؟', answer: 'المحفظة تعمل بالسنت داخليًا: إيداع، حجز مؤقت للمزايدة (ضمان)، ثم تسوية. يمكنك رؤية الرصيد المتاح والمحجوز وكشف الحركات من صفحة المحفظة. المدفوعات الحقيقية تحتاج ربط بوابة دفع (غير موصولة بعد).', keywords: ['محفظة', 'رصيد', 'ضمان', 'ايداع', 'دفع'] },
    { question: 'ما المستندات المطلوبة للتخليص الجمركي؟', answer: 'عادةً: الفاتورة التجارية، بوليصة الشحن، قائمة التعبئة، وشهادة المنشأ، وقد تُطلب تصاريح إضافية حسب نوع البضاعة (أدوية، أجهزة طبية، مركبات). موظف الشحن يرفع المستندات مع الشحنة.', keywords: ['مستند', 'جمارك', 'تخليص', 'فاتورة', 'بوليصة', 'شهادة'] },
    { question: 'ما هي أوقات العمل وكيف أتواصل مع الدعم؟', answer: 'فريق الدعم يرد في صفحة «الدعم الفني»، ويمكنك إرسال تذكرة من هناك. لأي حالة عاجلة اكتب لي «موظف» وسأحوّلك لمسار الدعم البشري.', keywords: ['دعم', 'تواصل', 'وقت', 'عمل', 'شكوى', 'موظف'] },
    { question: 'هل بياناتي آمنة؟', answer: 'نعم: كلمات المرور مُشفّرة بـ scrypt، والجلسات برموز موقّعة يمكن إبطالها، والصلاحيات مفروضة على الخادم. المساعد لا يرسل رقمك السري ولا كلمة المرور إلى مزوّد الذكاء الاصطناعي؛ يرسل فقط ملخصًا لازمًا للإجابة.', keywords: ['امان', 'خصوصية', 'بيانات', 'سري'] }
  ];
  for (const r of rows) db.assistant_faq.insert({ id: crypto.randomUUID(), active: true, created_at: nowIso(), ...r });
  return rows.length;
}

// ============================ استخراج النيّة (محرّك القواعد) ============================
function extractTracking(msg) {
  const up = String(msg).toUpperCase();
  // 1) الشكل الشائع: حروف ثم أرقام (HDTA6351661 / DHL1234567890)
  let m = up.match(/\b[A-Z]{2,4}\d{5,}[A-Z]{0,2}\b/);
  if (m) return m[0];
  // 2) مركّب: حروف وأرقام متبادلة بطول 8+ ويحتوي رقمًا (P5T1234567)
  m = up.match(/\b(?=[A-Z0-9]{8,}\b)(?=[A-Z0-9]*\d)[A-Z0-9]{2,}[A-Z0-9]{6,}\b/);
  return m ? m[0] : null;
}
function extractWeight(msg) {
  const m = String(msg).replace(/,/g, '').match(/(\d+(?:\.\d+)?)\s*(?:كجم|كيلو|كغ|kg|كيلوجرام)/i);
  if (m) return Number(m[1]);
  const m2 = String(msg).replace(/,/g, '').match(/(?:وزن|زنة)\D{0,6}(\d+(?:\.\d+)?)/i);
  return m2 ? Number(m2[1]) : null;
}
function extractService(msg) {
  const s = norm(msg);
  if (/جوي|طيران|air/.test(s)) return 'air';
  if (/بحري|حاويه|باخره|sea|حاويات/.test(s)) return 'sea';
  if (/بري|شاحنه|truck|land/.test(s)) return 'land';
  return null;
}
const CBM_RE = /(\d+(?:\.\d+)?)\s*(?:م3|متر مكعب|m3|cbm)/i;

function fmtMoney(v, cur = 'USD') { return `${(Math.round(Number(v) * 100) / 100).toLocaleString('en-US')}$`; }

/** إجابة محرّك القواعد — كل رقم فيها مقروء من قاعدة البيانات */
function rulesReply(message, user, ctx) {
  const msg = String(message || '');
  const s = norm(msg);
  const out = (text, sources = [], intent = 'general') => ({ text, sources, intent });

  if (db.assistant_faq.all().length === 0) seedFaq();

  // 1) تحية
  if (/^(السلام|مرحبا|مرحبتين|اهلا|هلا|هاي|صباح|مساء|hi|hello)/.test(s) && s.length < 40) {
    return out(`مرحبًا ${ctx.user.name} 👋\nأنا المساعد الذكي للمسار العالمي اللوجستي. تكلّم معي طبيعيًا، مثل:\n• «وين شحنتي HDTA6351661؟»\n• «كم تكلفة 20 كجم جوي؟»\n• «كم رصيدي في المحفظة؟»`, [], 'greeting');
  }

  // 2) طلب موظف بشري
  if (/موظف|بشري|انسان|تحدث مع|شكوى|تذكره دعم/.test(s)) {
    return out('تمام — يمكنك فتح «الدعم الفني» من القائمة وإرسال تذكرة، وسيصل تنبيه لفريق الدعم داخل النظام.\n' +
      'وللحالات العاجلة: اذكر رقم الشحنة في التذكرة ليراجعها موظف الشحن فورًا.', [{ type: 'route', ref: 'support' }], 'handoff');
  }

  // 3) تتبّع شحنة — بيانات حقيقية
  const tn = extractTracking(msg);
  if (tn || /تتبع|شحنتي|وين شحنت|حاله الشحنه|وصلت|تاخرت|متى توصل/.test(s)) {
    if (tn) {
      const sh = db.shipments.findOne((x) => String(x.trackingNumber || '').toUpperCase() === tn);
      if (!sh) {
        return out(`لم أجد شحنة برقم التتبّع «${tn}» في النظام.\nتأكّد من الرقم (حروف وأرقام)، أو أرسل لي اسم المستلم. عدد شحناتك المسجّلة: ${ctx.shipments_total}.`,
          [], 'tracking_not_found');
      }
      const mine = sh.user_id === user.id || sh.created_by === user.id;
      if (!mine && !['support_staff', 'shipping_staff', 'branch_manager', 'warehouse_manager', 'super_admin'].includes(user.role)) {
        return out(`الشحنة «${tn}» مسجّلة في النظام لكنها ليست ضمن حسابك، ولا أستطيع عرض بيانات شحنة عميل آخر.\nيمكنك سؤالي عن شحناتك: ${ctx.shipments_total} شحنة.`,
          [{ type: 'shipment', ref: tn }], 'tracking_forbidden');
      }
      const lines = [
        `📦 الشحنة ${sh.trackingNumber}`,
        `• الحالة: ${STATUS_LABEL[sh.status] || sh.status}${sh.progress !== undefined && sh.progress !== null ? ` (${sh.progress}%)` : ''}`,
        sh.currentLocation ? `• الموقع الحالي: ${sh.currentLocation}` : null,
        (sh.source || sh.destPort) ? `• المسار: ${[sh.source, sh.sourceCity].filter(Boolean).join(' — ') || '؟'} ← ${sh.destPort || '؟'}` : null,
        sh.remaining ? `• المتبقي على الشحنة: ${fmtMoney(sh.remaining)}` : null,
        sh.goodsType ? `• نوع البضاعة: ${sh.goodsType}` : null,
        sh.demo ? '• (شحنة تجريبية من بيانات النظام السابق)' : null
      ].filter(Boolean);
      return out(lines.join('\n'), [{ type: 'shipment', ref: sh.trackingNumber }], 'tracking');
    }
    if (!ctx.shipments.length) {
      return out('لا توجد شحنات مسجّلة على حسابك حتى الآن.\nأضف شحنة من صفحة «إضافة شحنة»، أو أرسل رقم التتبّع إن كان لديك.', [], 'tracking_empty');
    }
    const list = ctx.shipments.slice(0, 5).map((x) => `• ${x.tracking} — ${x.status_label}${x.location ? ` — ${x.location}` : ''}`);
    return out(`شحناتك الأخيرة (${ctx.shipments_total} إجمالًا):\n${list.join('\n')}\n\nأرسل رقم التتبّع لتفاصيل كاملة.`,
      ctx.shipments.slice(0, 5).map((x) => ({ type: 'shipment', ref: x.tracking })), 'tracking_list');
  }

  // 4) تسعير — من محرّك التسعير الحقيقي
  const weight = extractWeight(msg);
  const service = extractService(msg);
  const cbm = (msg.match(CBM_RE) || [])[1];
  if (weight || cbm || /سعر|تسعير|تكلفه|اقتباس|كم يكلف|حاسبه/.test(s)) {
    if (!weight && !cbm) {
      return out('أعطني الوزن (كجم) ونوع الخدمة لأحسب لك السعر فورًا من محرّك التسعير، أمثلة:\n• «20 كجم جوي»\n• «حاوية بحري 5 م3»\n• «بري 200 كجم»', [], 'pricing_need_input');
    }
    const q = pricing.quote({
      service: service || (cbm && !weight ? 'sea' : undefined),
      weight_kg: weight || 0,
      volume_cbm: cbm ? Number(cbm) : 0,
      client_role: user.role
    });
    if (!q.matched) {
      return out(`لا توجد قاعدة تسعير مطابقة لهذه الحالة (${q.reason || 'لا قاعدة'}).\nجرّب تحديد نوع الخدمة (جوي/بحري/بري) أو عدّل القواعد من لوحة الإدارة ← التسعير.`, [], 'pricing_no_rule');
    }
    const b = q.breakdown;
    const parts = [`💰 اقتباس من محرّك التسعير — القاعدة: «${q.rule.name}»`];
    parts.push(`• رسم ثابت: ${fmtMoney(b.base_fee)}`);
    if (b.weight_kg) parts.push(`• الوزن: ${b.weight_kg} كجم × ${fmtMoney(b.per_kg)} = ${fmtMoney(b.weight_cost)}`);
    if (b.volume_cbm) parts.push(`• الحجم: ${b.volume_cbm} م³ × ${fmtMoney(b.per_cbm)} = ${fmtMoney(b.volume_cost)}`);
    parts.push(`• المجموع قبل التعديلات: ${fmtMoney(b.subtotal)}`);
    if (b.surcharge) parts.push(`• زيادة ${b.surcharge_pct}%: +${fmtMoney(b.surcharge)}`);
    if (b.discount) parts.push(`• خصم ${b.discount_pct}%: −${fmtMoney(b.discount)}`);
    if (b.min_applied) parts.push(`• طُبِّق الحد الأدنى للقيمة (${fmtMoney(b.min_charge)})`);
    parts.push(`\nالإجمالي: ${fmtMoney(q.total)}`);
    parts.push('(تقدير شحن فقط — لا يشمل الرسوم الجمركية أو الأرضيات.)');
    return out(parts.join('\n'), [{ type: 'pricing_rule', ref: q.rule.id }], 'pricing');
  }

  // 5) المحفظة
  if (/محفظه|رصيد|فلوس|ضمان|ايداع|دفع/.test(s)) {
    return out(`💳 محفظتك:\n• المتاح: ${fmtMoney(ctx.wallet.available, ctx.wallet.currency)}\n• المحجوز (ضمان): ${fmtMoney(ctx.wallet.held, ctx.wallet.currency)}\n\nكشف الحركات من صفحة «المحفظة». المدفوعات الحقيقية تحتاج ربط بوابة دفع، وهي غير موصولة بعد.`,
      [{ type: 'wallet', ref: user.id }], 'wallet');
  }

  // 6) المزادات
  if (/مزاد|مزايده|سياره|مركبه|bid/.test(s)) {
    return out(`🚗 المزادات: هناك ${ctx.auctions_open} مزادًا مفتوحًا الآن، ومشاركاتك ${ctx.my_bids} مزايدة.\nالمزايدة تحتاج رصيدًا متاحًا في المحفظة لتُحجز قيمة الضمان. تفاصيل المزادات من صفحة «المزادات».`,
      [{ type: 'auctions', ref: 'open' }], 'auctions');
  }

  // 7) قاعدة الأسئلة الشائعة
  const faq = searchFaq(msg);
  const confident = faq.length && faq[0].score >= 5 && (faq[0].hits || 0) >= 2;
  if (confident) {
    const best = faq[0].item;
    const more = faq.slice(1).map((f) => `• ${f.item.question}`).join('\n');
    return out(`${best.answer}${more ? `\n\nقد يفيدك أيضًا:\n${more}` : ''}`,
      [{ type: 'faq', ref: best.id }], 'faq');
  }

  // 8) صدق عند عدم المعرفة
  if (faq.length && faq[0].score >= 3) {
    return out(`${faq[0].item.answer}\n\n(إن لم يكن هذا جوابك، وضّح سؤالك أو اكتب «موظف» لتحويلك للدعم.)`,
      [{ type: 'faq', ref: faq[0].item.id }], 'faq_partial');
  }
  return out(`لا أستطيع الإجابة عن هذا السؤال بثقة، ولن أخترع معلومة.\nيمكنني الآن:\n• تتبّع شحنة برقمها\n• حساب تكلفة شحن من محرّك التسعير\n• عرض رصيد المحفظة والمزادات\n• الإجابة عن الأسئلة الشائعة التي يعتمدها فريقك\n\nاكتب «موظف» للتحويل إلى الدعم البشري.`,
    [], 'unknown');
}

// ============================ استدعاء النموذج (HTTP حقيقي) ============================
function systemPrompt(user, ctx, extra) {
  const facts = [
    `اسم المستخدم: ${ctx.user.name} (الدور: ${ctx.user.role_label})`,
    `عدد شحناته: ${ctx.shipments_total}`,
    ctx.shipments.length
      ? 'شحناته الأخيرة:\n' + ctx.shipments.map((s) => `- ${s.tracking}: ${s.status_label}${s.location ? `، الموقع ${s.location}` : ''}${s.progress !== null ? `، التقدّم ${s.progress}%` : ''}${s.remaining !== null ? `، المتبقي ${s.remaining}$` : ''}${s.demo ? ' (تجريبية)' : ''}`).join('\n')
      : 'لا شحنات مسجّلة على حسابه.',
    `رصيد المحفظة: متاح ${ctx.wallet.available}${ctx.wallet.currency}، محجوز ${ctx.wallet.held}${ctx.wallet.currency}`,
    `مزادات مفتوحة: ${ctx.auctions_open} — مزايداته: ${ctx.my_bids}`,
    'قواعد التسعير متاحة عبر محرّك التسعير في النظام عند ذكر الوزن/الخدمة.'
  ].join('\n');

  return [
    'أنت «المساعد الذكي» لنظام المسار العالمي اللوجستي (شركة شحن يمنية: عدن، صنعاء، إب).',
    'أجب بالعربية الفصيحة المبسّطة، بإيجاز (٤ أسطر أو أقل إلا عند الطلب)، وبنبرة مهنية ودودة.',
    'قواعد صارمة:',
    '1) استخدم فقط «البيانات المتاحة» أدناه أو معلومات عامة موثوقة عن الشحن والتخليص.',
    '2) لا تخترع أرقام شحنات أو أرصدة أو أسعارًا أو مواعيد. إن لم تتوفر المعلومة قل ذلك بصراحة واقترح البديل.',
    '3) لا تطلب كلمة المرور أو الرقم السري أو أي بيانات دفع، ولا تعرض بيانات عميل آخر.',
    '4) الأسعار تُحسب حصريًا عبر محرّك التسعير في النظام؛ إن احتجت سعرًا اطلب الوزن ونوع الخدمة.',
    '5) إن طلب المستخدم موظفًا بشريًا أو كانت المشكلة شكوى، وجّهه إلى «الدعم الفني».',
    '6) لا تدّعِ إجراءً نفّذته (لم تُنشئ شحنة ولا حوّلت مالًا). أنت تُجيب وتُرشد فقط.',
    extra ? `تعليمات إضافية من إدارة الشركة: ${extra}` : '',
    '',
    '=== البيانات المتاحة (حقيقية من قاعدة البيانات) ===',
    facts
  ].filter(Boolean).join('\n');
}

async function httpJson(url, options, timeoutMs = 25000) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: ctl.signal });
    const text = await res.text();
    let data = null;
    try { data = text ? JSON.parse(text) : {}; } catch (_) { data = { raw: text }; }
    if (!res.ok) {
      const msg = (data && (data.error?.message || data.error || data.message)) || `HTTP ${res.status}`;
      throw Object.assign(new Error(String(msg).slice(0, 300)), { status: 502, http: res.status, payload: data });
    }
    return data;
  } finally { clearTimeout(t); }
}

/** استدعاء مزوّد حقيقي — يُرجع {text, usage, model} */
async function callProvider(providerId, { system, history, message, temperature, maxTokens }) {
  const p = PROVIDER_BY_ID[providerId];
  if (!p) throw Object.assign(new Error('مزوّد غير معروف'), { status: 400 });
  const key = envVal(p);
  if (!key) throw Object.assign(new Error(`المزوّد ${p.name} غير مهيّأ (${p.env})`), { status: 503 });
  const model = modelFor(p);

  if (p.kind === 'openai') {
    const data = await httpJson(`${baseFor(p)}/chat/completions`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model, temperature, max_tokens: maxTokens,
        messages: [{ role: 'system', content: system }, ...history.map((h) => ({ role: h.role === 'assistant' ? 'assistant' : 'user', content: h.text })), { role: 'user', content: message }]
      })
    });
    const text = data.choices?.[0]?.message?.content;
    if (!text) throw Object.assign(new Error('استجابة فارغة من المزوّد'), { status: 502 });
    return { text, model: data.model || model, usage: { input: data.usage?.prompt_tokens ?? null, output: data.usage?.completion_tokens ?? null }, raw_provider: p.id };
  }

  if (p.kind === 'anthropic') {
    const data = await httpJson(`${baseFor(p)}/messages`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model, max_tokens: maxTokens, temperature, system,
        messages: [...history.map((h) => ({ role: h.role === 'assistant' ? 'assistant' : 'user', content: h.text })), { role: 'user', content: message }]
      })
    });
    const text = (data.content || []).filter((c) => c.type === 'text').map((c) => c.text).join('\n').trim();
    if (!text) throw Object.assign(new Error('استجابة فارغة من المزوّد'), { status: 502 });
    return { text, model: data.model || model, usage: { input: data.usage?.input_tokens ?? null, output: data.usage?.output_tokens ?? null }, raw_provider: p.id };
  }

  if (p.kind === 'gemini') {
    const contents = [
      ...history.map((h) => ({ role: h.role === 'assistant' ? 'model' : 'user', parts: [{ text: h.text }] })),
      { role: 'user', parts: [{ text: message }] }
    ];
    const data = await httpJson(`${baseFor(p)}/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(key)}`, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents, generationConfig: { temperature, maxOutputTokens: maxTokens } })
    });
    const text = (data.candidates?.[0]?.content?.parts || []).map((x) => x.text).filter(Boolean).join('\n').trim();
    if (!text) throw Object.assign(new Error('استجابة فارغة من المزوّد'), { status: 502 });
    return { text, model, usage: { input: data.usageMetadata?.promptTokenCount ?? null, output: data.usageMetadata?.candidatesTokenCount ?? null }, raw_provider: p.id };
  }

  if (p.kind === 'ollama') {
    const data = await httpJson(`${baseFor(p)}/api/chat`, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        model, stream: false, options: { temperature, num_predict: maxTokens },
        messages: [{ role: 'system', content: system }, ...history.map((h) => ({ role: h.role === 'assistant' ? 'assistant' : 'user', content: h.text })), { role: 'user', content: message }]
      })
    });
    const text = data.message?.content;
    if (!text) throw Object.assign(new Error('استجابة فارغة من المزوّد'), { status: 502 });
    return { text, model: data.model || model, usage: { input: data.prompt_eval_count ?? null, output: data.eval_count ?? null }, raw_provider: p.id };
  }

  throw Object.assign(new Error('نوع مزوّد غير مدعوم'), { status: 400 });
}

// ============================ المحادثات ============================
function getOrCreateConversation(user, conversationId, title) {
  if (conversationId) {
    const c = db.assistant_conversations.byId(conversationId);
    if (!c) throw Object.assign(new Error('المحادثة غير موجودة'), { status: 404 });
    if (c.user_id !== user.id) throw Object.assign(new Error('لا تملك هذه المحادثة'), { status: 403 });
    return c;
  }
  return db.assistant_conversations.insert({
    id: crypto.randomUUID(), user_id: user.id,
    title: String(title || 'محادثة جديدة').slice(0, 80),
    engine: null, provider: null, messages: 0,
    created_at: nowIso(), updated_at: nowIso()
  });
}

function historyFor(conversationId, limit = 8) {
  return db.assistant_messages
    .find((m) => m.conversation_id === conversationId)
    .slice(-limit)
    .map((m) => ({ role: m.role, text: m.text }));
}

function todayKey() { return nowIso().slice(0, 10); }

function usageToday(userId) {
  const day = todayKey();
  return db.assistant_messages.find((m) => m.user_id === userId && m.role === 'user' && String(m.created_at).slice(0, 10) === day).length;
}

/**
 * الدالة الرئيسية: chat
 * @returns {Promise<{reply, engine, provider, model, grounded, sources, conversation_id, usage, degraded, reason}>}
 */
async function chat({ user, message, conversation_id = null, channel = 'web' }) {
  const st = status();
  const s = settings();
  const text = String(message || '').trim();
  if (!text) throw Object.assign(new Error('الرسالة فارغة'), { status: 400 });
  if (text.length > 2000) throw Object.assign(new Error('الرسالة أطول من 2000 حرف'), { status: 400 });
  if (st.enabled === false) throw Object.assign(new Error('المساعد الذكي معطّل من الإدارة'), { status: 503 });

  // الحصة اليومية
  const limit = Number(s.daily_limit ?? 40);
  const used = usageToday(user.id);
  if (used >= limit) {
    throw Object.assign(new Error(`بلغت الحد اليومي (${limit} رسالة). جرّب غدًا أو تواصل مع الدعم.`), { status: 429, quota: { limit, used } });
  }

  const conv = getOrCreateConversation(user, conversation_id, text.slice(0, 60));
  const ctx = context(user);
  const history = historyFor(conv.id);
  const t0 = Date.now();

  let reply = null; let engine = 'rules'; let provider = 'rules'; let model = null;
  let usage = { input: null, output: null }; let degraded = false; let reason = null; let sources = [];

  if (st.ai_ready) {
    try {
      const r = await callProvider(st.active, {
        system: systemPrompt(user, ctx, s.system_prompt),
        history, message: text,
        temperature: s.temperature ?? 0.3, maxTokens: s.max_tokens ?? 500
      });
      reply = r.text.trim();
      engine = 'model'; provider = r.raw_provider; model = r.model; usage = r.usage;
      sources = [{ type: 'user_context', ref: user.id }];
    } catch (e) {
      degraded = true;
      reason = `تعذّر الوصول إلى المزوّد (${st.active}): ${e.message} — تمت الإجابة بمحرّك القواعد المحلي.`;
      console.error('[assistant] فشل المزوّد:', e.message);
    }
  } else {
    reason = st.reason;
  }

  let intent = null;
  if (!reply) {
    const r = rulesReply(text, user, ctx);
    reply = r.text; intent = r.intent; sources = r.sources.concat([{ type: 'user_context', ref: user.id }]);
    engine = 'rules'; provider = 'rules'; model = 'masar-rules-v1';
  }
  // إثراء: إن لم يذكر النموذج رقم الشحنة، أضف مصادر البيانات المستخدمة
  if (engine === 'model' && ctx.shipments.length) sources.push({ type: 'shipments_context', ref: String(ctx.shipments.length) });

  const latency = Date.now() - t0;
  db.assistant_messages.insert({
    id: crypto.randomUUID(), conversation_id: conv.id, user_id: user.id, channel,
    role: 'user', text, created_at: nowIso()
  });
  const assistantMsg = db.assistant_messages.insert({
    id: crypto.randomUUID(), conversation_id: conv.id, user_id: user.id, channel,
    role: 'assistant', text: reply, engine, provider, model, intent,
    grounded: sources.length > 0, sources, latency_ms: latency,
    tokens_in: usage.input, tokens_out: usage.output,
    degraded, reason, feedback: null, created_at: nowIso()
  });
  db.assistant_conversations.update(conv.id, {
    engine, provider, updated_at: nowIso(), messages: (conv.messages || 0) + 2
  });

  return {
    reply, engine, provider, model,
    message_id: assistantMsg.id,
    grounded: sources.length > 0, sources,
    intent, conversation_id: conv.id,
    latency_ms: latency, usage,
    degraded, reason,
    ai_ready: st.ai_ready,
    quota: { limit, used: used + 1, remaining: Math.max(0, limit - used - 1) }
  };
}

function feedback(messageId, value, user) {
  const m = db.assistant_messages.byId(messageId);
  if (!m) throw Object.assign(new Error('الرسالة غير موجودة'), { status: 404 });
  if (m.user_id !== user.id) throw Object.assign(new Error('لا تملك هذه الرسالة'), { status: 403 });
  if (!['up', 'down', null].includes(value)) throw Object.assign(new Error('قيمة تقييم غير صالحة'), { status: 400 });
  db.assistant_messages.update(messageId, { feedback: value });
  return { ok: true, id: messageId, feedback: value };
}

function myConversations(user, limit = 20) {
  return db.assistant_conversations
    .find((c) => c.user_id === user.id)
    .sort((a, b) => String(b.updated_at).localeCompare(String(a.updated_at)))
    .slice(0, limit)
    .map((c) => {
      const msgs = db.assistant_messages.find((m) => m.conversation_id === c.id);
      const last = msgs[msgs.length - 1];
      return { id: c.id, title: c.title, engine: c.engine, provider: c.provider, messages: msgs.length, updated_at: c.updated_at, preview: last ? String(last.text).slice(0, 120) : '' };
    });
}

function conversation(user, id, { isAdmin = false } = {}) {
  const c = db.assistant_conversations.byId(id);
  if (!c) throw Object.assign(new Error('المحادثة غير موجودة'), { status: 404 });
  if (c.user_id !== user.id && !isAdmin) throw Object.assign(new Error('لا تملك هذه المحادثة'), { status: 403 });
  return {
    id: c.id, user_id: c.user_id, title: c.title, engine: c.engine,
    messages: db.assistant_messages.find((m) => m.conversation_id === c.id).map((m) => ({
      id: m.id, role: m.role, text: m.text, engine: m.engine || null, model: m.model || null,
      intent: m.intent || null, sources: m.sources || [], latency_ms: m.latency_ms ?? null,
      feedback: m.feedback ?? null, created_at: m.created_at
    }))
  };
}

// ============================ الإحصاءات (إدارة) ============================
function stats({ days = 30 } = {}) {
  const since = Date.now() - days * 86400000;
  const msgs = db.assistant_messages.find((m) => m.role === 'assistant' && new Date(m.created_at).getTime() >= since);
  const users = db.assistant_messages.find((m) => m.role === 'user' && new Date(m.created_at).getTime() >= since);
  const byEngine = msgs.reduce((a, m) => { a[m.engine || 'rules'] = (a[m.engine || 'rules'] || 0) + 1; return a; }, {});
  const byIntent = msgs.reduce((a, m) => { if (m.intent) a[m.intent] = (a[m.intent] || 0) + 1; return a; }, {});
  const lat = msgs.map((m) => m.latency_ms).filter((x) => typeof x === 'number');
  const fb = msgs.filter((m) => m.feedback);
  const topQ = {};
  for (const m of users) {
    const k = String(m.text).trim().slice(0, 60);
    topQ[k] = (topQ[k] || 0) + 1;
  }
  const topQuestions = Object.entries(topQ).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([q, n]) => ({ q, n }));
  return {
    days,
    messages: msgs.length,
    questions: users.length,
    conversations: new Set(msgs.map((m) => m.conversation_id)).size,
    users: new Set(msgs.map((m) => m.user_id)).size,
    today: usageTodayAll(),
    by_engine: byEngine,
    by_intent: byIntent,
    degraded: msgs.filter((m) => m.degraded).length,
    grounded_rate: msgs.length ? Math.round((msgs.filter((m) => m.grounded).length / msgs.length) * 100) : 0,
    avg_latency_ms: lat.length ? Math.round(lat.reduce((a, b) => a + b, 0) / lat.length) : null,
    feedback: { up: fb.filter((m) => m.feedback === 'up').length, down: fb.filter((m) => m.feedback === 'down').length },
    tokens: {
      input: msgs.reduce((a, m) => a + (m.tokens_in || 0), 0),
      output: msgs.reduce((a, m) => a + (m.tokens_out || 0), 0)
    },
    top_questions: topQuestions,
    faq_count: db.assistant_faq.find((f) => f.active !== false).length
  };
}

function usageTodayAll() {
  const day = todayKey();
  return db.assistant_messages.find((m) => m.role === 'user' && String(m.created_at).slice(0, 10) === day).length;
}

function adminConversations({ page = 1, limit = 20, engine = null, q = null } = {}) {
  let rows = db.assistant_conversations.all().slice();
  if (engine) rows = rows.filter((c) => c.engine === engine);
  if (q) {
    const s = String(q).toLowerCase();
    rows = rows.filter((c) => String(c.title).toLowerCase().includes(s) || String(c.user_id).includes(s));
  }
  rows.sort((a, b) => String(b.updated_at).localeCompare(String(a.updated_at)));
  const total = rows.length;
  const from = (Math.max(1, page) - 1) * limit;
  return {
    total, page, limit,
    items: rows.slice(from, from + limit).map((c) => {
      const u = db.users.byId(c.user_id);
      const msgs = db.assistant_messages.find((m) => m.conversation_id === c.id);
      return {
        id: c.id, title: c.title, user: u ? u.fullName : 'مستخدم محذوف', user_role: u ? u.role : null,
        engine: c.engine, provider: c.provider, messages: msgs.length, updated_at: c.updated_at
      };
    })
  };
}

// ============================ الأسئلة الشائعة (إدارة) ============================
function listFaq({ q = null, active = null } = {}) {
  let rows = db.assistant_faq.all().slice();
  if (active !== null && active !== undefined) rows = rows.filter((f) => (f.active !== false) === (active === true || active === 'true'));
  if (q) {
    const t = tokens(q);
    rows = rows.filter((f) => {
      const hay = tokens([f.question, f.answer, (f.keywords || []).join(' ')].join(' '));
      return t.every((x) => hay.some((h) => h.includes(x) || x.includes(h)));
    });
  }
  return rows.sort((a, b) => String(a.question).localeCompare(String(b.question)));
}

function createFaq(payload, actor) {
  const question = String(payload.question || '').trim();
  const answer = String(payload.answer || '').trim();
  if (question.length < 5) throw Object.assign(new Error('السؤال قصير جدًا'), { status: 400 });
  if (answer.length < 10) throw Object.assign(new Error('الإجابة قصيرة جدًا'), { status: 400 });
  if (answer.length > 2000) throw Object.assign(new Error('الإجابة أطول من 2000 حرف'), { status: 400 });
  const kw = Array.isArray(payload.keywords) ? payload.keywords.map((k) => String(k).trim()).filter(Boolean).slice(0, 12) : [];
  const doc = db.assistant_faq.insert({
    id: crypto.randomUUID(), question, answer, keywords: kw,
    active: payload.active !== false, created_by: actor.id, created_at: nowIso()
  });
  audit(actor, 'assistant_faq_create', 'assistant_faq', doc.id, { details: { question } });
  return doc;
}

function updateFaq(id, payload, actor) {
  const f = db.assistant_faq.byId(id);
  if (!f) throw Object.assign(new Error('السؤال غير موجود'), { status: 404 });
  const patch = {};
  if (payload.question !== undefined) {
    const q = String(payload.question).trim();
    if (q.length < 5) throw Object.assign(new Error('السؤال قصير جدًا'), { status: 400 });
    patch.question = q;
  }
  if (payload.answer !== undefined) {
    const a = String(payload.answer).trim();
    if (a.length < 10) throw Object.assign(new Error('الإجابة قصيرة جدًا'), { status: 400 });
    patch.answer = a.slice(0, 2000);
  }
  if (payload.keywords !== undefined) patch.keywords = (Array.isArray(payload.keywords) ? payload.keywords : []).map((k) => String(k).trim()).filter(Boolean).slice(0, 12);
  if (payload.active !== undefined) patch.active = !!payload.active;
  const out = db.assistant_faq.update(id, patch);
  audit(actor, 'assistant_faq_update', 'assistant_faq', id, { details: patch });
  return out;
}

function removeFaq(id, actor) {
  const f = db.assistant_faq.byId(id);
  if (!f) throw Object.assign(new Error('السؤال غير موجود'), { status: 404 });
  db.assistant_faq.remove(id);
  audit(actor, 'assistant_faq_delete', 'assistant_faq', id, { details: { question: f.question } });
  return { ok: true };
}

module.exports = {
  PROVIDERS, status, settings, saveSettings, context, chat, feedback,
  myConversations, conversation, stats, adminConversations,
  listFaq, createFaq, updateFaq, removeFaq, seedFaq,
  rulesReply, searchFaq, callProvider, usageToday,
  STATUS_LABEL, ROLE_LABEL, SERVICE_LABEL
};

});

// ==================== server/lib/auctions.js ====================
__def("server/lib/auctions.js", function (module, exports, __req, __bundleDir) {
/**
 * auctions.js — محرك المزادات الحقيقي (المرحلة 2)
 * ------------------------------------------------
 * مبادئ التصميم:
 *  1) الوقت من ساعة الخادم فقط — لا تُقبل أي ساعة من العميل.
 *  2) المزايدة عملية ذرّية: التحقق + حجز المبلغ + تحرير المتجاوَز + تحديث المزاد
 *     تحدث في نفس المقطع المتزامن (لا await داخله) فلا يمكن أن تتداخل مزايدتان.
 *  3) لا تُقبل مزايدة أقل من (الأعلى + حد الزيادة)، ولا من البائع، ولا ممن هو الأعلى.
 *  4) الإغلاق مهمة مجدولة في الخادم: تُغلق المزادات المنتهية، تُحدد الفائز،
 *     تُرحّل المبلغ إلى الضمان، وتُطلق الإشعارات.
 *  5) كل حركة مالية تُسجَّل في دفتر القيود، وكل مزايدة تُحفظ بسجلّها.
 */
'use strict';
const crypto = require('crypto');
const { db, audit } = __req("server/lib/store.js");
const wallet = __req("server/lib/wallet.js");

const MIN_INCREMENT = 500;         // 5 دولارات
const DEFAULT_EXTEND_SECONDS = 60; // تمديد مانع للقنص
const MAX_EXTENSIONS = 20;

const toCents = (v) => Math.round(Number(v) * 100);
const toMoney = (c) => +(Number(c || 0) / 100).toFixed(2);
const iso = (ms) => new Date(ms).toISOString();

// ============================ الحالة الفعلية ============================
function effectiveStatus(a, now = Date.now()) {
  const s = new Date(a.starts_at).getTime();
  const e = new Date(a.ends_at).getTime();
  if (a.status === 'cancelled') return 'cancelled';
  if (a.status === 'settled') return 'settled';
  if (now < s) return 'upcoming';
  if (now > e) return a.winner_id ? 'settled' : 'ended';
  return 'active';
}

function maskedName(name) {
  const n = String(name || 'مستخدم');
  if (n.length <= 3) return n + '***';
  return n.slice(0, 3) + '***';
}

// ============================ التحويل للعرض ============================
function publicAuction(a, viewer, opts = {}) {
  const now = opts.now || Date.now();
  const eff = effectiveStatus(a, now);
  const ends = new Date(a.ends_at).getTime();
  const starts = new Date(a.starts_at).getTime();
  const minNext = a.current_bid ? a.current_bid + a.bid_increment : a.start_price;
  const out = {
    id: a.id,
    title: a.title,
    description: a.description,
    category: a.category,
    condition: a.condition || null,
    location: a.location || null,
    demo: !!a.demo,
    status: eff,
    starts_at: a.starts_at,
    ends_at: a.ends_at,
    seconds_left: eff === 'active' ? Math.max(0, Math.round((ends - now) / 1000)) : 0,
    seconds_to_start: eff === 'upcoming' ? Math.max(0, Math.round((starts - now) / 1000)) : 0,
    start_price: toMoney(a.start_price),
    reserve_price: a.reserve_price ? toMoney(a.reserve_price) : null,
    reserve_met: a.reserve_price ? (a.current_bid || 0) >= a.reserve_price : true,
    bid_increment: toMoney(a.bid_increment),
    min_next_bid: toMoney(minNext),
    current_bid: a.current_bid ? toMoney(a.current_bid) : null,
    bid_count: a.bid_count || 0,
    extension_count: a.extension_count || 0,
    winner: a.winner_id ? { id: a.winner_id, name: a.winner_name ? maskedName(a.winner_name) : null, amount: toMoney(a.final_amount) } : null,
    seller_name: maskedName(a.seller_name),
    created_at: a.created_at,
    my_bid: null,
    watching: false
  };
  if (viewer) {
    const mine = db.bids.find((b) => b.auction_id === a.id && b.user_id === viewer.id);
    if (mine.length) {
      const top = mine.reduce((x, y) => (y.amount > x.amount ? y : x));
      out.my_bid = { amount: toMoney(top.amount), status: top.status, at: top.created_at, count: mine.length };
    }
    out.watching = !!db.favorites.findOne((f) => f.user_id === viewer.id && f.item_type === 'auction' && f.item_id === a.id);
  }
  return out;
}

function publicBid(b) {
  return { id: b.id, bidder: maskedName(b.user_name), amount: toMoney(b.amount), status: b.status, at: b.created_at };
}

// ============================ القراءة ============================
function list({ status = 'active', category, q, sort = 'ending', page = 1, limit = 30, viewer }) {
  const now = Date.now();
  let rows = db.auctions.all().slice();
  if (status && status !== 'all') rows = rows.filter((a) => effectiveStatus(a, now) === status);
  if (category) rows = rows.filter((a) => a.category === category);
  if (q) {
    const term = String(q).toLowerCase();
    rows = rows.filter((a) => (a.title + ' ' + (a.description || '') + ' ' + (a.category || '')).toLowerCase().includes(term));
  }
  const order = { active: 0, upcoming: 1, ended: 2, settled: 3, cancelled: 4 };
  rows.sort((a, b) => {
    if (sort === 'price') return (b.current_bid || b.start_price) - (a.current_bid || a.start_price);
    if (sort === 'newest') return b.created_at.localeCompare(a.created_at);
    if (sort === 'bids') return (b.bid_count || 0) - (a.bid_count || 0);
    // ending: النشطة أولًا ثم الأقرب انتهاءً
    const d = (order[effectiveStatus(a, now)] ?? 9) - (order[effectiveStatus(b, now)] ?? 9);
    if (d !== 0) return d;
    return new Date(a.ends_at) - new Date(b.ends_at);
  });
  const total = rows.length;
  const start = (page - 1) * limit;
  return { total, page, limit, items: rows.slice(start, start + limit).map((a) => publicAuction(a, viewer, { now })) };
}

function detail(id, viewer) {
  const a = db.auctions.byId(id);
  if (!a) throw Object.assign(new Error('المزاد غير موجود'), { status: 404 });
  const bids = db.bids.find((b) => b.auction_id === id)
    .sort((x, y) => y.created_at.localeCompare(x.created_at) || y.amount - x.amount)
    .slice(0, 50).map(publicBid);
  const base = publicAuction(a, viewer);
  base.bids = bids;
  base.timeline = {
    created: a.created_at,
    starts: a.starts_at,
    ends: a.ends_at,
    extensions: a.extension_count || 0,
    closed_at: a.closed_at || null
  };
  return base;
}

// ============================ الإنشاء والتعديل ============================
function create(payload, user, { demo = false } = {}) {
  const title = String(payload.title || '').trim();
  if (title.length < 4) throw Object.assign(new Error('عنوان المزاد قصير جدًا'), { status: 400 });
  const startPrice = toCents(payload.start_price);
  const increment = payload.bid_increment ? toCents(payload.bid_increment) : MIN_INCREMENT;
  if (!(startPrice > 0)) throw Object.assign(new Error('سعر البداية يجب أن يكون أكبر من صفر'), { status: 400 });
  if (!(increment >= MIN_INCREMENT)) throw Object.assign(new Error(`أقل زيادة مسموحة ${toMoney(MIN_INCREMENT)} $`), { status: 400 });

  let startsAt = payload.starts_at ? new Date(payload.starts_at).getTime() : Date.now();
  let endsAt = payload.ends_at ? new Date(payload.ends_at).getTime() : startsAt + 24 * 3600e3;
  if (!Number.isFinite(endsAt) || endsAt <= startsAt) throw Object.assign(new Error('وقت الانتهاء يجب أن يكون بعد وقت البداية'), { status: 400 });
  const durationMs = endsAt - startsAt;
  if (durationMs < 60e3) throw Object.assign(new Error('مدة المزاد 60 ثانية على الأقل'), { status: 400 });
  if (durationMs > 90 * 24 * 3600e3) throw Object.assign(new Error('المدة القصوى 90 يومًا'), { status: 400 });

  const reserve = payload.reserve_price ? toCents(payload.reserve_price) : null;
  if (reserve && reserve < startPrice) throw Object.assign(new Error('سعر الحجز لا يقل عن سعر البداية'), { status: 400 });

  const now = Date.now();
  const a = db.auctions.insert({
    id: crypto.randomUUID(),
    title, description: String(payload.description || '').slice(0, 4000),
    category: String(payload.category || 'other'),
    condition: payload.condition || null,
    location: payload.location || null,
    seller_id: user.id, seller_name: user.fullName,
    start_price: startPrice, reserve_price: reserve, bid_increment: increment,
    starts_at: iso(startsAt), ends_at: iso(endsAt),
    status: now >= startsAt ? 'active' : 'scheduled',
    current_bid: 0, current_bidder_id: null, current_bidder_name: null, bid_count: 0,
    extend_seconds: payload.extend_seconds === 0 ? 0 : (Number(payload.extend_seconds) || DEFAULT_EXTEND_SECONDS),
    max_extensions: Number(payload.max_extensions) || MAX_EXTENSIONS,
    extension_count: 0,
    winner_id: null, winner_name: null, final_amount: 0, closed_at: null,
    demo: !!demo, demo_reason: demo ? 'مزاد تجريبي للعرض' : null,
    created_by: user.id, created_at: iso(now)
  });
  audit(user, 'auction_create', 'auction', a.id, { details: { title, startPrice, demo } });
  return a;
}

// ============================ المزايدة (القلب) ============================
function placeBid(auctionId, user, amountInput, ip) {
  // -------- 1) تحقق من الصلاحية والوقت (ساعة الخادم) --------
  const a = db.auctions.byId(auctionId);
  if (!a) throw Object.assign(new Error('المزاد غير موجود'), { status: 404 });
  const now = Date.now();
  const eff = effectiveStatus(a, now);
  if (eff === 'upcoming') throw Object.assign(new Error('المزاد لم يبدأ بعد'), { status: 409 });
  if (eff !== 'active') throw Object.assign(new Error('انتهى المزاد ولا تُقبل مزايدات جديدة'), { status: 409 });
  if (a.seller_id === user.id) throw Object.assign(new Error('لا يمكن للبائع المزايدة على مزاده'), { status: 403 });
  if (a.current_bidder_id === user.id) throw Object.assign(new Error('أنت الأعلى حاليًا، لا يمكنك تجاوز نفسك'), { status: 409 });

  // -------- 2) تحقق من المبلغ --------
  const amount = toCents(amountInput);
  if (!Number.isFinite(amount) || amount <= 0) throw Object.assign(new Error('مبلغ المزايدة غير صالح'), { status: 400 });
  const minNext = a.current_bid ? a.current_bid + a.bid_increment : a.start_price;
  if (amount < minNext) {
    throw Object.assign(new Error(`الحد الأدنى للمزايدة ${toMoney(minNext)} $`), { status: 400, min_next: toMoney(minNext) });
  }
  if (amount > 100_000_000_00) throw Object.assign(new Error('المبلغ كبير جدًا'), { status: 400 });

  // -------- 3) الحجز المالي (يرفض إن لم يكفِ الرصيد) --------
  let held;
  try {
    held = wallet.hold(user.id, amount, { ref_type: 'auction', ref_id: a.id, note: 'حجز مبلغ مزايدة' });
  } catch (e) {
    throw Object.assign(new Error(e.message), { status: e.status || 402 });
  }

  // -------- 4) تحرير مبلغ المتجاوَز وإشعاره --------
  let previous = null;
  if (a.current_bidder_id && a.current_bid) {
    try { wallet.releaseRef(a.current_bidder_id, { ref_type: 'auction', ref_id: a.id, note: 'تحرير بعد تجاوز المزايدة' }); } catch (_) {}
    const prevBid = db.bids.findOne((b) => b.auction_id === a.id && b.user_id === a.current_bidder_id && b.status === 'winning');
    if (prevBid) db.bids.update(prevBid.id, { status: 'outbid' });
    previous = { id: a.current_bidder_id, name: a.current_bidder_name, amount: a.current_bid };
  }

  // -------- 5) تسجيل المزايدة وتحديث المزاد --------
  const bid = db.bids.insert({
    id: crypto.randomUUID(),
    auction_id: a.id, user_id: user.id, user_name: user.fullName,
    amount, status: 'winning', ip: ip || null, created_at: iso(now)
  });
  a.current_bid = amount;
  a.current_bidder_id = user.id;
  a.current_bidder_name = user.fullName;
  a.bid_count = (a.bid_count || 0) + 1;

  // -------- 6) منع القنص: تمديد تلقائي إذا اقترب الانتهاء --------
  let extended = false;
  const endsMs = new Date(a.ends_at).getTime();
  const left = endsMs - now;
  if (a.extend_seconds > 0 && left <= a.extend_seconds * 1000 && (a.extension_count || 0) < (a.max_extensions || MAX_EXTENSIONS)) {
    a.ends_at = iso(endsMs + a.extend_seconds * 1000);
    a.extension_count = (a.extension_count || 0) + 1;
    extended = true;
  }
  db.auctions.update(a.id, a);
  audit(user, 'auction_bid', 'auction', a.id, { details: { amount: toMoney(amount), extended }, ip });

  return { auction: publicAuction(a, user), bid: publicBid(bid), previous, extended, held_cents: held.account.held_cents };
}

// ============================ الإغلاق التلقائي ============================
function closeAuction(a, now = Date.now()) {
  if (!a || ['cancelled', 'settled', 'ended'].includes(a.status)) return null;
  const endsMs = new Date(a.ends_at).getTime();
  if (now < endsMs) return null;

  const hasBid = !!a.current_bidder_id;
  const reserveOk = a.reserve_price ? (a.current_bid || 0) >= a.reserve_price : hasBid;

  if (hasBid && reserveOk) {
    let captured = 0;
    try {
      const r = wallet.captureToEscrow(a.current_bidder_id, { ref_type: 'auction', ref_id: a.id, note: 'ترحيل مبلغ الفائز إلى الضمان' });
      captured = r.amount_cents;
    } catch (e) { captured = 0; }
    const winBid = db.bids.findOne((b) => b.auction_id === a.id && b.status === 'winning');
    if (winBid) db.bids.update(winBid.id, { status: 'won' });
    for (const b of db.bids.find((b) => b.auction_id === a.id && b.status === 'outbid')) { /* محفوظة كما هي */ }
    const updated = db.auctions.update(a.id, {
      status: 'settled', winner_id: a.current_bidder_id, winner_name: a.current_bidder_name,
      final_amount: a.current_bid, closed_at: iso(now), escrow_captured_cents: captured
    });
    audit({ id: null, fullName: 'scheduler' }, 'auction_close', 'auction', a.id, { details: { winner: a.current_bidder_id, amount: toMoney(a.current_bid) } });
    return { auction: updated, outcome: 'sold', winner_id: a.current_bidder_id, winner_name: a.current_bidder_name, amount: a.current_bid, seller_id: a.seller_id };
  }

  // لا مزايدات أو لم يُستوفَ سعر الحجز → تحرير أي مبلغ محجوز
  if (hasBid) {
    try { wallet.releaseRef(a.current_bidder_id, { ref_type: 'auction', ref_id: a.id, note: 'تحرير لعدم استيفاء سعر الحجز' }); } catch (_) {}
    const b = db.bids.findOne((x) => x.auction_id === a.id && x.status === 'winning');
    if (b) db.bids.update(b.id, { status: 'not_reserved' });
  }
  const updated = db.auctions.update(a.id, { status: 'ended', closed_at: iso(now), winner_id: null, final_amount: 0 });
  audit({ id: null, fullName: 'scheduler' }, 'auction_close', 'auction', a.id, { details: { outcome: hasBid ? 'reserve_not_met' : 'no_bids' } });
  return { auction: updated, outcome: hasBid ? 'reserve_not_met' : 'no_bids', seller_id: a.seller_id };
}

/** تُنفَّذ دوريًا من الخادم: تُغلق كل المزادات المنتهية */
function tick(handlers = {}) {
  const now = Date.now();
  const results = [];
  for (const a of db.auctions.all().slice()) {
    if (['cancelled', 'settled', 'ended'].includes(a.status)) continue;
    if (new Date(a.ends_at).getTime() > now) continue;
    const r = closeAuction(a, now);
    if (r) {
      results.push(r);
      if (handlers.onClosed) handlers.onClosed(r);
    }
  }
  return results;
}

function cancel(auctionId, user) {
  const a = db.auctions.byId(auctionId);
  if (!a) throw Object.assign(new Error('المزاد غير موجود'), { status: 404 });
  if (user.role !== 'super_admin' && a.seller_id !== user.id) throw Object.assign(new Error('لا تملك صلاحية إلغاء هذا المزاد'), { status: 403 });
  if (a.bid_count > 0) throw Object.assign(new Error('لا يمكن الإلغاء بعد وجود مزايدات — أغلقه أو اتركه ينتهي'), { status: 409 });
  const updated = db.auctions.update(a.id, { status: 'cancelled', closed_at: iso(Date.now()) });
  audit(user, 'auction_cancel', 'auction', a.id);
  return updated;
}

// ============================ بيانات أولية (موسومة تجريبيًا) ============================
function seedDemo(adminUser) {
  if (db.auctions.all().length > 0 || !adminUser) return 0;
  const now = Date.now();
  const H = 3600e3;
  const rows = [
    { title: 'شاحنة مرسيدس أكتروس 2021 — وارد أوروبا', category: 'vehicles', start: 42000, inc: 250, hours: 26, desc: 'شاحنة جرّ ثقيل، عداد 320,000 كم، فحص كامل متوفر. الشحن من ميناء جبل علي.' },
    { title: 'دفعة أجهزة لابتوب Dell XPS 15 (20 جهازًا)', category: 'electronics', start: 12500, inc: 100, hours: 8, desc: 'أجهزة جديدة بالكرتونة، ضمان دولي، تُشحن من الصين أو الإمارات.' },
    { title: 'رافعة شوكية كهربائية 3 طن', category: 'equipment', start: 6800, inc: 50, hours: 1.5, desc: 'بطارية جديدة، ساعات تشغيل منخفضة، مناسبة للمستودعات.' },
    { title: 'مستلزمات طبية — 500 جهاز قياس ضغط', category: 'medical', start: 3200, inc: 25, hours: 50, desc: 'أجهزة Omron أصلية، صلاحية طويلة، مستندات منشأ متوفرة.' },
    { title: 'قطع غيار سيارات يابانية — حاوية 20 قدم', category: 'parts', start: 24000, inc: 200, hours: 72, desc: 'خلطة قطع أصلية من مزاد ياباني، قائمة تفصيلية عند الطلب.' },
    { title: 'مجموعة هواتف Samsung Galaxy S24 (10 أجهزة)', category: 'electronics', start: 5400, inc: 50, hours: 0.5, desc: 'أجهزة جديدة، ذاكرة 256GB، ألوان متنوعة.' }
  ];
  let n = 0;
  for (const r of rows) {
    const starts = iso(now - H);
    const ends = iso(now + r.hours * H);
    db.auctions.insert({
      id: crypto.randomUUID(), title: r.title, description: r.desc, category: r.category,
      condition: 'مستعمل/جديد حسب الوصف', location: 'ميناء جبل علي — الإمارات',
      seller_id: adminUser.id, seller_name: adminUser.fullName,
      start_price: r.start * 100, reserve_price: null, bid_increment: r.inc * 100,
      starts_at: starts, ends_at: ends, status: 'active',
      current_bid: 0, current_bidder_id: null, current_bidder_name: null, bid_count: 0,
      extend_seconds: DEFAULT_EXTEND_SECONDS, max_extensions: MAX_EXTENSIONS, extension_count: 0,
      winner_id: null, winner_name: null, final_amount: 0, closed_at: null,
      demo: true, demo_reason: 'مزاد تجريبي للعرض — لا يمثل سلعة حقيقية',
      created_by: adminUser.id, created_at: iso(now)
    });
    n++;
  }
  return n;
}

module.exports = {
  list, detail, create, placeBid, closeAuction, tick, cancel, publicAuction, seedDemo,
  effectiveStatus, MIN_INCREMENT, DEFAULT_EXTEND_SECONDS, toCents, toMoney
};

});

// ==================== server/lib/auth.js ====================
__def("server/lib/auth.js", function (module, exports, __req, __bundleDir) {
/**
 * auth.js — مصادقة حقيقية: تشفير كلمات المرور بـ scrypt + رموز موقّعة HMAC-SHA256
 * ---------------------------------------------------------------------------
 * لا كلمات مرور بنص صريح، لا رموز قابلة للتزوير، لا اعتماد على ساعة العميل.
 * الوصول: Access Token قصير (20 دقيقة) + Refresh Token طويل (30 يومًا) مخزّن مُهشَّرًا.
 */
'use strict';
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { db } = __req("server/lib/store.js");

const SECRET_FILE = path.join(process.env.DATA_DIR || path.join(__bundleDir, '..', '..', 'data'), '.jwt_secret');
const ACCESS_TTL = 20 * 60;          // ثانية
const REFRESH_TTL = 30 * 24 * 3600;  // ثانية

// ---------- مفتاح التوقيع ----------
let SECRET;
(function initSecret() {
  const env = process.env.JWT_SECRET;
  if (env && env.length >= 32) { SECRET = env; return; }
  try {
    if (fs.existsSync(SECRET_FILE)) { SECRET = fs.readFileSync(SECRET_FILE, 'utf8').trim(); return; }
    SECRET = crypto.randomBytes(48).toString('hex');
    fs.mkdirSync(path.dirname(SECRET_FILE), { recursive: true });
    fs.writeFileSync(SECRET_FILE, SECRET, { mode: 0o600 });
  } catch (e) {
    SECRET = crypto.randomBytes(48).toString('hex');
  }
})();

// ---------- كلمات المرور ----------
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(String(password), salt, 64, { N: 16384, r: 8, p: 1 }).toString('hex');
  return `scrypt$16384$8$1$${salt}$${hash}`;
}

function verifyPassword(password, stored) {
  try {
    const parts = String(stored).split('$');
    if (parts.length !== 6 || parts[0] !== 'scrypt') return false;
    const [, N, r, p, salt, hash] = parts;
    const calc = crypto.scryptSync(String(password), salt, 64, { N: +N, r: +r, p: +p }).toString('hex');
    const a = Buffer.from(calc, 'hex');
    const b = Buffer.from(hash, 'hex');
    return a.length === b.length && crypto.timingSafeEqual(a, b);
  } catch (e) { return false; }
}

// ---------- الرموز ----------
const b64u = (buf) => Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const unb64u = (s) => Buffer.from(String(s).replace(/-/g, '+').replace(/_/g, '/'), 'base64');

function signToken(payload, ttl = ACCESS_TTL) {
  const body = { ...payload, iat: Math.floor(Date.now() / 1000), exp: Math.floor(Date.now() / 1000) + ttl };
  const p = b64u(JSON.stringify(body));
  const sig = b64u(crypto.createHmac('sha256', SECRET).update(p).digest());
  return p + '.' + sig;
}

function verifyToken(token) {
  if (!token || typeof token !== 'string') return null;
  const [p, sig] = token.split('.');
  if (!p || !sig) return null;
  const expected = b64u(crypto.createHmac('sha256', SECRET).update(p).digest());
  const a = Buffer.from(sig), b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  let body;
  try { body = JSON.parse(unb64u(p).toString('utf8')); } catch (e) { return null; }
  if (!body.exp || body.exp < Math.floor(Date.now() / 1000)) return null;
  return body;
}

function issueSession(user, meta = {}) {
  // tv = «نسخة الرمز»: رفعها يُبطل كل رموز الوصول الصادرة سابقًا فورًا
  const access = signToken({ sub: user.id, role: user.role, typ: 'access', tv: user.token_version || 0 }, ACCESS_TTL);
  const refresh = signToken({ sub: user.id, typ: 'refresh', jti: crypto.randomUUID() }, REFRESH_TTL);
  db.sessions.insert({
    id: crypto.randomUUID(),
    user_id: user.id,
    refresh_hash: crypto.createHash('sha256').update(refresh).digest('hex'),
    ip: meta.ip || null,
    ua: meta.ua ? String(meta.ua).slice(0, 200) : null,
    created_at: new Date().toISOString(),
    expires_at: new Date(Date.now() + REFRESH_TTL * 1000).toISOString()
  });
  return { access_token: access, refresh_token: refresh, expires_in: ACCESS_TTL, token_type: 'Bearer' };
}

function sessionExists(refresh) {
  const h = crypto.createHash('sha256').update(String(refresh)).digest('hex');
  const s = db.sessions.findOne((x) => x.refresh_hash === h);
  if (!s) return false;
  if (new Date(s.expires_at).getTime() < Date.now()) { db.sessions.remove(s.id); return false; }
  return true;
}

function revokeRefresh(refresh) {
  const h = crypto.createHash('sha256').update(String(refresh)).digest('hex');
  const s = db.sessions.findOne((x) => x.refresh_hash === h);
  if (s) { db.sessions.remove(s.id); return true; }
  return false;
}

function userFromRequest(req) {
  const h = req.headers['authorization'] || '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : (new URL(req.url, 'http://x').searchParams.get('token') || null);
  const body = verifyToken(token);
  if (!body || body.typ !== 'access') return null;
  const user = db.users.byId(body.sub);
  if (!user || user.status !== 'active') return null;
  if ((body.tv || 0) !== (user.token_version || 0)) return null; // رمز صادر قبل إعادة تعيين كلمة المرور/التعليق
  return user;
}

// ---------- تحديد المحاولات (Rate Limit) ----------
const buckets = new Map();
function rateLimit(key, limit, windowMs) {
  const now = Date.now();
  const b = buckets.get(key) || { count: 0, reset: now + windowMs };
  if (now > b.reset) { b.count = 0; b.reset = now + windowMs; }
  b.count += 1;
  buckets.set(key, b);
  return { ok: b.count <= limit, remaining: Math.max(0, limit - b.count), retryAfter: Math.ceil((b.reset - now) / 1000) };
}

const ROLE_RANK = { user: 1, agent: 2, support_staff: 3, shipping_staff: 4, branch_manager: 5, warehouse_manager: 5, super_admin: 9 };
const hasRole = (user, minRole) => !!user && (ROLE_RANK[user.role] || 0) >= (ROLE_RANK[minRole] || 99);

module.exports = {
  hashPassword, verifyPassword, signToken, verifyToken, issueSession, revokeRefresh,
  userFromRequest, rateLimit, hasRole, ROLE_RANK, sessionExists
};

});

// ==================== server/lib/carriers.js ====================
__def("server/lib/carriers.js", function (module, exports, __req, __bundleDir) {
/**
 * carriers.js — طبقة تكامل شركات الشحن (المرحلة 4)
 * -----------------------------------------------
 * المبدأ: لا شيء مُقلَّد. كل شركة تُعلن حالتها بصراحة:
 *   ready:true  → المفاتيح موجودة والإرسال الحقيقي مفعّل
 *   ready:false → لا مفاتيح، ولا تُعاد أي بيانات وهمية (reason صريح)
 *
 * المزوّدون:
 *   manual   — يعمل دائمًا: أحداث يسجّلها موظف الشحن يدويًا (تُحفظ في carrier_events)
 *   17track  — تكامل حقيقي عند توفّر 17TRACK_API_KEY
 *   dhl      — تكامل حقيقي عند توفّر DHL_API_KEY (MyDHL API)
 *   ups/fedex — غير مهيّأ افتراضيًا، يُفعَّل عند إضافة مفاتيحها
 */
'use strict';
const crypto = require('crypto');
const { db, audit } = __req("server/lib/store.js");

const nowIso = () => new Date().toISOString();

const PROVIDERS = [
  { id: 'manual', name: 'إدخال يدوي (موظف الشحن)', env: null, docs: 'لا يحتاج مفاتيح — الأحداث تُسجَّل من اللوحة.' },
  { id: '17track', name: '17TRACK', env: '17TRACK_API_KEY', docs: 'https://api.17track.net — مفتاح واحد يغطي مئات الشركات.' },
  { id: 'dhl', name: 'DHL (MyDHL API)', env: 'DHL_API_KEY', docs: 'https://developer.dhl.com — يحتاج مفتاحًا وسريًا.' },
  { id: 'ups', name: 'UPS', env: 'UPS_CLIENT_ID', docs: 'https://developer.ups.com — OAuth client id/secret.' },
  { id: 'fedex', name: 'FedEx', env: 'FEDEX_API_KEY', docs: 'https://developer.fedex.com — مفتاح + سر.' }
];

function status() {
  return PROVIDERS.map((p) => {
    const ready = p.id === 'manual' ? true : !!process.env[p.env];
    return {
      id: p.id, name: p.name, ready,
      env: p.env, docs: p.docs,
      note: ready ? (p.id === 'manual' ? 'يعمل دائمًا' : `مفعّل عبر ${p.env}`) : `غير مهيّأ: أضف ${p.env} لتشغيل التتبّع الحقيقي`
    };
  });
}

function activeProvider() {
  const configured = PROVIDERS.filter((p) => p.id !== 'manual' && process.env[p.env]);
  return configured.length ? configured[0].id : 'manual';
}

/** أحداث يدوية مرتبطة برقم تتبّع */
function manualEvents(trackingNumber) {
  return db.carrier_events
    .find((e) => e.tracking_number === trackingNumber)
    .sort((a, b) => String(a.at).localeCompare(String(b.at)));
}

function addManualEvent({ tracking_number, status, location, note }, actor) {
  const tn = String(tracking_number || '').trim();
  if (!tn) throw Object.assign(new Error('رقم التتبّع مطلوب'), { status: 400 });
  if (!String(status || '').trim()) throw Object.assign(new Error('حالة الحدث مطلوبة'), { status: 400 });
  const ship = db.shipments.findOne((s) => s.trackingNumber === tn);
  if (!ship) throw Object.assign(new Error('لا توجد شحنة بهذا الرقم في النظام'), { status: 404 });
  const ev = db.carrier_events.insert({
    id: crypto.randomUUID(), tracking_number: tn, carrier: 'manual',
    status: String(status).trim().slice(0, 120),
    location: location ? String(location).slice(0, 160) : null,
    note: note ? String(note).slice(0, 500) : null,
    created_by: actor.id, created_by_name: actor.fullName,
    at: nowIso(), created_at: nowIso()
  });
  audit(actor, 'carrier_event_add', 'shipment', tn, { details: { status: ev.status, location: ev.location } });
  return ev;
}

async function httpJson(url, opts = {}) {
  const res = await fetch(url, opts);
  const text = await res.text();
  let data; try { data = text ? JSON.parse(text) : {}; } catch (_) { data = { raw: text }; }
  if (!res.ok) throw Object.assign(new Error(`رد ${res.status}: ${text.slice(0, 160)}`), { status: res.status });
  return data;
}

/** استعلام حقيقي من مزوّد مُفعّل — أو إعلان صريح بعدم التهيئة */
async function track(trackingNumber, { provider = null } = {}) {
  const tn = String(trackingNumber || '').trim();
  if (!tn) throw Object.assign(new Error('رقم التتبّع مطلوب'), { status: 400 });
  const ship = db.shipments.findOne((s) => s.trackingNumber === tn);
  const local = ship ? { trackingNumber: ship.trackingNumber, status: ship.status || null, currentLocation: ship.currentLocation || null, progress: ship.progress || null } : null;
  const chosen = provider || activeProvider();

  if (chosen === 'manual') {
    const events = manualEvents(tn);
    return {
      ok: true, provider: 'manual', ready: true,
      local, events,
      note: events.length ? 'أحداث مسجّلة يدويًا من موظفي الشحن' : 'لا أحداث يدوية بعد — أضف حدثًا من اللوحة أو فعّل مزوّدًا حقيقيًا'
    };
  }

  const meta = PROVIDERS.find((p) => p.id === chosen);
  if (!meta || !process.env[meta.env]) {
    return { ok: true, provider: chosen, ready: false, local, events: [], note: `المزوّد ${chosen} غير مهيّأ (${meta ? meta.env : '—'} مفقود) — لم يُجرَ أي استعلام ولا تُعرض بيانات مُقلَّدة` };
  }

  try {
    if (chosen === '17track') {
      const data = await httpJson('https://api.17track.net/track/v2.2/gettrackinfo', {
        method: 'POST',
        headers: { 'content-type': 'application/json', '17token': process.env['17TRACK_API_KEY'] },
        body: JSON.stringify([{ number: tn }])
      });
      return { ok: true, provider: '17track', ready: true, local, raw: data, events: [] };
    }
    if (chosen === 'dhl') {
      const data = await httpJson('https://api-eu.dhl.com/track/shipments?trackingNumber=' + encodeURIComponent(tn), {
        headers: { 'DHL-API-Key': process.env.DHL_API_KEY, accept: 'application/json' }
      });
      return { ok: true, provider: 'dhl', ready: true, local, raw: data, events: [] };
    }
    return { ok: true, provider: chosen, ready: false, local, events: [], note: 'المزوّد مُعرَّف لكن التكامل التفصيلي يحتاج مفاتيحه الرسمية — لم تُقلَّد البيانات' };
  } catch (e) {
    return { ok: false, provider: chosen, ready: true, local, events: [], error: e.message };
  }
}

module.exports = { status, track, addManualEvent, manualEvents, activeProvider, PROVIDERS };

});

// ==================== server/lib/live.js ====================
__def("server/lib/live.js", function (module, exports, __req, __bundleDir) {
/**
 * live.js — بوابة البيانات الحية (تُستدعى من الخادم فقط، مع تخزين مؤقت ووسم المصدر)
 * -----------------------------------------------------------------------------
 * كل استجابة تحمل: { source, source_url, fetched_at, stale, data }
 * - لا تُولَّد أي قيمة من الخيال: إن فشل المصدر تُعاد آخر نسخة مع stale=true
 *   أو خطأ صريح 502 — ولا تُعاد بيانات مُختلقة.
 */
'use strict';

const CACHE = new Map(); // key -> { value, at }
const TTL = { fx: 30 * 60e3, weather: 10 * 60e3, news: 15 * 60e3, crypto: 5 * 60e3, macro: 12 * 3600e3 };

// مدن/موانئ رئيسية مرتبطة بمستودعات النظام (إحداثيات حقيقية)
const PORTS = [
  { id: 'aden', name: 'ميناء عدن', lat: 12.7855, lng: 45.0187 },
  { id: 'jebel_ali', name: 'ميناء جبل علي', lat: 25.0100, lng: 55.0610 },
  { id: 'salalah', name: 'ميناء صلالة', lat: 16.9460, lng: 54.0050 },
  { id: 'istanbul', name: 'ميناء إسطنبول', lat: 41.0082, lng: 28.9784 },
  { id: 'guangzhou', name: 'ميناء جوانزو (ناشا)', lat: 22.7500, lng: 113.6000 },
  { id: 'newyork', name: 'ميناء نيويورك', lat: 40.6840, lng: -74.0450 }
];

async function getJson(url, timeout = 12000) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), timeout);
  try {
    const res = await fetch(url, {
      signal: ctl.signal,
      headers: { 'user-agent': 'Almasar-Logistics/1.0 (+server)', accept: 'application/json' }
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } finally { clearTimeout(t); }
}

async function getText(url, timeout = 15000) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), timeout);
  try {
    const res = await fetch(url, {
      signal: ctl.signal,
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; AlmasarBot/1.0)', accept: 'application/rss+xml,text/xml' }
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.text();
  } finally { clearTimeout(t); }
}

function cacheGet(kind, key) {
  const hit = CACHE.get(kind + ':' + key);
  if (!hit) return null;
  const age = Date.now() - hit.at;
  return { ...hit.value, stale: age > TTL[kind], age_ms: age };
}
function cacheSet(kind, key, value) {
  CACHE.set(kind + ':' + key, { value, at: Date.now() });
  return value;
}

// ---------- أسعار الصرف ----------
async function fx() {
  const primary = await getJson('https://api.frankfurter.dev/v1/latest?base=USD').catch((e) => ({ __err: e.message }));
  let rates = null, date = null, source = null, sourceUrl = null, note = null;

  if (primary && primary.rates) {
    rates = {};
    // Frankfurter يعيد المفتاح باسم العملة
    for (const k of ['EUR', 'GBP', 'SAR', 'AED', 'OMR', 'CNY', 'TRY', 'KWD', 'QAR', 'EGP', 'JOD']) {
      if (primary.rates[k] != null) rates[k] = primary.rates[k];
    }
    date = primary.date; source = 'Frankfurter API (بيانات البنك المركزي الأوروبي)';
    sourceUrl = 'https://www.frankfurter.dev/';
  }

  // الريال اليمني غير مشمول في ECB — يُجلب من مزوّد ثانٍ
  if (!rates || !rates.YER) {
    const alt = await getJson('https://open.er-api.com/v6/latest/USD').catch(() => null);
    if (alt && alt.rates) {
      rates = rates || {};
      for (const k of ['YER', 'SAR', 'AED', 'OMR', 'EGP', 'JOD', 'KWD', 'QAR']) {
        if (alt.rates[k] != null) rates[k] = alt.rates[k];
      }
      source = source ? source + ' + open.er-api.com' : 'open.er-api.com (ExchangeRate-API)';
      sourceUrl = 'https://www.exchangerate-api.com/docs/free';
      date = date || new Date(alt.time_last_update_unix * 1000).toISOString().slice(0, 10);
      note = 'الريال اليمني مصدره open.er-api وليس البنك المركزي الأوروبي';
    }
  }

  if (!rates) throw new Error('تعذّر جلب أسعار الصرف من المصدرين');
  return { source, source_url: sourceUrl, rate_date: date, base: 'USD', rates, note };
}

// ---------- الطقس وحالة البحر ----------
async function weather() {
  const out = [];
  for (const p of PORTS) {
    try {
      const w = await getJson(`https://api.open-meteo.com/v1/forecast?latitude=${p.lat}&longitude=${p.lng}&current=temperature_2m,wind_speed_10m,weather_code&timezone=UTC`);
      let marine = null;
      try {
        marine = await getJson(`https://marine-api.open-meteo.com/v1/marine?latitude=${p.lat}&longitude=${p.lng}&current=wave_height,wave_period`);
      } catch (_) { marine = null; }
      out.push({
        port_id: p.id, port: p.name, lat: p.lat, lng: p.lng,
        temperature_c: w.current?.temperature_2m ?? null,
        wind_kmh: w.current?.wind_speed_10m ?? null,
        weather_code: w.current?.weather_code ?? null,
        wave_height_m: marine?.current?.wave_height ?? null,
        wave_period_s: marine?.current?.wave_period ?? null,
        observed_at: w.current?.time || null
      });
    } catch (e) {
      out.push({ port_id: p.id, port: p.name, error: e.message });
    }
  }
  const ok = out.filter((x) => !x.error);
  if (!ok.length) throw new Error('تعذّر جلب بيانات الطقس لأي ميناء');
  return { source: 'Open-Meteo (نموذج الطقس) + Open-Meteo Marine', source_url: 'https://open-meteo.com/', ports: out };
}

// ---------- أخبار لوجستية (RSS) ----------
function parseRss(xml, limit = 12) {
  const items = [];
  const blocks = xml.split(/<item[\s>]/).slice(1);
  for (const b of blocks.slice(0, limit)) {
    const pick = (tag) => {
      const m = b.match(new RegExp('<' + tag + '[^>]*>([\\s\\S]*?)</' + tag + '>', 'i'));
      if (!m) return null;
      return m[1].replace(/<!\[CDATA\[|\]\]>/g, '').replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"').replace(/&#8217;|&apos;/g, "'").replace(/&#8211;|&ndash;/g, '–')
        .replace(/&#8212;|&mdash;/g, '—').replace(/&#\d+;/g, '').trim();
    };
    items.push({ title: pick('title'), link: pick('link'), pubDate: pick('pubDate'), description: (pick('description') || '').slice(0, 220) });
  }
  return items.filter((i) => i.title && i.link);
}

async function news() {
  const feeds = [
    { name: 'gCaptain', url: 'https://gcaptain.com/feed/', focus: 'الشحن البحري' },
    { name: 'FreightWaves', url: 'https://www.freightwaves.com/feed', focus: 'الشحن والسلاسل اللوجستية' }
  ];
  const out = [];
  for (const f of feeds) {
    try {
      const xml = await getText(f.url);
      out.push({ feed: f.name, focus: f.focus, url: f.url, items: parseRss(xml) });
    } catch (e) {
      out.push({ feed: f.name, url: f.url, error: e.message, items: [] });
    }
  }
  if (!out.some((x) => x.items.length)) throw new Error('تعذّر جلب أي خبر من المصادر');
  return { source: 'RSS: gCaptain + FreightWaves', source_url: feeds.map((f) => f.url).join(' , '), feeds: out };
}

// ---------- عملات رقمية ----------
async function cryptoPrices() {
  const d = await getJson('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin&vs_currencies=usd&include_last_updated_at=true');
  return {
    source: 'CoinGecko', source_url: 'https://www.coingecko.com/',
    prices: Object.entries(d).map(([id, v]) => ({ asset: id, usd: v.usd, updated_at: v.last_updated_at ? new Date(v.last_updated_at * 1000).toISOString() : null }))
  };
}

// ---------- مؤشرات اقتصادية ----------
async function macro() {
  const d = await getJson('https://api.worldbank.org/v2/country/YE;SA;AE;OM/indicator/SP.POP.TOTL?format=json&per_page=40&date=2020:2025');
  const rows = Array.isArray(d) && d[1] ? d[1] : [];
  const latest = {};
  for (const r of rows) {
    if (!r || r.value == null) continue;
    const c = r.country?.value;
    if (!latest[c] || +r.date > +latest[c].year) latest[c] = { country: c, year: r.date, population: r.value };
  }
  const list = Object.values(latest);
  if (!list.length) throw new Error('لا توجد بيانات من البنك الدولي');
  return { source: 'World Bank Open Data', source_url: 'https://data.worldbank.org/', indicator: 'SP.POP.TOTL', countries: list };
}

const FETCHERS = { fx, weather, news, crypto: cryptoPrices, macro };

async function get(kind, { maxAgeMs } = {}) {
  const fn = FETCHERS[kind];
  if (!fn) { const e = new Error('نوع بيانات غير معروف'); e.status = 404; throw e; }
  const fresh = cacheGet(kind, 'default');
  if (fresh && !fresh.stale && (!maxAgeMs || fresh.age_ms < maxAgeMs)) return { ...fresh, cached: true };
  try {
    const data = await fn();
    const value = { ...data, fetched_at: new Date().toISOString(), stale: false };
    cacheSet(kind, 'default', value);
    return { ...value, cached: false };
  } catch (e) {
    if (fresh) return { ...fresh, stale: true, cached: true, error: e.message };
    const err = new Error('تعذّر جلب البيانات الحية: ' + e.message);
    err.status = 502;
    throw err;
  }
}

module.exports = { get, PORTS, TTL };

});

// ==================== server/lib/pricing.js ====================
__def("server/lib/pricing.js", function (module, exports, __req, __bundleDir) {
/**
 * pricing.js — محرّك قواعد التسعير (المرحلة 4)
 * ---------------------------------------------
 * قواعد حقيقية تُخزَّن في قاعدة البيانات ويُحسب بها سعر الشحن على الخادم:
 *   match: المصدر/الوجهة/نوع الخدمة/نطاق الوزن/رتبة العميل
 *   rate : رسم ثابت + سعر الكيلو + سعر المتر المكعّب + حد أدنى + زيادة% + خصم%
 * الأسبقية: القاعدة الأكثر تخصيصًا أولًا، ثم الأولوية الرقمية.
 * كل الأسعار بالدولار مع حساب داخلي بالسنت (أعداد صحيحة).
 */
'use strict';
const crypto = require('crypto');
const { db, audit } = __req("server/lib/store.js");

const toCents = (v) => Math.round(Number(v || 0) * 100);
const toMoney = (c) => Math.round(Number(c || 0)) / 100;
const nowIso = () => new Date().toISOString();
const SERVICES = ['air', 'sea', 'land'];
const SERVICE_LABEL = { air: 'جوي', sea: 'بحري', land: 'بري' };

function validate(payload) {
  const name = String(payload.name || '').trim();
  if (name.length < 3) throw Object.assign(new Error('اسم القاعدة قصير جدًا'), { status: 400 });
  const rate = payload.rate || {};
  const base = toCents(rate.base_fee);
  const perKg = toCents(rate.per_kg);
  const perCbm = toCents(rate.per_cbm);
  const minCharge = toCents(rate.min_charge);
  if (base < 0 || perKg < 0 || perCbm < 0 || minCharge < 0) throw Object.assign(new Error('لا تُقبل قيم سالبة'), { status: 400 });
  if (base === 0 && perKg === 0 && perCbm === 0) throw Object.assign(new Error('القاعدة بلا أي سعر — أدخل رسمًا أو سعر كيلو على الأقل'), { status: 400 });
  const surcharge = Number(rate.surcharge_pct || 0);
  const discount = Number(rate.discount_pct || 0);
  if (surcharge < 0 || surcharge > 100) throw Object.assign(new Error('نسبة الزيادة بين 0 و100'), { status: 400 });
  if (discount < 0 || discount > 100) throw Object.assign(new Error('نسبة الخصم بين 0 و100'), { status: 400 });
  const match = payload.match || {};
  if (match.service && !SERVICES.includes(match.service)) throw Object.assign(new Error('نوع خدمة غير معروف'), { status: 400 });
  const wMin = match.weight_min_kg === undefined || match.weight_min_kg === null || match.weight_min_kg === '' ? null : Number(match.weight_min_kg);
  const wMax = match.weight_max_kg === undefined || match.weight_max_kg === null || match.weight_max_kg === '' ? null : Number(match.weight_max_kg);
  if (wMin !== null && wMin < 0) throw Object.assign(new Error('الوزن الأدنى غير صالح'), { status: 400 });
  if (wMax !== null && wMin !== null && wMax < wMin) throw Object.assign(new Error('الوزن الأقصى يجب أن يكون أكبر من الأدنى'), { status: 400 });
  return {
    name, active: payload.active !== false,
    priority: Number.isFinite(Number(payload.priority)) ? Number(payload.priority) : 0,
    match: {
      origin: match.origin ? String(match.origin).trim() : null,
      dest_port: match.dest_port ? String(match.dest_port).trim() : null,
      service: match.service || null,
      weight_min_kg: wMin, weight_max_kg: wMax,
      client_roles: Array.isArray(match.client_roles) && match.client_roles.length ? match.client_roles : null
    },
    rate: { base_fee: toMoney(base), per_kg: toMoney(perKg), per_cbm: toMoney(perCbm), min_charge: toMoney(minCharge), surcharge_pct: surcharge, discount_pct: discount },
    currency: payload.currency || 'USD',
    notes: payload.notes ? String(payload.notes).slice(0, 500) : null
  };
}

function create(payload, actor) {
  const clean = validate(payload);
  const rule = db.pricing_rules.insert({ id: crypto.randomUUID(), ...clean, created_by: actor.id, created_at: nowIso() });
  audit(actor, 'pricing_rule_create', 'pricing_rule', rule.id, { details: { name: rule.name } });
  return rule;
}

function update(id, payload, actor) {
  const rule = db.pricing_rules.byId(id);
  if (!rule) throw Object.assign(new Error('القاعدة غير موجودة'), { status: 404 });
  const merged = { ...rule, ...payload, rate: { ...rule.rate, ...(payload.rate || {}) }, match: { ...rule.match, ...(payload.match || {}) } };
  const clean = validate(merged);
  const out = db.pricing_rules.update(id, clean);
  audit(actor, 'pricing_rule_update', 'pricing_rule', id, { details: { name: clean.name } });
  return out;
}

function remove(id, actor) {
  const rule = db.pricing_rules.byId(id);
  if (!rule) throw Object.assign(new Error('القاعدة غير موجودة'), { status: 404 });
  db.pricing_rules.remove(id);
  audit(actor, 'pricing_rule_delete', 'pricing_rule', id, { details: { name: rule.name } });
  return { ok: true };
}

function list({ active = null, q = null } = {}) {
  let rows = db.pricing_rules.all().slice();
  if (active !== null) rows = rows.filter((r) => !!r.active === !!active);
  if (q) { const s = String(q).toLowerCase(); rows = rows.filter((r) => (r.name || '').toLowerCase().includes(s) || String(r.match && r.match.origin).toLowerCase().includes(s) || String(r.match && r.match.dest_port).toLowerCase().includes(s)); }
  rows.sort((a, b) => (b.priority || 0) - (a.priority || 0) || String(a.name).localeCompare(String(b.name)));
  return rows;
}

/** درجة التخصّص: كم شرطًا تحقّق — الأعلى يفوز */
function specificity(rule, params) {
  const m = rule.match || {};
  let score = 0;
  if (m.origin) score += 2;
  if (m.dest_port) score += 2;
  if (m.service) score += 2;
  if (m.weight_min_kg !== null && m.weight_min_kg !== undefined) score += 1;
  if (m.weight_max_kg !== null && m.weight_max_kg !== undefined) score += 1;
  if (m.client_roles && m.client_roles.length) score += 1;
  return score;
}

function matches(rule, p) {
  const m = rule.match || {};
  if (m.origin && String(p.origin || '').trim() !== m.origin) return false;
  if (m.dest_port && String(p.dest_port || '').trim() !== m.dest_port) return false;
  if (m.service && p.service !== m.service) return false;
  const w = Number(p.weight_kg || 0);
  if (m.weight_min_kg !== null && m.weight_min_kg !== undefined && w < m.weight_min_kg) return false;
  if (m.weight_max_kg !== null && m.weight_max_kg !== undefined && w > m.weight_max_kg) return false;
  if (m.client_roles && m.client_roles.length && p.client_role && !m.client_roles.includes(p.client_role)) return false;
  return true;
}

/** حساب السعر من قاعدة واحدة */
function compute(rule, p) {
  const r = rule.rate;
  const weight = Number(p.weight_kg || 0);
  const cbm = Number(p.volume_cbm || 0);
  const base = toCents(r.base_fee);
  const weightCost = Math.round(toCents(r.per_kg) * weight);
  const volumeCost = Math.round(toCents(r.per_cbm) * cbm);
  const subtotal = base + weightCost + volumeCost;
  const surcharge = Math.round(subtotal * (Number(r.surcharge_pct || 0) / 100));
  const discount = Math.round((subtotal + surcharge) * (Number(r.discount_pct || 0) / 100));
  let total = subtotal + surcharge - discount;
  const minCharge = toCents(r.min_charge);
  const minApplied = minCharge > 0 && total < minCharge;
  if (minApplied) total = minCharge;
  return {
    total_cents: total,
    total: toMoney(total),
    currency: rule.currency || 'USD',
    breakdown: {
      base_fee: toMoney(base),
      weight_kg: weight,
      per_kg: toMoney(toCents(r.per_kg)),
      weight_cost: toMoney(weightCost),
      volume_cbm: cbm,
      per_cbm: toMoney(toCents(r.per_cbm)),
      volume_cost: toMoney(volumeCost),
      subtotal: toMoney(subtotal),
      surcharge_pct: Number(r.surcharge_pct || 0),
      surcharge: toMoney(surcharge),
      discount_pct: Number(r.discount_pct || 0),
      discount: toMoney(discount),
      min_charge: toMoney(minCharge),
      min_applied: minApplied
    }
  };
}

/** الاقتباس: يختار أفضل قاعدة مطابقة ويشرح الحساب */
function quote(params = {}) {
  const p = {
    origin: params.origin ? String(params.origin).trim() : null,
    dest_port: params.dest_port ? String(params.dest_port).trim() : null,
    service: params.service || null,
    weight_kg: Number(params.weight_kg || 0),
    volume_cbm: Number(params.volume_cbm || 0),
    client_role: params.client_role || null
  };
  if (!(p.weight_kg >= 0) || !Number.isFinite(p.weight_kg)) throw Object.assign(new Error('الوزن غير صالح'), { status: 400 });
  const activeRules = db.pricing_rules.find((r) => r.active);
  const matched = activeRules.filter((r) => matches(r, p))
    .map((r) => ({ rule: r, spec: specificity(r, p) }))
    .sort((a, b) => b.spec - a.spec || (b.rule.priority || 0) - (a.rule.priority || 0));
  if (!matched.length) {
    return { ok: true, matched: false, total: null, currency: 'USD', reason: 'لا توجد قاعدة تسعير مطابقة لهذه الشحنة', candidates: [] };
  }
  const best = matched[0].rule;
  const calc = compute(best, p);
  return {
    ok: true,
    matched: true,
    rule: { id: best.id, name: best.name, priority: best.priority, service: best.match.service || null },
    input: p,
    ...calc,
    alternatives: matched.slice(1, 4).map((m) => ({ rule: { id: m.rule.id, name: m.rule.name }, ...compute(m.rule, p) }))
  };
}

/** الاقتباس من كائن شحنة (يُستخدم عند إنشاء شحنة من الواجهة/الخادم) */
function quoteForShipment(ship, clientRole) {
  return quote({
    origin: ship.source || ship.origin || null,
    dest_port: ship.destPort || ship.dest_port || null,
    service: ship.service || null,
    weight_kg: Number(ship.weight || ship.weight_kg || 0),
    volume_cbm: Number(ship.volume_cbm || 0),
    client_role: clientRole || null
  });
}

/** قواعد افتراضية أولية (قابلة للتعديل والحذف بالكامل) */
function seedDefaults(actor) {
  if (db.pricing_rules.all().length > 0) return 0;
  const defaults = [
    {
      name: 'شحن جوي قياسي (حتى 100 كجم)', priority: 10,
      match: { service: 'air', weight_max_kg: 100 },
      rate: { base_fee: 15, per_kg: 6.5, per_cbm: 0, min_charge: 25, surcharge_pct: 0, discount_pct: 0 },
      notes: 'قاعدة تشغيلية افتراضية — عدّلها حسب أسعارك الفعلية.'
    },
    {
      name: 'شحن جوي ثقيل (أكثر من 100 كجم)', priority: 10,
      match: { service: 'air', weight_min_kg: 100.01 },
      rate: { base_fee: 25, per_kg: 5.2, per_cbm: 0, min_charge: 120, surcharge_pct: 0, discount_pct: 5 },
      notes: 'خصم تلقائي 5% للشحنات الثقيلة.'
    },
    {
      name: 'شحن بحري — حاويات', priority: 8,
      match: { service: 'sea' },
      rate: { base_fee: 40, per_kg: 0.85, per_cbm: 22, min_charge: 90, surcharge_pct: 0, discount_pct: 0 },
      notes: 'يشمل رسم معالجة الميناء.'
    },
    {
      name: 'شحن بري محلي', priority: 6,
      match: { service: 'land' },
      rate: { base_fee: 8, per_kg: 0.35, per_cbm: 0, min_charge: 15, surcharge_pct: 0, discount_pct: 0 },
      notes: null
    },
    {
      name: 'عملاء الوكلاء — خصم عام', priority: 3,
      match: { service: null, client_roles: ['agent'] },
      rate: { base_fee: 0, per_kg: 0.01, per_cbm: 0, min_charge: 1, surcharge_pct: 0, discount_pct: 0 },
      notes: 'قاعدة منخفضة الأسبقية — لا تُطبَّق إلا إن لم توجد قاعدة خدمة مطابقة.'
    }
  ];
  let n = 0;
  for (const d of defaults) { create(d, actor); n++; }
  return n;
}

module.exports = { create, update, remove, list, quote, quoteForShipment, compute, matches, validate, seedDefaults, SERVICES, SERVICE_LABEL };

});

// ==================== server/lib/push.js ====================
__def("server/lib/push.js", function (module, exports, __req, __bundleDir) {
/**
 * push.js — إشعارات حقيقية متعددة القنوات (المرحلة 3)
 * ---------------------------------------------------
 * القنوات:
 *   1) inapp   — صندوق إشعارات داخل التطبيق (مجموعة notifications) + بث SSE لحظي.
 *   2) webpush — Web Push قياسي (RFC 8030/8290/8291) بمفاتيح VAPID تُولَّد على الخادم.
 *                يعمل على أندرويد (Chrome) وعلى آيفون 16.4+ بعد «إضافة إلى الشاشة الرئيسية».
 *   3) fcm     — Firebase Cloud Messaging (HTTP v1) لتطبيق أندرويد الأصلي.
 *   4) apns    — Apple Push Notification service لتطبيق آيفون الأصلي.
 *
 * القنوات 3 و4 تحتاج مفاتيح من حسابك (Google/Apple). إن لم تكن موجودة
 * تُعيد الحالة `skipped_no_credentials` بصراحة — ولا يُقلَّد الإرسال أبدًا.
 */
'use strict';
const crypto = require('crypto');
const http = require('http');
const https = require('https');
const { db } = __req("server/lib/store.js");

const b64url = (buf) => Buffer.from(buf).toString('base64url');
const fromB64url = (s) => Buffer.from(String(s), 'base64url');

// ============================ مفاتيح VAPID ============================
// تُولَّد مرة واحدة وتُحفظ في data/vapid.json (أو من متغيرات البيئة).
const fs = require('fs');
const path = require('path');
const { DATA_DIR } = __req("server/lib/store.js");
const VAPID_FILE = path.join(DATA_DIR, 'vapid.json');
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:admin@almasar.local';

let _vapid = null;
function vapid() {
  if (_vapid) return _vapid;
  try {
    if (process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
      _vapid = { publicKey: process.env.VAPID_PUBLIC_KEY, privateJwk: JSON.parse(process.env.VAPID_PRIVATE_KEY) };
      return _vapid;
    }
    if (fs.existsSync(VAPID_FILE)) {
      const saved = JSON.parse(fs.readFileSync(VAPID_FILE, 'utf8'));
      _vapid = { publicKey: saved.public_key, privateJwk: saved.private_jwk };
      return _vapid;
    }
  } catch (e) {
    console.error('[push] تعذّر تحميل مفاتيح VAPID:', e.message);
  }
  const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' });
  const jwk = privateKey.export({ format: 'jwk' });
  const pub = Buffer.concat([Buffer.from([4]), fromB64url(jwk.x), fromB64url(jwk.y)]);
  const pubB64 = pub.toString('base64url');
  _vapid = { publicKey: pubB64, privateJwk: jwk };
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(VAPID_FILE, JSON.stringify({ public_key: pubB64, private_jwk: jwk, created_at: new Date().toISOString() }, null, 1), { mode: 0o600 });
    console.log('[push] تم توليد مفاتيح VAPID مرة واحدة في data/vapid.json');
  } catch (e) {
    console.error('[push] تعذّر حفظ مفاتيح VAPID:', e.message);
  }
  return _vapid;
}

function publicVapidKey() { return vapid().publicKey; }

function vapidJwt(audience) {
  const v = vapid();
  const header = b64url(JSON.stringify({ typ: 'JWT', alg: 'ES256' }));
  const payload = b64url(JSON.stringify({
    aud: audience,
    exp: Math.floor(Date.now() / 1000) + 12 * 3600,
    sub: VAPID_SUBJECT
  }));
  const signingInput = header + '.' + payload;
  const key = crypto.createPrivateKey({ key: v.privateJwk, format: 'jwk' });
  const sig = crypto.sign('sha256', Buffer.from(signingInput), { key, dsaEncoding: 'ieee-p1363' });
  return `${signingInput}.${b64url(sig)}`;
}

// ============================ تشفير Web Push (RFC 8291) ============================
function hkdf(ikm, salt, info, length) {
  return Buffer.from(crypto.hkdfSync('sha256', ikm, salt, Buffer.from(info), length));
}

/** يبني جسم الطلب المشفّر لنقطة اشتراك webpush */
function encryptPayload(payloadObj, sub, { salt, asKeys } = {}) {
  const uaPublic = fromB64url(sub.p256dh);         // 65 بايت غير مضغوطة
  const authSecret = fromB64url(sub.auth);          // 16 بايت
  const ecdh = crypto.createECDH('prime256v1');
  let asPublic, asPrivate;
  if (asKeys) { asPrivate = asKeys.privateKey; asPublic = asKeys.publicKey; }
  else {
    ecdh.generateKeys();
    asPublic = ecdh.getPublicKey();                 // غير مضغوطة 65 بايت
    asPrivate = ecdh.getPrivateKey();
  }
  const shared = asKeys ? asKeys.ecdh.computeSecret(uaPublic) : ecdh.computeSecret(uaPublic);

  const authInfo = Buffer.concat([Buffer.from('WebPush: info\x00'), uaPublic, asPublic]);
  const ikm = hkdf(shared, authSecret, authInfo, 32);
  const useSalt = salt || crypto.randomBytes(16);
  const prk = hkdf(ikm, useSalt, 'Content-Encoding: aes128gcm\x00', 32);
  const cek = hkdf(prk, Buffer.alloc(0), 'Content-Encoding: aes128gcm\x00', 16);
  const nonce = hkdf(prk, Buffer.alloc(0), 'Content-Encoding: nonce\x00', 12);

  const plaintext = Buffer.concat([Buffer.from(JSON.stringify(payloadObj), 'utf8'), Buffer.from([0x02])]);
  const cipher = crypto.createCipheriv('aes-128-gcm', cek, nonce);
  const ct = Buffer.concat([cipher.update(plaintext), cipher.final(), cipher.getAuthTag()]);

  const rs = Buffer.alloc(4); rs.writeUInt32BE(4096, 0);
  return {
    body: Buffer.concat([useSalt, rs, Buffer.from([asPublic.length]), asPublic, ct]),
    salt: useSalt,
    asPublic,
    asPrivate,
    cek,
    nonce
  };
}

/** فك التشفير — للاختبار والتحقق الذاتي فقط */
function decryptForTest(body, sub, uaPrivate) {
  const salt = body.slice(0, 16);
  const idlen = body[20];
  const asPublic = body.slice(21, 21 + idlen);
  const ct = body.slice(21 + idlen);
  const ecdh = crypto.createECDH('prime256v1');
  ecdh.setPrivateKey(uaPrivate);
  const shared = ecdh.computeSecret(asPublic);
  const uaPublic = ecdh.getPublicKey();
  const authInfo = Buffer.concat([Buffer.from('WebPush: info\x00'), uaPublic, asPublic]);
  const ikm = hkdf(shared, fromB64url(sub.auth), authInfo, 32);
  const prk = hkdf(ikm, salt, 'Content-Encoding: aes128gcm\x00', 32);
  const cek = hkdf(prk, Buffer.alloc(0), 'Content-Encoding: aes128gcm\x00', 16);
  const nonce = hkdf(prk, Buffer.alloc(0), 'Content-Encoding: nonce\x00', 12);
  const tag = ct.slice(ct.length - 16);
  const dec = crypto.createDecipheriv('aes-128-gcm', cek, nonce);
  dec.setAuthTag(tag);
  const out = Buffer.concat([dec.update(ct.slice(0, ct.length - 16)), dec.final()]);
  return JSON.parse(out.slice(0, out.length - 1).toString('utf8'));
}

/** إرسال إشعار Web Push واحد. يرمي خطأ عند الفشل. */
function sendWebPush(subscription, payloadObj, { timeoutMs = 8000 } = {}) {
  return new Promise((resolve, reject) => {
    const endpoint = subscription.endpoint;
    let url;
    try { url = new URL(endpoint); } catch (e) { return reject(new Error('نقطة اشتراك غير صحيحة')); }
    const audience = url.origin;
    const jwt = vapidJwt(audience);
    const enc = encryptPayload(payloadObj, subscription);
    const mod = url.protocol === 'https:' ? https : http;
    const req = mod.request({
      method: 'POST',
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname + url.search,
      headers: {
        'content-type': 'application/octet-stream',
        'content-encoding': 'aes128gcm',
        'content-length': enc.body.length,
        ttl: String(payloadObj.ttl || 2419200),
        urgency: 'normal',
        authorization: `vapid t=${jwt}, k=${vapid().publicKey}`
      }
    }, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        const text = Buffer.concat(chunks).toString('utf8');
        if (res.statusCode >= 200 && res.statusCode < 300) resolve({ status: res.statusCode, body: text });
        else reject(Object.assign(new Error(`خدمة الدفع ردّت ${res.statusCode}: ${text.slice(0, 200)}`), { status: res.statusCode, gone: res.statusCode === 404 || res.statusCode === 410 }));
      });
    });
    req.setTimeout(timeoutMs, () => req.destroy(new Error('انتهت مهلة خدمة الدفع')));
    req.on('error', reject);
    req.write(enc.body);
    req.end();
  });
}

// ============================ اشتراكات الأجهزة ============================
function saveSubscription(user, body) {
  const endpoint = String(body.endpoint || '').trim();
  const p256dh = String(body.p256dh || body.keys && body.keys.p256dh || '').trim();
  const auth = String(body.auth || body.keys && body.keys.auth || '').trim();
  if (!endpoint || !p256dh || !auth) throw Object.assign(new Error('بيانات اشتراك ناقصة'), { status: 400 });
  if (!/^https?:\/\//.test(endpoint)) throw Object.assign(new Error('نقطة اشتراك غير صحيحة'), { status: 400 });
  const existing = db.push_subscriptions.findOne((s) => s.endpoint === endpoint);
  if (existing) {
    const u = db.push_subscriptions.update(existing.id, { user_id: user.id, p256dh, auth, ua: body.ua || null, active: true });
    return u;
  }
  return db.push_subscriptions.insert({
    id: crypto.randomUUID(), user_id: user.id, endpoint, p256dh, auth,
    ua: body.ua || null, platform: body.platform || 'web', active: true,
    created_at: new Date().toISOString()
  });
}

function removeSubscription(endpoint) {
  const s = db.push_subscriptions.findOne((x) => x.endpoint === endpoint);
  if (!s) return false;
  db.push_subscriptions.remove(s.id);
  return true;
}

function saveDeviceToken(user, body) {
  const token = String(body.token || '').trim();
  const platform = body.platform === 'ios' ? 'ios' : 'android';
  const app = body.app === 'staff' ? 'staff' : 'client';
  if (token.length < 10) throw Object.assign(new Error('رمز جهاز غير صحيح'), { status: 400 });
  const existing = db.device_tokens.findOne((d) => d.token === token);
  if (existing) return db.device_tokens.update(existing.id, { user_id: user.id, platform, app, active: true });
  return db.device_tokens.insert({ id: crypto.randomUUID(), user_id: user.id, token, platform, app, active: true, created_at: new Date().toISOString() });
}

// ============================ FCM (أندرويد) ============================
let _fcmToken = { at: 0, token: null };
function fcmConfig() {
  const raw = process.env.FCM_SERVICE_ACCOUNT;
  if (!raw) return null;
  try {
    const json = raw.trim().startsWith('{') ? JSON.parse(raw) : JSON.parse(fs.readFileSync(raw, 'utf8'));
    if (!json.client_email || !json.private_key || !json.project_id) return null;
    return json;
  } catch (_) { return null; }
}

async function fcmAccessToken(cfg) {
  if (_fcmToken.token && Date.now() - _fcmToken.at < 50 * 60e3) return _fcmToken.token;
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(JSON.stringify({
    iss: cfg.client_email, scope: 'https://www.googleapis.com/auth/firebase.messaging',
    aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600
  }));
  const sig = crypto.sign('sha256', Buffer.from(`${header}.${claims}`), cfg.private_key).toString('base64url');
  const assertion = `${header}.${claims}.${sig}`;
  const body = `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${encodeURIComponent(assertion)}`;
  const res = await fetchJson('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body
  });
  _fcmToken = { at: Date.now(), token: res.access_token };
  return res.access_token;
}

async function sendFcm(deviceTokens, title, body, data = {}) {
  const cfg = fcmConfig();
  if (!cfg) return { channel: 'fcm', status: 'skipped_no_credentials', sent: 0, failed: 0, note: 'أضف FCM_SERVICE_ACCOUNT لتشغيل إشعارات أندرويد الأصلية' };
  const token = await fcmAccessToken(cfg);
  let sent = 0, failed = 0; const errors = [];
  for (const t of deviceTokens) {
    try {
      await fetchJson(`https://fcm.googleapis.com/v1/projects/${cfg.project_id}/messages:send`, {
        method: 'POST',
        headers: { authorization: 'Bearer ' + token, 'content-type': 'application/json' },
        body: JSON.stringify({ message: { token: t, notification: { title, body }, data } })
      });
      sent++;
    } catch (e) { failed++; errors.push(String(e.message).slice(0, 120)); }
  }
  return { channel: 'fcm', status: sent > 0 ? 'sent' : 'failed', sent, failed, errors: errors.slice(0, 3) };
}

// ============================ APNs (آيفون) ============================
function apnsConfig() {
  const key = process.env.APNS_KEY_P8;
  if (!key || !process.env.APNS_KEY_ID || !process.env.APNS_TEAM_ID) return null;
  try { return { p8: fs.existsSync(key) ? fs.readFileSync(key, 'utf8') : key, keyId: process.env.APNS_KEY_ID, teamId: process.env.APNS_TEAM_ID, bundle: process.env.APNS_BUNDLE_ID || 'com.almasar.logistics' }; }
  catch (_) { return null; }
}

function apnsJwt(cfg) {
  const header = b64url(JSON.stringify({ alg: 'ES256', kid: cfg.keyId }));
  const claims = b64url(JSON.stringify({ iss: cfg.teamId, iat: Math.floor(Date.now() / 1000) }));
  const sig = crypto.sign('sha256', Buffer.from(`${header}.${claims}`), { key: cfg.p8, dsaEncoding: 'ieee-p1363' }).toString('base64url');
  return `${header}.${claims}.${sig}`;
}

async function sendApns(deviceTokens, title, body, data = {}) {
  const cfg = apnsConfig();
  if (!cfg) return { channel: 'apns', status: 'skipped_no_credentials', sent: 0, failed: 0, note: 'أضف APNS_KEY_P8 + APNS_KEY_ID + APNS_TEAM_ID لتشغيل إشعارات آيفون' };
  const jwt = apnsJwt(cfg);
  let sent = 0, failed = 0; const errors = [];
  for (const t of deviceTokens) {
    try {
      const res = await http2Post(`https://api.push.apple.com/3/device/${t}`, {
        authorization: `bearer ${jwt}`,
        'apns-topic': cfg.bundle,
        'apns-push-type': 'alert',
        'apns-priority': '10'
      }, JSON.stringify({ aps: { alert: { title, body }, sound: 'default' }, ...data }));
      if (res.status >= 200 && res.status < 300) sent++; else { failed++; errors.push(res.status + ' ' + String(res.body).slice(0, 100)); }
    } catch (e) { failed++; errors.push(String(e.message).slice(0, 120)); }
  }
  return { channel: 'apns', status: sent > 0 ? 'sent' : 'failed', sent, failed, errors: errors.slice(0, 3) };
}

// ============================ أدوات HTTP ============================
function fetchJson(url, opts = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.request({
      method: opts.method || 'GET', hostname: u.hostname, path: u.pathname + u.search,
      headers: opts.headers || {}
    }, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        const text = Buffer.concat(chunks).toString('utf8');
        let data; try { data = text ? JSON.parse(text) : {}; } catch (_) { data = { raw: text }; }
        if (res.statusCode >= 200 && res.statusCode < 300) resolve(data);
        else reject(Object.assign(new Error(`HTTP ${res.statusCode}: ${text.slice(0, 160)}`), { status: res.statusCode }));
      });
    });
    req.on('error', reject);
    if (opts.body) req.write(opts.body);
    req.end();
  });
}

function http2Post(url, headers, body) {
  return new Promise((resolve, reject) => {
    let http2;
    try { http2 = require('http2'); } catch (e) { return reject(new Error('HTTP/2 غير متاح')); }
    const u = new URL(url);
    const client = http2.connect(u.origin);
    client.on('error', reject);
    const req = client.request({
      ':method': 'POST', ':path': u.pathname + u.search,
      'content-type': 'application/json', 'content-length': Buffer.byteLength(body), ...headers
    });
    let status = 0; const chunks = [];
    req.on('response', (h) => { status = h[':status']; });
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => { client.close(); resolve({ status, body: Buffer.concat(chunks).toString('utf8') }); });
    req.on('error', (e) => { client.close(); reject(e); });
    req.write(body);
    req.end();
  });
}

module.exports = {
  vapid, publicVapidKey, vapidJwt, encryptPayload, decryptForTest, sendWebPush,
  saveSubscription, removeSubscription, saveDeviceToken,
  sendFcm, sendApns, fcmConfig, apnsConfig,
  channelsStatus: () => ({
    inapp: { ready: true, note: 'يعمل دائمًا (داخل التطبيق + SSE)' },
    webpush: { ready: true, note: 'جاهز — مفاتيح VAPID مولّدة على الخادم' },
    fcm: fcmConfig() ? { ready: true, note: 'مهيّأ عبر FCM_SERVICE_ACCOUNT' } : { ready: false, note: 'غير مهيّأ: أضف FCM_SERVICE_ACCOUNT لإشعارات أندرويد الأصلية' },
    apns: apnsConfig() ? { ready: true, note: 'مهيّأ عبر مفاتيح APNs' } : { ready: false, note: 'غير مهيّأ: أضف APNS_KEY_P8/KEY_ID/TEAM_ID لإشعارات آيفون' }
  })
};

});

// ==================== server/lib/reports.js ====================
__def("server/lib/reports.js", function (module, exports, __req, __bundleDir) {
/**
 * reports.js — تقارير مالية وتشغيلية حقيقية (المرحلة 4)
 * ----------------------------------------------------
 * كل الأرقام محسوبة من البيانات الفعلية على الخادم:
 *   wallet_entries (القيود المالية) · wallet_accounts (الأرصدة) · auctions/bids (مبيعات المزاد)
 *   shipments (قيم الفواتير والمدفوعات) · campaigns/notifications (النشاط)
 * وتُوسم بيانات الشحنات التجريبية بوسم `demo` حتى لا تُخلط بالأرقام الحقيقية.
 */
'use strict';
const { db } = __req("server/lib/store.js");

const toMoney = (cents) => Math.round(Number(cents || 0)) / 100;
const dayKey = (iso) => String(iso || '').slice(0, 10);
const DAY = 86400e3;

function range(days = 30) {
  const to = new Date();
  const from = new Date(Date.now() - (days - 1) * DAY);
  return { from: from.toISOString(), to: to.toISOString(), days };
}

function summary({ days = 30 } = {}) {
  const { from } = range(days);
  const since = new Date(from).getTime();

  const entries = db.wallet_entries.all();
  const inRange = entries.filter((e) => new Date(e.created_at).getTime() >= since);

  const creditsAll = entries.filter((e) => e.amount_cents > 0);
  const realCredits = creditsAll.filter((e) => !e.demo);
  const demoCredits = creditsAll.filter((e) => e.demo);

  // حساب الضمان = مبالغ المزادات المحصّلة
  const escrow = db.wallet_accounts.findOne((a) => a.user_id === 'system:escrow') || { available_cents: 0, held_cents: 0 };

  const auctions = db.auctions.all();
  const settled = auctions.filter((a) => a.status === 'settled');
  const gmvCents = settled.reduce((s, a) => s + Number(a.final_amount || 0) * 100, 0);

  const ships = db.shipments.all();
  const realShips = ships.filter((s) => !s.demo);
  const demoShips = ships.filter((s) => s.demo);
  const paidSum = ships.reduce((s, x) => s + Number(x.paid || 0), 0);
  const remainingSum = ships.reduce((s, x) => s + Number(x.remaining || 0), 0);
  const invoiceSum = ships.reduce((s, x) => s + Number(x.invoiceValue || 0), 0);

  return {
    period: { days, from },
    wallet: {
      credits_total: toMoney(creditsAll.reduce((s, e) => s + e.amount_cents, 0)),
      credits_real: toMoney(realCredits.reduce((s, e) => s + e.amount_cents, 0)),
      credits_demo: toMoney(demoCredits.reduce((s, e) => s + e.amount_cents, 0)),
      credits_in_range: toMoney(inRange.filter((e) => e.amount_cents > 0).reduce((s, e) => s + e.amount_cents, 0)),
      entries_in_range: inRange.length,
      accounts: db.wallet_accounts.all().length,
      available_total: toMoney(db.wallet_accounts.all().reduce((s, a) => s + (a.available_cents || 0), 0)),
      held_total: toMoney(db.wallet_accounts.all().reduce((s, a) => s + (a.held_cents || 0), 0))
    },
    escrow: { available: toMoney(escrow.available_cents), held: toMoney(escrow.held_cents) },
    auctions: {
      total: auctions.length,
      active: auctions.filter((a) => a.status === 'active').length,
      settled: settled.length,
      ended_no_sale: auctions.filter((a) => a.status === 'ended').length,
      gmv: toMoney(gmvCents),
      bids: db.bids.all().length,
      demo: auctions.filter((a) => a.demo).length
    },
    shipments: {
      total: ships.length,
      real: realShips.length,
      demo: demoShips.length,
      invoice_value: toMoney(invoiceSum * 100),
      paid: toMoney(paidSum * 100),
      remaining: toMoney(remainingSum * 100),
      collection_rate_pct: invoiceSum > 0 ? Math.round((paidSum / invoiceSum) * 1000) / 10 : 0
    },
    notifications: {
      sent: db.notifications.all().length,
      campaigns: db.campaigns.all().length,
      visitors: db.visitors.all().length
    },
    note: 'قيم الشحنات التجريبية موسومة في حقل shipments.demo — الأرقام المالية الحقيقية هي wallet/auctions.'
  };
}

function series({ days = 30 } = {}) {
  const out = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * DAY).toISOString().slice(0, 10);
    const entries = db.wallet_entries.find((e) => dayKey(e.created_at) === d);
    const ships = db.shipments.find((s) => dayKey(s.created_at) === d);
    const closed = db.auctions.find((a) => dayKey(a.closed_at) === d && a.status === 'settled');
    out.push({
      date: d,
      credits: toMoney(entries.filter((e) => e.amount_cents > 0).reduce((s, e) => s + e.amount_cents, 0)),
      debits: toMoney(entries.filter((e) => e.amount_cents < 0).reduce((s, e) => s + Math.abs(e.amount_cents), 0)),
      entries: entries.length,
      shipments: ships.length,
      auction_sales: closed.length,
      auction_gmv: toMoney(closed.reduce((s, a) => s + Number(a.final_amount || 0) * 100, 0))
    });
  }
  return out;
}

function topClients({ limit = 10, by = 'shipments' } = {}) {
  const users = db.users.all();
  const rows = users.map((u) => {
    const ships = db.shipments.find((s) => s.user_id === u.id || s.created_by === u.id);
    const paid = ships.reduce((s, x) => s + Number(x.paid || 0), 0);
    const credits = db.wallet_entries.find((e) => e.user_id === u.id && e.amount_cents > 0 && !e.demo);
    const acc = db.wallet_accounts.findOne((a) => a.user_id === u.id && a.currency === 'USD');
    return {
      id: u.id, name: u.fullName || u.username, role: u.role, status: u.status,
      shipments: ships.length,
      paid: Math.round(paid * 100) / 100,
      credits: toMoney(credits.reduce((s, e) => s + e.amount_cents, 0)),
      balance: toMoney(acc ? acc.available_cents : 0)
    };
  });
  const key = by === 'credits' ? 'credits' : by === 'balance' ? 'balance' : 'paid';
  return rows.sort((a, b) => b[key] - a[key]).slice(0, limit);
}

/** تصدير CSV (UTF-8 مع BOM ليفتح صحيحًا في Excel العربي) */
function csv(type = 'entries') {
  const esc = (v) => '"' + String(v === null || v === undefined ? '' : v).replace(/"/g, '""') + '"';
  const lines = [];
  if (type === 'entries') {
    lines.push(['التاريخ', 'المستخدم', 'النوع', 'المبلغ', 'العملة', 'مرجع', 'ملاحظة', 'تجريبي'].map(esc).join(','));
    db.wallet_entries.all().slice().reverse().forEach((e) => {
      const u = db.users.byId(e.user_id);
      lines.push([e.created_at, u ? (u.fullName || u.username) : e.user_id, e.type, toMoney(e.amount_cents), 'USD', e.ref_type ? e.ref_type + ':' + (e.ref_id || '') : '', e.note || '', e.demo ? 'نعم' : 'لا'].map(esc).join(','));
    });
  } else if (type === 'shipments') {
    lines.push(['رقم الشحنة', 'الحالة', 'المصدر', 'الوجهة', 'قيمة الفاتورة', 'المدفوع', 'المتبقي', 'الوزن', 'تجريبي', 'التاريخ'].map(esc).join(','));
    db.shipments.all().forEach((s) => {
      lines.push([s.trackingNumber, s.status, s.source || '', s.destPort || '', s.invoiceValue || 0, s.paid || 0, s.remaining || 0, s.weight || 0, s.demo ? 'نعم' : 'لا', s.created_at || ''].map(esc).join(','));
    });
  } else if (type === 'auctions') {
    lines.push(['المزاد', 'الحالة', 'سعر البداية', 'السعر النهائي', 'الفائز', 'عدد المزايدات', 'أُغلق في', 'تجريبي'].map(esc).join(','));
    db.auctions.all().forEach((a) => {
      lines.push([a.title, a.status, (a.start_price || 0), (a.final_amount || 0), a.winner_name || '', a.bid_count || 0, a.closed_at || '', a.demo ? 'نعم' : 'لا'].map(esc).join(','));
    });
  } else if (type === 'audit') {
    lines.push(['التاريخ', 'المنفّذ', 'الإجراء', 'الكيان', 'المعرّف', 'IP'].map(esc).join(','));
    db.audit.all().slice().reverse().forEach((a) => {
      lines.push([a.created_at, a.actor_name || '', a.action, a.entity || '', a.entity_id || '', a.ip || ''].map(esc).join(','));
    });
  } else {
    throw Object.assign(new Error('نوع تصدير غير معروف'), { status: 400 });
  }
  return '\ufeff' + lines.join('\r\n');
}

/** سجل التدقيق مع فلاتر وترقيم صفحات */
function auditQuery({ action = null, actor = null, entity = null, from = null, to = null, q = null, page = 1, limit = 50 } = {}) {
  let rows = db.audit.all().slice().reverse();
  if (action) rows = rows.filter((a) => String(a.action || '').toLowerCase().includes(String(action).toLowerCase()));
  if (actor) rows = rows.filter((a) => String(a.actor_name || '').toLowerCase().includes(String(actor).toLowerCase()));
  if (entity) rows = rows.filter((a) => String(a.entity || '').toLowerCase() === String(entity).toLowerCase());
  if (from) rows = rows.filter((a) => new Date(a.created_at).getTime() >= new Date(from).getTime());
  if (to) rows = rows.filter((a) => new Date(a.created_at).getTime() <= new Date(to).getTime() + DAY);
  if (q) { const s = String(q).toLowerCase(); rows = rows.filter((a) => JSON.stringify(a).toLowerCase().includes(s)); }
  const total = rows.length;
  const start = (Math.max(1, page) - 1) * limit;
  const actions = [...new Set(db.audit.all().map((a) => a.action))].sort();
  const entities = [...new Set(db.audit.all().map((a) => a.entity).filter(Boolean))].sort();
  return { total, page, limit, items: rows.slice(start, start + limit), facets: { actions, entities } };
}

module.exports = { summary, series, topClients, csv, auditQuery, range };

});

// ==================== server/lib/store.js ====================
__def("server/lib/store.js", function (module, exports, __req, __bundleDir) {
/**
 * store.js — طبقة تخزين حقيقية على القرص (بدون أي تبعيات خارجية)
 * -----------------------------------------------------------------
 * كل مجموعة بيانات تُحفظ في ملف JSON داخل مجلد data/ مع:
 *   - كتابة ذرّية (ملف مؤقت ثم rename) لمنع تلف الملفات
 *   - طابور كتابة متسلسل لكل ملف (يمنع تصادم الطلبات المتزامنة)
 *   - نسخة احتياطية تلقائية قبل كل كتابة (ملف .bak)
 *
 * هذا ليس «قاعدة بيانات علائقية»، لكنه تخزين مركزي حقيقي دائم على الخادم،
 * ومصمّم ليُستبدل بـ PostgreSQL لاحقًا عبر نفس الواجهة (load/save/insert/update/remove).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_DIR = process.env.DATA_DIR || path.join(__bundleDir, '..', '..', 'data');

class Collection {
  constructor(name, defaults = []) {
    this.name = name;
    this.file = path.join(DATA_DIR, name + '.json');
    this.defaults = defaults;
    this.data = null;
    this._queue = Promise.resolve();
    this.load();
  }

  load() {
    try {
      if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
      if (fs.existsSync(this.file)) {
        const raw = fs.readFileSync(this.file, 'utf8');
        this.data = raw.trim() ? JSON.parse(raw) : this.defaults;
      } else {
        this.data = this.defaults;
        this._writeNow();
      }
    } catch (e) {
      console.error(`[store] تعذّر تحميل ${this.name}:`, e.message);
      this.data = this.defaults;
    }
    return this.data;
  }

  _writeNow() {
    const tmp = this.file + '.tmp';
    const json = JSON.stringify(this.data, null, 1);
    fs.writeFileSync(tmp, json, 'utf8');
    if (fs.existsSync(this.file)) {
      try { fs.copyFileSync(this.file, this.file + '.bak'); } catch (_) {}
    }
    fs.renameSync(tmp, this.file);
  }

  persist() {
    this._queue = this._queue.then(() => {
      try { this._writeNow(); }
      catch (e) { console.error(`[store] فشل حفظ ${this.name}:`, e.message); }
    });
    return this._queue;
  }

  all() { return this.data; }

  find(pred) { return this.data.filter(pred); }

  findOne(pred) { return this.data.find(pred); }

  byId(id, key = 'id') { return this.data.find((x) => x[key] === id); }

  insert(doc, idKey = 'id') {
    if (!doc[idKey]) doc[idKey] = crypto.randomUUID();
    doc.created_at = doc.created_at || new Date().toISOString();
    this.data.push(doc);
    this.persist();
    return doc;
  }

  update(id, patch, key = 'id') {
    const i = this.data.findIndex((x) => x[key] === id);
    if (i === -1) return null;
    this.data[i] = { ...this.data[i], ...patch, updated_at: new Date().toISOString() };
    this.persist();
    return this.data[i];
  }

  remove(id, key = 'id') {
    const i = this.data.findIndex((x) => x[key] === id);
    if (i === -1) return false;
    this.data.splice(i, 1);
    this.persist();
    return true;
  }

  replaceAll(arr) { this.data = arr; return this.persist(); }
}

// مفاتيح موحّدة لكل مجلدات البيانات
const db = {
  users: new Collection('users', []),
  sessions: new Collection('sessions', []),
  shipments: new Collection('shipments', []),
  favorites: new Collection('favorites', []),
  reviews: new Collection('reviews', []),
  notifications: new Collection('notifications', []),
  audit: new Collection('audit', []),
  auctions: new Collection('auctions', []),
  bids: new Collection('bids', []),
  wallet_accounts: new Collection('wallet_accounts', []),
  wallet_entries: new Collection('wallet_entries', []),
  wallet_holds: new Collection('wallet_holds', []),
  visitors: new Collection('visitors', []),
  push_subscriptions: new Collection('push_subscriptions', []),
  device_tokens: new Collection('device_tokens', []),
  campaigns: new Collection('campaigns', []),
  notify_log: new Collection('notify_log', []),
  settings: new Collection('settings', { updated_at: null }),
  pricing_rules: new Collection('pricing_rules', []),
  assistant_conversations: new Collection('assistant_conversations', []),
  assistant_messages: new Collection('assistant_messages', []),
  assistant_faq: new Collection('assistant_faq', []),
  carrier_events: new Collection('carrier_events', []),
  meta: new Collection('meta', { created_at: new Date().toISOString(), schema: 1 })
};

function audit(actor, action, entity, entityId, extra = {}) {
  db.audit.insert({
    id: crypto.randomUUID(),
    actor_id: actor ? actor.id : null,
    actor_name: actor ? actor.fullName : 'system',
    action, entity, entity_id: entityId,
    ip: extra.ip || null,
    details: extra.details || null,
    created_at: new Date().toISOString()
  });
}

/** انتظار كتابة كل المجموعات على القرص (يُستخدم عند الإغلاق الآمن/SIGTERM) */
async function flush() {
  const queues = Object.values(db).map((c) => (c && c._queue ? c._queue : Promise.resolve()));
  await Promise.all(queues);
  return true;
}

/** هل مجلد البيانات قابل للكتابة؟ (مهم على السحابة) */
function writable() {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    const probe = path.join(DATA_DIR, '.write-probe');
    fs.writeFileSync(probe, 'ok');
    fs.unlinkSync(probe);
    return true;
  } catch (_) { return false; }
}

module.exports = { db, Collection, DATA_DIR, audit, flush, writable };

});

// ==================== server/lib/visitors.js ====================
__def("server/lib/visitors.js", function (module, exports, __req, __bundleDir) {
/**
 * visitors.js — تتبّع الزوار والمستخدمين النشطين (المرحلة 3)
 * --------------------------------------------------------
 * يُسجّل زيارة مجهولة الهوية مع:
 *   • معرّف زائر عشوائي يُحفظ في متصفحه (لا كوكيز تتبّع إعلانية)
 *   • بصمة IP مُجزّأة (sha256 + ملح) — لا يُحفظ عنوان IP الصريح
 *   • الصفحات التي زارها (آخر 20) وعدد الزيارات وأول/آخر ظهور
 *   • ربط بالحساب إن كان مسجّل الدخول
 */
'use strict';
const crypto = require('crypto');
const { db } = __req("server/lib/store.js");

const SALT = process.env.VISITOR_SALT || 'masar-visitors-v1';
const hashIp = (ip) => crypto.createHash('sha256').update(SALT + '|' + String(ip || '')).digest('hex').slice(0, 24);
const nowIso = () => new Date().toISOString();

function deviceOf(ua = '') {
  const s = String(ua).toLowerCase();
  if (/ipad|tablet/.test(s)) return 'tablet';
  if (/iphone|android|mobile/.test(s)) return 'mobile';
  if (/bot|crawler|spider/.test(s)) return 'bot';
  return 'desktop';
}

function platformOf(ua = '') {
  const s = String(ua).toLowerCase();
  if (/iphone|ipad|ios/.test(s)) return 'iOS';
  if (/android/.test(s)) return 'Android';
  if (/windows/.test(s)) return 'Windows';
  if (/mac os|macintosh/.test(s)) return 'macOS';
  if (/linux/.test(s)) return 'Linux';
  return 'أخرى';
}

/** تسجيل زيارة (يُستدعى من /api/track/visit) */
function track({ visitor_id, path, referrer, ua, ip, user_id, screen } = {}) {
  const id = (visitor_id && /^[A-Za-z0-9_-]{8,64}$/.test(String(visitor_id))) ? String(visitor_id) : crypto.randomUUID();
  const cleanPath = String(path || '/').slice(0, 200);
  const existing = db.visitors.byId(id);
  if (existing) {
    if (existing.blocked) return { visitor: existing, blocked: true };
    const pages = Array.isArray(existing.pages) ? existing.pages.slice() : [];
    if (cleanPath && pages[pages.length - 1] !== cleanPath) pages.push(cleanPath);
    const v = db.visitors.update(id, {
      last_seen: nowIso(),
      hits: (existing.hits || 1) + 1,
      pages: pages.slice(-20),
      user_id: user_id || existing.user_id || null,
      screen: screen || existing.screen || null,
      last_referrer: referrer || existing.last_referrer || null
    });
    return { visitor: v, created: false };
  }
  const v = db.visitors.insert({
    id,
    first_seen: nowIso(),
    last_seen: nowIso(),
    hits: 1,
    pages: cleanPath ? [cleanPath] : [],
    referrer: referrer || null,
    last_referrer: referrer || null,
    ua: String(ua || '').slice(0, 300),
    ip_hash: hashIp(ip),
    device: deviceOf(ua),
    platform: platformOf(ua),
    user_id: user_id || null,
    screen: screen || null,
    blocked: false,
    created_at: nowIso()
  });
  return { visitor: v, created: true };
}

function list({ q = null, page = 1, limit = 50, blocked = null, device = null } = {}) {
  let rows = db.visitors.all().slice();
  if (q) {
    const s = String(q).toLowerCase();
    rows = rows.filter((v) => (v.id || '').toLowerCase().includes(s) || (v.pages || []).some((p) => p.toLowerCase().includes(s)) || (v.platform || '').toLowerCase().includes(s));
  }
  if (blocked !== null) rows = rows.filter((v) => !!v.blocked === !!blocked);
  if (device) rows = rows.filter((v) => v.device === device);
  rows.sort((a, b) => String(b.last_seen).localeCompare(String(a.last_seen)));
  const total = rows.length;
  const from = (Math.max(1, page) - 1) * limit;
  return { total, page, limit, items: rows.slice(from, from + limit) };
}

function stats(days = 14) {
  const rows = db.visitors.all();
  const dayKey = (iso) => String(iso).slice(0, 10);
  const today = dayKey(nowIso());
  const series = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400e3).toISOString().slice(0, 10);
    series.push({ date: d, visits: rows.filter((v) => dayKey(v.last_seen) === d).reduce((s, v) => s + (v.hits || 1), 0), unique: rows.filter((v) => dayKey(v.last_seen) === d).length });
  }
  const pageCount = {};
  rows.forEach((v) => (v.pages || []).forEach((p) => { pageCount[p] = (pageCount[p] || 0) + 1; }));
  const top_pages = Object.entries(pageCount).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([path, hits]) => ({ path, hits }));
  const by = (k) => rows.reduce((acc, v) => { const key = v[k] || 'غير معروف'; acc[key] = (acc[key] || 0) + 1; return acc; }, {});
  const active5 = rows.filter((v) => Date.now() - new Date(v.last_seen).getTime() < 5 * 60e3).length;
  return {
    total_unique: rows.length,
    total_visits: rows.reduce((s, v) => s + (v.hits || 1), 0),
    today_unique: rows.filter((v) => dayKey(v.last_seen) === today).length,
    active_now: active5,
    logged_in: rows.filter((v) => v.user_id).length,
    anonymous: rows.filter((v) => !v.user_id).length,
    blocked: rows.filter((v) => v.blocked).length,
    by_device: by('device'),
    by_platform: by('platform'),
    top_pages,
    series
  };
}

function setBlocked(id, blocked) {
  const v = db.visitors.byId(id);
  if (!v) throw Object.assign(new Error('الزائر غير موجود'), { status: 404 });
  return db.visitors.update(id, { blocked: !!blocked });
}

module.exports = { track, list, stats, setBlocked, hashIp, deviceOf, platformOf };

});

// ==================== server/lib/wallet.js ====================
__def("server/lib/wallet.js", function (module, exports, __req, __bundleDir) {
/**
 * wallet.js — محفظة داخلية بدفتر قيود (Ledger)
 * --------------------------------------------
 * كل حركة مالية تُسجَّل في wallet_entries بشكل غير قابل للتعديل،
 * والأرصدة مشتقة من الأرصدة المحفوظة مع تحقق صارم قبل كل خصم/حجز.
 *
 * الوحدات: السنت (cents) لتفادي أخطاء الفاصلة العائمة.
 * الحالات: available (متاح) / held (محجوز لصالح مزايدة أو طلب).
 */
'use strict';
const crypto = require('crypto');
const { db } = __req("server/lib/store.js");

const SYSTEMS = { escrow: 'system:escrow', fees: 'system:fees' };

// مجموعة الحسابات تُدار عبر store مباشرة
const accounts = {
  find: (userId, currency = 'USD') => db.wallet_accounts.findOne((a) => a.user_id === userId && a.currency === currency),
  ensure: (userId, currency = 'USD') => {
    let acc = db.wallet_accounts.findOne((a) => a.user_id === userId && a.currency === currency);
    if (!acc) {
      acc = db.wallet_accounts.insert({
        id: crypto.randomUUID(), user_id: userId, currency,
        available_cents: 0, held_cents: 0, created_at: new Date().toISOString()
      });
    }
    return acc;
  },
  save: (acc) => {
    const i = db.wallet_accounts.all().findIndex((a) => a.id === acc.id);
    if (i === -1) return null;
    db.wallet_accounts.all()[i] = acc;
    db.wallet_accounts.persist();
    return acc;
  }
};

function entry(acc, type, amountCents, opts = {}) {
  const e = db.wallet_entries.insert({
    id: crypto.randomUUID(),
    account_id: acc.id,
    user_id: acc.user_id,
    type,
    amount_cents: Math.round(amountCents),
    available_after_cents: acc.available_cents,
    held_after_cents: acc.held_cents,
    ref_type: opts.ref_type || null,
    ref_id: opts.ref_id || null,
    note: opts.note || null,
    demo: !!opts.demo,
    created_at: new Date().toISOString()
  });
  return e;
}

/** إيداع/شحن رصيد (يتطلب مصدرًا: دفع حقيقي، تحويل إداري، رصيد تجريبي موسوم) */
function credit(userId, cents, opts = {}) {
  const amount = Math.round(Number(cents));
  if (!Number.isFinite(amount) || amount <= 0) throw Object.assign(new Error('المبلغ غير صالح'), { status: 400 });
  const acc = accounts.ensure(userId);
  acc.available_cents += amount;
  accounts.save(acc);
  return { account: acc, entry: entry(acc, 'credit', amount, opts) };
}

/**
 * حجز مبلغ مرتبط بمرجع محدد (مزاد/طلب).
 * كل حجز يُسجَّل كسجل مستقل في wallet_holds حتى يمكن تحريره أو ترحيله بدقة،
 * ولا يختلط بحجوزات المستخدم في مزادات أخرى.
 */
function hold(userId, cents, opts = {}) {
  const amount = Math.round(Number(cents));
  if (!Number.isFinite(amount) || amount <= 0) throw Object.assign(new Error('المبلغ غير صالح'), { status: 400 });
  const acc = accounts.ensure(userId);
  if (acc.available_cents < amount) {
    throw Object.assign(new Error(`الرصيد المتاح غير كافٍ (المتاح ${(acc.available_cents / 100).toFixed(2)} $ والمطلوب ${(amount / 100).toFixed(2)} $)`), { status: 402 });
  }
  acc.available_cents -= amount;
  acc.held_cents += amount;
  accounts.save(acc);
  const holdDoc = db.wallet_holds.insert({
    id: crypto.randomUUID(),
    account_id: acc.id, user_id: userId,
    ref_type: opts.ref_type || 'generic', ref_id: opts.ref_id || null,
    amount_cents: amount, status: 'held',
    created_at: new Date().toISOString()
  });
  return { account: acc, hold: holdDoc, entry: entry(acc, 'hold', amount, opts) };
}

/** تحرير الحجز المرتبط بمرجع محدد (بالمبلغ المحجوز فعليًا لذلك المرجع) */
function releaseRef(userId, opts = {}) {
  const h = findHold(opts.ref_type, opts.ref_id, userId);
  if (!h) return { released_cents: 0 };
  const acc = accounts.ensure(userId);
  acc.held_cents -= h.amount_cents;
  acc.available_cents += h.amount_cents;
  accounts.save(acc);
  db.wallet_holds.update(h.id, { status: 'released', released_at: new Date().toISOString() });
  return { account: acc, released_cents: h.amount_cents, entry: entry(acc, 'release', h.amount_cents, opts) };
}

/** الاحتفاظ بالتوافق: تحرير مبلغ محدد (يُستخدم فقط عند عدم وجود مرجع) */
function release(userId, cents, opts = {}) {
  if (opts.ref_type && opts.ref_id) return releaseRef(userId, opts);
  const amount = Math.round(Number(cents));
  const acc = accounts.ensure(userId);
  const real = Math.min(Math.abs(amount), acc.held_cents);
  acc.held_cents -= real;
  acc.available_cents += real;
  accounts.save(acc);
  return { account: acc, entry: entry(acc, 'release', real, opts) };
}

/** ترحيل حجز مرجع محدد إلى حساب الضمان (عند فوز المزاد) */
function captureToEscrow(userId, opts = {}) {
  const h = findHold(opts.ref_type, opts.ref_id, userId);
  if (!h) return { amount_cents: 0, note: 'لا يوجد حجز لهذا المرجع' };
  const acc = accounts.ensure(userId);
  acc.held_cents -= h.amount_cents;
  accounts.save(acc);
  db.wallet_holds.update(h.id, { status: 'captured', captured_at: new Date().toISOString() });
  const escrow = accounts.ensure(SYSTEMS.escrow);
  escrow.available_cents += h.amount_cents;
  accounts.save(escrow);
  entry(acc, 'capture_escrow', h.amount_cents, opts);
  entry(escrow, 'escrow_in', h.amount_cents, { ...opts, note: 'حجز مبلغ الفائز في المزاد' });
  return { account: acc, amount_cents: h.amount_cents };
}

function findHold(refType, refId, userId) {
  return db.wallet_holds.findOne((h) => h.status === 'held' && h.ref_type === refType && String(h.ref_id) === String(refId) && (!userId || h.user_id === userId));
}

function holds(userId) {
  return db.wallet_holds.find((h) => h.user_id === userId && h.status === 'held');
}

function balance(userId) {
  const acc = accounts.ensure(userId);
  return { available_cents: acc.available_cents, held_cents: acc.held_cents, currency: acc.currency };
}

function entries(userId, limit = 50) {
  const acc = accounts.ensure(userId);
  return db.wallet_entries.find((e) => e.account_id === acc.id).slice().reverse().slice(0, limit);
}

module.exports = { accounts, credit, hold, release, releaseRef, captureToEscrow, findHold, holds, balance, entries, SYSTEMS };

});

// ---------- تشغيل الخادم ----------
__req("server/server.js");
