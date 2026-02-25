import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div
        className="
        glass
        rounded-3xl
        p-10 md:p-14
        max-w-4xl
        w-full
      "
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div
              className="
              relative
              w-32
              h-32
              md:w-40
              md:h-40
              rounded-full
              overflow-hidden
              border border-white/20
              shadow-lg shadow-black/40
            "
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full -z-10" />
              <Image
                src="/pfp.jpg"
                alt="Pitambar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Pitambar Jadhav
            </h1>

            <p className="text-neutral-300 text-lg mb-6">
              Full Stack Engineer building scalable SaaS products with Next.js,
              TypeScript and PostgreSQL.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="
                  px-6 py-3 rounded-xl
                  bg-blue-500/20
                  border border-blue-400/30
                  hover:bg-blue-500/30
                  transition-all duration-300
                "
              >
                View Projects
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="
                  px-6 py-3 rounded-xl
                  bg-white/10
                  border border-white/20
                  hover:bg-white/20
                  transition-all duration-300
                "
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
