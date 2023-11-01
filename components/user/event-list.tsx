import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const EventList = () => {
  return (
    <div className="px-10 pb-20 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* {testimonials.map((item) => ( */}
        <Card
          // key={item.description}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-x-2">
              <div>
                <div className="mb-2">
                  <Image
                    className="rounded-md"
                    width={500}
                    height={50}
                    src="/sample.jpg"
                    alt=""
                  />
                </div>
                <p className="text-lg">Domain Name</p>
                <p className="text-zinc-400 text-sm">
                  Domain samploe Description
                </p>
              </div>
            </CardTitle>
            {/* <CardContent className="pt-4 px-0">
            {item.description}
          </CardContent> */}
          </CardHeader>
        </Card>
        <Card
          // key={item.description}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-x-2">
              <div>
                <div className="mb-2">
                  <Image
                    className="rounded-md"
                    width={500}
                    height={50}
                    src="/sample.jpg"
                    alt=""
                  />
                </div>
                <p className="text-lg">Domain Name</p>
                <p className="text-zinc-400 text-sm">
                  Domain samploe Description
                </p>
              </div>
            </CardTitle>
            {/* <CardContent className="pt-4 px-0">
            {item.description}
          </CardContent> */}
          </CardHeader>
        </Card>
        <Card
          // key={item.description}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-x-2">
              <div>
                <div className="mb-2">
                  <Image
                    className="rounded-md"
                    width={500}
                    height={50}
                    src="/sample.jpg"
                    alt=""
                  />
                </div>
                <p className="text-lg">Domain Name</p>
                <p className="text-zinc-400 text-sm">
                  Domain samploe Description
                </p>
              </div>
            </CardTitle>
            {/* <CardContent className="pt-4 px-0">
            {item.description}
          </CardContent> */}
          </CardHeader>
        </Card>
        <Card
          // key={item.description}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-x-2">
              <div>
                <div className="mb-2">
                  <Image
                    className="rounded-md"
                    width={500}
                    height={50}
                    src="/sample.jpg"
                    alt=""
                  />
                </div>
                <p className="text-lg">Domain Name</p>
                <p className="text-zinc-400 text-sm">
                  Domain samploe Description
                </p>
              </div>
            </CardTitle>
            {/* <CardContent className="pt-4 px-0">
            {item.description}
          </CardContent> */}
          </CardHeader>
        </Card>
        <Card
          // key={item.description}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-x-2">
              <div>
                <div className="mb-2">
                  <Image
                    className="rounded-md"
                    width={500}
                    height={50}
                    src="/sample.jpg"
                    alt=""
                  />
                </div>
                <p className="text-lg">Domain Name</p>
                <p className="text-zinc-400 text-sm">
                  Domain samploe Description
                </p>
              </div>
            </CardTitle>
            {/* <CardContent className="pt-4 px-0">
            {item.description}
          </CardContent> */}
          </CardHeader>
        </Card>
        <Card
          // key={item.description}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-x-2">
              <div>
                <div className="mb-2">
                  <Image
                    className="rounded-md"
                    width={500}
                    height={50}
                    src="/sample.jpg"
                    alt=""
                  />
                </div>
                <p className="text-lg">Domain Name</p>
                <p className="text-zinc-400 text-sm">
                  Domain samploe Description
                </p>
              </div>
            </CardTitle>
            {/* <CardContent className="pt-4 px-0">
            {item.description}
          </CardContent> */}
          </CardHeader>
        </Card>
        <Card
          // key={item.description}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-x-2">
              <div>
                <div className="mb-2">
                  <Image
                    className="rounded-md"
                    width={500}
                    height={50}
                    src="/sample.jpg"
                    alt=""
                  />
                </div>
                <p className="text-lg">Domain Name</p>
                <p className="text-zinc-400 text-sm">
                  Domain samploe Description
                </p>
              </div>
            </CardTitle>
            {/* <CardContent className="pt-4 px-0">
            {item.description}
          </CardContent> */}
          </CardHeader>
        </Card>
        <Card
          // key={item.description}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-x-2">
              <div>
                <div className="mb-2">
                  <Image
                    className="rounded-md"
                    width={500}
                    height={50}
                    src="/sample.jpg"
                    alt=""
                  />
                </div>
                <p className="text-lg">Domain Name</p>
                <p className="text-zinc-400 text-sm">
                  Domain samploe Description
                </p>
              </div>
            </CardTitle>
            {/* <CardContent className="pt-4 px-0">
            {item.description}
          </CardContent> */}
          </CardHeader>
        </Card>
        {/* ))} */}
      </div>
    </div>
  );
};
