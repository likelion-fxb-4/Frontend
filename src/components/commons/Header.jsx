import {
    Container,
    LogoButton,
    Logo,
    TitleSection,
    SubTitle,
    MainTitle,
    LoginButton
} from "./Header.styles";
import Hlogo from "../../assets/icons/logo.png";

export default function Header() {
    return (
        <Container>
            <LogoButton to="/">
                <Logo src={Hlogo} alt="에브리타임 로고" />
            </LogoButton>
            <TitleSection>
                <SubTitle>에브리타임</SubTitle>
                <MainTitle>서경대</MainTitle>
            </TitleSection>
            <LoginButton to="/login">로그인</LoginButton>
        </Container>
    );
}