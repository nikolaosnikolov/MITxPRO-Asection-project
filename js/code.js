const mainContainer = document.getElementById('main-container')
const home = document.getElementById('home-script')
const projects = document.getElementById('projects-script')
const visitContact = document.getElementById('visit-contact')
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

const image7 = document.getElementById('project-image-7')
const image8 = document.getElementById('project-image-8')
const image9 = document.getElementById('project-image-9')

homePage.style.setProperty('display', 'none')
projectsPage.style.setProperty('display', 'none')

home.onclick = () => {
    homePage.style.removeProperty('display')
    projectsPage.style.setProperty('display', 'none')
}

projects.onclick = () => {
    projectsPage.style.removeProperty('display')
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