const projects = [
    {name: "Project 1, GamerPatch"},
    {name: "Project 2, ToDo App"},
    {name: "Project 3, Calculator"}
];


const cardContainer = document.getElementById("card-container");


// Create a card template from a project
function createCard(project) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<p>This card should display: ${project.name}</p>`;

    return card;   
}

for (let i = 0; i < projects.length; i++) {
    const newCard = createCard(projects[i]);
    cardContainer.appendChild(newCard);
}