
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *  {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
  }
  html {
  scroll-behavior: smooth;
  }
  body{
    background-color:#040504;
  }
  h1.heading{
    color:#f1f1f1;
    text-align:center;
    font-size:40px;
    margin:4rem auto;
    position:relative;
  }
  h1.heading::before{
    position:absolute;
    content:"";
    width:12vw;
    height:4px;
    background-color:#00D84A;
    top:110%;
    left:50%;
    transform:translate(-50%, -110%);
  }
  @media(max-width:950px){
    h1.heading::before{
      width:25vw;
    }
  }
  section{
    padding: 3rem 0rem;
    opacity:97%;
  }
`;
 
export default GlobalStyle;