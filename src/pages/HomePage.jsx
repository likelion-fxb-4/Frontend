import {
    Container,
} from "./HomePage.styles";
import { Navigate } from "react-router-dom";
import Info from "../components/commons/homepage/Info";
import Main from "../components/commons/homepage/Main";

export default function HomePage({userInfo, setUserInfo}) {
    if (!userInfo) {
        return <Navigate to="/login" replace/>;
    }

    return (
        <Container>
            <Info name={userInfo.name} email={userInfo.email} setUserInfo={setUserInfo} />
            <Main />
        </Container>
    );
}