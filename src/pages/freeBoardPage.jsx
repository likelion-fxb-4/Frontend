import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BoardCard from "../components/BoardCard";
import api from "../api";
import { useEffect, useState } from "react";

export default function FreeBoardPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/api/posts/free")
      .then((res) => {
        if (res.data.success) {
          setPosts(res.data.data); // data 배열 저장
        } else {
          alert("게시글을 불러오지 못했습니다.");
        }
      })
      .catch((err) => {
        console.error("게시글 불러오기 오류:", err);
      });
  }, []);

  return (
    <Wrapper>
      <Title>자유게시판</Title>
      <WriterDiv>
        <WriterBtn onClick={() => navigate("/WriterPage")}>글 작성하기</WriterBtn>
      </WriterDiv>
      <BoardList>
        {posts.map((post) => (
          <BoardCard
            key={post.id}
            id={post.id}
            name={post.author} // author 필드 사용
            title={post.title}
            txt={post.summaryContent}
            great={post.great || 0}
            comment={post.comment || 0}
            anonymity={post.isAnonymous || false}
          />
        ))}
      </BoardList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  min-height: 100vh;
  justify-content:center;
`;

const Title = styled.h1``;

const BoardList = styled.div``;

const WriterDiv = styled.div``;

const WriterBtn = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;