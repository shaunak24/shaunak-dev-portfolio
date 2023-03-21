import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { github, deployment } from "../assets";
import { fadeIn } from "../utils/motion";

const Icon = ({ link, image, description }) => {
  if (!link) return;
  return (
    <div
      className="w-10 h-10 black-gradient justify-center items-center rounded-full flex cursor-pointer"
      onClick={() => window.open(link, "_blank")}
    >
      <img
        src={image}
        alt={description}
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
  );
};

const ProjectCard = ({
  name,
  index,
  description,
  tags,
  image,
  source_code_link,
  deployment_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, speed: 450, scale: 1 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="w-full relative h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <Icon link={source_code_link} image={github} description="github" />
            <Icon
              link={deployment_link}
              image={deployment}
              description="deployment link"
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
