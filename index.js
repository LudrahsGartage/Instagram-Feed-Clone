const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const elements = posts.map((post) => {
    return (
            `<section class="card">
                <div class="card-head">
                    <img class="poster-avatar" src="${post.avatar}">
                    <div class="poster-information">
                        <span class="poster-name">${post.name}</span>
                        <p class="poster-location">${post.location}</p>
                    </div>
                </div>
                <img src="${post.post}" class="card-post">
                <div class="card-footer">
                    <div class="interaction-icon-container">
                        <img src ="images/icon-heart.png" class="interaction-icon" id="heart-btn">
                        <img src ="images/icon-comment.png" class="interaction-icon">
                        <img src ="images/icon-dm.png" class="interaction-icon">
                    </div>
                    <h3>${post.likes} Likes</h3>
                    <p> <span class="comment-name">${post.username}</span> ${post.comment}</p>
                </div>
            </section>`
    )
})

const mainEl = document.querySelector("main")

mainEl.innerHTML = elements.join("");