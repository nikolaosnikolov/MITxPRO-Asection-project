const mainContainer = document.getElementById('main-container')
const home = document.getElementById('home-script')
const info = document.getElementById('info-script')
const projects = document.getElementById('projects-script')
const contact = document.getElementById('contact-script')

home.onclick = () => {
    const youtubeVideo = document.createElement('iframe')
    youtubeVideo.src = 'https://www.youtube.com/embed/tgbNymZ7vqY'
    youtubeVideo.setAttribute('id', 'yt-video')
    mainContainer.appendChild(youtubeVideo)
    
    console.log('hello world')
}

contact.onclick = () => {
    //const welcomeDiv = document.createElement('div')

    //welcomeDiv.textContent = 'In this table you can find the best ways to get in touch with me'
    
    //mainContainer.appendChild(welcomeDiv)
}