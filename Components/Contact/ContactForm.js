import React, { useRef, useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import Notification from "../../ui/notification";

const sendContactData = async (contactDetail) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactDetail),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

const ContactForm = () => {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const name = nameInputRef.current.value;
    const message = messageInputRef.current.value;

    setRequestStatus("pending");

    try {
      await sendContactData({
        email,
        name,
        message,
      });
      setRequestStatus("success");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
    //to reset the field after submission
    emailInputRef.current.value = "";
    nameInputRef.current.value = "";
    messageInputRef.current.value = "";
  };

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "sending message...",
      message: "Your message is on the way!",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

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
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={`5`} required ref={messageInputRef} />
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
