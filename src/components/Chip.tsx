type ChipProps = {
  skill: string;
};
export default function Chip({ skill }: ChipProps) {
  return (
    <li className="bg-accent rounded-full px-3 py-2 text-background leading-5 flex items-center">
      <span className="text-xs">{skill}</span>
    </li>
  );
}
