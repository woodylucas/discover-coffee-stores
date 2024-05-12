import Image from "next/image";
import Banner from "./components/banner.client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <Banner />
    </main>
  );
}
