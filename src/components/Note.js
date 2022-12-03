import { MdDeleteForever, MdPushPin } from 'react-icons/md';
// import {useState} from 'react';

const Note = ({pin, id, heading, text, date, handleDelNote, handlePinNote}) => {

    return(
      <div className="note bg-sky-500 whitespace-pre-wrap rounded p-4 min-h-[170px] flex flex-col justify-between "> 
      <div className="flex flex-col">
      <h1 className="font-semibold text-xl break-words">{heading}</h1>
      <span className="break-words">{text}</span>
      </div>
      <div className="note-footer flex justify-between items-center">
        <small>{date}</small>
        <div className="flex items-center justify-between ">
        <MdPushPin className="cursor-pointer" onClick={() => {(pin) = (!pin); handlePinNote=(id)}}/> 
        {/* {console.log(pin)} */}
        <MdDeleteForever onClick={()=> handleDelNote(id)} className="delete-icon w-5 h-5 cursor-pointer" />
        </div>
      </div>
      </div>
    ); 
};

export default Note;