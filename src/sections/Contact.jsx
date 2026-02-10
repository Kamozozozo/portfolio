import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,   
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,  
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY    
        
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
          setTimeout(() => setSuccess(false), 3000); // hide success after 3s
        },
        (error) => {
          setLoading(false);
          alert("Oops! Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 bg-background">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        Contact
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Contact info */}
        <div className="flex-1 bg-background shadow-lg rounded-xl p-8 flex flex-col justify-center gap-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Get in Touch
          </h3>
          <p className="text-muted-foreground">
            I’m open to collaborations, freelance work, or just a friendly chat!
          </p>

          <div className="flex flex-col gap-3 mt-6 text-primary">
            <div className="hover:text-accent transition">
              <strong>Email:</strong> kamozozobaete@gmail.com
            </div>
            <div className="hover:text-accent transition">
              <strong>Phone:</strong> +27 726 266 459
            </div>
            <div className="hover:text-accent transition">
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Kamozozozo"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                github.com/Kamozozozo
              </a>
            </div>
            <div className="hover:text-accent transition">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/kamogelo-matabane-724953338"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                linkedin.com/in/kamogelo-matabane-724953338
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="flex-1 bg-background shadow-lg rounded-xl p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border border-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full border border-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full border border-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className={`bg-primary text-background font-semibold py-3 rounded-lg hover:bg-accent transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && (
              <p className="mt-2 text-green-500 font-medium">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
