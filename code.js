const mainContainer = document.getElementById('main-container')
const home = document.getElementById('home-script')
const info = document.getElementById('info-script')
const projects = document.getElementById('projects-script')
const contact = document.getElementById('contact-script')
const visitContact = document.getElementById('visit-contact')
const infoPage = document.getElementById('bio-start')
const contactPage = document.getElementById('contact-start')
const homePage = document.getElementById('home-start')
const contactButtonAtHome = document.getElementById('contact-button')

infoPage.style.setProperty('display', 'none')
contactPage.style.setProperty('display', 'none')
homePage.style.setProperty('display', 'none')

home.onclick = () => {
    homePage.style.removeProperty('display')
    infoPage.style.setProperty('display', 'none')
    contactPage.style.setProperty('display', 'none')
}

info.onclick = () => {
    infoPage.style.removeProperty('display')
    contactPage.style.setProperty('display', 'none')
    homePage.style.setProperty('display', 'none')
}

contact.onclick = () => {
    contactPage.style.removeProperty('display')
    infoPage.style.setProperty('display', 'none')
    homePage.style.setProperty('display', 'none')
}

contactButtonAtHome.onclick = () => {
    contactPage.style.removeProperty('display')
    infoPage.style.setProperty('display', 'none')
    homePage.style.setProperty('display', 'none')
}