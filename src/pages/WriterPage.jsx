import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function WriterPage() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title.trim() || !text.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    // 작성된 게시글을 저장하거나 전송하는 로직이 들어가야 합니다.
    console.log({
      title,
      text,
      anonymity: isAnonymous,
    });

    api.post("/api/posts", {
    "title": title,
    "content": text,
    "isAnonymous": isAnonymous,
    "postType": "free"
    }).then(() => {
        // 작성 후 게시판 페이지로 이동
    navigate("/FreeBoardPage");
    })

  };

  return (
    <Wrapper>
      <Title>게시글 작성</Title>

      <Label>제목</Label>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />

      <Label>내용</Label>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="내용을 입력하세요"
      />

      <CheckboxWrapper>
        <input
          type="checkbox"
          checked={isAnonymous}
          onChange={() => setIsAnonymous((prev) => !prev)}
        />
        <span>익명으로 작성</span>
      </CheckboxWrapper>

      <SubmitButton onClick={handleSubmit}>작성 완료</SubmitButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 16px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
