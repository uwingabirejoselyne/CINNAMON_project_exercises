// styling element

// const title = document.getElementById('heading')
// console.log(title);


// const list1 = document.querySelectorAll('.list-item');
// for(i=0;i<list1.length;i++){
//     list1[i].style.fontSize ='2rem'
// }
// console.log(list1);


// const ul = document.querySelector('ul')
// const li = document.querySelector('li')
// ul.append(li)
//  li.innerText ='Hello'
//  li.setAttribute('id','heading')
//  li.removeAttribute('id')
//  li.classList.remove('list-item')
//  li.classList.remove('list-item')
//  li.remove()

const btn2 =  document.querySelector('.btn-2');
const change = document.querySelector('.change-button')
function alertBtn(){
    alert('i also love  java script')
}
btn2.addEventListener('click',alertBtn)

function changeColor(){
change.style.background = 'blue'
change.style.color ='white'
}
btn2.addEventListener('mouseover',changeColor)