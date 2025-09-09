import Header from "./Components/Header";
import Section from "./Components/Section";
import CircleImage from "./Components/CircleImage";
import ScrollPersist from './Components/ScrollPersist';
import Carousel from './Components/Carousel';
import CarouselCard from './Components/CarouselCard';

export default function Home() {
  return (
    <div className="app">
      <ScrollPersist /> 
      <Header />

      <div className="stack">

        {/* About Me */}
        <main className="main">
          <Section id="about" theme="light">
            <div className="stack gap-10" style={{alignItems: "center"}}>

              {/*Profile Picture */}
              <CircleImage src="./images/pfp_1.jpg" alt="Profile Picture" size={512}/>

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
        <main className="main min-screen">
          <Section id="projects" theme="dark" title="Projects" center={false}>
            <div className="full-width">
              <Carousel>
                  <CarouselCard title="" description="" href=""/> {/* placeholder*/}
                  <CarouselCard title="To-do List" titleColor="white" descriptionColor="white" description="" src="./images/pfp_1.jpg" href=""/>
                  <CarouselCard title="Calculator" titleColor="white" descriptionColor="white" description="" src="./images/pfp_1.jpg" href=""/>
                  <CarouselCard title="Stormy-Castle" titleColor="white" descriptionColor="white" description="" src="./images/pfp_1.jpg" href=""/>
                  <CarouselCard title="" description="" href=""/> {/* placeholder*/}
              </Carousel>
            </div>
          </Section>
        </main>

        {/* Involvement */}
        <main className="main min-screen">
          <Section id="involvement" theme="light" title="Involvement">
            <div className="stack full-width">
              
            </div>
          </Section>
        </main>

        {/* Extras */}
        <main className="main min-screen">
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
