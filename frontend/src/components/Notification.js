import React, { useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Adjust URL as needed

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('notification', (notification) => {
      setNotifications((prev) => [...prev, notification]);
    });

    return () => {
      socket.off('notification');
    };
  }, []);

  return (
    <ToastContainer position="top-end" className="p-3">
      {notifications.map((note, index) => (
        <Toast key={index}>
          <Toast.Body>{note.message}</Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  );
};

export default Notification;
