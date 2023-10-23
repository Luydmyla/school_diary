import React from "react";
// import PropTypes from "prop-types";
import css from "./Lessons.module.css";
import { lessonsItems } from "./lessons";
console.log(lessonsItems);

export const LessonsList = ({ lessonsItems }) => (
  <div className={css.Lessons}>
    <ul className={css.Lessons_list}>
      {lessonsItems.map((lessonsItem) => (
        <li key={lessonsItem.id} className={css.Lessons_item}>
          <h2> Day {lessonsItem.title}</h2>
          <p> {lessonsItem.lessons[1]}</p>
          <p> {lessonsItem.lessons[2]}</p>
          <p> {lessonsItem.lessons[3]}</p>
          <p> {lessonsItem.lessons[4]}</p>
          <p> {lessonsItem.lessons[5]}</p>
          <p> {lessonsItem.lessons[6]}</p>
        </li>
      ))}
    </ul>
  </div>
);
