"use client";
import { useEffect, useState } from "react";
// src/styles/effects.js
import { css } from "styled-components";

export const hoverUnderline = css`
  position: relative;
  display: inline-block;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: ${(props) => props.thickness || "2px"};
    background: linear-gradient(
      to right,
      ${(props) => props.start || "#E6E6E6"},
      ${(props) => props.end || "#ffffff"}
    );
    bottom: -5px;
    left: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease-out;
  }

  &::before {
    top: -5px;
    transform-origin: left;
  }

  &:hover::after,
  &:hover::before {
    transform: scaleX(1);
  }
`;




