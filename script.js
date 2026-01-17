import { postsData } from './data.js'

const postsGrid = document.getElementById('posts-grid')
const viewMoreBtn = document.getElementById('view-more-btn')

let isExpanded = false 

function render() {
    // 1. Check screen width (768px is the standard breakpoint)
    const isDesktop = window.innerWidth >= 768

    // 2. Decide which posts to show
    // If it's desktop OR the user clicked "View More", show everything.
    // Otherwise, just show the first 3.
    const postsToShow = (isDesktop || isExpanded) ? postsData : postsData.slice(0, 3)

    // 3. Map to HTML
    const html = postsToShow.map(post => `
        <article class="post">
            <img src="${post.image}" alt="${post.title}">
            <p class="date">${post.date}</p>
            <h2>${post.title}</h2>
            <p>${post.desc}</p>
        </article>
    `).join('')

    postsGrid.innerHTML = html
    
    // 4. Update Button Text and Visibility
    if (isDesktop) {
        viewMoreBtn.style.display = 'none' // Hide button on desktop
    } else {
        viewMoreBtn.style.display = 'block' // Show button on mobile
        viewMoreBtn.textContent = isExpanded ? "View Less" : "View More"
    }
}

// Event Listener
viewMoreBtn.addEventListener('click', () => {
    isExpanded = !isExpanded 
    render()
})

// 5. Re-render if the user resizes the window
window.addEventListener('resize', render)

// Initial Render
render()