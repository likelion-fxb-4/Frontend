import {
    Container,
    InfoSection,
    ProfileSection,
    ProfileLogo,
    Name,
    Id,
    ButtonSection,
    MyInfo,
    Logout,
    OtherButtonSection,
    OtherButton,
    AdSection,
    Adimg,
} from "./Info.styles";

export default function Info() {
    return (
        <Container>
            <InfoSection>
                <ProfileSection>
                    <ProfileLogo />
                    <Name>박태근</Name>
                    <Id>power1415</Id>
                    <ButtonSection>
                        <MyInfo>내 정보</MyInfo>
                        <Logout>로그아웃</Logout>
                    </ButtonSection>
                </ProfileSection>
            </InfoSection>
            <OtherButtonSection>
                <OtherButton>📖 내가 쓴 글</OtherButton>
                <OtherButton>💬 댓글 단 글</OtherButton>
                <OtherButton>⭐ 내 스크랩</OtherButton>
            </OtherButtonSection>
            <AdSection>
                <Adimg />
                <Adimg />
                <Adimg />
            </AdSection>
        </Container>
    );
}