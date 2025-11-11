const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-modal");

function mostrarModal (){
    modal.style.left = '50%';
    mascara.style.visibility = 'visible';
}

function esconderModal (){
    let screenWidth = document.body.clientWidth;
    let valueLeft = '-23%';
    if(screenWidth <= 1024){
        valueLeft = '-44%';
    }

    modal.style.left = valueLeft;
    mascara.style.visibility = 'hidden';
}


menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");  

    //trocar icone do menu

    const icon = menuToggle.querySelector("i");
    if(navLinks.classList.contains("active")) {
        icon.classList.remove("bx-menu", "fa-bars");
        // icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars", "bx-menu");
        // icon.classList.add("bx-menu");
    }  
});

document.querySelectorAll("a[href^='#").forEach((anchor) =>{
    anchor.addEventListener("click", function (e) {
      //  e.preventDefault();

        navLinks.classList.remove("active");
        const icon = menuToggle.querySelector("i");
        // icon.classList.remove("bx-x");
         icon.classList.add("fa-bars", "bx-menu");
    });
   
});

