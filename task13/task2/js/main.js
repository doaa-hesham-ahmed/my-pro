"use strict"

const input = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let editTask = null;

["New Task", "To Do Task"].forEach(createTask);

btn.addEventListener("click", function () {

    let text = input.value.trim();

    if (!text) {
        alert("Enter task");
        return;
    }


    if (editTask) {

        editTask.querySelector("span").textContent = text;

        editTask = null;

        btn.textContent = "Add";

    } else {

        createTask(text);

    }


    input.value = "";

});


function createTask(text) {

    let li = document.createElement("li");
    li.className =
    "list-group-item d-flex justify-content-between align-items-center";


    li.innerHTML = `
        <span>${text}</span>

        <div>
            <button class="btn text-warning edit">
                <i class="fa-solid fa-pen"></i>
            </button>

            <button class="btn text-danger delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;

    // Delete
    li.querySelector(".delete").addEventListener("click", function () {
        li.remove();
    });

    // Edit
    li.querySelector(".edit").addEventListener("click", function () {

        input.value = li.querySelector("span").textContent;

        input.focus();

        editTask = li;

        btn.textContent = "Update";

    });


    list.append(li);

}