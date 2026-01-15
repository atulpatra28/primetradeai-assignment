import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LoginForm from '../components/auth/LoginForm';
import ErrorMessage from '../components/common/ErrorMessage';
import Logo from '../components/common/Logo';
import { toast } from 'react-toastify';
import { Sparkles } from 'lucide-react';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      setError('');
      await login(data);
      toast.success('Welcome back! 🎉');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Animated background circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md animate-slide-up">
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-glow">
            <Logo className="h-16 w-16" />
          </div>
        </div>
        
        <div className="text-center mb-2">
          <h2 className="text-4xl font-extrabold text-white mb-3 flex items-center justify-center gap-2">
            Welcome Back
            <Sparkles className="h-8 w-8 text-yellow-300 animate-pulse" />
          </h2>
          <p className="text-lg text-white/90">
            Sign in to continue your journey
          </p>
        </div>

        <div className="mt-8 glass rounded-2xl shadow-2xl p-8 animate-scale-in">
          {error && <ErrorMessage message={error} />}
          <LoginForm onSubmit={handleLogin} loading={loading} />
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 rounded-full">New to TaskFlow?</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              >
                Create your account
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-white/80">
          Secure authentication with industry-standard encryption
        </p>
      </div>
    </div>
  );
};

export default Login;