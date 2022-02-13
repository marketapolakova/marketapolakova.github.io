let menu = document.getElementById('menu')
let burgerMenu=document.getElementById('burger-menu')
let x = document.getElementById('x')
let navbar=document.getElementById('navbar')
let container= document.getElementById('container')

burgerMenu.addEventListener('click', function(){
  
 container.classList.add("animation")
 container.classList.remove("close")
 x.classList.add("rotateX")
x.style.display=('block')
navbar.classList.add('slide')
burgerMenu.style.display=('none')

})

x.addEventListener('click', function(){
  
  container.classList.remove("animation")
  container.classList.add("close")
  navbar.classList.remove('slide')
   x.style.display=('none')
   burgerMenu.style.display=('block')
   burgerMenu.classList.add("rotateBurger")

   
   })

   document.querySelector('.btn').addEventListener('click', function(){
     document.querySelector('.contact').style.display='block'
     document.querySelector('.hastag').style.display='none'
   })
   



