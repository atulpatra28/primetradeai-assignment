import { Loader2 } from 'lucide-react';

const Loader = ({ size = 'default', fullScreen = false }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const loader = (
    <Loader2 className={`${sizeClasses[size]} animate-spin text-primary-600`} />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
        {loader}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center p-4">
      {loader}
    </div>
  );
};

export default Loader;