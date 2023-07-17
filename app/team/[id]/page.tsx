import Table from "~/app/shared/components/Table";
import { getKeelServer } from "../../keel/server";
import { DateTime } from "luxon";
import { Player } from "~/keelClient";

interface TeamPageProps {
  params: { id: string };
}

const keelClient = getKeelServer();

export default async function TeamPage({ params }: TeamPageProps) {
  const { data: team, error } = await keelClient.getTeam({ id: params.id });
  const { data: playerList } = await keelClient.getPlayersOnTeam({
    teamId: params.id,
  });

  if (error || !team) return <div>Team not found</div>;

  const columns = [
    {
      header: "Name",
      getBody: (player: Player) => `${player.firstName} ${player.lastName}`,
    },
    {
      header: "Number",
      getBody: (player: Player) => player.jersey,
    },
    {
      header: "Position",
      getBody: (player: Player) => player.position,
    },
    {
      header: "DoB",
      getBody: (player: Player) =>
        DateTime.fromISO(player.birthDate).toFormat("dd MMM yyyy"),
    },
    {
      header: "Height",
      getBody: (player: Player) =>
        `${Math.floor(player.height / 12)}'${Math.floor(player.height % 12)}"`,
    },
    {
      header: "Weight",
      getBody: (player: Player) => `${player.weight} lbs`,
    },
    {
      header: "College",
      getBody: (player: Player) => player.college,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl">{team.name}</h1>
      {playerList?.players?.length ? (
        <Table
          data={playerList?.players}
          columns={columns}
          rowLink={(info) => `/player/${info.id}`}
          orderBy={(player) => {
            if (!player.jersey) return 999;
            return Number(player.jersey);
          }}
        />
      ) : (
        <div> No players </div>
      )}
    </div>
  );
}
