import styled from "styled-components";

const Wrapper = styled.section`
  padding: 6rem 0 4rem 0;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  input,
  textarea {
    width: 30% !important;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.2rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    text-transform: uppercase;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    resize: none;
  }

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-input {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper className="section">
      <h2>Feel Free To Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60491.24595661881!2d73.76957248775015!3d18.63242950019526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8676520f9a1%3A0x5eae9569521bc7a9!2sPimpri%20Colony%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1683095486132!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <form
          className="contact-input"
          action="https://formspree.io/f/mnqyjboa"
          method="POST"
        >
          <input
            type="text"
            name="username"
            placeholder="username"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            row="6"
            cols="30"
            autoComplete="off"
            required
          ></textarea>
          <input type="submit" className="btn" value="send" />
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
