import React from "react";
import "./lab.scss";

const AboutLab = () => {
  return (
    <div className="main_common main_about_lab">
      <div className="lab_wrap">
        <em className="tit_sub">두려움을 깨는 학습법</em>
        <h3 className="tit_item">튜터링 언어 학습연구소</h3>
        <p className="txt_info">
          ‘언어’를 학문이 아닌 살아있는 ‘소통의 수단’으로서
          <span className="txt_b_m">‘체득’하게 만드는 최상의 방법을 연구합니다</span>
        </p>
        <ul className="list_lab">
          <li>
            <strong className="tit_lab">
              1. 회화 두려움 최소화 하는
              <span className="txt_b_m">
                <b>학습자 중심의 교육 설계</b>
              </span>
            </strong>
            <ol className="list_oval">
              <li>
                <em className="oval_g">STEP 1</em>
                <span className="txt_lab">내재 동기 향상</span>
                <p className="desc_txt">
                  <span className="txt_b_t">학습정의 </span>자기 결정보장 사용자가 토픽과 강사 선택
                </p>
                <span className="ico_g_main ico_arr" />
              </li>
              <li>
                <em className="oval_g">STEP 2</em>
                <span className="txt_lab">개인화 커리큘럼</span>
                <p className="desc_txt">
                  관심사, 레벨 기반의 수강생맞춤형 <span className="txt_b_t">코스 생성</span>
                </p>
                <span className="ico_g_main ico_arr" />
              </li>
              <li>
                <em className="oval_g">STEP 3</em>
                <span className="txt_lab">학습관여도 높이기</span>
                <p className="desc_txt">많은 감각을 사용하여 수업에 관여도를 높이도록 설계</p>
              </li>
            </ol>
          </li>
          <li>
            <strong className="tit_lab">
              2. 회화 능률 극대화하는
              <span className="txt_b_m">
                <b>상호교감형 학습 경험 창조</b>
              </span>
            </strong>
            <ul className="list_oval">
              <li>
                <span className="oval_g">
                  <span className="ico_g_main ico_common ico_topic" />
                </span>
                <span className="txt_lab">생동하는 교재</span>
                <p className="desc_txt">
                  회화 교육 최적화 <span className="txt_b_t">교재 제공을 위해 </span>매주 개발되는
                  토픽카드
                </p>
              </li>
              <li>
                <span className="oval_g">
                  <span className="ico_g_main ico_common ico_brain" />
                </span>
                <span className="txt_lab">강렬한 학습 경험</span>
                <p className="desc_txt">
                  이미지와 텍스트, <span className="txt_b_t">음성을 통해 더욱 오래 </span>기억되도록
                  설계
                </p>
              </li>
              <li>
                <span className="oval_g">
                  <span className="ico_g_main ico_common ico_chat" />
                </span>
                <span className="txt_lab">1:1 감성형 코칭</span>
                <p className="desc_txt">
                  감성적인 인터렉션을 <span className="txt_b_t">통한 새로운 학습의 </span>장기
                  기억형성
                </p>
              </li>
            </ul>
          </li>
          <li className="lst">
            <strong className="tit_lab">
              3. 최상의 학습 환경을 완성하는
              <span className="txt_b_m">
                <b>모바일 기술 R&amp;D</b>
              </span>
            </strong>
            <ul className="list_card">
              <li>
                <div className="card_g">
                  <strong className="txt_lab">튜터 인터렉션 최적화</strong>
                  <p className="txt_card">
                    모바일 내 학생-튜터 <br />
                    인터렉션 극대화 기술 설계
                  </p>
                  <p className="txt_tag">#특허기술</p>
                </div>
              </li>
              <li>
                <div className="card_g">
                  <strong className="txt_lab">공감각 UX 구현</strong>
                  <p className="txt_card">
                    모바일 내 시각, 청각을 <br />
                    동시에 활용할 수 있는 <span className="txt_b_p">학습 UX 설계</span>
                  </p>
                  <p className="txt_tag">#특허기술</p>
                </div>
              </li>
              <li>
                <div className="card_g">
                  <strong className="txt_lab">온디맨드 매칭</strong>
                  <p className="txt_card">
                    실시간 요청이 가능한 <span className="txt_b_p">1:1 온디맨드 모바일 </span>과외
                    구현 기술 개발
                  </p>
                  <p className="txt_tag">#특허기술</p>
                </div>
              </li>
              <li>
                <div className="card_g">
                  <strong className="txt_lab">개인 학습 추천 로직</strong>
                  <p className="txt_card">
                    수강생의 목적/레벨/관심사 <br />
                    분석에 따른 학습 추천 <span className="txt_b_p">기술 개발</span>
                  </p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutLab;
