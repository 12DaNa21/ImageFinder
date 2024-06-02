import React from 'react';
import css from "./ImageCard.module.css";
import { FcLike } from "react-icons/fc";
import { GrInstagram } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";

interface User {
  name: string;
}

interface Urls {
  small: string;
  regular: string;
}

interface Photo {
  alt_description: string;
  urls: Urls;
  likes: number;
  user: User;
}

interface ImageCardProps {
  item: Photo;
  onImgClick: (url: string, likes: number, name: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  item: {
    alt_description,
    urls: { small, regular },
    likes,
    user: { name },
  },
  onImgClick,
}) => {
  return (
    <div className={css.container}>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={small}
          alt={alt_description}
          onClick={() => onImgClick(regular, likes, name)}
          width="300"
          height="180"
        />
      </div>
      <div className={css.textWrapper}>
        <GrInstagram className={css.inst} size="20" color="rgb(81, 88, 212)" />
        <ul className={css.list}>
          <li className={css.item}>
            <FaUserAlt color="rgb(81, 88, 212)" size="12" />
            <p className={css.text} >{name}</p>
          </li>
          <li className={css.item}>
            <FcLike size="16" />
            <p className={css.text}>{likes}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ImageCard;