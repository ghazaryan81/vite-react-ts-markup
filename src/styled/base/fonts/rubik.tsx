// -----------------------------------------------------------------------------------------------------
// Rubik-Regular
// -----------------------------------------------------------------------------------------------------
/*prettier-ignore*/ import RubikRegularWOFF        from "@/styled/base/fonts/Rubik/Rubik-Regular.woff";
/*prettier-ignore*/ import RubikRegularWOFF2       from "@/styled/base/fonts/Rubik/Rubik-Regular.woff2";

// -----------------------------------------------------------------------------------------------------
// Rubik-Italic
// -----------------------------------------------------------------------------------------------------
/*prettier-ignore*/ import RubikItalicWOFF         from "@/styled/base/fonts/Rubik/Rubik-Italic.woff";
/*prettier-ignore*/ import RubikItalicWOFF2        from "@/styled/base/fonts/Rubik/Rubik-Italic.woff2";

// -----------------------------------------------------------------------------------------------------
// Rubik-Medium
// -----------------------------------------------------------------------------------------------------
/*prettier-ignore*/ import RubikMediumWOFF         from "@/styled/base/fonts/Rubik/Rubik-Medium.woff";
/*prettier-ignore*/ import RubikMediumWOFF2        from "@/styled/base/fonts/Rubik/Rubik-Medium.woff2";

// -----------------------------------------------------------------------------------------------------
// Rubik-MediumItalic
// -----------------------------------------------------------------------------------------------------
/*prettier-ignore*/ import RubikMediumItalicWOFF   from "@/styled/base/fonts/Rubik/Rubik-MediumItalic.woff";
/*prettier-ignore*/ import RubikMediumItalicWOFF2  from "@/styled/base/fonts/Rubik/Rubik-MediumItalic.woff2";

// -----------------------------------------------------------------------------------------------------
// Rubik-SemiBold
// -----------------------------------------------------------------------------------------------------
/*prettier-ignore*/ import RubikSemiBoldWOFF       from "@/styled/base/fonts/Rubik/Rubik-SemiBold.woff";
/*prettier-ignore*/ import RubikSemiBoldWOFF2      from "@/styled/base/fonts/Rubik/Rubik-SemiBold.woff2";

// -----------------------------------------------------------------------------------------------------
// Rubik-Bold
// -----------------------------------------------------------------------------------------------------
/*prettier-ignore*/ import RubikBoldWOFF           from "@/styled/base/fonts/Rubik/Rubik-Bold.woff";
/*prettier-ignore*/ import RubikBoldWOFF2          from "@/styled/base/fonts/Rubik/Rubik-Bold.woff2";

/*prettier-ignore*/ import styled, { createGlobalStyle }  from "styled-components";

export const RubikRegular = createGlobalStyle`
 @font-face {
  font-family: var(--font-family--rubik);

  src: url(${RubikRegularWOFF2})                          format('woff2'),
       url(${RubikRegularWOFF})                           format('woff');

font-weight:  var(--font-weight--400);
font-style:   normal;
font-display: block;
 }`;

export const RubikItalic = createGlobalStyle`
 @font-face {
  font-family: var(--font-family--rubik);

  src: url(${RubikItalicWOFF2})                            format('woff2'),
       url(${RubikItalicWOFF})                             format('woff');

  font-weight:  var(--font-weight--450);
  font-style:   normal;
  font-display: block;
 }`;

export const RubikMedium = createGlobalStyle`
@font-face {
 font-family: var(--font-family--rubik);

 src: url(${RubikMediumWOFF2})                             format('woff2'),
      url(${RubikMediumWOFF})                              format('woff');

 font-weight:  var(--font-weight--500);
 font-style:   normal;
 font-display: block;
}`;

export const RubikMediumItalic = createGlobalStyle`
 @font-face {
  font-family: var(--font-family--rubik);

  src: url(${RubikMediumItalicWOFF2})                      format('woff2'),
       url(${RubikMediumItalicWOFF})                       format('woff');
  
  font-weight:  var(--font-weight--550);
  font-style:   normal;
  font-display: block;
 }`;

export const RubikSemiBold = createGlobalStyle`
 @font-face {
  font-family: var(--font-family--rubik);
  src: url(${RubikSemiBoldWOFF2})                          format('woff2'),
       url(${RubikSemiBoldWOFF})                           format('woff');
  
  font-weight:  var(--font-weight--600);
  font-style:   normal;
  font-display: block;
 }`;

export const RubikBold = createGlobalStyle`
 @font-face {
  font-family: var(--font-family--rubik);
  
  src: url(${RubikBoldWOFF2})                              format('woff2'),
       url(${RubikBoldWOFF})                               format('woff');

  font-weight:  var(--font-weight--700);
  font-style:   normal;
  font-display: block;
 }`;
