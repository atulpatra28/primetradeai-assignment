import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-2 p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-lg" role="alert">
      <AlertCircle className="w-5 h-5 flex-shrink-0" />
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;