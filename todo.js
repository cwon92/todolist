'use strict';

const createListBtn = document.getElementById('create');
const div = document.getElementById('box');

createListBtn.addEventListener('click', function(){
  const newDiv = document.createElement('div');
  const newDoneBtn = document.createElement('button');
  const newDeleteBtn = document.createElement('button');
  
  newDiv.style.display = 'flex';
  newDiv.style.backgroundColor = 'red';
  newDiv.style.width = '300px';
  newDiv.style.height = '80px';
  newDiv.style.padding = '20px';
  newDiv.style.borderRadius = '5px'
  newDoneBtn.innerHTML = '했음';
  newDeleteBtn.innerHTML = '지우기';
  
  div.appendChild(newDiv);
  div.appendChild(newDoneBtn);
  div.appendChild(newDeleteBtn);
})

newDeleteBtn.addEventListener('click', function(){
  document.getElementById('box').style.display = 'none';
})