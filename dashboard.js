// dashboard.js - основной скрипт для личного кабинета

document.addEventListener("DOMContentLoaded", function () {
  // ===== ПЕРЕМЕННЫЕ =====
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");
  const sidebarHadith = document.getElementById("sidebarHadith");
  const arabicGreeting = document.getElementById("arabicGreeting");
  const greetingSubtitle = document.getElementById("greetingSubtitle");
  const userName = document.getElementById("userName");
  const userNameArabic = document.getElementById("userNameArabic");
  const userInitials = document.getElementById("userInitials");
  const sidebarNav = document.getElementById("sidebarNav");
  const scrollIndicator = document.getElementById("scrollIndicator");
  const scrollStar = document.getElementById("scrollStar");

  // ===== ФУНКЦИИ ДЛЯ ПОЛЬЗОВАТЕЛЬСКИХ ДАННЫХ =====

  function loadUserData() {
    const savedUser = localStorage.getItem("marifa_user");

    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);

        let fullName = "";

        if (userData.name) {
          fullName = userData.name;
        } else if (userData.fullName) {
          fullName = userData.fullName;
        } else if (userData.firstName && userData.lastName) {
          fullName = userData.firstName + " " + userData.lastName;
        } else if (userData.firstName) {
          fullName = userData.firstName;
        } else {
          fullName = "Ученик";
        }

        if (fullName && fullName !== "Ученик") {
          userName.textContent = fullName;
          userNameArabic.textContent = generateArabicName(fullName);
          userInitials.textContent = getInitials(fullName);
        } else {
          userName.textContent = "Ученик";
          userNameArabic.textContent = "طَالِب";
          userInitials.textContent = "ط";
        }

        let firstName = "";
        if (userData.firstName) {
          firstName = userData.firstName;
        } else if (fullName && fullName !== "Ученик") {
          firstName = fullName.split(" ")[0];
        }

        setGreeting(firstName);
      } catch (error) {
        setDefaultUserData();
      }
    } else {
      setDefaultUserData();
    }
  }

  function generateArabicName(russianName) {
    const nameMap = {
      Абдуллах: "عَبْدُ الله",
      Ибрагимов: "إِبْرَاهِيمُوف",
      Мухаммад: "مُحَمَّد",
      Ахмад: "أَحْمَد",
      Али: "عَلِي",
      Фатима: "فَاطِمَة",
      Айша: "عَائِشَة",
      Ученик: "طَالِب",
    };

    const parts = russianName.split(" ");
    const arabicParts = parts.map((part) => nameMap[part] || part);

    return arabicParts.join(" ");
  }

  function getInitials(fullName) {
    if (!fullName || fullName === "Ученик") return "ط";

    const initials = fullName
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();

    if (initials.match(/[А-Я]/)) {
      return initials.charAt(0);
    }

    return initials.substring(0, 1) || "ط";
  }

  function setGreeting(firstName = "") {
    const now = new Date();
    const hour = now.getHours();

    let arabicText = "سَلَامٌ عَلَيْكَ";
    let russianText = "Добро пожаловать";

    if (hour >= 5 && hour < 12) {
      arabicText = "صَبَاحُ الْخَيْرِ";
      russianText = "Доброе утро";
    } else if (hour >= 12 && hour < 18) {
      arabicText = "مَسَاءُ الْخَيْرِ";
      russianText = "Добрый день";
    } else if (hour >= 18 && hour < 23) {
      arabicText = "مَسَاءُ الْخَيْرِ";
      russianText = "Добрый вечер";
    } else {
      arabicText = "لَيْلَةٌ سَعِيدَةٌ";
      russianText = "Доброй ночи";
    }

    if (firstName && firstName !== "Ученик") {
      russianText = russianText + ", " + firstName;
    } else {
      russianText = russianText + " в личный кабинет";
    }

    arabicGreeting.textContent = arabicText;
    greetingSubtitle.textContent = russianText;
  }

  function setDefaultUserData() {
    userName.textContent = "Ученик";
    userNameArabic.textContent = "طَالِب";
    userInitials.textContent = "ط";
    setGreeting();
  }

  // ===== ФУНКЦИИ ДЛЯ ИНТЕРАКТИВА =====

  function toggleSidebar() {
    sidebar.classList.toggle("active");
  }

  function setupScrollStar() {
    if (!sidebarNav || !scrollStar) return;

    let isHovering = false;

    sidebarNav.addEventListener("mouseenter", function () {
      isHovering = true;
      scrollStar.style.opacity = "1";
    });

    sidebarNav.addEventListener("mouseleave", function () {
      isHovering = false;
      scrollStar.style.opacity = "0";
    });

    sidebarNav.addEventListener("scroll", function () {
      if (!isHovering) return;

      const scrollTop = this.scrollTop;
      const scrollHeight = this.scrollHeight;
      const clientHeight = this.clientHeight;

      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;
      const starPosition = Math.min(Math.max(scrollPercentage, 2), 98);
      scrollStar.style.top = starPosition + "%";
      scrollStar.style.opacity = "1";
    });
  }

  function setupHadithScroll() {
    if (!sidebarNav || !sidebarHadith || !scrollIndicator) return;

    let hadithVisible = false;
    let checkTimeout;

    // Функция проверки видимости хадиса
    function checkHadithVisibility() {
      const scrollTop = sidebarNav.scrollTop;
      const scrollHeight = sidebarNav.scrollHeight;
      const clientHeight = sidebarNav.clientHeight;

      // Позиция хадиса относительно контейнера
      const hadithRect = sidebarHadith.getBoundingClientRect();
      const containerRect = sidebarNav.getBoundingClientRect();

      // Насколько хадис виден (0-100%)
      const hadithTopRelative = hadithRect.top - containerRect.top;
      const hadithVisibility =
        (clientHeight - hadithTopRelative) / hadithRect.height;

      // Если видно больше 30% хадиса
      if (hadithVisibility > 0.3) {
        if (!hadithVisible) {
          sidebarHadith.classList.add("visible");
          hadithVisible = true;
        }
      } else {
        if (hadithVisible && scrollTop < scrollHeight - clientHeight - 100) {
          sidebarHadith.classList.remove("visible");
          hadithVisible = false;
        }
      }

      // Показываем индикатор когда близко к концу
      if (scrollHeight - scrollTop - clientHeight <= 30) {
        scrollIndicator.classList.add("visible");
      } else {
        scrollIndicator.classList.remove("visible");
      }
    }

    sidebarNav.addEventListener("scroll", function () {
      clearTimeout(checkTimeout);
      checkTimeout = setTimeout(checkHadithVisibility, 50);
    });

    // Проверить при загрузке
    setTimeout(checkHadithVisibility, 500);

    // Инициализация индикатора
    if (sidebarNav.scrollHeight > sidebarNav.clientHeight) {
      setTimeout(function () {
        scrollIndicator.classList.add("visible");
      }, 1500);
    }
  }

  function setupMenuItems() {
    const navItems = document.querySelectorAll(".nav-item:not(.logout-item)");

    navItems.forEach(function (item) {
      item.addEventListener("click", function (e) {
        navItems.forEach(function (nav) {
          nav.classList.remove("active");
        });
        this.classList.add("active");

        if (window.innerWidth <= 992) {
          sidebar.classList.remove("active");
        }
      });
    });
  }

  function createParticles() {
    const container = document.getElementById("bgParticles");
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = Math.random() * 4 + 1 + "px";
      particle.style.height = particle.style.width;
      particle.style.background = "rgba(192, 122, 106, 0.4)";
      particle.style.borderRadius = "50%";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.boxShadow = "0 0 10px rgba(192, 122, 106, 0.5)";

      particle.style.animation =
        "particleFloat " + (Math.random() * 10 + 10) + "s infinite ease-in-out";
      particle.style.animationDelay = Math.random() * 5 + "s";

      container.appendChild(particle);
    }

    const style = document.createElement("style");
    style.textContent =
      "@keyframes particleFloat {" +
      "0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }" +
      "25% { transform: translateY(-20px) translateX(10px); opacity: 0.7; }" +
      "50% { transform: translateY(-40px) translateX(-10px); opacity: 0.4; }" +
      "75% { transform: translateY(-20px) translateX(-5px); opacity: 0.6; }" +
      "}";
    document.head.appendChild(style);
  }

  // ===== ИНИЦИАЛИЗАЦИЯ =====

  loadUserData();
  setupScrollStar();
  setupHadithScroll();
  setupMenuItems();
  createParticles();

  // ===== НАЗНАЧЕНИЕ СОБЫТИЙ =====

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleSidebar);
  }

  // ===== ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ =====

  setInterval(function () {
    const savedUser = localStorage.getItem("marifa_user");
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        let firstName = "";
        if (userData.firstName) {
          firstName = userData.firstName;
        } else if (userData.name) {
          firstName = userData.name.split(" ")[0];
        }
        setGreeting(firstName);
      } catch (e) {}
    }
  }, 60000);

  window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
      sidebar.classList.remove("active");
    }
  });
});
// ===== БЛОК "СУРА ДНЯ" =====

