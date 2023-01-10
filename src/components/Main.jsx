import Game from './Game'
import './Main.scss'
import words from './data.json'
import { Routes, Route } from 'react-router-dom'
import Table from './Table'
import NoMatch from './NoMatch'

function Main() {
    return (
        <main className="main">
            <Routes>
                <Route exact path="/" element={<Table />} />
                <Route path="/game" element={<Game words={words} id={2} />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </main>
    )
}

export default Main
