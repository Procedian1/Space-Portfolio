import Header from "./Components/Header";
import Section from "./Components/Section";
import CircleImage from "./Components/CircleImage";
import ScrollPersist from './Components/ScrollPersist';

export default function Home() {
  return (
    <div className="app">
      <ScrollPersist /> 
      <Header />

      <div className="stack">

        {/* About Me */}
        <main className="main">
          <Section id="about" theme="light">
            <div className="stack gap-10">

              {/*Profile Picture */}
              <CircleImage src="./images/pfp_1.jpg" alt="Profile Picture" size={512}/>

              {/*Intro */}
              <h1 className="heading-xl">
                Hello, I&apos;m{" "}
                <span className="text-underline">Adam Colyar</span>!
                <br></br>
                Here you can see my latest works.
              </h1>

            </div>
          </Section>
        </main>

        {/* Projects */}
        <main className="main min-screen">
          {/*<ProjectsSection></ProjectsSection>*/}
          <Section id="projects" theme="dark">
            <div className="stack full-width">

              {/*Temporary Sample text */}
              <h1 className="heading-xl">
                Projects
              </h1>
              
            </div>
          </Section>
        </main>

        {/* Involvement */}
        <main className="main min-screen">
          <Section id="involvement" theme="light">
            <div className="stack full-width">

              {/*Temporary Sample text */}
              <h1 className="heading-xl">
                Involvement
              </h1>
              
            </div>
          </Section>
        </main>

        {/* Extras */}
        <main className="main min-screen">
          <Section id="extras" theme="dark">
            <div className="stack full-width">

              {/*Temporary Sample text */}
              <h1 className="heading-xl">
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
