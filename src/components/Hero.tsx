import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import dayjs from "dayjs";

export default function Hero() {
  return (
    <div class="max-w-[1440px] mx-auto flex flex-col">
      <Header />
      <Main title="Software Engineer" />
    </div>
  );
}

const Header = () => {
  const date = dayjs().format("DD/MM");
  const day = dayjs().format("dddd");
  const year = dayjs().year();
  return (
    <header class="flex mt-5 justify-between items-center text-black pointer-events-none font-inter text-lg font-semibold">
      <button class="py-1 px-4 rounded bg-gray-100 shadow-sm">{date}</button>
      <button class="py-1 px-4 rounded bg-gray-100 shadow-sm">{day}</button>
      <button class="py-1 px-4 rounded bg-gray-100 shadow-sm">{year}</button>
    </header>
  );
};

const Main = ({ title }) => {
  return (
    <div>
      <h1 class="font-sora ">{title}</h1>
      <h2>CLP, Indoneia</h2>
    </div>
  );
};
