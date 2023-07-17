import Table from "~/app/shared/components/Table";
import { getKeelServer } from "../../keel/server";
import { DateTime } from "luxon";

interface TeamPageProps {
  params: { id: string };
}

const keelClient = getKeelServer();

export default async function TeamPage({ params }: TeamPageProps) {
  const { data: player, error } = await keelClient.getPlayer({ id: params.id });

  if (error || !player) return <div>Player not found</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl">
        {player.firstName} {player.lastName}
      </h1>
    </div>
  );
}
