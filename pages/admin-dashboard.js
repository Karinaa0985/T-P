import React, { useEffect, useState } from "react";
import API from "./api";  // ✅ use central API

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    API.get("/messages")   // ✅ no hardcoded localhost
      .then(res => setMessages(res.data))
      .catch(err => console.error("Error fetching messages:", err));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">📩 Contact Messages</h2>
      {messages.length === 0 ? (
        <p className="text-center text-muted">No messages yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr key={index}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
                <td>{new Date(msg.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
