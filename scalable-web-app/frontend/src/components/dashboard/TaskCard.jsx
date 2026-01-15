import { Edit, Trash2, Clock, Calendar } from 'lucide-react';
import { STATUS_COLORS, PRIORITY_COLORS } from '../../utils/constants';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getPriorityGradient = (priority) => {
    const gradients = {
      low: 'from-gray-400 to-gray-500',
      medium: 'from-orange-400 to-orange-500',
      high: 'from-red-500 to-red-600'
    };
    return gradients[priority] || gradients.medium;
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-card hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden animate-scale-in">
      {/* Decorative gradient bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getPriorityGradient(task.priority)}`}></div>
      
      {/* Priority indicator */}
      <div className="absolute top-4 right-4">
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getPriorityGradient(task.priority)} animate-pulse`}></div>
      </div>

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 flex-1 mr-2 group-hover:text-primary-600 transition-colors">
          {task.title}
        </h3>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(task)}
            className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300 transform hover:scale-110"
            title="Edit task"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300 transform hover:scale-110"
            title="Delete task"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {task.description && (
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {task.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${STATUS_COLORS[task.status]} transform hover:scale-105 transition-transform`}>
          {task.status.replace('-', ' ')}
        </span>
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${PRIORITY_COLORS[task.priority]} transform hover:scale-105 transition-transform`}>
          {task.priority} priority
        </span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center text-xs text-gray-500 gap-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{formatDate(task.createdAt)}</span>
          </div>
        </div>
        
        {/* Completion indicator for completed tasks */}
        {task.status === 'completed' && (
          <div className="flex items-center gap-1 text-xs font-semibold text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Done
          </div>
        )}
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>
    </div>
  );
};

export default TaskCard;