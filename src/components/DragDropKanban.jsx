import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Plus, MoreHorizontal, Calendar, User } from 'lucide-react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-3 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2 flex-1">
          <button
            {...attributes}
            {...listeners}
            className="text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing"
          >
            <GripVertical className="h-4 w-4" />
          </button>
          <h4 className="font-medium text-gray-900 text-sm">{task.title}</h4>
        </div>
        <div className="flex items-center space-x-1">
          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-3">{task.description}</p>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            <span>{task.assignee}</span>
          </div>
        </div>
        <div className="flex space-x-1">
          <button
            onClick={() => onEdit(task)}
            className="text-blue-600 hover:text-blue-800"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const TaskColumn = ({ title, tasks, onAddTask, onEditTask, onDeleteTask, status }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      // Handle task reordering within the same column
      const oldIndex = tasks.findIndex(task => task.id === active.id);
      const newIndex = tasks.findIndex(task => task.id === over.id);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        const newTasks = arrayMove(tasks, oldIndex, newIndex);
        // Here you would typically update the state or make an API call
        console.log('Tasks reordered:', newTasks);
      }
    }
  };

  return (
    <div className="flex-shrink-0 w-80">
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <div className="flex items-center space-x-2">
            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
              {tasks.length}
            </span>
            <button
              onClick={() => onAddTask(status)}
              className="text-gray-400 hover:text-gray-600"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={tasks.map(task => task.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-3">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={onEditTask}
                  onDelete={onDeleteTask}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
        
        {tasks.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p className="text-sm">No tasks in this column</p>
            <button
              onClick={() => onAddTask(status)}
              className="text-blue-600 hover:text-blue-500 text-sm mt-2"
            >
              Add a task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const DragDropKanban = ({ projectId, onTaskUpdate }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Design mockups',
      description: 'Create initial design mockups for the homepage',
      status: 'To Do',
      priority: 'High',
      dueDate: '2024-01-15',
      assignee: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'Frontend development',
      description: 'Implement the homepage using React components',
      status: 'In Progress',
      priority: 'High',
      dueDate: '2024-01-20',
      assignee: 'Mike Chen'
    },
    {
      id: 3,
      title: 'Backend integration',
      description: 'Connect frontend with backend APIs',
      status: 'In Progress',
      priority: 'Medium',
      dueDate: '2024-01-25',
      assignee: 'Alex Rodriguez'
    },
    {
      id: 4,
      title: 'Testing',
      description: 'Write and execute test cases',
      status: 'Review',
      priority: 'Medium',
      dueDate: '2024-01-30',
      assignee: 'Emma Wilson'
    },
    {
      id: 5,
      title: 'Deployment',
      description: 'Deploy the application to production',
      status: 'Completed',
      priority: 'Low',
      dueDate: '2024-02-01',
      assignee: 'David Kim'
    }
  ]);

  const columns = [
    { id: 'todo', title: 'To Do', status: 'To Do' },
    { id: 'in-progress', title: 'In Progress', status: 'In Progress' },
    { id: 'review', title: 'Review', status: 'Review' },
    { id: 'completed', title: 'Completed', status: 'Completed' }
  ];

  const handleAddTask = (status) => {
    const newTask = {
      id: Date.now(),
      title: 'New Task',
      description: 'Task description',
      status: status,
      priority: 'Medium',
      dueDate: new Date().toISOString().split('T')[0],
      assignee: 'Unassigned'
    };
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (task) => {
    // In a real app, this would open a modal or navigate to an edit page
    console.log('Edit task:', task);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleTaskMove = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="flex space-x-6 overflow-x-auto pb-4">
      {columns.map((column) => {
        const columnTasks = tasks.filter(task => task.status === column.status);
        
        return (
          <TaskColumn
            key={column.id}
            title={column.title}
            tasks={columnTasks}
            status={column.status}
            onAddTask={handleAddTask}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
          />
        );
      })}
    </div>
  );
};
