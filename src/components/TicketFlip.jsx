import React from "react";
import "./TicketFlip.css";
import TextType from '../animations/TextType';
import { Highlighter } from "./highlighter";

export default function TicketCard() {
  return (
    <div className="ticket-flex-container" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
      {/* Left: Ticket Card */}
      <div
        className="ticket-wrapper"
        style={{
          flex: "1",
          borderTopRightRadius: "2rem",
          borderBottomRightRadius: "2rem",
          overflow: "hidden",
        }}
      >
        <div className="ticket-card">
          {/* Front of ticket */}
          <div className="ticket-face ticket-front">
            <p className="ticket-instruction">Present to driver for scanning</p>
            <div className="qr-placeholder">QR</div>
            <button className="ticket-btn">Trip details</button>
          </div>

          {/* Back of ticket */}
          <div className="ticket-face ticket-back">
            <div className="ticket-header">
              <h2 className="logo-card">Smart Transit</h2>
              <p className="date">March 06, 2025</p>
            </div>
            <div className="ticket-info">
              <div>
                <h3>Pari Chowk</h3>
                <p className="time">7:23</p>
              </div>
              <span className="arrow">→</span>
              <div>
                <h3>Anand Vihar</h3>
                <p className="time">8:45</p>
              </div>
            </div>
            <div className="ticket-details">
              <p><strong>Bus:</strong> E58</p>
              <p><strong>Seat:</strong> 15A</p>
              <p><strong>Type:</strong> Premium</p>
              <p><strong>Passenger:</strong> Adult</p>
            </div>
            <button className="ticket-btn">Show Ticket</button>
          </div>
        </div>
      </div>
      {/* Right: Info Section */}
      <div
        className="ticket-info-right"
        style={{
          flex: "1",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextType 
  text={["What we do?", "What we offer?"]}
  typingSpeed={75}
  pauseDuration={1800}
  showCursor={true}
  cursorCharacter="|"
/>
        {/* <p style={{ fontSize: "1.375rem", color: "#555", maxWidth: "600px" }}>
          We simplify your daily commute by providing digital tickets for smart, hassle-free transit. Scan, board, and travel with ease no paper, no queues.
        </p> */}
        

        <p style={{ fontSize: "1.375rem", color: "#555", maxWidth: "600px" }}>
  We{" "}simplify your daily commute by providing digital tickets for smart{" "}
  <Highlighter action="underline" color="#FF9800">
    hassle-free transit.{" "}Scan, board, and travel with ease
  </Highlighter>{" "}
  {/* makes important{" "} */}
  <Highlighter action="highlight" color="#87CEFA">
    no paper, no queues.
  </Highlighter>{" "}
  {/* effortlessly. */}
</p>


      </div>
    </div>
  );
}
