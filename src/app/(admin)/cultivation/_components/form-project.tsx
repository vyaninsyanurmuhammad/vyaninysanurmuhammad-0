import Tiptap from '@/components/tiptap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Plus, Trash, X } from 'lucide-react';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

const FormProject = () => {
  const [tools, setTools] = useState<string[]>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [tool, setTool] = useState<string>('');
  const [link, setLink] = useState<string>('');

  const handleChangeTool = (event: ChangeEvent<HTMLInputElement>) => {
    setTool(event.target.value); // Perbarui nilai input pada perubahan
  };

  const onAddTool = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setTools((prev) => [...prev, tool]);
      setTool('');
    }
  };

  const onRemoveTool = (tooled: string) => {
    setTools((prev) => prev.filter((data) => data !== tooled));
  };

  const handleChangeLink = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value); // Perbarui nilai input pada perubahan
  };

  const onAddLink = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setLinks((prev) => [...prev, link]);
      setLink('');
    }
  };

  const onRemoveLink = (tooled: string) => {
    setLinks((prev) => prev.filter((data) => data !== tooled));
  };

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

              <div className="flex w-full flex-col items-end gap-4">
                <div className="flex w-full flex-col items-end gap-1">
                  <div className="flex w-full flex-col gap-1 sm:flex-row sm:gap-4">
                    <Label
                      htmlFor="title"
                      className="w-16 shrink-0 text-left sm:text-right"
                    >
                      Link
                    </Label>
                    <Input
                      id="title"
                      className="w-full"
                      value={link}
                      onChange={handleChangeLink}
                      onKeyDown={onAddLink}
                    />
                  </div>
                  <p className="text-end text-sm text-slate-500">
                    Press enter to add tool
                  </p>
                </div>

                <div className="flex w-full flex-row gap-4">
                  <div className="hidden w-16 shrink-0 sm:block"></div>
                  <div className="flex w-full flex-col items-center justify-center rounded-md border border-input p-6">
                    {links.length < 1 ? (
                      <p className="text-sm text-slate-600">No Link Added</p>
                    ) : (
                      links.map((data, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex w-full items-center justify-between gap-4 rounded-full bg-lime-400 px-4 py-1 pr-2 group-hover:bg-lime-400/20"
                        >
                          <p className="w-full overflow-hidden truncate text-sm font-medium">
                            {data}
                          </p>

                          <button
                            className="group/item relative h-4 w-4 hover:!opacity-100 group-hover/action:opacity-50"
                            onClick={() => onRemoveLink(data)}
                          >
                            <div className="absolute -inset-2 z-0 rounded-full bg-red-400/10 opacity-0 backdrop-blur-md duration-200 group-hover/item:opacity-100"></div>

                            <X className="absolute left-0 top-0 z-20 h-4 w-4 text-white group-hover/item:text-red-400" />
                          </button>
                        </motion.div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tiptap />

          <div className="flex flex-col gap-4">
            <Label htmlFor="tool" className="w-fit text-left">
              Tools (optional)
            </Label>
            <div className="flex w-full items-center justify-center rounded-md border border-input p-6">
              <div className="flex w-full flex-wrap gap-2">
                {tools.length < 1 ? (
                  <p className="text-sm text-slate-600">No Tool Added</p>
                ) : (
                  tools.map((data, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex w-fit items-center gap-4 rounded-full bg-lime-400 px-4 py-1 pr-2 group-hover:bg-lime-400/20"
                    >
                      <p className="text-sm font-medium">{data}</p>

                      <button
                        className="group/item relative h-4 w-4 hover:!opacity-100 group-hover/action:opacity-50"
                        onClick={() => onRemoveTool(data)}
                      >
                        <div className="absolute -inset-2 z-0 rounded-full bg-red-400/10 opacity-0 backdrop-blur-md duration-200 group-hover/item:opacity-100"></div>

                        <X className="absolute left-0 top-0 z-20 h-4 w-4 text-white group-hover/item:text-red-400" />
                      </button>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Input
              id="tool"
              value={tool}
              onChange={handleChangeTool}
              onKeyDown={onAddTool}
            />
            <p className="text-end text-sm text-slate-500">
              Press enter to add tool
            </p>
          </div>
        </div>
      </div>

      <Button className="w-full" type="submit">
        Save changes
      </Button>
    </>
  );
};

export default FormProject;
