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
    ramenDisplay(ramenData[0])
})

//render the ramen to the 
function renderRamen(ramen) {
    const menuImg = document.createElement('img')
        menuImg.src = ramen.image
        menu.appendChild(menuImg)

        menuImg.addEventListener('click', e => {
            ramenDisplay(ramen)
        })
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

//display ramen in center display
function ramenDisplay(ramen) {
    detailImg.src = ramen.image
    detailName.textContent = ramen.name
    detailRes.textContent = ramen.restaurant
    detailCom.textContent = ramen.comment
    detailRating.textContent = ramen.rating
}

