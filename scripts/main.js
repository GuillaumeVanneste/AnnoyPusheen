const $canvas = document.querySelector('canvas')
const context = $canvas.getContext('2d')

const center = {x: $canvas.width * 0.5, y: $canvas.height * 0.5} // Center of canvas
let resizing = false // To know if you resize or not

const resize = () => 
{
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight
    center.x = $canvas.width * 0.5
    center.y = $canvas.height * 0.5
    resizing = true
}

window.addEventListener('resize', resize)
resize()

// Variables
const mouse = {x: 0, y: 0} // Get the position of the mouse on canvas
const donut = {x: center.x, y: center.y} // Set position of donut
const pupils = {}
const pupilLeft = { x: center.x - 70, y: center.y - 75 } // Set position of pupil left
const pupilRight = { x: center.x + 30, y: center.y - 72 } // Set position of pupil right
const crumbs = []

let donutStolen = false
let isEating = true

let mouthAngry = 0
let tailAngry = 0
let eatingMoves = 0
let timer = 0
let pusheenBodyColor = ''
let text = '' // What will say Pusheen


const createCrumbs = () =>
{   
    for(let i = 0; i < 3; i++) // Create 3 crumbs of left Pusheen's cheek
    {
        const crumb = {}
        crumb.x = center.x + 2 + (Math.random() * 10)
        crumb.y = center.y - 75 + (Math.random() * 8)
        crumb.radius = 1.5 + Math.random()

        // Change color of crumbs
        if(Math.round(Math.random()) == 0)
        {
            crumb.color = '#F9D896'
        } else
        {
            crumb.color = '#FFA6AF'
        }

        crumbs.push(crumb)
    }

    for(let i = 0; i < 3; i++) // Create 3 crumbs of left Pusheen's cheek
    {
        const crumb = {}
        crumb.x = center.x - 42 - (Math.random() * 10)
        crumb.y = center.y - 75 + (Math.random() * 8)
        crumb.radius = 1.5 + Math.random()

        // Change color of crumbs
        if(Math.round(Math.random()) == 0)
        {
            crumb.color = '#F9D896'
        } else
        {
            crumb.color = '#FFA6AF'
        }

        crumbs.push(crumb)
    }
}

// Clear canvas
const clear = () => 
{
    context.clearRect(0, 0, $canvas.width, $canvas.height)
}

// Clear crumbs array
const clearCrumbs = () =>
{
    for(const crumb of crumbs)
    {
        crumbs.splice(0, 6) // Remove every crumb in crumbs
    }
}


const loop = () => 
{
    window.requestAnimationFrame(loop)

    update()
    clear()
    pusheenBody()
    pusheenEyes()

    if(isEating) // Pusheen is eating
    {
        donutDraw()
        pusheenMouth()
        pusheenPaw()
        crumbDraw()
    } else // Pusheen is not eating
    {
        pusheenEyebrows()
        pusheenMouth()
        pusheenPaw()
        pusheenQuote()
        donutDraw()
    }
}

loop()

const loopCrumbs = () =>
{
    if(isEating)
    {
        clearCrumbs()
        createCrumbs()
    } else
    {
        clearCrumbs()
    } 
}

window.setInterval(loopCrumbs, 1000)

const timerCount = () =>
{
    if(donutStolen)
    {
        timer++
    } else
    {
        timer = 0
    }
}

window.setInterval(timerCount, 50)