import React, { useState } from 'react';

export default function TableRow(props) {
    const [isEdited, setIsEdited] = useState(false);
    const [word, setWord] = useState(props.word);
    const [tempWord, setTempWord] = useState(props.word);
    const [transcription, setTranscription] = useState(props.transcription);
    const [tempTranscription, setTempTranscription] = useState(props.transcription);
    const [translation, setTranslation] = useState(props.russian);
    const [tempTranslation, setTempTranslation] = useState(props.russian);

    const handleChangeWord = (event) => {
        setTempWord(event.target.value);
        
    }
    const handleChangeTranscription = (event) => {
        setTempTranscription(event.target.value);
        
    }
    const handleChangeTranslation = (event) => {
        setTempTranslation(event.target.value);
        
    }

    const onClickButtonEdit = () => {
        setIsEdited(!isEdited);
    };

    const onClickButtonSave = () => {
        setWord(tempWord);
        setTranscription(tempTranscription);
        setTranslation(tempTranslation);
        setIsEdited(!isEdited);
    };

    const onClickButtonCancel = () => {
        setIsEdited(!isEdited);
        
    };

    return(
    <tr>
        {isEdited
        ?   <>
                                    <th>{props.index}</th>
                                    <th><input type="text" value={tempWord} onChange={handleChangeWord}/></th>
                                    <th><input type="text" value={tempTranscription} onChange={handleChangeTranscription}/></th>
                                    <th><input type="text" value={tempTranslation} onChange={handleChangeTranslation}/></th>
                                    <th>{props.tags}</th>
                                    <th>
                                        <button onClick={onClickButtonSave}>Save</button>
                                        <button onClick={onClickButtonCancel}>Cancel</button>
                                    </th>
            </>                    
        :  <>
                                    <th>{props.index}</th>
                                    <th>{word}</th>
                                    <th>{transcription}</th>
                                    <th>{translation}</th>
                                    <th>{props.tags}</th>
                                    <th>
                                        <button onClick={onClickButtonEdit}>Edit</button>                                   
                                        <button>Delete</button>
                                    </th>
            </>}                
    </tr>
)}