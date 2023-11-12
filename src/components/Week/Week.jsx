import css from "./Week.module.css";
import { Form } from "../Form/Form";
export const Week = (props) => {
  // console.log(props);
  return (
    <div className={css.week}>
      <Form
        onSelected={props.SelectDay}
        onFormSubmit={props.onDaySubmit}
      ></Form>
    </div>
  );
};
