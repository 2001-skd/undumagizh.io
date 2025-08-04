import "../css/header.css";
import "../css/contact.css";

const Contact = () => {
  return (
    <section className="page_section contact_container">
      <h1 className="contact_title">Contact Us - Undu Magizh</h1>

      <form className="contact_form">
        <div className="form_group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>

        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="form_group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Your message here..."
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="contact_btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
