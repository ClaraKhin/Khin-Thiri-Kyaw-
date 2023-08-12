import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import contact from "../Contact/Contact.png";

const Contact = () => {
  const [state, handleSubmit] = useForm("mdorkepq");
  if (state.succeeded) {
    alert(
      "Thank you for your time and attention! I will reach you out very soon."
    );
  }

  return (
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
          <form onSubmit={handleSubmit} id="form">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" name="name" autoComplete="off" />
            <ValidationError prefix="Text" field="text" errors={state.errors} />

            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" autoComplete="off" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="phone" name="phone" autoComplete="off" />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />

            <label htmlFor="textarea">Message</label>
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
