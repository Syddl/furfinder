import { MapPin } from "lucide-react";
import Image from "next/image";
import DogImage from "@/assests/dog.webp";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Avatar } from "./ui/avatar";
import { Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const PetCard = () => {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 group hover:scale-105 py-0 pb-6">
      <div className="aspect-square overflow-hidden relative">
        <Avatar className="w-full h-full rounded-none">
          <Image
            src={DogImage}
            alt="Luna the cat"
            width={150}
            height={150}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        </Avatar>
        <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-500 text-white">
          Available
        </Badge>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-blue-900">Luna</CardTitle>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current" />
            ))}
          </div>
        </div>
        <CardDescription className="text-blue-600">
          Tabby Cat • 2 years old
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        <div className="flex items-center text-blue-500 text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          San Francisco, CA
        </div>
        <Button
          size="sm"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-full cursor-pointer"
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default PetCard;
