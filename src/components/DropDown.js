import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DropDown.module.css";

const DropDown = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/blogpage");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/achievementspage");
  }, [navigate]);

  return (
    <div className={styles.dropdown}>
      <div className={styles.links}>
        <div className={styles.frameParent}>
          <button className={styles.frameGroup} onClick={onFrameButtonClick}>
            <img className={styles.frameChild} alt="" src="../frame-1994.svg" />
            <button className={styles.blogs}>Blogs</button>
          </button>
          <button className={styles.frameContainer}>
            <img
              className={styles.frameChild}
              alt=""
              src="../frame-19941.svg"
            />
            <button className={styles.blogs}>Projects</button>
          </button>
          <button className={styles.frameButton} onClick={onFrameButton2Click}>
            <img
              className={styles.frameChild}
              alt=""
              src="../frame-19942.svg"
            />
            <button className={styles.blogs}>Achievements</button>
          </button>
          <button className={styles.frameContainer}>
            <img
              className={styles.frameChild}
              alt=""
              src="../frame-19941.svg"
            />
            <button className={styles.blogs}>Courses</button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
