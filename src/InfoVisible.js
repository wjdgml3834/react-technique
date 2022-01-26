import { useState } from "react";
import InfoUE from "./InfoUE";

const InfoVisible = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <InfoUE />}
    </div>
  );
};

export default InfoVisible;
