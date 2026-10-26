/* ==========================================================================
   Translations
   English is read from index.html. Arabic and Uzbek are below.
   To change a text: edit it in index.html (English) and under the same key here.

   Markup in index.html:
     data-i18n="key"          → element content (may contain simple HTML)
     data-i18n-ph="key"       → placeholder
     data-i18n-aria="key"     → aria-label
     data-i18n-alt="key"      → alt
     data-i18n-content="key"  → content (meta tags)
   ========================================================================== */

const STRINGS = {
  // English strings that only exist in JavaScript (everything else comes from the page)
  en: {
    "js.greeting": "Hi Salokh! I found your website and I'd like to talk about a project.",
    "js.intro": "Hi Salokh, I'm {name}{business}.",
    "js.from": " from {business}",
    "js.interested": "Interested in: {list}",
    "js.subject": "Project enquiry",
    "js.menuOpen": "Open menu",
    "js.menuClose": "Close menu",
  },

  ar: {
    "meta.title": "صلاح — مواقع إلكترونية ووكلاء ذكاء اصطناعي وأتمتة",
    "meta.desc": "أبني مواقع إلكترونية ووكلاء ذكاء اصطناعي وأنظمة أتمتة للمشاريع الصغيرة. مقيم في الرياض، وأعمل بالعربية والإنجليزية والأوزبكية.",
    "skip": "تخطَّ إلى المحتوى",
    "langs.aria": "اللغة",

    "nav.home": "صلاح — الرئيسية",
    "nav.aria": "القائمة الرئيسية",
    "nav.services": "الخدمات",
    "nav.work": "الأعمال",
    "nav.about": "نبذة عني",
    "nav.contact": "تواصل",
    "nav.cta": "لنتحدث",
    "nav.theme": "تبديل الوضع الفاتح / الداكن",

    "hero.badge": "متاح لمشاريع جديدة · الرياض",
    "hero.title": 'أبني <span class="hl">مواقع إلكترونية</span> و<span class="hl">وكلاء ذكاء اصطناعي</span> و<span class="hl">أنظمة أتمتة</span> للمشاريع الصغيرة.',
    "hero.sub": "مرحبًا، أنا صلاح. أساعد المشاريع المحلية على الظهور على الإنترنت، والرد على العملاء على مدار الساعة، والتخلص من الأعمال اليدوية المتكررة.",
    "hero.cta": "راسلني على واتساب",
    "hero.cta2": "تعرّف على خدماتي",

    "flow.1": "تم إرسال نموذج الموقع",
    "flow.1s": "«هل توصلون إلى حي العليا؟»",
    "flow.2": "وكيل الذكاء الاصطناعي يرد",
    "flow.2s": "يجيب بالعربية ويحجز موعدًا",
    "flow.3": "حُفظ في نظام العملاء (CRM)",
    "flow.3s": "Google Sheets · مصنّف «عميل مهتم»",
    "flow.4": "تم إشعار المالك",
    "flow.4s": "أُرسل ملخص عبر واتساب",

    "svc.title": "ثلاث طرق لمساعدة مشروعك على النمو",
    "svc.lead": "اختر خدمة واحدة أو اجمع بينها. الموقع يجلب العملاء، ووكيل الذكاء الاصطناعي يرد عليهم، والأتمتة تتولى المتابعة.",
    "svc.problem": "المشكلة",
    "svc.web.title": "مواقع للمشاريع",
    "svc.web.problem": "يبحث العملاء عنك فلا يجدونك، أو يجدون موقعًا قديم المظهر.",
    "svc.web.desc": "مواقع سريعة مصممة للجوال أولًا، تمنح مشروعك مظهرًا موثوقًا وتحوّل الزوار إلى مكالمات وحجوزات ورسائل واتساب.",
    "svc.web.t1": "صفحات هبوط ومواقع تعريفية للمشاريع",
    "svc.web.t2": "عربي / إنجليزي مع دعم الكتابة من اليمين إلى اليسار",
    "svc.web.t3": "خرائط Google وأساسيات تحسين الظهور (SEO)",
    "svc.ai.title": "وكلاء ذكاء اصطناعي وروبوتات محادثة",
    "svc.ai.problem": "تجيب عن الأسئلة نفسها طوال اليوم، والرسائل التي تصل بعد الدوام تبقى بلا رد.",
    "svc.ai.desc": "مساعدون بالذكاء الاصطناعي مدرَّبون على معلومات مشروعك، يردون على العملاء على مدار الساعة، ويفرزون العملاء المحتملين، ويحجزون المواعيد، على موقعك أو عبر واتساب.",
    "svc.ai.t1": "محادثة عبر واتساب والموقع",
    "svc.ai.t2": "مدرَّب على أسئلتك الشائعة وقائمتك",
    "svc.ai.t3": "يحوّل المحادثة إلى موظف عند الحاجة",
    "svc.auto.title": "أتمتة سير العمل",
    "svc.auto.problem": "ساعات تضيع في نسخ البيانات بين التطبيقات، وملاحقة الفواتير، وإرسال التذكيرات.",
    "svc.auto.desc": "أربط الأدوات التي تستخدمها بالفعل عبر n8n وسكربتات مخصصة، لتنتقل الطلبات وبيانات العملاء والتقارير تلقائيًا.",
    "svc.auto.t1": "سير عمل n8n وتكاملات",
    "svc.auto.t2": "Sheets وأنظمة CRM والبريد وواتساب",
    "svc.auto.t3": "تقارير وتذكيرات تلقائية",

    "work.eyebrow": "أعمال مختارة",
    "work.title": "أحدث المشاريع",
    "work.lead": "بعض ما بنيته مؤخرًا. دراسات الحالة الكاملة قريبًا.",
    "work.soon": "مثال توضيحي — المشروع قريبًا",
    "tag.web": "موقع إلكتروني",
    "tag.ai": "وكيل ذكاء اصطناعي",
    "tag.auto": "أتمتة",
    "tag.webauto": "موقع + أتمتة",
    "work.1.title": "موقع مطعم وقائمة طعام إلكترونية",
    "work.1.desc": "موقع بلغتين مع قائمة محدَّثة، وخرائط Google، وطلب عبر واتساب بلمسة واحدة.",
    "work.2.title": "مساعد حجوزات على واتساب",
    "work.2.desc": "موظف استقبال بالذكاء الاصطناعي يجيب عن الأسئلة الشائعة ويحجز المواعيد بالعربية والإنجليزية.",
    "work.3.title": "مسار العملاء المحتملين إلى CRM عبر n8n",
    "work.3.desc": "تُستكمل بيانات العملاء القادمة من النماذج وتُقيَّم وتُحفظ في CRM وتُرسل إلى المالك تلقائيًا.",
    "work.4.title": "صفحة هبوط لمشروع خدمات",
    "work.4.desc": "صفحة هبوط مصممة لزيادة التحويل مع متابعة تلقائية لكل استفسار.",

    "about.title": "خلفية في علوم الحاسب، وعقلية عملية تضع مشروعك أولًا.",
    "about.p1": "أنا صلاح، طالب علوم حاسب مقيم في الرياض، وأدرس اللغة العربية أيضًا في جامعة الإمام محمد بن سعود الإسلامية.",
    "about.p2": "أحب بناء أشياء مفيدة فعلًا لصاحب المشروع: موقع يجلب العملاء، ومساعد يرد وأنت نائم، وسير عمل يوفّر لك ساعة كل يوم. أُبقي الأمور بسيطة، وأشرحها بوضوح، وأبنيها لتدوم.",
    "about.p3": "أعمل حاليًا على وكلاء ذكاء اصطناعي يعملون عبر واتساب، وأتمتة باستخدام n8n للمشاريع الخدمية المحلية.",
    "about.facts": "معلومات سريعة",
    "about.alt": "صلاح مبتسمًا في إحدى الفعاليات بالرياض",
    "about.caption": "صلاح · الرياض",
    "fact.based": "المقر",
    "fact.based.v": "الرياض، المملكة العربية السعودية",
    "fact.bg": "الخلفية",
    "fact.bg.v": "علوم الحاسب",
    "fact.langs": "اللغات",
    "fact.langs.v": "الأوزبكية · الإنجليزية · العربية",
    "fact.focus": "التركيز",
    "fact.focus.v": "المواقع · وكلاء الذكاء الاصطناعي · n8n",
    "fact.clients": "أعمل مع",
    "fact.clients.v": "عملاء محليين وعن بُعد",

    "contact.title": "لديك مشروع في بالك؟",
    "contact.lead": "أخبرني عن مشروعك وما تحتاجه. عادةً أرد خلال ساعات قليلة.",
    "contact.wa": "تواصل عبر واتساب",
    "contact.email": "أرسل بريدًا إلكترونيًا",
    "form.name": "اسمك",
    "form.name.ph": "أحمد",
    "form.biz": 'اسم المشروع <span class="opt">(اختياري)</span>',
    "form.biz.ph": "مقهى النور",
    "form.need": "ما الذي تحتاجه؟",
    "form.notsure": "لست متأكدًا بعد",
    "form.msg": "رسالتك",
    "form.msg.ph": "بضع كلمات عن مشروعك وما تود تحسينه…",
    "form.error": "يرجى كتابة اسمك ورسالة قصيرة.",
    "form.sendWa": "أرسل عبر واتساب",
    "form.sendEmail": "أرسل عبر البريد",

    "footer.built": "صلاح. صُنع في الرياض.",
    "footer.top": "العودة للأعلى ↑",

    "js.greeting": "مرحبًا صلاح! وجدت موقعك وأود التحدث عن مشروع.",
    "js.intro": "مرحبًا صلاح، أنا {name}{business}.",
    "js.from": " من {business}",
    "js.interested": "مهتم بـ: {list}",
    "js.subject": "استفسار عن مشروع",
    "js.menuOpen": "فتح القائمة",
    "js.menuClose": "إغلاق القائمة",
  },

  uz: {
    "meta.title": "Salokh — Veb-saytlar, AI agentlar va avtomatlashtirish",
    "meta.desc": "Kichik bizneslar uchun veb-saytlar, AI agentlar va avtomatlashtirish tizimlarini yarataman. Riyodda joylashganman, oʻzbek, ingliz va arab tillarida ishlayman.",
    "skip": "Asosiy qismga oʻtish",
    "langs.aria": "Til",

    "nav.home": "Salokh — bosh sahifa",
    "nav.aria": "Asosiy menyu",
    "nav.services": "Xizmatlar",
    "nav.work": "Ishlar",
    "nav.about": "Men haqimda",
    "nav.contact": "Aloqa",
    "nav.cta": "Gaplashaylik",
    "nav.theme": "Yorugʻ / qorongʻi rejimni almashtirish",

    "hero.badge": "Yangi loyihalar uchun boʻshman · Riyod",
    "hero.title": 'Kichik bizneslar uchun <span class="hl">veb-saytlar</span>, <span class="hl">AI&nbsp;agentlar</span> va <span class="hl">avtomatlashtirish</span> tizimlarini yarataman.',
    "hero.sub": "Salom, men Salokh. Mahalliy bizneslarga internetda topilishga, mijozlarga kecha-kunduz javob berishga va takroriy ishlarni qoʻlda bajarishdan qutulishga yordam beraman.",
    "hero.cta": "WhatsApp orqali yozing",
    "hero.cta2": "Xizmatlarimni koʻring",

    "flow.1": "Saytdagi forma yuborildi",
    "flow.1s": "“Al Olayaga yetkazib berasizmi?”",
    "flow.2": "AI agent javob beradi",
    "flow.2s": "Arabcha javob beradi, vaqt band qiladi",
    "flow.3": "CRMga saqlandi",
    "flow.3s": "Google Sheets · “issiq mijoz” belgisi",
    "flow.4": "Egasiga xabar berildi",
    "flow.4s": "WhatsApp orqali qisqa hisobot yuborildi",

    "svc.title": "Biznesingiz oʻsishiga yordam beradigan uch yoʻnalish",
    "svc.lead": "Ulardan birini alohida yoki birgalikda tanlang. Sayt mijozlarni olib keladi, AI agent ularga javob beradi, avtomatlashtirish esa keyingi ishlarni bajaradi.",
    "svc.problem": "Muammo",
    "svc.web.title": "Biznes uchun veb-saytlar",
    "svc.web.problem": "Mijozlar sizni qidiradi, lekin topa olmaydi yoki eskirgan saytga duch keladi.",
    "svc.web.desc": "Telefonga moslashtirilgan tezkor saytlar: biznesingizga ishonch qoʻshadi va tashrif buyuruvchilarni qoʻngʻiroq, buyurtma va WhatsApp xabarlariga aylantiradi.",
    "svc.web.t1": "Landing sahifalar va biznes saytlar",
    "svc.web.t2": "Arabcha / inglizcha, oʻngdan chapga yozuv qoʻllab-quvvatlanadi",
    "svc.web.t3": "Google Maps va SEO asoslari",
    "svc.ai.title": "AI agentlar va chatbotlar",
    "svc.ai.problem": "Kun boʻyi bir xil savollarga javob berasiz, ish vaqtidan keyin kelgan xabarlar esa javobsiz qoladi.",
    "svc.ai.desc": "Biznesingiz maʼlumotlari asosida oʻrgatilgan AI yordamchilar mijozlarga 24/7 javob beradi, potentsial mijozlarni saralaydi va uchrashuvlarni band qiladi. Saytingizda yoki WhatsAppda ishlaydi.",
    "svc.ai.t1": "WhatsApp va sayt chati",
    "svc.ai.t2": "Koʻp beriladigan savollar va menyungiz asosida oʻrgatiladi",
    "svc.ai.t3": "Kerak boʻlsa, suhbatni xodimga oʻtkazadi",
    "svc.auto.title": "Ish jarayonlarini avtomatlashtirish",
    "svc.auto.problem": "Ilovalar orasida maʼlumot koʻchirish, hisob-fakturalarni kuzatish va eslatmalar yuborishga soatlab vaqt ketadi.",
    "svc.auto.desc": "Siz allaqachon foydalanayotgan vositalarni n8n va maxsus skriptlar orqali bogʻlayman, shunda buyurtmalar, mijozlar va hisobotlar oʻz-oʻzidan harakatlanadi.",
    "svc.auto.t1": "n8n jarayonlari va integratsiyalar",
    "svc.auto.t2": "Sheets, CRM, email, WhatsApp",
    "svc.auto.t3": "Avtomatik hisobotlar va eslatmalar",

    "work.eyebrow": "Tanlangan ishlar",
    "work.title": "Soʻnggi loyihalar",
    "work.lead": "Yaqinda yaratgan ishlarimdan bir nechtasi. Toʻliq tavsiflar tez orada.",
    "work.soon": "Namuna — loyiha tez orada",
    "tag.web": "Veb-sayt",
    "tag.ai": "AI agent",
    "tag.auto": "Avtomatlashtirish",
    "tag.webauto": "Veb-sayt + avtomatlashtirish",
    "work.1.title": "Restoran sayti va onlayn menyu",
    "work.1.desc": "Ikki tilli sayt: yangilanib turadigan menyu, Google Maps va bir bosishda WhatsApp orqali buyurtma.",
    "work.2.title": "WhatsAppda band qilish yordamchisi",
    "work.2.desc": "Koʻp beriladigan savollarga javob beradigan va arab hamda ingliz tillarida uchrashuvlarni band qiladigan AI administrator.",
    "work.3.title": "n8n yordamida mijozlarni CRMga yoʻnaltirish",
    "work.3.desc": "Formadan kelgan mijozlar maʼlumotlari toʻldiriladi, baholanadi, CRMga saqlanadi va egasiga avtomatik yuboriladi.",
    "work.4.title": "Xizmat koʻrsatuvchi biznes uchun landing sahifa",
    "work.4.desc": "Har bir murojaatga avtomatik javob yuboradigan, mijozga aylantirishga yoʻnaltirilgan landing sahifa.",

    "about.title": "Kompyuter fanlari boʻyicha bilim. Amaliy, biznesga yoʻnaltirilgan yondashuv.",
    "about.p1": "Men Salokh, Riyodda yashovchi kompyuter fanlari talabasiman. Shuningdek, Imom Muhammad ibn Saud nomidagi Islom universitetida (IMAMU) arab tilini oʻrganyapman.",
    "about.p2": "Biznes egasi uchun haqiqatan foydali narsalar yaratishni yoqtiraman: mijoz olib keladigan sayt, siz uxlayotganda javob beradigan yordamchi va kuniga bir soat vaqtingizni tejaydigan jarayon. Hammasini sodda qilaman, tushunarli tushuntiraman va uzoq ishlaydigan qilib quraman.",
    "about.p3": "Hozir mahalliy xizmat koʻrsatuvchi bizneslar uchun WhatsAppda ishlaydigan AI agentlar va n8n avtomatlashtirishlarini yaratyapman.",
    "about.facts": "Qisqacha maʼlumot",
    "about.alt": "Salokh Riyoddagi tadbirda jilmayib turibdi",
    "about.caption": "Salokh · Riyod",
    "fact.based": "Joylashuv",
    "fact.based.v": "Riyod, Saudiya Arabistoni",
    "fact.bg": "Taʼlim",
    "fact.bg.v": "Kompyuter fanlari",
    "fact.langs": "Tillar",
    "fact.langs.v": "Oʻzbek · Ingliz · Arab",
    "fact.focus": "Yoʻnalish",
    "fact.focus.v": "Saytlar · AI agentlar · n8n",
    "fact.clients": "Mijozlar",
    "fact.clients.v": "Mahalliy va masofaviy",

    "contact.title": "Loyihangiz bormi?",
    "contact.lead": "Biznesingiz va ehtiyojingiz haqida yozing. Odatda bir necha soat ichida javob beraman.",
    "contact.wa": "WhatsAppda yozish",
    "contact.email": "Email yuborish",
    "form.name": "Ismingiz",
    "form.name.ph": "Ahmad",
    "form.biz": 'Biznes nomi <span class="opt">(ixtiyoriy)</span>',
    "form.biz.ph": "Al Nur kafesi",
    "form.need": "Sizga nima kerak?",
    "form.notsure": "Hali aniq emas",
    "form.msg": "Xabar",
    "form.msg.ph": "Biznesingiz va nimani yaxshilamoqchi ekaningiz haqida bir necha soʻz…",
    "form.error": "Iltimos, ismingiz va qisqa xabar yozing.",
    "form.sendWa": "WhatsApp orqali yuborish",
    "form.sendEmail": "Email orqali yuborish",

    "footer.built": "Salokh. Riyodda yaratilgan.",
    "footer.top": "Yuqoriga ↑",

    "js.greeting": "Salom Salokh! Saytingizni koʻrdim, bir loyiha haqida gaplashmoqchi edim.",
    "js.intro": "Salom Salokh, men {name}{business}.",
    "js.from": " ({business})",
    "js.interested": "Qiziqish: {list}",
    "js.subject": "Loyiha boʻyicha murojaat",
    "js.menuOpen": "Menyuni ochish",
    "js.menuClose": "Menyuni yopish",
  },
};

