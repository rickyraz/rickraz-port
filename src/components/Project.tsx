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
          type="Frontend Project"
          ts="true"
          astro="true"
          link="https://mini-app-v2.vercel.app/"
          github="https://github.com/rickyraz/mini-app-v2"
        />
        <Box
          title="tesla clone"
          src="/tesla.webp"
          alt="teslaclone"
          type="Frontend Project"
          ts="true"
          react="true"
          link="https://tesla-clone-v2.vercel.app/"
          github="https://github.com/rickyraz/tesla-clone-v2"
        />
        <Box
          title="Real Estate v1"
          src="/real-v1.webp"
          alt="realestate"
          type="Frontend Project"
          js="true"
          next="true"
          link="https://rickyraz-real-estate-v1.vercel.app/"
          github="https://github.com/rickyraz/rick-realestate"
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
  type: string;
  src: string;
  alt: string;
  github?: string;
  ts?: string;
  js?: string;
  rs?: string;
  link?: string;
  astro?: string;
  react?: string;
  next?: string;
};

const Box = ({
  title,
  type,
  src,
  alt,
  github,
  ts,
  js,
  rs,
  link,
  astro,
  react,
  next,
}: BoxProps) => {
  return (
    <div class=" group transform transition-all duration-300">
      <a href={link} target="blank">
        <div class=" shadowtransition-all relative box-border overflow-hidden rounded-lg border-2 border-slate-200/40 bg-white duration-300 group-hover:rounded-3xl md:hover:shadow">
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
                {type}
              </p>
              <h3 class="pt-1 font-sora text-xl font-bold capitalize text-slate-700 md:pt-2 md:text-2xl">
                {title}
              </h3>
            </div>
            <div>
              <ul class="flex justify-end space-x-3">
                {ts && (
                  <li>
                    <a class="rounded-full bg-[#388eeb] py-[6px] px-3 text-[12px] font-medium text-white md:px-4 md:py-2">
                      Typescript
                    </a>
                  </li>
                )}
                {js && (
                  <li>
                    <a class="rounded-full bg-[#FDBC14] py-[6px] px-3 text-[12px] font-medium text-white md:px-4 md:py-2">
                      Javascript
                    </a>
                  </li>
                )}
                {rs && (
                  <li>
                    <a class="rounded-full bg-[#FFA53B] py-[6px] px-3 text-[12px] font-medium text-white md:px-4 md:py-2">
                      Rust
                    </a>
                  </li>
                )}
                {astro && (
                  <li>
                    <a
                      href="https://astro.build/"
                      target="_blank"
                      class="cursor-crosshair rounded-full bg-[#0f172a] py-[6px] px-3 text-[12px] font-medium text-white md:px-4 md:py-2"
                    >
                      Astro
                    </a>
                  </li>
                )}
                {react && (
                  <li>
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      class="cursor-crosshair rounded-full bg-[#58d4f6] py-[6px] px-3 text-[12px] font-medium text-white md:px-4 md:py-2"
                    >
                      ReactJS
                    </a>
                  </li>
                )}
                {next && (
                  <li>
                    <a
                      href="https://nextjs.org/"
                      target="_blank"
                      class="cursor-crosshair rounded-full bg-[#000000] py-[6px] px-3 text-[12px] font-medium text-white md:px-4 md:py-2"
                    >
                      NextJS
                    </a>
                  </li>
                )}
              </ul>
              <div class="ml-[166px] mt-3">
                <a href={github} target="blank" class="hover:cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="h-5 w-5 fill-slate-400 hover:fill-slate-700"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m8.564 23.5c-.089 0-.187-.008-.292-.028-4.973-1.617-8.272-6.109-8.272-11.193 0-6.495 5.383-11.779 12-11.779s12 5.284 12 11.779c0 5.091-3.312 9.577-8.24 11.162-.569.113-.893-.044-1.073-.193-.235-.194-.37-.493-.37-.819l.004-.624c.004-.579.011-1.456.011-2.465 0-1.114-.458-1.586-.598-1.704-.153-.129-.215-.337-.157-.528.059-.192.226-.33.425-.352 2.374-.257 4.801-1.061 4.801-5.067 0-1.036-.352-1.939-1.045-2.687-.132-.142-.17-.348-.097-.528.101-.25.379-1.116-.011-2.321-.356.028-1.172.202-2.511 1.096-.12.08-.271.104-.409.066-.864-.235-1.788-.357-2.747-.363-.954.005-1.877.127-2.74.363-.14.039-.288.017-.41-.065-1.341-.889-2.16-1.066-2.528-1.093-.422 1.309-.05 2.196-.003 2.299.084.184.048.401-.09.548-.696.746-1.049 1.649-1.049 2.686 0 4.008 2.423 4.815 4.793 5.077.198.022.364.159.423.35.059.19 0 .397-.152.527-.166.142-.458.487-.559 1.2-.024.171-.136.318-.294.388-.614.27-2.717.983-3.98-1.141-.004-.007-.088-.151-.246-.323.197.268.4.614.577 1.054.036.107.622 1.785 3.306 1.21.149-.032.301.006.417.1.117.094.186.236.187.387l.014 1.92c0 .325-.135.624-.371.819-.142.118-.373.242-.714.242zm3.436-22c-6.065 0-11 4.835-11 10.779 0 4.65 3.021 8.759 7.518 10.226.054.008.11-.01.121-.017l.005-.623-.005-.755c-3.092.374-3.848-1.931-3.856-1.956-.417-1.032-.994-1.333-1.019-1.346-.281-.183-.865-.574-.698-1.11.15-.484.765-.528 1.001-.526 1.437.098 2.162 1.364 2.192 1.417.701 1.177 1.77 1.066 2.471.82.062-.279.152-.538.269-.77-2.281-.406-4.836-1.62-4.836-5.951 0-1.192.374-2.246 1.112-3.134-.164-.537-.355-1.647.208-3.061.055-.14.171-.247.314-.292.194-.059 1.246-.284 3.4 1.093.883-.221 1.819-.335 2.785-.341.971.005 1.906.12 2.79.34 2.143-1.377 3.193-1.153 3.386-1.093.144.045.259.152.314.292.549 1.38.378 2.494.216 3.057.739.892 1.113 1.946 1.113 3.14 0 4.329-2.556 5.539-4.839 5.942.239.476.369 1.062.369 1.709 0 1.013-.006 1.892-.011 2.473l-.004.616c.017.054.078.069.197.044 4.454-1.435 7.487-5.538 7.487-10.194 0-5.944-4.935-10.779-11-10.779z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
