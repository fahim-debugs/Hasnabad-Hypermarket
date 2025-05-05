async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const res = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  document.getElementById('message').innerText = data.message;
  if (res.status === 200) {
    window.location.href = '/dashboard.html';
  }
}

async function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const res = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  document.getElementById('message').innerText = data.message;
}
