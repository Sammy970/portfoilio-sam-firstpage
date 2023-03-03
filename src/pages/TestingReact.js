import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";
import PortalPopup from "../components/PortalPopup";
import OverallNavigationDropDown1 from "../components/OverallNavigationDropDown1";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./TestingReact.module.css";

const TestingReact = () => {
  const navigate = useNavigate();
  const [isDropDownPopupOpen, setDropDownPopupOpen] = useState(false);
  const [isOverallNavigationDropDownOpen, setOverallNavigationDropDownOpen] =
    useState(false);

  const onFashionLogoClick = useCallback(() => {
    // Please sync "ShoppingLandingPageFinal" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/aboutpage");
  }, [navigate]);

  const openDropDownPopup = useCallback(() => {
    setDropDownPopupOpen(true);
  }, []);

  const closeDropDownPopup = useCallback(() => {
    setDropDownPopupOpen(false);
  }, []);

  const openOverallNavigationDropDown = useCallback(() => {
    setOverallNavigationDropDownOpen(true);
  }, []);

  const closeOverallNavigationDropDown = useCallback(() => {
    setOverallNavigationDropDownOpen(false);
  }, []);

  const onMediumBtnClick = useCallback(() => {
    window.open("https://samyak970.medium.com");
  }, []);

  const onGithubBtnClick = useCallback(() => {
    window.open("https://github.com/Sammy970");
  }, []);

  const onLinkedInBtnClick = useCallback(() => {
    window.open("https://www.linkedin.com");
  }, []);

  const onReadMoreClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onReadMore1Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onFrameButton3Click = useCallback(() => {
    navigate("/blogpage");
  }, [navigate]);

  return (
    <>
      <div className={styles.testingReact}>
        <div className={styles.finalNavigationBar}>
          <div className={styles.navigationInnerBar}>
            <button className={styles.fashionLogo} onClick={onFashionLogoClick}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <button className={styles.portfolio}>PORTFOLIO</button>
            </button>
            <div className={styles.menuRight}>
              <div className={styles.linksContainer}>
                <div className={styles.links}>
                  <button
                    className={styles.frameParent}
                    onClick={onFrameButtonClick}
                  >
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../frame-199415.svg"
                    />
                    <button className={styles.about}>About</button>
                  </button>
                  <button
                    className={styles.frameParent}
                    onClick={openDropDownPopup}
                  >
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../frame-199416.svg"
                    />
                    <button className={styles.about}>Links</button>
                  </button>
                  <button className={styles.frameContainer}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../frame-199417.svg"
                    />
                    <button className={styles.about}>Contact</button>
                  </button>
                </div>
                <button
                  className={styles.component2}
                  onClick={openOverallNavigationDropDown}
                >
                  <div className={styles.component2Child} />
                  <div className={styles.component2Item} />
                  <div className={styles.component2Inner} />
                  <div className={styles.lineDiv} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.finalHeroSection}>
          <div className={styles.heroSection}>
            <div className={styles.heyImSamyakJainParent}>
              <b className={styles.heyImSamyakContainer}>
                <p className={styles.heyIm}>Hey, I’m</p>
                <p className={styles.samyakJain}>Samyak Jain</p>
              </b>
              <b className={styles.currentlyAStudent}>
                Currently a student at VIT, Pune
              </b>
            </div>
            <img className={styles.image3Icon} alt="" src="../image-3@2x.png" />
            <img
              className={styles.heroSectionChild}
              alt=""
              src="../ellipse-3@2x.png"
            />
          </div>
        </div>
        <div className={styles.finalContactMeSection}>
          <div className={styles.finalContactMeSectionInner}>
            <div className={styles.image4Parent}>
              <img
                className={styles.image4Icon}
                alt=""
                src="../image-4@2x.png"
              />
              <button className={styles.mediumbtn} onClick={onMediumBtnClick}>
                <img
                  className={styles.iconssocial}
                  alt=""
                  src="../iconssocial.svg"
                />
                <img
                  className={styles.linkedinIcon}
                  alt=""
                  src="../-linkedin.svg"
                />
                <b className={styles.github}>LinkedIn</b>
                <b className={styles.github}>Read More</b>
                <img
                  className={styles.mediumIcon}
                  alt=""
                  src="../-medium.svg"
                />
                <b className={styles.medium}>Medium</b>
                <b className={styles.github}>Read More</b>
              </button>
              <button className={styles.githubbtn} onClick={onGithubBtnClick}>
                <img
                  className={styles.iconssocial1}
                  alt=""
                  src="../iconssocial1.svg"
                />
                <img
                  className={styles.linkedinIcon}
                  alt=""
                  src="../-linkedin1.svg"
                />
                <b className={styles.github}>LinkedIn</b>
                <b className={styles.medium}>Github</b>
                <img
                  className={styles.mediumIcon1}
                  alt=""
                  src="../-medium1.svg"
                />
                <b className={styles.github}>Medium</b>
                <b className={styles.github}>Read More</b>
              </button>
              <button className={styles.githubbtn} onClick={onLinkedInBtnClick}>
                <img
                  className={styles.iconssocial}
                  alt=""
                  src="../iconssocial2.svg"
                />
                <img
                  className={styles.linkedinIcon2}
                  alt=""
                  src="../-linkedin2.svg"
                />
                <b className={styles.medium}>LinkedIn</b>
                <b className={styles.github}>Read More</b>
                <img
                  className={styles.mediumIcon1}
                  alt=""
                  src="../-medium2.svg"
                />
                <b className={styles.github}>Medium</b>
                <b className={styles.github}>Read More</b>
              </button>
              <img
                className={styles.image5Icon}
                alt=""
                src="../image-41@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.finalNewBlogs}>
          <div className={styles.recentBlogsParent}>
            <b className={styles.recentBlogs}>Recent Blogs</b>
            <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
          </div>
          <div className={styles.blogcard}>
            <div className={styles.date}>September 08, 2019</div>
            <div
              className={styles.blogTitle}
            >{`Code splitting & Lazy loading a server side rendered React App`}</div>
            <div className={styles.blogShortDesc}>
              Reasoning, approach, and goals. Goals Faster initial load times.
              Users only download the code they need for the features they are
              using. THis...
            </div>
            <button className={styles.readMore3} onClick={onReadMoreClick}>
              <img
                className={styles.iconssocial}
                alt=""
                src="../iconssocial3.svg"
              />
              <img
                className={styles.linkedinIcon}
                alt=""
                src="../-linkedin3.svg"
              />
              <b className={styles.github}>LinkedIn</b>
              <b className={styles.github}>Read More</b>
              <img
                className={styles.mediumIcon1}
                alt=""
                src="../-medium3.svg"
              />
              <b className={styles.github}>Medium</b>
              <b className={styles.medium}>Read More</b>
            </button>
          </div>
          <div className={styles.blogcard}>
            <div className={styles.date}>September 08, 2019</div>
            <div
              className={styles.blogTitle}
            >{`Code splitting & Lazy loading a server side rendered React App`}</div>
            <div className={styles.blogShortDesc}>
              Reasoning, approach, and goals. Goals Faster initial load times.
              Users only download the code they need for the features they are
              using. THis...
            </div>
            <button className={styles.readMore3} onClick={onReadMore1Click}>
              <img
                className={styles.iconssocial}
                alt=""
                src="../iconssocial4.svg"
              />
              <img
                className={styles.linkedinIcon}
                alt=""
                src="../-linkedin3.svg"
              />
              <b className={styles.github}>LinkedIn</b>
              <b className={styles.github}>Read More</b>
              <img
                className={styles.mediumIcon1}
                alt=""
                src="../-medium4.svg"
              />
              <b className={styles.github}>Medium</b>
              <b className={styles.medium}>Read More</b>
            </button>
          </div>
          <button className={styles.frameButton} onClick={onFrameButton3Click}>
            <img
              className={styles.frameChild}
              alt=""
              src="../frame-199418.svg"
            />
            <button className={styles.checkOutMoreContainer}>
              <span className={styles.checkOutMore}>{`Check out more `}</span>
              <b className={styles.checkOutMore}>blogs</b>
              <span className={styles.checkOutMore}>...</span>
            </button>
          </button>
        </div>
        <div className={styles.finalNewArticles}>
          <div className={styles.newProjectsParent}>
            <b className={styles.recentBlogs}>New Projects</b>
            <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
          </div>
          <div className={styles.projectcard}>
            <div className={styles.maskGroup}>
              <img
                className={styles.samyak1Icon}
                alt=""
                src="../samyak-1@2x.png"
              />
            </div>
            <div className={styles.projectTitleParent}>
              <div className={styles.projectTitle}>Project Title</div>
              <div className={styles.loremIpsumIsSimplyDummyTeWrapper}>
                <div className={styles.loremIpsumIs}>
                  Lorem Ipsum is simply dummy text o f the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever .
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectcard}>
            <div className={styles.maskGroup}>
              <img
                className={styles.samyak1Icon}
                alt=""
                src="../samyak-1@2x.png"
              />
            </div>
            <div className={styles.projectTitleParent}>
              <div className={styles.projectTitle}>Project Title</div>
              <div className={styles.loremIpsumIsSimplyDummyTeWrapper}>
                <div className={styles.loremIpsumIs1}>
                  Lorem Ipsum is simply dummy text o f the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever .
                </div>
              </div>
            </div>
          </div>
          <button className={styles.frameButton}>
            <img
              className={styles.frameChild}
              alt=""
              src="../frame-199418.svg"
            />
            <button className={styles.checkOutMoreContainer}>
              <span className={styles.checkOutMore}>{`Check out more `}</span>
              <b className={styles.checkOutMore}>projects</b>
              <span className={styles.checkOutMore}>...</span>
            </button>
          </button>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameWrapper}>
            <div className={styles.designedAndDevelopedByParent}>
              <b className={styles.designedAndDeveloped}>
                Designed and Developed by:
              </b>
              <b className={styles.samyakJain1}>Samyak Jain</b>
            </div>
          </div>
          <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
        </div>
      </div>
      {isDropDownPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropDownPopup}
        >
          <DropDown onClose={closeDropDownPopup} />
        </PortalPopup>
      )}
      {isOverallNavigationDropDownOpen && (
        <PortalDrawer
          placement="Top"
          onOutsideClick={closeOverallNavigationDropDown}
        >
          <OverallNavigationDropDown1
            onClose={closeOverallNavigationDropDown}
          />
        </PortalDrawer>
      )}
    </>
  );
};

export default TestingReact;
