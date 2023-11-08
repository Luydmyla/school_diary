import css from "./Form.module.css";
import { CustomInput } from "../CustomInput/CustomInput";

export const Form = (props) => {
  return (
    <form className={css.Form}>
      <select name="lesson" onChange={props.onSelected} className={css.Select}>
        <option value="Понеділок" className={css.Option}>
          Понеділок
        </option>
        <option value="Вівторок" className={css.Option}>
          Вівторок
        </option>
        <option value="Середа" className={css.Option}>
          Середа
        </option>
        <option value="Четвер" className={css.Option}>
          Четвер
        </option>
        <option value="П'ятниця" className={css.Option}>
          П'ятниця
        </option>
      </select>
      {<CustomInput />}
    </form>
  );
};
