import {CustomLink} from "@/components/customLink";

export default async function Home() {
  return (
    <main className="max-w-2xl mx-auto my-4">
		<CustomLink linkText="View Frames" href="/frames"/>
    </main>
  );
}
