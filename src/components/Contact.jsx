import React from 'react'
import './Contact.css'
import Msjhuman from './img/Typing-rafiki.svg'
import toast from 'react-hot-toast';
import handwave from './img/waveinghand.png'
function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "84a11761-b4bf-46bd-b936-cdc248aa409a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Successfully sented")
    }
  };



  return (
    <div id='foot' className="footers">
      <div className="footer">
        <div className="container">
          <div className="footerWrap">
            <div className="head">
              <h2>Say,Hi! <img src={handwave} alt="" /></h2>
              <p>To get in touch with me, just text.</p>
            </div>

            <div className="contactUs">
              <div className="image">
                <img src={Msjhuman} alt="" />
              </div>
              <div className="body">
                <form onSubmit={onSubmit} >
                  <div className="input">
                    <input required type="text" name="name" className="focused" id="inputname" />
                    <label htmlFor="inp">Name</label>
                  </div>
                  <div className="input">
                    <input required type="text" name="email" className="focused" id="inputmail" />
                    <label htmlFor="inp">Email</label>
                  </div>
                  <div className="message input">
                    <textarea name="message" className='focused' id="msj" cols="30" rows="10"></textarea>
                    <label htmlFor="">Message</label>
                  </div>
                  <button id="btn" type="submit">Send the message</button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Contact