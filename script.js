const modal = document.querySelector(".modal");
const overlay= document.querySelector(".overlay");

// modal opening function
const openModal = () =>{
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

// modal closing function 

const closeModal = () =>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};



