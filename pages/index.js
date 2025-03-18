import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email.");
    // For now, just log it - we'll connect Firebase in the next step
    console.log("Email submitted:", email);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Because Perfect is a Myth</h1>
      <p>You think your CV is flawless? Let fresh eyes take a look.</p>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          required
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Get Verified
        </button>
      </form>
    </div>
  );
}