import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile_photo.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className = "typingeffect" text={['Hi, I\'m Suheyl Enis','Computer Science Major', 'Finance Minor', 'Undergrad Research Assistant']} speed={150} eraseDelay={100} typingDelay = {1000}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home