import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Calendar,
  User,
  Flag,
  CheckCircle,
  Clock,
  AlertCircle,
  MoreHorizontal,
  Edit,
  Trash2,
  MessageCircle,
  X
} from 'lucide-react';

export const TasksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedTask, setSelectedTask] = useState(null);
  const [showTaskModal, setShowTaskModal] = useState(false);

  // MVP Mock data - simplified tasks with core fields
  const tasks = [
    {
      id: 1,
      title: 'Review design mockups',
      description: 'Review and provide feedback on the new homepage design mockups',
      status: 'To Do',
      priority: 'High',
      dueDate: '2024-01-12',
      assignee: 'Sarah',
      project: 'Website Redesign',
      comments: [
        { id: 1, author: 'Mike', content: 'Looking good so far!', timestamp: '2024-01-10T10:30:00Z' }
      ],
      createdAt: '2024-01-08'
    },
    {
      id: 2,
      title: 'Frontend development',
      description: 'Implement the homepage using React components',
      status: 'In Progress',
      priority: 'High',
      dueDate: '2024-01-20',
      assignee: 'Mike',
      project: 'Website Redesign',
      comments: [
        { id: 2, author: 'Sarah', content: 'Great progress!', timestamp: '2024-01-11T14:20:00Z' }
      ],
      createdAt: '2024-01-09'
    },
    {
      id: 3,
      title: 'Backend integration',
      description: 'Connect frontend with backend APIs',
      status: 'To Do',
      priority: 'Medium',
      dueDate: '2024-01-25',
      assignee: 'Alex',
      project: 'Website Redesign',
      comments: [],
      createdAt: '2024-01-10'
    },
    {
      id: 4,
      title: 'UI/UX design',
      description: 'Create mobile app UI/UX designs',
      status: 'Completed',
      priority: 'High',
      dueDate: '2024-01-15',
      assignee: 'Sarah',
      project: 'Mobile App Development',
      comments: [
        { id: 3, author: 'David', content: 'Perfect! Ready for development.', timestamp: '2024-01-14T16:45:00Z' }
      ],
      createdAt: '2024-01-05'
    },
    {
      id: 5,
      title: 'iOS development',
      description: 'Develop iOS version of the mobile app',
      status: 'In Progress',
      priority: 'High',
      dueDate: '2024-02-01',
      assignee: 'David',
      project: 'Mobile App Development',
      comments: [],
      createdAt: '2024-01-12'
    }
  ];

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.assignee.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'To Do': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed': return CheckCircle;
      case 'In Progress': return Clock;
      case 'To Do': return AlertCircle;
      default: return AlertCircle;
    }
  };

  const TaskCard = ({ task }) => {
    const StatusIcon = getStatusIcon(task.status);
    
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">{task.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(task.status)}`}>
              {task.status}
            </span>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <User className="h-4 w-4 mr-1" />
            <span>{task.assignee}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">{task.project}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-sm text-gray-500">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>{task.comments.length}</span>
            </div>
            <button
              onClick={() => {
                setSelectedTask(task);
                setShowTaskModal(true);
              }}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  const TaskModal = ({ task, isOpen, onClose }) => {
    const [newComment, setNewComment] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    if (!isOpen || !task) return null;

    const handleAddComment = () => {
      if (newComment.trim()) {
        const comment = {
          id: Date.now(),
          author: 'Current User',
          content: newComment,
          timestamp: new Date().toISOString()
        };
        // In a real app, this would make an API call
        console.log('New comment:', comment);
        setNewComment('');
      }
    };

    const handleSave = () => {
      // In a real app, this would make an API call
      console.log('Task updated:', editedTask);
      setIsEditing(false);
    };

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
          
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
            <div className="bg-white px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Task Details</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="bg-white px-6 py-6 max-h-96 overflow-y-auto">
              {/* Task Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedTask.title}
                      onChange={(e) => setEditedTask({...editedTask, title: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-sm text-gray-900">{task.title}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  {isEditing ? (
                    <textarea
                      value={editedTask.description}
                      onChange={(e) => setEditedTask({...editedTask, description: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                      rows="3"
                    />
                  ) : (
                    <p className="text-sm text-gray-600">{task.description}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    {isEditing ? (
                      <select
                        value={editedTask.status}
                        onChange={(e) => setEditedTask({...editedTask, status: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    ) : (
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(task.status)}`}>
                        {task.status}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                    {isEditing ? (
                      <select
                        value={editedTask.priority}
                        onChange={(e) => setEditedTask({...editedTask, priority: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    ) : (
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                      <p className="text-sm text-gray-600">{new Date(task.dueDate).toLocaleDateString()}</p>
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
                        <option value="Sarah">Sarah</option>
                        <option value="Mike">Mike</option>
                        <option value="Alex">Alex</option>
                        <option value="David">David</option>
                        <option value="Lisa">Lisa</option>
                      </select>
                    ) : (
                      <p className="text-sm text-gray-600">{task.assignee}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Comments</h3>
                
                {/* Add Comment */}
                <div className="mb-4">
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
                        rows="2"
                      />
                      <div className="flex justify-end mt-2">
                        <button
                          onClick={handleAddComment}
                          disabled={!newComment.trim()}
                          className="px-3 py-1 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-3">
                  {task.comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-3">
                      <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                        {comment.author.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-medium text-gray-900">{comment.author}</h4>
                            <span className="text-xs text-gray-500">
                              {new Date(comment.timestamp).toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
                {isEditing ? (
                  <>
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
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  >
                    Edit Task
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
          <p className="text-gray-600">Manage and track your tasks efficiently.</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Plus className="h-4 w-4 mr-2" />
          New Task
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div className="text-center py-12">
          <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No tasks found</h3>
          <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
        </div>
      )}

      {/* Task Modal */}
      <TaskModal 
        task={selectedTask} 
        isOpen={showTaskModal} 
        onClose={() => setShowTaskModal(false)} 
      />
    </div>
  );
};
