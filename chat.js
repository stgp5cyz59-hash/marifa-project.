document.addEventListener("DOMContentLoaded", function () {
  console.log("Мессенджер загружается...");

  // Элементы DOM
  const elements = {
    membersList: document.getElementById("membersList"),
    chatMessages: document.getElementById("chatMessages"),
    messageInput: document.getElementById("messageInput"),
    sendMessage: document.getElementById("sendMessage"),
    themeToggle: document.getElementById("themeToggle"),
    onlineCount: document.getElementById("onlineCount"),
    chatTitle: document.getElementById("chatTitle"),
    chatStatus: document.getElementById("chatStatus"),
  };

  // Состояние приложения
  const state = {
    currentChat: "group",
    nightTheme: localStorage.getItem("nightTheme") === "true",
  };

  // Инициализация
  function init() {
    applyTheme();
    loadMembers();
    loadChat(state.currentChat);
    setupEventListeners();
  }

  // Применение темы
  function applyTheme() {
    if (!elements.themeToggle) return;
    if (state.nightTheme) {
      document.body.classList.add("night-theme");
    } else {
      document.body.classList.remove("night-theme");
    }
  }

  // Загрузка участников ИЗ БАЗЫ ДАННЫХ
  async function loadMembers() {
    try {
      const response = await fetch("http://localhost:3000/api/students");
      const dbStudents = await response.json();

      elements.membersList.innerHTML = "";

      const groupElement = createGroupElement();
      elements.membersList.appendChild(groupElement);

      const teacher = {
        id: 100,
        name: "Устаз Тамил",
        role: "teacher",
        avatar: "Т",
        online: true,
        color: "#8a4a5f",
      };
      elements.membersList.appendChild(createMemberElement(teacher, true));

      dbStudents.forEach(function (student) {
        const studentFormatted = {
          id: student.id,
          name: student.name,
          avatar: student.name.charAt(0).toUpperCase(),
          online: true,
          lastSeen: "недавно",
          color: student.color || "#3498DB",
        };
        elements.membersList.appendChild(
          createMemberElement(studentFormatted, false),
        );
      });

      if (elements.onlineCount)
        elements.onlineCount.textContent = dbStudents.length + 1 + " в сети";
    } catch (error) {
      console.error("Ошибка загрузки:", error);
      elements.membersList.innerHTML =
        '<div style="padding: 20px; color: red;">Сервер выключен</div>';
    }
  }

  // Создание группового чата
  function createGroupElement() {
    const div = document.createElement("div");
    div.className = "member-card active";

    div.innerHTML =
      '<div class="member-avatar teacher" style="background: #9B59B6">' +
      '<span><i class="fas fa-users"></i></span><div class="online-dot"></div></div>' +
      '<div class="member-info"><h4>Групповой чат <i class="fas fa-comments"></i></h4>' +
      '<p class="member-status">Общий чат • Онлайн</p></div>';

    div.addEventListener("click", function () {
      switchChat("group");
      document.querySelectorAll(".member-card").forEach(function (card) {
        card.classList.remove("active");
      });
      div.classList.add("active");
    });
    return div;
  }

  // Создание карточки ученика
  function createMemberElement(user, isTeacher) {
    const div = document.createElement("div");
    const roleClass = isTeacher ? "teacher" : "student";

    div.className = "member-card " + roleClass;

    const status = user.online ? "Онлайн" : "Был(а) недавно";
    const crown = isTeacher ? '<i class="fas fa-crown"></i>' : "";
    const onlineDot = user.online ? '<div class="online-dot"></div>' : "";

    div.innerHTML =
      '<div class="member-avatar ' +
      roleClass +
      '" style="background: ' +
      user.color +
      '">' +
      "<span>" +
      user.avatar +
      "</span>" +
      onlineDot +
      "</div>" +
      '<div class="member-info">' +
      "<h4>" +
      user.name +
      " " +
      crown +
      "</h4>" +
      '<p class="member-status">' +
      status +
      "</p></div>";

    div.addEventListener("click", function () {
      switchChat(user.name.toLowerCase());
      document.querySelectorAll(".member-card").forEach(function (card) {
        card.classList.remove("active");
      });
      div.classList.add("active");
    });

    return div;
  }

  // Переключение чата
  function switchChat(chatId) {
    state.currentChat = chatId;

    if (chatId === "teacher") {
      if (elements.chatTitle) elements.chatTitle.textContent = "Устаз Тамил";
      if (elements.chatStatus) elements.chatStatus.textContent = "Онлайн";
    } else if (chatId === "group") {
      if (elements.chatTitle) elements.chatTitle.textContent = "Групповой чат";
      if (elements.chatStatus) elements.chatStatus.textContent = "Общий чат";
    } else {
      if (elements.chatTitle) elements.chatTitle.textContent = chatId;
      if (elements.chatStatus) elements.chatStatus.textContent = "Онлайн";
    }
    loadChat(chatId);
  }

  // Загрузка сообщений ИЗ БАЗЫ ДАННЫХ
  function loadChat(chatId) {
    if (!elements.chatMessages) return;
    elements.chatMessages.innerHTML =
      '<div class="loading">Загрузка сообщений...</div>';

    fetch("http://localhost:3000/api/messages/" + chatId)
      .then(function (res) {
        return res.json();
      })
      .then(function (messages) {
        elements.chatMessages.innerHTML = "";

        if (messages.length === 0) {
          elements.chatMessages.innerHTML =
            '<div style="text-align:center; padding: 20px; color: gray;">Нет сообщений. Напишите первым!</div>';
          return;
        }

        messages.forEach(function (msg) {
          const savedUser = localStorage.getItem("marifa_user");
          const currentUser = savedUser ? JSON.parse(savedUser) : { id: 1 };
          const isMine = msg.sender_id === currentUser.id;

          addMessageToChat({
            id: msg.id,
            sender: isMine ? "current" : "other",
            text: msg.text,
            time: msg.time,
          });
        });
        scrollToBottom();
      })
      .catch(function (err) {
        elements.chatMessages.innerHTML =
          '<div style="color: red; text-align: center;">Ошибка загрузки (сервер выключен)</div>';
      });
  }

  // Добавление сообщения на экран
  function addMessageToChat(data) {
    const message = createMessageElement(data);
    elements.chatMessages.appendChild(message);
    setTimeout(function () {
      message.style.opacity = "1";
      message.style.transform = "translateY(0)";
    }, 10);
  }

  // Создание HTML для сообщения
  function createMessageElement(data) {
    const div = document.createElement("div");
    const isCurrentUser = data.sender === "current";

    div.className = "message " + (isCurrentUser ? "outgoing" : "incoming");

    const msgContent = '<div class="message-content">';
    const msgText = '<div class="message-text">' + data.text + "</div></div>";
    const msgTime = '<div class="message-time">' + data.time + "</div>";

    div.innerHTML = msgContent + msgText + msgTime;

    div.style.opacity = "0";
    div.style.transform = "translateY(10px)";
    div.style.transition = "all 0.3s ease";
    return div;
  }

  // ОТПРАВКА СООБЩЕНИЯ В БАЗУ
  function sendMessage() {
    if (!elements.messageInput) return;
    const input = elements.messageInput;
    const text = input.textContent.trim();

    if (!text) return;

    const savedUser = localStorage.getItem("marifa_user");
    const user = savedUser ? JSON.parse(savedUser) : { id: 1 };

    const msgData = {
      sender_id: user.id,
      receiver_id: state.currentChat,
      text: text,
      time: getCurrentTime(),
    };

    fetch("http://localhost:3000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msgData),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data.success) {
          addMessageToChat({
            id: data.id,
            sender: "current",
            text: text,
            time: msgData.time,
          });
          scrollToBottom();
        }
      })
      .catch(function (err) {
        console.error("Ошибка отправки:", err);
      });

    input.textContent = "";
    input.focus();
  }

  // Обработчики событий
  function setupEventListeners() {
    if (elements.sendMessage) {
      elements.sendMessage.addEventListener("click", sendMessage);
    }

    if (elements.messageInput) {
      elements.messageInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          sendMessage();
        }
      });
    }

    if (elements.themeToggle) {
      elements.themeToggle.addEventListener("click", function () {
        state.nightTheme = !state.nightTheme;
        localStorage.setItem("nightTheme", state.nightTheme);
        applyTheme();
      });
    }
  }

  // Время
  function getCurrentTime() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, "0");
    const m = now.getMinutes().toString().padStart(2, "0");
    return h + ":" + m;
  }

  // Прокрутка вниз
  function scrollToBottom() {
    setTimeout(function () {
      if (elements.chatMessages) {
        elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
      }
    }, 100);
  }

  // Запуск мессенджера
  init();
});
