export default function About() {
  return (
    <section
      id="#about"
      className="grid grid-cols-1 justify-items-start md:grid-cols-2 md:items-center md:justify-items-end bg-background text-primary gap-2 md:gap-8 md:p-16 p-6">
      <h3 className="font-bold text-l uppercase text-accent">About</h3>
      <p className="justify-self-start">
        Hey I'm Karam, a seasoned software engineer that specializes in
        delivering pixel perfect, efficient, and unforgettable mobile
        experiences. I have over four years of experience shipping cutting-edge
        features to world-known brands with the highest quality. Whether I'm
        part of a team or working on my own, I excel in clear communication and
        productive engagement with diverse stakeholders. When I'm not creating
        world-class Android experience, I'm either solving{" "}
        <a
          className="text-accent-foreground hover:text-accent"
          href="https://leetcode.com/karamjoudah/">
          {" "}
          Leetcode
        </a>{" "}
        problems, or working on{" "}
        <a
          className="text-accent-foreground hover:text-accent"
          href="https://www.frontendmentor.io/profile/kjoudah">
          Frontend Mentor
        </a>{" "}
        challenges. I also like playing games such as Dota 2, Overwatch 2, or
        Counter Strike 2 (I like sequels).
      </p>
    </section>
  );
}
