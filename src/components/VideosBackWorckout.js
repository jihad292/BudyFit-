import React from 'react'
import ReactPlayer from 'react-player'
import  { Navbar } from './Navbar';
import '../css/Video.css'
import Select from 'react-select';
import { useHistory } from 'react-router';


export const VideosBackWorckout = ({user})=>{
    const history = useHistory();
    const workoutType = [
        {
            value:1,
            label:"Legs workout"
        },
        {
            value:2,
            label:"Back workout"
        },
        {
            value:3,
            label:"Arms workout"
        },
        {
            value:4,
            label:"Chest workout"
        }
    ]
    let test = null;

    const changeHndler = value =>{
        test = value.value;
        test = value.value;
        if (test === 1){
            history.push('/videos/LegsWorckout');
        }
        if(test === 2){
            history.push('/videos/BackWorckout');
        }
        if(test === 3){
            history.push('/videos/ArmsWorckout');
        }
        if(test === 4){
            history.push('/videos/ChestWorckout')
        }
    }
    return(
        
        <div>
            <Navbar user={user} />
            <h1>Videos</h1>
            <div className="generalDescription">
                <p>
                Whether you’re a girl or a boy, young or old, it’s your decision to change yourself and start your 
                transformation. Wissam, Macha and Lynn are 3 people with different age, shape and gender, but they 
                share the same passion: having a goal and aiming to reach it! Giving up is not an option and moving 
                forward is the only way for them💪🏽
                </p>
            </div>
                <Select 
                    
                    options={workoutType}
                    onChange={(value)=>changeHndler(value)}
                />
            <div className="videosDiv">
                <div className="VideoContainer">
                <ReactPlayer 
                controls
                width={"100%"}
                height={"400px"}
                url='https://firebasestorage.googleapis.com/v0/b/budyfit-2ed84.appspot.com/o/videos%2FbackWorckout%2FMacha%20Back.mp4?alt=media&token=15330641-a7d0-4ba9-8b91-5494d8246460' />
                </div>

                <div className="VideoContainer">
                <ReactPlayer
                controls
                width={"100%"}
                height={"400px"}
                url='https://firebasestorage.googleapis.com/v0/b/budyfit-2ed84.appspot.com/o/videos%2FbackWorckout%2FWissam%20Back2.mp4?alt=media&token=115fa8c5-0f5f-4e90-9a74-5c511e22087a' />
                </div>

                </div>

                <div className="videosDiv">
                <div className="VideoContainer">
                <ReactPlayer 
                controls
                width={"100%"}
                height={"400px"}
                url='https://firebasestorage.googleapis.com/v0/b/budyfit-2ed84.appspot.com/o/videos%2FbackWorckout%2FWissam%20Back.mp4?alt=media&token=3002a159-7051-4479-a8e4-36897de82b54' />
                </div>

                <div className="VideoContainer">
                <ReactPlayer
                controls
                width={"100%"}
                height={"400px"}
                url='https://firebasestorage.googleapis.com/v0/b/budyfit-2ed84.appspot.com/o/videos%2FbackWorckout%2FWissam%20Back3.mp4?alt=media&token=c75101c9-db50-4cfe-b6dc-7f68c149f9cd' />
                </div>
                </div>

                <div className="categorylDescription">
                <p>
                Give them a reason to talk behind your back! Your body will definitely not change overnight but a focused determination 
                will get you there! Why waste time then? Start training today💪🏽
                </p>
            </div>
            </div>
    );
} 

