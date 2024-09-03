import Tiptap from '@/components/tiptap';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import React from 'react';

const FormWork = () => {
  return (
    <>
      <div className="flex flex-col gap-8 py-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <Label
                  htmlFor="title"
                  className="w-16 shrink-0 text-left sm:text-right"
                >
                  Title
                </Label>
                <Input id="title" className="w-full" />
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <Label
                  htmlFor="title"
                  className="w-16 shrink-0 text-left sm:text-right"
                >
                  Link
                </Label>
                <Input id="title" className="w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <Label
                    htmlFor="from"
                    className="w-16 shrink-0 text-left sm:text-right"
                  >
                    From
                  </Label>
                  <Input id="from" className="w-full" />
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <Label
                    htmlFor="to"
                    className="w-16 shrink-0 text-left sm:text-right"
                  >
                    To
                  </Label>
                  <Input id="year" className="w-full" />
                </div>
              </div>
            </div>
          </div>

          <Tiptap />

          <div className="flex flex-col gap-4">
            <Label htmlFor="skill" className="w-fit text-left">
              Skill (optional)
            </Label>
            <div className="flex w-full items-center justify-center rounded-md border border-input p-6">
              <div className="flex w-full flex-wrap gap-2">
                <div className="flex w-fit items-center gap-4 rounded-full bg-lime-400 px-4 py-1 pr-2 group-hover:bg-lime-400/20">
                  <p className="">Next.Js</p>

                  <button className="group/item relative h-4 w-4 hover:!opacity-100 group-hover/action:opacity-50">
                    <div className="absolute -inset-2 z-0 rounded-full bg-red-400/10 opacity-0 backdrop-blur-md duration-200 group-hover/item:opacity-100"></div>

                    <X className="absolute left-0 top-0 z-20 h-4 w-4 text-white group-hover/item:text-red-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* <p className="text-sm text-slate-600">No Skill Added</p> */}
          </div>

          <div className="grid grid-cols-7 items-center gap-4">
            <Input id="title" className="col-span-6" />
            <Button>Add Skill</Button>
          </div>
        </div>
      </div>

      <Button className="w-full" type="submit">
        Save changes
      </Button>
    </>
  );
};

export default FormWork;
