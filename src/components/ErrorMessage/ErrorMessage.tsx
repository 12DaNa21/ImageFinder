import css from "./ErrorMessage.module.css";
import { BiSolidErrorAlt } from "react-icons/bi";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={css.container}>
      <p className={css.title}>
        <BiSolidErrorAlt />
        {message}
      </p>
      <p className={css.error}> Please, try to reload this page!</p>
    </div>
  );
}

export default ErrorMessage;