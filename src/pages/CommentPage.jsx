import { useParams } from "react-router-dom";
import styled from "styled-components";
import BubbleImg from "../assets/images/bubble.png";
import GoodImg from "../assets/images/good.png";
import { useState } from "react";
import { products } from "../products";
import CommentCard from "../components/CommentCard";


export default function CommentPage() {
  const { id } = useParams();
  const post = products.find((item) => item.id === parseInt(id));
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);
  const [goodNum, setGood] = useState(post.great);

    const [commentCount, setCommentCount] = useState(post.comment); 
  if (!post) {
    return <p>해당 게시글을 찾을 수 없습니다.</p>;
  }

    const [hasLiked, setHasLiked] = useState(false);

    function setPlusGreat(e) {
        e.stopPropagation();
        if (!hasLiked) {
            setGood(prev => prev + 1);
            setHasLiked(true);
        }
        else{
            setGood(prev => prev - 1);
            setHasLiked(false);
        }
    }


  const displayName = post.anonymity ? post.name : "익명";

  const handleAddComment = () => {
  if (commentInput.trim()) {
    const newComment = {
      name: displayName,
      txt: commentInput.trim(),
      anonymity: true,
      great: 0,
    };
    setComments((prev) => [...prev, newComment]);
    setCommentInput("");

    setCommentCount((prev) => prev + 1); // ✅ 댓글 수 증가
  }
};


  return (
    <Wrapper>
      <Title>{post.title}</Title>
      <Text>{post.txt}</Text>
      <InfoRow>
        <InfoItem>
          <Mark src={GoodImg} alt="좋아요" onClick={setPlusGreat} />
          <InfoText>{goodNum}</InfoText>
        </InfoItem>
        <InfoItem>
            <Mark src={BubbleImg} alt="댓글" />
            <InfoText>{commentCount}</InfoText> {/* ✅ 바뀐 상태 사용 */}
        </InfoItem>
        <IsAnonymity>{displayName}</IsAnonymity>
      </InfoRow>

      <InputArea>
        <Input
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          placeholder="댓글을 입력하세요"
        />
        <Button onClick={handleAddComment}>등록</Button>
      </InputArea>

      <CommentList>
        {comments.map((c, i) => (
            <CommentCard
                key={i}
                name={c.name}
                txt={c.txt}
                anonymity={c.anonymity}
                great={c.great}
            />
        ))}
        </CommentList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  max-width: 700px;
  margin: auto;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
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

const InputArea = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;
