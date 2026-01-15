import Header from '../components/layout/Header';
import Sidebar from '../components/dashboard/Sidebar';
import TaskList from '../components/dashboard/TaskList';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50/30 to-accent-50/30">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Banner */}
            <div className="mb-8 p-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl shadow-xl text-white animate-slide-up">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
                  <p className="text-primary-100">Let's accomplish great things today</p>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <p className="text-4xl font-bold">{new Date().getDate()}</p>
                    <p className="text-sm text-primary-100">
                      {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;