import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1>To contact me:</h1>
      <form className="contactInfo">
        <span>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
          <label>Email:</label>
          <input type="email" placeholder="Your Email" />
          <label>Mobile:</label>
          <input type="tel" placeholder="Your Phone Number" />
          <label>Please write here your request:</label>
          <input type="text" />
          <button type="submit" className="btn">
            Send
          </button>
        </span>
      </form>
    </div>
  );
}
