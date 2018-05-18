import React, { Component } from 'react';
import './temp.css'

class App extends Component {
  render() {
    return (
      <div id="container">

          <h1>To-Do List<i className="fa fa-plus" ariaHidden="true" /></h1>

          <input type="text" placeholder="Add New Todo" />

          <ul>
              <li>
                <span className="delete">
                  <i className="fa fa-trash-o" ariaHidden="true" />
                </span>
                <span className="completedMobile">
                  <i className='fa fa-check' aria-hidden='true' />
                </span>
                Go to potions class
              </li>
              <li>
                <span className="delete">
                  <i className="fa fa-trash-o" ariaHidden="true" />
                </span>
                <span className="completedMobile">
                  <i className='fa fa-check' aria-hidden='true' />
                </span>
                Buy new robes
              </li>
              <li>
                <span className="delete">
                  <i className="fa fa-trash-o" ariaHidden="true" />
                </span>
                <span className="completedMobile">
                  <i className='fa fa-check' aria-hidden='true'/>
                </span>
                Visit Hagrid
              </li>
          </ul>
      </div>
    );
  }
}

export default App;
