import React from "react";
import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { FcLike } from "react-icons/fc";
import { GrInstagram } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
Modal.setAppElement('#root');
interface ImageModalProps {
  imgModal: boolean;
  onModalClose: () => void;
  image: string;
  imgLikes: number | null;
  user: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imgModal,
  onModalClose,
  image,
  imgLikes,
  user,
}) => {
  return (
    <div>
      <Modal
        className={css.container}
        isOpen={imgModal}
        onRequestClose={onModalClose}
      >
        <img className={css.img} src={image} alt="modal" />
        <div className={css.textWrapper}>
          <GrInstagram className={css.inst} size="50" color="rgb(81, 88, 212)" />
          <ul className={css.list}>
            <li className={css.item}>
              <FaUserAlt color="rgb(81, 88, 212)" size="30" />
              <p className={css.text}>{user}</p>
            </li>
            <li className={css.item}>
              <FcLike size="30" />
              <p className={css.text}>{imgLikes}</p>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;