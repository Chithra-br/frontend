import React from "react";
import StripeButton from "./stripebuttoncomponent";

class Checkout extends React.Component {
    
  state = { inputValue: '' };
  
  render() {
    const myStyle={
      backgroundImage: "url(https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-seafood-vegetable-pizza-gourmet-background-poster-image_214182.jpg)",
      height:'100vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
  return (   
    <div>
       <div style={myStyle}>
       <form>
                <label> Enter Amount  </label>
                <input type="number"
                    value={this.state.inputValue}
                    onChange={(e) => this.setState(
                    { inputValue: e.target.value })}/>
          </form>
          <br></br>
      
      <StripeButton price={this.state.inputValue} />
      </div>
      </div> 

  );
};
};
export default Checkout;