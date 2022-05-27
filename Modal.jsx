import React from "react";


export const Modal = () => {

    return (
        <div className='shade-area'>
            <div className="modal-container">
                <form className="form-group">
                <label>Full Name </label>
                <input type="text" className="form-control" placeholder="Name"
                    required
                    />
                    <br></br>
                    <br></br>
                    <label>Phone Number  </label>
                    <input type="number" className="form-control" placeholder="Phone no"
                    required
                    />
                    <br></br>
                    <br></br>
                    <label>Address  </label>
                    <input type="text" className="form-control" placeholder="Residential Address"
                    required
                    />
                    <br></br>
                    <br></br>
                    <label>Total Price  </label>
                    <input type="textarea" className="form-control" placeholder="Price" 
                    required
                    />
                    <br></br>
                    <br></br>
                    <button  type="button" className="btn btn-success btn-md"  >Submit</button>
                </form>
               
                
            </div>
        </div>
    )
}