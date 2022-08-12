// Remember to import the data and Dog class!
import Dog from './Dog.js'
import dogs from './data.js'

let currentIndex = 0
let currentDog = new Dog(dogs[currentIndex])

const likeButton = document.getElementById("likeButton")
const dislikeButton = document.getElementById("dislikeButton")
likeButton.addEventListener('click', yes)
dislikeButton.addEventListener('click', no)


function getNewProfile() {
    currentIndex += 1
    if (currentIndex === dogs.length) {
        console.log("finito")
        endGame()
    } else {
        currentDog = new Dog(dogs[currentIndex])
        render()
    }
}


function yes() {
    currentDog.setMatchStatus(true)
    button()
    setTimeout(()=> document.getElementById("yep").classList.add("hideButtonLike"), 1000)
    setTimeout(()=> getNewProfile(), 1000)
}

function no() {
    currentDog.setMatchStatus(false)
    button()
    setTimeout(()=> document.getElementById("nope").classList.add("hideButtonLike"), 1000)
    setTimeout(()=> getNewProfile(), 1000)
}



function button() {
    if (currentDog.hasBeenLiked === true && currentDog.hasBeenSwiped === true) {
        document.getElementById("yep").classList.remove("hideButtonLike")
    } else  {
        document.getElementById("nope").classList.remove ("hideButtonLike")
    }
}

function endGame() {
    currentIndex = 0
    currentDog = new Dog(dogs[currentIndex])
    render()
}


function render() {
    document.getElementById('swipezone').innerHTML = currentDog.getDogHtml()
}

render()