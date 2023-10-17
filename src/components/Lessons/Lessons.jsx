import css from "./Lessons.module.css";

export const Lessons = ({ title }) => {
  return (
    <div className={css.Lessons}>
      <ul className={css.Lessons_list}>
        {/* <li className={css.Lessons_item}>{lessonsItems.title}</li> */}
        <li className={css.Lessons_item}>
          <p>{"Фізкультура"}</p>
        </li>
      </ul>
    </div>
  );
};
