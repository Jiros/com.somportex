import React, { useState }  from "react"
import axios from "axios";
import { Link } from "gatsby"
import Layout from "../components/layout"

const MyForm = () => {

    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/Rb4lA6bB",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
        <Layout>

    <div>
         <div className="col-md-8 mt-5">
            <h3 class="fell">Get in touch today!</h3>
            <form onSubmit={handleOnSubmit}>
              <input type="email" name="email" placeholder="Your Email"></input>
              <input type="phone" name="phone" placeholder="Your phone"></input>
              <input type="text" name="name" placeholder="Your Name"></input>
              <input type="text" name="message" placeholder="Your Message"></input>
              <button type="submit">Send</button>
          </form>
        </div>
      </div>

  </Layout>

    );
  };

  export default MyForm;
