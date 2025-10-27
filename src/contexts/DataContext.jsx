import { createContext, useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// Mock API functions - replace with actual API calls
const mockApi = {
  // Projects API
  getProjects: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
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
      }
    ];
  },

  createProject: async (projectData) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      id: Date.now(),
      ...projectData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  },

  updateProject: async ({ id, ...projectData }) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      id,
      ...projectData,
      updatedAt: new Date().toISOString()
    };
  },

  deleteProject: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { success: true };
  },

  // Tasks API
  getTasks: async (projectId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        id: 1,
        title: 'Design mockups',
        description: 'Create initial design mockups for the homepage',
        status: 'To Do',
        priority: 'High',
        dueDate: '2024-01-15',
        assignee: 'Sarah Johnson',
        projectId: projectId || 1
      },
      {
        id: 2,
        title: 'Frontend development',
        description: 'Implement the homepage using React components',
        status: 'In Progress',
        priority: 'High',
        dueDate: '2024-01-20',
        assignee: 'Mike Chen',
        projectId: projectId || 1
      }
    ];
  },

  createTask: async (taskData) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      id: Date.now(),
      ...taskData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  },

  updateTask: async ({ id, ...taskData }) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      id,
      ...taskData,
      updatedAt: new Date().toISOString()
    };
  },

  deleteTask: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { success: true };
  },

  // Team API
  getTeamMembers: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
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
      }
    ];
  },

  createTeamMember: async (memberData) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      id: Date.now(),
      ...memberData,
      joinDate: new Date().toISOString(),
      lastActive: new Date().toISOString()
    };
  },

  updateTeamMember: async ({ id, ...memberData }) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      id,
      ...memberData,
      updatedAt: new Date().toISOString()
    };
  },

  deleteTeamMember: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { success: true };
  },

  // Dashboard API
  getDashboardStats: async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return {
      totalProjects: 12,
      activeTasks: 45,
      completedTasks: 128,
      teamMembers: 8,
      overdueTasks: 3,
      thisWeekTasks: 12
    };
  },

  getRecentActivity: async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return [
      {
        id: 1,
        action: 'Task completed',
        user: 'Sarah Johnson',
        details: 'Review design mockups',
        timestamp: '2024-01-12T10:30:00Z',
        type: 'task_completed'
      },
      {
        id: 2,
        action: 'Project created',
        user: 'Mike Chen',
        details: 'Database Migration',
        timestamp: '2024-01-12T09:15:00Z',
        type: 'project_created'
      }
    ];
  }
};

// Custom hooks for data management
export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: mockApi.getProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: mockApi.createProject,
    onSuccess: (newProject) => {
      queryClient.setQueryData(['projects'], (old) => [...(old || []), newProject]);
      toast.success('Project created successfully!');
    },
    onError: (error) => {
      toast.error('Failed to create project');
      console.error('Create project error:', error);
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: mockApi.updateProject,
    onSuccess: (updatedProject) => {
      queryClient.setQueryData(['projects'], (old) =>
        old?.map(project => 
          project.id === updatedProject.id ? updatedProject : project
        )
      );
      toast.success('Project updated successfully!');
    },
    onError: (error) => {
      toast.error('Failed to update project');
      console.error('Update project error:', error);
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: mockApi.deleteProject,
    onSuccess: (_, projectId) => {
      queryClient.setQueryData(['projects'], (old) =>
        old?.filter(project => project.id !== projectId)
      );
      toast.success('Project deleted successfully!');
    },
    onError: (error) => {
      toast.error('Failed to delete project');
      console.error('Delete project error:', error);
    },
  });
};

export const useTasks = (projectId) => {
  return useQuery({
    queryKey: ['tasks', projectId],
    queryFn: () => mockApi.getTasks(projectId),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: mockApi.createTask,
    onSuccess: (newTask) => {
      queryClient.setQueryData(['tasks', newTask.projectId], (old) => [...(old || []), newTask]);
      toast.success('Task created successfully!');
    },
    onError: (error) => {
      toast.error('Failed to create task');
      console.error('Create task error:', error);
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: mockApi.updateTask,
    onSuccess: (updatedTask) => {
      queryClient.setQueryData(['tasks', updatedTask.projectId], (old) =>
        old?.map(task => 
          task.id === updatedTask.id ? updatedTask : task
        )
      );
      toast.success('Task updated successfully!');
    },
    onError: (error) => {
      toast.error('Failed to update task');
      console.error('Update task error:', error);
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: mockApi.deleteTask,
    onSuccess: (_, taskId) => {
      // Update all task queries
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Task deleted successfully!');
    },
    onError: (error) => {
      toast.error('Failed to delete task');
      console.error('Delete task error:', error);
    },
  });
};

export const useTeamMembers = () => {
  return useQuery({
    queryKey: ['teamMembers'],
    queryFn: mockApi.getTeamMembers,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useCreateTeamMember = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: mockApi.createTeamMember,
    onSuccess: (newMember) => {
      queryClient.setQueryData(['teamMembers'], (old) => [...(old || []), newMember]);
      toast.success('Team member added successfully!');
    },
    onError: (error) => {
      toast.error('Failed to add team member');
      console.error('Create team member error:', error);
    },
  });
};

export const useUpdateTeamMember = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: mockApi.updateTeamMember,
    onSuccess: (updatedMember) => {
      queryClient.setQueryData(['teamMembers'], (old) =>
        old?.map(member => 
          member.id === updatedMember.id ? updatedMember : member
        )
      );
      toast.success('Team member updated successfully!');
    },
    onError: (error) => {
      toast.error('Failed to update team member');
      console.error('Update team member error:', error);
    },
  });
};

export const useDeleteTeamMember = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: mockApi.deleteTeamMember,
    onSuccess: (_, memberId) => {
      queryClient.setQueryData(['teamMembers'], (old) =>
        old?.filter(member => member.id !== memberId)
      );
      toast.success('Team member removed successfully!');
    },
    onError: (error) => {
      toast.error('Failed to remove team member');
      console.error('Delete team member error:', error);
    },
  });
};

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ['dashboardStats'],
    queryFn: mockApi.getDashboardStats,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

export const useRecentActivity = () => {
  return useQuery({
    queryKey: ['recentActivity'],
    queryFn: mockApi.getRecentActivity,
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

export const DataProvider = ({ children }) => {
  const value = {
    // Projects
    useProjects,
    useCreateProject,
    useUpdateProject,
    useDeleteProject,
    
    // Tasks
    useTasks,
    useCreateTask,
    useUpdateTask,
    useDeleteTask,
    
    // Team
    useTeamMembers,
    useCreateTeamMember,
    useUpdateTeamMember,
    useDeleteTeamMember,
    
    // Dashboard
    useDashboardStats,
    useRecentActivity,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
