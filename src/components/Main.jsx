
// import Language from './Language';
// import Description from './Description';
// import Button from './Button';
// import Flashcard from './Flashcard';
import Game from './Game';
import './Main.scss';
import React from 'react';
import words from './data.json'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Table from './Table';


function Main() {

    
    return (
        <main className='main'>
            <Routes>
                <Route exact path="/" element={<Table/>} />
                <Route path="/game" element={<Game words={words} id={2}/> } />
                <Route path="*" element={<NoMatch />} />
            </Routes>
           
        </main>
    );
}

export default Main;
function NoMatch() {
    return(
        <h2>Ошибка 404</h2>
    )
}