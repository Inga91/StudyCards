
// import Language from './Language';
// import Description from './Description';
// import Button from './Button';
// import Flashcard from './Flashcard';
import Slider from './Slider';
import './Main.scss';
import React from 'react';
import TableRow from './TableRow';
import words from './data.json'


function Main() {

    
    return (
        <main className='main'>
            
            <div>
                <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>English</th>
                        <th>Transcription</th>
                        <th>Russian</th>
                        <th>Tags</th>
                        <th>Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map((word,index) => {
                    return (<TableRow word={word.english} 
                        index={++index} 
                        transcription={word.transcription} 
                        russian={word.russian} 
                        tags={word.tags}></TableRow>)
                    })}
                </tbody>
                </table>
            </div>
            <h2>Нажмите на карточку, чтобы проверить перевод</h2>
            {/* <div className='cards'>
                
            {words.map((word,index) => {
                    return (<Flashcard word={word.english} 
                    transcription={word.transcription} 
                    translation={word.russian} id={2} ></Flashcard>)
            })} 

            </div>   */}
            
            <div className='cards'>
               
                <Slider words={words} id={2}>
                </Slider>
            </div>  
        </main>
    );
}

export default Main;