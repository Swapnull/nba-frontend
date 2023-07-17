import Image from "next/image";
import { getKeelServer } from "./keel/server";
import { orderBy } from "lodash";
import { redirect } from "next/navigation";
import Link from "next/link";
import Table from "./shared/components/Table";
import { getLogoByTeamName } from "./shared/constants/logo";
import { Team } from "~/keelClient";

const keelClient = getKeelServer();

export default async function Home() {
  const teams = await keelClient.getTeams();

  const orderedTeams = teams?.data?.results?.length
    ? orderBy(teams?.data?.results, ["name"], ["asc"])
    : [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TeamList teams={orderedTeams} />
    </main>
  );
}

function TeamList({ teams }) {
  const columns = [
    {
      header: "Name",
      getBody: (info: Team) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <Image
              className="w-full h-full rounded-full"
              src={getLogoByTeamName(info.name)}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="ml-3 text-black">{info.name}</div>
        </div>
      ),
    },
    {
      header: "Next game",
      getBody: (info: Team) => <div>Next game</div>,
    },
    {
      header: "Last game",
      getBody: (info: Team) => <div>Last game</div>,
    },
    {
      header: "Record",
      getBody: (info: Team) => <div>Record</div>,
    },
  ];

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <Table
              data={teams}
              columns={columns}
              rowLink={(row) => `team/${row.id}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
