import React, { useEffect, useState } from "react";
import FilerobotImageEditor from "filerobot-image-editor-tool";
import EditorTheme from "./constants/EditorTheme";
import $ from "jquery";

const RobotImageEditor = ({ imageObj, resetImage }) => {
  const [showEditor, setShowEditor] = useState(false);
  const [sharpValue, setSharpValue] = useState(0);
  const [imgSrc, setSrc] = useState("");

  var [originalSrcbuff, setOSB] = useState(null);
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

  useEffect(() => {
    $("body").on(
      "click",
      "#filerobot-image-editor-root .image-editor-range label",
      function (e) {
        $(e.currentTarget).parent().toggleClass("active-filter");
        $(e.currentTarget)
          .parent()
          .parent()
          .toggleClass("active-parent-filter");
      }
    );
  }, []);

  return (
    <div>
      <FilerobotImageEditor
        show={showEditor}
        src={imgSrc}
        config={config}
        onClose={(_) => {
          resetImage();
          // if($(".spztoolssingle+div").hasClass("active-parent-filter")){

          // }
        }}
        onOpen={(_) => {}}
      />
    </div>
  );
};

export default RobotImageEditor;
