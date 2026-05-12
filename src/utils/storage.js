export function saveNotes(notes){

    localStorage.setItem("notes" , JSON.stringify(notes))
}

export function loadNotes(){

     const storeNotes = localStorage.getItem("notes");

     return storeNotes ? JSON.parse(storeNotes) : [];
}