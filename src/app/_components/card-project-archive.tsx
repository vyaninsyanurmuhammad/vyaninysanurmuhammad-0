import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const CardProjectArchive = ({
  title,
  description,
  index,
  href,
  image,
  tools,
}: {
  title?: string;
  description?: string;
  index?: number;
  href: string[];
  image: string;
  tools?: string[];
}) => {
  const [isLinkDialogOpen, setLinkDialogOpen] = useState<boolean>(false);

  const onHandleLinkDiaologOpen = (open: boolean) => setLinkDialogOpen(open);

  const onLinkClick = () => {
    if (href.length < 2) {
      window.open(href[0], '_blank');
    } else {
      onHandleLinkDiaologOpen(true);
    }
  };

  return (
    <>
      <button onClick={() => onLinkClick()}>
        <div className="group relative flex flex-col items-start gap-6 hover:!opacity-100 group-hover/list:opacity-50 sm:flex-row">
          <div className="absolute -inset-4 z-0 rounded-xl bg-lime-400/10 opacity-0 backdrop-blur-md duration-200 group-hover:opacity-100"></div>
          <div className="relative z-10 h-40 w-full shrink-0 overflow-hidden rounded-lg bg-lime-400 sm:h-40 sm:w-40">
            <Image
              className="object-cover object-center"
              src={image}
              fill
              alt={`project-${index}`}
            />
          </div>
          <div className="z-10 flex flex-col items-start gap-4">
            <div className="flex flex-row items-end gap-3 group-hover:items-start">
              <h4 className="font-medium text-white group-hover:text-lime-400">
                {title ?? '-'}
              </h4>
              <ArrowUpRight className="h-4 w-4 text-slate-100 group-hover:scale-125 group-hover:stroke-2 group-hover:text-lime-400" />
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
        </div>
      </button>

      <Dialog open={isLinkDialogOpen} onOpenChange={onHandleLinkDiaologOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Links</DialogTitle>
            <DialogDescription></DialogDescription>

            {href.map((data, index) => (
              <Link key={index} href={data} className="text-lime-600 underline">
                {data}
              </Link>
            ))}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardProjectArchive;
