// 라우터 폴더는 uri기준으로 각각 파일 작성
import React from "react";
import Modify from "../components/account/Modify";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeCookie } from "../api/cookie";
import { useDispatch, useSelector } from "react-redux";

import api from "../api/api";
import {SAVE_nickName, SAVE_myIdx, DELETE_TOKEN } from "../redux/reducers";

const Remove = styled.div`
    margin: 1rem;
    color: #787777;
    font-weight: 600;
    display: flex;
    justify-content: end;
`;

function ModifyPage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch() 

    //로그아웃
    const logout = async() => {
        const response = await api.get(`/users/logout`);
        if(!response.data.success){
            alert("로그아웃 실패! 다시 시도해주세요.");
        } else {
            removeCookie("is_login")
            dispatch(DELETE_TOKEN("is_login"));
            dispatch(SAVE_nickName(""));
            dispatch(SAVE_myIdx(null));
            navigate('/')
        }
    }

    return(
        <div id="main">
            <header>
                <h2>회원정보</h2>
            </header>
            <Modify></Modify>
            <Remove>
                <div>
                    <span onClick={() => {
                    navigate("/accounts/remove");
                    }}>회원탈퇴 하기 </span>|
                    <span
                    onClick={()=>{
                    logout()
                    }}
                    > 로그아웃</span>
                </div>
            </Remove>
        </div>
    );
}

export default ModifyPage;