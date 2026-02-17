import { FC } from "react";
import { AboutMe } from "./components/AboutMe";
import { Level } from "./components/Level";
import { Gallery } from "./components/Gallery";
import { Services } from "./components/services/Services";
import { Questions } from "./components/Questions";
import { Ratings } from "./components/ratings/Ratings";
import { Comments } from "./components/Comments";

const AnnouncementsSection: FC = () => {
  return (
    <div className="announcements">
      <div className="section">
        <AboutMe />
        <Level />
        <Gallery />
        <Services />
        <Questions />
        <Ratings />
        <Comments />
      </div>
    </div>
  );
};

export default AnnouncementsSection;
