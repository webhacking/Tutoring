import React from "react";
import "./reviewList.scss";

const ReviewList = () => {
  return (
    <>
      <strong className="emph_g">튜터링에서 인생튜터 만난 사람들</strong>
      <ul className="list_review">
        <li>
          <strong className="tit_review">전화영어랑 차원이 달라요~</strong>
          <p className="txt_review">
            진짜 좋아요ㅋㅋㅋㅋ 처음엔 통화 누르기 전까지 고민하고 걱정하고 힘들어하다 시작하고 20분
            겨우겨우 채웠는데, 몇번 하다 맞는 쌤 찾으니까 이 쌤 접속만 기다리다가 수업 듣고 계속
            연장해서 40분, 1시간 막 이렇게 들어요ㅋㅋㅋㅋ 수업시간이 연장되서 너무 좋아요. 보통
            전화영어랑 다르게 선생님이 특정된게 아니라 계속 다른 분을 선택해서 들을 수 있어서 맞는
            분 찾아서 들을 수 있습니다. 전 진짜 강추에요. 근데 영어 중국어 말고 다른 언어는
            안하나요?ㅠㅠㅠ 불어 해주세요.
          </p>
          <p className="txt_info">
            <span>18-11-30</span>
            <span>hs jeong</span>
          </p>
        </li>
        <li>
          <strong className="tit_review">이 앱을 사용하며 영어가 느는 느낌입니다.</strong>
          <p className="txt_review">
            안녕하세요! 이 앱을 사용하며 영어가 느는 느낌입니다. 원어민 선생님들과 총 수업 10번
            받았는데 너무 재밌고 선생님들 꼼꼼하시고 영어 잘할 수 있을거같아요!! 정말 경쟁력 있다고
            말할 수 있을 거 같아요. 앞으로도 이 앱 꾸준히 사용해서 영어 회화 많이 늘거예요.
          </p>
          <p className="txt_info">
            <span>18-11-30</span>
            <span>Google 사용자</span>
          </p>
        </li>
        <li>
          <strong className="tit_review">
            언제나 자기가 원할 때 튜터를 선택해서 공부할 수 있다는 점이 가장 좋은 것 같습니다!
          </strong>
          <p className="txt_review">
            매일 언어를 사용할 수 있는 환경을 만드는 일이 가장 중요한데요. 튜터링은 언제 자기가 원할
            때 접속중인 선생님을 선택해서 공부할 수 있다는 점이 가장 좋은 것 같습니다! 선생님들도
            까다로운 면접을 통해 오신 분들이라 다 검증되어 있어 수준있는 언어를 구사할 수 있고,
            선생님을 고를 때도 다른 학생들이 써놓은 리뷰를 볼 수 있어 도움이 됩니다 ^^ 자기 의지만
            있다면 튜터링으로 언어실력 향상 충분히 어려운 일이 아니네요! ㅎ
          </p>
          <p className="txt_info">
            <span>18-11-11</span>
            <span>전혜란</span>
          </p>
        </li>
      </ul>
    </>
  );
};

export default ReviewList;
