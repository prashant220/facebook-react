import React from 'react'
import Story from './Story'
import './StoryReel.css'
import About from './image/about.png'
import Blue from './image/blue.jpg'
import Dark from './image/dark.jpg'
import Earth from './image/earth.jpg'

function StoryReel() {
    return (
        <div className="storyreel">
            <Story  image={About}
            profileSrc={Dark}
                    title="Messi"
            />
           
            <Story image={Dark} profileSrc={About}  title="Ronaldo"/>
            <Story image={Blue} profileSrc={Earth} title="Werner"/>
            <Story image={Earth} profileSrc={Blue} title="Kante"/>
            
        </div>
    )
}

export default StoryReel
