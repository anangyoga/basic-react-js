import React, { Component } from "react";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component{
    state = {
        order: 9,
        name: 'Tim'
    }

    handleCounterChange = (newValue) =>{
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
           <>
           <div className="header">
               <div className="logo">
                  <h3>Logo</h3>
               </div>
               <div className="troley">
                   <div className="count">{this.state.order}</div>
               </div>
           </div>
                {/* nama di sini bebas terserah kita */}
           <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)}/>
           </>
        )
    }
}

export default Product