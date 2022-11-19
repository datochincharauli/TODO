let addTodoBtn = document.getElementById('add-btn');
let todoInput = document.getElementById('todo-input');
let list = document.getElementById('list');

addTodoBtn.addEventListener('click', ()=>{
    let todo = todoInput.value;

    let item = document.createElement('DIV');
    item.classList.add('item');

    let itemText = document.createElement('DIV');
    itemText.classList.add('itemText');
    itemText.textContent = todo;

    let editInput = document.createElement('INPUT');
    editInput.classList.add('editInput');
    editInput.classList.add('hide');
    editInput.name = 'editInput';
    editInput.type = 'text';
    editInput.value = todo;

    let editInputBtn = document.createElement('BUTTON');
    editInputBtn.textContent = 'UPDATE';
    editInputBtn.classList.add('actionBtn');
    editInputBtn.classList.add('updateBtn');
    editInputBtn.classList.add('hide');
    editInputBtn.type = 'button';

    let actionBtns = document.createElement('DIV');
    actionBtns.classList.add('actionBtns');

    let editBtn = document.createElement('BUTTON');
    editBtn.classList.add('actionBtn');
    editBtn.classList.add('editBtn');
    editBtn.textContent = 'EDIT'


    editBtn.addEventListener('click', ()=>{
        editInput.classList.remove('hide');
        itemText.classList.add('hide');
        editInputBtn.classList.remove('hide');
        editInputBtn.addEventListener('click', ()=>{
            itemText.textContent = editInput.value;
            editInput.classList.add('hide');
            itemText.classList.remove('hide');
            editInputBtn.classList.add('hide');
        });
    })
    let removeBtn = document.createElement('BUTTON');
    removeBtn.classList.add('actionBtn');
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent = 'REMOVE';

    removeBtn.addEventListener('click', ()=>{
        item.parentNode.removeChild(item);
    });

    actionBtns.append(editInputBtn);
    actionBtns.append(editBtn);
    actionBtns.append(removeBtn);
    item.append(itemText);
    item.append(editInput);
    item.append(actionBtns);
    list.append(item);

    todoInput.value = '';
});
