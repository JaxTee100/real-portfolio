import Image from "next/image";


export default function Home() {
  return (
    <div className=" p-2 lg:p4 ">
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-850 flex flex-col lg:flex-row items-center justify-around w-full h-screen p-10 text-white">
        <div className="text-center lg:text-left mb-10 lg:mb-0 space-y-4 animate-fadeInLeft">
        <h1 className="text-4xl font-bold">
          <Typewriter
            options={{
              strings: ["I'm Tobias", "I love to code"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h1>
          <p className="text-lg">I am a Full-Stack Developer</p>
        </div>
      <div className="relative flex items-center justify-center h-[300px] w-[300px] rounded-full overflow-hidden border shadow-lg animate-fadeInRight">
        <Image src="/toby.png" alt="Tobias's image" fill className="object-cover" />
      </div>
    </section>
      <section>
        About me
      </section>
      <section>
        Skills
      </section>
      <section>
        Featured Projects
      </section>
      <section>
        Contact me
      </section>
    </div>
  );
}
