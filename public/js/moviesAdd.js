window.addEventListener('load', () => {   

    const headingElement  = document.querySelector('h1');
    const articleElement  = document.querySelector('article')
    const sectionElement  = document.querySelector('section');

    
    headingElement.innerText = 'LISTADO DE PELÍCULAS'
    headingElement.classList.add('titulo');

    articleElement.classList.add('​fondoTransparente');

    sectionElement.classList.add('fondoCRUD');


})