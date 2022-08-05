import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import Notification from "../../ui/notification";
const ContactForm = () => {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();
  const [requestStatus, setRequestStatus] = useState();

  const sendMessageHandler = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const name = nameInputRef.current.value;
    const message = messageInputRef.current.value;
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        message,
      }),
    });
  };

  return (
    <section className={styles.contact}>
      <h1>How may i help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameInputRef} />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Email</label>
          <textarea id="message" rows={`5`} required ref={messageInputRef} />
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
