import React from 'react'
import ReactPlayer from 'react-player'
import  { Navbar } from './Navbar';
import '../css/Video.css'
import Select from 'react-select';
import { useHistory } from 'react-router';


export const VideosLegWorckout = ({user})=>{
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
    console.log(test);
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
                url='https://firebasestorage.googleapis.com/v0/b/budyfit-2ed84.appspot.com/o/videos%2FlegsWorckout%2FLynn%20Legs.mp4?alt=media&token=18a99724-21bf-4478-9dd9-7a46541e8eac' />
                </div>

                <div className="VideoContainer">
                <ReactPlayer
                controls
                width={"100%"}
                height={"400px"}
                url='https://firebasestorage.googleapis.com/v0/b/budyfit-2ed84.appspot.com/o/videos%2FlegsWorckout%2FMacha%20Legs.mp4?alt=media&token=b4a358f5-a161-464a-bd80-4f8f0f899a3e' />
                </div>

                </div>

                <div className="videosDiv">
                <div className="VideoContainer">
                <ReactPlayer 
                controls
                width={"100%"}
                height={"400px"}
                url='https://firebasestorage.googleapis.com/v0/b/budyfit-2ed84.appspot.com/o/videos%2FlegsWorckout%2FLynn%20Legs2.mp4?alt=media&token=6608e464-5bc6-478c-8112-2c14830c0636' />
                </div>

                <div className="VideoContainer">
                <ReactPlayer
                controls
                width={"100%"}
                height={"400px"}
                url='https://firebasestorage.googleapis.com/v0/b/budyfit-2ed84.appspot.com/o/videos%2FlegsWorckout%2FWissam%20Legs.mp4?alt=media&token=ad05570b-5d0b-40e9-b887-e7f40b5faafa' />
                </div>
                </div>

                <div className="categorylDescription">
                <p>
                If you think Monday is the worst day of the week think again. Try walking down the stairs after leg day!
                 If you can do it then you need to train harder, if not then congratulations you have passed your leg day!💪🏽
                </p>
            </div>
            </div>
    );
} 

