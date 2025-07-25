import {
    Container,
    Adimg,
    BoardSection,
    BoardGrid,
    BoardBox,
    FreeBoardTitle,
    SecretBoardTitle,
    ItemText,
} from "./Main.styles";
import ad4 from "../../../assets/images/ad4.png";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Main() {
    const [free, setFree] = useState([]);
    const [secret, setSecret] = useState([]);

    useEffect(() => {
        fetchFreePosts();
        fetchSecretPosts();
    }, []);

    const fetchFreePosts = () => {
        axios
            .get("https://silversieon.store/api/posts/free/summary")
            .then((res) => {
                setFree(res.data.data);
            })
            .catch((err) => {
                alert("자유게시판 요청 실패!");
                console.log(err);
            })
    };

    const fetchSecretPosts = () => {
        axios
            .get("https://silversieon.store/api/posts/secret/summary")
            .then((res) => {
                setSecret(res.data.data);
            })
            .catch((err) => {
                alert("비밀게시판 요청 실패!");
                console.log(err);
            })
    };

    return (
        <Container>
            <Adimg src={ad4} alt="광고4" />
            <BoardSection>
                <BoardGrid>
                    <BoardBox>
                        <FreeBoardTitle to="/FreeBoardPage">자유게시판</FreeBoardTitle>
                        {free.map((post) => (
                            <ItemText key={post.id}>{post.title}</ItemText>
                        ))}
                    </BoardBox>
                    <BoardBox>
                        <SecretBoardTitle to="/SecretPage">비밀게시판</SecretBoardTitle>
                        {secret.map((post) => (
                            <ItemText key={post.id}>{post.title}</ItemText>
                        ))}
                    </BoardBox>
                </BoardGrid>
            </BoardSection>
        </Container>
    );
}