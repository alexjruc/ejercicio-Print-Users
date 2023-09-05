const users = [
	{
		name: "brayan muñoz",
		email: "brayan@gmail.com",
		hobbies: ["pintar", "correr", "aprender", "enseñar"],
	},
	{
		name: "Hayder",
		email: "hayderarenas0206@gmail.com",
		hobbies: ["jugar futbol", "jugar free :v", "jugar play", "deportes"],
	},
	{
		name: "sergio",
		email: "sergio@academlo.com",
		hobbies: ["jugar futbol", "Entre muchas mas"],
	},
	{
		name: "diana",
		email: "dimaceri27@gmail.com",
		hobbies: ["música", "bailar", "naturaleza"],
	},
	{
		name: "Camilo Martinez",
		email: "camiloestebam@gmail.com",
		hobbies: ["musica", "leer", "bike"],
	},
	{
		name: "John",
		email: "johnrau@gmail.com",
		hobbies: ["correr", "jugar play", "ir al cine"],
	},
	{
		name: "Matias",
		email: "matias@correo.com",
		hobbies: ["comer", "leer", "lolcito"],
	},
	{
		name: "Andrés Parra",
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
		email: "kdavidh2002@gmail.com",
		hobbies: ["ciclismo", "jugar warzone"],
	},
	{
		name: "Luis Mota",
		email: "madbroxz@outlook.com",
		hobbies: ["Videojuegos", "Programar", "escuchar musica"],
	},
];



function printHobbies(hobbies) {
	let htmlHobbies = "";

	for (const hobbie of hobbies) {
		htmlHobbies += `<li>${hobbie}</li>`;
	}

	return htmlHobbies;
}


function printUsers(users) {
    let htmlUser = ""
    
    for (const user of users) {
        htmlUser += `<div class="user">
                        <h2>${user.name}</h2>
                        <h4>Email: ${user.email}</h4>
                        <ul class="usersHobbies"> 
                            <b>Mis hobbies : </b>
                            ${printHobbies(user.hobbies)}
                        </ul>
                    </div>`;
        }
    
    return htmlUser
}

const allUsers = document.querySelector(".container_users")
allUsers.innerHTML = printUsers(users)
