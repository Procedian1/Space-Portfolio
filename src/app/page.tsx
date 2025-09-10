import Header from "./Components/Header";
import HeaderStatic from "./Components/HeaderStatic";
import Section from "./Components/Section";
import CircleImage from "./Components/CircleImage";
import ScrollPersist from './Components/ScrollPersist';
import Card from "./Components/Card";

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
            <div className="card-container">
                <Card title="To-do List" titleColor="black" descriptionColor="white" description="" src="./images/light-todo-svgrepo-com.svg" href=""/>
                <Card title="Calculator" titleColor="black" descriptionColor="white" description="" src="./images/calculator-svgrepo-com.svg" href=""/>
                <Card title="Stormy-Castle" titleColor="black" descriptionColor="white" description="" src="./images/castle-svgrepo-com.svg" href=""/>
            </div>
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
