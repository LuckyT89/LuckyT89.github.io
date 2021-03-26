const projects = [
    {name: "Gamer Patch", description: "A cool site to see the lastest patch notes on popular video games. Built with PHP, Bootstrap, and MySQL.", siteURL: "http://gamerpatch.net/", githubURL: "https://github.com/LuckyT89/gamer-patch"},
    {name: "To Do App", description: "Keep track of things you need to do on your list that are persistently saved to a database. Built with Node and MongoDB", siteURL: "https://project4-nodtodo.herokuapp.com/todo", githubURL: "https://github.com/LuckyT89/Project4-NodeTodo"},
    {name: "Calculator", description: "Perform simple calculations on this app designed to look like the classic iPhone calculator. Built with HTML, CSS, and JavaScript.", siteURL: "https://calculator-7f038.web.app/", githubURL: "https://github.com/LuckyT89/CalculatorApp"}
];


const cardContainer = document.getElementById("card-container");


// Create a card template from a project
function createCard(project) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = 
    `<h4>${project.name}</h4>
    <p>${project.description}</p>
    <a href='${project.siteURL}'>View site</a>
    <a href='${project.githubURL}'>GitHub</a>`;

    return card;   
}

for (let i = 0; i < projects.length; i++) {
    const newCard = createCard(projects[i]);
    cardContainer.appendChild(newCard);
}