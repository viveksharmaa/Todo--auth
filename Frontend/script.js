const API = "http://localhost:5000/api";

// SIGNUP
async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  alert(data.msg || "Signup successful");
  window.location.href = "login.html";
}

// LOGIN
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } else {
    alert("Login failed");
  }
}

// GET TODOS (Protected)
async function getTodos() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/todos`, {
    headers: {
      Authorization: token
    }
  });

  const todos = await res.json();

  const list = document.getElementById("todos");
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.innerText = todo.title;
    list.appendChild(li);
  });
}

// LOGOUT
function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}