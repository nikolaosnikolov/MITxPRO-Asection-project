const mainContainer = document.getElementById('main-container')
const home = document.getElementById('home-script')
const info = document.getElementById('info-script')
const projects = document.getElementById('projects-script')
const contact = document.getElementById('contact-script')
const contactForm = document.getElementById('contact-data')
const contactWelcome = document.getElementById('welcome-contact')

contactForm.style.setProperty('display', 'none')
contactWelcome.style.setProperty('display', 'none')

home.onclick = () => {
    // const youtubeVideo = document.createElement('iframe')
    // youtubeVideo.src = 'https://www.youtube.com/embed/qRPMAyQxrFY'
    // youtubeVideo.setAttribute('id', 'yt-video')
    // mainContainer.appendChild(youtubeVideo)
}

contact.onclick = () => {
    contactForm.style.removeProperty('display')
    contactWelcome.style.removeProperty('display')
}