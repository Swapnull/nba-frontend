interface TeamPageProps {
  params: { id: string };
}
export default function TeamPage({ params }: TeamPageProps) {
  return <div>{params.id}</div>;
}