/* ========================================================================== */

(() => {
  const DIR = { en: "ltr", ar: "rtl", uz: "ltr" };
  const ATTRS = { i18n: null, i18nPh: "placeholder", i18nAria: "aria-label", i18nAlt: "alt", i18nContent: "content" };
  const html = document.documentElement;
  let current = "en";

  // Remember every translatable spot, and take its English text from the page.
  const targets = [];
  document.querySelectorAll("[data-i18n],[data-i18n-ph],[data-i18n-aria],[data-i18n-alt],[data-i18n-content]").forEach((el) => {
    for (const [key, attr] of Object.entries(ATTRS)) {
      const id = el.dataset[key];
      if (!id) continue;
      const prop = el.tagName === "TITLE" ? "textContent" : "innerHTML";
      STRINGS.en[id] ??= attr ? el.getAttribute(attr) : el[prop].trim();
      targets.push({ el, id, attr, prop });
    }
  });

  const t = (id, vars = {}) =>
    (STRINGS[current]?.[id] ?? STRINGS.en[id] ?? id).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");

  const setLang = (lang, { save = true } = {}) => {
    if (!DIR[lang]) lang = "en";
    current = lang;
    html.lang = lang;
    html.dir = DIR[lang];
    for (const { el, id, attr, prop } of targets) {
      if (attr) el.setAttribute(attr, t(id));
      else el[prop] = t(id);
    }
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    const select = document.getElementById("lang-select");
    if (select) select.value = lang;
    if (save) try { localStorage.setItem("lang", lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  };

  document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  document.getElementById("lang-select")?.addEventListener("change", (e) => setLang(e.target.value));

  window.i18n = { t, setLang, get lang() { return current; } };
  setLang(window.__lang || "en", { save: false });
})();
