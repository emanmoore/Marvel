import React from 'react';
import img1 from '../assets/batman.jpg';
import './card-style.css';

const Card = props => {
    return(
        <div className="card text-center shadow">
        <div className="overflow">
            <img src={props.imgsrc} alt="image 1" className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
                These are some superheroes that always fight crime all around the world. Crime doesn't pay so do good and stay out of trouble.
                </p>
                <a href="#" className="btn btn-outline-success">Crime Fighters</a>
            
        </div>
        </div>



    );

}

export default Card;