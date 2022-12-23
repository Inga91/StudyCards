import React, { useState } from 'react';
import './Flashcard.scss';

export default function Flashcard(props) {
    const [isOpen, setOpenCard] = useState(false);
    
    const cardOpen = () => {
        setOpenCard(!isOpen);
    };
    
    return (
        <div className='card' onClick={cardOpen}>
            <p>{props.word}</p>
            <p>{props.transcription}</p>
            {(isOpen === true) && <p>{props.translation}</p>}
       
                
        </div>
    );
}

