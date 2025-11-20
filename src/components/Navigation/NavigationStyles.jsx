"use client";
import styled from "styled-components";

export const Image_container = styled.div`
   
`
;

export const Link = styled.a`
   display: flex;
   color: white;
   font-family: var(--font-head);
   text-transform: capitalize;
   font-size:clamp(14px, 1vw, 18px);
   font-weight: 400;
   letter-spacing: 1px;
`
;

export const Imag = styled.img`
   display: flex;
   width: clamp(100px, 12vw, 200px);
`
;

export const Linkcon = styled.ul`
    display:flex;
    flex-direction: row;
    
   
`
;

export const List  = styled.li`
    display:flex;
    padding:0px 20px;
    text-decoration: none;
    list-style: none;
    justify-content:space-between;
    align-content: center;

    `
;