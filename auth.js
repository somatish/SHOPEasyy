// ══════════════════════════════════════════
// AUTHENTICATION - LOCAL STORAGE
// ══════════════════════════════════════════

// Initialize users from localStorage
function getUsers() {
  const users = localStorage.getItem('shopEayyUsers');
  return users ? JSON.parse(users) : {};
}

function saveUsers(users) {
  localStorage.setItem('shopEayyUsers', JSON.stringify(users));
}

// Check if user is logged in
function isLoggedIn() {
  return localStorage.getItem('shopEayyLoggedIn') === 'true';
}

function setLoggedIn(mobile, email) {
  localStorage.setItem('shopEayyLoggedIn', 'true');
  localStorage.setItem('shopEayyCurrentUser', JSON.stringify({ mobile, email }));
}

function logout() {
  localStorage.removeItem('shopEayyLoggedIn');
  localStorage.removeItem('shopEayyCurrentUser');
  window.location.href = 'auth.html';
}

// ──────────────────────────────────────────
// SWITCH BETWEEN LOGIN & SIGNUP TABS
// ──────────────────────────────────────────
function switchTab(tab) {
  // Toggle forms
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginTab = document.getElementById('loginTab');
  const signupTab = document.getElementById('signupTab');

  if (tab === 'login') {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    clearMessages();
  } else {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    clearMessages();
  }
}

// Clear all messages
function clearMessages() {
  const messages = document.querySelectorAll('.form-message');
  messages.forEach(msg => {
    msg.classList.remove('show', 'success', 'error', 'info');
    msg.textContent = '';
  });
}

// Show message
function showMessage(elementId, message, type = 'info') {
  const messageEl = document.getElementById(elementId);
  messageEl.textContent = message;
  messageEl.className = `form-message show ${type}`;
  setTimeout(() => {
    messageEl.classList.remove('show');
  }, 4000);
}

// ──────────────────────────────────────────
// SIGNUP HANDLER
// ──────────────────────────────────────────
function handleSignup(e) {
  e.preventDefault();

  const name = document.getElementById('signupName').value.trim();
  const mobile = document.getElementById('signupMobile').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirm').value;

  // Validate
  if (!name || !mobile || !email || !password || !confirm) {
    showMessage('signupMessage', '❌ Please fill all fields', 'error');
    return;
  }

  if (password !== confirm) {
    showMessage('signupMessage', '❌ Passwords do not match', 'error');
    return;
  }

  if (password.length < 6) {
    showMessage('signupMessage', '❌ Password must be at least 6 characters', 'error');
    return;
  }

  if (!/^\d{10}$/.test(mobile)) {
    showMessage('signupMessage', '❌ Mobile number must be 10 digits', 'error');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showMessage('signupMessage', '❌ Invalid email format', 'error');
    return;
  }

  // Check if user already exists
  const users = getUsers();
  const userKey = mobile + '|' + email;

  if (users[userKey]) {
    showMessage('signupMessage', '❌ User already exists with this email or mobile', 'error');
    return;
  }

  // Check if mobile or email is already registered
  for (let key in users) {
    const [existingMobile, existingEmail] = key.split('|');
    if (existingMobile === mobile || existingEmail === email) {
      showMessage('signupMessage', '❌ This email or mobile is already registered', 'error');
      return;
    }
  }

  // Create new user
  const newUser = {
    name,
    mobile,
    email,
    password: btoa(password), // Simple encoding (not secure, for demo only)
    createdAt: new Date().toISOString()
  };

  users[userKey] = newUser;
  saveUsers(users);

  // Success message
  showMessage('signupMessage', '✅ Account created successfully! Switching to login...', 'success');

  // Clear form
  document.getElementById('signupForm').reset();

  // Redirect to login after 2 seconds
  setTimeout(() => {
    switchTab('login');
    document.getElementById('loginEmail').value = mobile;
  }, 1500);
}

// ──────────────────────────────────────────
// LOGIN HANDLER
// ──────────────────────────────────────────
function handleLogin(e) {
  e.preventDefault();

  const emailOrMobile = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  // Validate
  if (!emailOrMobile || !password) {
    showMessage('loginMessage', '❌ Please enter email/mobile and password', 'error');
    return;
  }

  // Get all users
  const users = getUsers();
  let foundUser = null;
  let foundKey = null;

  // Search for user by email or mobile
  for (let key in users) {
    const [mobile, email] = key.split('|');
    const user = users[key];

    if (mobile === emailOrMobile || email === emailOrMobile) {
      foundUser = user;
      foundKey = key;
      break;
    }
  }

  // User not found
  if (!foundUser) {
    showMessage('loginMessage', '❌ User not found. Please sign up first', 'error');
    return;
  }

  // Wrong password
  const decodedPassword = atob(foundUser.password);
  if (decodedPassword !== password) {
    showMessage('loginMessage', '❌ Wrong password', 'error');
    return;
  }

  // Successful login
  showMessage('loginMessage', '✅ Login successful! Redirecting...', 'success');
  setLoggedIn(foundUser.mobile, foundUser.email);

  // Disable button
  const loginBtn = document.querySelector('#loginForm .auth-btn');
  loginBtn.disabled = true;
  loginBtn.innerHTML = '⏳ Redirecting...';

  // Redirect to main site
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1500);
}

// ──────────────────────────────────────────
// INITIALIZATION
// ──────────────────────────────────────────

// Check if user is already logged in
window.addEventListener('DOMContentLoaded', () => {
  if (isLoggedIn()) {
    // Redirect to main site if already logged in
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 500);
  }
});

// Demo data (optional - add sample users for testing)
function addDemoUser() {
  const users = getUsers();
  const demoKey = '9876543210|demo@shopeasyy.com';

  if (!users[demoKey]) {
    users[demoKey] = {
      name: 'Demo User',
      mobile: '9876543210',
      email: 'demo@shopeasyy.com',
      password: btoa('demo123'), // Password: demo123
      createdAt: new Date().toISOString()
    };
    saveUsers(users);
    console.log('✅ Demo user added - Email: demo@shopeasyy.com, Password: demo123');
  }
}

// Uncomment to add demo user on first load
addDemoUser();