const dailySurahs = [
  {
    id: 112,
    arabicText: ` قُلْ هُوَ ٱللَّهُ أَحَدٌ<br>ٱللَّهُ ٱلصَّمَدُ<br>لَمْ يَلِدْ وَلَمْ يُولَدْ<br>وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ`,
    translation:
      "Скажи: «Он – Аллах Единый, Аллах Самодостаточный. Он не родил и не был рожден, и нет никого равного Ему».",
    latinName: "Al-Ikhlās",
    number: 112,
    verses: 4,
    audioUrl: "sound/112.mp3",
    tafsirTitle: "Тафсир суры Аль-Ихляс",
    tafsirContent: `<p><strong>Сура "Аль-Ихляс" (Очищение веры)</strong> — 112-я сура Корана. Ниспослана в Мекке. Состоит из 4 аятов.</p>
      <p>Сура утверждает абсолютную единственность Аллаха, Его независимость от всего творения и отсутствие у Него каких-либо подобий или сотоварищей.</p>
      <p>Чтение этой суры приравнивается к чтению трети Корана. Защищает от многобожия (ширка).</p>`,
  },
  {
    id: 101,
    arabicText: ` ٱلْقَارِعَةُ<br>مَا ٱلْقَارِعَةُ<br>وَمَآ أَدْرَىٰكَ مَا ٱلْقَارِعَةُ<br>يَوْمَ يَكُونُ ٱلنَّاسُ كَٱلْفَرَاشِ ٱلْمَبْثُوثِ<br>وَتَكُونُ ٱلْجِبَالُ كَٱلْعِهْنِ ٱلْمَنفُوشِ`,
    translation:
      "Великое бедствие! Что такое великое бедствие? Откуда ты мог знать, что такое великое бедствие? В тот день люди разлетятся, как мотыльки, и горны станут подобными расчесанной шерсти...",
    latinName: "Al-Qāri'a",
    number: 101,
    verses: 11,
    audioUrl: "sound/101.mp3",
    tafsirTitle: "Тафсир суры Аль-Кариа",
    tafsirContent: `<p><strong>Сура "Аль-Кариа" (Великое бедствие)</strong> — 101-я сура Корана. Ниспослана в Мекке. Состоит из 11 аятов.</p>
      <p>Описание ужасов Судного Дня, когда все установившиеся порядки мира разрушатся. Люди предстанут перед Судом Аллаха, и их дела будут взвешены на Весах.</p>`,
  },
  {
    id: 113,
    arabicText: ` قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ<br>مِن شَرِّ مَا خَلَقَ<br>وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ<br>وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ<br>وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
    translation:
      "Скажи: «Прибегаю к защите Господа рассвета от зла того, что Он сотворил, от зла мрака, когда он наступает, от зла колдуний, поплевывающих на узлы, от зла завистника, когда он завидует».",
    latinName: "Al-Falaq",
    number: 113,
    verses: 5,
    audioUrl: "sound/113.mp3",
    tafsirTitle: "Тафсир суры Аль-Фаляк",
    tafsirContent: `<p><strong>Сура "Аль-Фаляк" (Рассвет)</strong> — 113-я сура Корана. Ниспослана в Мекке. Состоит из 5 аятов.</p>
      <p>Сура учит мусульманина искать защиты у Аллаха от всех видов зла: от творений Аллаха, от темноты ночи, от колдовства и от зависти людей.</p>
      <p>Одна из двух сур для ежедневной защиты (вместе с Ан-Нас).</p>`,
  },
];

let currentDailySurahIndex = 0;
let isDailyAudioPlaying = false;
let currentAudio = null;

// Инициализация
function initDailySurah() {
  currentDailySurahIndex = Math.floor(Math.random() * dailySurahs.length);
  loadDailySurah(currentDailySurahIndex);
  setupDailyListeners();
  updateDailyFavoriteButton();
}

// Загрузка суры
function loadDailySurah(index) {
  const surah = dailySurahs[index];

  // Обновляем текст
  document.getElementById("dailySurahArabic").innerHTML = surah.arabicText;
  document.getElementById("dailySurahTranslation").textContent =
    surah.translation;
  document.getElementById("dailySurahName").textContent = surah.latinName;
  document.getElementById("dailySurahNumber").textContent = surah.number;
  document.getElementById(
    "dailySurahVerses"
  ).textContent = `${surah.verses} аятов`;

  // Обновляем тафсир
  document.getElementById("tafsirModalTitle").textContent = surah.tafsirTitle;
  document.getElementById("tafsirContent").innerHTML = surah.tafsirContent;

  // Создаем новое аудио
  createNewAudio(surah.audioUrl);

  // Обновляем избранное
  updateDailyFavoriteButton();

  // Анимация
  animateDailySurahChange();
}

// Создание нового аудио элемента
function createNewAudio(url) {
  // Удаляем старое аудио если есть
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.remove();
  }

  // Создаем новое аудио
  const audio = new Audio(url);
  currentAudio = audio;

  // Настройки
  audio.preload = "metadata";
  audio.volume = 1.0;

  // События
  audio.addEventListener("loadeddata", () => {
    console.log("✅ Аудио загружено:", url);
    const audioBtn = document.getElementById("dailyAudioBtn");
    if (audioBtn) {
      audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
      audioBtn.title = "Слушать суру";
    }
  });

  audio.addEventListener("error", (e) => {
    console.error("❌ Ошибка загрузки аудио:", url, e);
    const audioBtn = document.getElementById("dailyAudioBtn");
    if (audioBtn) {
      audioBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
      audioBtn.title = "Ошибка загрузки";
    }
  });

  audio.addEventListener("ended", () => {
    console.log("⏹️ Аудио закончилось");
    const audioBtn = document.getElementById("dailyAudioBtn");
    if (audioBtn) {
      audioBtn.classList.remove("playing");
      audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    isDailyAudioPlaying = false;
  });

  // Предзагрузка
  audio.load();

  // Сбрасываем состояние кнопки
  const audioBtn = document.getElementById("dailyAudioBtn");
  if (audioBtn) {
    audioBtn.classList.remove("playing");
    audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    isDailyAudioPlaying = false;
  }
}

// Назначение обработчиков
function setupDailyListeners() {
  // Кнопка аудио
  const audioBtn = document.getElementById("dailyAudioBtn");
  if (audioBtn) {
    audioBtn.addEventListener("click", toggleAudioPlayback);
  }

  // Избранное
  const favoriteBtn = document.getElementById("dailyFavoriteBtn");
  if (favoriteBtn) {
    favoriteBtn.addEventListener("click", toggleDailyFavorite);
  }

  // Тафсир
  const tafsirBtn = document.getElementById("dailyTafsirBtn");
  if (tafsirBtn) {
    tafsirBtn.addEventListener("click", () => {
      document.getElementById("tafsirOverlay").style.display = "flex";
    });
  }

  // Случайная сура
  const randomBtn = document.getElementById("dailyRandomBtn");
  if (randomBtn) {
    randomBtn.addEventListener("click", loadRandomDailySurah);
  }

  // Закрытие тафсира
  const closeBtn = document.getElementById("closeTafsirBtn");
  const overlay = document.getElementById("tafsirOverlay");
  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => (overlay.style.display = "none"));
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.style.display = "none";
    });
  }
}

// Управление воспроизведением
function toggleAudioPlayback() {
  if (!currentAudio) {
    console.error("❌ Аудио не создано");
    return;
  }

  const audioBtn = document.getElementById("dailyAudioBtn");

  if (isDailyAudioPlaying) {
    // Пауза
    currentAudio.pause();
    audioBtn.classList.remove("playing");
    audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    isDailyAudioPlaying = false;
    console.log("⏸️ Аудио на паузе");
  } else {
    // Воспроизведение
    const playPromise = currentAudio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          audioBtn.classList.add("playing");
          audioBtn.innerHTML = '<i class="fas fa-pause"></i>';
          isDailyAudioPlaying = true;
          console.log("▶️ Аудио воспроизводится");
        })
        .catch((error) => {
          console.error("❌ Ошибка воспроизведения:", error);

          // Некоторые браузеры требуют жеста пользователя
          if (error.name === "NotAllowedError") {
            console.log(
              "🔄 Браузер требует жеста пользователя, пробуем еще раз..."
            );

            // Пробуем еще раз при следующем клике
            audioBtn.onclick = function () {
              currentAudio
                .play()
                .then(() => {
                  audioBtn.classList.add("playing");
                  audioBtn.innerHTML = '<i class="fas fa-pause"></i>';
                  isDailyAudioPlaying = true;
                })
                .catch((e) => console.error("❌ Снова ошибка:", e));
            };
          }
        });
    }
  }
}

// Случайная сура
function loadRandomDailySurah() {
  const randomBtn = document.getElementById("dailyRandomBtn");
  if (randomBtn) {
    randomBtn.style.transform = "rotate(180deg)";
    setTimeout(() => (randomBtn.style.transform = "rotate(360deg)"), 300);
    setTimeout(() => (randomBtn.style.transform = "rotate(0)"), 600);
  }

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * dailySurahs.length);
  } while (newIndex === currentDailySurahIndex && dailySurahs.length > 1);

  currentDailySurahIndex = newIndex;
  loadDailySurah(currentDailySurahIndex);
}

// Избранное
function toggleDailyFavorite() {
  const favoriteBtn = document.getElementById("dailyFavoriteBtn");
  const surah = dailySurahs[currentDailySurahIndex];

  let favorites = JSON.parse(localStorage.getItem("marifa_favorites") || "[]");
  const index = favorites.findIndex((fav) => fav.id === surah.id);

  if (index === -1) {
    favorites.push({
      id: surah.id,
      name: surah.latinName,
      date: new Date().toISOString(),
    });
    favoriteBtn.classList.add("active");
    favoriteBtn.innerHTML = '<i class="fas fa-heart"></i>';
    showDailyNotification("Добавлено в избранное");
  } else {
    favorites.splice(index, 1);
    favoriteBtn.classList.remove("active");
    favoriteBtn.innerHTML = '<i class="far fa-heart"></i>';
    showDailyNotification("Удалено из избранного");
  }

  localStorage.setItem("marifa_favorites", JSON.stringify(favorites));
}

function updateDailyFavoriteButton() {
  const favoriteBtn = document.getElementById("dailyFavoriteBtn");
  const surah = dailySurahs[currentDailySurahIndex];

  if (!favoriteBtn || !surah) return;

  const favorites = JSON.parse(
    localStorage.getItem("marifa_favorites") || "[]"
  );
  const isFavorite = favorites.some((fav) => fav.id === surah.id);

  if (isFavorite) {
    favoriteBtn.classList.add("active");
    favoriteBtn.innerHTML = '<i class="fas fa-heart"></i>';
  } else {
    favoriteBtn.classList.remove("active");
    favoriteBtn.innerHTML = '<i class="far fa-heart"></i>';
  }
}

function animateDailySurahChange() {
  const arabicText = document.getElementById("dailySurahArabic");
  const translation = document.getElementById("dailySurahTranslation");

  if (arabicText) {
    arabicText.style.opacity = "0.3";
    arabicText.style.transform = "translateY(15px) scale(0.98)";
  }

  if (translation) {
    translation.style.opacity = "0.3";
    translation.style.transform = "translateY(10px)";
  }

  setTimeout(() => {
    if (arabicText) {
      arabicText.style.transition = "all 0.5s ease";
      arabicText.style.opacity = "1";
      arabicText.style.transform = "translateY(0) scale(1)";
    }

    if (translation) {
      translation.style.transition = "all 0.5s ease";
      translation.style.opacity = "1";
      translation.style.transform = "translateY(0)";
    }
  }, 50);
}

function showDailyNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: var(--color-primary);
    color: white;
    padding: 12px 24px;
    border-radius: 24px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    z-index: 10000;
    transition: transform 0.4s ease;
    box-shadow: 0 6px 20px rgba(110, 58, 58, 0.2);
    white-space: nowrap;
  `;

  document.body.appendChild(notification);
  setTimeout(
    () => (notification.style.transform = "translateX(-50%) translateY(0)"),
    10
  );
  setTimeout(() => {
    notification.style.transform = "translateX(-50%) translateY(100px)";
    setTimeout(() => notification.remove(), 400);
  }, 2000);
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initDailySurah, 1000);
});
// ===== НОВЫЙ КОД ДЛЯ ТРЁХ БЛОКОВ (ПРОДОЛЖЕНИЕ ДАШБОРДА) =====

