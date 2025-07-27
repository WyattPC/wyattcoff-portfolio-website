import React, { useState, useRef } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    await fetch("https://getform.io/f/bejlkkwa", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      {submitted ? (
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 text-center">
          <div className="text-2xl mb-2">Thank you!</div>
          <div className="mb-4">Your message has been sent successfully.</div>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setSubmitted(false)}
          >
            Back to Contact
          </button>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4 bg-white rounded-xl shadow p-6"
        >
          <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">Name</label>
            <input
              className="w-full border rounded px-3 py-2"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email</label>
            <input
              className="w-full border rounded px-3 py-2"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="subject">Subject</label>
            <input
              className="w-full border rounded px-3 py-2"
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">Message</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>
      )}
      <div className="mt-8 text-center">
        <div className="mb-2">wyattcoff04@gmail.com | 0481 374 283 | Adelaide, SA</div>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/WyattPC" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/wyatt-coff-0045982bb/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 