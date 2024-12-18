import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constans/constans";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utlis/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          tell about the technologies that you know !
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "h");
