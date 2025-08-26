const Contact = () => {
  return (
    <section id="contact">
      <p>
        <b>Hit me up!</b>
        <br />
        Lorem Ipsum
      </p>
      <form>
        <label htmlFor="name">Name</label>
        <input required name="email" />
        <label htmlFor="email">Email</label>
        <input required name="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message"></textarea>
      </form>
    </section>
  );
};

export default Contact;
