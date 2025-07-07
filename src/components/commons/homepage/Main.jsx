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

export default function Main() {
    return (
        <Container>
            <Adimg src={ad4} alt="광고4" />
            <BoardSection>
                <BoardGrid>
                    <BoardBox>
                        <BoardTitle>자유게시판</BoardTitle>
                        <ItemText>게시글1 제목</ItemText>
                        <ItemText>게시글2 제목</ItemText>
                        <ItemText>게시글3 제목</ItemText>
                        <ItemText>게시글4 제목</ItemText>
                    </BoardBox>
                    <BoardBox>
                        <BoardTitle>비밀게시판</BoardTitle>
                        <ItemText>게시글1 제목</ItemText>
                        <ItemText>게시글2 제목</ItemText>
                        <ItemText>게시글3 제목</ItemText>
                        <ItemText>게시글4 제목</ItemText>
                    </BoardBox>
                </BoardGrid>
            </BoardSection>
        </Container>
    );
}