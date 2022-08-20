import { useState } from "react";

const ImgView = ({ imgUrls }) => {
  const [currImg, setCurrImg] = useState(0);
  const [lastImg, setLastImg] = useState(imgUrls.length - 1);

  const onPrevHandler = () => {
    setCurrImg((prev) => (prev - 1 < 0 ? lastImg : prev - 1));
  };

  const onNextHandler = () => {
    setCurrImg((prev) => (prev + 1 > lastImg ? 0 : prev + 1));
  };

  return (
    <>
      <div>
        <button type='button' onClick={onPrevHandler}>
          prev
        </button>
        <img src={imgUrls[currImg]} alt='img' width='300px' />
        <div>
          {currImg + 1}/ {lastImg + 1}
        </div>
        <button type='button' onClick={onNextHandler}>
          next
        </button>
      </div>
    </>
  );
};

export default ImgView;
