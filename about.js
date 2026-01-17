import { postsData } from './data.js'

const postsGrid = document.getElementById('posts-grid')

function renderRecentPosts() {
    // Only get the first 3 posts
    const recentPosts = postsData.slice(0, 3)

    const html = recentPosts.map(post => `
        <article class="post">
            <img src="${post.image}" alt="${post.title}">
            <p class="date">${post.date}</p>
            <h2>${post.title}</h2>
            <p>${post.desc}</p>
        </article>
    `).join('')

    postsGrid.innerHTML = html
}

renderRecentPosts()