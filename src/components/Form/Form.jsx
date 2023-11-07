import css from "./Form.module.css";
import { CustomInput } from "../CustomInput/CustomInput";

export const Form = (props) => {
  return (
    <form className={css.Form}>
      <select name="lesson" onChange={props.onSelected}>
        <option value="Понеділок">Понеділок</option>
        <option value="Вівторок">Вівторок</option>
        <option value="Середа">Середа</option>
        <option value="Четвер">Четвер</option>
        <option value="П'ятниця">П'ятниця</option>
      </select>
      {<CustomInput />}
    </form>
  );
};
