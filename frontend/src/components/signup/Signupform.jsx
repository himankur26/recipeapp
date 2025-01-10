//import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5689/users/createUser', data);
      alert(response.data.message); // Notify the user about the result
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message); // Show error message
      } else {
        alert('An unexpected error occurred.');
      }
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Phone</label>
          <input
            type="text"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Invalid phone number',
              },
            })}
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Role</label>
          <select {...register('role', { required: 'Role is required' })}>
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && <p style={{ color: 'red' }}>{errors.role.message}</p>}
        </div>
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
