"use client";
import react, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/10.png",
    category: "react js",
    name: "ChatAI",
    description:
      "ChatAI is a real-time messaging application that allows users to connect and communicate seamlessly. Enjoy features like group chats, media sharing, and more.",
    link: "https://ai-chat-pizg.vercel.app/",
    github: "https://github.com/Aminegha10/AI-Chat.git",
  },
  {
    image: "/work/7.png",
    category: "react js",
    name: "Juicy",
    description:
      "Juicy UI animation delivers smooth transitions and vibrant motions, offering an engaging and seamless user experience.",
    link: "https://juicy-animation.vercel.app/",
    github: "https://github.com/Aminegha10/Juicy_Animation",
  },
  {
    image: "/work/9.png",
    category: "next js",
    name: "Dead Cells Guide Companion",
    description:
      "Dead Cells Guide delivers quick access to weapons, biomes, and tips, enhancing your gameplay with a sleek companion UI.",
    link: "https://dead-cells.vercel.app/",
    github: "https://github.com/Aminegha10/DeadCells",
  },
  {
    image: "/work/6.png",
    category: "react js",
    name: "Disney+",
    description:
      "The JewelryHeader showcases elegant designs with a sleek navbar and a captivating hero section, inviting users to explore exquisite collections effortlessly.",
    link: "https://diseny.vercel.app/",
    github: "https://github.com/Aminegha10/Diseny",
  },
  {
    image: "/work/5.png",
    category: "react js",
    name: "MoviesApp",
    description:
      "The JewelryHeader showcases elegant designs with a sleek navbar and a captivating hero section, inviting users to explore exquisite collections effortlessly.",
    link: "https://landing-page-iota-lovat-36.vercel.app/",
    github: "https://github.com/Aminegha10/Landing_Page",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "MoviesApp",
    description:
      "MoviesApp allows users to discover, search, and manage movies with personalized recommendations.",
    link: "https://movies-app-eta-hazel.vercel.app/",
    github: "https://github.com/Aminegha10/MoviesApp.git",
  },
  {
    image: "/work/8.png",
    category: "react js",
    name: "Nexus",
    description:
      "helps businesses grow by offering tools to manage campaigns, track performance, and reach their audience across digital channels.",
    link: "https://marketig-digitale-i816.vercel.app/",
    github: "https://github.com/Aminegha10/Marketig_Digitale",
  },
  {
    image: "/work/4.png",
    category: "fullstack",
    name: "ReservationApp",
    description:
      "Reservation App connects users with service providers, allowing them to book appointments and schedule meetings easily.",
    link: "https://reservatiionappfront.vercel.app/",
    github: "https://github.com/Aminegha10/ReservatiionApp.git",
  },

  {
    image: "/work/2.png",
    category: "fullstack",
    name: "LifeStyles",
    description:
      "A full-stack website providing lifestyle insights and personalized product recommendations, including music and story styles.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "SpicyBites",
    description:
      "SpicyBites is a pizza delivery platform offering a variety of delicious, freshly made pizzas. Browse the menu, customize your order, and enjoy a flavorful experience with every bite.",
    link: "https://spicy-bites-app.vercel.app/",
    github: "https://github.com/Aminegha10/SpicyBitesApp.git",
  },
];
//remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProject = projectData.filter((project) => {
    //if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none ">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs conent */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-lg xl:mt-8 ">
            {filteredProject.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
