import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts';
import SEO from '../components/seo';
import BG from "../components/bg";
import BrandInfo from '../components/infoSection';
import Offer from '../components/offerSection';
import Contact from '../components/contact'; // już zaimportowany poprawnie
import 'bootstrap/dist/css/bootstrap.css';
import { initializeApp } from "firebase/app";
// Styled components definitions
const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
`;

const Title = styled.h1`
  width: 100%;
  font-size: 3rem;
  margin-bottom: 2rem;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  padding-top: 200px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: white;
  margin-top: 0;

  @media (max-width: 960px) {
    font-size: 2rem;
    padding-top: 150px;
  }
`;

const SubTitle = styled.h2`
  width: 100%;
  font-size: 2.5rem;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: white;
  margin-top: 20px;

  @media (max-width: 960px) {
    font-size: 1.8rem;
  }
`;

const StyledTradeLink = styled.a`
  display: block;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1rem;
  padding: 1.2rem 1.7rem;
  background-color: ${({ theme }) => theme.textColor};
  background: linear-gradient(269deg, #36c557 -14.78%, #182e87 110.05%);
  text-decoration: none;
  color: white;
  border-radius: 55px;
  font-weight: 600;
  width: 100%;
  overflow-wrap: normal;
  width: min-content;
  white-space: wrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.small};

  :hover,
  :focus {
    border: 1px solid white;
    color: white;
  }
`;

const BGImage = styled.div`
  background-image: url('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/oferta_domkow_zdj%2Fbaner2.webp?alt=media&token=778ca00c-8c45-45f9-a109-d08af8c833fd');
  width: 100%;
  margin-top: -110px;
  position: relative;
  min-height: 480px;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 961px) {
    background-attachment: fixed;
  }
`;

// Scroll function
const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHLHrAtRIkP2Bj9nErmYpKAc-HNgROMbI",
  authDomain: "dream-walls-28f97.firebaseapp.com",
  projectId: "dream-walls-28f97",
  storageBucket: "dream-walls-28f97.appspot.com",
  messagingSenderId: "831571122455",
  appId: "1:831571122455:web:252c249276df9e090ebf52"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Main component
const IndexPage = (props) => {
  const app = initializeApp(firebaseConfig);
  
  return (
    <Layout path={props.location.pathname}>
      <SEO
        title='Druk ścienny'
        path={props.location.pathname}
        description='Drukujemy wszystko co potrzebujesz, gdzie potrzebujesz'
      />
      <BG />
      <StyledBody>
        {/* Usunięcie zbędnych komponentów (FullWidthCarousel, Slider) */}
        <Contact /> {/* Komponent Contact działa poprawnie */}
      </StyledBody>
    </Layout>
  );
};

export default IndexPage;
