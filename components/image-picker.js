"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imagePickButton = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    //to show an image as a preview in UI , below 3 steps
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  const handlePicClick = () => {
    imagePickButton.current.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          <span></span>
          <span></span>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The image selected by user" fill />
          )}
        </div>

        <input
          className={classes.input}
          id={name}
          ref={imagePickButton}
          type="file"
          name={name}
          accept="image/png image/jpeg"
          onChange={handleImageChange}
          required
        ></input>
        <button
          className={classes.button}
          type="button"
          onClick={handlePicClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};
export default ImagePicker;
