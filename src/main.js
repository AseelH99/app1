var navbar=document.querySelector('.navbar')
navbar.style.transition='1s'
window.addEventListener('scroll',function(){
  if(this.window.scrollY>=20){
    navbar.style.backgroundColor='black'
  }
  else{
    navbar.style.backgroundColor='transparent'
  }
})
