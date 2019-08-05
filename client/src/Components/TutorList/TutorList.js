import React from "react";

const TutorList = ({ list }) => (
  <ul>
    {list &&
      list.map(el => {
        return (
          <li className={`tutor _${el.tutor_id}`} key={el.tutor_id}>
            <div className="up_box">
              <span className="thumb_box">
                <img src={el.img_url} alt="tutor_name" className="thumb" />
              </span>
              <p className="tutor_common tutor_name">{el.name}</p>
              <p className="tutor_common tutor_intro">{el.desc}</p>
            </div>
            <div className="down_box">
              <p className="lesson">{el.lessons} Lessons</p>
              <p className="type">{el.type}</p>
            </div>
          </li>
        );
      })}
  </ul>
);

export default TutorList;
