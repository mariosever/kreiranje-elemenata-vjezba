const user = [
  {
    name: "Ivo Ivić",
    role: "student",
    image: "person.png",
  },
];

const userDiv = document.getElementById("user");

const avatar = document.createElement("img");
avatar.className = "avatar";
avatar.src = user[0].image;

const name = document.createElement("p");
name.className = "user-name";
name.textContent = user[0].name;

const role = document.createElement("p");
role.className = "user-role";
role.textContent = user[0].role;

userDiv.appendChild(avatar);
userDiv.appendChild(name);
userDiv.appendChild(role);
