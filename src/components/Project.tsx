import { h, Fragment } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";
import { Tab } from "@headlessui/react";

export default function Project() {
  return (
    <section class="mx-auto box-border max-w-[1284px] font-inter">
      <hr class="border-t-[3px] border-t-slate-200" />
      <div class="mt-12 flex h-10 items-center justify-between">
        <h2 class=" text-[32px] font-semibold uppercase text-slate-700">
          work
        </h2>
        <SegmentedControl />
      </div>
      <div class="mt-12 grid grid-cols-2 gap-12">
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </section>
  );
}

const SegmentedControl = () => {
  return (
    <div class="relative flex rounded bg-slate-200 font-medium uppercase  [&>*]:mx-1 [&>*]:my-1">
      <div class="flex-1 cursor-pointer rounded-sm bg-slate-50 px-2 text-slate-700">
        all
      </div>
      <div class="flex-1 cursor-pointer px-2 text-slate-500">js</div>
      <div class="flex-1 cursor-pointer px-2 text-slate-500">ts</div>
      <div class="flex-1 cursor-pointer px-2 text-slate-500">rs</div>
    </div>
  );
};

const Box = () => {
  return (
    <div class="group transform transition-all duration-300 hover:-translate-y-1">
      <div class=" relative box-border min-h-[455px] overflow-hidden rounded-lg border-2 border-slate-200/40 bg-white shadow-sm transition-all duration-300 group-hover:rounded-3xl ">
        <div class="h-[363px] p-5 ">
          <img
            src="/mini.webp"
            alt=""
            class="h-full w-full rounded-xl bg-slate-200 object-cover transition-all duration-300 group-hover:rounded-3xl"
          />
        </div>
        <div class="mx-5 flex justify-between">
          <div>
            <p class="text-[15px] font-semibold text-slate-400">2021</p>
            <h3 class="pt-2 font-sora text-2xl font-bold text-slate-700">
              Mini App
            </h3>
          </div>
          <ul class="flex space-x-3">
            <li>
              <a class="rounded-full bg-[#FDBC14] py-2 px-4 text-sm font-medium text-white">
                Javascript
              </a>
            </li>
            <li>
              <a class="rounded-full bg-[#FFA53B] py-2 px-4 text-sm font-medium text-white">
                Rust
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
