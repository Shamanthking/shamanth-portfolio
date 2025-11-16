import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // success or error
  const [popup, setPopup] = useState(false); // success popup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ⭐ Netlify Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    const form = e.target;

    try {
      await fetch("/", {
        method: "POST",
        body: new FormData(form),
      });

      setLoading(false);
      setPopup(true); // Show success popup
      setToast({ type: "success", message: "Message sent successfully!" });

      // clear form
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Redirect to Thank You page after 2 sec
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 2000);

    } catch (err) {
      setLoading(false);
      setToast({ type: "error", message: "Failed! Try again later." });
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-500 text-2xl" />,
      label: "Email",
      value: "shamanth2626@gmail.com",
      link: "mailto:shamanth2626@gmail.com",
    },
    {
      icon: <FaPhone className="text-green-500 text-2xl" />,
      label: "Phone",
      value: "+91 ",
      link: "tel:+***********",
    },
    {
      icon: <FaLinkedin className="text-blue-700 text-2xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/shamanth-m",
      link: "https://linkedin.com/in/shamanth-m",
    },
    {
      icon: <FaGithub className="text-gray-300 text-2xl" />,
      label: "GitHub",
      value: "github.com/shamanth2626",
      link: "https://github.com/shamanth2626",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500 text-2xl" />,
      label: "Location",
      value: "Mysuru, Karnataka, India",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white dark:bg-black transition"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-3"></div>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            I'm always open to discussing opportunities and collaboration.
          </p>
        </div>

        {/* Toast Notification */}
        {toast && (
          <div
            className={`fixed top-6 right-6 px-5 py-3 rounded-lg shadow-lg text-white transition animate-fade-in
            ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
          >
            {toast.message}
          </div>
        )}

        {/* Success Popup */}
        {popup && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50">
            <div className="bg-gray-800 p-10 rounded-2xl text-center shadow-xl animate-pop">
              <h2 className="text-3xl font-bold text-green-400">Thank You!</h2>
              <p className="text-gray-300 mt-2">Your message has been sent.</p>
              <div className="mt-6">
                <div className="loader mx-auto mb-4"></div>
                <p className="text-sm text-gray-400">
                  Redirecting to Thank You page...
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE INFO */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
                >
                  <div className="mr-4">{info.icon}</div>

                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        className="text-white hover:text-blue-400 transition"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Interests</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Hackathons",
                  "Open-source",
                  "Volunteering",
                  "AI Research",
                  "Mentoring",
                  "Tech Communities",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-600 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* FORM (NETLIFY ENABLED) */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-300 mb-1 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="text-gray-300 mb-1 block">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-300 mb-1 block">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
            </div>

            <div>
              <label className="text-gray-300 mb-1 block">Message</label>
              <textarea
                rows="6"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition 
              ${loading ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"}`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Loader Styles */}
      <style>{`
        .loader {
          border: 4px solid #ffffff30;
          border-top: 4px solid #4f8cff;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(-10px);}
          to {opacity: 1; transform: translateY(0);}
        }

        .animate-pop {
          animation: pop 0.3s ease;
        }
        @keyframes pop {
          from {transform: scale(0.7); opacity: 0;}
          to {transform: scale(1); opacity: 1;}
        }
      `}</style>
    </section>
  );
}
