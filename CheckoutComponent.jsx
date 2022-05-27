import React, { useState } from 'react';
import  {Modal} from "./Modal";
import StripeButton from "./StripeButtonComponent";

function Checkout() {

  //show modal state
const [showModal, setShowModal] = useState(false);

//trigger modal
const triggerModal = () => {
  setShowModal(true);
}  
     
      return (   
        <div>
            
          <StripeButton price={200} />
          <br></br>
          <h6 className='text-center'
          style={{marginTop: 5+'px',marginBottom:5+'px',marginLeft:50+'px'}}>OR</h6>
          <button  type="button" style ={ {color:'blue'}}
          onClick={()=>triggerModal()}>Cash on Delivery</button>
          {showModal===true&&(
        <Modal/>
        )}
      </div>
      

  );
    
  };


export default Checkout;