import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const workSlides = {
  slides: [
    {
      projectId: 1,
      images: [
        {
          title: "쇼츠메이커",
          path: "/images/thumb.png",
        },
        {
          title: "FITFOLIO",
          path: "/images/fit.PNG",
        },
        {
          title: "SFACLOG",
          path: "/images/sfac.PNG",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
    {
      projectId: 5,
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[300px] md:h-[300px] lg:h-[350px] xl:h-[480px]"
    >
      {workSlides.slides.map((slide, indexx) => (
        <SwiperSlide key={indexx}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => (
              <Link key={index} href={`/project/${slide.projectId + index}`}>
                <div className="relative rounded-lg overflow-hidden flex items-center justify-center group ">
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    <Image
                      src={image.path}
                      width={300}
                      height={200}
                      alt=""
                      className="h-[120px] w-[250px] lg:w-[250px] lg:h-[150px] xl:w-[300px] xl:h-[200px] rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 rounded-lg"></div>
                    {index < 3 && indexx < 1 ? (
                      <div
                        className=" absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                      group-hover:lg:-translate-y-14 group-hover:xl:-translate-y-20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-x-2 tracking-[0.2rem]">
                          <div className="delay-100">View</div>
                          <div className=" translate-y-[200%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">
                            Project
                          </div>
                          <div className="text-xl translate-y-[400%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className=" absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                    group-hover:lg:-translate-y-14 group-hover:xl:-translate-y-20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-x-2 tracking-[0.2rem]">
                          <div className="delay-100">아직</div>
                          <div className=" translate-y-[200%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">
                            준비중이에요
                          </div>
                          <div className="text-xl translate-y-[400%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            ...
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
