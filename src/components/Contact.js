import React from "react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactPage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    contactPage();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.value);

    setUserData({ ...userData, [name]: value });
    // console.log(setUserData({...userData,[name]:value}))
  };

  const contactForm =async(e) => {

    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();
    if (!data) {
      console.log("message not sent");
    } else {
      alert("message send");
      setUserData({ ...userData, message: "" });
    }
  };
  return (
    <>
      <div className="contect_info">
        <div className="container_fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="cntact-info-item d-flex">
                <div className="contect-info-contect">
                  <div className="contect-info-title">phone</div>
                  <div className="contect-info-title">+198567444</div>
                </div>
              </div>
              <div className="cntact-info-item d-flex justify-content-start">
                <div className="contect-info-contect">
                  <div className="contect-info-title ">Email</div>
                  <div className="contect-info-title">Email@gmail.com</div>
                </div>
              </div>
              <div className="cntact-info-item d-flex">
                <div className="contect-info-contect">
                  <div className="contect-info-title">Address</div>
                  <div className="contect-info-title">Pune</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-info">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="py-5">Get in touch</div>
            <form method ="POST" id="contect-form">
              <div className="d-flex justify-content-between align-items">
                <input
                  type="text"
                  onChange={handleInputs}
                  value={userData.name}
                  name="name"
                  placeholder="Your Name"
                  required="true"
                ></input>
                <input
                  type="email"
                  onChange={handleInputs}
                  value={userData.email}
                  name="email"
                  placeholder="Your Email"
                  required="true"
                ></input>
                <input
                  type="number"
                  onChange={handleInputs}
                  value={userData.phone}
                  name="phone"
                  placeholder="Your Phone number"
                  required="true"
                ></input>
              </div>
              <div className="mt-4">
                <textarea
                  name="message"
                  placeholder="message "
                  onChange={handleInputs}
                  value={userData.message}
                  cols="100"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={contactForm}
                  className="button btn-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
