const pusheenBody = () => 
{
    // Draw right whiskers 
    context.beginPath()

    context.moveTo(center.x + 80, center.y - 72) // Top whiskers
    context.quadraticCurveTo(
        center.x + 90, center.y - 100 + eatingMoves * 2,
        center.x + 115, center.y - 95 + eatingMoves * 2
    )

    context.moveTo(center.x + 95, center.y - 65) // Bottom whiskers
    context.quadraticCurveTo(
        center.x + 100, center.y - 75 + eatingMoves * 2,
        center.x + 125, center.y - 70 + eatingMoves * 2
    )
    context.lineWidth = 6
    context.lineCap = 'round'
    context.strokeStyle = '#4B2707'
    context.stroke()

    // Body Primary Color
    context.beginPath()

    context.moveTo(center.x + 75, center.y - 122)
    context.bezierCurveTo( // Body left side curve
        center.x + 100 - eatingMoves, center.y - 37,
        center.x + 200 - eatingMoves, center.y + 162,
        center.x + 100, center.y + 262
    )
    context.bezierCurveTo( // Bottom left paw curve
        center.x + 110, center.y + 250,
        center.x + 150, center.y + 280,
        center.x + 100, center.y + 283
    )
    context.lineTo(center.x - 200, center.y + 283) // Bottom body line
    context.bezierCurveTo( // Tail curve
        center.x - 350, center.y + 303 - tailAngry * 5,
        center.x - 350, center.y + 242 - tailAngry * 5,
        center.x - 200, center.y + 248
    )
    context.bezierCurveTo( // Body right side curve
        center.x - 305 - eatingMoves, center.y + 162,
        center.x - 205 - eatingMoves, center.y - 37,
        center.x - 130, center.y - 122
    )
    context.bezierCurveTo( // Right ear curve
        center.x - 85, center.y - 187,
        center.x - 80, center.y - 177,
        center.x - 65, center.y - 117
    )
    context.lineTo(center.x + 20, center.y - 112) // Top head line
    context.bezierCurveTo( // Left ear curve
        center.x + 50, center.y - 177,
        center.x + 60, center.y - 157,
        center.x + 75, center.y - 122
    )

    context.closePath()

    context.moveTo(center.x - 100, center.y + 263)
    context.bezierCurveTo( // Bottom right paw curve
        center.x - 90, center.y + 252,
        center.x - 50, center.y + 283,
        center.x - 100, center.y + 283,
    )
    context.fillStyle = pusheenBodyColor
    context.fill()
    context.save()

    // Body Secondary color
    context.beginPath()
    context.arc(center.x - 206, center.y, 30, -1.14, Math.PI - 1.14)
    context.fillStyle = '#62554C'
    context.fill()
    context.save()

    context.beginPath()
    context.arc(center.x - 231, center.y + 75, 30, -1.45, Math.PI - 1.2)
    context.fill()

    // Tail secondary color
    context.beginPath()
    context.moveTo(center.x - 230, center.y + 245 - tailAngry)
    context.lineTo(center.x - 210, center.y + 245 - tailAngry)
    context.lineTo(center.x - 195, center.y + 285 - tailAngry)
    context.lineTo(center.x - 220, center.y + 285 - tailAngry)
    context.closePath()
    context.fill()

    context.beginPath()
    context.moveTo(center.x - 275, center.y + 250 - (tailAngry + 1))
    context.lineTo(center.x - 250, center.y + 248 - tailAngry)
    context.lineTo(center.x - 245, center.y + 285 - tailAngry)
    context.lineTo(center.x - 275, center.y + 285 - (tailAngry + 1))
    context.fill()

    // Head secondary color
    context.beginPath()
    context.arc(center.x - 56, center.y - 110, 12, -0.5, Math.PI + 0.5)
    context.fill()

    context.beginPath()
    context.arc(center.x - 23, center.y - 110, 12, -0.5, Math.PI + 0.5)
    context.fill()

    context.beginPath()
    context.arc(center.x + 10, center.y - 108, 12, -0.5, Math.PI + 0.5)
    context.fill()

    // Body Stroke
    context.beginPath()

    context.moveTo(center.x + 75, center.y - 122)
    context.bezierCurveTo( // Body left side curve
        center.x + 100 - eatingMoves, center.y - 37,
        center.x + 200 - eatingMoves, center.y + 162,
        center.x + 100, center.y + 262
    )
    context.bezierCurveTo( // Bottom left paw curve
        center.x + 110, center.y + 250,
        center.x + 150, center.y + 280,
        center.x + 100, center.y + 283
    )
    context.lineTo(center.x - 200, center.y + 283) // Bottom body line
    context.bezierCurveTo( // Tail curve
        center.x - 350, center.y + 303 - tailAngry * 5,
        center.x - 350, center.y + 242 - tailAngry * 5,
        center.x - 200, center.y + 248
    )
    context.bezierCurveTo( // Body right side curve
        center.x - 305 + eatingMoves, center.y + 162,
        center.x - 205 + eatingMoves, center.y - 37,
        center.x - 130, center.y - 122
    )
    context.bezierCurveTo( // Right ear curve
        center.x - 85, center.y - 187,
        center.x - 80, center.y - 177,
        center.x - 65, center.y - 117
    )
    context.lineTo(center.x + 20, center.y - 112) // Top head line
    context.bezierCurveTo( // Left ear curve
        center.x + 50, center.y - 177,
        center.x + 60, center.y - 157,
        center.x + 75, center.y - 122
    )
    context.closePath()
    context.lineWidth = 6
    context.strokeStyle = '#4B2707'
    context.stroke()
    

    context.beginPath()
    context.moveTo(center.x - 100, center.y + 263)
    context.bezierCurveTo( // Bottom right paw curve
        center.x - 90, center.y + 256,
        center.x - 50, center.y + 287,
        center.x - 100, center.y + 287,
    )
    context.lineTo(center.x - 192, center.y + 283)

    context.restore()
    context.restore()
    context.fill()
    context.lineWidth = 6
    context.strokeStyle = '#4B2707'
    context.stroke()

    // Draw left whiskers
    context.beginPath()
    
        context.moveTo(center.x - 130, center.y - 80) // Top whiskers
        context.quadraticCurveTo(
            center.x - 150, center.y - 95 + eatingMoves * 2,
            center.x - 170, center.y - 95 + eatingMoves * 2
        )

        context.moveTo(center.x - 140, center.y - 60) // Bottom whiskers
        context.quadraticCurveTo(
            center.x - 150, center.y - 70 + eatingMoves * 2,
            center.x - 185, center.y - 70 + eatingMoves * 2
        )

        context.lineWidth = 6
        context.lineCap = 'round'
        context.strokeStyle = '#4B2707'
        context.stroke()
}

