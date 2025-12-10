import React, { useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import "./Contact.css"
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

 const validate = (data) => {
    let newErrors = {};

    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = "Enter a valid email address";

    if (!data.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Read values only on SUBMIT
  const data = Object.fromEntries(new FormData(e.target));

  const newErrors = validate(data);
  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) return;

  // Update state (for UI) – optional
  setFormData(data);

  setIsSending(true);

  emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: data.name,      // ✅ use data
        from_email: data.email,    // ✅ use data
        message: data.message,     // ✅ use data
      },
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      toast.error("Oops! Something went wrong. Please try again later.");
    })
    .finally(() => {
      setIsSending(false);
    });
};

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSending}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSending}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            disabled={isSending}
          ></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}

          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="social-links">
          <a href="https://github.com/sureshkumarks1" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/sureshkumarksdev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:sureshkumarksdev@gmail.com">Email</a>
        </div>
      </div>
    </section>
  );
}
