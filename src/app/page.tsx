import Header from "./Components/Header";
import Section from "./Components/Section";
import CircleImage from "./Components/CircleImage";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">

      <Header />

      <div className="font-sans flex flex-col items-center justify-center min-h-screen">

        {/* About Me */}
        <main className="flex-1 min-h-screen items-center sm:items-start text-black">
          <Section id="about" theme="light">
            <div className="flex flex-col items-center justify-center gap-25">

              {/*Profile Picture */}
              <div>
                <CircleImage src="/images/pfp_1.jpg" alt="Profile" size={512}/>
              </div>

              {/*Intro */}
              <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                Hello! I'm Adam Colyar.
              </h1>

            </div>
          </Section>
        </main>

        {/* Projects */}
        <main className="flex-1 min-h-screen items-center sm:items-start text-black">
          <Section id="projects" theme="dark">
            <div className="flex min-w-screen flex-col items-center justify-center">

              {/*Temporary Sample text */}
              <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                My Projects
              </h1>

            </div>
          </Section>
        </main>

        {/* Involvement */}
        <main className="flex-1 min-h-screen items-center sm:items-start text-black">
          <Section id="involvement" theme="light">
            <div className="flex min-w-screen flex-col items-center justify-center">

              {/*Temporary Sample text */}
              <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                Involvement
              </h1>
              
            </div>
          </Section>
        </main>

        {/* Extras */}
        <main className="flex-1 min-h-screen items-center sm:items-start text-black">
          <Section id="extras" theme="dark">
            <div className="flex min-w-screen flex-col items-center justify-center">

              {/*Temporary Sample text */}
              <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                Extras
              </h1>

            </div>
          </Section>
        </main>

        <footer className="">
        </footer>

      </div>

    </div>
  );
}
