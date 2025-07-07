import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Container,
    LoginText,
    Form,
    Input,
    Button,
} from "./LoginPage.styles";

export default function LoginPage({ setUserInfo }) {
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        axios
            .post("http://localhost:8080/api/auths/login", {
                username: id,    
                password: pass, 
            })
            .then((res) => {
                const token = res.data.token;
                localStorage.setItem("token", token); // 응답에서 받은 토큰 localstorage에 저장

                return axios.get("http://localhost:8080/api/user/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            })
            .then((userRes) => {
                const userData = userRes.data;
                setUserInfo({
                    name: userData.name,
                    email: userData.email,
                })

                navigate("/");
            })
            .catch((err) => {
                alert("로그인에 실패했습니다.");
                console.log("로그인 에러:", err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };


    const handleIdChange = (e) => {
        setId(e.target.value);
    }

    const handlePassChange = (e) => {
        setPass(e.target.value);
    }

    return (
        <Container>
            <LoginText>로그인</LoginText>
            <Form onSubmit={handleSubmit}>
            <Input
            placeholder="아이디"
            value={id}
            onChange={handleIdChange}
            required
            />
            <Input
            placeholder="비밀번호"
            type="password"
            value={pass}
            onChange={handlePassChange}
            required
            />
            <Button type="submit" disabled={isLoading}>
                {isLoading ? "로딩 중" : "로그인"}
            </Button>
            </Form>
        </Container>
  );
}