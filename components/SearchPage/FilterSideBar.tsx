import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

const FilterSideBar = () => {
  return (
    <div className="bg-white w-70 border rounded-lg p-5">
      <h1 className="text-xl font-semibold mb-5">Filters</h1>
      <div className="flex flex-col gap-2">
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
    </div>
  );
};
export default FilterSideBar;
