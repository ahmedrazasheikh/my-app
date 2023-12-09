import React, { useState } from 'react';
import './App.css'
function App() {
  const [imageSrcList, setImageSrcList] = useState([]);
  const pictureImageTxt = "Choose an image";

  const handleInputChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const newImageSrcList = Array.from(files).map((file) => URL.createObjectURL(file));
      setImageSrcList(newImageSrcList);
    } else {
      setImageSrcList([]);
    }
  };

  return (
    <>
      <div>
        {imageSrcList.map((imageSrc, index) => (
          <label key={index} className="picture" tabIndex="0">
            <span className="picture__image">
              <img src={imageSrc} alt={`Uploaded ${index + 1}`} className="picture__img" />
            </span>
          </label>
        ))}
      </div>

      <input
        type="file"
        name="picture__input"
        id="picture__input"
        onChange={handleInputChange}
        multiple
      />
    </>
  );
}

export default App;
