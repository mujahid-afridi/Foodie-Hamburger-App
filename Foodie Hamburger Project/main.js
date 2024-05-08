let list = document.querySelector('.list')
let li = document.querySelectorAll('.list li a')
let crossIcon = document.querySelector('#cross-icon')
let menu = document.querySelector('.menu-container')
let menuIcon = document.querySelector('#menu-icon')
menuIcon.addEventListener('click',(e)=>{
    list.style.right = '10px'
    e.stopPropagation()
})
window.addEventListener('click',(e)=>{
    list.style.right = '-200px'
})
list.addEventListener('click',(e)=>{
    e.stopPropagation();
})
crossIcon.addEventListener('click',(e)=>{
    list.style.right = '-200px'
})
li.forEach((li)=>{
    li.addEventListener('click',(e)=>{
        list.style.right = '-200px'
    })
})

