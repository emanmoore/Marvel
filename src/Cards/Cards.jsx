import React, { Component } from 'react';
import Card from './CardUI';

import img1 from '../assets/blackpanther2.jpg';
import img2 from '../assets/batman.jpg';
import img3 from '../assets/spiderman2.jpg';



class Cards extends Component{
render() {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img1} title="Black Panther"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} title="Batman"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img3}title="Spiderman"/>
                </div>
            </div>
            
        </div>
    );
}

}

export default Cards;



