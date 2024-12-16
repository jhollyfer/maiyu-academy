interface Props {
  title: string;
  label: string;
}

export function SectionTitle({ title, label }: Props) {
  return (
    <div className="flex flex-col space-y-2 ">
      <h2 className="text-2xl font-extrabold text-[#003399]">{title}</h2>
      <p className="font-medium text-[#003399]">{label}</p>
    </div>
  );
}
