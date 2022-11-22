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
        
        <div class="post-img">
            <img src="${posts[i].post}" alt="Post by ${posts[i].name}" id="${posts[i].username}p">
            
        </div>
        
        <div class="container">
            <div class="btns">
                <div class="chumma">
                <i class="fa fa-heart-o fa-lg" aria-hidden="true" id="${posts[i].username}"></i>
                </div>
                <img src="images/icon-comment.png" alt="Comment" class="interact comment-btn">
                <img src="images/icon-dm.png" alt="DM" class="interact dm-btn">
            </div>
            <p class="post-likes"><span id="${posts[i].username}c">${posts[i].likes}</span> likes</p>
            <p class="post-caption"><span class="user-name">${posts[i].username}</span> just took a few mushrooms lol</p>
        </div>

    </section>
        `
    }
    mainEl.innerHTML = str
}
render(posts)

const postArr = [vincey1853p, gus1819p, jd1735p]
const likeArr = [vincey1853, gus1819, jd1735]
const countArr = [vincey1853c, gus1819c, jd1735c]

for (let i = 0; i < postArr.length; i++) {
    postArr[i].addEventListener('dblclick', function () {
        toggle(likeArr[i], countArr[i], countArr[i].innerText)
    })
    likeArr[i].addEventListener('click', function () {
        toggle(likeArr[i], countArr[i], countArr[i].innerText)
    })
}

function toggle(postLike, likeCountEl, count) {
    if (postLike.classList.contains('fa-heart-o')) {
        postLike.classList.replace('fa-heart-o', 'fa-heart')
        count++
        likeCountEl.innerHTML = `${count}`

    }
    else {
        postLike.classList.replace('fa-heart', 'fa-heart-o')
        count--
        likeCountEl.innerHTML = `${count}`
    }
}







