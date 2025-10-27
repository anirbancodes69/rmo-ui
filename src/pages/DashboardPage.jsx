import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Users, 
  AlertCircle,
  Plus,
  TrendingUp
} from 'lucide-react';

export const DashboardPage = () => {
  const { user } = useAuth();

  // MVP Mock data - simplified for core functionality
  const stats = {
    totalProjects: 5,
    activeTasks: 12,
    completedTasks: 8,
    teamMembers: 4,
    overdueTasks: 2
  };

  const recentProjects = [
    { id: 1, name: 'Website Redesign', progress: 75, status: 'In Progress', dueDate: '2024-01-15', tasks: 8 },
    { id: 2, name: 'Mobile App Development', progress: 45, status: 'In Progress', dueDate: '2024-02-01', tasks: 6 },
    { id: 3, name: 'Marketing Campaign', progress: 100, status: 'Completed', dueDate: '2024-01-10', tasks: 4 },
  ];

  const upcomingTasks = [
    { id: 1, title: 'Review design mockups', project: 'Website Redesign', dueDate: '2024-01-12', priority: 'High', assignee: 'Sarah' },
    { id: 2, title: 'Update API documentation', project: 'Mobile App Development', dueDate: '2024-01-14', priority: 'Medium', assignee: 'Mike' },
    { id: 3, title: 'Conduct user testing', project: 'Website Redesign', dueDate: '2024-01-16', priority: 'High', assignee: 'Alex' },
  ];

  const StatCard = ({ title, value, icon: Icon, color, change }) => (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
                {change && (
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                    <TrendingUp className="self-center flex-shrink-0 h-4 w-4" />
                    <span className="sr-only">Increased by</span>
                    {change}
                  </div>
                )}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          project.status === 'Completed' ? 'bg-green-100 text-green-800' :
          project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {project.status}
        </span>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full" 
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>Due: {new Date(project.dueDate).toLocaleDateString()}</span>
        <span>{project.team} members</span>
      </div>
    </div>
  );

  const TaskItem = ({ task }) => (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
      <div className="flex items-center space-x-3">
        <div className={`w-3 h-3 rounded-full ${
          task.priority === 'High' ? 'bg-red-500' :
          task.priority === 'Medium' ? 'bg-yellow-500' :
          'bg-green-500'
        }`}></div>
        <div>
          <p className="text-sm font-medium text-gray-900">{task.title}</p>
          <p className="text-xs text-gray-500">{task.project}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-500">{new Date(task.dueDate).toLocaleDateString()}</p>
        <span className={`text-xs px-2 py-1 rounded-full ${
          task.priority === 'High' ? 'bg-red-100 text-red-800' :
          task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {task.priority}
        </span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}! Here's what's happening in {user?.workspace}.</p>
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Projects"
          value={stats.totalProjects}
          icon={Calendar}
          color="text-blue-600"
          change="+2"
        />
        <StatCard
          title="Active Tasks"
          value={stats.activeTasks}
          icon={CheckCircle}
          color="text-green-600"
          change="+5"
        />
        <StatCard
          title="Team Members"
          value={stats.teamMembers}
          icon={Users}
          color="text-purple-600"
        />
        <StatCard
          title="Overdue Tasks"
          value={stats.overdueTasks}
          icon={AlertCircle}
          color="text-red-600"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Recent Projects</h2>
              <button className="text-sm text-blue-600 hover:text-blue-500">View all</button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {recentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Upcoming Tasks</h2>
              <button className="text-sm text-blue-600 hover:text-blue-500">View all</button>
            </div>
          </div>
          <div className="p-6 space-y-3">
            {upcomingTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="flow-root">
            <ul className="-mb-8">
              <li>
                <div className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">Sarah Johnson</span> completed task
                          <span className="font-medium text-gray-900"> "Review design mockups"</span>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">Mike Chen</span> assigned task
                          <span className="font-medium text-gray-900"> "Frontend development"</span>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">4 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative">
                  <div className="relative flex space-x-3">
                    <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">Alex Rodriguez</span> updated task
                          <span className="font-medium text-gray-900"> "Backend integration"</span>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">6 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
