import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
`;

export const Adimg = styled.img`
  width: 1250px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const BoardSection = styled.div`
  width: 1250px;
`;

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const BoardBox = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 15px;
  box-shadow: 0 1px 1px rgb(0,0,0);
`;

export const FreeBoardTitle = styled(Link)`
  font-size: 16px;
  font-weight: bolder;
  color: red;
  margin-top: 20px;
  display: block;
  width: 100%;
  border-bottom: 1px solid grey;
  padding-bottom: 5px;

  &:hover {
    color: red;
  }
`;

export const SecretBoardTitle = styled(Link)`
  font-size: 16px;
  font-weight: bolder;
  color: red;
  margin-top: 20px;
  display: block;
  width: 100%;
  border-bottom: 1px solid grey;
  padding-bottom: 5px;

  &:hover {
    color: red;
  }
`;

export const ItemText = styled.p`
  font-size: 14px;
  color: black;
  margin: 15px 0;
  border-bottom: 1px solid grey;
  cursor: pointer;
`;
