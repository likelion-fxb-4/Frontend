import {
    Container,
} from "./HomePage.styles";
import Info from "../components/commons/homepage/Info";
import Main from "../components/commons/homepage/Main";

export default function HomePage() {
    return (
        <Container>
            <Info />
            <Main />
        </Container>
    );
}