
document.querySelector('#close').style.display='none'
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('closesidebar');
    if( document.querySelector('.sidebar').classList.contains('closesidebar')){
        document.querySelector('#ham').style.display='inline'

        document.querySelector('#close').style.display='none'

    }
    else{
        document.querySelector('#ham').style.display='none'
     
     setTimeout(()=>{
        document.querySelector('#close').style.display='inline'
    },300)
    }
})
const  infos =document.querySelectorAll(".project-info");
infos.forEach( info => {
   info.addEventListener("click",()=>{
   info.classList.toggle("active");
});

});