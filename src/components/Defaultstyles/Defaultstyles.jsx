"use client";
import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display:flex;
    padding: clamp(5px, 1vw, 15px) clamp(8px, 2vw, 15px);
    background-color: ${(props) => props.bg || "var(--color-white)"};
    justify-content: center;
    align-content: center;
    align-items:center;
`
;


export const Content = styled.div`
    width:100%;
    display:flex;
    padding: clamp(5px, 1vw, 15px);
    background-color: ${(props) => props.bg || "var(--color-blue)"};
    justify-content: space-between;
    align-content: center;
    align-items:center;
`
;