import React, { useState } from 'react';
import { useEffect } from 'react';
import './Flashcard.scss';

export default function Flashcard(props) {
    const [isOpen, setOpenCard] = useState(false);
    
    const cardOpen = () => {
        setOpenCard(!isOpen);
    };

    useEffect(() => {
        setOpenCard(false);
    }, [
        props.word
      ]);
    
    return (
        <div className='card' onClick={cardOpen}>
            
            <p>{props.word}</p>
            <p>{props.transcription}</p>
            {(isOpen === true) && <p>{props.translation}</p>}              
        </div>
    );
}

