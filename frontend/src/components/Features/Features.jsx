import React from 'react';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faBullseye, faHandshake } from '@fortawesome/free-solid-svg-icons';


const Features = ({ theme }) => {
  

    // const features = [
    //     { 
    //       title: "Vision", 
    //       desc: "To inspire and connect a community of students who are passionate about exploring nature, fostering a deep appreciation for the outdoors, and promoting a healthy, adventurous lifestyle" 
    //     },
    //     { 
    //       title: "Mission", 
    //       desc: "Provide students with opportunities to discover and experience the beauty of the natural world through organized hikes and outdoor activities and cultivate environmental stewardship, encourage physical fitness, and build lasting friendships among members while promoting safety and inclusive in all our endeavors" 
    //     },
    //     { 
    //       title: "Value", 
    //       desc: "Adventure, Leadership, Community, Sustainability, Safety, Wellness, Education and Respect" 
    //     },
    // ];

    return (
        // <section className={`features ${theme}`} id="features">
            
        //     <div className="feature-list">
        //         {features.map((feature, index) => (
        //             <div key={index} className="feature-item">
        //                 <h3>{feature.title}</h3>
        //                 <p>{feature.desc}</p>
        //             </div>
        //         ))}
        //     </div>

        // </section>
        <section className={`features ${theme}`} id="features">
            <section >
                <div className="container">
                    <div className="row gtr-200">
                        <section className="col-4 col-12-narrower">
                            <div className={`box highlight ${theme}`}>
                                <FontAwesomeIcon icon={faBinoculars} beat style={{color: "#74C0FC"}} size="3x"/><br /><br />
                                <h3>Vision</h3>
                                <p>To inspire and connect a community of students who are passionate 
                                    about exploring nature, fostering a deep appreciation for the outdoors, and 
                                    promoting a healthy, adventurous lifestyle</p>
                            </div>
                        </section>
                        <section class="col-4 col-12-narrower">
                            <div class={`box highlight ${theme}`}>
                                <FontAwesomeIcon icon={faBullseye} beat style={{color: "#74C0FC"}} size="3x" /><br /><br />
                                <h3>Mission</h3>
                                <p>Provide students with opportunities to discover and experience the beauty of the natural world through organized
                                    hikes and outdoor activities and cultivate environmental stewardship, encourage physical 
                                    fitness, and build lasting friendships among members while promoting safety and inclusivity in all our 
                                    endeavors.</p>
                            </div>
                        </section>
                        <section class="col-4 col-12-narrower">
                            <div class={`box highlight ${theme}`}>
                                <FontAwesomeIcon icon={faHandshake} beat style={{color: "#74C0FC"}} size="3x" /><br /><br />
                                <h3>Value</h3>
                                <p>Adventure, Leadership, Community, Sustainability, Safety, Wellness, Education and Respect</p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>


            <section className= {`wrapper style2 ${theme}`}>
                <div className='container'>
                <header class="major">
                        <h2>Are you ready to embark on an adventure filled with fun, friendship, and fantastic experiences?</h2>
                        <p> Look no further! We are thrilled to introduce RUS Hiker's Club and 
                            invite you to be a part of the excitement.
                        </p>
                    </header>
                </div>
            </section>
                
        </section>
        
    );
};

export default Features;