const pusheenEyes = () => // Draw eyes & pupils
{
    if(isEating)
    {
        // Draw cute eyes
        context.beginPath()
        
        context.arc(center.x - 70, center.y - 75, 10, 0, Math.PI * 2) // Draw right eye
        context.moveTo(center.x + 30, center.y - 72)
        context.arc(center.x + 30, center.y - 72, 10, 0, Math.PI * 2) // Draw left eye
        context.fillStyle = '#4B2707'
        context.fill()
    } else
    {
        // Draw angry eyes
        context.beginPath()
        
        context.arc(center.x - 70, center.y - 75, 15, 0, Math.PI * 2)
        context.moveTo(center.x + 45, center.y - 72)
        context.arc(center.x + 30, center.y - 72, 15, 0, Math.PI * 2)
        context.fillStyle = '#fff'
        context.fill()
        context.stroke()
        
        // Draw pupils
        context.beginPath()

        context.arc(pupilRight.x, pupilRight.y, 5, 0, Math.PI * 2)
        context.arc(pupilLeft.x, pupilLeft.y, 5, 0, Math.PI * 2)
        context.fillStyle = '#4B2707'
        context.fill()
    }
}

const pusheenMouth = () => 
{
    context.beginPath()
    context.moveTo(center.x - 35 + mouthAngry - eatingMoves * 1.5, center.y - 72 + mouthAngry * 3)
    context.bezierCurveTo(
        center.x - 35 + mouthAngry * 2, center.y - 60 + eatingMoves,
        center.x - 20, center.y - 60 + eatingMoves,
        center.x - 20, center.y - 75 + eatingMoves
    )
    context.bezierCurveTo(
        center.x - 20, center.y - 60 + eatingMoves,
        center.x - 5 - mouthAngry * 2, center.y - 60 + eatingMoves,
        center.x - 5 - mouthAngry + eatingMoves * 1.5, center.y - 72 + mouthAngry * 3
    )
    context.fillStyle = '#B5A89D'
    context.fill()
    context.lineWidth = 6
    context.strokeStyle = '#4B2707'
    context.stroke()
}

const pusheenPaw = () => 
{
    context.beginPath()

    context.moveTo(center.x - 75, center.y)
    context.bezierCurveTo( // Top right paw curve
        center.x - 55, center.y - 20,
        center.x - 45, center.y,
        center.x - 65, center.y + 10
    )
    context.moveTo(center.x + 30, center.y)
    context.bezierCurveTo( // Top right paw curve
        center.x + 10, center.y - 20,
        center.x, center.y,
        center.x + 20, center.y + 10
    )
    context.fillStyle = '#B5A89D'
    context.fill()
    context.lineWidth = 6
    context.strokeStyle = '#4B2707'
    context.stroke()
}

const pusheenEyebrows = () =>
{
    context.beginPath()

    // Draw right eyebrow
    context.moveTo(center.x - 85, center.y - 105)
    context.quadraticCurveTo(
        center.x - 50, center.y - 90,
        center.x - 55, center.y - 95   
    )

    // Draw left eyebrow
    context.moveTo(center.x + 45, center.y - 102)
    context.quadraticCurveTo(
        center.x + 10, center.y - 87,
        center.x + 15, center.y - 92,  
    )

    context.stroke()
}

