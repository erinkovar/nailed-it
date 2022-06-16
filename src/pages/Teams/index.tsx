import React from "react";
import Lottie from "react-lottie";
import Teams from "../../lotties/teams.json";
import "./teams.css";

function TeamsPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Teams,
  };

  const teams: Array<Array<string>> = [
    ["Scott Branch", "Erin Kovar", "Brandon Gonzales", "Lawrence Chang"],
    ["Mark DeArmond", "Zigmund Sun Oo", "Mihiran Pandey", "Chris Watkins"],
    ["Kyle Ahlstrom", "Maui Arcuri", "Eddy Ymeri", " Nkemdi Anyiam"],
    ["Chase Thompson", "Tahzib Sunesara", "Melissa Leide", "Luke Emano"],
    ["Hannah Walsh", "Kevin Chen", "Raj Patel", "Eric Gruzca", "Emmie Bowles"],
    ["Henry Jordan", "Tony Kim", "Benn Cheney", "Kristen LaBarbera"],
  ];

  return (
    <div className="teams-page">
      <Lottie options={defaultOptions} height={300} width={400} />
      <div>
        <h1 className="teams-title">Meet the Teams</h1>
      </div>
      <div className="team-cards">
        {teams.map((team: string[], index: number) => {
          return (
            <div className="team-card">
              <p className="team-name">{`TEAM ${index + 1}`}</p>
              <ul>
                {team.map((member: string) => {
                  return <li>{member}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamsPage;
