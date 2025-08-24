// Load existing users from localStorage
let users = JSON.parse(localStorage.getItem("bigback_users")) || [];

const registerForm = document.getElementById("registerForm");
const usersList = document.getElementById("usersList");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Add new user
  users.push({ name, email, dollars: 0 });
  saveUsers();
  registerForm.reset();
  loadUsers();
});

function loadUsers() {
  usersList.innerHTML = users
    .map(
      (u, i) => `
      <p>
        ${u.name} — 💵 $${u.dollars}
        <button onclick="addDollars(${i})">+1</button>
      </p>`
    )
    .join("");
}

function addDollars(index) {
  users[index].dollars++;
  saveUsers();
  loadUsers();
}

function saveUsers() {
  localStorage.setItem("bigback_users", JSON.stringify(users));
}

loadUsers();
