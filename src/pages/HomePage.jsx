import {
    Container,
} from "./HomePage.styles";
import Info from "../components/commons/homepage/Info";
import Main from "../components/commons/homepage/Main";

export default function HomePage({userInfo}) {
    return (
        <Container>
            <Info name={userInfo.name} email={userInfo.email} />
            <Main />
        </Container>
    );
}