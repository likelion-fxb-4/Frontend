import ad1 from "../../../assets/images/ad1.png";
import ad2 from "../../../assets/images/ad2.png";
import ad3 from "../../../assets/images/ad3.png";
import profile from "../../../assets/icons/profile.png";
import {
    Container,
    InfoSection,
    ProfileSection,
    ProfileLogo,
    Name,
    Email,
    ButtonSection,
    Button,
    OtherButtonSection,
    OtherButton,
    AdSection,
    Adimg,
} from "./Info.styles";
import { useNavigate } from "react-router-dom";

export default function Info({ name, email, setUserInfo}) {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem("token");
        setUserInfo({
            name: "홍길동",
            email: "2021304034@skuniv.ac.kr",
        });
        navigate("/login");
    };

    return (
        <Container>
            <InfoSection>
                <ProfileSection>
                    <ProfileLogo src={profile} alt="프로필" />
                    <Name>{name}</Name>
                    <Email>{email}</Email>
                    <ButtonSection>
                        <Button>내 정보</Button>
                        <Button onClick={handleClick}>로그아웃</Button>
                    </ButtonSection>
                </ProfileSection>
            </InfoSection>
            <OtherButtonSection>
                <OtherButton>📖 내가 쓴 글</OtherButton>
                <OtherButton>💬 댓글 단 글</OtherButton>
                <OtherButton>⭐ 내 스크랩</OtherButton>
            </OtherButtonSection>
            <AdSection>
                <Adimg src={ad1} alt="광고1" />
                <Adimg src={ad2} alt="광고2" />
                <Adimg src={ad3} alt="광고3" />
            </AdSection>
        </Container>
    );
}