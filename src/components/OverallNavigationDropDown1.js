import { useEffect } from "react";
import styles from "./OverallNavigationDropDown1.module.css";

const OverallNavigationDropDown1 = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.overallnavigationdropdown} data-animate-on-scroll>
      <div className={styles.menuRight}>
        <div className={styles.linksParent}>
          <div className={styles.links}>
            <button className={styles.frameParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-19949.svg"
              />
              <button className={styles.about}>About</button>
            </button>
            <button className={styles.frameParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-199410.svg"
              />
              <button className={styles.about}>Blogs</button>
            </button>
            <button className={styles.frameParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-199411.svg"
              />
              <button className={styles.about}>Projects</button>
            </button>
            <button className={styles.frameParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-199412.svg"
              />
              <button className={styles.about}>Courses</button>
            </button>
            <button className={styles.frameParent1}>
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-199413.svg"
              />
              <button className={styles.about}>Achievements</button>
            </button>
            <button className={styles.frameParent2}>
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-199414.svg"
              />
              <button className={styles.about}>Contact</button>
            </button>
          </div>
          <button className={styles.component2} onClick={onClose}>
            <div className={styles.component2Child} />
            <img
              className={styles.component2Item}
              alt=""
              src="../line-11.svg"
            />
            <div className={styles.component2Inner} />
            <img className={styles.lineIcon} alt="" src="../line-31.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverallNavigationDropDown1;
