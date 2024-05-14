window.addEventListener('load', () => {    
   
    document.
    const bodyElement = document.querySelector('body');
    const headingElement = document.querySelector('h1');

    let colorMode = prompt('¿Desea modo oscuro?​.')

    if(colorMode) {
        bodyElement.style.backgroundColor = '#7f7f7f​'
        bodyElement.classList.add('fondoMoviesList')
    } else {

    }

    headingElement.innerText = 'LISTADO DE PELÍCULAS'

    headingElement.style.color = 'white'
    headingElement.style.backgroundColor = 'teal'
    headingElement.style.fontSize = '20px'

})