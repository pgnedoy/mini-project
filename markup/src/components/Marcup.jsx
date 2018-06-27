import React, { Component } from 'react';

import './marcup-style.css'

class Marcup extends Component {
  
  render() {
      return (
        
            <div class="grid-container">
                <div class="item1">Stiky  Header</div>
                <div class="item2">Block A</div>
                <div class="item3">Block C</div>  
                <div class="item4">Block B</div>
                <div class="item5">Block D</div>
                {/* <div class="emptyItem"></div> */}
                <div class="item6">Block E</div>
                <div class="item7">Footer</div>
            </div> 

      )
    
  }
}



export default Marcup;