const menuIcon = document.getElementById("menuIcon");
const mobilemenu = document.getElementById("mobilemenu");
const closeIcon = document.getElementById("closeIcon");


menuIcon.addEventListener("click", ()=> {
 mobilemenu.classList.add('active');
});


closeIcon.addEventListener("click",()=> {
    mobilemenu.classList.remove('active');
});