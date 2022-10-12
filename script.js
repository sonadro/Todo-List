const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = function(todo) {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
  `;

  list.innerHTML += html;
};

// Add todos
addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); // .trim() removes whitespace at the front and back

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset(); // Resets input fields
    }
});

// Delete todos
list.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) { // Checks class-list for .delete 
        e.target.parentElement.remove(); // Removes the parent element
    }
});

// Filter todos
const filterTodos = function(term) {
    // Hide item
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term.toLowerCase()))
        .forEach((todo) => todo.classList.add("filtered"));

    // Show item
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term.toLowerCase()))
        .forEach((todo) => todo.classList.remove("filtered"));
};

// keyup in search
search.addEventListener("keyup", () => {
    const term = search.value.trim();
    filterTodos(term);
});