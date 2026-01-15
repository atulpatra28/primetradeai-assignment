import Header from '../components/layout/Header';
import Sidebar from '../components/dashboard/Sidebar';
import TaskList from '../components/dashboard/TaskList';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          <TaskList />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;