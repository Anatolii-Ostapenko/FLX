const maxNumberOfItems = 10;
const zeroItems = 0;
let arrayActions = [];
let addButton = document.getElementById('add-action');
let inputField = document.getElementById('input-field');
let counter = 0;
let dragSrcEl = null;

addButton.style.color = '#808080';

let rootElement = document.getElementById('list');
inputField.addEventListener('keyup', ifEmpty);

function ifEmpty() {
    if (inputField.value.length > zeroItems) {
        addButton.addEventListener('click', addAction);
        addButton.style.color = '#000000';
    } else {
        addButton.style.color = '#808080';
        addButton.removeEventListener('click', addAction);
    }
}

function addAction() {
    if (counter < maxNumberOfItems) {
        createListItem();
        inputField.value = '';
        counter++;
    } else {
       alert('Maximum item per list are created!')
    }
    addButton.style.color = '#808080';
    addButton.removeEventListener('click', addAction);
}

function createListItem() {
    let listItem = document.createElement('li');
    let listItemCheckbox = document.createElement('input');
    let listItemText = document.createTextNode(inputField.value)
    let listItemIcon = document.createElement('i');

    listItem.setAttribute('class', 'listItem')
    listItem.setAttribute('draggable', true);
    listItemCheckbox.setAttribute('type', 'checkbox');
    listItemCheckbox.setAttribute('class', 'check');

    listItemIcon.setAttribute('class', 'material-icons');
    listItemIcon.innerText = 'delete';

    listItem.appendChild(listItemCheckbox);
    listItem.appendChild(listItemText);
    listItem.appendChild(listItemIcon);

    rootElement.appendChild(listItem);

    addHandlers(listItem);
}
function remove(item) {
    rootElement.removeChild(item);
    counter--;
}

function disableIfChecked(listElement) {
    let checkBox = listElement.querySelector('.check');
    if (checkBox.checked === true) {
        checkBox.disabled = true
    }
}

function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
    this.classList.add('dragElem');
}
function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    this.classList.add('over');

    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragLeave(e) {
    this.classList.remove('over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (dragSrcEl !== this) {
        this.parentNode.removeChild(dragSrcEl);
        let dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin', dropHTML);
        let dropElem = this.previousSibling;
        addHandlers(dropElem);
    }
    this.classList.remove('over');
    return false;
}

function handleDragEnd(e) {
    this.classList.remove('over');
}

function addHandlers(elem) {
    elem.addEventListener('dragstart', handleDragStart, false);
    elem.addEventListener('dragover', handleDragOver, false);
    elem.addEventListener('dragleave', handleDragLeave, false);
    elem.addEventListener('drop', handleDrop, false);
    elem.addEventListener('dragend', handleDragEnd, false);

    let deleteButton = elem.querySelector('i');
    deleteButton.addEventListener('click', function () {
        remove(elem)
    });

    let checkbox = elem.querySelector('.check');
    checkbox.addEventListener('click', function () {
        disableIfChecked(elem)
    });
}