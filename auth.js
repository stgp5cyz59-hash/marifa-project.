// auth.js - Управление авторизацией MA'RIFA
console.log("🔐 MA'RIFA Auth загружен");

const Auth = {
  // Получить пользователя
  getUser: function () {
    try {
      const userJson = localStorage.getItem("marifa_user");
      if (!userJson) {
        console.log("ℹ️ Нет пользователя в localStorage");
        return null;
      }
      const user = JSON.parse(userJson);
      console.log("📋 Получен пользователь:", user);
      return user;
    } catch (error) {
      console.error("❌ Ошибка чтения пользователя:", error);
      return null;
    }
  },

  // Сохранить пользователя
  saveUser: function (userData) {
    try {
      localStorage.setItem("marifa_user", JSON.stringify(userData));
      console.log("💾 Пользователь сохранён:", userData);
      return true;
    } catch (error) {
      console.error("❌ Ошибка сохранения:", error);
      return false;
    }
  },

  // Проверить, авторизован ли пользователь
  isAuthenticated: function () {
    return this.getUser() !== null;
  },

  // Получить роль
  getRole: function () {
    const user = this.getUser();
    return user ? user.role : null;
  },

  // Проверить доступ к странице
  checkAccess: function (requiredRole) {
    const user = this.getUser();

    if (!user) {
      console.log("❌ Нет пользователя, доступ запрещён");
      return false;
    }

    if (requiredRole && user.role !== requiredRole) {
      console.log(
        `❌ Неправильная роль: требуется ${requiredRole}, а у пользователя ${user.role}`
      );
      return false;
    }

    console.log("✅ Доступ разрешён");
    return true;
  },

  // Выход
  logout: function () {
    localStorage.removeItem("marifa_user");
    console.log("👋 Выход из системы");
    window.location.href = "index.html";
  },
};

// Экспорт
window.Auth = Auth;
console.log("✅ MA'RIFA Auth инициализирован");
