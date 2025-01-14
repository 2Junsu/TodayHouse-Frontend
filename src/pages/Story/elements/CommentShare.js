import React from "react";
import styled from "styled-components";

//사이드바의 각 버튼
const CommentShare = (props) => {
    const { onClick, alt, src, num } = props;
    return (
        <Element>
            <Icon onClick={onClick}>
                <img alt={alt} width="25px" height="25px" src={src} />
            </Icon>
            <Num>{num && num.toLocaleString()}</Num>
        </Element>
    );
};

const Element = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #aaaaaa;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    box-shadow: 1px 1px 1px lightgray;
    &:hover {
        background-color: #eeeeee;
        cursor: pointer;
    }
`;
const Num = styled.span``;
export default CommentShare;
