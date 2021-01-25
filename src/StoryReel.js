import React from 'react';
import Story from './Story';
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
                profileSrc="https://avatars.githubusercontent.com/u/76537764?s=400&u=7a2e10e8023a50d7ff83931b8a6b2dab4203f08b&v=4"
                title="Alan Zurita"
             />
             <Story 
                image="https://scontent.faep16-1.fna.fbcdn.net/v/t31.0-8/13680285_1363465090334338_377141879342186055_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=HlffOFa48ToAX-iql_i&_nc_ht=scontent.faep16-1.fna&oh=e2e39edf7efb5b5cccc37bd234e6a537&oe=603246F0"
                profileSrc="https://scontent.faep16-2.fna.fbcdn.net/v/t31.0-8/15937063_1566136796733832_6025016223017773636_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=FB628bKgXFcAX8Y3qR2&_nc_ht=scontent.faep16-2.fna&oh=578e158d91258c375bfab8b116b72ad3&oe=60333842" 
                title="Leo Noriega"
             />

        </div>
    )
}

export default StoryReel
