import { h, Fragment } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";
import { Tab } from "@headlessui/react";

export default function Project() {
  return (
    <section class="mx-auto box-border max-w-[1284px] px-4 font-inter md:px-0">
      <hr class="border-t-[3px] border-t-slate-200" />
      <div class="mt-12 flex h-10 items-center justify-between">
        <h2 class=" text-2xl font-semibold uppercase text-slate-700 md:text-[32px]">
          work
        </h2>
        <SegmentedControl />
      </div>
      <div class="mt-8 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-12">
        <Box
          title="mini app"
          src="/mini.webp"
          alt="miniapp"
          year="2021"
          lang2="Javascript"
        />
        <Box
          title="tesla clone"
          src="/"
          alt="teslaclone"
          year="2021"
          lang1="Typescript"
        />
        <Box
          title="Real Estate"
          src="/"
          alt="realestate"
          year="2022"
          lang1="Typescript"
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
};

const Box = ({ title, year, src, alt, lang1, lang2, lang3 }: BoxProps) => {
  return (
    <div class="group transform transition-all duration-300 hover:-translate-y-1">
      <div class=" relative box-border overflow-hidden rounded-lg border-2 border-slate-200/40 bg-white shadow-sm transition-all duration-300 group-hover:rounded-3xl">
        <div class="min-h-[180px] p-3 md:h-[360px] md:p-5">
          <img
            src={src}
            alt={alt}
            class="h-full w-full rounded-xl bg-slate-200 object-cover transition-all duration-300 group-hover:rounded-3xl"
          />
        </div>
        <div class="mx-3 flex justify-between pb-3 md:mx-5 md:pb-5">
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
                <a class="rounded-full bg-[#0A84FF] py-2 px-4 text-sm font-medium text-white">
                  {lang1}
                </a>
              </li>
            )}
            {lang2 && (
              <li>
                <a class="rounded-full bg-[#FDBC14] py-2 px-4 text-sm font-medium text-white">
                  {lang2}
                </a>
              </li>
            )}
            {lang3 && (
              <li>
                <a class="rounded-full bg-[#FFA53B] py-2 px-4 text-sm font-medium text-white">
                  {lang3}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
