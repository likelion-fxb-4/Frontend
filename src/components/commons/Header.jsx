import {
    Container,
    LogoButton,
    Logo,
    TitleSection,
    SubTitle,
    MainTitle,
    LoginButton
} from "./Header.styles";
import { useLocation } from "react-router-dom";
import Hlogo from "../../assets/icons/logo.png";

export default function Header() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    const hasToken = !!localStorage.getItem("token");

    return (
        <Container>
            <LogoButton to="/">
                <Logo src={Hlogo} alt="에브리타임 로고" />
            </LogoButton>
            <TitleSection>
                <SubTitle>에브리타임</SubTitle>
                <MainTitle>서경대</MainTitle>
            </TitleSection>

            {!isLoginPage && !hasToken && (
                <LoginButton to="/login">로그인</LoginButton>
            )}
        </Container>
    );
}
