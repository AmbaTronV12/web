import React from "react";
import './About.css'
import logo from '../../assets/Logo.svg'
import { useNavigate } from "react-router-dom";
import { useState, useRef } from 'react';
import Follow from './Follow'
// import AboutImg from '../../assets/About Img.svg'
import { test, insta, facebook, tiktok, x } from "../../assets";

function About() {
    const navigate = useNavigate()
    const handleNavigateBack = () => {
        navigate('/')
    }

    const [isFollowOpen, setFollowOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const triggerRef = useRef(null);


    const handleTextClick = () => {
        const triggerElement = triggerRef.current;
        if (triggerElement) {
            const rect = triggerElement.getBoundingClientRect();
            setPosition({
            x: rect.left,
            y: rect.bottom,
          });
        }
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
                    <h4 ref={triggerRef} onClick={handleTextClick}>FOLLOW US</h4>
                    <h4>LOGIN</h4>
                </div>
      </header>
        <Follow position={position} isOpen={isFollowOpen} onClose={handleCloseFollow}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="instagram" />

            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="tiktok" />

            </a>
            <a href="https://x.com/?lang=id" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="x" />

            </a>
        </Follow>

        <div className="body">
            <h1>ABOUT US</h1>
            <img src={test} alt="about"/>
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