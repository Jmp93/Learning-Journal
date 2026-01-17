import { postsData } from './data.js'

const postsGrid = document.getElementById('posts-grid')
const viewMoreBtn = document.getElementById('view-more-btn')

let isExpanded = false 

function render() {
    const isDesktop = window.innerWidth >= 768
    const postsToShow = (isDesktop || isExpanded) ? postsData : postsData.slice(0, 3)
    const html = postsToShow.map(post => `
        <article class="post">
            <img src="${post.image}" alt="${post.title}">
            <p class="date">${post.date}</p>
            <h2>${post.title}</h2>
            <p>${post.desc}</p>
        </article>
    `).join('')

    postsGrid.innerHTML = html
    
    if (isDesktop) {
        viewMoreBtn.style.display = 'none' 
    } else {
        viewMoreBtn.style.display = 'block' 
        viewMoreBtn.textContent = isExpanded ? "View Less" : "View More"
    }
}


viewMoreBtn.addEventListener('click', () => {
    isExpanded = !isExpanded 
    render()
})

window.addEventListener('resize', render)

render()