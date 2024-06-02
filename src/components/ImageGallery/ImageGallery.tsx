import React from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface ImageGalleryProps {
  items: ImageResult[]; 
  onImgClick: (url: string, likes: number, name: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImgClick }) => {
  return (
    <div>
      <ul className={css.list}>
        {items.map((item) => (
          <li className={css.item} key={item.id}>
           
            <ImageCard 
              onImgClick={onImgClick} 
              item={item} 
              likes={item.likes} 
              name={item.name} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;