import { useState } from "react";

export default function CrudForm() {
  
  const initialUserData = {
    name: "",
    username: "",
    email: "",
    city: "",
    zipcode: "",
    phone:"",
  };
  const [userData, setUserdata] = useState(initialUserData);
  
  function hadleOnChange(e) {
    setUserdata({ ...userData, [e.target.name]: e.target.value });
  }

  return (
    <form className="crud-form" name="crudForm" action="" method="" noValidate>
      <div className="form-row">
        <label htmlFor="name" className="form-control__item">Name:</label>
        <input id="name" name="name" type="text" onChange={hadleOnChange} value={userData.name}/>
      </div>
      <div className="error-message">
        <p id="nameError"></p>
      </div>
      <div className="form-row">
        <label htmlFor="username" className="form-control__item">Username:</label>
        <input id="username" name="username" type="text" onChange={hadleOnChange} value={userData.username}/>
      </div>
      <div className="error-message">
        <p id="usernameError"></p>
      </div>
      <div className="form-row">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" onChange={hadleOnChange} value={userData.email}/>
      </div>
      <div className="error-message">
        <p id="emailError"></p>
      </div>
      <div className="form-row">
        <label htmlFor="city">City:</label>
        <input id="city" name="city" type="text" onChange={hadleOnChange} value={userData.city}/>
      </div>
      <div>
        <p className="error-message" id="cityError"></p>
      </div>
      <div className="form-row">
        <label htmlFor="zipcode">Zipcode:</label>
        <input id="zipcode" name="zipcode" type="text" onChange={hadleOnChange} value={userData.zipcode}/>
      </div>
      <div>
        <p className="error-message" id="zipcodeError"></p>
      </div>
      <div className="form-row">
        <label htmlFor="phone">Phone:</label>
        <input id="phone" name="phone" type="tel" onChange={hadleOnChange} value={userData.phone}/>
      </div>
      <div>
        <p className="error-message" id="phoneError"></p>
      </div>
      <div className="form-row">
        <button name="submitButton">Save</button>
      </div>
    </form>
  );
}