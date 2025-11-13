"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

// Slide Components
const TitleSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-8">
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        المنهج الوصفي المسحي
      </h1>
      <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
        Survey Descriptive Research Method
      </p>
      <div className="mt-12 text-lg text-gray-500 dark:text-gray-400">
        <p>إعداد: عرض تقديمي شامل</p>
        <p className="mt-2">مناهج البحث العلمي في التربية وعلم النفس</p>
      </div>
    </motion.div>
  </div>
);

const DescriptiveMethodSlide = () => (
  <div className="flex flex-col h-full p-8 md:p-12">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">المنهج الوصفي</h2>
    <div className="flex-1 space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-purple-600">التعريف</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          يهدف إلى وصف الظاهرة أو المشكلة كما هي في الواقع أو الماضي، ويحدد خصائصها وعناصرها بدقة.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6">
          <h4 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">يعتمد على:</h4>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              الكم (البيانات الكمية)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              الكيف (البيانات النوعية)
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6">
          <h4 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-400">الطريقة:</h4>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            تحليل الواقع دون التدخل من الباحث
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6">
        <h4 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">أقسام المنهج الوصفي (أ.د. محمد عياد):</h4>
        <div className="grid md:grid-cols-2 gap-3 text-lg">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📊</span>
            <span>الدراسات المسحية</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔄</span>
            <span>دراسات العلاقات المتبادلة</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📈</span>
            <span>الدراسات التطورية</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📝</span>
            <span>دراسات تحليل المضمون</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SurveyDefinitionSlide = () => (
  <div className="flex flex-col h-full p-8 md:p-12">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">المنهج الوصفي المسحي - التعريف</h2>
    <div className="flex-1 space-y-6">
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
        <h3 className="text-2xl font-bold mb-4">د. أحمد سليم صالح</h3>
        <p className="text-lg leading-relaxed">
          منهج يقوم على جمع بيانات كمية وكيفية منظمة من عينة كبيرة من الأفراد أو من المجتمع بأكمله بهدف وصف الظاهرة المدروسة وتحديد خصائصها في فترة زمنية محددة مما يساعد في تشخيص الواقع وتقديم المقترحات والحلول.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-t-4 border-blue-500">
          <div className="text-3xl mb-3">🎯</div>
          <h4 className="text-xl font-semibold mb-2 text-blue-600">دراسة الوضع الراهن</h4>
          <p className="text-gray-700 dark:text-gray-300">
            الحصول على بيانات دقيقة وشاملة عن ظاهرة معينة كما هي موجودة بالفعل في الوقت الحاضر
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-t-4 border-purple-500">
          <div className="text-3xl mb-3">👥</div>
          <h4 className="text-xl font-semibold mb-2 text-purple-600">المسح الشامل/الجزئي</h4>
          <p className="text-gray-700 dark:text-gray-300">
            مسح شامل للمجتمع (التعدادات السكانية) أو عينة كبيرة ممثلة (استطلاعات الرأي)
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-t-4 border-indigo-500">
          <div className="text-3xl mb-3">🔍</div>
          <h4 className="text-xl font-semibold mb-2 text-indigo-600">تحديد الخصائص</h4>
          <p className="text-gray-700 dark:text-gray-300">
            وصف وتفسير خصائص الظاهرة وتحديد حجمها وتوزيعها وارتباطها بمتغيرات أخرى
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-6">
        <h4 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">د. صلاح السيد قادوس</h4>
        <p className="text-lg text-gray-700 dark:text-gray-300 italic">
          "دراسة عامة لظاهرة موجودة في جماعة معينة وفي مكان معين في الوقت الحاضر"
        </p>
      </div>
    </div>
  </div>
);

const ObjectivesSlide = () => (
  <div className="flex flex-col h-full p-8 md:p-12">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">أهداف المنهج الوصفي المسحي</h2>
    <div className="flex-1 grid md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-4xl mb-3">📋</div>
        <h3 className="text-2xl font-bold mb-3">1. الوصف الدقيق للظاهرة</h3>
        <p className="text-blue-50">
          تقديم وصف شامل ودقيق للوضع الراهن للظاهرة أو المشكلة المدروسة من جميع جوانبها
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-4xl mb-3">📊</div>
        <h3 className="text-2xl font-bold mb-3">2. جمع البيانات والمعلومات</h3>
        <p className="text-purple-50">
          جمع كم كبير من الحقائق والبيانات من مجتمع الدراسة أو عينة كبيرة منه
        </p>
      </div>

      <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-4xl mb-3">🔍</div>
        <h3 className="text-2xl font-bold mb-3">3. تشخيص الواقع</h3>
        <p className="text-indigo-50">
          التعرف على واقع المشكلة وتحديد نقاط القوة والضعف ومدى الحاجة إلى تغيير أو تطوير
        </p>
      </div>

      <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-4xl mb-3">📈</div>
        <h3 className="text-2xl font-bold mb-3">4. تحليل وتفسير الظواهر</h3>
        <p className="text-teal-50">
          تحليل البيانات وتفسيرها كمياً أو كيفياً لاستخلاص دلالات الظاهرة
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-2xl font-bold mb-3">5. المساعدة في اتخاذ القرارات</h3>
        <p className="text-green-50">
          توفير قاعدة معلوماتية للاعتماد عليها في وضع الخطط واتخاذ القرارات للإصلاح والتطوير
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-4xl mb-3">🔮</div>
        <h3 className="text-2xl font-bold mb-3">6. التنبؤ</h3>
        <p className="text-orange-50">
          المساعدة في التنبؤ بمستقبل الظاهرة بناءً على معدلات التغير السابقة والحالية
        </p>
      </div>
    </div>
  </div>
);

const TypesSlide = () => (
  <div className="flex flex-col h-full p-8 md:p-12">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">أنواع المنهج المسحي</h2>
    <div className="flex-1 grid md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-r-4 border-blue-500">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🏫</span>
          <h3 className="text-2xl font-bold text-blue-600">1. المسح المدرسي</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
          يستخدم داخل المؤسسات التعليمية للتعرف على الظواهر والمشكلات التي تواجه الطلاب والمعلمين والإدارة
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">مثال:</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            مدى تأثير الأنشطة الرياضية على المستوى الأكاديمي للطلاب
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-r-4 border-purple-500">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">👥</span>
          <h3 className="text-2xl font-bold text-purple-600">2. المسح الاجتماعي</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
          وصف وتفسير الظواهر الاجتماعية في مجتمع ما، يركز على الشمول والاتساع أكثر من العمق
        </p>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
          <p className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-2">مثال:</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            مسح عن عادات تناول الطعام وممارسة الرياضة بين طلاب الجامعة
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-r-4 border-indigo-500">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">💼</span>
          <h3 className="text-2xl font-bold text-indigo-600">3. تحليل العمل</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
          يستخدم في المؤسسات وسوق العمل لدراسة وظيفة معينة من جميع جوانبها والمهارات المطلوبة
        </p>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
          <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-2">مثال:</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            دراسة وظيفة أخصائي التغذية الرياضية والمهارات المطلوبة
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-r-4 border-teal-500">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">📄</span>
          <h3 className="text-2xl font-bold text-teal-600">4. تحليل الوثائق</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
          التعامل مع وثائق أو كتب أو مناهج وتحليلها علمياً دون تحريف بعد إخضاعها للنقد الدقيق
        </p>
        <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-2">مثال:</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            تحليل كتب التربية الرياضية لمعرفة مدى اهتمامها بالتغذية الصحية
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CharacteristicsSlide = () => (
  <div className="flex flex-col h-full p-8 md:p-12">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">خصائص المنهج المسحي</h2>
    <div className="flex-1 space-y-4 overflow-y-auto">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-5 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-2">1️⃣ دراسة الواقع كما هو</h3>
        <p className="text-blue-50">يهتم بوصف الظاهرة كما تحدث فعلاً دون تدخل أو تغيير من الباحث</p>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-5 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-2">2️⃣ يعتمد على جمع البيانات من عدد كبير</h3>
        <p className="text-purple-50">كلما كانت العينة أكبر وأكثر تنوعاً، كانت النتائج أكثر دقة وصدقاً</p>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-5 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-2">3️⃣ يستخدم أدوات محددة لجمع البيانات</h3>
        <p className="text-indigo-50">مثل الاستبيان، المقابلة، الملاحظة، أو تحليل الوثائق</p>
      </div>

      <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-5 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-2">4️⃣ يهدف إلى الوصف والتحليل وليس التجريب</h3>
        <p className="text-teal-50">لا يتدخل في الظاهرة بل يصفها ويحللها كما هي</p>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-5 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-2">5️⃣ يعتمد على التنظيم والتخطيط المسبق</h3>
        <p className="text-green-50">كل خطوة تحتاج إلى خطة واضحة لضمان نتائج علمية موثوقة</p>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-5 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-2">6️⃣ يسعى إلى تعميم النتائج</h3>
        <p className="text-orange-50">يهدف لتعميم النتائج على مجتمع أكبر تمثل العينة جزءاً منه</p>
      </div>

      <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-5 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-2">7️⃣ يقدم بيانات كمية ونوعية</h3>
        <p className="text-pink-50">بيانات رقمية (نسب وتكرارات) وبيانات وصفية (آراء وتجارب)</p>
      </div>
    </div>
  </div>
);

const StepsSlide = () => (
  <div className="flex flex-col h-full p-8 md:p-12">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">خطوات البحث المسحي</h2>
    <div className="flex-1 grid md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
          <h3 className="text-2xl font-bold text-blue-600">رسم الخطة</h3>
        </div>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex gap-2">
            <span className="text-blue-500">•</span>
            <span>تحديد الغرض من المسح</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500">•</span>
            <span>تحديد المفاهيم المستخدمة</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500">•</span>
            <span>تحديد أدوات جمع البيانات</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500">•</span>
            <span>تحديد مجالات البحث (بشري، مكاني، زماني)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500">•</span>
            <span>تقدير الميزانية والبرنامج الزمني</span>
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
          <h3 className="text-2xl font-bold text-purple-600">جمع البيانات</h3>
        </div>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex gap-2">
            <span className="text-purple-500">•</span>
            <span>إعداد تعليمات واضحة للباحثين</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-500">•</span>
            <span>تدريب باحثي الميدان</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-500">•</span>
            <span>الاتصال بالمبحوثين</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-500">•</span>
            <span>الإشراف على أعمال الباحثين</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-500">•</span>
            <span>مراجعة البيانات يومياً</span>
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold">3</div>
          <h3 className="text-2xl font-bold text-indigo-600">تحليل البيانات</h3>
        </div>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex gap-2">
            <span className="text-indigo-500">•</span>
            <span>مراجعة البيانات للتأكد من صحتها</span>
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-500">•</span>
            <span>تصنيف البيانات إلى مجموعات متجانسة</span>
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-500">•</span>
            <span>ترميز البيانات (تحويلها لرقمية)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-500">•</span>
            <span>جدولة البيانات وحساب النسب</span>
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-500">•</span>
            <span>التحليل الإحصائي (وصفي واستدلالي)</span>
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white text-xl font-bold">4</div>
          <h3 className="text-2xl font-bold text-teal-600">عرض النتائج</h3>
        </div>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex gap-2">
            <span className="text-teal-500">•</span>
            <span>تسجيل النتائج بوضوح</span>
          </li>
          <li className="flex gap-2">
            <span className="text-teal-500">•</span>
            <span>تحديد الدلالة الإحصائية</span>
          </li>
          <li className="flex gap-2">
            <span className="text-teal-500">•</span>
            <span>تحديد مدى إمكانية التعميم</span>
          </li>
          <li className="flex gap-2">
            <span className="text-teal-500">•</span>
            <span>صياغة النتائج بوضوح</span>
          </li>
          <li className="flex gap-2">
            <span className="text-teal-500">•</span>
            <span>كتابة التقرير النهائي</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const AdvantagesSlide = () => (
  <div className="flex flex-col h-full p-8 md:p-12">
    <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-8">مميزات المنهج الوصفي المسحي</h2>
    <div className="flex-1 grid md:grid-cols-2 gap-5 overflow-y-auto">
      <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-xl p-6 text-white shadow-lg">
        <div className="text-3xl mb-3">✅</div>
        <h3 className="text-xl font-bold mb-2">مناسب لدراسة الظواهر كما هي</h3>
        <p className="text-green-50">يعطي صورة دقيقة عن الحالة الحالية دون تدخل أو تعديل</p>
      </div>

      <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl p-6 text-white shadow-lg">
        <div className="text-3xl mb-3">📊</div>
        <h3 className="text-xl font-bold mb-2">يجمع بيانات كمية كبيرة</h3>
        <p className="text-blue-50">من عدد كبير من الأفراد مما يتيح مقارنات واسعة</p>
      </div>

      <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl p-6 text-white shadow-lg">
        <div className="text-3xl mb-3">🛠️</div>
        <h3 className="text-xl font-bold mb-2">يعتمد على أدوات متنوعة</h3>
        <p className="text-purple-50">استبيانات، مقابلات، ملاحظة، وتحليل سجلات</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-xl p-6 text-white shadow-lg">
        <div className="text-3xl mb-3">🎯</div>
        <h3 className="text-xl font-bold mb-2">يساعد في اتخاذ القرارات</h3>
        <p className="text-indigo-50">يقدم نتائج لتطوير البرامج التعليمية والتدريبية</p>
      </div>

      <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl p-6 text-white shadow-lg">
        <div className="text-3xl mb-3">⚡</div>
        <h3 className="text-xl font-bold mb-2">سهل التطبيق</h3>
        <p className="text-teal-50">مقارنة بالمناهج التجريبية ومناسب لباحثي الماجستير</p>
      </div>

      <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-6 text-white shadow-lg">
        <div className="text-3xl mb-3">💰</div>
        <h3 className="text-xl font-bold mb-2">أقل تكلفة وأسرع</h3>
        <p className="text-orange-50">خاصة مع الاستبيانات الإلكترونية</p>
      </div>

      <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl p-6 text-white shadow-lg">
        <div className="text-3xl mb-3">🌍</div>
        <h3 className="text-xl font-bold mb-2">يمكن تعميم نتائجه</h3>
        <p className="text-pink-50">بشرط اختيار عينة ممثلة للمجتمع الأصلي</p>
      </div>
    </div>
  </div>
);

const DisadvantagesSlide = () => (
  <div className="flex flex-col h-full p-8 md:p-12">
    <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-8">عيوب المنهج الوصفي المسحي</h2>
    <div className="flex-1 grid md:grid-cols-2 gap-5 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-red-500">
        <div className="text-3xl mb-3">⚠️</div>
        <h3 className="text-xl font-bold mb-2 text-red-600">يعتمد على صدق المبحوثين</h3>
        <p className="text-gray-700 dark:text-gray-300">قد لا يكون المشاركون صادقين في إجاباتهم</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
        <div className="text-3xl mb-3">❓</div>
        <h3 className="text-xl font-bold mb-2 text-orange-600">لا يفسّر الأسباب بوضوح</h3>
        <p className="text-gray-700 dark:text-gray-300">يصف الظاهرة لكن لا يشرح لماذا حدثت</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-yellow-500">
        <div className="text-3xl mb-3">📝</div>
        <h3 className="text-xl font-bold mb-2 text-yellow-600">التحيز في صياغة الأسئلة</h3>
        <p className="text-gray-700 dark:text-gray-300">صياغة السؤال بطريقة معينة قد تغير اتجاه المجيب</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
        <div className="text-3xl mb-3">🌪️</div>
        <h3 className="text-xl font-bold mb-2 text-purple-600">صعوبة السيطرة على الظروف</h3>
        <p className="text-gray-700 dark:text-gray-300">قد تتأثر النتائج بعوامل خارجية لا يتحكم بها الباحث</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
        <div className="text-3xl mb-3">📉</div>
        <h3 className="text-xl font-bold mb-2 text-blue-600">انخفاض نسبة الاستجابة</h3>
        <p className="text-gray-700 dark:text-gray-300">بعض المشاركين قد لا يردون أو يردون بشكل ناقص</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-indigo-500">
        <div className="text-3xl mb-3">⏱️</div>
        <h3 className="text-xl font-bold mb-2 text-indigo-600">تحليل البيانات يحتاج وقت</h3>
        <p className="text-gray-700 dark:text-gray-300">خاصة في حالة استخدام عينات كبيرة ومهارة إحصائية</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
        <div className="text-3xl mb-3">🔬</div>
        <h3 className="text-xl font-bold mb-2 text-teal-600">لا يناسب الظواهر العميقة</h3>
        <p className="text-gray-700 dark:text-gray-300">يركز على الكم وليس التحليل المتعمق</p>
      </div>
    </div>
  </div>
);

const ReferencesSlide = () => (
  <div className="flex flex-col h-full p-8 md:p-12">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">المراجع</h2>
    <div className="flex-1 space-y-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-blue-600 mb-4">📚 المراجع الأساسية</h3>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold">•</span>
            <span>محمد عياد. المدخل إلى البحث في العلوم التربوية والنفسية</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold">•</span>
            <span>أحمد سليم صالح. مناهج البحث العلمي وعلم النفس</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold">•</span>
            <span>صلاح السيد قادوس. الأسس العلمية لمناهج البحث في العلوم التربوية والتربية البدنية. القاهرة: دار المعارف، 1995</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold">•</span>
            <span>راشد الطحان. المناهج الكمية في البحث العلمي. عمان: دار المسيرة، 2020</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold">•</span>
            <span>أحمد بدر. مناهج البحث في علم النفس والتربية. الكويت: دار القلم، 2017</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold">•</span>
            <span>أسامة كامل راتب، وآخرون. مناهج البحث في التربية الرياضية. القاهرة</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold">•</span>
            <span>سهير بدير عبد الحميد. مناهج البحث العلمي في التربية الرياضية. القاهرة</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold">•</span>
            <span>الشافعي. مناهج البحث في التربية وعلم النفس</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold">•</span>
            <span>عبد الصمد. مناهج البحث العلمي</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const EndSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-8">
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-7xl">🎓</div>
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        شكراً لحسن الاستماع
      </h1>
      <p className="text-2xl text-gray-600 dark:text-gray-300">
        Thank You for Your Attention
      </p>
      <div className="mt-12 text-lg text-gray-500 dark:text-gray-400">
        <p>المنهج الوصفي المسحي</p>
        <p className="mt-2">Survey Descriptive Research Method</p>
      </div>
    </motion.div>
  </div>
);

// Main Presentation Component
export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { component: TitleSlide, title: "العنوان" },
    { component: DescriptiveMethodSlide, title: "المنهج الوصفي" },
    { component: SurveyDefinitionSlide, title: "التعريف" },
    { component: ObjectivesSlide, title: "الأهداف" },
    { component: TypesSlide, title: "الأنواع" },
    { component: CharacteristicsSlide, title: "الخصائص" },
    { component: StepsSlide, title: "الخطوات" },
    { component: AdvantagesSlide, title: "المميزات" },
    { component: DisadvantagesSlide, title: "العيوب" },
    { component: ReferencesSlide, title: "المراجع" },
    { component: EndSlide, title: "الختام" },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" dir="rtl">
      {/* Main Slide Container */}
      <div className="h-screen flex flex-col">
        {/* Slide Content */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
              <span className="hidden md:inline">السابق</span>
            </button>

            {/* Progress Indicator */}
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 whitespace-nowrap">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span className="hidden md:inline">التالي</span>
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentSlide
                    ? "w-8 h-2 bg-blue-600"
                    : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                } rounded-full`}
                title={slide.title}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Home Button */}
      <a
        href="/"
        className="fixed top-4 left-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
        title="العودة للرئيسية"
      >
        <Home className="w-6 h-6 text-blue-600" />
      </a>
    </div>
  );
}
