import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpand, setExpand] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function expand() {
    setExpand(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpand && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> }

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
        />
        <Zoom in={isExpand}>
          <Fab size="small" aria-label="add" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
