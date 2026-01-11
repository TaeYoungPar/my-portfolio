import Link from "next/link";
import {
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://www.instagram.com/taeyoung_parko/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine className="w-6 h-6" />
      </Link>
      <Link
        href="https://github.com/TaeYoungPar"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine className="w-6 h-6" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/taeyoung-park-246b31196/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default Socials;
