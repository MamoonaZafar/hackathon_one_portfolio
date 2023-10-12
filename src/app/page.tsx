import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg[#F1F6F9]">
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* contact */}
      {/* footer */}

    </div>
  
  )
}
