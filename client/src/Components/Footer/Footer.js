import React from "react";
import "./footer.scss";

const Footer = () => (
  <footer id="tutoringFoot" className="footer_area">
    <div className="foot_nav">
      <div className="inner_foot">
        <span>
          <b>고객센터 1522-7802</b> (평일 10시 ~ 18시)
        </span>
        <a href="mailto:contact@tutoring.co.kr" className="link_mail">
          <b>이메일 문의하기</b>
        </a>
        <ul className="info_policy">
          <li>
            <a href="https://tutoring.co.kr/home/help">FAQ</a>
          </li>
          <li>
            <a href="https://tutoring.co.kr/home/b2bProgram">B2B프로그램</a>
          </li>
          <li>
            <a href="https://tutoring.co.kr/home/b2bProgram#b2b_form">단체수강 문의</a>
          </li>
          <li>
            <a href="https://tutoring.co.kr/home/help/Z">이용약관</a>
          </li>
          <li>
            <a href="https://tutoring.co.kr/home/help/Z#anchor_content">
              <b>개인정보처리방침</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="foot_info">
      <ul className="info_company">
        <li>
          <a href="https://tutoring.co.kr/home/company">회사소개</a>
        </li>
        <li>
          <a href="https://tutoring.co.kr/home/news">언론보도</a>
        </li>
        <li>
          <a href="https://tutoring.co.kr/home/crews">입사지원</a>
        </li>
        <li>
          <a href="https://tutoring.co.kr/home/apply?mode=E&amp;lang=en">Apply to teach</a>
        </li>
        <li className="cell_offer">
          <span>튜터링, 대표 김미희 </span>
          <a href="mailto:ceo@tutoring.co.kr" className="link_offer" target="_blank" rel="noopener noreferrer">
            CEO에게 제안하기
          </a>
          <button type="button">
            <span className="ico_g_main ico_arr" />
          </button>
        </li>
      </ul>
      <address>
        <span>통합 법인 상호 (주) 마켓디자이너스 , 대표이사 김현영</span>
        <span>사업자 등록번호 840-87-00656</span>
        <span>통신판매신고번호 2017-서울강남-01493</span>
        <span>주소 서울시 강남구 테헤란로 518, 섬유센터 10층</span>
      </address>
      <ul className="foot_sns">
        <li>
          <a
            className="facebook"
            href="https://www.facebook.com/tutoring.co.kr/?timeline_context_item_type=intro_card_work&amp;timeline_context_item_source=100012123438239&amp;pnref=lhc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ico_g_main ico_facebook">facebook</span>
          </a>
        </li>
        <li>
          <a className="naver" href="https://post.naver.com/tutoring360" target="_blank" rel="noopener noreferrer">
            <span className="ico_g_main ico_naver">naver</span>
          </a>
        </li>
        <li>
          <a className="brunch" href="https://brunch.co.kr/magazine/edtech" target="_blank" rel="noopener noreferrer">
            <span className="ico_g_main ico_brunch">brunch</span>
          </a>
        </li>
      </ul>
      <small className="txt_copyright">Copyright © Tutoring.co.kr. All rights reserved</small>
    </div>
  </footer>
);

export default Footer;
