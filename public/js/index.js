window.addEventListener('load', () => {    
   
    const mainElement  = document.querySelector('main');
    const headingElement  = document.querySelector('h2');
    const linkElement  = document.querySelector('a');
    const paragraphElements  = document.querySelectorAll('p');
    const bodyElement  = document.querySelector('body');
    

    let userName = prompt('Ingrese su nombre')

    if (userName === "" || userName === null) {
        headingElement.innerHTML += ' ' + 'invitado';    
    } else {
        headingElement.innerText += ' ' + userName;
    }

    headingElement.style.textTransform = "uppercase"

    linkElement.style.color = '#E51B3E';

    if (confirm("¿Desea colocar un fondo de pantalla?")) {
        bodyElement.classList.add("fondo");
      }

    paragraphElements.forEach((p, index) => {
        if ((index + 1) % 2 === 0) {  
            p.classList.add('destacadoPar');
        } else {
            p.classList.add('destacadoImpar');
        }
    });

    mainElement.style.display = 'block';

})