import React from "react";
import Iframe from "Components/Iframe";
import "./youtube.scss";

class AboutYoutube extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "default",
      video_id: "AaJZUfta3dI"
    };
  }

  thumbnailArr = [
    {
      title: "영어면접만 8번 떨어진 민지는 어떻게 해외취업에 성공했나?",
      src: "https://img.youtube.com/vi/AaJZUfta3dI/mqdefault.jpg"
    },
    {
      title: "유학파편] 난생처음 영어회화앱 튜터링을 해보다!",
      src: "https://img.youtube.com/vi/h3gl3MkEOdY/mqdefault.jpg"
    },
    {
      title: "튜터링 : 1:1 원어민 영어수다! 학원 갈시간 없는 직장인들에게 강추!!",
      src: "https://img.youtube.com/vi/r8pQCBDgq9A/mqdefault.jpg"
    },
    {
      title: "왜 튜터링을 사용하세요?!? 실제 튜터링 사용자에게 물어봤다!",
      src: "https://img.youtube.com/vi/ok60bOkG74k/mqdefault.jpg"
    },
    {
      title: "현실남매가 경험한 튜터링 :)",
      src: "https://img.youtube.com/vi/04RRTRINSlk/mqdefault.jpg"
    },
    {
      title: "[이거레알X 튜터링] 난생처음 외국인에게 고백을 받아보았다",
      src: "https://img.youtube.com/vi/HaO17ZkAD8E/mqdefault.jpg"
    }
  ];

  videoChangeHandler = e => {
    console.log(e.target.dataset.videoSrc);
    const video_id = e.target.style.backgroundImage.slice(32, 43);

    this.setState({
      video_id
    });
  };

  render() {
    const { title, video_id } = this.state;

    return (
      <div className="main_common main_about_youtube">
        <em className="tit_sub">누구나 영어로 말할 수 있도록</em>
        <h3 className="tit_item">
          60만명 영어인생을 <span className="txt_b_m">바꾼 튜터링</span>
        </h3>
        <div className="youtube_wrap">
          <div className="now_playing">
            <Iframe
              title={title}
              width="100%"
              height="100%"
              video_id={video_id}
              frameBorder="0"
              scrolling="no"
            />
          </div>
          <div className="play_list">
            <ul>
              {this.thumbnailArr.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={`thumb_${idx}`}
                    onClick={e => this.videoChangeHandler(e)}
                  >
                    <div
                      className="thumb_overlay"
                      data-video-src={item.src}
                      style={{
                        backgroundImage: `url(${item.src})`
                      }}
                    >
                      <p className="thumb_title">{item.title}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <span className="area_arr">
              <span className="ico_g_main" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutYoutube;
