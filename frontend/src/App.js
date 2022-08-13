import React, { useState } from "react";
// import "./styles.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Student from "./pages/Student";
import Faculty from "./pages/Faculty";
function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isSubmitted1, setIsSubmitted1] = useState(false);
  // const [name1, setName1] = useState();
  // const [phone1, setPhone1] = useState();
  // const [college1, setCollege1] = useState();
  // const [address1, setAddress1] = useState();
  // User Login info
  const database = [
    {
      username: "user1@gmail.com",
      password: "pass1",
    },
    {
      username: "user2@gmail.com",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    uname.value = "";
    pass.value = "";
  };
  // const handleSubmit1 = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();
  //   console.log("working");
  //   var { name, school, address, phone } = document.forms[0];
  //   setName1(name.value);
  //   setPhone1(phone.value);
  //   setAddress1(address.value);
  //   setCollege1(school.value);
  //   console.log(
  //     name.value + " " + phone.value + " " + address.value + " " + school.value
  //   );
  //   setIsSubmitted1(true);
  // };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="formbg">
      <div className="hlogin">Log In</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  // const renderLogged = (
  //   <div className="formbg">
  //     <div className="hlogin">Details</div>
  //     <form onSubmit={handleSubmit1}>
  //       <div className="input-container">
  //         <label>Name </label>
  //         <input type="text" name="name" placeholder="" />
  //       </div>
  //       <div className="input-container">
  //         <label>School </label>
  //         <input type="text" name="school" placeholder="" />
  //       </div>
  //       <div className="input-container">
  //         <label>Address </label>
  //         <input type="text" name="address" placeholder="" />
  //       </div>
  //       <div className="input-container" placeholder="">
  //         <label>Phone </label>
  //         <input type="text" name="phone" placeholder="" />
  //       </div>
  //       <div className="button-container">
  //         <input type="submit" />
  //       </div>
  //     </form>
  //     <div
  //       style={{ display: isSubmitted1 ? "block" : "none" }}
  //       className="formbg1 row"
  //     >
  //       <form>
  //         <div className="input-container1">
  //           <label className="col-md-4">Name </label>
  //           <input
  //             className="finals col-md-8"
  //             type="text"
  //             name="name"
  //             value={name1}
  //             readOnly
  //           />
  //         </div>
  //         <div className="input-container1">
  //           <label className="col-md-4">School </label>
  //           <input
  //             className="finals col-md-8"
  //             type="text"
  //             name="school"
  //             value={college1}
  //             readOnly
  //           />
  //         </div>
  //         <div className="input-container1">
  //           <label className="col-md-4">Address </label>
  //           <input
  //             className="finals col-md-8"
  //             type="text"
  //             name="address"
  //             value={address1}
  //             readOnly
  //           />
  //         </div>
  //         <div className="input-container1">
  //           <label className="col-md-4">Phone </label>
  //           <input
  //             className="finals col-md-8"
  //             type="text"
  //             name="phone"
  //             value={phone1}
  //             readOnly
  //           />
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
  const renderLogged = (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<Student />} />
          <Route path="/faculty" element={<Faculty />} />
        </Routes>
      </Router>
    </>
  );
  return <div className="app1">{isSubmitted ? renderLogged : renderForm}</div>;
}

export default App;
