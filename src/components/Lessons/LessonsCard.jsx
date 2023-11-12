import React from "react";
import css from "./Lessons.module.css";

// import css from "./Lessons.module.css";

export const LessonsCard = ({ title, lessons }) => (
  <table className={css.table}>
    <tbody className={css.table_body}>
      <tr className={css.table_tr}>
        <td>
          <h2 className={css.Lessons_title}> {title}</h2>
        </td>
      </tr>
      {lessons.map((lesson, index) => (
        <tr key={index} className={css.table_tr}>
          <td className={css.table_td_name}>
            <span className={css.info_table_name}> {lesson.name}</span>
          </td>
          <td className={css.table_td_task}>
            <span className={css.info_table_task}>{lesson.task}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
