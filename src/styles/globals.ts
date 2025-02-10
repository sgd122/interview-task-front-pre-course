'use client';
import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const styles = (theme: Theme) => css`
  ${emotionReset}
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #__next { 
    height: 100%;
  }

  body {
    font-family: Pretendard, Malgun Gothic, Helvetica Neue, sans-serif;
    background-color: #F6F6F6;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }


  a, input, textarea, button {
    font-family: inherit;
  }

  strong, b {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
    margin: 0;
  }
`;

export { styles };