const donutDraw = () => 
{
    // Draw yellow pastry
    context.beginPath()
    context.moveTo(donut.x - 20, donut.y - 65 + eatingMoves / 3)
    context.bezierCurveTo(
        donut.x + 40 + eatingMoves, donut.y - 65,
        donut.x + 40 + eatingMoves, donut.y + 5,
        donut.x - 20, donut.y + 5 - eatingMoves
    )
    context.bezierCurveTo(
        donut.x - 80 - eatingMoves, donut.y + 5 - eatingMoves,
        donut.x - 80 - eatingMoves, donut.y - 65,
        donut.x - 20, donut.y - 65 + eatingMoves / 3
    )
    context.fillStyle = '#F9D896'
    context.fill()
    context.stroke()
    context.save()

    // Draw pink icing
    context.beginPath()
    context.moveTo(donut.x - 20, donut.y - 65 + eatingMoves / 3)
    context.bezierCurveTo(
        donut.x + 30 + eatingMoves, donut.y - 65,
        donut.x + 30 + eatingMoves, donut.y - 20,
        donut.x + 18, donut.y - 12 - eatingMoves
    )
    context.bezierCurveTo(
        donut.x, donut.y - 20,
        donut.x, donut.y,
        donut.x - 20, donut.y - 12 - eatingMoves
    )
    context.bezierCurveTo(
        donut.x - 40, donut.y - 20,
        donut.x - 40, donut.y,
        donut.x - 58, donut.y - 12 - eatingMoves
    )
    context.bezierCurveTo(
        donut.x - 70 - eatingMoves, donut.y - 20,
        donut.x - 70 - eatingMoves, donut.y - 65,
        donut.x - 20, donut.y - 65 + eatingMoves / 3
    )

    context.fillStyle = '#FFA6AF'
    context.fill()
    context.stroke()

    // Draw circle on pink icing
    context.beginPath()
    context.arc(donut.x - 10, donut.y - 20, 5, 0, Math.PI * 2)
    context.fillStyle = 'rgb(244, 247, 114)'
    context.fill()

    context.beginPath()
    context.arc(donut.x - 35, donut.y - 25, 5, 0, Math.PI * 2)
    context.fillStyle = 'rgb(169, 255, 255)'
    context.fill()

    context.beginPath()
    context.arc(donut.x - 45, donut.y - 40, 5, 0, Math.PI * 2)
    context.fillStyle = 'rgb(137, 255, 186)'
    context.fill()

    context.beginPath()
    context.arc(donut.x + 5, donut.y - 35, 5, 0, Math.PI * 2)
    context.fillStyle = 'rgb(137, 255, 186)'
    context.fill()

    context.beginPath()
    context.arc(donut.x - 5, donut.y - 50, 5, 0, Math.PI * 2)
    context.fillStyle = 'rgb(169, 255, 255)'
    context.fill()

    context.beginPath()
    context.arc(donut.x - 30, donut.y - 52 , 5, 0, Math.PI * 2)
    context.fillStyle = 'rgb(244, 247, 114)'
    context.fill()

    // Drawn hole of donut
    context.beginPath()
    context.moveTo(donut.x - 20, donut.y - 42)
    context.bezierCurveTo(
        donut.x - 5, donut.y - 42,
        donut.x - 5, donut.y - 32,
        donut.x - 20, donut.y - 32
    )
    context.bezierCurveTo(
        donut.x - 35, donut.y - 32,
        donut.x - 35, donut.y - 42,
        donut.x - 20, donut.y - 42
    )
    context.restore()
    context.fill()
    context.stroke()
}

const crumbDraw = () => 
{
    for(const crumb of crumbs)
    {
        context.beginPath()
        context.arc(crumb.x, crumb.y, crumb.radius, 0, Math.PI * 2)
        context.fillStyle = crumb.color
        context.fill()
    }
}

const pusheenQuote = () =>
{
    context.font = `Normal ${0.03 * window.innerWidth}px Arial`

    // The longer you keep the donut, more sentences Pusheen will say
    if(timer == 0 && resizing) // When you resize the window only
    {
        text = 'Can you stop resizing the window plz ?!'
    } else if(timer < 10)
    {
        text = '???'
    } else if(timer < 50)
    {
        text = `Wut... Are you serious right now ?`
    } else if(timer < 100)
    {
        text = `Can't believe you have stolen my donut...`
    } else if(timer < 150)
    {
        text = `Why you don't feed me ?`
        context.font = `Small-caps ${0.06 * $canvas.width}px Arial`
    } else if(timer < 250)
    {
        text = `Anyway i don't care about it anymore...`
        context.font = `Normal ${0.015 * $canvas.width}px Arial`
    } else
    {
        text = `Gimme back my donut !`
        context.font = `Small-caps ${0.08 * $canvas.width}px Arial`
    }
    context.textAlign = 'center'
    context.fillStyle = '#000'
    context.fillText(text, center.x, center.y - 220)
}