import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import './styles.css';

const NotificationBell = () => {
  const { notifications = [] } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="notification-container">
      <button 
        className="notification-bell"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        🔔 {notifications.length > 0 && (
          <span className="badge">{notifications.length}</span>
        )}
      </button>

      {showNotifications && (
        <div className="notification-dropdown">
          {notifications.length === 0 ? (
            <p>Nenhuma notificação</p>
          ) : (
            notifications.map((notif) => (
              <div key={notif.id} className="notification-item">
                <p>{notif.message}</p>
                <small>{new Date(notif.date).toLocaleString()}</small>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;