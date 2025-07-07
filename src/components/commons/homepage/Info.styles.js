import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 250px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const InfoSection = styled.div`
  width: 100%;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ProfileLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const Email = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 13px;
  text-decoration: none;
  color: black;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: rgb(214, 208, 208);
    color: black;
    font-weight: bolder;
  }
`;

export const OtherButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const OtherButton = styled.button`
  background-color: transparent;
  border: none;
  text-align: left;
  font-size: 14px;
  padding: 6px;
  cursor: pointer;
  color: #333;

  &:hover {
    background-color: rgb(214, 208, 208);
  }
`;

export const AdSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Adimg = styled.img`
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`;
