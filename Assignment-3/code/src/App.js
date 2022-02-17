import React from 'react';
import './App.css';


const customer = {
  name: "Alan Ford",
  employeeID: 400054,
  Appointment: "11:22 AM (12/01/2022)",
  email: "xyz@gmail.com",
  phone: 12345674567,
  currTime: new Date().toLocaleTimeString()
};
var arrow = "<"
var right_arrow = ">";
function App() {
  return (
    <div className="site-container">
      { <div className='content'>
      <header>
          <div className='arrow'>
            <p>{arrow}</p>
          </div>
          <div className='customerName id'>
            <h3>{customer.name}</h3>
            <h5>{customer.employeeID}</h5>
          </div>
          <div className='btn'>
            <button>Print</button>
          </div>
        </header>
        <div className='customer-info'>
            <div className="appointment">
              <label>Appointment on</label><p>{customer.Appointment}</p>
            </div>
            <div className="email">
              <label>Email:</label><p>{customer.email}</p>
            </div>
            <div className="phone">
              <label>Phone</label><p>{customer.phone}</p>
            </div>
        </div>
        <div className='order-info'>
          <div className ="status">
            <strong>Status</strong><br/>
            <input type ="radio" defaultChecked></input><p>In Progress</p>
          </div>
          <div className ="door">
            <strong>Door</strong><br/>
            <p>Mark</p>
          </div>
          <div className ="time">
            <strong>Time</strong><br/>
            <p id ="time">{customer.currTime}</p>
          </div>
        </div>
        <div className='product-list'>
          <div className='customer-img'>
          <input type="checkbox"></input>
            <img src ="https://www.w3schools.com/howto/img_avatar.png" alt ="cust-image" />
          </div>
          <div className='appointer'>
            <p id ="appointer-title">Mr. Bob</p>
            <p>A great person with great abilties. He will be seeing you soon.</p>
          </div>  
          <p>{right_arrow}</p>
        </div>
        </div>
      }
    </div>
  );
}
export default App;