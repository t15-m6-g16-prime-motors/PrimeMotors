import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* ---------------------------------- RESET --------------------------------- */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}

button {
  cursor: pointer;
  font-family: var(--font-family-inter);
  border: 2px;
  border-radius: 4px;
}

:root {
	--font-family-inter: 'Inter', sans-serif;
	--font-family-lexend: 'Lexend', sans-serif;

	--color-brand-1: rgba(69,41,230,1);
	--color-brand-2: rgba(81,38,234,1);
	--color-brand-3: rgba(176,166,240,1);
	--color-brand-4: rgba(237,234,253,1);

	--color-alert-1: rgba(205,43,49,1);
	--color-alert-2: rgba(253,216,216,1);
	--color-alert-3: rgba(255,229,229,1);

	--color-sucess-1: rgba(24,121,78,1);
	--color-sucess-2: rgba(204,235,215,1);
	--color-sucess-3: rgba(221,243,228,1);

	--color-random-1: rgba(227,77,140,1);
	--color-random-2: rgba(192,66,119,1);
	--color-random-3: rgba(125,42,77,1);
	--color-random-4: rgba(112,0,255,1);
	--color-random-5: rgba(98,0,227,1);
	--color-random-6: rgba(54,0,125,1);
	--color-random-7: rgba(52,153,116,1);
	--color-random-8: rgba(42,125,95,1);
	--color-random-9: rgba(21,61,46,1);
	--color-random-10: rgba(97,0,255,1);
	--color-random-11: rgba(87,0,227,1);
	--color-random-12: rgba(48,0,125,1);

	--color-grey-0: rgba(11,13,13,1);
	--color-grey-1: rgba(33,37,41,1);
	--color-grey-2: rgba(73,80,87,1);
	--color-grey-3: rgba(134,142,150,1);
	--color-grey-4: rgba(173,181,189,1);
	--color-grey-5: rgba(206,212,218,1);
	--color-grey-6: rgba(222,226,230,1);
	--color-grey-7: rgba(233,236,239,1);
	--color-grey-8: rgba(241,243,245,1);
	--color-grey-9: rgba(248,249,250,1);
	--color-grey-10: rgba(253,253,253,1);

	--color-white-fixed: rgba(255,255,255,1);

	--font-size-44: 2.75rem;
	--font-size-36: 2.25rem;
	--font-size-32: 2rem;
	--font-size-28: 1.75rem;
	--font-size-24: 1.5rem;
	--font-size-20: 1.25rem;
	--font-size-16: 1rem;
	--font-size-14: 0.875rem;

	--font-weight-700: 700;
	--font-weight-600: 600;
	--font-weight-500: 500;
	--font-weight-400: 400;

}

.heading-1-700 {
	font-size: var(--font-size-44);
	font-family: var(--font-family-lexend);
	font-weight: var(--font-weight-700);
	line-height: 56px;
}

.heading-2-600 {
	font-size: var(--font-size-36);
	font-family: var(--font-family-lexend);
	font-weight: var(--font-weight-600)
}


.heading-3-500 {
	font-size: var(--font-size-32);
	font-family: var(--font-family-lexend);
	font-weight: var(--font-weight-500);
}

.heading-3-600 {
	font-size: var(--font-size-32);
	font-family: var(--font-family-lexend);
	font-weight: var(--font-weight-600)
}

.heading-4-600 {
	font-size: var(--font-size-28);
	font-family: var(--font-family-lexend);
	font-weight: var(--font-weight-600)
}

.heading-4-500 {
	font-size: var(--font-size-28);
	font-family: var(--font-family-lexend);
	font-weight: var(--font-weight-500);
}

.heading-5-500 {
	font-size: var(--font-size-24);
	font-family: var(--font-family-lexend);
	font-weight: var(--font-weight-500);
}

.heading-5-600 {
	font-size: var(--font-size-24);
	font-family: var(--font-family-lexend);
	font-weight: var(--font-weight-600)
}
.heading-6-500 {
	font-size: var(--font-size-20);
	font-family: var(--font-family-lexend);
	font-weight: var(--font-weight-500);
}

.heading-6-600 {
	font-size: var(--font-size-20);
	font-family: var(--font-family-lexend);
	font-weight: var(--font-weight-600)
}

.heading-7-500 {
	font-size: var(--font-size-16);
	font-family: var(--font-family-lexend);
	font-weight: var(--font-weight-500);
}
.heading-7-600 {
	font-size: var(--font-size-16);
	font-family: var(--font-family-lexend);
	font-weight: var(--font-weight-600)
}

.text-style-inputs-buttons-input-label {
	font-size: var(--font-size-14);
	font-family: var(--font-family-inter);
	font-weight: var(--font-weight-500);
}

.text-style-inputs-buttons-input-placeholder {
	font-size: var(--font-size-16);
	font-family: var(--font-family-inter);
	font-weight: var(--font-weight-400);
}

.text-style-inputs-buttons-button-big-text {
	font-size: var(--font-size-16);
	font-family: var(--font-family-inter);
	font-weight: var(--font-weight-700);
}
.text-style-text-body-1-400 {
	font-size: var(--font-size-16);
	font-family: var(--font-family-inter);
	font-weight: var(--font-weight-400);
	line-height: 28px;
}

.text-style-text-body-1-600 {
	font-size: var(--font-size-16);
	font-family: var(--font-family-inter);
	font-weight: var(--font-weight-700);
	line-height: 28px;
}

.text-style-text-body-2-400 {
	font-size: var(--font-size-14);
	font-family: var(--font-family-inter);
	font-weight: var(--font-weight-400);
	line-height: 24px;
}

.text-style-text-body-2-500 {
	font-size: var(--font-size-14);
	font-family: var(--font-family-inter);
	font-weight: var(--font-weight-500);
	line-height: 24px;
}

.buttons-style-button-size-big {
	height: 3rem;
  width: 9.125rem;
	padding: 12px, 28px, 12px, 28px;
}

.buttons-style-button-size-medium {
	height: 2.375rem;
  width: 7.5rem;
	padding: 12px, 20px, 12px, 20px;
}
`;
