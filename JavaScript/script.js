const taskInput = document.getElementById("taskInput") ;

const addTaskBtn = document.getElementById("addTask") ;

const taskList = document.getElementById("taskList") ;

const clearAll = document.getElementById("clearAll") ;

const groupList = document.getElementById("groupList") ;

var task = "undone task ";

var done = "task done ";

var i = 0;
var j = 0;

// La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et

//nouvelles lignes) au début et à la fin d'une chaîne.


addTaskBtn.addEventListener("click", addTask);


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
// Sert à ajouter une tâches et les multiples boutons venant avec elle
function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText !==""){

    const listItem = document.createElement("li");

    listItem.textContent = taskText;

    taskList.appendChild(listItem);

    taskInput.value = "";
    // Bouton compléter sert à mettre une barre entre les lettres de la tâche relié au bouton, signalant que celle-ci a été complété
    const doneBtn = document.createElement("img");

    doneBtn.setAttribute("src", "../img/icons8-checkmark-50.png");
    doneBtn.setAttribute('height', '18px');
    doneBtn.setAttribute('width', '18px');

    listItem.appendChild(doneBtn);

    doneBtn.addEventListener("click", () => {
        if(listItem.id == ""){
            listItem.id = "taskDone"
        }
        else(
            listItem.id = ""
            )});
        
    // Bouton modifier sert à modifier la tâche relié au bouton
    const editBtn = document.createElement("img");

    editBtn.setAttribute("src", "../img/icons8-edit-file-50.png");
    editBtn.setAttribute('height', '18px');
    editBtn.setAttribute('width', '18px');

    listItem.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
        taskInput.value = listItem.textContent
        listItem.remove()
    });
    // Bouton supprimer sert à supprimer la tâche relié au bouton
    const deleteBtn = document.createElement("img");

    deleteBtn.setAttribute("src", "../img/icons8-delete-60.png");
    deleteBtn.setAttribute('height', '18px');
    deleteBtn.setAttribute('width', '18px');

    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {

        listItem.remove();

    });

    // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau noeud ou repositionner un

    //noeud existant en tant que dernier enfant d'un noeud parent particulier.

    
    }
    else{
        alert("Veuillez entrer une tâche valide.");
    }

// Ajoute les tâches dans le localstorage avec un nombre suprérieur au dernier
localStorage.setItem(task.concat(i), (taskText), i++)

clearAll.addEventListener("click", () => {
    localStorage.clear()
})
}