import React from "react";
import "./tuto.scss";

const AboutTuto = () => (
  <div className="main_common main_about_tuto">
    <div className="about_tuto_title">
      <div class="inner_item">
        <em class="tit_sub">원하는 시간, 원하는 튜터와 원하는 주제로</em>
        <h3 class="tit_item">편식하는 영어 공부</h3>
        <p>모달창으로 할 지 그냥 진행할지 일단 Keep!</p>
      </div>
    </div>
    <ul className="about_tuto_list">
      <li className="list_01">
        <div class="thumb_box fl_r">
          <img
            src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/custom_tutor.png"
            class="img_tutor"
            alt="튜터 카드 이미지"
          />
          <div class="custom_cover custom_tutor">
            <img
              src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/custom_view03.png"
              class="img_phone"
              alt=""
            />
            <img
              src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/mov_home-small.gif"
              class="img_mov"
              alt=""
            />
          </div>
          <span class="img_tudal img_tudal03" />
        </div>
        <div class="desc_box fl_l">
          <strong class="tit_custom">
            1. 시공간 개념 없이 24시간 자유롭게!
          </strong>
          <em class="emph_custom">
            수업 시작 버튼만 클릭하면
            <span class="txt_b_m">30초만에 튜터와 즉시 연결</span>
          </em>
          <p>나에게 꼭 맞는 튜터를 내가 선택하고 수업을 진행</p>
          <p>
            <span class="txt_b_p">
              <b>- 24시간 전문 튜터 상시 대기 :</b>
            </span>
            Global(영어사용국), Native(영미권 거주), Chinese 튜터 대기
          </p>
          <p>
            <span class="txt_b_p txt_b_m">
              <b>- 즐겨찾는 튜터 설정 : </b>
            </span>
            관심 튜터를 설정하고, 나와 자주 수업을 진행한 튜터는 즉시 수업
          </p>
          <p>
            <b>- 튜터 예약 :</b> 내가 원하는 시간에 언제든지 예약 가능
          </p>
        </div>
      </li>
      <li className="list_02">
        <div class="thumb_box fl_l">
          <div class="custom_cover custom_category">
            <img
              src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/custom_view01.png"
              class="img_phone"
              alt=""
            />
          </div>
          <span class="img_tudal tudal_flame" />
        </div>
        <div class="desc_box fl_r">
          <strong class="tit_custom">2. 내 수준과 스타일에 맞춘 학습</strong>
          <em class="emph_custom">
            <span class="txt_b_m">내 레벨에 맞춰 </span>내가 직접 선택하는 1:1
            맞춤형 공부{" "}
          </em>
          <p>레벨테스트 후, 수준별 맞춤 교재/코스 제공</p>
          <p>
            <span class="txt_b_p">
              <b>- 내 목표에 따라 자유롭게 코스 선택/변경 :</b>
            </span>{" "}
            면접, 시험, 발음 등 목표 달성 집중 코스부터 어학연수, 취미 등{" "}
            <span class="txt_b_p">외국인 프리토킹 코스까지 직접 설계</span>
          </p>
          <p>
            <span class="txt_b_p">
              <b>- 내 스타일에 최적화된 수업 세팅 :</b>
            </span>{" "}
            말하기 속도, 꼼꼼한 교정, 진도를 위한 수업, 프리토킹 등 선택 가능
          </p>
        </div>
      </li>
      <li className="list_03">
        <div class="thumb_box fl_r">
          <div class="custom_cover custom_topic">
            <img
              src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/custom_view02.png"
              class="img_phone"
              alt=""
            />
          </div>
          <span class="img_tudal tudal_maracas" />
        </div>
        <div class="desc_box fl_l">
          <strong class="tit_custom">3. 내 관심사에 맞춰 고르는 토픽</strong>
          <em class="emph_custom">
            <span class="txt_b_m">최근 이슈도 OK! </span>매주 업데이트 되는
            9,000개 학습 주제
          </em>
          <p>업계 최대 수업 토픽과 커리큘럼 제공</p>
          <p>
            <b>- Needs별 맞춤 토픽 :</b> 비즈니스, 여행, 키즈 영어 등
          </p>
          <p>
            <b>- 시험 대비 집중 토픽 :</b> 영어면접, OPIC, 승무원, 미국 간호사
            시험, <span class="txt_b_p">TOEIC, TOEFL Speaking, IELTS 등</span>
          </p>
          <p>
            <b>- 어학연수 온 듯 일상 토픽 :</b> 영화, 음악, 패션, 날씨 등{" "}
            <span class="txt_b_p">
              다양한 토픽과 깊이 있는 전공까지 심도 있게 학습
            </span>
          </p>
        </div>
      </li>
      <li className="list_04">
        <div class="thumb_box fl_l">
          <div class="custom_cover custom_selection">
            <img
              src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/img_selection.png"
              class="img_selection"
              alt=""
            />
          </div>
        </div>
        <div class="desc_box fl_r">
          <strong class="tit_custom">4. 내게 꼭 맞는 엄선된 튜터 </strong>
          <em class="emph_custom">
            <span class="txt_b_m">기자, 금융컨설턴트, 음악감독 등 </span>다양한
            배경의 전문 튜터
          </em>
          <p>11대 1 경쟁률! 7단계 테스트를 통한 철저한 튜터 검증</p>
          <p>
            <b>- 튜터 검증 :</b> 졸업증명서, 티칭 자격증 확인, 경력 2년이상
          </p>
          <p>
            <b>- 튜터 상시 교육 :</b> 매달 수업 QA 진행, 티칭법 교정, 시험과목
            트레이닝
          </p>
          <p>
            <b>- 철저한 튜터 검증 :</b> 수업 청취 내부 평가 진행, 담당
            트레이너와 1:1 트레이닝
          </p>
        </div>
      </li>
      <li className="list_05">
        <div class="thumb_box fl_r">
          <span class="bg_particle" />
          <div class="custom_cover custom_graph">
            <img
              src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/custom_view04.png"
              class="img_phone"
              alt=""
            />
            <img
              src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/custom_graph.png"
              class="img_graph"
              alt=""
            />
          </div>
          <span class="img_tudal img_tudal04" />
        </div>
        <div class="desc_box fl_l">
          <strong class="tit_custom">
            5. 내 영어를 완성하는 꼼꼼한 피드백
          </strong>
          <em class="emph_custom">
            <span class="txt_b_m">실시간 교정은 물론 수업 후에도 </span>튜터와
            1:1 학습상담
          </em>
          <p>원할 때마다 실력 점검! 무제한 레벨테스트 제공</p>
          <p>
            <b>- 체계적인 레벨 진단 :</b> 문법, 발음 등 영역별 실력 분석
          </p>
          <p>
            <b>- 수업 중 실시간 첨삭 :</b> 실시간 채팅으로 꼼꼼한 교정
          </p>
          <p>
            <b>- 수업 후 무료 컨설팅 :</b> 꼼꼼 실력 진단과 맞춤 교정
          </p>
          <p>
            <b>- 수업 후 학습상담 :</b> 튜터와 1:1 채팅 학습 상담 가능
          </p>
        </div>
      </li>
    </ul>
    <img
      src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/bg_slice_03.png"
      class="bg_slice"
      alt=""
    />
  </div>
);

export default AboutTuto;
