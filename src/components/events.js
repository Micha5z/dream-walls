import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';


const BrandInfoContainer = styled.div`
background-color: #e2ffe3;
padding: 6rem 0;

.button {
  float: right;
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #182e87;
  transition: all 1000ms;
  font-size: 15px;
  position: absolute;
  bottom: 5px;
  right: 15px;
  overflow: hidden;
  outline: 2px solid #182e87;
}

button:hover {
  color: #ffffff;
  transform: scale(1.1);
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
  transition: width 1000ms;
}

button:hover::before {
  width: 250%;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.brand-info__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;

  img {
    flex: 1;
    width: fit-content;
    height: auto;
    object-fit: cover;
    margin-bottom: 1rem;
    max-height: 235px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    color: #182e87;
    font-weight: bold;

  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    color: #182e87;
    margin-bottom: 3rem;
  }
}
`;
const StyledTradeLink = styled(Link)`
  cursor: pointer;
  padding: 0.7rem 0.95rem;
  background-color: ${({ theme }) => theme.textColor};
  // background: linear-gradient(128.17deg,#36c557 -14.78%,#182e87 110.05%);
  background: transparent;
  text-decoration: none;
  color: #0e5006;
  border-radius: 22px;
  display: inline-block;
  font-weight: 700;
  width: 100%;
  overflow-wrap: normal;
  width: min-content;
  white-space: wrap;
  margin-bottom: 30px;
  float: right;
  // border: 1px solid #0e5006;
  box-shadow: ${({ theme }) => theme.shadows.small};
  :hover,
  :focus {
    outline: 1.5px solid #0e5006;
    color: #0e5006;

  }
`

const StyledTradeLink2 = styled.a`
  cursor: pointer;
  padding: 0.7rem 0.95rem;
  background-color: ${({ theme }) => theme.textColor};
  // background: linear-gradient(128.17deg,#36c557 -14.78%,#182e87 110.05%);
  background: transparent;
  text-decoration: none;
  color: #0e5006;
  border-radius: 22px;
  display: inline-block;
  font-weight: 700;
  width: 100%;
  overflow-wrap: normal;
  width: min-content;
  white-space: wrap;
  margin-bottom: 30px;
  float: right;
  // border: 1px solid #0e5006;
  box-shadow: ${({ theme }) => theme.shadows.small};
  :hover,
  :focus {
    outline: 1.5px solid #0e5006;
    color: #0e5006;

  }
`


function BrandInfo() {
    return (
      <BrandInfoContainer>
        <Container>
          <Row>
            <Col style={{position:'relative'}} sm="4">
              <div className="brand-info__item">
                <div>
                 
                </div>
              </div>
            <a href="https://www.Dream-Walls.pl/oferta">
            <button className="button">
           
            </button>
            </a>
            </Col>
          </Row>
        </Container>
      </BrandInfoContainer>
    );
  }
  
  export default BrandInfo;