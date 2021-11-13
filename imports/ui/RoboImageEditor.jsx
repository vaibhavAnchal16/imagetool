import React, { useEffect, useState } from "react";
import FilerobotImageEditor from "filerobot-image-editor";
import EditorTheme from "./constants/EditorTheme";

const RobotImageEditor = ({ imageObj, resetImage }) => {
  const [showEditor, setShowEditor] = useState(false);
  const [imgSrc, setSrc] = useState("");
  useEffect(() => {
    if (imageObj?.length > 0) {
      setShowEditor(true);
      setSrc(imageObj[0]?.data_url);
    } else {
      setShowEditor(false);
      setSrc("");
    }
  }, [imageObj]);
  const config = {
    showInModal: false,
    colorScheme: "light",
    // Default ['adjust', 'effects', 'filters', 'rotate', 'crop', 'resize', 'watermark', 'shapes', 'image', 'text']
    tools: ["adjust", "rotate"],
    reduceBeforeEdit: {
      mode: "auto",
      widthLimit: 2000,
      heightLimit: 2000,
    },
    // replaceCloseWithBackButton: true,
  };

  return (
    <div>
      <FilerobotImageEditor
        show={showEditor}
        src={imgSrc}
        config={config}
        onClose={(_) => {
          resetImage();
        }}
      />
    </div>
  );
};

export default RobotImageEditor;
