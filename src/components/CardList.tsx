import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
const popularContent = [
  {
    id: 1,
    title: "Payment for Services",
    badge: "Jhon",
    image: "/avatar.png",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Black",
    image: "/avatar.png",
    count: 2100,
  },
  {
    id: 3,
    title: "Payment for Services",
    badge: "Dick",
    image: "/avatar.png",
    count: 1300,
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Kelly",
    image: "/avatar.png",
    count: 1500,
  },
  {
    id: 5,
    title: "Payment for Services",
    badge: "Nick",
    image: "/avatar.png",
    count: 2500,
  },
];
const latestTransactions = [
  {
    id: 1,
    title: "Payment for Services",
    badge: "Coding",
    image: "/window.svg",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Coding",
    image: "/vercel.svg",
    count: 2100,
  },
  {
    id: 3,
    title: "Payment for Services",
    badge: "Coding",
    image: "/file.svg",
    count: 1300,
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Coding",
    image: "/globe.svg",
    count: 1500,
  },
  {
    id: 5,
    title: "Payment for Services",
    badge: "Coding",
    image: "/next.svg",
    count: 2500,
  },
];
const CardList = ({ title }: { title: string }) => {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-center justify-between gap-4 p-4"
          >
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
