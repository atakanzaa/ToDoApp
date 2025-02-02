window.onload = function () {
    const addForm = document.querySelector('.add');
    const list = document.querySelector('.todos');
    const search = document.querySelector('.search input');

    const generateTemplate = todo => {
        const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;
        list.innerHTML += html;

    }

    addForm.addEventListener('submit', e => {
        e.preventDefault();

        const todo = addForm.add.value.trim(); //ismi add olan şeye ulaşıyoruz.
        if (todo.length > 0) {
            generateTemplate(todo);
            addForm.reset();
        }

    })

    list.addEventListener('click', e => {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }

    })
const filterTodos = term =>{
    Array.from(list.children).filter(todo => !todo.textContent.includes(term))
    .forEach(todo=>todo.classList.add('filtered'));

    Array.from(list.children).filter(todo => todo.textContent.includes(term))
    .forEach(todo=>todo.classList.add('filtered'));


}
    search.addEventListener('keyup', () => {
        const term = search.value.trim().toLowerCase();
        filterTodos(term); 
    })

}


