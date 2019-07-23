let rootNode = document.getElementById('root');
let addButton = document.getElementById('add-button');
let addText = document.getElementById('add-text');
onActionAdd();
function onActionAdd() {
    document.querySelectorAll('input[type="checkbox"]').forEach((i) => {
        i.addEventListener('click', (event) => {
            event.target.checked = true;
        });
    });
    document.querySelectorAll('.delete-icon').forEach((i) => {
        i.addEventListener('click', () => {
            i.parentNode.parentNode.remove();
            deactivateTry();
        });
    });
    document.querySelectorAll('.change-icon').forEach((i) => {
        i.addEventListener('click', () => {
            i.parentNode.style.display = 'none';
            i.parentNode.nextSibling.nextSibling.style.display = 'block';
        });
    });
    document.querySelectorAll('.save-icon').forEach((i) => {
        i.addEventListener('click', () => {
            let edit = i.parentNode, main = edit.previousSibling.previousSibling,
                text = edit.querySelector('input').value;
            edit.style.display = 'none';
            main.style.display = 'block';
            main.querySelector('span').innerHTML = text;
        });
    });
    [].forEach.call(document.querySelectorAll('li'), addDnDHandlers);
}
function activateAddButton() {
    if(addText.value !== "") {
        buttonToggle(1);
    } else {
        buttonToggle(0);
    }
}
function addAction() {
    let text = document.getElementById('add-text').value;
    let node = document.getElementById('action-template').cloneNode(true);
    node.querySelector('span').innerHTML = text;
    node.id = '';
    document.getElementById('list').appendChild(node);
    deactivateTry();
    onActionAdd();
}
function deactivateTry() {
    let notificaion = document.getElementById('notification');
    if(document.getElementById('list').children.length > 10){
        addText.disabled = true;
        buttonToggle(0);
        notificaion.style.display = 'block';
    } else {
        addText.disabled = false;
        buttonToggle(1);
        notificaion.style.display = 'none';
    }
}
function buttonToggle(state){
    if(state){
        addButton.style.backgroundColor = '#35B0FE';
        addButton.addEventListener('click', addAction);
        addButton.style.cursor = 'pointer';
    } else {
        addButton.style.backgroundColor = 'gray';
        addButton.removeEventListener('click', addAction);
        addButton.style.cursor = 'auto';
    }
}
let dragSrcEl = null;
function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
}
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}
function handleDrop(e) {
    e.stopPropagation();
    if (dragSrcEl !== this) {
        this.parentNode.removeChild(dragSrcEl);
        var dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin',dropHTML);
        var dropElem = this.previousSibling;
        addDnDHandlers(dropElem);
    }
    this.classList.remove('over');
    return false;
}
function addDnDHandlers(elem) {
    elem.addEventListener('dragstart', handleDragStart, false);
    elem.addEventListener('dragover', handleDragOver, false);
    elem.addEventListener('drop', handleDrop, false);
}