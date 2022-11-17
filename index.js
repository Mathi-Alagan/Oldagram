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

const mainEl = document.getElementById("main")
function render(posts) {
    let str = ''
    for (let i = 0; i < posts.length; i++) {
        str += `
        <section>

        <div class="container user-info">
            <img src="${posts[i].avatar}" alt="${posts[i].name} profile" class="user-profile">
            <div class="user-desc">
                <p class="name">${posts[i].name}</p>
                <p class="user-location">${posts[i].location}</p>
            </div>
        </div>

        <img src="${posts[i].post}" alt="Post by ${posts[i].name}" class="post-img">

        <div class="container">
            <div class="btns">
                <img src="images/icon-heart.png" alt="Like" class="interact like-btn">
                <img src="images/icon-comment.png" alt="Comment" class="interact comment-btn">
                <img src="images/icon-dm.png" alt="DM" class="interact dm-btn">
            </div>
            <p class="post-likes">${posts[i].likes} likes</p>
            <p class="post-caption"><span class="user-name">${posts[i].username}</span> just took a few mushrooms lol</p>
        </div>

    </section>
        `
    }
    mainEl.innerHTML = str
}
render(posts)