document.addEventListener("DOMContentLoaded", function () {
  // ===== 1. ОБЪЯВЛЕНИЯ ОТ ТАМИЛЫ =====
  
  // Отметка прочтения объявлений
  const readButtons = document.querySelectorAll('.read-btn');
  readButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const icon = this.querySelector('i');
      
      if (this.classList.contains('active')) {
        this.classList.remove('active');
        icon.className = 'far fa-check-circle';
        this.title = 'Отметить как прочитанное';
        
        // Анимация снятия отметки
        this.style.animation = 'none';
        setTimeout(() => {
          this.style.animation = '';
        }, 10);
        
        // Уведомление
        showNotification('Отметка прочтения снята', 'info');
      } else {
        this.classList.add('active');
        icon.className = 'fas fa-check-circle';
        this.title = 'Прочитано';
        
        // Анимация подтверждения
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
          this.style.transform = '';
        }, 300);
        
        // Уведомление для учителя
        const announcementTitle = this.closest('.announcement-item').querySelector('.announcement-title').textContent;
        console.log('Объявление отмечено как прочитанное:', announcementTitle);
        showNotification('Учитель получил уведомление', 'success');
      }
    });
  });

  // Раскрытие комментариев
  const commentToggles = document.querySelectorAll('.comments-toggle');
  commentToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const commentsId = this.getAttribute('data-comments');
      const commentsContent = document.getElementById(`comments-${commentsId}`);
      const chevron = this.querySelector('.fa-chevron-down');
      
      if (commentsContent.classList.contains('expanded')) {
        // Скрываем комментарии
        commentsContent.classList.remove('expanded');
        this.classList.remove('active');
        commentsContent.style.maxHeight = '0';
        commentsContent.style.padding = '0 12px';
      } else {
        // Показываем комментарии
        commentsContent.classList.add('expanded');
        this.classList.add('active');
        commentsContent.style.maxHeight = commentsContent.scrollHeight + 'px';
        commentsContent.style.padding = '15px 12px 5px';
        
        // Автофокус на поле ввода
        const textarea = commentsContent.querySelector('textarea');
        if (textarea) {
          setTimeout(() => {
            textarea.focus();
          }, 300);
        }
      }
    });
  });

  // Отправка новых комментариев
  const sendButtons = document.querySelectorAll('.send-comment-btn');
  sendButtons.forEach(button => {
    button.addEventListener('click', function() {
      const textarea = this.parentElement.querySelector('textarea');
      const commentText = textarea.value.trim();
      
      if (commentText) {
        // Получаем имя пользователя из localStorage
        const savedUser = localStorage.getItem("marifa_user");
        let userName = "Вы";
        if (savedUser) {
          try {
            const userData = JSON.parse(savedUser);
            if (userData.firstName) {
              userName = userData.firstName;
            } else if (userData.name) {
              userName = userData.name.split(' ')[0];
            }
          } catch (error) {
            console.error('Ошибка получения данных пользователя:', error);
          }
        }
        
        // Создаем новый комментарий
        const newComment = document.createElement('div');
        newComment.className = 'comment-item';
        newComment.innerHTML = `
          <div class="comment-author">
            <i class="fas fa-user-circle"></i>
            <span>${userName}</span>
          </div>
          <p class="comment-text">${commentText}</p>
        `;
        
        // Добавляем перед формой ввода
        const commentsContent = this.closest('.comments-content');
        const newCommentForm = this.parentElement;
        commentsContent.insertBefore(newComment, newCommentForm);
        
        // Очищаем поле ввода
        textarea.value = '';
        textarea.style.height = 'auto';
        
        // Анимация добавления
        newComment.style.opacity = '0';
        newComment.style.transform = 'translateY(10px)';
        setTimeout(() => {
          newComment.style.transition = 'all 0.3s ease';
          newComment.style.opacity = '1';
          newComment.style.transform = 'translateY(0)';
        }, 10);
        
        // Обновляем счетчик комментариев
        const commentsToggle = commentsContent.parentElement.querySelector('.comments-toggle');
        const countSpan = commentsToggle.querySelector('.comments-count');
        const currentCount = parseInt(countSpan.textContent) || 0;
        countSpan.textContent = `${currentCount + 1} комментари${currentCount === 0 ? 'й' : currentCount === 1 ? 'й' : 'ев'}`;
        
        // Уведомление
        showNotification('Комментарий отправлен', 'success');
        console.log('Комментарий отправлен:', commentText);
      }
    });
  });

  // Авторасширение textarea при вводе
  const commentTextareas = document.querySelectorAll('.new-comment textarea');
  commentTextareas.forEach(textarea => {
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  });

  // ===== 2. ДОГОВОР =====
  
  // Модальное окно договора
  const showContractBtn = document.querySelector('.more-rules');
  const contractModal = document.querySelector('.contract-modal-overlay');
  const closeModalBtns = document.querySelectorAll('.close-modal, .modal-close-btn');
  
  if (showContractBtn) {
    showContractBtn.addEventListener('click', function() {
      if (contractModal) {
        contractModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Анимация появления
        contractModal.style.opacity = '0';
        setTimeout(() => {
          contractModal.style.transition = 'opacity 0.3s ease';
          contractModal.style.opacity = '1';
        }, 10);
      }
    });
  }
  
  // Закрытие модального окна
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (contractModal) {
        contractModal.style.opacity = '0';
        setTimeout(() => {
          contractModal.style.display = 'none';
          document.body.style.overflow = '';
        }, 300);
      }
    });
  });
  
  // Закрытие по клику на фон
  if (contractModal) {
    contractModal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.style.opacity = '0';
        setTimeout(() => {
          this.style.display = 'none';
          document.body.style.overflow = '';
        }, 300);
      }
    });
  }

  // ===== 3. КАЛЕНДАРЬ И РАСПИСАНИЕ =====
  
  // Устанавливаем текущую дату в календаре
  function updateCalendar() {
    const currentDate = new Date();
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
                   'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    
    const currentDayEl = document.querySelector('.date-day');
    const currentMonthEl = document.querySelector('.date-month');
    const currentWeekdayEl = document.querySelector('.date-weekday');
    
    if (currentDayEl && currentMonthEl && currentWeekdayEl) {
      currentDayEl.textContent = currentDate.getDate();
      currentMonthEl.textContent = months[currentDate.getMonth()];
      currentWeekdayEl.textContent = days[currentDate.getDay()];
    }
    
    // Подсветка сегодняшнего дня в расписании
    const todayIndex = currentDate.getDay(); // 0-6, где 0 = воскресенье
    const scheduleMap = {2: 'ВТ', 4: 'ЧТ', 6: 'СБ'}; // Вторник=2, Четверг=4, Суббота=6
    
    document.querySelectorAll('.day-item').forEach(dayItem => {
      const dayName = dayItem.querySelector('.day-name').textContent;
      dayItem.classList.remove('active');
      if (scheduleMap[todayIndex] === dayName) {
        dayItem.classList.add('active');
      }
    });
    
    // Обновляем подпись в договоре с текущей датой
    updateContractSignature();
  }
  
  // Обновляем подпись в договоре с именем из регистрации
  function updateContractSignature() {
    const savedUser = localStorage.getItem("marifa_user");
    let fullName = "Ученик";
    
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        
        if (userData.name) {
          fullName = userData.name;
        } else if (userData.fullName) {
          fullName = userData.fullName;
        } else if (userData.firstName && userData.lastName) {
          fullName = userData.firstName + " " + userData.lastName;
        } else if (userData.firstName) {
          fullName = userData.firstName;
        }
      } catch (error) {
        console.error('Ошибка получения данных пользователя:', error);
      }
    }
    
    // Обновляем подпись в блоке договора
    const studentNameElement = document.querySelector('.student-name');
    if (studentNameElement) {
      studentNameElement.textContent = fullName;
    }
    
    // Обновляем подпись в модальном окне
    const modalNameElement = document.querySelector('.signature-name');
    if (modalNameElement) {
      modalNameElement.textContent = fullName;
    }
    
    // Устанавливаем текущую дату
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    
    const signatureDateElement = document.querySelector('.signature-date');
    if (signatureDateElement) {
      signatureDateElement.textContent = formattedDate;
    }
    
    const modalDateElement = document.querySelector('.signature-full-date');
    if (modalDateElement) {
      const monthsFull = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 
                         'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
      modalDateElement.textContent = `${currentDate.getDate()} ${monthsFull[currentDate.getMonth()]} ${year} года`;
    }
  }
  
  // ===== 4. ТАЙМЕР ДЛЯ ССЫЛКИ НА УРОК =====
  
  const lessonLink = document.querySelector('.lesson-link');
  const linkTimer = document.querySelector('.link-timer');
  const lessonNote = document.querySelector('.lesson-note');
  
  function updateLessonLinkTimer() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentDay = now.getDay(); // 0-6
    
    // Уроки: Вт, Чт, Сб в 19:00
    const lessonDays = [2, 4, 6]; // Вторник, Четверг, Суббота
    const lessonHour = 19;
    const lessonMinute = 0;
    
    let nextLessonDate = new Date();
    nextLessonDate.setHours(lessonHour, lessonMinute, 0, 0);
    
    // Находим следующий день с уроком
    if (!lessonDays.includes(currentDay) || 
        (currentHour > lessonHour) || 
        (currentHour === lessonHour && currentMinute >= lessonMinute)) {
      // Ищем следующий учебный день
      for (let i = 1; i <= 7; i++) {
        const nextDay = (currentDay + i) % 7;
        if (lessonDays.includes(nextDay)) {
          nextLessonDate.setDate(now.getDate() + i);
          break;
        }
      }
    } else {
      // Урок сегодня
      nextLessonDate.setDate(now.getDate());
    }
    
    const timeDiff = nextLessonDate - now;
    const minutesUntil = Math.floor(timeDiff / (1000 * 60));
    
    // Активность ссылки (за 5 минут до урока)
    if (lessonLink && linkTimer && lessonNote) {
      if (minutesUntil <= 5 && minutesUntil > 0) {
        // Ссылка активна за 5 минут до урока
        lessonLink.classList.remove('disabled');
        lessonLink.href = "#"; // В реальном приложении здесь будет ссылка на урок
        lessonLink.title = "Присоединиться к уроку";
        
        linkTimer.textContent = `${minutesUntil} мин`;
        linkTimer.style.color = '#3ddc84';
        linkTimer.style.fontWeight = '600';
        
        lessonNote.textContent = "Ссылка активна!";
        lessonNote.style.color = '#3ddc84';
      } else if (minutesUntil <= 0 && minutesUntil > -60) {
        // Урок идет сейчас (в течение часа)
        lessonLink.classList.remove('disabled');
        lessonLink.href = "#";
        lessonLink.title = "Урок идет, присоединиться";
        
        linkTimer.textContent = "Сейчас";
        linkTimer.style.color = '#ff6b6b';
        
        lessonNote.textContent = "Урок идет!";
        lessonNote.style.color = '#ff6b6b';
      } else {
        // Ссылка неактивна
        lessonLink.classList.add('disabled');
        lessonLink.href = "#";
        lessonLink.title = "Ссылка станет активной за 5 минут до урока";
        
        const hoursUntil = Math.floor(minutesUntil / 60);
        if (hoursUntil > 0) {
          linkTimer.textContent = `${hoursUntil} ч ${minutesUntil % 60} мин`;
        } else {
          linkTimer.textContent = `${minutesUntil} мин`;
        }
        linkTimer.style.color = '';
        linkTimer.style.fontWeight = '';
        
        lessonNote.textContent = "Активна за 5 мин до начала";
        lessonNote.style.color = '';
      }
    }
  }
  
  // ===== 5. ИНИЦИАЛИЗАЦИЯ =====
  
  // Инициализируем календарь и подпись
  updateCalendar();
  updateLessonLinkTimer();
  
  // Обновляем таймер каждую минуту
  setInterval(updateLessonLinkTimer, 60000);
  
  // Обновляем дату каждый день
  setInterval(updateCalendar, 3600000);
  
  // ===== 6. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
  
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `dashboard-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      background: ${type === 'success' ? '#3ddc84' : type === 'error' ? '#ff6b6b' : 'var(--color-accent)'};
      color: white;
      border-radius: 8px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 500;
      z-index: 9999;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      animation: notificationSlideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'notificationSlideOut 0.3s ease';
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
  
  // Добавляем стили для анимации уведомлений
  const notificationStyle = document.createElement('style');
  notificationStyle.textContent = `
    @keyframes notificationSlideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes notificationSlideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(notificationStyle);
  
  // ===== 7. АНИМАЦИИ ПРИ НАВЕДЕНИИ =====
  
  // Анимация при наведении на иконки комментариев
  const commentIcons = document.querySelectorAll('.comments-toggle i.fa-user');
  commentIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.2) rotate(10deg)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
  
  // Подсказка для "..." в договоре
  const moreRules = document.querySelector('.more-rules');
  if (moreRules) {
    moreRules.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
      this.style.backgroundColor = 'rgba(234, 216, 207, 0.3)';
    });
    
    moreRules.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '';
    });
    
    moreRules.title = "Нажмите, чтобы увидеть полный договор";
  }
  
  console.log('✅ Модуль трёх блоков инициализирован');
  console.log('Доступны функции: объявления, договор, календарь, таймер уроков');
});

// ===== КОНЕЦ НОВОГО КОДА =====