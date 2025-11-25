"use client";
import styled from "styled-components";
import {hoverUnderline} from "@/components/Defaultstyles/Effects"

export const Image_container = styled.div`
   
`
;

export const Link = styled.a`
   display: flex;
   color: var(--color-white);
   font-family: var(--font-head);
   text-transform: capitalize;
   font-weight: 500;
   font-size:clamp(14px, 1.5vw, 18px);
   letter-spacing: 1px;
   transition: 0.5s ease-in;
   ${hoverUnderline};
   cursor: pointer;
   &:hover {
    letter-spacing: 1.5px;
  
  }
`
;

export const Imag = styled.img`
   display: flex;
   width: clamp(100px, 15vw, 200px);
   cursor: pointer;
`
;

export const Linkcon = styled.ul`
    display:flex;
    flex-direction: row;
    
   
`
;

export const List  = styled.li`
    display:flex;
    padding:0px 10px;
    text-decoration: none;
    list-style: none;
    justify-content:space-between;
    align-content: center;

    `
;

export const Btn  = styled.button`
  padding: 6px 20px;
  background-color: var(--color-yellow);
  border-radius: 25px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: var(--color-white);

  transition:  0.9s ease;

  /* TEXT */
  &::after {
    content: "Login";
    opacity: 1;
    transition: opacity 0.25s ease;
    font-size: clamp(16px, 1.5vw, 20px);
    letter-spacing: 1.5px;
    font-family: var(--font-head);
  }

  /* ICON */
  &::before {
    font-family: "Material Symbols Outlined";
    content: "login";
    font-size: clamp(16px, 2vw, 20px);
    position: absolute;
    opacity: 0;
    font-weight: 500;
    transition: opacity 0.25s ease;
  }

  /* Hover → shrink button */
  &:hover {
    padding: 6px 4px;   
  }

  &:hover::after {
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;
