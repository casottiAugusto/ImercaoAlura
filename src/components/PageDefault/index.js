import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../menu';
import Footer from '../Footer';

const Main = styled.main`
background-color:var(--black);
color: var(--white);
flex:1;
padding-top:50px;
padding-left:5%;
padding-right:5%;
${({ paddingALL }) => css`
  padding:${paddingALL};
`}

`;

function PageDafault({ children, paddingALL }) {
  return (
    <>
      <Menu />
      <Main paddingALL={paddingALL}>
        {children}
      </Main>
      <Footer />
    </>
  );
}
export default PageDafault;
