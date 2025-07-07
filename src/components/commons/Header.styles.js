import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 25px;
    width: 100%;
    background-color: white;
    z-index: 1000;
`;

export const LogoButton = styled(Link)`
    line-height: 0;
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer; 
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
`;

export const SubTitle = styled.p`
  color: red;
  font-size: 14px;
  margin: 0;
  line-height: 1.2;
  margin-bottom: -2px;
`;

export const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  line-height: 1.1;
`;

export const LoginButton = styled(Link)`
    border: none;
    text-decoration: none;
    color: black;
    background-color: rgb(203, 199, 199);
    border-radius: 15px;
    font-size: 17px;
    cursor: pointer;
    margin-left: 1250px;
    font-size: 15px;
    padding: 0 10px;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
        background-color: rgb(181, 181, 181);
        transform: scale(1.05);
        color: black;
    }
`;