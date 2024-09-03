'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowUpRight, Edit, Plus, Trash, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CardWorkCultivation from './_components/card-work-cultivation';
import CardProjectCultivation from './_components/card-project-cultivation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Tiptap from '@/components/tiptap';
import FormWork from './_components/form-work';
import FormProject from './_components/form-project';

const CultivasionPage = () => {
  return (
    <main className="w-svh relative top-0 min-h-svh bg-[#0E1200]">
      <div className="container flex min-h-svh flex-col gap-12 md:grid md:grid-cols-3">
        <div className="top-0 max-h-svh min-h-svh py-16 md:sticky md:py-24">
          <motion.div
            className="relative flex h-fit w-full flex-col gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative h-fit w-full">
              <Image
                src={'job-experience.svg'}
                fill
                sizes="100%"
                className="!relative !h-auto !w-[100%]"
                style={{ filter: 'invert(100%)' }}
                alt="job-experience"
              />
            </div>

            <p className="text-xl text-slate-400">
              “Design is not just what it looks like and feels like. Design is
              how it works” -{' '}
              <span className="text-xl text-lime-400">Steve Jobs</span>
            </p>
          </motion.div>
        </div>
        <div className="relative top-0 flex flex-col gap-8 pb-16 md:pb-24">
          <div className="sticky top-0 z-30 flex flex-col gap-4 pt-16 md:pt-24">
            <div className="absolute -inset-4 bg-[#0E1200] opacity-90 backdrop-blur-xl"></div>
            <p className="after: relative w-fit text-lg font-semibold uppercase text-white">
              Work Experience
            </p>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="z-30 flex flex-row gap-2 bg-lime-500 hover:bg-lime-500/90">
                  <Plus className="h-5 w-5" /> Add Experience
                </Button>
              </SheetTrigger>
              <SheetContent
                className="max-h-[calc(100svh-48px)] overflow-y-auto px-0"
                side={'bottom'}
              >
                <div className="container">
                  <SheetHeader>
                    <SheetTitle>Cultivating Experience</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </SheetDescription>
                  </SheetHeader>

                  <FormWork />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex flex-col gap-12">
            <CardWorkCultivation />
            <CardWorkCultivation />
            <CardWorkCultivation />
            <CardWorkCultivation />
          </div>
        </div>
        <div className="flex flex-col gap-8 pb-16 md:pb-24">
          <div className="sticky top-0 z-30 flex flex-col gap-4 pt-16 md:pt-24">
            <div className="absolute -inset-4 bg-[#0E1200] opacity-90 backdrop-blur-xl"></div>
            <p className="after: relative w-fit text-lg font-semibold uppercase text-white">
              Project Experience
            </p>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="z-30 flex flex-row gap-2 bg-lime-500 hover:bg-lime-500/90">
                  <Plus className="h-5 w-5" /> Add Experience
                </Button>
              </SheetTrigger>
              <SheetContent
                className="max-h-[calc(100svh-48px)] overflow-y-auto px-0"
                side={'bottom'}
              >
                <div className="container">
                  <SheetHeader>
                    <SheetTitle>Cultivating Experience</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </SheetDescription>
                  </SheetHeader>

                  <FormProject />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex flex-col gap-12">
            <CardProjectCultivation />
            <CardProjectCultivation />
            <CardProjectCultivation />
            <CardProjectCultivation />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CultivasionPage;
