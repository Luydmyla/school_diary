import React from "react";
import { lessonsItems } from "./lessons";
import css from "./Lessons.module.css";
console.log(lessonsItems);
export const LessonsCard = ({ lessonsItems }) => (
  <div className={css.card}>
    {/* <div className="card-name"></div>
          <div className="card-task"></div> */}
    {lessonsItems.map((lessonsItem) => (
      <table key={lessonsItem.id}>
        <tr>
          <td>
            <h2> {lessonsItem.title}</h2>
          </td>
        </tr>
        <tr>
          <td>
            <span className="info-table-name"> {lessonsItem.lessons[1]}</span>
          </td>
          <td>
            <span className="info-table-task">task</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="info-table-name"> {lessonsItem.lessons[2]}</span>
          </td>
          <td>
            <span className="info-table-task">task</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="info-table-name"> {lessonsItem.lessons[3]}</span>
          </td>
          <td>
            <span className="info-table-task">task</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="info-table-name"> {lessonsItem.lessons[4]}</span>
          </td>
          <td>
            <span className="info-table-task">task</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="info-table-name"> {lessonsItem.lessons[5]}</span>
          </td>
          <td>
            <span className="info-table-task">task</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="info-table-name"> {lessonsItem.lessons[6]}</span>
          </td>
          <td>
            <span className="info-table-task">task</span>
          </td>
        </tr>
      </table>
    ))}
  </div>
);
