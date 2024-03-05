import About from "./About";
import Experience from "./Experience";
// import Projects from "./Projects";

export default function Body() {
  return (
    <div className="container min-h-full">
      <About></About>
      <Experience></Experience>
      {/* <Projects></Projects> */}
    </div>
  );
}
