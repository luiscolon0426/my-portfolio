interface ContactProps {
  message: string;
}

function Contact({ message }: ContactProps) {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <p>{message}</p>
    </div>
  );
}

export default Contact;
