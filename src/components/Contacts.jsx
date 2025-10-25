import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_q5ki91f",
        "template_u91f4lo",
        form.current,
        "OawI2PY0fi1RDnYh9"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

        {/* Contact Information */}
        <div className="mb-10">
          <p className="mb-2">📧 <a href="mailto:abednegokaume@gmail.com" className="text-blue-400 hover:underline">abednegokaume@gmail.com</a></p>
          <p className="mb-2">📱 <a href="tel:0742600965" className="text-blue-400 hover:underline">0742600965</a></p>
          <p className="mb-2">🌍 Nyahururu, Laikipia</p>
          <p className="mb-2">
            💼 <a href="https://www.linkedin.com/in/kaume-abednego-937469362" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a> |{" "}
            <a href="https://github.com/Abednego254" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
          </p>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded font-semibold transition-all"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-green-400 mt-2">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-2">❌ Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contacts;
