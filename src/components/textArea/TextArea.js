import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

const TextArea = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const [note, setNote] = useState(
        {
            title: "",
            content: ""

        });

    function expand() {
        setIsExpanded(true);
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setNote((prevNotes) => {
            return {
                ...prevNotes,
                [name]: value,
            };
        })
    }

    function addNotes(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form className='create-note'>
                {isExpanded && <input name="title" placeholder='title' value={note.title} onChange={handleChange} />}
                <textarea name="content" placeholder='Take a note...' rows={isExpanded ? 3 : 1} value={note.content} onClick={expand} onChange={handleChange} />
                <Zoom in={isExpanded}>
                    <Fab onClick={addNotes}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default TextArea;
