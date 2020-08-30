import {createGlobalStyle} from 'styled-components';
export const GlobalStyle=createGlobalStyle`
html {
  box-sizing:border-box;
}
*,
*::before,
*::after {
  box-sizing:inherit;
}
body {
  margin:0;
  background-color:#f0f0f0;
  color: black;
  font-family:Lobster,sans-serif;
  font-size: 20px;
}
img {
  max-width:100%;
  height:auto;
}
a {
  text-decoration: none;
  color:inherit;
}
ul {
  list-style: none;
  padding:0;
  margin:0;
}
h1,h2,h3 {
  font-family: Neucha;
  padding:0;
  margin:0;
}
p {
  padding:0;
  margin:0;
}

`;