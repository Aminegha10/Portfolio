"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "./ProjectCard";

const projectData = [
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
    image: "/work/6.png",
    category: "react js",
    name: "Luca in Disney+",
    description:
      "The LucaHeader welcomes users with a vibrant navbar and an enchanting hero section, blending seaside charm and adventure to create a captivating first impression.",
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
    category: "react js",
    name: "MoviesApp",
    description:
      "MoviesApp allows users to discover, search, and manage movies with personalized recommendations.",
    link: "https://movies-app-eta-hazel.vercel.app/",
    github: "https://github.com/Aminegha10/MoviesApp.git",
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
  {
    image: "/work/1.png",
    category: "react js",
    name: "SpicyBites",
    description:
      "SpicyBites is a pizza delivery platform offering a variety of delicious, freshly made pizzas. Browse the menu, customize your order, and enjoy a flavorful experience with every bite.",
    link: "https://spicy-bites-app.vercel.app/",
    github: "https://github.com/Aminegha10/SpicyBitesApp.git",
  },
  {
    image: "/work/4.png",
    category: "fullstack",
    name: "Nexa Website",
    description:
      "lorem ipsum dolor aquidijproit  codlflrjl  fdopfjlf fa fljdlf fjls f",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="mb-12 relative xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem, ipsum dolor sit amet consectuere adipisociong elit.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first four projects for the slider */}
            {projectData.slice(0, 6).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
