import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Calendar,
  Users,
  MoreHorizontal,
  Edit,
  Trash2,
  Archive
} from 'lucide-react';

export const ProjectsPage = () => {
  const [viewMode, setViewMode] = useState('kanban'); // 'kanban' or 'list'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Mock data - replace with actual data from API
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Complete redesign of company website with modern UI/UX',
      status: 'In Progress',
      priority: 'High',
      progress: 75,
      dueDate: '2024-01-15',
      team: [
        { id: 1, name: 'Sarah Johnson', avatar: 'SJ' },
        { id: 2, name: 'Mike Chen', avatar: 'MC' },
        { id: 3, name: 'Alex Rodriguez', avatar: 'AR' },
        { id: 4, name: 'Emma Wilson', avatar: 'EW' }
      ],
      tasks: [
        { id: 1, title: 'Design mockups', status: 'Completed', priority: 'High' },
        { id: 2, title: 'Frontend development', status: 'In Progress', priority: 'High' },
        { id: 3, title: 'Backend integration', status: 'To Do', priority: 'Medium' },
        { id: 4, title: 'Testing', status: 'To Do', priority: 'Medium' }
      ],
      createdAt: '2024-01-01',
      updatedAt: '2024-01-10'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Native mobile app for iOS and Android platforms',
      status: 'In Progress',
      priority: 'High',
      progress: 45,
      dueDate: '2024-02-01',
      team: [
        { id: 1, name: 'Sarah Johnson', avatar: 'SJ' },
        { id: 5, name: 'David Kim', avatar: 'DK' },
        { id: 6, name: 'Lisa Park', avatar: 'LP' }
      ],
      tasks: [
        { id: 5, title: 'UI/UX design', status: 'Completed', priority: 'High' },
        { id: 6, title: 'iOS development', status: 'In Progress', priority: 'High' },
        { id: 7, title: 'Android development', status: 'In Progress', priority: 'High' },
        { id: 8, title: 'API integration', status: 'To Do', priority: 'Medium' }
      ],
      createdAt: '2024-01-05',
      updatedAt: '2024-01-12'
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      description: 'Q1 marketing campaign for new product launch',
      status: 'Completed',
      priority: 'Medium',
      progress: 100,
      dueDate: '2024-01-10',
      team: [
        { id: 7, name: 'Jennifer Lee', avatar: 'JL' },
        { id: 8, name: 'Tom Brown', avatar: 'TB' }
      ],
      tasks: [
        { id: 9, title: 'Campaign strategy', status: 'Completed', priority: 'High' },
        { id: 10, title: 'Content creation', status: 'Completed', priority: 'Medium' },
        { id: 11, title: 'Social media posts', status: 'Completed', priority: 'Medium' }
      ],
      createdAt: '2023-12-15',
      updatedAt: '2024-01-10'
    },
    {
      id: 4,
      name: 'Database Migration',
      description: 'Migrate legacy database to new cloud infrastructure',
      status: 'Planning',
      priority: 'Low',
      progress: 20,
      dueDate: '2024-02-15',
      team: [
        { id: 9, name: 'Robert Taylor', avatar: 'RT' },
        { id: 10, name: 'Maria Garcia', avatar: 'MG' }
      ],
      tasks: [
        { id: 12, title: 'Database analysis', status: 'In Progress', priority: 'High' },
        { id: 13, title: 'Migration plan', status: 'To Do', priority: 'Medium' },
        { id: 14, title: 'Data backup', status: 'To Do', priority: 'High' }
      ],
      createdAt: '2024-01-08',
      updatedAt: '2024-01-11'
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
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

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.name}</h3>
          <p className="text-sm text-gray-600 mb-3">{project.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(project.priority)}`}>
            {project.priority}
          </span>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mb-4">
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

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Due {new Date(project.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Users className="h-4 w-4 mr-1" />
          <span>{project.team.length} members</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {project.team.slice(0, 3).map((member) => (
            <div
              key={member.id}
              className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white"
            >
              {member.avatar}
            </div>
          ))}
          {project.team.length > 3 && (
            <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-xs font-medium border-2 border-white">
              +{project.team.length - 3}
            </div>
          )}
        </div>
        <div className="text-sm text-gray-500">
          {project.tasks.filter(task => task.status === 'Completed').length}/{project.tasks.length} tasks
        </div>
      </div>
    </div>
  );

  const KanbanView = () => {
    const columns = [
      { id: 'planning', title: 'Planning', status: 'Planning' },
      { id: 'in-progress', title: 'In Progress', status: 'In Progress' },
      { id: 'completed', title: 'Completed', status: 'Completed' }
    ];

    return (
      <div className="flex space-x-6 overflow-x-auto pb-4">
        {columns.map((column) => {
          const columnProjects = filteredProjects.filter(project => project.status === column.status);
          
          return (
            <div key={column.id} className="flex-shrink-0 w-80">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">{column.title}</h3>
                  <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {columnProjects.length}
                  </span>
                </div>
                <div className="space-y-4">
                  {columnProjects.map((project) => (
                    <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{project.name}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(project.priority)}`}>
                          {project.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-blue-600 h-1.5 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-1">
                          {project.team.slice(0, 3).map((member) => (
                            <div
                              key={member.id}
                              className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium border border-white"
                            >
                              {member.avatar}
                            </div>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">
                          Due {new Date(project.dueDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const ListView = () => (
    <div className="bg-white shadow rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Team
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProjects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{project.name}</div>
                    <div className="text-sm text-gray-500">{project.description}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{project.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex -space-x-1">
                    {project.team.slice(0, 3).map((member) => (
                      <div
                        key={member.id}
                        className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium border border-white"
                      >
                        {member.avatar}
                      </div>
                    ))}
                    {project.team.length > 3 && (
                      <div className="h-6 w-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-xs font-medium border border-white">
                        +{project.team.length - 3}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(project.dueDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600">Manage and track your projects efficiently.</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('kanban')}
            className={`p-2 rounded-md ${
              viewMode === 'kanban' 
                ? 'bg-blue-100 text-blue-600' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Grid3X3 className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md ${
              viewMode === 'list' 
                ? 'bg-blue-100 text-blue-600' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'kanban' ? <KanbanView /> : <ListView />}
    </div>
  );
};
