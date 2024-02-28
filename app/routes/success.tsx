import { Link } from "@remix-run/react";

export default function Success() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Success</h1>

      <Link to="/">Go back</Link>
    </div>
  );
}
