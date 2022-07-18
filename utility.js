function getRandomIntegerFromOneTo(number) {

    let result =
        Math.floor(Math.random() * number) + 1

    return result

}

function getRandomIntegerBetween(a, b) {

    let min = a
    let max = b

    if (max < min) {

        min = b
        max = a

    }

    let result =
        Math.floor((max - min) * Math.random() + min) + 1

    return result

}

function hasCollide(a, b) {

    let aRect =
        a.getBoundingClientRect()

    let bRect =
        b.getBoundingClientRect()

    if (aRect.bottom < bRect.top) {

        return false

    }

    if (aRect.top > bRect.bottom) {

        return false

    }

    if (aRect.right < bRect.left) {

        // console.log(aRect.top)

        return false

    }

    if (aRect.left > bRect.right) {

        // console.log(aRect.top)

        return false

    }

    return true

}

// function hasTopOrBottomCollide(a, b) {

//     let aRect =
//         a.getBoundingClientRect()

//     let bRect =
//         b.getBoundingClientRect()

//     if (aRect.bottom < bRect.top) {

//         return false

//     }

//     if (aRect.top > bRect.bottom) {

//         return false

//     }

//     return true

// }

// function hasLeftOrRightCollide(a, b) {

//     let aRect =
//         a.getBoundingClientRect()

//     let bRect =
//         b.getBoundingClientRect()

//     if (aRect.right < bRect.left) {

//         // console.log(aRect.top)

//         return false

//     }

//     if (aRect.left > bRect.right) {

//         // console.log(aRect.top)

//         return false

//     }

//     return true

// }