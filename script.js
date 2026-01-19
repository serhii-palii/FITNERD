// Google Sheets Integration
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbymuKCO1YfvliBI42OoZ35gFXy1j0_OB8SKyaW76m7z-Rol5HcsDIOz-sHCsrP-5k3-hg/exec";
// Translations
const translations = {
  en: {
    badge: "Invite-Only • Beta Access",
    subtitle:
      "AI trainer for people who'd rather die than work out in front of strangers",
    description:
      "Zero awkward gym small talk. Zero judgment. Just you, your biometric data, and AI that actually knows when you're tired (not just lazy 😏).",
    watchVideo: "Watch 30-sec promo",
    videoScript: "Video Script",
    emailPlaceholder: "your email",
    joinWaitlist: "Join Waitlist →",
    successTitle: "You're on the list! 🎉",
    yourPosition: "Your position:",
    speedUp: "Skip the line (legally)",
    referralText:
      "Each friend who joins through your link = you jump 5 spots + free month of premium. We're bribing you with good stuff, basically.",
    copy: "Copy",
    close: "Close",
    howItWorks: "How does this magic work?",
    feature1Title: "AI that actually gets you",
    feature1Desc:
      "Reads your heart rate, sleep, stress. Knows when you're tired vs when you're just being lazy",
    feature2Title: "Adapts in real-time",
    feature2Desc:
      "Bad night? Hangover? Stressed? Your workout adjusts automatically. No explanations needed",
    feature3Title: "Zero social anxiety",
    feature3Desc:
      "No leaderboards. No comparing yourself to that person who runs marathons for fun. Just you and science",
    feature4Title: "Metrics that matter",
    feature4Desc:
      "For data nerds who track everything. We get you. Your spreadsheet obsession is safe here",
    betaResults: "Beta Results (Real Data)",
    statsTitle: "Turns out, people like this. A lot.",
    stat1Label: "beta testers training",
    stat1Sub: "out of 2000+ who applied (we're picky af)",
    stat2Label: "actually stick to it",
    stat2Sub: "vs 12% in regular gyms (yeah, really)",
    stat3Label: "average workout",
    stat3Sub: "efficient > performative",
    testimonialsTitle: "What people who are like you are saying",
    testimonial1:
      "Finally fitness without the social anxiety. This AI knows me better than my therapist tbh.",
    testimonial2:
      "It adapts to my PMS, stress, sleep... Everything. I'm convinced it's witchcraft but I'm not complaining.",
    testimonial3:
      "As someone with 47 spreadsheets tracking everything, this is my dream app. The metrics detail is *chef's kiss*",
    faqTitle: "Questions you probably have",
    faq1Q: "Why invite-only? Trying to be cool?",
    faq1A:
      "Nah, we just want to give everyone proper attention. AI needs time to learn your patterns. Slow rollout = better experience. We're not Fyre Festival, promise.",
    faq2Q: "What data does the AI actually use?",
    faq2A:
      "Heart rate variability, sleep quality, stress from your wearable (Apple Watch, Garmin, Whoop, Oura). Plus a quick mood check before workouts. That's it. We're not reading your texts.",
    faq3Q: "Do I need gym equipment?",
    faq3A:
      "Nope. Most workouts = bodyweight or basic stuff (dumbbells/bands). Train at home, hotel room, park, wherever. That's the whole point.",
    faq4Q: "How much does this cost?",
    faq4A:
      "Beta = free for first 500 people. After launch = €12/month. Early adopters get lifetime 40% discount (€7/month forever). Worth it imo.",
    ctaTitle: "Ready to stop hating exercise?",
    ctaDescription: "Limited spots. Average wait: 2-3 weeks. Worth it though.",
    ctaButton: "Get on the Waitlist →",
    footerCopyright: "© 2026 fitnerd. Made with ❤️ for introverts.",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    disclaimer:
      "DISCLAIMER: This is a demo project for educational purposes. All data is fictional. The video character is AI-generated (any resemblance to public figures is coincidental). Voice is synthetic. Not for commercial use without proper authorization. FITNERD is a concept showcasing marketing + AI workflow capabilities.",
  },
  uk: {
    badge: "Тільки за запрошенням • Beta доступ",
    subtitle:
      "AI-тренер для людей, які краще помруть, ніж будуть тренуватись перед чужими",
    description:
      "Ніяких awkward розмов у залі. Ніякого судження. Тільки ти, твої біометричні дані, і AI що справді знає, коли ти втомився (а не просто лінуєшся 😏).",
    watchVideo: "Подивитись 30-sec промо",
    videoScript: "Читати",
    emailPlaceholder: "твій email",
    joinWaitlist: "Приєднатись до вейт-листа →",
    successTitle: "Ти в списку! 🎉",
    yourPosition: "Твоя позиція:",
    speedUp: "Проскочи чергу (легально)",
    referralText:
      "Кожен друг через твоє посилання = ти стрибаєш на 5 позицій вгору + безкоштовний місяць premium. По суті, ми тебе підкуповуємо, але це ок.",
    copy: "Копіювати",
    close: "Закрити",
    howItWorks: "Як працює ця магія?",
    feature1Title: "AI, який тебе справді розуміє",
    feature1Desc:
      "Читає твій пульс, сон, стрес. Знає, коли ти втомився, а коли просто лінуєшся",
    feature2Title: "Адаптується у реальному часі",
    feature2Desc:
      "Погано спав? Похмілля? Стрес? Тренування підстроюється автоматично. Без пояснень",
    feature3Title: "Нуль соціальної тривоги",
    feature3Desc:
      "Ніяких leaderboards. Ніяких порівнянь із тим чуваком, що бігає марафони для кайфу. Тільки ти і наука",
    feature4Title: "Метрики, що мають сенс",
    feature4Desc:
      "Для data nerds які все трекають. Ми тебе розуміємо. Твоя одержимість табличками тут у безпеці",
    betaResults: "Результати Beta",
    statsTitle: "Виявляється, людям це подобається. Сильно.",
    stat1Label: "бета-тестерів тренуються",
    stat1Sub: "з 2000+ хто подався (ми прискіпливі)",
    stat2Label: "справді дотримуються",
    stat2Sub: "проти 12% у звичайних залах (так, реально)",
    stat3Label: "середнє тренування",
    stat3Sub: "ефективність > понти",
    testimonialsTitle: "Що кажуть люди, схожі на тебе",
    testimonial1:
      "Нарешті фітнес без соціальної тривоги. Цей AI знає мене краще за мого терапевта, чесно.",
    testimonial2:
      "Адаптується під мій ПМС, стрес, сон... Все. Я впевнена, що це чаклунство, але я не скаржусь.",
    testimonial3:
      "Як хтось з 47 табличками що трекає все, це app моєї мрії. Деталі метрик - що лікарка прописала",
    faqTitle: "Питання, які ти напевно маєш",
    faq1Q: "Чому invite-only? Намагаєтесь виглядати круто?",
    faq1A:
      "Неа, просто хочемо дати кожному нормальну увагу. AI потребує часу, щоб вивчити твої паттерни. Повільний rollout = кращий досвід. Ми не Fyre Festival, обіцяємо.",
    faq2Q: "Які дані AI справді використовує?",
    faq2A:
      "Heart rate variability, якість сну, стрес з твого wearable (Apple Watch, Garmin, Whoop, Oura). Плюс швидкий mood check перед тренуваннями. Все. Ми не читаємо твої месседжі.",
    faq3Q: "Потрібне обладнання для залу?",
    faq3A:
      "Неа. Більшість тренувань = власна вага або базова фігня (гантелі/резинки). Тренуйся вдома, в готелі, парку, де завгодно. В цьому вся суть.",
    faq4Q: "Скільки це коштує?",
    faq4A:
      "Beta = безкоштовно для перших 500 людей. Після запуску = €12/міс. Early adopters отримують lifetime 40% знижку (€7/міс назавжди). Воно того варте імхо.",
    ctaTitle: "Готовий перестати ненавидіти тренування?",
    ctaDescription:
      "Обмежені місця. Середнє очікування: 2-3 тижні. Але воно того варте.",
    ctaButton: "Потрапити у вейт-лист →",
    footerCopyright: "© 2026 fitnerd. Зроблено з ❤️ для інтровертів.",
    privacy: "Конфіденційність",
    terms: "Умови",
    contact: "Контакти",
    disclaimer:
      "ВІДМОВА ВІД ВІДПОВІДАЛЬНОСТІ: Це демо-проєкт для освітніх цілей. Всі дані вигадані. Персонаж у відео згенерований AI (будь-яка схожість з публічними особами випадкова). Голос синтетичний. Не для комерційного використання без належної авторизації. FITNERD - це концепт що демонструє маркетинг + AI workflow можливості.",
  },
};

