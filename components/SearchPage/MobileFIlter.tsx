import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Filter } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";

export function MobileFilter() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="py-5 w-25">
          <Filter /> Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-5">
          <div>
            <Label className="text-base font-semibold  mb-3 block">
              Pet Type
            </Label>
            <div className="space-y-2">
              {["Dogs", "Cats", "Rabbits", "Birds", "Other"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={type} />
                  <Label htmlFor={type} className="text-sm">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <Label className="text-base font-semibold  mb-3 block">Size</Label>
            <div className="space-y-2">
              {[
                "Small (0-25 lbs)",
                "Medium (26-60 lbs)",
                "Large (61-100 lbs)",
                "Extra Large (100+ lbs)",
              ].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox id={size} />
                  <Label htmlFor={size} className="text-sm">
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <Label className="text-base font-semibold mb-3 block">
              Good With
            </Label>
            <div className="space-y-2">
              {["Kids", "Dogs", "Cats", "Other Animals"].map((trait) => (
                <div key={trait} className="flex items-center space-x-2">
                  <Checkbox id={trait} />
                  <Label htmlFor={trait} className="text-sm">
                    {trait}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <Label className="text-base font-semibold  mb-3 block">
              Special Needs
            </Label>
            <div className="space-y-2">
              {[
                "House Trained",
                "Spayed/Neutered",
                "Vaccinated",
                "Special Care",
              ].map((need) => (
                <div key={need} className="flex items-center space-x-2">
                  <Checkbox id={need} />
                  <Label htmlFor={need} className="text-sm">
                    {need}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
