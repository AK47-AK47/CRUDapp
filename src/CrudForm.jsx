import InputField from "./InputField.jsx";
import { useState } from "react";

export default function CrudForm() {
  const [errors, setErrors] = useState({
    nameError: false,
    usernameError: false,
    emailError: false,
    cityError: false,
    zipcodeError: false,
    phoneError: false,
    isValid: true,
  });

  const initialUserData = {
    name: "",
    username: "",
    email: "",
    city: "",
    zipcode: "",
    phone: "",
  };
  const [userData, setUserdata] = useState(initialUserData);
  
  function hadleOnChange(e) {
    setUserdata({ ...userData, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    validateForm(userData);
  }

  function validateForm(userData) {

    //new errors obj(can mutate it) to use it on setErrors
    let newErrors = { nameError: false, usernameError: false, emailError: false, cityError: false, zipcodeError: false, phoneError: false, isValid: true, };
    
    // asume the correct phone number has exact 10digits
    const regXphone = /^\d{10}$/;
    if (!regXphone.test(userData.phone)) {
      newErrors.phoneError = true;
      newErrors.isValid = false;
    }

    //zipcode input should contain only digits or a hyphen
    //(actually star-end with digit and includes digits with 0|1 hyphen)
    const regXzipcode = /^\d+[-]?\d+$/;
    if (!regXzipcode.test(userData.zipcode)) {
      newErrors.zipcodeError = true;
      newErrors.isValid = false;
    }

    //city input should contains only letters
    const regXcity = /^[A-z]+$/;
    if (!regXcity.test(userData.city)) {
      newErrors.cityError = true;
      newErrors.isValid = false;
    }

    if (!userData.email.includes("@")) {
      newErrors.emailError = true;
      newErrors.isValid = false;
    }

    if (userData.username.length < 5) {
      newErrors.usernameError = true;
      newErrors.isValid = false;
    }

    if (userData.name.length < 5) {
      newErrors.nameError = true;
      newErrors.isValid = false;
    }
    //set up errors of validation
    setErrors({...newErrors})
  }



  return (
    <form className="crud-form" name="crudForm" onSubmit={submitForm} action="" method="" noValidate>
      <InputField name="name" type="text" error={errors.nameError} onChange={hadleOnChange} value={userData.name} />
      <InputField name="username" type="text" error={errors.usernameError} onChange={hadleOnChange} value={userData.username} />
      <InputField name="email" type="email" error={errors.emailError} onChange={hadleOnChange} value={userData.email} />
      <InputField name="city" type="text" error={errors.cityError} onChange={hadleOnChange} value={userData.city} />
      <InputField name="zipcode" type="text" error={errors.zipcodeError} onChange={hadleOnChange} value={userData.zipcode} />
      <InputField name="phone" type="text" error={errors.phoneError} onChange={hadleOnChange} value={userData.phone} />
      <div className="form-row">
        <button name="submitButton">Save</button>
      </div>
    </form>
  );
}