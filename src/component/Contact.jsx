import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    alert('Thank you for contacting us!');
    setForm({ name: '', email: '' });
  };






  
  //   const obj1 = {
  //     name: 'Anmol',
  //     email: 'anmol@gmail.com'
  //
  //     address: {
  //         addressLine1: '123 Main St',
  //         addressLine2: 'Apt 4B'
  //   }
  //   };
  //
  //   const obj2 = obj1;
  //
  //   const obj3 = {
  //     name: 'Anil',
  //     email: 'anil@gmail.com'
  //   };
  //
  //   const obj4 = {...obj1};
  //   console.log("Logging object:", Object.is(obj1, obj3));
  //   console.log("Logging object", obj4);

  return (
    <section className={styles.contact} id="contact-form">
      <div className={styles.box}>
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
