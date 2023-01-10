import TableRow from './TableRow';
import words from './data.json'
import './Table.scss';

export default function Table() {
    return (
        
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
                        key={index} 
                        index={++index} 
                        transcription={word.transcription} 
                        russian={word.russian} 
                        tags={word.tags}></TableRow>)
                    })}
                </tbody>
    </table>
   )
}