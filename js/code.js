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
const titleWrapper = document.getElementById('title-wapper')
const titlePart1 = document.getElementById('title-part-1')
const introduction = document.getElementById('intro')
const biography = document.getElementById('bio')
const buttonIntro = document.getElementById('my-button-intro')
const buttonBio = document.getElementById('my-button-bio')

window.onload = () => {
    homePage.style.removeProperty('display')
}

// Get the modal
const modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];


const modalTitle = document.getElementById('own-modal-title')
const modalBody = document.getElementById('own-modal-body')
const image7 = document.getElementById('project-image-7')
const image8 = document.getElementById('project-image-8')
const image9 = document.getElementById('project-image-9')

infoPage.style.setProperty('display', 'none')
contactPage.style.setProperty('display', 'none')
homePage.style.setProperty('display', 'none')
projectsPage.style.setProperty('display', 'none')


modalTitle.style.fontSize = '1.3rem'




// image7.onclick = () => {
//     modal.style.display = "block";
//     modalTitle.textContent = 'PacMen Factory'
//     modalBody.textContent = 'In this project you can see how PacMen are moving inside the screen corners. They are created by clicking the button that adds PacMen. The movement starts when clicking the button that starts the procedure. When PacMen hit corners they change direction, so no PacMan gets out of page borders.'
// }
// image8.onclick = () => {
//     modal.style.display = "block";
//     modalTitle.textContent = 'Eye Movement'
//     modalBody.textContent = 'In this project the two eyes that are presented on your webpage are moving in relationship with the movement of your mouse. Wherever you locate your mouse, the eyes are looking to it.'
// }
// image9.onclick = () => {
//     modal.style.display = "block";
//     modalTitle.textContent = 'Real Time Bus Tracker'
//     modalBody.textContent = 'In this project, by clicking the button that starts the route you are going to see a marker located at every single stop. Also, this stop is written on the header so you understand where the bus is. Moreover, all the data used are taken live by Washington Metropolitan Area Transit.'
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


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

titleWrapper.onmouseover = () => {
    titlePart1.textContent = 'Always excelling'
    setTimeout(() => { titlePart1.textContent = 'Αἰὲν ἀριστεύειν' }, 3000)
}

buttonIntro.onclick = () => {
    introduction.scrollIntoView()
}

buttonBio.onclick = () => {
    biography.scrollIntoView()
}