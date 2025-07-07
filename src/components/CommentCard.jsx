// components/CommentCard.jsx
import styled from "styled-components";
import GoodImg from "../assets/images/good.png";
import { useState } from "react";

export default function CommentCard({ name, txt, anonymity, great }) {
  const displayName = anonymity ? "익명" : name;
  const [likes, setLikes] = useState(great);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };
  

  return (
    <Card>
      <Top>
        <Author>{displayName}</Author>
        <LikeWrapper onClick={handleLike}>
          <LikeIcon src={GoodImg} alt="좋아요" />
          <LikeCount>{likes}</LikeCount>
        </LikeWrapper>
      </Top>
      <Text>{txt}</Text>
    </Card>
  );
}
const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 12px;
  background-color: #f9f9f9;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Author = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;
`;

const LikeIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const LikeCount = styled.span`
  font-size: 13px;
  color: #333;
`;

const Text = styled.p`
  font-size: 14px;
  color: #444;
  margin-top: 4px;
`;
