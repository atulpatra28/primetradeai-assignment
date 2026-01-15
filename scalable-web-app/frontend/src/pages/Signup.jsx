import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import SignupForm from '../components/auth/SignupForm';
import ErrorMessage from '../components/common/ErrorMessage';
import Logo from '../components/common/Logo';
import { toast } from 'react-toastify';
import { Rocket } from 'lucide-react';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    try {
      setLoading(true);
      setError('');
      const { confirmPassword, ...signupData } = data;
      await signup(signupData);
      toast.success('Account created successfully! 🎊');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Animated background circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 right-1/3 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md animate-slide-up">
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-glow">
            <Logo className="h-16 w-16" />
          </div>
        </div>
        
        <div className="text-center mb-2">
          <h2 className="text-4xl font-extrabold text-white mb-3 flex items-center justify-center gap-2">
            Start Your Journey
            <Rocket className="h-8 w-8 text-yellow-300 animate-bounce-subtle" />
          </h2>
          <p className="text-lg text-white/90">
            Create your account in seconds
          </p>
        </div>

        <div className="mt-8 glass rounded-2xl shadow-2xl p-8 animate-scale-in">
          {error && <ErrorMessage message={error} />}
          <SignupForm onSubmit={handleSignup} loading={loading} />
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 rounded-full">Already have an account?</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              >
                Sign in instead
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-white/80">
          By signing up, you agree to our Terms of Service
        </p>
      </div>
    </div>
  );
};

export default Signup;