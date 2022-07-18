let moverX
let moverY
let gameStarted
let animationGame

let hasError = false

let ballElement
let contactAudio
let rocketElement
let containerArea
let dashboardArea
let playgroundArea

document.addEventListener('DOMContentLoaded', function (event) {

    // **********
    // **********
    // **********
    ballElement =
        document.querySelector('#ball-element')

    if (!ballElement) {

        hasError = true
        console.log("Error! 'ballElement' does not exist.")

    }
    // **********

    // **********
    contactAudio =
        document.querySelector('#contact-audio')

    if (!contactAudio) {

        hasError = true
        console.log("Error! 'contactAudio' does not exist.")

    }
    // **********

    // **********
    rocketElement =
        document.querySelector('#rocket-element')

    if (!rocketElement) {

        hasError = true
        console.log("Error! 'rocketElement' does not exist.")

    }
    // **********

    // **********
    containerArea =
        document.querySelector('#container-area')

    if (!containerArea) {

        hasError = true
        console.log("Error! 'containerArea' does not exist.")

    }
    // **********

    // **********
    dashboardArea =
        document.querySelector('#dashboard-area')

    if (!dashboardArea) {

        console.log("Error! 'dashboardArea' does not exist.")

    }
    // **********

    // **********
    playgroundArea =
        document.querySelector('#playground-area')

    if (!playgroundArea) {

        console.log("Error! 'playgroundArea' does not exist.")

    }
    // **********
    // **********
    // **********

    if (hasError) {

        return

    }

    document.addEventListener('click', function (e) {

        console.log('Mouse Click: x -> ' + e.clientX + ', y -> ' + e.clientY)

    })

    playgroundArea.addEventListener('mousemove', mouseMove)

    init()

})

function init() {

    moverX =
        getRandomIntegerBetween(3, 4)

    moverY =
        getRandomIntegerBetween(3, 4)

    gameStarted = true

    animationGame =
        requestAnimationFrame(playGame)

    console.log('playgroundArea.offsetLeft:' + playgroundArea.offsetLeft)
    console.log('playgroundArea.offsetWidth:' + playgroundArea.offsetWidth)

    // scoresElements[0].textContent = 0
    // rollDiceButton.style.display = 'none'
    // sectionElements[0].classList.remove("section-active")

}

function playGame() {

    if (gameStarted) {

        moveBall()
        updateDashboard()

        animationGame =
            requestAnimationFrame(playGame)

    }

}

function moveBall() {

    ballElement.style.top = ballElement.offsetTop + moverY + 'px'
    ballElement.style.left = ballElement.offsetLeft + moverX + 'px'

    if (hasCollide(ballElement, rocketElement)) {

        playContactAudio()

        moverY = -moverY

        let ballElementRect =
            ballElement.getBoundingClientRect()

        let rocketElementRect =
            rocketElement.getBoundingClientRect()   

        let temp1 =
            Math.abs(ballElementRect.right - rocketElementRect.left)

        let temp2 =
            Math.abs(ballElementRect.left - rocketElementRect.right)

        if ((temp1 <= Math.abs(moverX)) ||
            (temp2 <= Math.abs(moverX))) {

            moverX = -moverX
            moverY = -moverY

            ballElement.style.left =
                ballElement.offsetLeft + (2 * moverX) + 'px'

        }

        if(moverX === 0) {

            moverX =
            getRandomIntegerBetween(2, 3)

        }

    } else {

        if (ballElement.offsetLeft + ballElement.offsetWidth >= playgroundArea.offsetWidth - 1) {

            playContactAudio()

            moverX = -moverX

        }

        if (ballElement.offsetLeft <= 0) {

            playContactAudio()

            moverX = -moverX

        }

        if (ballElement.offsetTop + ballElement.offsetHeight >= playgroundArea.offsetHeight - 1) {

            playContactAudio()

            moverY = -moverY

        }

        if (ballElement.offsetTop <= 0) {

            playContactAudio()

            moverY = -moverY

        }

    }

}

function updateDashboard() {

    // console.log('Update Dashboard...')

}

function playContactAudio() {

    contactAudio.pause()
    contactAudio.currentTime = 0
    contactAudio.play()

}

function mouseMove(e) {

    let left =
        e.clientX - (rocketElement.offsetWidth / 2) - playgroundArea.offsetLeft

    if (left < 0) {

        left = 0

    }

    if (left + rocketElement.offsetWidth > playgroundArea.offsetWidth) {

        left =
            playgroundArea.offsetWidth - rocketElement.offsetWidth

    }

    // console.log(left)

    rocketElement.style.left = left + 'px'

}