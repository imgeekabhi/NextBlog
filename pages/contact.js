import React from "react";
import ContactForm from "../Components/Contact/ContactForm";
import Head from "next/head";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="This is contact us page where you can reach to us."
        />
      </Head>
      <ContactForm />
    </>
  );
};
export default Contact;
