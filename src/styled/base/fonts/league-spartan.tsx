// -----------------------------------------------------------------------------------------------------
// LeagueSpartan-Regular
// -----------------------------------------------------------------------------------------------------
/*prettier-ignore*/ import LeagueSpartanRegularWOFF        from "@/styled/base/fonts/LeagueSpartan/LeagueSpartan-Regular.woff";
/*prettier-ignore*/ import LeagueSpartanRegularWOFF2       from "@/styled/base/fonts/LeagueSpartan/LeagueSpartan-Regular.woff2";

/*prettier-ignore*/ import styled, { createGlobalStyle }   from "styled-components";

export const LSRegular = createGlobalStyle`
 @font-face {
  font-family: LeagueSpartan;
  src: url(${LeagueSpartanRegularWOFF2})                          format('woff2'),
       url(${LeagueSpartanRegularWOFF})                           format('woff');

  font-weight:  var(--font-weight--400);
  font-style:   normal;
  font-display: block;
 }`;
