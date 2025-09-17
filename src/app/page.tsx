import Header from "./components/Header";
import HeaderStatic from "./components/HeaderStatic";
import Section from "./components/Section";
import CircleImage from "./components/CircleImage";
import ScrollPersist from './components/ScrollPersist';
import ProjectsGrid from "./components/ProjectsGrid";

export default function Home() {
  return (
    <div className="app">
      <ScrollPersist /> 

      <HeaderStatic />
      <div id="header-trigger" style={{ height: 1 }} aria-hidden="true" />
      <Header />

      <div className="stack">

        {/* About Me */}
        <main className="main">
          <Section id="about" theme="light">
            <div className="stack gap-10" style={{minHeight: '75vh', paddingTop: '5rem', alignItems: "center"}}> {/* Center image */}

              {/*Profile Picture */}
              <CircleImage src="./images/pfp_1.jpg" alt="Profile Picture"/>

              {/*Intro */}
              <h1 className="heading-xl">
                Hello, I&apos;m{" "}
                <span className="text-underline">Adam Colyar</span>!
                <br/>
                Here you can see my latest works.
              </h1>

            </div>
          </Section>
        </main>

        {/* Projects */}
        <main className="main">
          <Section id="projects" theme="dark" title="Featured Projects" center={false}>
            <ProjectsGrid />
          </Section>
        </main>

        {/* Involvement */}
        <main className="main">
          <Section id="involvement" theme="light" title="Involvement">
            <div className="stack full-width">
              
            </div>
          </Section>
        </main>

        {/* Extras */}
        <main className="main">
          <Section id="extras" theme="dark" title="Extras">
            <div className="stack full-width">

            </div>
          </Section>
        </main>

        <footer className="">
        </footer>

      </div>

    </div>
  );
}
