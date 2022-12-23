
import Language from './Language';
import Description from './Description';
import Button from './Button';
import Flashcard from './Flashcard';
import './Main.scss';
import React, { useState } from 'react';
import TableRow from './TableRow';

const words = [
    {
    "id": "13054",
    "english": "cat",
    "transcription": "[kæt]",
    "russian": "кошка",
    "tags": "животные",
    "tags_json": "[\"u0436u0438u0432u043eu0442u043du044bu0435\"]"
    },
    {
    "id": "13067",
    "english": "corn",
    "transcription": "[kɔːrn]",
    "russian": "кукуруза",
    "tags": "овощи",
    "tags_json": "[\"u043eu0432u043eu0449u0438\"]"
    },
    {
    "id": "13069",
    "english": "butterfly ",
    "transcription": "[ˈbʌtərflaɪ]",
    "russian": "бабочка",
    "tags": "насекомое",
    "tags_json": "[\"u043du0430u0441u0435u043au043eu043cu043eu0435\"]"
    },
    {
    "id": "13133",
    "english": "hedgehog",
    "transcription": "[ˈhedʒ.hɒɡ]",
    "russian": "ежик",
    "tags": "животные",
    "tags_json": "[\"u0436u0438u0432u043eu0442u043du044bu0435\"]"
    },
    {
    "id": "13144",
    "english": "kid",
    "transcription": "[kid]",
    "russian": "ребенок",
    "tags": "семья",
    "tags_json": "[\"u0441u0435u043cu044cu044f\"]"
    },
    {
    "id": "13146",
    "english": "mother",
    "transcription": "[ ˈmʌð.ə r] ",
    "russian": "мать",
    "tags": "семья",
    "tags_json": "[\"u0441u0435u043cu044cu044f\"]"
    },
    {
    "id": "13147",
    "english": "father",
    "transcription": "[ ˈfɑː.ðə r] ",
    "russian": "отец",
    "tags": "семья",
    "tags_json": "[\"u0441u0435u043cu044cu044f\"]"
    },
    {
    "id": "13148",
    "english": "family",
    "transcription": "[ ˈfæm. ə l.i ]",
    "russian": "семья",
    "tags": "семья",
    "tags_json": "[\"u0441u0435u043cu044cu044f\"]"
    },
    {
    "id": "13158",
    "english": "accelerator\t",
    "transcription": "[ əkˈseləreɪtə ]\t",
    "russian": "акселератор",
    "tags": "автомобиль",
    "tags_json": "[\"u0430u0432u0442u043eu043cu043eu0431u0438u043bu044c\"]"
    },
    {
    "id": "13163",
    "english": "brake\t",
    "transcription": "[ breɪk ]\t",
    "russian": "тормоз",
    "tags": "автомобиль",
    "tags_json": "[\"u0430u0432u0442u043eu043cu043eu0431u0438u043bu044c\"]"
    },
    {
    "id": "13164",
    "english": "brake fluid\t\t",
    "transcription": "[ breɪk ˈfluːɪd ]",
    "russian": "тормозная жидкость",
    "tags": "автомобиль",
    "tags_json": "[\"u0430u0432u0442u043eu043cu043eu0431u0438u043bu044c\"]"
    },
    {
    "id": "13166",
    "english": "bulbs\t",
    "transcription": "[ bʌlbz ]\t",
    "russian": "лампы",
    "tags": "автомобиль",
    "tags_json": "[\"u0430u0432u0442u043eu043cu043eu0431u0438u043bu044c\"]"
    },
    {
    "id": "13168",
    "english": "clutch\t",
    "transcription": "[ klʌtʃ ]\t",
    "russian": "сцепление",
    "tags": "автомобиль",
    "tags_json": "[\"u0430u0432u0442u043eu043cu043eu0431u0438u043bu044c\"]"
    },
    {
    "id": "13169",
    "english": "spruce",
    "transcription": " [spruːs]",
    "russian": "ель",
    "tags": "растения",
    "tags_json": "[\"u0440u0430u0441u0442u0435u043du0438u044f\"]"
    },
    {
    "id": "13171",
    "english": "mouse",
    "transcription": "[mʌuːs]",
    "russian": "мышь",
    "tags": "животные",
    "tags_json": "[\"u0436u0438u0432u043eu0442u043du044bu0435\"]"
    }
    ];

function Main() {

    
    return (
        <main className='main'>
            <div><table className='table'>
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
            <div className='cards'>
                
            {words.map((word,index) => {
                    return (<Flashcard word={word.english} 
                    transcription={word.transcription} 
                    translation={word.russian}  ></Flashcard>)
            })} 
            </div>    
        </main>
    );
}

export default Main;