import { useState } from 'react'
import { useEffect, useRef } from 'react'
import './Flashcard.scss'

export default function Flashcard(props) {
    const [isOpen, setOpenCard] = useState(false)
    const ref = useRef()
    console.log(`123`)
    useEffect(() => {
        ref.current.focus()
        console.log(`ref`, ref.current)
    }, [props.word])

    const cardOpen = () => {
        setOpenCard(!isOpen)
        props.onChangeQantity()
    }

    useEffect(() => {
        setOpenCard(false)
    }, [props.word])

    return (
        <div className="card">
            <div>
                <p>{props.word}</p>
                <p>{props.transcription}</p>
            </div>
            {isOpen === true && <p>{props.translation}</p>}
            <button onClick={cardOpen} ref={ref}>
                {!isOpen === true ? 'Посмотреть перевод' : ' Скрыть перевод'}
            </button>
        </div>
    )
}
