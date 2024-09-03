import { ArrowUpRight, Edit, Trash } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CardWorkCultivation = () => {
  return (
    <Link href={'#'}>
      <div className="group relative flex flex-col gap-6 hover:!opacity-100 group-hover/list:opacity-50 sm:flex-row">
        <div className="absolute -inset-4 z-0 rounded-xl bg-lime-400/10 opacity-0 backdrop-blur-md duration-200 group-hover:opacity-100"></div>

        <div className="z-10 flex flex-col gap-4">
          <div className="flex flex-row justify-between gap-4">
            <div className="flex flex-col gap-0">
              <div className="flex flex-row items-end gap-3 group-hover:items-start">
                <h4 className="font-medium text-start text-white group-hover:text-lime-400">
                  uild a Quiiiz App
                </h4>
                <ArrowUpRight className="h-4 w-4 text-slate-100 group-hover:scale-125 group-hover:stroke-2 group-hover:text-lime-400" />
              </div>
              <p className="text-start text-slate-400 group-hover:text-slate-100">
                Jun 2024 - Aug 2024
              </p>
            </div>
            <div className="group/action flex flex-row gap-4">
              <button className="group/item relative h-5 w-5 hover:!opacity-100 group-hover/action:opacity-50">
                <div className="absolute -inset-2 z-0 rounded-xl bg-red-400/10 opacity-0 backdrop-blur-md duration-200 group-hover/item:opacity-100"></div>

                <Trash className="absolute left-0 top-0 z-20 h-5 w-5 text-white group-hover/item:text-red-400" />
              </button>
              <button className="group/item relative h-5 w-5 hover:!opacity-100 group-hover/action:opacity-50">
                <div className="absolute -inset-2 z-0 rounded-xl bg-lime-400/10 opacity-0 backdrop-blur-md duration-200 group-hover/item:opacity-100"></div>

                <Edit className="absolute left-0 top-0 z-20 h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          <p className="text-start text-slate-400 group-hover:text-slate-100">
          &ldquo;Kesrepro App&rdquo; is an educational game about reproductive
            health for early teenagers (aged 10-15). Built by using Flutter,
            Redux, and Firebase, this app offers engaging quizzes to enhance
            their understanding of this topic.
          </p>

          <div className="flex w-full flex-wrap gap-2">
            <div className="w-fit rounded-full bg-lime-400/10 px-4 py-1 group-hover:bg-lime-400/20">
              <p className="text-slate-100 group-hover:text-lime-400">
                Next.Js
              </p>
            </div>

            <div className="w-fit rounded-full bg-lime-400/10 px-4 py-1 group-hover:bg-lime-400/20">
              <p className="text-slate-100 group-hover:text-lime-400">
                Nest.Js
              </p>
            </div>

            <div className="w-fit rounded-full bg-lime-400/10 px-4 py-1 group-hover:bg-lime-400/20">
              <p className="text-slate-100 group-hover:text-lime-400">
                Shadcn/UI
              </p>
            </div>

            <div className="w-fit rounded-full bg-lime-400/10 px-4 py-1 group-hover:bg-lime-400/20">
              <p className="text-slate-100 group-hover:text-lime-400">
                Tailwindcss
              </p>
            </div>

            <div className="w-fit rounded-full bg-lime-400/10 px-4 py-1 group-hover:bg-lime-400/20">
              <p className="text-slate-100 group-hover:text-lime-400">Redux</p>
            </div>

            <div className="w-fit rounded-full bg-lime-400/10 px-4 py-1 group-hover:bg-lime-400/20">
              <p className="text-slate-100 group-hover:text-lime-400">Redux</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardWorkCultivation;
