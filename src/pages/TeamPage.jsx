import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  MoreHorizontal,
  Edit,
  Trash2,
  UserPlus,
  Crown,
  Shield
} from 'lucide-react';

export const TeamPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  // Mock data - replace with actual data from API
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      role: 'Admin',
      position: 'Project Manager',
      avatar: 'SJ',
      status: 'Online',
      joinDate: '2023-01-15',
      lastActive: '2024-01-12T10:30:00Z',
      projects: 3,
      tasks: 12,
      location: 'San Francisco, CA',
      phone: '+1 (555) 123-4567'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@company.com',
      role: 'Manager',
      position: 'Lead Developer',
      avatar: 'MC',
      status: 'Online',
      joinDate: '2023-02-20',
      lastActive: '2024-01-12T09:15:00Z',
      projects: 2,
      tasks: 8,
      location: 'New York, NY',
      phone: '+1 (555) 234-5678'
    },
    {
      id: 3,
      name: 'Alex Rodriguez',
      email: 'alex.rodriguez@company.com',
      role: 'Member',
      position: 'Frontend Developer',
      avatar: 'AR',
      status: 'Away',
      joinDate: '2023-03-10',
      lastActive: '2024-01-11T16:45:00Z',
      projects: 2,
      tasks: 6,
      location: 'Austin, TX',
      phone: '+1 (555) 345-6789'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      email: 'emma.wilson@company.com',
      role: 'Member',
      position: 'UI/UX Designer',
      avatar: 'EW',
      status: 'Online',
      joinDate: '2023-04-05',
      lastActive: '2024-01-12T11:20:00Z',
      projects: 2,
      tasks: 9,
      location: 'Seattle, WA',
      phone: '+1 (555) 456-7890'
    },
    {
      id: 5,
      name: 'David Kim',
      email: 'david.kim@company.com',
      role: 'Manager',
      position: 'Mobile Developer',
      avatar: 'DK',
      status: 'Offline',
      joinDate: '2023-05-12',
      lastActive: '2024-01-10T14:30:00Z',
      projects: 1,
      tasks: 5,
      location: 'Los Angeles, CA',
      phone: '+1 (555) 567-8901'
    },
    {
      id: 6,
      name: 'Lisa Park',
      email: 'lisa.park@company.com',
      role: 'Member',
      position: 'Backend Developer',
      avatar: 'LP',
      status: 'Online',
      joinDate: '2023-06-18',
      lastActive: '2024-01-12T08:45:00Z',
      projects: 1,
      tasks: 7,
      location: 'Chicago, IL',
      phone: '+1 (555) 678-9012'
    }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || member.role.toLowerCase() === filterRole.toLowerCase();
    return matchesSearch && matchesRole;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Online': return 'bg-green-500';
      case 'Away': return 'bg-yellow-500';
      case 'Offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Admin': return <Crown className="h-4 w-4 text-purple-600" />;
      case 'Manager': return <Shield className="h-4 w-4 text-blue-600" />;
      default: return <UserPlus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin': return 'bg-purple-100 text-purple-800';
      case 'Manager': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const MemberCard = ({ member }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
              {member.avatar}
            </div>
            <div className={`absolute -bottom-1 -right-1 h-4 w-4 ${getStatusColor(member.status)} rounded-full border-2 border-white`}></div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.position}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(member.role)}`}>
            {member.role}
          </span>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <Mail className="h-4 w-4 mr-2" />
          <span>{member.email}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Phone className="h-4 w-4 mr-2" />
          <span>{member.phone}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{member.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span>Joined {new Date(member.joinDate).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          <span className="font-medium">{member.projects}</span> projects • <span className="font-medium">{member.tasks}</span> tasks
        </div>
        <div className="flex space-x-2">
          <button className="text-blue-600 hover:text-blue-900">
            <Edit className="h-4 w-4" />
          </button>
          <button className="text-red-600 hover:text-red-900">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const stats = {
    total: teamMembers.length,
    online: teamMembers.filter(m => m.status === 'Online').length,
    managers: teamMembers.filter(m => m.role === 'Manager').length,
    admins: teamMembers.filter(m => m.role === 'Admin').length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team</h1>
          <p className="text-gray-600">Manage your team members and their roles.</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Plus className="h-4 w-4 mr-2" />
          Add Member
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserPlus className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Members</dt>
                  <dd className="text-2xl font-semibold text-gray-900">{stats.total}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-6 w-6 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Online Now</dt>
                  <dd className="text-2xl font-semibold text-gray-900">{stats.online}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Managers</dt>
                  <dd className="text-2xl font-semibold text-gray-900">{stats.managers}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Crown className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Admins</dt>
                  <dd className="text-2xl font-semibold text-gray-900">{stats.admins}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search team members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="member">Member</option>
          </select>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <UserPlus className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No team members found</h3>
          <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};