// Current language
let currentLang = "en";

// Language switcher
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    if (lang === currentLang) return;

    currentLang = lang;

    // Update active state
    document
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Apply translations
    applyTranslations(lang);

    // Show/hide script expandable (only for UK)
    const scriptExpandable = document.getElementById("scriptExpandable");
    scriptExpandable.style.display = lang === "uk" ? "block" : "none";
  });
});

// Apply translations
function applyTranslations(lang) {
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Placeholder
  const emailInput = document.getElementById("emailInput");
  if (emailInput) {
    emailInput.placeholder = t.emailPlaceholder;
  }
}

// Script expandable toggle
const expandBtn = document.getElementById("expandBtn");
const scriptContent = document.getElementById("scriptContent");

if (expandBtn && scriptContent) {
  expandBtn.addEventListener("click", () => {
    const isExpanded = scriptContent.classList.contains("expanded");

    if (isExpanded) {
      scriptContent.classList.remove("expanded");
      expandBtn.classList.remove("active");
    } else {
      scriptContent.classList.add("expanded");
      expandBtn.classList.add("active");
    }
  });
}

// Video modal
const videoBtn = document.getElementById("videoBtn");
const videoModal = document.getElementById("videoModal");
const closeModal = document.getElementById("closeModal");

if (videoBtn && videoModal && closeModal) {
  videoBtn.addEventListener("click", () => {
    videoModal.classList.add("active");
  });

  closeModal.addEventListener("click", () => {
    videoModal.classList.remove("active");
  });

  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      videoModal.classList.remove("active");
    }
  });
}

