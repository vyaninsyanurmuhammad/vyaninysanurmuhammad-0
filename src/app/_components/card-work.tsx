import { cn } from '@/lib/utils';
import { ArrowUpRight, Dot } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CardWork = ({
  title,
  work,
  description,
  href,
  isLast,
  tools,
}: {
  title?: string;
  work?: string;
  description?: string;
  href: string;
  isLast: boolean;
  tools?: string[];
}) => {
  return (
    <div className="grid grid-cols-8 gap-x-6">
      <div className="relative flex flex-col items-center">
        <div className="absolute z-10 h-5 w-5 shrink-0 rounded-full bg-lime-500 opacity-100 backdrop-blur-md"></div>
        <div className="h-full w-1 bg-lime-800 opacity-100 backdrop-blur-md"></div>
      </div>
      <button
        className={cn(
          'group relative col-span-7 flex flex-col gap-4',
          isLast ? 'mb-0' : 'mb-8',
        )}
      >
        <div className="absolute -inset-4 z-0 rounded-xl bg-lime-400/10 opacity-0 backdrop-blur-md duration-200 group-hover:opacity-100"></div>

        <div className="z-10 flex flex-col gap-4">
          <div className="flex flex-col gap-0">
            <div className="flex flex-row items-end gap-3 group-hover:items-start">
              <h4 className="font-medium text-start text-white group-hover:text-lime-400">
                {title ?? '-'}
              </h4>

              <ArrowUpRight className="h-4 w-4 text-slate-100 group-hover:scale-125 group-hover:stroke-2 group-hover:text-lime-400" />
            </div>
            <div className="flex flex-row items-center gap-1">
              <p className="text-400 text-start font-medium text-slate-400 group-hover:text-slate-100">
                {work ?? '-'}
              </p>
              <Dot className="h-5 w-5 text-slate-400" />
              <p className="text-start text-slate-400 group-hover:text-slate-100">
                Jun 2024 - Aug 2024
              </p>
            </div>
          </div>
          <p className="text-start text-slate-400 group-hover:text-slate-100">
            {description ?? '-'}
          </p>
          <div className="flex w-full flex-wrap gap-2">
            {tools &&
              tools.map((data, index) => (
                <div
                  key={index}
                  className="w-fit rounded-full bg-lime-400/10 px-4 py-1 group-hover:bg-lime-400/20"
                >
                  <p className="text-slate-100 group-hover:text-lime-400">
                    {data}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </button>
    </div>
  );
};

export default CardWork;
