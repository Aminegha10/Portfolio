"use client";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
import Link from "next/link";

const reviewsData = [
  {
    avatar: "/developemntTeam/avatar-1.png",
    name: "Abdelmounim Rihane",
    job: "Software Engineer",
    review:
      "I focus on building the foundation that supports everything — making sure the system is scalable and performs well.",
    social: [
      {
        path: "https://www.linkedin.com/in/rihane-monim",
        name: <RiLinkedinFill />,
      },
      {
        path: "https://github.com/Monimrihane41",
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
    ],
  },
  {
    avatar: "/developemntTeam/avatar-2.png",
    name: "Zakaria Chegdal",
    job: "Software Engineer",
    review:
      "I lead the technical vision, guiding the team and ensuring we make the right decisions to move forward",
    social: [
      {
        path: "https://www.linkedin.com/in/zakaria-chegdal/",
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
    ],
  },
  {
    avatar: "/developemntTeam/avatar-3.png",
    name: "Oussama Nasr",
    job: "Software Engineer",
    review:
      "I bring designs to life, making sure the user experience is smooth and visually appealing on every device.",
    social: [
      {
        path: "https://www.linkedin.com/in/oussamanasr0",
        name: <RiLinkedinFill />,
      },
      {
        path: "",
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
    ],
  },
  {
    avatar: "/developemntTeam/avatar-5.png",
    name: "Younes Ait Manssour",
    job: "Software Engineer",
    review:
      "I build the systems that run behind the scenes, ensuring data flows smoothly and securely.",
    social: [
      {
        path: "https://www.linkedin.com/in/younesaitmanssour/",
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
    ],
  },
  {
    avatar: "/developemntTeam/avatar-6.png",
    name: "Alaa Ghaichat",
    job: "Software Engineer",
    review:
      "I connect the frontend and backend, ensuring seamless interaction and a smooth user experience across the application.",
    social: [
      {
        path: "https://www.linkedin.com/in/alaa-ghaichat/",
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
    ],
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">
          Development Team
        </h2>
        {/* slider */}
        <Swiper
          slidesPerview={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        className="rounded-full border-2 border-primary"
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col ">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground mb-2">
                    {person.review}
                  </CardDescription>
                  <CardDescription className="text-lg flex gap-2 text-muted-foreground">
                    {person.social.map((item) => {
                      return (
                        <div className="cursor-pointer transition-all duration-200 hover:scale-75 hover:text-primary">
                          <Link href={item.path}>{item.name}</Link>
                        </div>
                      );
                    })}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
