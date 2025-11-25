"use client";
import styled from "styled-components";
import {hoverUnderline} from "@/components/Defaultstyles/Effects"

export const Container = styled.div`
    width:100%;
    display:flex;
    padding: clamp(10px, 2vw, 20px) clamp(10px, 2vw, 20px);
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items:center;
    position: absolute;
    top: 40%;

`
;




export const Text = styled.h2`
    color: var(--color-blue);
    font-family: var(--font-mono);
    font-weight: 800;
    font-size: 55px;
    letter-spacing: 2px;
    text-align: center;
    text-transform: capitalize;
    font-style: italic;






`
;