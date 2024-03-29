import React from "react";
// import PropTypes from "prop-types";
import css from "./Lessons.module.css";
import { lessonsItems } from "./days";
console.log(lessonsItems);

export const LessonsList = ({ lessonsItems }) => (
  <div className={css.Lessons}>
    <ul className={css.Lessons_list}>
      {lessonsItems.map((lessonsItem) => (
        <li key={lessonsItem.id} className={css.Lessons_item}>
          <div className={css.Lessons_title}>
            <h2> Day {lessonsItem.title}</h2>
          </div>
          <div className={css.Lessons_wrap}>
            <div className={css.Lessons_item_content}>
              <span className={css.Lessons_item_content_lesson}>
                {lessonsItem.lessons[1]}
              </span>
              <span className={css.Lessons_item_content_task}> Завдання</span>
            </div>
            <div className={css.Lessons_item_content}>
              <span className={css.Lessons_item_content_lesson}>
                {lessonsItem.lessons[2]}
              </span>
              <span className={css.Lessons_item_content_task}> Завдання</span>
            </div>
            <div className={css.Lessons_item_content}>
              <span className={css.Lessons_item_content_lesson}>
                {lessonsItem.lessons[3]}
              </span>
              <span className={css.Lessons_item_content_task}> Завдання</span>
            </div>
            <div className={css.Lessons_item_content}>
              <span className={css.Lessons_item_content_lesson}>
                {lessonsItem.lessons[4]}
              </span>
              <span className={css.Lessons_item_content_task}> Завдання</span>
            </div>
            <div className={css.Lessons_item_content}>
              <span className={css.Lessons_item_content_lesson}>
                {lessonsItem.lessons[5]}
              </span>
              <span className={css.Lessons_item_content_task}> Завдання</span>
            </div>
            <div className={css.Lessons_item_content}>
              <span className={css.Lessons_item_content_lesson}>
                {lessonsItem.lessons[6]}
              </span>
              <span className={css.Lessons_item_content_task}> Завдання</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
