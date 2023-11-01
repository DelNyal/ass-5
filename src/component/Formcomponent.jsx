import React, { useState } from "react";
import "../styles/form.css";
import { useAppContext } from "../context/AppContext";
const Formcomponent = () => {
  const {
    formData,
    setFormData,
    handleInputChange,
    handleColorChange,
    handleSubmit,
  } = useAppContext();
  const [isNameValid, setIsNameValid] = useState(true);
  const [nameError, setNameError] = useState(false);
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <>
      {formData.isLogin && (
        <div className="logined">
          <div className="id-card" style={{ backgroundColor: formData.color }}>
            <img
              className="profile"
              src="https://designstripe-secure.imgix.net/scene-snapshots/590d0222-56e8-466f-8882-aa0d1963d90c/1638569373780/default?auto=format&h=1080&s=d7a2f556d9d369767b7160025af03019"
              alt="Profile Picture"
            />
            <h2>{formData.name}</h2>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            <button onClick={handleSubmit}>Go Back</button>
          </div>
        </div>
      )}
      {!formData.isLogin && (
        <div className="regeister">
          <div className="container">
            <div className="left">
              <div className="image">
                <img
                  width={500}
                  height={450}
                  src="https://pxxl.space/dist/images/illustrations/Outer%20space-rafiki.png"
                />
                <h1>Welcome Guest</h1>
                <p>Let create your account</p>
              </div>
            </div>
            <div className="-right">
              <div className="container2">
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group ">
                   
                    <input
                      className={`input-group ${formData.errors.name != "" ? "invalid":""}`}
                      autoComplete="no"
                      type="name"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      
                    />
                    
                   
                   <i  className={"error-name"} style={ {display:formData.errors.name != "" ? "block" : "none" }}>{formData.errors.name}</i>
                  </div>
                  <div className="form-group">
                    <input
                    className={`input-group ${formData.errors.email != "" ? "invalid":""}`}
                    autoComplete="no"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                    <i
                      className="error-email"
                      style={{display:formData.errors.email != "" ? "block" : "none"}}
                    >
                      {formData.errors.email}
                    </i>
                  </div>
                  <div className="form-group">
                    <input
                    className={`input-group ${formData.errors.phone != "" ? "invalid":""}`}
                    autoComplete="no"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                    />
                    <i
                      className="error-phone"
                      style={{display:formData.errors.phone != "" ? "block" : "none"}}
                    >
                     {formData.errors.phone}
                    </i>
                  </div>
                  <div className="form-group">
                    <input
                      type="radio"
                      name="color"
                      value="red"
                      checked={formData.color === "red"}
                      onChange={handleColorChange}
                    />{" "}
                    Red
                    <input
                      type="radio"
                      name="color"
                      value="green"
                      checked={formData.color === "green"}
                      onChange={handleColorChange}
                    />{" "}
                    Green
                    <input
                      type="radio"
                      name="color"
                      value="blue"
                      checked={formData.color === "blue"}
                      onChange={handleColorChange}
                    />{" "}
                    Blue
                    <input
                      type="radio"
                      name="color"
                      value="yellow"
                      checked={formData.color === "yellow"}
                      onChange={handleColorChange}
                    />{" "}
                    Yellow
                  </div>
                  <button type="submit">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Formcomponent;
