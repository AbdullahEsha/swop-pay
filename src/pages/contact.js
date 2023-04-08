import Image from "next/image";

const Contact = () => {
  return (
    <div className="contact-container-out">
      <div className="contact-container">
        <h1>Have a question for us?</h1>
        <p>
          Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
          use. The Flat is great to put under any phone case(non-metal) Users
          can download our app.
        </p>
        <div className="row">
          <div className="col-6">
            <div className="contact-image">
              <Image
                src="/image/contact-side.png"
                alt="contact-side"
                height={403}
                width={368}
              />
            </div>
          </div>
          <div className="col-6 contact-form-out">
            <div className="contact-form">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="What’s your email?" />
              <textarea rows="5" placeholder="Your questions..." />
              <button>SEND MESSAGE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
