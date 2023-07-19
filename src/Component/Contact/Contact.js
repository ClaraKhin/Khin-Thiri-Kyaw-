import React, { useState } from "react";
import "./Contact.css";
import contact from "../Contact/Contact.png";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname}.
            My Phone number is ${data.phone}.
            My Email address is ${data.email}.
            My Subject on ${data.subject}.
            Here is my message I want to say: ${data.message}.`
    );
  };
  return (
    <section id="contact">
      <div className="contact_container">
        <div className="heading text-center">
          <h3>CONTACT</h3>
        </div>
        <div className="content ">
          <div className="left box_shadow">
            <div className="image">
              <img src={contact} alt="Contact_Me" />
            </div>
            <div className="details">
              <h1>Khin Thiri Kyaw</h1>
              <p>
                Confident in my ability to contribute significantly to your
                organization. Excited about the opportunity to work together.
                Looking forward to hearing from you soon!
              </p>
              <p>Phone: +959772453726</p>
              <p>Email: clarakhin339@gmail.com</p> <br />
              <span>FIND WITH ME</span>
              <div className="button f-flex">
                <button className="btn_shadow">
                  <a
                    href="https://www.linkedin.com/in/khin-thiri-kyaw/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i
                      class="fa-brands fa-linkedin fa-lg"
                      style={{ color: "#0072b1" }}
                    ></i>
                  </a>
                </button>
                <button className="btn_shadow">
                  <a
                    href="https://www.instagram.com/clara_khin96/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i
                      class="fa-brands fa-instagram fa-lg"
                      style={{ color: "#E4405F" }}
                    ></i>
                  </a>
                </button>
                <button className="btn_shadow">
                  <a
                    href="https://twitter.com/ClaraThiri"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i
                      class="fa-brands fa-twitter fa-lg"
                      style={{ color: "#1DA1F2" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="right box_shadow">
            <form onSubmit={formSubmit}>
              <div className="input">
                <span>YOUR NAME</span>
                <input
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                />
              </div>
              <div className="input">
                <span>YOUR NUMBER</span>
                <input
                  type="phone"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                />
              </div>
              <div className="input">
                <span>EMAIL</span>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div className="input">
                <span>SUBJECT</span>
                <input
                  type="text"
                  name="subject"
                  value={data.subject}
                  onChange={InputEvent}
                />
              </div>
              <div className="input">
                <span>YOUR MESSAGE </span>
                <textarea
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <button className="btn-shadow">
                SEND MESSAGE <i className="fa fa-long-arrow-down"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
