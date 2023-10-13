// -----------------------------------------------------------------------------------------------------
// Krub-Regular
// -----------------------------------------------------------------------------------------------------
/*prettier-ignore*/ import KrubRegularWOFF         from "@/styled/base/fonts/Krub/Krub-Regular.woff";
/*prettier-ignore*/ import KrubRegularWOFF2        from "@/styled/base/fonts/Krub/Krub-Regular.woff2";

// -----------------------------------------------------------------------------------------------------
// Krub-Regular
// -----------------------------------------------------------------------------------------------------
/*prettier-ignore*/ import KrubMediumWOFF          from "@/styled/base/fonts/Krub/Krub-Medium.woff";
/*prettier-ignore*/ import KrubMediumWOFF2         from "@/styled/base/fonts/Krub/Krub-Medium.woff2";

// -----------------------------------------------------------------------------------------------------
// Krub-MediumItalic
// -----------------------------------------------------------------------------------------------------
/*prettier-ignore*/ import KrubMediumItalicWOFF    from "@/styled/base/fonts/Krub/Krub-MediumItalic.woff";
/*prettier-ignore*/ import KrubMediumItalicWOFF2   from "@/styled/base/fonts/Krub/Krub-MediumItalic.woff2";

// -----------------------------------------------------------------------------------------------------
// Krub-SemiBold
// -----------------------------------------------------------------------------------------------------
/*prettier-ignore*/ import KrubSemiBoldWOFF        from "@/styled/base/fonts/Krub/Krub-SemiBold.woff";
/*prettier-ignore*/ import KrubSemiBoldWOFF2       from "@/styled/base/fonts/Krub/Krub-SemiBold.woff2";

/*prettier-ignore*/ import styled, { createGlobalStyle }  from "styled-components";

export const KrubRegular = createGlobalStyle`
 @font-face {
  font-family: var(--font-family--krub);
  src: url(${KrubRegularWOFF2})                      format('woff2'),
       url(${KrubRegularWOFF})                       format('woff');

  font-weight:  var(--font-weight--400);
  font-style:   normal;
  font-display: block;
 }`;

export const KrubMedium = createGlobalStyle`
 @font-face {
  font-family: var(--font-family--krub);
  src: url(${KrubMediumWOFF2})                       format('woff2'),
       url(${KrubMediumWOFF})                        format('woff');

  font-weight:  var(--font-weight--500);
  font-style:   normal;
  font-display: block;
 }`;

export const KrubMediumItalic = createGlobalStyle`
 @font-face {
  font-family: var(--font-family--krub);
  src: url(${KrubMediumItalicWOFF2})                 format('woff2'),
       url(${KrubMediumItalicWOFF})                  format('woff');

  font-weight:  var(--font-weight--550);
  font-style:   normal;
  font-display: block;
 }`;

export const KrubSemiBold = createGlobalStyle`
 @font-face {
  font-family: var(--font-family--krub);
  src: url(${KrubSemiBoldWOFF2})                     format('woff2'),
       url(${KrubSemiBoldWOFF})                      format('woff');

  font-weight:  var(--font-weight--600);
  font-style:   normal;
  font-display: block;
 }`;
