let rightList = document.querySelector('#list-right');
let leftListItems = document.querySelectorAll('#list-left li');

leftListItems.forEach(x=>{
    x.addEventListener('dragstart', function(e){
        // console.log('start');
        // console.log(e);
        e.dataTransfer.setData('dataId', x.getAttribute('data-id'));
    })
})

rightList.addEventListener('dragover', function(e){
    e.preventDefault();
})

rightList.addEventListener('drop', function(e){
    let dataId = e.dataTransfer.getData('dataId');
    this.appendChild(document.querySelector('[data-id="'+dataId+'"]'))
})


let leftList = document.querySelector('#list-left');
let rightListItems = document.querySelectorAll('#list-right li');

rightListItems.forEach(x=>{
    x.addEventListener('dragstart', function(e){
        e.dataTransfer.setData('dataId', x.getAttribute('data-id'));
    })
})

leftList.addEventListener('dragover', function(e){
    e.preventDefault();
})

leftList.addEventListener('drop', function(e){
    let dataIdNew = e.dataTransfer.getData('dataId');
    leftList.appendChild(document.querySelector('[data-id="'+dataIdNew+'"]'));
})



let box = document.querySelector('.box');

box.addEventListener('dragover', function(e){
    e.preventDefault();
})

box.addEventListener('drop', function(e){
    let dataId3 = e.dataTransfer.getData('dataId');
    let addedLi = document.querySelector('[data-id="'+dataId3+'"]');
    let paragraph = document.createElement('p');
    paragraph.innerText = addedLi.innerText;
    box.appendChild(paragraph);
    addedLi.style.display = "none"; 
})