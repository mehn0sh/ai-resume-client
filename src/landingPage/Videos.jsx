import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utlis/motion";
import { VideoItems } from "../constans/constans";
import { youtub } from "../assets";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const VideoCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[240px] md:w-[240px] lg:w-[300px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={youtub}
                  alt="source code"
                  className=" object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};
const Videos = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          elevate your resume, job search & career to the top floor!
        </p>

        <h2 className={styles.sectionHeadText}>Videos</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center items-center">
        <Splide
          options={{
            perPage: 3,
            breakpoints: {
              640: {
                perPage: 1,
              },
              900: {
                perPage: 2,

              },
            },
            width:"100%",
            gap:"0.5rem"
          }}
        >
          {VideoItems.map((item, index) => (
            <SplideSlide key={`video-${index}`}>
              <VideoCard key={`video-${index}`} index={index} {...item} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default SectionWrapper(Videos, "");