// Waitlist form
const waitlistForm = document.getElementById("waitlistForm");
const emailInput = document.getElementById("emailInput");
const submitBtn = document.getElementById("submitBtn");
const successState = document.getElementById("successState");
const positionNumber = document.getElementById("positionNumber");
const referralLink = document.getElementById("referralLink");

if (submitBtn && emailInput && successState && waitlistForm) {
  submitBtn.addEventListener("click", async () => {
    const email = emailInput.value.trim();

    if (!email || !email.includes("@")) {
      emailInput.style.borderColor = "#ef4444";
      setTimeout(() => {
        emailInput.style.borderColor = "";
      }, 2000);
      return;
    }

    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;

    try {
      // Send to Google Sheets (if URL is configured)
      if (GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            language: currentLang,
            timestamp: new Date().toISOString(),
          }),
        });
      }

      // Generate position (in production, get from Google Sheets response)
      const position = Math.floor(Math.random() * 500) + 100;
      positionNumber.textContent = position;

      // Generate referral link
      const username = email.split("@")[0];
      referralLink.value = `fitnerd.ai/ref/${username}`;

      // Show success state
      waitlistForm.style.display = "none";
      successState.style.display = "block";
    } catch (error) {
      console.error("Error:", error);

      // Still show success to user (form submission doesn't require backend for demo)
      const position = Math.floor(Math.random() * 500) + 100;
      positionNumber.textContent = position;
      const username = email.split("@")[0];
      referralLink.value = `fitnerd.ai/ref/${username}`;
      waitlistForm.style.display = "none";
      successState.style.display = "block";
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });

  // Enter key support
  emailInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      submitBtn.click();
    }
  });
}

// Copy referral link
const copyBtn = document.getElementById("copyBtn");
if (copyBtn && referralLink) {
  copyBtn.addEventListener("click", () => {
    referralLink.select();
    document.execCommand("copy");

    const originalText = copyBtn.textContent;
    copyBtn.textContent = "✓ Copied";

    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 2000);
  });
}

// CTA button
const ctaBtn = document.getElementById("ctaBtn");
if (ctaBtn && waitlistForm) {
  ctaBtn.addEventListener("click", () => {
    waitlistForm.scrollIntoView({ behavior: "smooth" });
    emailInput.focus();
  });
}

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
