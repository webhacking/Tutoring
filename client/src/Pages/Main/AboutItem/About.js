import React from "react";
import AboutWhy from "./About_why";
import AboutTuto from "./About_tuto";
import AboutMatch from "./About_match";
import AboutPrice from "./About_price";
import AboutYoutube from "./About_youtube";
import AboutReview from "./About_review";
import AboutLab from "./About_lab";

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

    {/* 학습연구소 DIv */}
    <AboutLab />
  </>
);

export default About;
