import { useState } from 'react'
import Flashcard from './Flashcard'
import './Game.scss'

export default function Slider(props) {
    const { words, id } = props
    const [index, setIndex] = useState(id)

    const prevCard = () => {
        if (index === 0) {
            setIndex(words.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    const nextCard = () => {
        if (index === words.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <div>
            <h2>Нажмите на карточку, чтобы проверить перевод</h2>
            <div className="cards">
                <Flashcard
                    word={words[index].english}
                    transcription={words[index].transcription}
                    translation={words[index].russian}
                    style={{ textAlign: 'center' }}
                ></Flashcard>
                <div style={{ textAlign: 'center' }}>
                    <button onClick={prevCard}>{'<-'}</button>
                    <button onClick={nextCard}>{'->'}</button>
                </div>
            </div>
        </div>
    )
}
