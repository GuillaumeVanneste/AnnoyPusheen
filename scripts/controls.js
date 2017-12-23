// Listen to the position of the mouse
$canvas.addEventListener('mousemove', (event) =>
{
    mouse.x = event.clientX // Change the actual position x of the variable mouse
    mouse.y = event.clientY // Change the actual position y of the variable mouse

    // Border to keep the donut inside of the window
    if (mouse.x < 43 && mouse.y < 38) // Border top left
    {
        mouse.x = 43
        mouse.y = 38
    } else if (mouse.x > $canvas.width - 53 && mouse.y < 38) // Border top right
    {
        mouse.x = $canvas.width - 53
        mouse.y = 38
    } else if (mouse.x > $canvas.width - 53 && mouse.y > $canvas.height - 38) // Border bottom right
    {
        mouse.x = $canvas.width - 53
        mouse.y = $canvas.height - 38
    } else if (mouse.x < 43 && mouse.y > $canvas.height - 38)// Border bottom left
    {
        mouse.x = 43
        mouse.y = $canvas.height - 38
    } else if(mouse.x < 43) // Border left
    {
        mouse.x = 43
    } else if(mouse.x > $canvas.width - 53) // Border right
    {
        mouse.x = $canvas.width - 53
    } else if(mouse.y < 38) // Border top
    {
        mouse.y = 38
    } else if (mouse.y > $canvas.height - 53) // Border bottom
    {
        mouse.y = $canvas.height - 38
    }
})

// Listen to mouse down on canvas
$canvas.addEventListener('mousedown', (event) =>
{
    if(donutStolen) // If you have already grabed the donut and you decide to give the donut back to Pusheen
    {
        donutStolen = false
        $canvas.classList.remove('mouseDown') // Show cursor
    } else if(event.clientX > donut.x - 70 && event.clientX < donut.x + 30 && event.clientY > donut.y - 70 && event.clientY < donut.y + 8) // If Pusheen is eating and you decide to grab (click on) the donut
    {
        // Get position of mouse - needed if you click with out moving mouse after the window is loaded
        mouse.x = event.clientX // Change the actual position x of the variable mouse
        mouse.y = event.clientY // Change the actual position y of the variable mouse

        donutStolen = true
        $canvas.classList.add('mouseDown') // Hide cursor
    }
})

// Listen to key down on window
window.addEventListener('keydown', (event) =>
{
    // Movement of donut on key down
    if(event.keyCode == 90 || event.keyCode == 38) // Press Z or top arrow
    {
        mouse.y -= 20 // Donut goes top
    } else if(event.keyCode == 83  || event.keyCode == 40) // Press S or down arrow
    {
        mouse.y += 20 // Donut goes down
    } else if(event.keyCode == 81  || event.keyCode == 37) // Press Q or left arrow
    {
        mouse.x -= 20 // Donut goes left
    } else if(event.keyCode == 68  || event.keyCode == 39) // Press D or right arrow
    {
        mouse.x += 20 // Donut goes right
    } else if(event.keyCode == 32) // Press spacebar to take or leave the donut
    {
        mouse.x = center.x// Change the actual position x of the variable mouse
        mouse.y = center.y // Change the actual position y of the variable mouse

        if(donutStolen)
        {
            donutStolen = false
            $canvas.classList.remove('mouseDown') // Show cursor
        } else
        {
            donutStolen = true
            $canvas.classList.add('mouseDown') // Hide cursor
        }
    }

    // Border to keep the donut in the window
    if(mouse.x < 43) // Border left
    {
        mouse.x = 43
    } else if(mouse.x > $canvas.width - 53) // Border right
    {
        mouse.x = $canvas.width - 53
    } else if(mouse.y < 38) // Border top
    {
        mouse.y = 38
    } else if (mouse.y > $canvas.height - 38) // Border bottom
    {
        mouse.y = $canvas.height - 38
    }
})