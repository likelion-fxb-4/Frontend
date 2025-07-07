import {
    Container,
    Adimg,
    BoardSection,
    BoardGrid,
    BoardBox,
    BoardTitle,
    ItemText,
} from "./Main.styles";
import ad4 from "../../../assets/images/ad4.png";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Main() {
    const [free, setFree] = useState([]);
    const [secret, setSecret] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        axios
            .get("")
            .then((res) => {
                setFree(res.data.free);
                setSecret(res.data.secret);
            })
            .catch((err) => {
                alert("에러가 발생하였습니다.");
                console.log(err);
            })
    };

    return (
        <Container>
            <Adimg src={ad4} alt="광고4" />
            <BoardSection>
                <BoardGrid>
                    <BoardBox>
                        <BoardTitle>자유게시판</BoardTitle>
                        {free.map((post) => (
                            <ItemText key={post.id}>{post.title}</ItemText>
                        ))}
                    </BoardBox>
                    <BoardBox>
                        <BoardTitle>비밀게시판</BoardTitle>
                        {secret.map((post) => (
                            <ItemText key={post.id}>{post.title}</ItemText>
                        ))}                        
                    </BoardBox>
                </BoardGrid>
            </BoardSection>
        </Container>
    );
}