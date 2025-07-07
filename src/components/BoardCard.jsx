import styled from "styled-components";
import BubbleImg from "../assets/images/bubble.png";
import GoodImg from "../assets/images/good.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BoardCard({ id, name, txt, anonymity, title, great, comment }) {
    const displayName = anonymity ? name : "익명";
    const [goodNum, setGood] = useState(great);
    const navigate = useNavigate(); // ✅ 추가

    function setPlusGreat(e) {
        e.stopPropagation(); // 좋아요 클릭 시 카드 클릭 방지
        setGood(prev => prev + 1);
    }

    return (
        <Card onClick={() => navigate(`/comment/${id}`)}>
            <Title>{title}</Title>
            <Text>{txt}</Text>
            <InfoRow>
                <InfoItem>
                    <Mark src={GoodImg} alt="좋아요" onClick={setPlusGreat} />
                    <InfoText>{goodNum}</InfoText>
                </InfoItem>
                <InfoItem>
                    <Mark src={BubbleImg} alt="댓글" />
                    <InfoText>{comment}</InfoText>
                </InfoItem>
                <IsAnonymity>{displayName}</IsAnonymity>
            </InfoRow>
        </Card>
    );
}

const Card = styled.div`
  padding: 16px;
  margin: 12px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 600px;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: flex-start; // ✅ 왼쪽 정렬
  gap: 16px; // 요소 간 간격 추가하면 더 보기 좋음
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Mark = styled.img`
  width: 20px;
  height: 20px;
`;

const InfoText = styled.span`
  font-size: 14px;
  color: #333;
`;

const IsAnonymity = styled.p`
  font-size: 14px;
  color: #777;
`;