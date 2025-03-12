"use client";

import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Glassmorphism, GlassShadow } from "./ui/ui";
import Image from "next/image";
import { noImg } from "@/assets";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div id="testimonials" className="w-full pt-30 relative">
      <h2 className="text-3xl font-semibold w-full text-center my-5 text-primary">
        Testimonials
      </h2>
      <GlassShadow />
      <div className="md:w-fit w-[84vw] mx-auto font-[family-name:var(--font-geist-sans)]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full md:w-[50vw]"
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                style={{ position: "relative" }}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Image
                    src={noImg.src}
                    alt={"Hamdallah Rabiu"}
                    width={1} // NextJs forced me to do this...
                    height={1} // NextJs forced me to do this...
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      left: "32%",
                      zIndex: 2,
                      objectFit: "cover",
                      position: "absolute",
                    }}
                  />
                  <Card
                    className="md:w-[300px] h-fit bg-transparent mt-14"
                    style={{
                      padding: 0,
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                  >
                    <Glassmorphism className="h-full">
                      <div
                        className="mb-3 bg-transparent px-2"
                        style={{
                          height: "300px",
                          width: "100%",
                          paddingBlock: "50px",
                        }}
                      >
                        <Quote size={24} className="mt-4" />
                        <p className="mt-3">
                          A great product won’t sell itself—you need a strategic
                          funnel that guides customers from interest to
                          purchase.
                        </p>
                      </div>

                      <CardHeader
                        style={{ paddingInline: "10px", marginBottom: "10px" }}
                      >
                        <CardTitle>Hamdallah A. Rabiu</CardTitle>
                        <CardDescription>
                          <p className="font-light text-sm">
                            Direct-Response Marketer & Copywriter
                          </p>
                        </CardDescription>
                      </CardHeader>
                    </Glassmorphism>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
        </Carousel>

        <div className="flex justify-center items-center gap-2 mt-2">
          {api?.scrollSnapList().map((_, i) => (
            <span
              key={i}
              className={
                current === i + 1
                  ? "text-primary text-4xl"
                  : "text-purple-800 opacity-40 text-4xl"
              }
            >
              •
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
