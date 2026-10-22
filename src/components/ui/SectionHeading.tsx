type Props = { number: string; eyebrow: string; title: string; description?: string };
export default function SectionHeading({ number, eyebrow, title, description }: Props) {
  return <div className="section-heading">
    <p className="eyebrow"><span className="section-number">{number}</span>{eyebrow}</p>
    <div className="section-heading-body"><h2>{title}</h2>{description && <p>{description}</p>}</div>
  </div>;
}
