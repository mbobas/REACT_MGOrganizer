import styled from 'styled-components';

const Button = styled.button`
background-color: ${({secondary})=> secondary ? '#E6E6E6':  '#FFD82B' };
width: ${({secondary})=> secondary ? '105px':  '220px' };
height: ${({secondary})=> secondary ? '30px':  '47px' };
border: none;
border-radius: 50px;
font-family: "Montserrat";
font-weight: 500;
font-size: ${({secondary})=> secondary ? '10px':  '16px' };
text-transform: uppercase;
`;

export default Button;