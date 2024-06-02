import css from "./ErrorMessage.module.css";
import { BiSolidErrorAlt } from "react-icons/bi";

interface ErrorMessageProps {
  
}

const ErrorMessage: React.FC<ErrorMessageProps> = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>
        <BiSolidErrorAlt />
        Whoops, something went wrong!
      </p>
      <p className={css.error}> Please, try to reload this page!</p>
    </div>
  );
}

export default ErrorMessage;