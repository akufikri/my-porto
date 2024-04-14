import { Hero } from "@/app/(home)/components/Hero";
import Image from "next/image";
import { Hi } from "./components/Hi";
import { Stack } from "./components/Stack";
import { About } from "./components/About";
import { ShowCase } from "./components/Showcase";
import { Helpers } from "./components/Helpers";

export default function Home() {
  return (
    <>
      <Hero />
      <Hi />
      <Stack />
      <About />
      <ShowCase />
      <Helpers />
    </>
  );
}
