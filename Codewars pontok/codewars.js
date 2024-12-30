const usernameInput = document.getElementById("usernameInput");
const addUserBtn = document.getElementById("addUserBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const clearDataBtn = document.getElementById("clearDataBtn");
const cardContainer = document.getElementById("cardContainer");

let users = [];

document.addEventListener("DOMContentLoaded", () => {
const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(savedTheme);

const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
if (savedUsers.length > 0) {
    users = savedUsers;
    displayUsers();
}
});

toggleThemeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
localStorage.setItem("theme", newTheme);
});

addUserBtn.addEventListener("click", () => {
const username = usernameInput.value.trim();
if (!username) {
    alert("Please enter a username!");
    return;
}

fetch(`https://www.codewars.com/api/v1/users/${username}`)
    .then(response => {
    if (!response.ok) {
        throw new Error("User not found");
    }
    return response.json();
    })
    .then(user => {
    users.push(user);
    users.sort((a, b) => b.honor - a.honor);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
    usernameInput.value = "";
    })
    .catch(error => {
    alert(error.message);
    });
});

function displayUsers() {
cardContainer.innerHTML = "";

users.forEach(user => {
    let languages = "";
    for (let lang in user.ranks.languages) {
    if (languages !== "") {
        languages += ", ";
    }
    languages += lang;
    }

    let jsRank = "-";
    if (user.ranks.languages.javascript) {
    jsRank = user.ranks.languages.javascript.name;
    }

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <h2>${user.username}</h2>
    <p><strong>Name:</strong> ${user.name || "-"}</p>
    <p><strong>Clan:</strong> ${user.clan || "-"}</p>
    <p><strong>Honor:</strong> ${user.honor}</p>
    <p><strong>Languages:</strong> ${languages}</p>
    <p><strong>JavaScript Rank:</strong> ${jsRank}</p>
    `;
    cardContainer.appendChild(card);
});
}

clearDataBtn.addEventListener("click", () => {
users = [];
localStorage.removeItem("users");
cardContainer.innerHTML = "";
});
