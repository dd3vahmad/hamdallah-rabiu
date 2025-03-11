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
import { placeholder } from "@/assets";

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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
      <div className="md:w-fit w-[100vw] mx-auto font-[family-name:var(--font-geist-sans)]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full md:w-[50vw]"
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card
                    className="md:w-[300px] h-fit"
                    style={{
                      padding: 0,
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                  >
                    <Glassmorphism className="h-full">
                      <Image
                        src={placeholder.src}
                        alt={"Hamdallah Rabiu"}
                        width={100} // NextJs forced me to do this...
                        height={100} // NextJs forced me to do this...
                        style={{
                          height: "300px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        className="mb-3"
                      />
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
          <CarouselPrevious />
          <CarouselNext />
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
