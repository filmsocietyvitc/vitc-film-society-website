import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents();
  }, []);

  async function getEvents() {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("is_visible", true)
        .order("event_order", { ascending: true });

      if (error) {
        console.error(error);
        return;
      }

      setEvents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="events">
      <div className="wrap">
        <span className="frame-tag">FRAME 04 — CALENDAR</span>

        <div className="section-head">
          <h2>What's Shooting Next</h2>

          <p>
            Workshops, screenings and the flagship fest events — 24 &amp;
            48-hour challenges, reel contests, cinema quizzes and guest talks.
          </p>
        </div>

        <div className="events-list">
          {loading ? (
            <p>Loading events...</p>
          ) : events.length === 0 ? (
            <p>No upcoming events.</p>
          ) : (
            events.map((event) => (
              <div className="event-row" key={event.id}>
                <div className="event-poster">
                  <img
                    src={
                      event.poster_url ||
                      "https://placehold.co/180x270/111111/FFFFFF?text=Poster"
                    }
                    alt={event.title}
                  />
                </div>

                <div className="event-content">
                  <div className="event-name">
                    {event.title}
                  </div>

                  <div className="event-tag">
                    {event.description}
                  </div>
                </div>

                <div className="event-badge">
                  {event.category}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}