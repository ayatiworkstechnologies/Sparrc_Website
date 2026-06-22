import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="relative h-[520px] overflow-hidden md:h-[620px]">
        <Image
          src="/images/banner.png"
          alt="SPARRC Banner"
          fill
          priority
          className="object-cover object-center"
        />
      </section>
     
    </main>
  );
}