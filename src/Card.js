import * as React from 'react';
import "./card.css";
export default function Cards(props) {
    return (
        <div className='cards'>
            <img src={props.img} className='card_img' />
            <div className='card_body'>
                <h2 className='card_title'>{props.title}</h2>
                <p className='card_description'>{props.description}</p>
                <a href={props.link}><button className='card_btn'>Github</button></a>
            </div>
        </div>
    );
}
