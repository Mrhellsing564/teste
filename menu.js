
window.addEventListener("scroll", function(){
    let header=document.querySelector('#menu-l')
    header.classList.toggle('rolagem',window.scrollY > 0)
})

