import { useParams } from "react-router-dom";
import styled from "styled-components";
import BubbleImg from "../assets/images/bubble.png";
import GoodImg from "../assets/images/good.png";
import { useState, useEffect } from "react";
import CommentCard from "../components/CommentCard";
import api from "../api";

export default function FreeCommentPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);
  const [goodNum, setGood] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    // 게시글 상세 정보 가져오기
    api.get(`/api/posts/free/${id}`)
      .then((res) => {
        if (res.data.success) {
          setPost(res.data.data);
          setGood(res.data.data.great || 0);
        } else {
          alert("게시글을 불러오지 못했습니다.");
        }
      })
      .catch((err) => console.error("게시글 로드 오류:", err));

    // 댓글 목록 가져오기
    api.get(`/api/comments/${id}`)
      .then((res) => {
        if (res.data.success) {
          setComments(res.data.data);
        }
      })
      .catch((err) => console.error("댓글 로드 오류:", err));
  }, [id]);

  if (!post) return <p>로딩 중...</p>;

  const displayName = post.isAnonymous ? "익명" : post.author;

  const setPlusGreat = (e) => {
    e.stopPropagation();
    if (!hasLiked) {
      setGood((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setGood((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const handleAddComment = () => {
    if (commentInput.trim()) {
      const newComment = {
        content: commentInput.trim(),
        isAnonymous: true,
      };
      api.post(`/api/comments/${id}`, newComment)
        .then((res) => {
          if (res.data.success) {
            setComments((prev) => [...prev, {
              ...newComment,
              commentId: res.data.data.commentId,
              userId: res.data.data.userId,
              postId: parseInt(id),
            }]);
            setCommentInput("");
          }
        })
        .catch((err) => console.error("댓글 등록 오류:", err));
    }
  };

  return (
    <Wrapper>
      <Title>{post.title}</Title>
      <Text>{post.content}</Text>
      <InfoRow>
        <InfoItem>
          <Mark src={GoodImg} alt="좋아요" onClick={setPlusGreat} />
          <InfoText>{goodNum}</InfoText>
        </InfoItem>
        <InfoItem>
          <Mark src={BubbleImg} alt="댓글" />
          <InfoText>{comments.length}</InfoText>
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
        {comments.map((c) => (
          <CommentCard
            key={c.commentId}
            name={"작성자"} // 백엔드에서 이름 전달되면 반영
            txt={c.content}
            anonymity={c.isAnonymous}
            great={0} // 좋아요는 댓글에는 기본 0
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
