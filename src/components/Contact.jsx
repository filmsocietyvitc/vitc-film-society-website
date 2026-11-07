import { useState } from "react";
import { supabase } from "../supabase";

const initialForm = {
  name: "",
  regNo: "",
  department: "",
  why: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Debug (remove later)
  console.log(import.meta.env);
  console.log(supabase);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus(null);

    try {
      const { data, error } = await supabase
        .from("applications")
        .insert([
          {
            name: form.name.trim(),
            reg_no: form.regNo.trim(),
            department: form.department,
            why: form.why.trim(),
          },
        ])
        .select();

      if (error) {
        console.error("Supabase Error:", error);

        setStatus({
          type: "error",
          message: error.message,
        });

        return;
      }

      console.log("Inserted:", data);

      setStatus({
        type: "success",
        message: "Application submitted successfully!",
      });

      setForm(initialForm);
    } catch (err) {
      console.error("Unexpected Error:", err);

      setStatus({
        type: "error",
        message: "Unexpected error occurred.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="join">
      <div className="wrap">
        <span className="frame-tag">FRAME 07 — RECRUITMENT</span>

        <div className="section-head">
          <h2>Get on the call sheet</h2>
          <p>
            Tell us which department calls to you. We'll slot you into the next
            production.
          </p>
        </div>

        <div className="contact-grid">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Registration Number</label>

              <input
                type="text"
                name="regNo"
                placeholder="23BCE0000"
                value={form.regNo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Department Interest</label>

              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                required
              >
                <option value="">Choose a domain</option>

                <option value="Pre-Production & Writing">
                  Pre-Production & Writing
                </option>

                <option value="Cinematography & Lighting">
                  Cinematography & Lighting
                </option>

                <option value="Direction & Production">
                  Direction & Production
                </option>

                <option value="Post-Production">
                  Post-Production
                </option>

                <option value="Film Criticism & Analysis">
                  Film Criticism & Analysis
                </option>

                <option value="Media, PR & Events">
                  Media, PR & Events
                </option>
              </select>
            </div>

            <div className="form-field">
              <label>Why do you want in?</label>

              <textarea
                name="why"
                rows={3}
                placeholder="A line or two is fine"
                value={form.why}
                onChange={handleChange}
                required
              />
            </div>

            {status && (
              <p
                className={
                  status.type === "error"
                    ? "form-error"
                    : "form-success"
                }
              >
                {status.message}
              </p>
            )}

            <button
              className="submit-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          <div className="contact-info">
            <h3>Reach the Crew</h3>

            <div className="info-row">
              <span className="lbl">Instagram</span>
              <span>@filmsocvitc</span>
            </div>

            <div className="info-row">
              <span className="lbl">YouTube</span>
              <span>@FILMSOCIETYVITC</span>
            </div>

            <div className="info-row">
              <span className="lbl">Email</span>
              <span>filmsocietyvitc@gmail.com</span>
            </div>

            <div className="info-row">
              <span className="lbl">Campus</span>
              <span>Vellore Institute of Technology, Chennai</span>
            </div>

            <div className="social-row">
              <a
                href="https://www.instagram.com/filmsocvitc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@FILMSOCIETYVITC"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>

              <a
                href="mailto:filmsocietyvitc@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}