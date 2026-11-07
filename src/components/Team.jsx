import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeam();
  }, []);

async function fetchTeam() {
  const { data, error } = await supabase
    .from("team_members")
    .select("*");

  console.log(data);
  console.log(error);

  setTeam(data || []);
  setLoading(false);
}

  return (
    <section id="team">
      <div className="wrap">
        <span className="frame-tag">FRAME 06 — THE CREW</span>

        <div className="section-head">
          <h2>Core Team</h2>
          <p>
            The board and department heads keeping every production on
            schedule.
          </p>
        </div>
      </div>

      <div className="team-grid">
        {loading ? (
          <p style={{ color: "#fff", textAlign: "center", width: "100%" }}>
            Loading team...
          </p>
        ) : (
          team.map((member) => (
            <div className="team-card" key={member.id}>
              <img
                src={member.image_url}
                alt={member.name}
                className="team-portrait"
              />

              <div className="team-name">{member.name}</div>

              <div className="team-role">{member.position}</div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}