'use client';

import ScrollSmoothLayout from '@/components/layouts/scroll-smooth-layout';
import { LinkPreview } from '@/components/ui/link-preview';
import useFollowPointerHook from '@/hooks/useFollowPointerHook';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
} from 'react-icons/si';
import CardProjectArchive from './_components/card-project-archive';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';
import JobExperienceIllustration from 'job-experience.svg';
import CardWork from './_components/card-work';

export default function Home() {
  const ref = useRef(null);
  const container = useRef(null);
  const aboutRef = useRef<HTMLParagraphElement>(null);
  const projectsRef = useRef(null);
  const jobsRef = useRef(null);

  const [isActive, setIsActive] = useState<
    'about' | 'work' | 'project' | false
  >('about');

  const { x, y } = useFollowPointerHook(ref);

  useGSAP(
    () => {
      const aboutElement = aboutRef.current;
      const projectsElement = projectsRef.current;
      const jobsElement = jobsRef.current;

      if (aboutElement && jobsElement && projectsElement) {
        // Hide the text initially
        // gsap.set(textElement, { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: aboutElement,
          // pin: true,
          start: '-97 top',
          end: 'bottom +=400',
          markers: false,
          onEnter: () => {
            setIsActive('about');
            // gsap.to(textElement, { opacity: 1, duration: 1 });
          }, // Menampilkan teks
          onEnterBack: () => {
            setIsActive('about');
            // gsap.to(textElement, { opacity: 1, duration: 1 });
          }, // Menampilkan teks
          onLeave: () => {
            setIsActive(false);

            // gsap.to(textElement, { opacity: 0, duration: 1 });
          }, // Sembunyikan saat kembali ke atas
          onLeaveBack: () => {
            setIsActive(false);

            // gsap.to(textElement, { opacity: 0, duration: 1 });
          }, // Sembunyikan saat kembali ke atas
        });

        ScrollTrigger.create({
          trigger: jobsElement,
          // pin: true,
          start: 'top +=400',
          end: 'bottom +=400',
          markers: false,
          onEnter: () => {
            setIsActive('work');
            // gsap.to(textElement, { opacity: 1, duration: 1 });
          }, // Menampilkan teks
          onEnterBack: () => {
            setIsActive('work');
            // gsap.to(textElement, { opacity: 1, duration: 1 });
          }, // Menampilkan teks
          onLeave: () => {
            setIsActive(false);

            // gsap.to(textElement, { opacity: 0, duration: 1 });
          }, // Sembunyikan saat kembali ke atas
          onLeaveBack: () => {
            setIsActive(false);

            // gsap.to(textElement, { opacity: 0, duration: 1 });
          }, // Sembunyikan saat kembali ke atas
        });

        ScrollTrigger.create({
          trigger: projectsElement,
          // pin: true,
          start: 'top +=400',
          end: 'bottom',
          markers: false,
          onEnter: () => {
            setIsActive('project');
            // gsap.to(textElement, { opacity: 1, duration: 1 });
          }, // Menampilkan teks
          onEnterBack: () => {
            setIsActive('project');
            // gsap.to(textElement, { opacity: 1, duration: 1 });
          }, // Menampilkan teks
          onLeave: () => {
            // setIsAbout(false);
            setIsActive(false);
            // gsap.to(textElement, { opacity: 0, duration: 1 });
          }, // Sembunyikan saat kembali ke atas
          onLeaveBack: () => {
            // setIsAbout(false);
            setIsActive(false);
            // gsap.to(textElement, { opacity: 0, duration: 1 });
          }, // Sembunyikan saat kembali ke atas
        });
      }
    },
    {
      scope: container,
    },
  );

  const navigations = [
    {
      title: 'About Me',
      href: '#about',
    },
    {
      title: 'Work Experience',
      href: '#work',
    },
    {
      title: 'Project Experience',
      href: '#project',
    },
  ];

  const works = [
    {
      title: 'Intern Front End Web Developer',
      work: 'Anti Gravity',
      description:
        'During my internship as a Front End Web Developer at Anti Gravity from June to August 2024, I was tasked with developing dynamic and responsive websites from scratch based on UI/UX designs. Using Next.js, Tailwind CSS, and Shadcn/UI, I successfully built user-friendly websites tailored to client needs. To further optimize performance, I integrated advanced analytics tools, improving website performance and user tracking. Additionally, I conducted thorough evaluations of both UI and functional elements, ensuring an optimal user experience and flawless functionality throughout the development process.',
      href: 'https://antigravity.id/',
      tools: ['Next.js', 'Shadcn/UI', 'Tailwind CSS', 'Analytics APIs'],
    },
    {
      title: 'Fullstack Mobile Developer',
      work: 'UMKM Utami Wedding Organizer',
      description:
        'As a Fullstack Mobile Developer at UMKM Utami Wedding Organizer from March to June 2023, I was responsible for developing dynamic and responsive mobile applications using Flutter, Redux, and Firebase. I successfully created mobile apps tailored to business needs, ensuring seamless user interaction. Additionally, I performed comprehensive evaluations of both the UI and app functionalities, optimizing the overall user experience and ensuring peak performance throughout the development lifecycle.',
      href: 'https://www.instagram.com/viranika_viranika/',
      tools: ['Flutter', 'Redux', 'Firebase'],
    },
    {
      title: 'Assistant Lecturer of Serious Game',
      work: 'Muhammadiyah University of Yogyakarta',
      description:
        'As an Assistant Lecturer for the Serious Game course at Muhammadiyah University of Yogyakarta from September 2022 to February 2023, I assisted in planning and delivering course materials, challenges, and tasks to enhance the learning experience for students. I facilitated interactive discussions and activities to create an engaging and enjoyable classroom environment. Additionally, I evaluated the effectiveness of the learning activities, ensuring students gained valuable insights and skills throughout the course.',
      href: 'https://www.umy.ac.id/',
    },
    {
      title: 'Fullstack Web Developer',
      work: 'PT. Blantika Alam Perkasa',
      description:
        "During my freelance as a Fullstack Web Developer at PT. Blantika Alam Perkasa from January to March 2022, I was responsible for developing dynamic and responsive websites based on UI/UX designs. I utilized Laravel, Tailwind, and MySQL to bring these designs to life, ensuring a high-quality, user-friendly product. To guarantee optimal performance and user experience, I conducted comprehensive evaluations of the website's UI and functionalities. Additionally, I successfully deployed the website to Hostinger, ensuring it was reliably accessible and performed consistently well.",
      href: 'https://www.linkedin.com/in/cassava-indonesia-5b323622a/?originalSubdomain=id',
      tools: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL', 'Hostinger'],
    },
    {
      title: 'Fullstack Web Developer',
      work: 'CV. Creative Gama Studio',
      description:
        'At CV. Creative Gama Studio, where I worked as a Fullstack Web Developer from November to December 2021, I was responsible for maintaining a rental property website. In this role, I utilized HTML, CSS, JavaScript, and PHP to address various maintenance needs, ensuring the site remained functional and up-to-date. To enhance the site’s efficiency and responsiveness, I conducted thorough evaluations of the UI and functionalities. The successful deployment of the maintained website to Cpanel further ensured its smooth and reliable operations for users.',
      href: 'https://creativegamastudio.com/',
      tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Cpanel'],
    },
  ];

  const projects = [
    {
      image: '/thumbnails/quiiiz.jpg',
      title: 'Build a Quiiiz App',
      description:
        'I completed Quiiiz, a web quiz app built with Next.js, NestJS, TailwindCSS, Supabase, and Gemini API. Inspired by Elliott Chong, it lets users create or choose quiz topics with AI, answer questions, and view results. This project sharpened my full-stack skills, and the source code is available on GitHub!',
      href: [
        'https://github.com/vyaninsyanurmuhammad/quiiiz-next',
        'https://github.com/vyaninsyanurmuhammad/quiiiz-nest',
      ],
      tools: [
        'Next.js',
        'NestJS',
        'Tailwind CSS',
        'Shadcn/UI',
        'Supabase',
        'Redux',
        'Gemini API',
        'PostgreSQL',
      ],
    },
    {
      image: '/thumbnails/livebold.png',
      title: 'Build a LiveBold Web',
      description:
        '"LA - Live bold" is a gamification website for personality tests. Built by using NextJs, this application offers engaging quizzes to increase sales of LA Bold brand products',
      href: ['https://www.livebold.id/'],
      tools: ['Next.js', 'Shadcn/UI', 'Tailwind CSS', 'Analytics APIs'],
    },
    {
      image: '/thumbnails/staycation.jpg',
      title: 'Build a StayCation Web',
      description:
        'StayCation Web App is an e-commerce application which is a web-based application used to help its users compare accommodation prices based on date. Built by using NextJs, Redux, Auth.Js, Shadcn/UI, ExpressJs, Nodemailer, Node-corn, Prisma and MySQL.',
      href: ['https://jcwdol130204.purwadhikabootcamp.com/'],
      tools: [
        'Turborepo',
        'NextJS',
        'Tailwind CSS',
        'Shadcn/UI',
        'ExpressJS',
        'Prisma',
        'MySQL',
      ],
    },
    {
      image: '/thumbnails/kesrep.jpg',
      title: 'Build a Kesrepro App',
      description:
        '"Kesrepro App" is an educational game about reproductive health for early teenagers (aged 10-15). Built by using Flutter, Redux, and Firebase, this app offers engaging quizzes to enhance their understanding of this topic.',
      href: ['https://github.com/vyaninsyanurmuhammad/KesRep.git'],
      tools: ['Flutter', 'Redux', 'Firebase'],
    },
  ];

  const contacts = [
    {
      icon: <SiGithub className="h-8 w-8" />,
      href: 'https://github.com/vyaninsyanurmuhammad',
    },
    {
      icon: <SiLinkedin className="h-8 w-8" />,
      href: 'https://www.linkedin.com/in/vyaninsyanurmuhammad/',
    },
    {
      icon: <SiInstagram className="h-8 w-8" />,
      href: 'https://www.instagram.com/vyaninsyanurmuhammad/',
    },
    {
      icon: <SiX className="h-8 w-8" />,
      href: 'https://x.com/NurVyan',
    },
    {
      icon: <SiDiscord className="h-8 w-8" />,
      href: 'https://discordapp.com/users/pororo8058',
    },
  ];

  return (
    <main className="w-svh relative min-h-svh bg-[#0E1200]">
      <div
        ref={ref}
        className="pointer-events-none fixed inset-0 -z-0 hidden text-white md:block lg:absolute"
        style={{
          backgroundImage: `radial-gradient(600px at ${x}px ${y}px, rgba(192, 255, 0, 0.15), transparent 80%)`,
        }}
      ></div>

      <div className="container flex min-h-svh flex-col gap-20 md:grid md:grid-cols-2">
        <div className="top-0 z-0 flex max-h-svh min-h-svh flex-col items-start justify-between py-16 md:sticky md:py-24">
          <div className="h-full w-full md:hidden">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-bold text-slate-100">
                  Hello, I&apos;m Vyan
                </h1>
                <span className="text-xl font-medium text-slate-100">
                  A Software Developer from Pati, Indonesia.
                </span>
              </div>
              <p className="text-xl text-slate-400">
                I Craft digital masterpieces: pixel-perfect, captivating, and
                seamlessly accessible.
              </p>
            </div>
          </div>
          <div className="hidden h-full w-full md:block">
            <AnimatePresence>
              {isActive === 'about' && (
                <motion.div
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold text-slate-100">
                      Hello, I&apos;m Vyan
                    </h1>
                    <span className="text-xl font-medium text-slate-100">
                      A Software Developer from Pati, Indonesia.
                    </span>
                  </div>
                  <p className="text-xl text-slate-400">
                    I Craft digital masterpieces: pixel-perfect,
                    <br /> captivating, and seamlessly accessible.
                  </p>
                </motion.div>
              )}
              {isActive === 'work' && (
                <motion.div
                  className="relative flex h-fit w-full flex-col gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={'job-experience.svg'}
                      fill
                      sizes="100%"
                      className="!w-[80%]"
                      style={{ filter: 'invert(100%)' }}
                      alt="job-experience"
                    />
                  </div>

                  <p className="text-xl text-slate-400">
                    “Design is not just what it looks like and feels like.
                    <br />
                    Design is how it works” -{' '}
                    <span className="text-xl text-lime-400">Steve Jobs</span>
                  </p>
                </motion.div>
              )}
              {isActive === 'project' && (
                <motion.p
                  className="relative z-10 text-start text-6xl font-semibold uppercase leading-[0.8] text-white xl:text-6xl 2xl:text-7xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Making
                  <br />
                  <span className="text-lime-500">
                    Good
                    <br />
                    Shit
                  </span>
                  <br />
                  Since
                  <br />
                  2021
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-8">
            <div className="group/list flex flex-col gap-1">
              {navigations.map((data, index) => (
                <Link
                  key={index}
                  className={cn(
                    'group flex items-center gap-2 hover:!opacity-100 group-hover/list:opacity-50',
                    isActive === data.href.replace('#', '') && 'active',
                  )}
                  href={data.href}
                >
                  <AnimatePresence>
                    {isActive === data.href.replace('#', '') && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '48px', animation: 'ease-in-out' }}
                        transition={{
                          ease: 'easeInOut',
                        }}
                        exit={{ width: 0 }}
                        className="h-0.5 bg-lime-400"
                      ></motion.div>
                    )}
                  </AnimatePresence>
                  <p className="text-sm uppercase text-slate-100 group-[.active]:text-lime-400">
                    {data.title}
                  </p>
                </Link>
              ))}
            </div>
            <div className="group/list flex items-center gap-4 text-slate-100">
              {contacts.map((data, index) => (
                <motion.div
                  key={index}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.15,
                  }}
                  className="group relative h-8 w-8 hover:!opacity-100 group-hover/list:opacity-50"
                >
                  <div className="absolute -inset-2 z-0 rounded-xl bg-lime-400/10 opacity-0 backdrop-blur-md duration-200 group-hover:opacity-100"></div>

                  <Link
                    href={data.href}
                    target="_blank"
                    className="absolute z-10"
                  >
                    {data.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-full w-full pb-24 pt-0 md:pt-24">
          <div className="flex flex-col gap-16 md:gap-20">
            <section
              id="about"
              ref={aboutRef}
              className="flex scroll-mt-24 flex-col gap-4"
            >
              <p className="text-slate-400">
                My journey into the world of programming began in 2018 at{' '}
                <LinkPreview
                  url="https://www.umy.ac.id/"
                  className="text-lime-400"
                >
                  Muhammadiyah University of Yogyakarta
                </LinkPreview>
                , where I developed skills in programming, algorithms, and
                software development. After graduating in 2023, I advanced my
                knowledge in fullstack web development at{' '}
                <LinkPreview
                  url="https://purwadhika.com/"
                  className="text-lime-400"
                >
                  Purwadhika School
                </LinkPreview>{' '}
                . These experiences fueled my passion for Crafting digital
                masterpieces: pixel-perfect, captivating, and seamlessly
                accessible.
              </p>
              <p className="text-slate-400">
                In my work, I focus on creating digital experiences that are not
                only visually stunning but also functionally robust and
                user-friendly. This involves meticulous attention to detail in
                both design and coding to ensure that every project meets high
                standards of quality and performance. My approach blends
                creativity with technical precision, resulting in interfaces
                that engage users while providing a seamless interaction.
              </p>
              <p className="text-slate-400">
                Now, with expertise in{' '}
                <LinkPreview url="https://react.dev/" className="text-lime-400">
                  React.js
                </LinkPreview>
                ,{' '}
                <LinkPreview
                  url="https://nextjs.org/"
                  className="text-lime-400"
                >
                  Next.js
                </LinkPreview>
                ,{' '}
                <LinkPreview
                  url="https://docs.nestjs.com/"
                  className="text-lime-400"
                >
                  Nest.js
                </LinkPreview>
                ,{' '}
                <LinkPreview
                  url="https://expressjs.com/"
                  className="text-lime-400"
                >
                  Express.js
                </LinkPreview>
                ,{' '}
                <LinkPreview
                  url="https://laravel.com/"
                  className="text-lime-400"
                >
                  Laravel
                </LinkPreview>
                ,{' '}
                <LinkPreview
                  url="https://flutter.dev/"
                  className="text-lime-400"
                >
                  Flutter
                </LinkPreview>
                ,{' '}
                <LinkPreview
                  url="https://firebase.google.com/?hl=id"
                  className="text-lime-400"
                >
                  Firebase
                </LinkPreview>
                , and{' '}
                <LinkPreview
                  url="https://www.mysql.com/"
                  className="text-lime-400"
                >
                  MySQL
                </LinkPreview>{' '}
                I am ready to apply my knowledge in real-world scenarios,
                continuously learning and innovating to succeed in the
                ever-evolving world of technology.
              </p>
            </section>
            <section
              id="work"
              ref={jobsRef}
              className="flex scroll-mt-24 flex-col gap-8"
            >
              <p className="after: relative w-fit text-lg font-semibold uppercase text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-[calc(100%+24px)] after:bg-lime-400">
                Work Experience
              </p>
              <ul className="group/list flex flex-col gap-0">
                {works.map(
                  ({ title, work, description, href, tools }, index) => {
                    const isLast = index === works.length - 1;

                    return (
                      <li
                        key={index}
                        className="flex flex-row hover:!opacity-100 group-hover/list:opacity-50"
                      >
                        <CardWork
                          title={title}
                          work={work}
                          description={description}
                          href={href}
                          isLast={isLast}
                          tools={tools}
                        />
                      </li>
                    );
                  },
                )}
              </ul>
            </section>
            <section id="project" className="flex scroll-mt-24 flex-col gap-8">
              <p className="after: relative w-fit text-lg font-semibold uppercase text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-[calc(100%+24px)] after:bg-lime-400">
                Project Experience
              </p>
              <ul ref={projectsRef} className="group/list flex flex-col gap-8">
                {projects.map(
                  ({ title, description, href, tools, image }, index) => (
                    <li key={`${title}-${index}`} className="h-fit w-full">
                      <CardProjectArchive
                        index={index}
                        title={title}
                        description={description}
                        href={href}
                        image={image}
                        tools={tools}
                      />
                    </li>
                  ),
                )}
              </ul>
              <Link
                href="https://drive.google.com/file/d/1NOJuOIT1GKf-6KpeL0UhIUcPA_qgaODt/view?usp=sharing"
                className="group flex flex-row items-center justify-start gap-2 text-slate-100 hover:text-lime-400"
              >
                <span>See My ATS Resume</span>
                <ArrowRight className="h-4 w-4 text-slate-100 group-hover:scale-125 group-hover:stroke-2 group-hover:text-lime-400" />
              </Link>
            </section>

            <div className="grid grid-cols-6 gap-2 opacity-50">
              <div className="relative h-full w-auto">
                <Image
                  src={'/brand-white.svg'}
                  fill
                  sizes="100%"
                  alt="brand-white"
                />
              </div>
              <p className="col-span-5 text-sm text-white">
                Developed by vyaninsyanurmuhammad in Visual Studio Code. Built
                with Next.js and Tailwind CSS, deployed with Vercel. All text is
                set in the Inter typeface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
