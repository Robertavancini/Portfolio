const createItem = document.getElementById("createItem");
const input = document.getElementById("input");
const list = document.getElementById("list");

submit.addEventListener("click", addTask);

function addTask() {
  const taskTextValue = input.value.trim();

  if (taskTextValue === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

  // Criar <li>
  const newTask = document.createElement("li");

  // Criar <p> para o texto da tarefa
  const taskText = document.createElement("p");
  taskText.textContent = taskTextValue;

  // Criar <span> para os ícones
  const iconsSpan = document.createElement("span");

  // Criar ícone de 'done'
  const doneIcon = document.createElement("i");
  doneIcon.classList.add("fa-solid", "fa-check", "done");
  doneIcon.style.backgroundColor = "green";

  // Criar ícone de 'erase'
  const eraseIcon = document.createElement("i");
  eraseIcon.classList.add("fa-solid", "fa-trash", "erase");
  eraseIcon.style.backgroundColor = "red";

  // Evento de marcar como concluída
  doneIcon.addEventListener("click", () => {
    taskText.classList.toggle("completed");
  });

  // Evento de apagar tarefa
  eraseIcon.addEventListener("click", () => {
    list.removeChild(newTask);
  });

  // Montar a estrutura
  iconsSpan.appendChild(doneIcon);
  iconsSpan.appendChild(eraseIcon);
  newTask.appendChild(taskText);
  newTask.appendChild(iconsSpan);
  list.appendChild(newTask);

  // Limpar input
  input.value = "";
}
