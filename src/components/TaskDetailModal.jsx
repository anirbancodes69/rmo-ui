import { useState } from 'react';
import { 
  X, 
  Calendar, 
  User, 
  Flag, 
  Paperclip, 
  MessageCircle, 
  Send,
  MoreHorizontal,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

export const TaskDetailModal = ({ task, isOpen, onClose, onUpdate }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [newComment, setNewComment] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  // Mock data - replace with actual data from API
  const comments = [
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: 'SJ',
      content: 'I\'ve completed the initial mockups. Please review and let me know if any changes are needed.',
      timestamp: '2024-01-12T10:30:00Z',
      attachments: [
        { name: 'mockup-v1.png', size: '2.4 MB', type: 'image' }
      ]
    },
    {
      id: 2,
      author: 'Mike Chen',
      avatar: 'MC',
      content: 'Looks great! I\'ll start implementing the frontend components based on these designs.',
      timestamp: '2024-01-12T11:15:00Z',
      attachments: []
    },
    {
      id: 3,
      author: 'Alex Rodriguez',
      avatar: 'AR',
      content: 'I\'ve attached the API documentation for the backend integration. Let me know if you need any clarification.',
      timestamp: '2024-01-12T14:20:00Z',
      attachments: [
        { name: 'api-docs.pdf', size: '1.8 MB', type: 'pdf' },
        { name: 'endpoints.json', size: '45 KB', type: 'json' }
      ]
    }
  ];

  const activityLog = [
    {
      id: 1,
      action: 'Task created',
      user: 'Sarah Johnson',
      timestamp: '2024-01-10T09:00:00Z',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 2,
      action: 'Assigned to Mike Chen',
      user: 'Sarah Johnson',
      timestamp: '2024-01-10T09:15:00Z',
      icon: User,
      color: 'text-blue-600'
    },
    {
      id: 3,
      action: 'Priority changed to High',
      user: 'Mike Chen',
      timestamp: '2024-01-11T14:30:00Z',
      icon: Flag,
      color: 'text-red-600'
    },
    {
      id: 4,
      action: 'Status updated to In Progress',
      user: 'Mike Chen',
      timestamp: '2024-01-12T08:45:00Z',
      icon: Clock,
      color: 'text-yellow-600'
    }
  ];

  const handleSave = () => {
    onUpdate(editedTask);
    setIsEditing(false);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: 'Current User',
        avatar: 'CU',
        content: newComment,
        timestamp: new Date().toISOString(),
        attachments: []
      };
      // In a real app, this would make an API call
      console.log('New comment:', comment);
      setNewComment('');
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Review': return 'bg-yellow-100 text-yellow-800';
      case 'To Do': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const TaskDetails = () => (
    <div className="space-y-6">
      {/* Task Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editedTask.title}
              onChange={(e) => setEditedTask({...editedTask, title: e.target.value})}
              className="text-xl font-semibold text-gray-900 border-none outline-none bg-transparent w-full"
            />
          ) : (
            <h2 className="text-xl font-semibold text-gray-900">{task.title}</h2>
          )}
          <div className="flex items-center space-x-3 mt-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(task.status)}`}>
              {task.status}
            </span>
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Task Description */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Description</h3>
        {isEditing ? (
          <textarea
            value={editedTask.description}
            onChange={(e) => setEditedTask({...editedTask, description: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
          />
        ) : (
          <p className="text-sm text-gray-600">{task.description}</p>
        )}
      </div>

      {/* Task Properties */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
          {isEditing ? (
            <input
              type="date"
              value={editedTask.dueDate}
              onChange={(e) => setEditedTask({...editedTask, dueDate: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          ) : (
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{new Date(task.dueDate).toLocaleDateString()}</span>
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Assignee</label>
          {isEditing ? (
            <select
              value={editedTask.assignee}
              onChange={(e) => setEditedTask({...editedTask, assignee: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Sarah Johnson">Sarah Johnson</option>
              <option value="Mike Chen">Mike Chen</option>
              <option value="Alex Rodriguez">Alex Rodriguez</option>
              <option value="Emma Wilson">Emma Wilson</option>
            </select>
          ) : (
            <div className="flex items-center text-sm text-gray-600">
              <User className="h-4 w-4 mr-2" />
              <span>{task.assignee}</span>
            </div>
          )}
        </div>
      </div>

      {/* Attachments */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Attachments</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
            <div className="flex items-center space-x-3">
              <Paperclip className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">mockup-v1.png</p>
                <p className="text-xs text-gray-500">2.4 MB</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-500 text-sm">Download</button>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
            <div className="flex items-center space-x-3">
              <Paperclip className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">api-docs.pdf</p>
                <p className="text-xs text-gray-500">1.8 MB</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-500 text-sm">Download</button>
          </div>
        </div>
        <button className="mt-2 text-sm text-blue-600 hover:text-blue-500">
          + Add attachment
        </button>
      </div>

      {/* Save Button */}
      {isEditing && (
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );

  const CommentsSection = () => (
    <div className="space-y-6">
      {/* Add Comment */}
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex space-x-3">
          <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
            CU
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
              rows="3"
            />
            <div className="flex items-center justify-between mt-2">
              <button className="text-sm text-blue-600 hover:text-blue-500">
                <Paperclip className="h-4 w-4 inline mr-1" />
                Attach file
              </button>
              <button
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-3 w-3 mr-1" />
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3">
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
              {comment.avatar}
            </div>
            <div className="flex-1">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-gray-900">{comment.author}</h4>
                  <span className="text-xs text-gray-500">
                    {new Date(comment.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{comment.content}</p>
                {comment.attachments.length > 0 && (
                  <div className="space-y-1">
                    {comment.attachments.map((attachment, index) => (
                      <div key={index} className="flex items-center space-x-2 text-xs text-blue-600">
                        <Paperclip className="h-3 w-3" />
                        <span>{attachment.name}</span>
                        <span className="text-gray-500">({attachment.size})</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ActivityLog = () => (
    <div className="space-y-4">
      {activityLog.map((activity) => {
        const Icon = activity.icon;
        return (
          <div key={activity.id} className="flex space-x-3">
            <div className={`h-8 w-8 ${activity.color} rounded-full flex items-center justify-center`}>
              <Icon className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-900">{activity.action}</p>
                <span className="text-xs text-gray-500">
                  {new Date(activity.timestamp).toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-gray-600">by {activity.user}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
        
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'details' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Details
                </button>
                <button
                  onClick={() => setActiveTab('comments')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'comments' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Comments ({comments.length})
                </button>
                <button
                  onClick={() => setActiveTab('activity')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'activity' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Activity
                </button>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="bg-white px-6 py-6 max-h-96 overflow-y-auto">
            {activeTab === 'details' && <TaskDetails />}
            {activeTab === 'comments' && <CommentsSection />}
            {activeTab === 'activity' && <ActivityLog />}
          </div>
        </div>
      </div>
    </div>
  );
};
