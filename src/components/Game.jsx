import { useState } from 'react'
import Flashcard from './Flashcard'
import './Game.scss'

export default function Slider(props) {
    const { words, id } = props
    const [index, setIndex] = useState(id)
    const [qantity, setQantity] = useState(0)
    const [indexArr, setIndexArr] = useState([])

    const onChangeQantity = () => {
        if (!indexArr.includes(index)) {
            setQantity(qantity + 1)
            setIndexArr([...indexArr, index])
        }
    }

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
            {/* <h2>Нажмите на карточку, чтобы проверить перевод</h2> */}
            <div className="cards">
                <Flashcard
                    word={words[index].english}
                    transcription={words[index].transcription}
                    translation={words[index].russian}
                    onChangeQantity={onChangeQantity}
                    style={{ textAlign: 'center' }}
                ></Flashcard>
                <div style={{ textAlign: 'center' }}>
                    <button onClick={prevCard}>{'<-'}</button>
                    <button onClick={nextCard}>{'->'}</button>
                </div>
                <div>
                    <p>Выучено {indexArr.length} слов </p>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
