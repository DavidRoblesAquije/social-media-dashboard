let darkmode = localStorage.getItem('darkmode');
const darkModeToggle = document.getElementById('toggle');

//valores a guardar para el darkmode
const body = document.querySelector('body');
const mainInfo = document.getElementById('mainInfo');
const toggleButton = document.getElementsByClassName('toggleButton')[0];
const socialMedia = document.getElementsByClassName('socialMedia');
const overviews = document.getElementById('overviews');
const overview = document.getElementsByClassName('overview');

//comprobar si el modo oscuro esta activado
// de estar activado, apagarlo
// de no estar activado, encenderlo

const enableDarkMode = () => {
    //agregar las clases del modo oscuro
    body.classList.add('active');
    mainInfo.classList.add('active');
    toggleButton.classList.add('active');
    darkModeToggle.classList.add('active');
    for (var i = 0; i < socialMedia.length; i++) {
        socialMedia[i].classList.add('active');
    }
    overviews.classList.add('active');
    for (var i = 0; i < overview.length; i++) {
        overview[i].classList.add('active');
    }
    //actualizar modo oscuro en el localstorage
    localStorage.setItem("darkmode", "enabled");
}

const disableDarkMode = () => {
    //desactivar las clases del modo oscuro
    body.classList.remove('active');
    mainInfo.classList.remove('active');
    toggleButton.classList.remove('active');
    darkModeToggle.classList.remove('active');
    for (var i = 0; i < socialMedia.length; i++) {
        socialMedia[i].classList.remove('active');
    }
    overviews.classList.remove('active');
    for (var i = 0; i < overview.length; i++) {
        overview[i].classList.remove('active');
    }
    //actualizar modo oscuro en el localstorage
    localStorage.setItem("darkmode", null);
}

if (darkmode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.onclick = function () {
    //refrescar el modo oscuro
    darkmode = localStorage.getItem("darkmode");

    if (darkmode !== 'enabled') {
        //el modo oscuro es activado
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}