import Chip from "./Chip";

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
      className="grid grid-cols-1 justify-items-start md:grid-cols-2 md:items-center md:justify-items-end bg-background text-primary gap-4 md:gap-8 md:p-16 p-6">
      <h3 className="font-bold text-l uppercase text-[#1481BA]">Experience</h3>
      <div className="space-y-4">
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-bold">Ford Motor Company</h4>
          <p className="text-sm">2019 - present</p>
        </div>
        <p className="justify-self-start">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          fugit sint asperiores vero quae possimus quo tenetur porro, autem quod
          maxime iste enim vel totam harum. Numquam maiores vero ipsum.
        </p>
        <ul className="flex flex-row gap-1 flex-wrap">
          {fordSkills.map((skill) => {
            return <Chip skill={skill}></Chip>;
          })}
        </ul>
      </div>
    </section>
  );
}
