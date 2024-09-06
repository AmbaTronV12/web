import React from "react";
import './About.css'
import logo from '../../assets/Logo.svg'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Follow from './Follow'
// import AboutImg from '../../assets/About Img.svg'
import { test } from "../../assets";

function About() {
    const navigate = useNavigate()
    const handleNavigateBack = () => {
        navigate('/')
    }

    const [isFollowOpen, setFollowOpen] = useState(false);

    const handleTextClick = () => {
        setFollowOpen(true); // Open the pop up when the text is clicked
    };

    const handleCloseFollow = () => {
        setFollowOpen(false); // Close the pop up
    };
    return(
        <div className='container'>
            <header className='hd'>
                <img src={logo} alt='logoFudiy'/>
                <div className='hdnav'>
                    <h4 onClick={handleNavigateBack}>HOME</h4>
                    <h4 onClick={handleTextClick}>FOLLOW US</h4>
                    <h4>LOGIN</h4>
                </div>
      </header>
        <Follow isOpen={isFollowOpen} onClose={handleCloseFollow}>
            <h1>TEST</h1>
        </Follow>

        <div className="body">
            <h1>ABOUT US</h1>
            <img src={test}/>
            <p className="desc">This website was created on January 16 2024, 
                this website was created by a group of friends,
                whose founders consisted of several names,
                namely <b>Devanno Satria Ananta, Farrel Shelano Haryanto, Feral Benedict Irvin Maindoka,</b>
                and <b>I Putu Rohedi Arya WIjaya Putra.</b> These 4 friend created this website to complete DDPK 
                assignments which were about FIGMA. The point of creating this website is to help simplify 
                the ordering system without queuing or also to help the people who work in a restaurant 
                so that their work becomes easier. Previously they had to record orders ordered by customers, 
                but now just by checking from the website they can see people who orders what without any typos 
                or things being forgotten when writing down the order.</p>
        </div>

        </div>
    )
}

export default About