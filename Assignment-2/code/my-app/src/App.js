import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
    <div className ="profile-Image">
      <img className ="image"  src = {employee.profileImg} alt ="Profile-Image" />
    </div>
    <div className ="title">
      <h1>{employee.name}</h1>
      <div className ="profile-Info">
        <label>Location</label>
        <p>{employee.location}</p>
      </div>
      <div className ="profile-Info">
        <label>Blood Group</label>
        <p>{employee.bloodGroup}</p>
      </div>
      <div className ="profile-Info">
        <label>Age</label>
        <p>{employee.age}</p>
      </div>
    </div>
</div>
)
}



export default App;
