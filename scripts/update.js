const updateDonut = () =>
{
    // Change donut's position
    if(donutStolen) // Donut get the position of mouse
    {
        donut.x += ((mouse.x + 25) - donut.x) / 15
        donut.y += ((mouse.y + 30) - donut.y) / 15
    } else // Donut get the position under Pusheen's mouth
    {
        donut.x += (center.x - donut.x) / 10
        donut.y += (center.y - donut.y) / 10
    }
}

const updatePupils = () =>
{
    // Change the  position of pupils
    if(isEating)
    {
        pupilLeft.x = center.x - 70
        pupilLeft.y = center.y - 75
        pupilRight.x = center.x + 30
        pupilRight.y = center.y - 72
    } else if(timer >= 100 && timer < 150) // Pupils go on the center of eyes to look at you
    {
        pupilLeft.x = center.x - 70
        pupilLeft.y = center.y - 75
        pupilRight.x = center.x + 30
        pupilRight.y = center.y - 72
    } else if(timer >= 150 && timer < 250) // Pupils look to the opposite side of the donut position 
    {
        pupilLeft.x = center.x - 70 - ((donut.x - pupilLeft.x) / 105)
        pupilLeft.y = center.y - 75 - ((donut.y - pupilLeft.y) / 60)
        pupilRight.x = center.x + 30 - ((donut.x - pupilRight.x) / 105)
        pupilRight.y = center.y - 72 - ((donut.y - pupilRight.y) / 60)
    } else // Pupils are attracted but donut's position
    {
        pupilLeft.x = center.x - 70 + (donut.x - pupilLeft.x) / 105
        pupilLeft.y = center.y - 75 + (donut.y - pupilLeft.y) / 60
        pupilRight.x = center.x + 30 + (donut.x - pupilRight.x) / 105
        pupilRight.y = center.y - 72 + (donut.y - pupilRight.y) / 60
    }
}

const updateEating = () =>
{
    if((donut.x < center.x - 1.5 || donut.y < center.y - 1.5 || donut.x > center.x + 1.5 || donut.y > center.y + 1.5) || donutStolen)
    {
        isEating = false
    } else
    {
        isEating = true
        resizing = false
        text = ''
    }

    if(isEating)
    {
        eatingMoves = Math.abs(Math.sin(Date.now() * 0.005) * 1.8) // Move the bezier curve of Pusheen's mouth & whiskers to make him eat
        mouthAngry -= mouthAngry / 15 // Points of Pusheen's mouth curve come back to normal
        
    } else
    {
        eatingMoves = 0 // Stop moving the bezier curve of Pusheen's mouth & whiskers to make him stop eating
        mouthAngry += (5 - mouthAngry) / 15 // Change the position of points from Pusheen's mouth curves to make an angry mouth

        // Change the mouvement of Pusheen's tail
        if(timer >= 150 && timer < 250)
        {
            tailAngry = Math.abs(Math.sin((timer / 4)) * 2)
        } else if(timer > 250)
        {
            tailAngry = Math.abs(Math.sin((timer / 2)) * 4)
        } else
        {
            tailAngry = 0
        }
    }
}

const updateBodyColor = () =>
{
    // Change Pusheen's body color
    if(timer >= 150 && timer <= 250)
    {
        const gradient = context.createLinearGradient(center.x, center.y + (timer - 350), center.x, center.y + (timer - 300))

        gradient.addColorStop(0, '#D75C55')
        gradient.addColorStop(1, '#B5A89D')
        pusheenBodyColor = gradient
    } else if(timer >= 250 && !isEating)
    {
        const gradient = context.createLinearGradient(center.x, center.y - 100, center.x, center.y - 50)

        gradient.addColorStop(0, '#D75C55')
        gradient.addColorStop(1, '#B5A89D')
        pusheenBodyColor = gradient
    } else
    {
        pusheenBodyColor = '#B5A89D'
    }
}

const updateResizing = () =>
{
    if(timer > 0)
    {
        resizing = false
    }
}

const update = () =>
{
    updateDonut()
    updatePupils()
    updateEating()
    updateBodyColor()
    updateResizing()
}
