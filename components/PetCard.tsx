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
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-square overflow-hidden relative">
        <Avatar className="w-full h-full rounded-none">
          <Image
            src={DogImage || "/placeholder.svg"}
            alt="Luna the dog"
            width={300}
            height={300}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        </Avatar>
        <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-500 text-white z-10">
          Available
        </Badge>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">Luna</h3>
          <div className="flex text-yellow-400">{"★".repeat(5)}</div>
        </div>
        <p className="text-blue-600 text-sm mb-2">Tabby Cat • 2 years old</p>
        <p className="text-gray-500 text-sm mb-4 flex items-center">
          <span className="mr-1">📍</span>
          San Francisco, CA
        </p>
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default PetCard;
