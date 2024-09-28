'use client'

import { CustomLink } from "@/components/customLink";
import { useContext } from "react";
import { AppContext } from "./context-provider";
import ContextProvider from "./context-provider";

export default function Home() {
  const { name, description, components } = useContext(AppContext);
  return (
    <ContextProvider>
      <main className="mx-4 my-4">
        <CustomLink linkText="View Frames" href="/frames" />
        <section className="my-8">
          <div id="bikeDetails" className="my-4">
          <h1 className="text-5xl my-4">Your Bike</h1>
          <h2 className="ml-2">{name}</h2>
          <p className="ml-2">{description}</p>
          </div>
          <section id="frame" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <p>
            {components.frame
              ? components.frame.name
              : "Please choose a frame!"}
          </p>
          </section>
        </section>
      </main>
    </ContextProvider>
  );
}
