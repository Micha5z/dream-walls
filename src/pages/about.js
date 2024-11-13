import React from 'react';
import styled from 'styled-components';
import Offer from '../components/offerSection';
import { Container, Col, Row } from 'reactstrap';
import Contact from '../components/contact';


import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

const StyledAbout = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  background-color: ${({ theme }) => theme.colors.blackWhite};
  padding: 0rem 0rem 6rem 0;
  margin-top: -110px;
  
  // min-height: 90vh;
`

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 42px;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  // text-align: center; 
  @media (max-width: 960px) {
    font-size: 2.5rem;
  }
`
const Text = styled.p`
  // margin-bottom: 4rem;
  // text-align: center; 
  font-size: 1.2rem;
  pointer-events: none;

  @media (max-width: 960px) {
    font-size: 1rem;
  }
`

const AboutPage = props => {

  return (
    <Layout path={props.location.pathname}>
      <BG />

      <SEO title="About" path={props.location.pathname} />
      <StyledAbout>
        <Container style={{paddingTop:140}}>
          <Title> O nas </Title>
          W naszej firmie łączymy pasję do sztuki z nowoczesnym rzemiosłem, oferując wyjątkowe rozwiązania dla każdego wnętrza. Jesteśmy zespołem kreatywnych profesjonalistów, którzy nieustannie poszukują inspiracji w otaczającym nas świecie. Nasze produkty, od druku ściennego po personalizowane projekty, są tworzone z myślą o kliencie — chcemy, aby każdy mógł znaleźć coś, co odzwierciedli jego osobowość i styl.
<br></br><br></br>
Stawiamy na jakość i innowacyjność, dlatego korzystamy z najnowszych technologii druku, aby zapewnić naszym klientom produkty, które zachwycają nie tylko estetyką, ale także trwałością. Naszym celem jest nie tylko dekorowanie przestrzeni, ale również tworzenie emocji i wspomnień. Wierzymy, że sztuka powinna być dostępna dla każdego, dlatego oferujemy szeroki wachlarz projektów, które można dostosować do indywidualnych potrzeb.
<br></br><br></br>
Dołącz do naszej podróży i pozwól, że razem stworzymy przestrzeń, która zainspiruje Ciebie i Twoich bliskich!
        </Container>
          {/* <Offer /> */}
      </StyledAbout>
      <Contact />
    </Layout>
  )
      }
export default AboutPage
