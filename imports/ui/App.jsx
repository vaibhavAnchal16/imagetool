import React, { useState } from "react";
import "../css/main.css";
import ImageUploading from "react-images-uploading";
import RobotImageEditor from "./RoboImageEditor";

export const App = () => {
  const [image, setImage] = useState(null);
  const onChange = (imageList, addUpdateIndex) => {
    // console.log(imageList, addUpdateIndex);
    setImage(imageList);
  };
  const resetImage = () => {
    setImage(null);
  };
  const sampleimages = [
    "https://res.cloudinary.com/dfip8jw0d/image/upload/f_auto/samples/sample1_t2ippp.jpg",
    "https://res.cloudinary.com/dfip8jw0d/image/upload/f_auto/samples/sample3_y9bnf5.jpg",
    "https://res.cloudinary.com/dfip8jw0d/image/upload/f_auto/samples/sample2_wjgpja.jpg",
  ];
  return (
    <div className="imageeditorwrapper">
      {!image && (
        <div className="imageuploadercomponent">
          <ImageUploading
            // multiple
            value={image}
            onChange={onChange}
            // maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <div className="imageuploader-inner">
                  <div className="imageuploader-left">
                    <img src="./images/background-removal-banner-1.jpg" />
                  </div>
                  <div className="imageuploader-right">
                    <h2>
                      {" "}
                      Edit, Adjust, Crop, Resize, Filter and add text over
                      images.
                    </h2>
                    <div
                      className="dragarea"
                      style={isDragging ? { color: "red" } : undefined}
                      {...dragProps}
                    >
                      <button onClick={onImageUpload}> Choose a photo</button>
                    </div>
                    <div className="no-image">
                      <div className="no-image-inner">
                        {" "}
                        <div className="no-imageleft">
                          No Image ?<br /> try one of these
                        </div>
                        <div className="no-imageright">
                          {sampleimages.map((si, i) => (
                            <img
                              key={i}
                              src={si}
                              onClick={(_) => {
                                var ur = _.target.getAttribute("src");
                                setImage([
                                  {
                                    data_url: ur,
                                  },
                                ]);
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="terms">
                      <p>
                        By uploading an image or URL you agree to our{" "}
                        <a href="">Terms of Service</a>.
                      </p>
                    </div>
                  </div>
                </div>
                {image && (
                  <button onClick={onImageRemoveAll}>Remove all images</button>
                )}
                {/* {image &&
                  image.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>
                          Update
                        </button>
                        <button onClick={() => onImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))} */}
              </div>
            )}
          </ImageUploading>
        </div>
      )}

      <RobotImageEditor imageObj={image} resetImage={resetImage} />
    </div>
  );
};
