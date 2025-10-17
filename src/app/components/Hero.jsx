import React from "react";
import Button from "@/app/components/Button";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
        <section className="flex flex-col justify-center py-4 px-4 md:px-8 lg:px-16 order-2 md:order-1">
          <div>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl md:block hidden">
              Make <br /> remote work
            </h1>
            <h1 className="text-4xl font-bold md:text-6xl lg:text-6xl block md:hidden">
              Make remote work
            </h1>
          </div>
          <div>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              nihil alias, at maxime ex ullam repudiandae est quaerat illo
              minima quisquam voluptates, accusamus aut eum, sequi voluptate
              amet iusto deserunt?
            </p>
          </div>
          <div className="mt-3">
            <Button text="Learn more" />
          </div>
          <div className="inline-flex mt-8">
            <Image
              src="./client-databiz.svg"
              width={80}
              height={80}
              alt="client1"
              className="mr-3"
            />
            <Image
              src="./client-audiophile.svg"
              width={80}
              height={80}
              alt="client2"
              className="mr-3"
            />
            <Image
              src="./client-meet.svg"
              width={80}
              height={80}
              alt="client3"
              className="mr-3"
            />
            <Image
              src="./client-maker.svg"
              width={80}
              height={80}
              alt="client4"
              className="mr-3"
            />
          </div>
        </section>
        <section className="flex items-center justify-center order-1 md:order-2">
          <div className=" relative">
            <Image
              src="/image-hero-desktop.png"
              width={400}
              height={300}
              alt="hero image"
              className=""
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
