import React from "react";
import { NavLink,useHistory } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData =async(e)=>{
e.preventDefault();
const {name,email,phone,work,password,cpassword} = user;

 const res =  await fetch("/register",{
   method:"POST",
   headers:{
     "Content-Type" : "application/json"
   },
   body:JSON.stringify({
    name,email,phone,work,password,cpassword
   })
 });
 const data = await res.json();
 if(res.status === 422 || !data){
   window.alert("Invalid Registration");
   console.log("Invalid Registration");

 }else{
   window.alert("Registration Succefull");
   console.log("Registration Succefull");
   history.push("/login");
 }

  }
  return (
    <>
      <form method="post">
        <div className="form-group">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputs}
            className="form-control"
            id="name"
            autoComplete="off"
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">User Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputs}
            className="form-control"
            id="email"
            autoComplete="off"
            placeholder="Your Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">phone</label>
          <input
            type="number"
            name="phone"
            value={user.phone}
            onChange={handleInputs}
            className="form-control"
            id="phone"
            autoComplete="off"
            placeholder="Your phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="work">Profession</label>
          <input
            type="text"
            name="work"
            value={user.work}
            onChange={handleInputs}
            className="form-control"
            id="work"
            autoComplete="off"
            placeholder="Your Profession"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputs}
            className="form-control"
            id="password"
            autoComplete="off"
            placeholder="Your password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cpassword">confirm Password</label>
          <input
            type="password"
            name="cpassword"
            value={user.cpassword}
            onChange={handleInputs}
            className="form-control"
            id="cpassword"
            autoComplete="off"
            placeholder="Your confirm password"
          />
        </div>
        <div className="form-group form-button">
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit"
            value="register"
            onClick={PostData}
          ></input>
        </div>
      </form>
      <div>
        <NavLink to="/login"> i am already registered</NavLink>
      </div>
    </>
  );
};

export default Signup;
