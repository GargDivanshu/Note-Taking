import AddNote from './AddNote';
import Note from "./Note";
// import PinNote from './PinNote'
 import {useState} from 'react';


const NoteList = ({ pin, note, handleAddNote, handleDelNote, handlePinNote}) => { 
    
  
    // if(isPin) {
    //     note.map((notes) => (           
    //         <Note id={notes.id}
    //               heading={notes.heading}
    //               text={notes.text}
    //               date={notes.date}
    //               handleDelNote={handleDelNote}
    //             //   handlePinNote={handlePinNote}
    //               />)
    //         )  
    // }
    
    
    return(
        
        <div className="note-list grid gap-2 mx-auto " >

{
         note.map((notes) => (           
             <Note id={notes.id}
                   heading={notes.heading}
                   text={notes.text}
                   date={notes.date}
                   handleDelNote={handleDelNote}
                    handlePinNote={handlePinNote}
                   />)
             )  
     }


        {/* {(pin) ? note.map((notes) => (           
        <PinNote id={notes.id}
              heading={notes.heading}
              text={notes.text}
              date={notes.date}
              handleDelNote={handleDelNote}
              />)
        ) : note.map((notes) => (           
        <Note id={notes.id}
              heading={notes.heading}
              text={notes.text}
              date={notes.date}
              handleDelNote={handleDelNote}

              handlePinNote={handlePinNote}
              />)
        ) } */}
        <AddNote handleAddNote={handleAddNote}/>

        </div>
    );
};

export default NoteList;