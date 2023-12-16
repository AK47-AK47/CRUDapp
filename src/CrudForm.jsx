import {InputField} from "./InputField.jsx";
import { useState, useRef } from "react";

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

  const [userData, setUserData] = useState(initialUserData);

  //refs used for focus after submit (with or with out errors)
  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const cityRef = useRef(null);
  const zipcodeRef = useRef(null);
  const phoneRef = useRef(null);
  
  function hadleOnChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
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
      phoneRef.current.focus();
    }

    //zipcode input should contain only digits or a hyphen
    //(actually star-end with digit and includes digits with 0|1 hyphen)
    const regXzipcode = /^\d+[-]?\d+$/;
    if (!regXzipcode.test(userData.zipcode)) {
      newErrors.zipcodeError = true;
      newErrors.isValid = false;
      zipcodeRef.current.focus();
    }

    //city input should contains only letters
    const regXcity = /^[A-z]+$/;
    if (!regXcity.test(userData.city)) {
      newErrors.cityError = true;
      newErrors.isValid = false;
      cityRef.current.focus();
    }

    if (!userData.email.includes("@")) {
      newErrors.emailError = true;
      newErrors.isValid = false;
      emailRef.current.focus();
    }

    if (userData.username.length < 5) {
      newErrors.usernameError = true;
      newErrors.isValid = false;
      usernameRef.current.focus();
    }

    if (userData.name.length < 5) {
      newErrors.nameError = true;
      newErrors.isValid = false;
      nameRef.current.focus();
    }
    //set up errors of validation
    setErrors({ ...newErrors })
    //on submit without errors focus on first inut field
  }



  return (
    <form className="crud-form" name="crudForm" onSubmit={submitForm} action="" method="" noValidate>
      <InputField name="name" type="text" error={errors.nameError} onChange={hadleOnChange} value={userData.name} ref={nameRef}/>
      <InputField name="username" type="text" error={errors.usernameError} onChange={hadleOnChange} value={userData.username} ref={usernameRef}/>
      <InputField name="email" type="email" error={errors.emailError} onChange={hadleOnChange} value={userData.email} ref={emailRef}/>
      <InputField name="city" type="text" error={errors.cityError} onChange={hadleOnChange} value={userData.city} ref={cityRef}/>
      <InputField name="zipcode" type="text" error={errors.zipcodeError} onChange={hadleOnChange} value={userData.zipcode} ref={zipcodeRef}/>
      <InputField name="phone" type="text" error={errors.phoneError} onChange={hadleOnChange} value={userData.phone} ref={phoneRef}/>
      <div className="form-row">
        <button name="submitButton">Save</button>
      </div>
    </form>
  );
}