const mainContainer = document.getElementById('main-container')
const home = document.getElementById('home-script')
const info = document.getElementById('info-script')
const projects = document.getElementById('projects-script')
const contact = document.getElementById('contact-script')
const visitContact = document.getElementById('visit-contact')
const infoPage = document.getElementById('bio-start')
const contactPage = document.getElementById('contact-start')
const homePage = document.getElementById('home-start')
const projectsPage = document.getElementById('projects-start')
const contactButtonAtHome = document.getElementById('contact-button')
const projectsModal = document.getElementById('staticBackdrop')
const modalTitle = document.getElementById('staticBackdropLabel')
const modalBody = document.getElementById('modal-body')
const realProject7 = document.getElementById('real-project7')
const realProject8 = document.getElementById('real-project8')
const realProject9 = document.getElementById('real-project9')


realProject7.onclick = () => {
    modalTitle.textContent = 'PacMen Factory'
    modalBody.textContent = 'In this project you can see how PacMen are moving inside the screen corners. They are created by clicking the button that adds PacMen. The movement starts when clicking the button that starts the procedure. When PacMen hit corners they change direction, so no PacMan gets out of page borders.'
}
realProject8.onclick = () => {
    modalTitle.textContent = 'Eye Movement'
    modalBody.textContent = 'In this project the two eyes that are presented on your webpage are moving in relationship with the movement of your mouse. Wherever you locate your mouse, the eyes are looking to it.'
}
realProject9.onclick = () => {
    modalTitle.textContent = 'Real Time Bus Tracker'
    modalBody.textContent = 'In this project, by clicking the button that starts the route you are going to see a marker located at every single stop. Also, this stop is written on the header so you understand where the bus is. Moreover, all the data used are taken live by Washington Metropolitan Area Transit.'
}

// realProject7.onclick = () => {

//     modalTitle.textContent = modalContentArray[0][1]
//     modalBody.textContent = modalContentArray[0][3]
// }


// projectsModal.style.setProperty('display', 'none')

infoPage.style.setProperty('display', 'none')
contactPage.style.setProperty('display', 'none')
homePage.style.setProperty('display', 'none')
projectsPage.style.setProperty('display', 'none')

home.onclick = () => {
    homePage.style.removeProperty('display')
    infoPage.style.setProperty('display', 'none')
    contactPage.style.setProperty('display', 'none')
    projectsPage.style.setProperty('display', 'none')
}

info.onclick = () => {
    infoPage.style.removeProperty('display')
    contactPage.style.setProperty('display', 'none')
    homePage.style.setProperty('display', 'none')
    projectsPage.style.setProperty('display', 'none')
}

contact.onclick = () => {
    contactPage.style.removeProperty('display')
    infoPage.style.setProperty('display', 'none')
    homePage.style.setProperty('display', 'none')
    projectsPage.style.setProperty('display', 'none')
}

projects.onclick = () => {
    projectsPage.style.removeProperty('display')
    infoPage.style.setProperty('display', 'none')
    contactPage.style.setProperty('display', 'none')
    homePage.style.setProperty('display', 'none')
}

contactButtonAtHome.onclick = () => {
    contactPage.style.removeProperty('display')
    infoPage.style.setProperty('display', 'none')
    homePage.style.setProperty('display', 'none')
}
