const TeamLogos = {
  "Atlanta Hawks":
    "https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg",
  "Boston Celtics":
    "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg",
  "Brooklyn Nets":
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg",
  "Charlotte Hornets":
    "https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg",
  "Chicago Bulls":
    "https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg",
  "Cleveland Cavaliers":
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cleveland_Cavaliers_logo.svg",
  "Dallas Mavericks":
    "https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg",
  "Denver Nuggets":
    "https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg",
  "Detroit Pistons":
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Logo_of_the_Detroit_Pistons.svg",
  "Golden State Warriors":
    "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg",
  "Houston Rockets":
    "https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg",
  "Indiana Pacers":
    "https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg",
  "LA Clippers":
    "https://upload.wikimedia.org/wikipedia/en/b/bb/Los_Angeles_Clippers_%282015%29.svg",
  "Los Angeles Lakers":
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg",
  "Memphis Grizzlies":
    "https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg",
  "Miami Heat":
    "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg",
  "Milwaukee Bucks":
    "https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg",
  "Minnesota Timberwolves":
    "https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg",
  "New Orleans Pelicans":
    "https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg",
  "New York Knicks":
    "https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg",
  "Oklahoma City Thunder":
    "https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg",
  "Orlando Magic":
    "https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg",
  "Philadelphia 76ers":
    "https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg",
  "Phoenix Suns":
    "https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg",
  "Portland Trail Blazers":
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Portland-Trail-Blazers-Logo-2002.png",
  "Sacramento Kings":
    "https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg",
  "San Antonio Spurs":
    "https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg",
  "Toronto Raptors":
    "https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg",
  "Utah Jazz":
    "https://upload.wikimedia.org/wikipedia/en/0/04/Utah_Jazz_logo_%282016%29.svg",
  "Washington Wizards":
    "https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg",
};

export const getLogoByTeamName = (teamName: string): string =>
  TeamLogos[teamName];
