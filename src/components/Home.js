import React from 'react';

import { useEffect } from 'react';
import { auth } from '../config/Config';
import { useHistory } from 'react-router';
import { Navbar } from './Navbar';
import '../css/Home.css';
import { FaInstagram,FaEnvelope,FaPhone } from 'react-icons/fa';
export const Home = ({user})=>{

    const history = useHistory();
    useEffect(
        ()=>{
            auth.onAuthStateChanged(
                user=>{
                    if(!user){
                        history.push('/login')
                    }
                }
            );
        }
    )




    document.body.style.backgroundImage = "url('../images/Capture.PNG')";
    return(
        
        <div className='homeScreenMain'>
            <div>
            <Navbar user={user} />
            </div>
            <div className='mainDiv'>
                <h2>Pain is temporary,</h2>
                <h2>pride is forever💪🏽</h2>
            </div> 
            <div className='contactUsDiv'>  
                <p id="text" id="p1-contactUs">Contacts :</p>
                <p id="padding-removal">Coach Wissam </p>
                <p>Manager Karen</p>
                <div className="links-contactUs">
                    <a  href='https://www.instagram.com/fit14gym/?utm_medium' target="_blank"><p><FaInstagram /></p></a>
                     <p ><FaEnvelope /> karen.fh00@gmail.com</p>
                </div>
                </div>
        </div>
        
    );
} 