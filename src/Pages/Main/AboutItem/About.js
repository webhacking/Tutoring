import React from "react";
import AboutWhy from "Pages/Main/AboutItem/About_why";
import AboutTuto from "Pages/Main/AboutItem/About_tuto";
import AboutMatch from "Pages/Main/AboutItem/About_match";
import AboutPrice from "Pages/Main/AboutItem/About_price";
import AboutYoutube from "Pages/Main/AboutItem/About_youtube";
import AboutReview from "Pages/Main/AboutItem/About_review";

const About = () => (
  <>
    {/* No / Yes 나오는 Div */}
    <AboutWhy />

    {/* Tutoring 소개하는 Div */}
    <AboutTuto />

    {/* 피라미드 Div */}
    <AboutMatch />

    {/* Price Div */}
    <AboutPrice />

    {/* Vod가 있는 div */}
    <AboutYoutube />

    {/* image slice하는 review div */}
    <AboutReview />
  </>
);

export default About;
