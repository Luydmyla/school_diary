import css from "./Form.module.css";
import { CustomInput } from "../CustomInput/CustomInput";

export const Form = (props) => {
  return (
    <form className={css.Form} onSubmit={props.onFormSubmit}>
      <select name="lesson" onChange={props.onSelected} className={css.Select}>
        <option
          value="Понеділок"
          className={css.Option}
          // onClick={props.onFormSubmit}
        >
          Понеділок
        </option>
        <option
          value="Вівторок"
          className={css.Option}
          // onClick={props.onFormSubmit}
        >
          Вівторок
        </option>
        <option
          value="Середа"
          className={css.Option}
          // onClick={props.onFormSubmit}
        >
          Середа
        </option>
        <option
          value="Четвер"
          className={css.Option}
          // onClick={props.onFormSubmit}
        >
          Четвер
        </option>
        <option
          value="П'ятниця"
          className={css.Option}
          // onClick={props.onFormSubmit}
        >
          П'ятниця
        </option>
      </select>
      {<CustomInput onClick={props.onSelected} />}
    </form>
  );
};
