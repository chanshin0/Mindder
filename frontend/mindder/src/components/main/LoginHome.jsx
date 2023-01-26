import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodayCanvasImg from "../../assets/images/TodayCanvas.png"
import RecoCanvasList from "./CanvasList";
import EmotionChart from "./EmotionChart"

const Wrapper = styled.div`
    /* padding: 16px; */
    /* width: 100vw; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// 오늘의 캔버스
const Container = styled.div`
    width: 22rem;
    height: 13rem;
    & > * {
        :not(:last-child) {
            margin-bottom: 0.5rem;
        }
    }
    background-color:#7767FD;
    border-radius:20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`;

const TodayCanvas = styled.div`
    width:16rem;
    height:9rem;
    background-color:white;
    /* border: 1px solid black; */
    border-radius:15px;
    background-image:url(${TodayCanvasImg});
    background-size:cover;
`
const TodayCanvasHeader = styled.h4`
    font-size: 1rem;
    color:white;
    position:relative;
    right:110px;
    margin: 0;
`

function LoginHome(props) {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Container>
                <TodayCanvasHeader>
                    오늘의 캔버스
                </TodayCanvasHeader>
                <TodayCanvas/>
            </Container>
            <RecoCanvasList/>
            <EmotionChart/>
        </Wrapper>
    );
}

export default LoginHome;