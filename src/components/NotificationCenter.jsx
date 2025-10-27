import { useState, useEffect } from 'react';
import { Bell, X, CheckCircle, User, Calendar, MessageCircle } from 'lucide-react';

export const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'task_assigned',
      title: 'Task Assigned',
      message: 'You have been assigned to "Review design mockups"',
      timestamp: '2024-01-12T10:30:00Z',
      read: false,
      icon: CheckCircle,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'task_due',
      title: 'Task Due Soon',
      message: 'Frontend development is due tomorrow',
      timestamp: '2024-01-11T14:20:00Z',
      read: false,
      icon: Calendar,
      color: 'text-yellow-600'
    },
    {
      id: 3,
      type: 'comment_added',
      title: 'New Comment',
      message: 'Mike added a comment on "Backend integration"',
      timestamp: '2024-01-11T09:15:00Z',
      read: true,
      icon: MessageCircle,
      color: 'text-green-600'
    },
    {
      id: 4,
      type: 'team_member',
      title: 'New Team Member',
      message: 'Sarah Johnson joined your workspace',
      timestamp: '2024-01-10T16:45:00Z',
      read: true,
      icon: User,
      color: 'text-purple-600'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
              <div className="flex items-center space-x-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-sm text-blue-600 hover:text-blue-500"
                  >
                    Mark all read
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                <Bell className="mx-auto h-8 w-8 text-gray-300 mb-2" />
                <p className="text-sm">No notifications</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {notifications.map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 ${notification.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className={`text-sm font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                              {notification.title}
                            </p>
                            <div className="flex items-center space-x-1">
                              {!notification.read && (
                                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                              )}
                              <button
                                onClick={() => removeNotification(notification.id)}
                                className="text-gray-400 hover:text-gray-600"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(notification.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-4 border-t border-gray-200">
              <button className="w-full text-sm text-blue-600 hover:text-blue-500 font-medium">
                View all notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const ActivityLog = () => {
  const [activities] = useState([
    {
      id: 1,
      action: 'Task completed',
      user: 'Sarah Johnson',
      details: 'Review design mockups',
      timestamp: '2024-01-12T10:30:00Z',
      type: 'task_completed',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 2,
      action: 'Task assigned',
      user: 'Mike Chen',
      details: 'Frontend development',
      timestamp: '2024-01-12T09:15:00Z',
      type: 'task_assigned',
      icon: User,
      color: 'text-blue-600'
    },
    {
      id: 3,
      action: 'Comment added',
      user: 'Alex Rodriguez',
      details: 'Backend integration',
      timestamp: '2024-01-11T16:45:00Z',
      type: 'comment_added',
      icon: MessageCircle,
      color: 'text-purple-600'
    },
    {
      id: 4,
      action: 'Project created',
      user: 'Sarah Johnson',
      details: 'Mobile App Development',
      timestamp: '2024-01-11T14:20:00Z',
      type: 'project_created',
      icon: Calendar,
      color: 'text-yellow-600'
    },
    {
      id: 5,
      action: 'Team member added',
      user: 'Admin',
      details: 'David Kim joined the team',
      timestamp: '2024-01-10T11:30:00Z',
      type: 'team_member_added',
      icon: User,
      color: 'text-indigo-600'
    }
  ]);

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
      </div>
      <div className="p-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <li key={activity.id}>
                  <div className={`relative pb-8 ${index !== activities.length - 1 ? '' : ''}`}>
                    <div className="relative flex space-x-3">
                      <div className={`h-8 w-8 ${activity.color} rounded-full flex items-center justify-center`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">{activity.user}</span> {activity.action}
                            <span className="font-medium text-gray-900"> "{activity.details}"</span>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {new Date(activity.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    {index !== activities.length - 1 && (
                      <div className="absolute top-8 left-4 -ml-px h-full w-0.5 bg-gray-200"></div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
