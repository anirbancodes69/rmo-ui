import { useState } from 'react';
import { 
  Settings, 
  Users, 
  Shield, 
  Bell, 
  Palette, 
  Database,
  Key,
  Globe,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';

export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [showApiKey, setShowApiKey] = useState(false);

  const tabs = [
    { id: 'general', name: 'General', icon: Settings },
    { id: 'team', name: 'Team Management', icon: Users },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'integrations', name: 'Integrations', icon: Globe },
  ];

  const GeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Company Information</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              defaultValue="RMO Solutions"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Industry</label>
            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Finance</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Size</label>
            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>201-500 employees</option>
              <option>500+ employees</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Timezone</label>
            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <option>UTC-8 (Pacific)</option>
              <option>UTC-5 (Eastern)</option>
              <option>UTC+0 (GMT)</option>
              <option>UTC+1 (Central European)</option>
              <option>UTC+8 (China Standard)</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Project Defaults</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Default Project Duration</label>
            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <option>1 week</option>
              <option>2 weeks</option>
              <option>1 month</option>
              <option>3 months</option>
              <option>6 months</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Default Task Priority</label>
            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const TeamManagement = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Role Permissions</h3>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Admin</h4>
              <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Full Access</span>
            </div>
            <p className="text-sm text-gray-600">Complete system access including user management, settings, and all projects.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Manager</h4>
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Project Management</span>
            </div>
            <p className="text-sm text-gray-600">Can create and manage projects, assign tasks, and view team performance.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Member</h4>
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Task Management</span>
            </div>
            <p className="text-sm text-gray-600">Can view assigned projects and tasks, update task status, and add comments.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Invitation Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Auto-approve invitations</h4>
              <p className="text-sm text-gray-600">Automatically approve new team member invitations</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Require email verification</h4>
              <p className="text-sm text-gray-600">New members must verify their email address</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const SecuritySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">API Access</h3>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-900">API Key</h4>
            <button
              onClick={() => setShowApiKey(!showApiKey)}
              className="text-gray-400 hover:text-gray-600"
            >
              {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <div className="bg-gray-50 rounded-md p-3 font-mono text-sm">
            {showApiKey ? 'rmo_live_sk_1234567890abcdef' : '••••••••••••••••••••••••••••••••'}
          </div>
          <p className="text-sm text-gray-600 mt-2">Use this key to authenticate API requests</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Password Policy</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Minimum password length</h4>
              <p className="text-sm text-gray-600">Require passwords to be at least 8 characters</p>
            </div>
            <input
              type="number"
              defaultValue="8"
              min="6"
              max="20"
              className="w-20 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Require special characters</h4>
              <p className="text-sm text-gray-600">Passwords must contain at least one special character</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Password expiration</h4>
              <p className="text-sm text-gray-600">Require password changes every 90 days</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const NotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Task assignments</h4>
              <p className="text-sm text-gray-600">Get notified when tasks are assigned to you</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Due date reminders</h4>
              <p className="text-sm text-gray-600">Get reminded about upcoming task deadlines</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Project updates</h4>
              <p className="text-sm text-gray-600">Get notified about project status changes</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const AppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Theme</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500">
            <div className="w-full h-20 bg-white border border-gray-200 rounded mb-2"></div>
            <h4 className="font-medium text-gray-900">Light</h4>
            <p className="text-sm text-gray-600">Clean and bright interface</p>
          </div>
          <div className="border border-blue-500 rounded-lg p-4 cursor-pointer">
            <div className="w-full h-20 bg-gray-800 border border-gray-600 rounded mb-2"></div>
            <h4 className="font-medium text-gray-900">Dark</h4>
            <p className="text-sm text-gray-600">Easy on the eyes</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500">
            <div className="w-full h-20 bg-gray-100 border border-gray-300 rounded mb-2"></div>
            <h4 className="font-medium text-gray-900">Auto</h4>
            <p className="text-sm text-gray-600">Follows system preference</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Accent Color</h3>
        <div className="flex space-x-3">
          {['blue', 'green', 'purple', 'red', 'yellow', 'indigo'].map((color) => (
            <div
              key={color}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                color === 'blue' ? 'border-blue-500' : 'border-gray-300'
              }`}
              style={{ backgroundColor: `var(--${color}-500)` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );

  const IntegrationsSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Available Integrations</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Slack</h4>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Connected</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Get notifications in your Slack channels</p>
            <button className="text-sm text-blue-600 hover:text-blue-500">Configure</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Google Calendar</h4>
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Not Connected</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Sync project deadlines with your calendar</p>
            <button className="text-sm text-blue-600 hover:text-blue-500">Connect</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">GitHub</h4>
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Not Connected</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Link commits to tasks and projects</p>
            <button className="text-sm text-blue-600 hover:text-blue-500">Connect</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Microsoft Teams</h4>
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Not Connected</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Integrate with your Teams workspace</p>
            <button className="text-sm text-blue-600 hover:text-blue-500">Connect</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general': return <GeneralSettings />;
      case 'team': return <TeamManagement />;
      case 'security': return <SecuritySettings />;
      case 'notifications': return <NotificationSettings />;
      case 'appearance': return <AppearanceSettings />;
      case 'integrations': return <IntegrationsSettings />;
      default: return <GeneralSettings />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your workspace settings and preferences.</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-900 border-blue-500'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent'
                  } w-full flex items-center px-3 py-2 text-sm font-medium rounded-md border`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="bg-white shadow rounded-lg p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};
