import React from 'react';
import styled from 'styled-components';


const Footer = () => (
  <Wrapper>
    <p>Copyright &copy; {new Date().getFullYear()} haz3r</p>
  </Wrapper>
);

const Wrapper = styled.article`
background-color: #333;
color: #fff;
padding: 1rem;
text-align: center;

`;

export default Footer;
