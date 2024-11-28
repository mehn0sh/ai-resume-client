import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utlis/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { CoverLetters } from "../constans/constans";
const CoverLetterCard = ({ CoverLetter }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: CoverLetter.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={CoverLetter.icon}
            alt={CoverLetter.title}
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {CoverLetter.title}
        </h3>
        <p
          className="text-white-100 text-[14px] pl-1 tracking-wider"
          style={{ margin: 0 }}
        >
          {CoverLetter.points}
        </p>
      </div>{" "}
    </VerticalTimelineElement>
  );
};
const CoverLetter = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          3 Steps Towards the Perfect Cover Letter
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {CoverLetters.map((item, index) => (
            <CoverLetterCard key={`experience-${index}`} CoverLetter={item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(CoverLetter, "CoverLetter");
