const rootNode = document.getElementById('root');
const zero = 0
const defaultId = 1;

function init(){
    window.onhashchange = locationHashChanged;

    location.hash = '#/main';
    setLocalStorage();
   
    locationHashChanged();
}
 function setLocalStorage(){
    if(!localStorage.getItem('list')){
        localStorage.setItem('list', JSON.stringify([]));
    }
}
function updateItem(id, val, isDone){
    let list = localStorage.getItem('list');
    let items = JSON.parse(list);
    let item = items.filter(el => {
        return el.id === parseInt(id);
    })
    item[zero].description = val === undefined ? item[zero].description : val;
    item[zero].isDone = isDone === undefined ? item[zero].isDone : isDone;

    localStorage.setItem('list', JSON.stringify(items));
}
function addNewItem(description){
    let list = localStorage.getItem('list');
    let items = JSON.parse(list);
    let lastElement = items[items.length - 1];

    let id = lastElement === undefined ? defaultId : lastElement.id + 1;

    items.push({ isDone: false, id: id, description: description });

    localStorage.setItem('list', JSON.stringify(items));
}
function deleteElement(id){
    let list = localStorage.getItem('list');
    let items = JSON.parse(list);
    let newItems = items.filter(i => {
        return i.id !== parseInt(id);
    })
    
    localStorage.setItem('list', JSON.stringify(newItems));
}
function locationHashChanged() {  
    let page = location.hash.replace('#/', '');

    if (page === 'main') {  
        changePage(page); 
        renderMain();
    } else if (page === 'add') {  
        changePage(page); 
        renderAdd();
    } else if (page.indexOf('modify/') === zero) {  
        changePage('modify'); 
        let elementId = parseInt(page.replace('modify/:', ''));
        renderModify(elementId);
    }  
  }  
  function getList(){
    let list = JSON.parse(localStorage.getItem('list'));
    let notDone = list.filter(el => {
        return el.isDone === false
    })
    notDone = notDone.sort(function(a, b){
        return a.id - b.id;
    })

    let done = list.filter(el => {
        return el.isDone === true
    })
    done = done.sort(function(a, b){
        return a.id - b.id;
    })
    let result = notDone.concat(done);
    return result;
  }
  function changePage(page){
    rootNode.innerHTML = document.getElementById(page).innerHTML;
  }
  function renderMain(){
    let title = rootNode.querySelector('.todo-is-empty');
    let list = rootNode.querySelector('.list');
    let addTaskButton = rootNode.querySelector('.add-task');

    let listToRender = getList();
    
    if(listToRender.length > zero){
        title.style.display = 'none'
    } else{
        title.style.display = 'block' 
    }

    let html = '';
    
    listToRender.forEach(el => {
        let checked = '';
        if(el.isDone){
            checked = "checked='checked'"
        }
        html += '<li><input type=checkbox ' + checked + ' data-id="' + el.id + 
        '" class="mark-done"/><span data-id="' + el.id + '" class="edit-todo">' +
        el.description + '</span><button class="delete"  data-id="' + el.id + '">X</button></li>';
    });

    list.innerHTML = html;

    let deleteButtons = rootNode.querySelectorAll('.delete');
    let editButtons = rootNode.querySelectorAll('.edit-todo');
    let doneButtons = rootNode.querySelectorAll('.mark-done');
    deleteButtons.forEach(el => {
        el.addEventListener('click', () => {
            deleteElement(el.dataset.id);
            renderMain();
        })
    })
    editButtons.forEach(el => {
        el.addEventListener('click', () => {
            gotToPage('modify/:' + el.dataset.id);
        })
    })
    doneButtons.forEach(el => {
        el.addEventListener('change', function(){
            updateItem(el.dataset.id, undefined, this.checked);
            renderMain();
        })
    })

    addTaskButton.addEventListener('click', function(){
        gotToPage('add');
    })
  }

  function renderAdd(){
    let description = rootNode.querySelector('.description');
    let cancel = rootNode.querySelector('.cancel');
    let save = rootNode.querySelector('.save');

    save.addEventListener('click', function(){
        if(description.value.length > zero){
            addNewItem(description.value);
            gotToPage('main')
        }
    })

    cancel.addEventListener('click', function(){
        gotToPage('main')
     })
  }

  function renderModify(id){
    let items = getList();
    let item = items.filter(el => {
        return el.id === id;
    })
    let description = rootNode.querySelector('.description');
    let cancel = rootNode.querySelector('.cancel');
    let save = rootNode.querySelector('.save');

    description.value = item[zero].description;

    save.addEventListener('click', function(){
        let val = description.value;
        
        if(val.length > zero){
            updateItem(id, val);
            gotToPage('main')
        }
    })

    cancel.addEventListener('click', function(){
        gotToPage('main')
     })
  }

  function gotToPage(page){
   location.hash = '#/' + page;
  }
  init();
