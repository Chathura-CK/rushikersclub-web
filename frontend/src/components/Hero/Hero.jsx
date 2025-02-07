import React from 'react';
import './Hero.css';


const Hero = ({ theme }) => {
    
   return (
    <div className={`hero ${theme}`} id="page-wrapper">
       
        {/* Banner */}
        <section id="banner">
            <header>
                <h2>Welcome to RUS Hiker's Club!</h2>
                <a href="/about" className="button">Learn More</a>
            </header>
        </section>

      
    </div>
        
    );
};

export default Hero;