import { useState } from "react";

function UserConfirmationModal(){

      
     const [selectId, setSelectId] = useState(null);

     function openModal(id){

          setSelectId(id);
     }

     function closeModal(){

         setSelectId(null);
     }

     return {

          selectId,
          openModal,
          closeModal,
     }
}

export default UserConfirmationModal;