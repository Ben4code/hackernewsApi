import React, {useEffect, useState} from 'react'
import {getStoryIds} from '../services/hnApi'
import {Story} from '../components/Story'


export const StoriesContainer = () => {
    //UseState Hook
    const [storyIds, setStoryIds] = useState([]);

    //UseEffect Hook
    useEffect(() => {
        getStoryIds().then(Ids => setStoryIds(Ids));  
    }, []);

        
    return (
        <>
            <h1>Hacker News App</h1>
            {
                storyIds.map(storyId => {
                    return(
                        <Story key={storyId} storyId={storyId}/>
                    )
                })
            }
        </>
    )
}
