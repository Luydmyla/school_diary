import css from "./Form.module.css";
import { CustomInput } from "../CustomInput/CustomInput";
export const Form = () => {
  return (
    <form className={css.Form}>
      <select name="lesson">
        <option value="S1">Понеділок</option>
        <option value="S2">Вівторок</option>
        <option value="S3">Середа</option>
        <option value="S4">Четвер</option>
        <option value="S5">П'ятниця</option>
      </select>
      {<CustomInput />}
    </form>
  );
};
