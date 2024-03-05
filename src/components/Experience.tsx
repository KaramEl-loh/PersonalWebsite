import Chip from "./Chip";
import { Button } from "./ui/button";

const fordSkills = [
  "Android",
  "Kotlin",
  "RxJava",
  "Flow",
  "Room",
  "Jetpack Compose",
];
export default function Experience() {
  return (
    <section
      id="#experience"
      className="grid grid-cols-1 justify-items-start md:grid-cols-2 md:items-start md:justify-items-end bg-background text-primary gap-4 md:gap-8 p-6">
      <h3 className="font-bold text-l uppercase text-[#1481BA]">Experience</h3>
      <div className="space-y-4">
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-bold">Ford Motor Company</h4>
          <p className="text-sm">2019 - present</p>
        </div>
        <p className="justify-self-start">
          As an Android developer at FordPass , I led impactful projects,
          including automating testing and modularizing features for efficiency.
          Migrating critical functions to JetPack Compose reduced code
          complexity. I ensured high code quality, addressed customer concerns
          promptly, and mentored team members. Notably, I played a key role in
          developing Ford F-150's productivity features, earning a Leadership
          Recognition Award for most contributions to FordPass's source code.
        </p>
        <ul className="flex flex-row gap-1 flex-wrap">
          {fordSkills.map((skill) => {
            return <Chip skill={skill}></Chip>;
          })}
        </ul>
        <a href="/Karam_El-loh_resume.docx.pdf" target="_blank">
          <Button variant={"link"} className="p-0 mt-4 text-accent font-bold">
            View Full Resume
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.0001 13.963H16.0001V7.96301H10.0001V9.96301H12.5861L7.2561 15.293L8.6701 16.707L14.0001 11.377V13.963Z"
                fill="#1481BA"
              />
            </svg>
          </Button>
        </a>
      </div>
    </section>
  );
}
