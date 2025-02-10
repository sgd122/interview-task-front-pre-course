import type { Theme } from '@emotion/react';

const palette: Theme['palette'] = {
  white: '#FFFFFF',
  black: '#000000',
  inputBackground: '#E5E5E5',
  textBold: '#454545',
  textPlaceholder: '#B9B9B9',
  textDone: '#868686',
  blue: '#2182F3',
  selectedBlue: '#EBF4FF',
};

const typography: Theme['typography'] = {
  title1: {
    fontFamily: 'var(--font-pretendard)',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '56px',
    lineHeight: '72px',
  },
  title2: {},
  title3: {},
  body1: {
    fontFamily: 'var(--font-pretendard)',
    fontStyle: 'normal',
    fontSize: '20px',
    lineHeight: '28px',
  },
  body2: {
    fontFamily: 'var(--font-pretendard)',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
  },
  'body2-bold': {
    fontFamily: 'var(--font-pretendard)',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
  },
  caption: {},
  small: {},
};

export const theme = {
  palette,
  typography,
};
