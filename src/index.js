// declare all global variables
const menu = document.querySelector('#ramen-menu')
const detail = document.querySelector('#ramen-detail')
const detailImg = document.querySelector('.detail-image')
const detailName = document.querySelector('.name')
const detailRes = document.querySelector('.restaurant')
const detailCom = document.querySelector('#comment-display')
const detailRating = document.querySelector('#rating-display')
const form = document.querySelector('form')

//fetch the ramens
fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramenData => {
    ramenData.forEach(renderRamen);
})

//create a ramen obj
const res = {
    'name': '',
    'image': '',
    'restaurant': '',
    'comment': '',
    'rating': ''
}

//render the ramen to the 
function renderRamen(ramen) {
    const menuImg = document.createElement('img')
        menuImg.src = ramen.image
        menu.appendChild(menuImg)

        menuImg.addEventListener('click', e => {
            console.log(e.target.id)
            detailImg.src = e.target.src 
            detailName.textContent = ramen.name
            detailRes.textContent = ramen.restaurant
            detailCom.textContent = ramen.comment
            detailRating.textContent = ramen.rating
        })

        res.name = ramen.name
        res.image = ramen.image
        res.restaurant = ramen.restaurant
        res.comment = ramen.comment
        res.rating = ramen.rating
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const formName = e.target.name.value
    const formImg = e.target.image.value
    const formRes = e.target.restaurant.value
    const formCom = e.target['new-comment'].value
    const formRating = e.target.rating.value

    const newRes = {
        'name': formName,
        'image': formImg,
        'restaurant': formRes,
        'comment': formCom,
        'rating': formRating
    }

    form.reset()
    renderRamen(newRes)
})

