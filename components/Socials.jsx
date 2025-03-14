"use client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";
import Link from "next/link";
const icons = [
  {
    path: "https://www.linkedin.com/feed/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Aminegha10",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100087530343064",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/amine_gha10/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
