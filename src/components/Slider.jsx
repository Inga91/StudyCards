import React, { useState } from 'react';
import Flashcard from './Flashcard';

export default function Slider(props) {
    const {words, id} = props;
    const [index, setIndex] = useState(id);

    const prevCard = () => {   
        if (index === 0) {
            setIndex(words.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    };

    const nextCard = () => { 
        if (index === words.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    };

    return (
        
        <div >
            <Flashcard word={words[index].english} 
                    transcription={words[index].transcription} 
                    translation={words[index].russian}  ></Flashcard>         
            <div style={{textAlign: 'center'}}>
                <button onClick={prevCard}>{'<-'}</button>
                <button onClick={nextCard}>{'->'}</button>
            </div>
        </div>
    );
}
