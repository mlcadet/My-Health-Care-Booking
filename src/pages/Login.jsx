import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Login = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode'); // 'signup' or null

  const [state, setState] = useState(mode === 'signup' ? 'Sign In' : 'Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (state === 'Sign In') {
      // Registration logic
      console.log('Creating account with:', { name, email, password });
    } else {
      // Login logic
      console.log('Logging in with:', { email, password });
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center justify-center"
    >
      <div className="flex flex-col gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === 'Sign In' ? 'Create Account' : 'Login'}
        </p>
        <p>
          Please {state === 'Sign In' ? 'sign up' : 'log in'} to book an
          appointment
        </p>

        {/* Name field only shown during sign-up */}
        {state === 'Sign In' && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}

        {/* Email */}
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        {/* Password */}
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-md text-base"
        >
          {state === 'Sign In' ? 'Create Account' : 'Login'}
        </button>

        {/* Toggle link */}
        {state === 'Sign In' ? (
          <p>
            Already have an account?{' '}
            <span
              onClick={() => setState('Login')}
              className="text-blue-600 underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Don’t have an account?{' '}
            <span
              onClick={() => setState('Sign In')}
              className="text-blue-600 underline cursor-pointer"
            >
              Sign up here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;


