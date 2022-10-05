import { h, Fragment } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";

export default function Project() {
  return (
    <section class="mx-auto mb-8 box-border max-w-[1284px] px-4 font-inter md:mb-24 md:px-0">
      <hr class="border-t-[3px] border-t-slate-200" />
      <div class="mt-12 flex h-10 items-center justify-between">
        <h2 class=" text-2xl font-semibold uppercase text-slate-700 md:text-[32px]">
          work
        </h2>
        <SegmentedControl />
      </div>
      <div class="mt-8 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-12">
        <Box
          title="mini apps"
          src="/mini.webp"
          alt="miniapp"
          year="2021"
          lang2="Javascript"
          lang1="Typescript"
          link="https://mini-app-v2.vercel.app/"
        />
        <Box
          title="tesla clone"
          src="/tesla.webp"
          alt="teslaclone"
          year="2021"
          lang1="Typescript"
          link="https://tesla-clone-v2.vercel.app/ "
        />
        <Box
          title="Real Estate v1"
          src="/real-v1.webp"
          alt="realestate"
          year="2022"
          lang1="Typescript"
          link="https://rickyraz-real-estate-v1.vercel.app/"
        />
      </div>
    </section>
  );
}

const SegmentedControl = () => {
  return (
    <div class="relative flex rounded bg-slate-200 text-base font-medium uppercase [&>*]:mx-1 [&>*]:my-1">
      <div class="flex-1 cursor-pointer rounded-sm bg-slate-50 px-2 text-slate-700">
        all
      </div>
      <div class="flex-1 cursor-pointer px-2 text-slate-500">js</div>
      <div class="flex-1 cursor-pointer px-2 text-slate-500">ts</div>
      <div class="flex-1 cursor-pointer px-2 text-slate-500">rs</div>
    </div>
  );
};

type BoxProps = {
  title: string;
  year: string;
  src: string;
  alt: string;
  lang1?: string;
  lang2?: string;
  lang3?: string;
  link?: string;
};

const Box = ({
  title,
  year,
  src,
  alt,
  lang1,
  lang2,
  lang3,
  link,
}: BoxProps) => {
  return (
    <div class="group transform transition-all duration-300 md:hover:-translate-y-1">
      <a href={link} target="blank">
        <div class=" relative box-border overflow-hidden rounded-lg border-2 border-slate-200/40 bg-white shadow-sm transition-all duration-300 group-hover:rounded-3xl">
          <div class="min-h-[180px] p-3 md:h-[360px] md:p-5">
            <img
              src={src}
              alt={alt}
              class="h-full w-full rounded-xl bg-slate-200 object-cover transition-all duration-300 md:group-hover:rounded-3xl"
            />
          </div>
          <div class="mx-3 mt-3 flex justify-between pb-3 md:mx-5 md:pb-5">
            <div>
              <p class="text-sm font-semibold text-slate-400 md:text-[15px]">
                {year}
              </p>
              <h3 class="pt-1 font-sora text-xl font-bold capitalize text-slate-700 md:pt-2 md:text-2xl">
                {title}
              </h3>
            </div>
            <ul class="flex space-x-3">
              {lang1 && (
                <li>
                  <a class="rounded-full bg-[#0A84FF] py-[6px] px-3 text-[12px] font-medium text-white md:px-4 md:py-2">
                    {lang1}
                  </a>
                </li>
              )}
              {lang2 && (
                <li>
                  <a class="rounded-full bg-[#FDBC14] py-[6px] px-3 text-[12px] font-medium text-white md:px-4 md:py-2">
                    {lang2}
                  </a>
                </li>
              )}
              {lang3 && (
                <li>
                  <a class="rounded-full bg-[#FFA53B] py-[6px] px-3 text-[12px] font-medium text-white md:px-4 md:py-2">
                    {lang3}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};
