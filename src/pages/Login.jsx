import React, { useState, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const mode = searchParams.get('mode'); // 'signup' or null

  const { setCurrentUser } = useContext(AppContext);

  const [state, setState] = useState(mode === 'signup' ? 'Sign In' : 'Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setError('');

    if (state === 'Sign In') {
      // Registration logic
      try {
        const response = await fetch('http://localhost:3002/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          setCurrentUser(data.user);
          navigate('/'); // 👈 redirect after signup
        } else {
          setError(data.message || 'Registration failed');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        setError('Something went wrong. Please try again.');
      }
    } else {
      // Login logic
      try {
        const response = await fetch('http://localhost:3002/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          setCurrentUser(data);
          navigate('/'); // 👈 redirect after login
        } else {
          setError(data.message || 'Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
        setError('Something went wrong. Please try again.');
      }
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

        {/* Name field only during Sign Up */}
        {state === 'Sign In' && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
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

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm w-full text-center">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-md text-base mt-2"
        >
          {state === 'Sign In' ? 'Create Account' : 'Login'}
        </button>

        {/* Toggle */}
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








//MARCH 19 6:30
// import React, { useState, useContext } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';

// const Login = () => {
//   const [searchParams] = useSearchParams();
//   const mode = searchParams.get('mode'); // 'signup' or null

//   const { setCurrentUser } = useContext(AppContext);

//   const [state, setState] = useState(mode === 'signup' ? 'Sign In' : 'Login');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (state === 'Sign In') {
//       // Registration logic
//       console.log('Creating account with:', { name, email, password });
//       try {
//         const response = await fetch('http://localhost:3002/api/register', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ name, email, password }),
//         });
//         const data = await response.json();
//         if (response.ok) {
//           setCurrentUser(data); // Set the current user in the context
//           console.log('Registration successful:', data);
//         } else {
//           console.error('Registration failed:', data.message);
//         }
//       } catch (error) {
//         console.error('Error during registration:', error);
//       }
//     } else {
//       // Login logic
//       console.log('Logging in with:', { email, password });
//       try {
//         const response = await fetch('http://localhost:3002/api/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email, password }),
//         });
//         const data = await response.json();
//         if (response.ok) {
//           setCurrentUser(data); // Set the current user in the context
//           console.log('Login successful:', data);
//         } else {
//           console.error('Login failed:', data.message);
//         }
//       } catch (error) {
//         console.error('Error during login:', error);
//       }
//     }
//   };

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="min-h-[80vh] flex items-center justify-center"
//     >
//       <div className="flex flex-col gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">
//           {state === 'Sign In' ? 'Create Account' : 'Login'}
//         </p>
//         <p>
//           Please {state === 'Sign In' ? 'sign up' : 'log in'} to book an
//           appointment
//         </p>

//         {/* Name field only shown during sign-up */}
//         {state === 'Sign In' && (
//           <div className="w-full">
//             <p>Full Name</p>
//             <input
//               className="border border-zinc-300 rounded w-full p-2 mt-1"
//               type="text"
//               placeholder="John Doe"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//             />
//           </div>
//         )}

//         {/* Email */}
//         <div className="w-full">
//           <p>Email</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="email"
//             placeholder="you@example.com"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="w-full">
//           <p>Password</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="password"
//             placeholder="••••••••"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//           />
//         </div>

//         {/* Submit button */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white w-full py-2 rounded-md text-base"
//         >
//           {state === 'Sign In' ? 'Create Account' : 'Login'}
//         </button>

//         {/* Toggle link */}
//         {state === 'Sign In' ? (
//           <p>
//             Already have an account?{' '}
//             <span
//               onClick={() => setState('Login')}
//               className="text-blue-600 underline cursor-pointer"
//             >
//               Login here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Don’t have an account?{' '}
//             <span
//               onClick={() => setState('Sign In')}
//               className="text-blue-600 underline cursor-pointer"
//             >
//               Sign up here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Login;



// import React, { useState, useContext } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';

// const Login = () => {
//   const [searchParams] = useSearchParams();
//   const mode = searchParams.get('mode'); // 'signup' or null

//   const { setCurrentUser } = useContext(AppContext);

//   const [state, setState] = useState(mode === 'signup' ? 'Sign In' : 'Login');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (state === 'Sign In') {
//       // Registration logic
//       console.log('Creating account with:', { name, email, password });
//       try {
//         const response = await fetch('http://localhost:3002/api/register', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ name, email, password }),
//         });
//         const data = await response.json();
//         if (response.ok) {
//           setCurrentUser(data); // Set the current user in the context
//           console.log('Registration successful:', data);
//         } else {
//           console.error('Registration failed:', data.message);
//         }
//       } catch (error) {
//         console.error('Error during registration:', error);
//       }
//     } else {
//       // Login logic
//       console.log('Logging in with:', { email, password });
//       try {
//         const response = await fetch('http://localhost:3002/api/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email, password }),
//         });
//         const data = await response.json();
//         if (response.ok) {
//           setCurrentUser(data); // Set the current user in the context
//           console.log('Login successful:', data);
//         } else {
//           console.error('Login failed:', data.message);
//         }
//       } catch (error) {
//         console.error('Error during login:', error);
//       }
//     }
//   };

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="min-h-[80vh] flex items-center justify-center"
//     >
//       <div className="flex flex-col gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">
//           {state === 'Sign In' ? 'Create Account' : 'Login'}
//         </p>
//         <p>
//           Please {state === 'Sign In' ? 'sign up' : 'log in'} to book an
//           appointment
//         </p>

//         {/* Name field only shown during sign-up */}
//         {state === 'Sign In' && (
//           <div className="w-full">
//             <p>Full Name</p>
//             <input
//               className="border border-zinc-300 rounded w-full p-2 mt-1"
//               type="text"
//               placeholder="John Doe"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//             />
//           </div>
//         )}

//         {/* Email */}
//         <div className="w-full">
//           <p>Email</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="email"
//             placeholder="you@example.com"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="w-full">
//           <p>Password</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="password"
//             placeholder="••••••••"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//           />
//         </div>

//         {/* Submit button */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white w-full py-2 rounded-md text-base"
//         >
//           {state === 'Sign In' ? 'Create Account' : 'Login'}
//         </button>

//         {/* Toggle link */}
//         {state === 'Sign In' ? (
//           <p>
//             Already have an account?{' '}
//             <span
//               onClick={() => setState('Login')}
//               className="text-blue-600 underline cursor-pointer"
//             >
//               Login here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Don’t have an account?{' '}
//             <span
//               onClick={() => setState('Sign In')}
//               className="text-blue-600 underline cursor-pointer"
//             >
//               Sign up here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Login;






// import React, { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

// const Login = () => {
//   const [searchParams] = useSearchParams();
//   const mode = searchParams.get('mode'); // 'signup' or null

//   const [state, setState] = useState(mode === 'signup' ? 'Sign In' : 'Login');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (state === 'Sign In') {
//       // Registration logic
//       console.log('Creating account with:', { name, email, password });
//     } else {
//       // Login logic
//       console.log('Logging in with:', { email, password });
//     }
//   };

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="min-h-[80vh] flex items-center justify-center"
//     >
//       <div className="flex flex-col gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">
//           {state === 'Sign In' ? 'Create Account' : 'Login'}
//         </p>
//         <p>
//           Please {state === 'Sign In' ? 'sign up' : 'log in'} to book an
//           appointment
//         </p>

//         {/* Name field only shown during sign-up */}
//         {state === 'Sign In' && (
//           <div className="w-full">
//             <p>Full Name</p>
//             <input
//               className="border border-zinc-300 rounded w-full p-2 mt-1"
//               type="text"
//               placeholder="John Doe"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//             />
//           </div>
//         )}

//         {/* Email */}
//         <div className="w-full">
//           <p>Email</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="email"
//             placeholder="you@example.com"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="w-full">
//           <p>Password</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="password"
//             placeholder="••••••••"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//           />
//         </div>

//         {/* Submit button */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white w-full py-2 rounded-md text-base"
//         >
//           {state === 'Sign In' ? 'Create Account' : 'Login'}
//         </button>

//         {/* Toggle link */}
//         {state === 'Sign In' ? (
//           <p>
//             Already have an account?{' '}
//             <span
//               onClick={() => setState('Login')}
//               className="text-blue-600 underline cursor-pointer"
//             >
//               Login here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Don’t have an account?{' '}
//             <span
//               onClick={() => setState('Sign In')}
//               className="text-blue-600 underline cursor-pointer"
//             >
//               Sign up here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Login;


