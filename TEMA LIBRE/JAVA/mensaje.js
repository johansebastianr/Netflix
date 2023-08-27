function mostrarMas(id) {
    const mensaje = document.getElementById(id);
    const boton = mensaje.previousElementSibling;
  
    if (mensaje.style.maxHeight) {
      mensaje.style.maxHeight = null;
      boton.classList.remove("active");
    } else {
      mensaje.style.maxHeight = mensaje.scrollHeight + "px";
      boton.classList.add("active");
    }
  }
  


