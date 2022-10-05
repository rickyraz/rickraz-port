import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import dayjs from "dayjs";

export default function Hero() {
  return (
    <div class="mx-auto flex min-h-screen max-w-[1284px] flex-col">
      <Header />
      <Main title="Rickraz" />
    </div>
  );
}

const Header = () => {
  const date = dayjs().format("DD/MM");
  const day = dayjs().format("dddd");
  const year = dayjs().year();
  return (
    <header class="pointer-events-none mt-5 flex min-h-[10vh] items-center justify-between px-4 font-inter font-semibold text-slate-700 md:px-0">
      <button class="rounded border bg-slate-100 py-1 px-4 shadow-sm">
        {date}
      </button>
      <button class="rounded border bg-slate-100 py-1 px-4 shadow-sm">
        {day}
      </button>
      <button class="rounded border bg-slate-100 py-1 px-4 shadow-sm">
        {year}
      </button>
    </header>
  );
};

const Main = ({ title }) => {
  return (
    <section class="mt-auto mb-10 flex flex-col space-y-2 text-center md:mt-auto md:mb-16 md:text-left">
      <h1 class="font-sora text-3xl font-bold uppercase text-slate-800 md:text-5xl">
        {title}
      </h1>
      <p class="font-inter text-3xl font-normal uppercase text-slate-400 md:text-4xl">
        software Engineer
      </p>
    </section>
  );
};
