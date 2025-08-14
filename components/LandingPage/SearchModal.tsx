import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

export function SearchModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="flex items-center bg-purple-500 text-white sm:text-lg sm:px-5 sm:py-5 rounded-lg cursor-pointer hover:bg-purple-600 font-semibold transition-colors">
            <Search /> Start Searching
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white text-gray-800 rounded-xl shadow-lg border border-purple-100">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-purple-600">
              Find Your FurFect Pet
            </DialogTitle>
            <DialogDescription className="text-center text-gray-500">
              Tell us what you&apos;re looking for and we&apos;ll help you find
              your new best friend
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="pet" className="text-purple-700 font-medium">
                What type of pet are you looking for?
              </Label>
              <Input
                id="pet"
                name="pet"
                placeholder="Search by pet type (e.g., dog, cat)"
                className="border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 rounded-lg text-gray-800 placeholder-gray-400"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="location" className="text-purple-700 font-medium">
                Your Location
              </Label>
              <Input
                id="location"
                name="location"
                placeholder="Enter your city or ZIP code"
                className="border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 rounded-lg text-gray-800 placeholder-gray-400 py-2"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="border border-purple-300 text-purple-600 hover:text-purple-600 hover:bg-purple-50 transition-colors cursor-pointer"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-purple-500 text-white hover:bg-purple-600 transition-colors cursor-pointer"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
