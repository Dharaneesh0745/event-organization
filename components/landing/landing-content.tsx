"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    logo: "/toni.jpg",
    name: "Dharaneesh",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
  {
    logo: "/bot.webp",
    name: "Dinesh",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
  {
    logo: "/bot.webp",
    name: "Afsal Ahamed",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
  {
    logo: "/bot.webp",
    name: "Prakash Dass",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
  {
    logo: "/bot.webp",
    name: "Mugesh Ram Sundar",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
  {
    logo: "/bot.webp",
    name: "Robin Anburaj",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
  {
    logo: "/bot.webp",
    name: "Sidharth",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
  {
    logo: "/bot.webp",
    name: "Sanjeevi Kumar",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
  {
    logo: "/bot.webp",
    name: "Harshad",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
  {
    logo: "/bot.webp",
    name: "Deepak",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
  {
    logo: "/bot.webp",
    name: "Manickam",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
  {
    logo: "/bot.webp",
    name: "Krishnan",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
  {
    logo: "/bot.webp",
    name: "Shaakthi Ganapathi",
    title: "AIML - II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat at sed consequuntur incidunt ab esse similique, maiores modi neque, voluptate perferendis unde deserunt accusamus commodi minus quidem consectetur ullam!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Event Organizers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="mr-2 rounded-md">
                  <Image
                    className="rounded-full"
                    width={50}
                    height={50}
                    src={item.logo}
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              {/* <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent> */}
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
