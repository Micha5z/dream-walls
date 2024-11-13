import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';


const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://i0.wp.com/londondesigncollective.com/wp-content/uploads/2022/02/PLACEHOLDER_image6.jpg?fit=1050%2C447&ssl=1');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  padding: 9rem 0;

  /* Fix for large screens */
  @media (min-width: 961px) {
    flex-direction: row;
    background-attachment: fixed;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 0;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    z-index: 1;
    position: relative;
    color: #fff;
    
    /* Mobile adjustments */
    @media (max-width: 960px) {
      font-size: 1.8rem;
      text-align: left;
    }
  }

  /* Flex adjustments for contact form and contact info */
  .contact-form, .contact-info {
    z-index: 1;
    flex: 1;
  }

  /* Contact form adjustments */
  .contact-form {
    display: flex;
    flex-direction: column;
    
    label {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: #fff;
      z-index: 4;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      border: none;
      border-radius: 0.25rem;
      margin-bottom: 1rem;
      font-size: 1.1rem;
      background: transparent;
      border-bottom: 2px solid #fff;
      color: #fff;
      z-index: 4;

      &:focus {
        outline: none;
        box-shadow: none;
        border-bottom: 2px solid #182e87;
      }
    }

    button {
      padding: 0.6em 1.5em;
      border: none;
      border-radius: 2px;
      font-weight: bold;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: #182e87;
      background-color: #ffffff;
      transition: all 800ms;
      font-size: 15px;
      position: relative;
      overflow: hidden;
      outline: 2px solid #182e87;
      cursor: pointer;      
      float: right;
      margin-top: 20px;
    }
    
    button:hover {
      color: #ffffff;
      transform: scale(1.05);
      outline: 2px solid #182e87;
      box-shadow: 4px 5px 17px -4px #182e87;
    }
    
    button::before {
      content: "";
      position: absolute;
      left: -50px;
      top: 0;
      width: 0;
      height: 100%;
      background-color: #182e87;
      transform: skewX(45deg);
      z-index: -1;
      transition: width 500ms;
    }
    
    button:hover::before {
      width: 250%;
    }

        @media (max-width: 961px) {
      margin-top: 35px ;
    }
  }

  .contact-info {
    margin-top: 3rem;
    z-index: 1;
    flex: 1;

    @media (min-width: 961px) {
      margin-top: 0;
      text-align: left;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #fff;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.5;
      color: #fff;
    }
  }

  .container {
    z-index: 5;
    display: flex;
    flex-direction: column;

    @media (min-width: 961px) {
      flex-direction: row;
    }
  }

  strong {
    color: white;
  }

  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 10;
    font-weight: bold;
    text-align: center;
  }

  .popup.success {
    color: #207216;
  }

  .popup.error {
    color: #d32f2f;
  }
    p {
      font-size: 1.1rem;
      line-height: 1.5;
      color: #fff;
    }
`;




function Contact() {
  
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Add event listener for touchstart to close the popup on touch events
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      // Remove event listener on cleanup
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  const handleTouchStart = () => {
    setIsPopupVisible(false);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
  
    if (isSending) {
      return; // Prevent multiple submissions
    }
    setIsSending(true);
  
    try {
      await emailjs.sendForm('service_9j2wgbe', 'template_00bdir3', form.current, 'X10sgYtWdhJcHb-Vx');
      console.log('Email sent successfully');
      setIsSuccess(true);
      form.current.reset();
    } catch (error) {
      console.log('Error sending email:', error);
      setIsSuccess(false);
    }
  
    setIsSending(false);
    setIsPopupVisible(true);

      // Reset the popup visibility after 2 seconds
    setTimeout(() => {
    setIsPopupVisible(false);
  }, 2000);
  };
  return (
    <ContactContainer>
      <Container>
        <Row>

          <Col md="6" xs="12">             
          
             <h2>Druk Ścienny – Estetyka i Funkcjonalność</h2>
              <p>
              Oferujemy kompleksowe rozwiązania w zakresie druku ściennego, które łączą walory estetyczne z wysoką funkcjonalnością. Każdy nasz projekt to indywidualne podejście, które dopasowuje druk do charakteru wnętrza. Zapraszamy do kontaktu w celu omówienia szczegółów!
              </p>

              <div className="contact-info">
              <h2>Dane Kontaktowe</h2>
              <p><strong>Email:</strong> kontakt@dream-walls.pl</p>
              <p><strong>Daniel:</strong> +48 505 713 707</p>
              <p><strong>Dawid:</strong> +48 514 708 424</p>
            </div>

          </Col>
  
          <Col md="6" xs="12">
            
            <div className="contact-form">
              
              <h2>Napisz do nas</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">Imię</label>
                  <input type="text" id="name" name="from_name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" name="user_email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Wiadomość</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" value="Send" disabled={isSending}>
                  {isSending ? 'Wysyłanie...' : 'Wyślij'}
                </button>
              </form>
          </div>
          </Col>
        </Row>
      </Container>
      {isPopupVisible && (
        <div className={`popup ${isSuccess ? 'success' : 'error'}`}>
          {isSuccess ? 'Wiadomość została wysłana' : 'Błąd podczas wysyłania wiadomości. Proszę spróbować ponownie.'}
        </div>
      )}
    </ContactContainer>
  );
}

export default Contact;
