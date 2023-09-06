const users = [
	{
		name: "brayan muñoz",
		age: 25,
		email: "brayan@gmail.com",
		hobbies: ["pintar", "correr", "aprender", "enseñar"],
	},
	{
		name: "Hayder",
		age: 20,
		email: "hayderarenas0206@gmail.com",
		hobbies: ["jugar futbol", "jugar free :v", "jugar play", "deportes"],
	},
	{
		name: "sergio",
		age: 30,
		email: "sergio@academlo.com",
		hobbies: ["jugar futbol", "Entre muchas mas"],
	},
	{
		name: "diana",
		age: 29,
		email: "dimaceri27@gmail.com",
		hobbies: ["música", "bailar", "naturaleza"],
	},
	{
		name: "Camilo Martinez",
		age: 37,
		email: "camiloestebam@gmail.com",
		hobbies: ["musica", "leer", "bike"],
	},
	{
		name: "John",
		age: 40,
		email: "johnrau@gmail.com",
		hobbies: ["correr", "jugar play", "ir al cine"],
	},
	{
		name: "Matias",
		age: 45,
		email: "matias@correo.com",
		hobbies: ["comer", "leer", "lolcito"],
	},
	{
		name: "Andrés Parra",
		age: 24,
		email: "anphillip7@gmail.com",
		hobbies: [
			"estudiar idiomas",
			"pasear",
			"cocinar",
			"programar",
			"leer",
			"jugar videojuegos",
			"escuchar musica",
		],
	},
	{
		name: "David",
		age: 32,
		email: "kdavidh2002@gmail.com",
		hobbies: ["ciclismo", "jugar warzone"],
	},
	{
		name: "Luis Mota",
		age: 35,
		email: "madbroxz@outlook.com",
		hobbies: ["Videojuegos", "Programar", "escuchar musica"],
	},
];

let cloneUsers = structuredClone(users)


function printHobbies(hobbies) {
	let htmlHobbies = "";

	for (const hobbie of hobbies) {
		htmlHobbies += `<li>${hobbie}</li>`;
	}

	return htmlHobbies;
}


function printUsers(arr) {
    let htmlUser = ""
    
    for (const user of arr) {
        htmlUser += `<div class="user">
                        <h3><span>${user.name}</span> - ${user.age} años</h3>
                        <h4>Email: ${user.email}</h4>
                        <ul class="usersHobbies"> 
                            <b>Hobbies : </b>
							${printHobbies(user.hobbies)}
                        </ul>
                    </div>`;
        }
    
	const allUsers = document.querySelector(".container_users")
	allUsers.innerHTML = htmlUser
}



function main() {
	printUsers(cloneUsers);

	document.querySelector("#options").addEventListener("click", function (e) {
		if (e.target.classList.contains("btn--minAge")) {
			cloneUsers.sort((a, b) => a.age - b.age)
			printUsers(cloneUsers);
		}
		if (e.target.classList.contains("btn--maxAge")) {
			cloneUsers.sort((a, b) => b.age - a.age)
			printUsers(cloneUsers);
		}
		if (e.target.classList.contains("btn--orderAZ")) {
			cloneUsers.sort((a, b) => a.name.localeCompare(b.name))
			printUsers(cloneUsers);
		}
		if (e.target.classList.contains("btn--orderZA")) {
			cloneUsers.sort((a, b) => b.name.localeCompare(a.name))
			printUsers(cloneUsers);
		}
		if (e.target.classList.contains("btn--reset")) {
			printUsers(users);
		}
	});
}

window.addEventListener("load", main);