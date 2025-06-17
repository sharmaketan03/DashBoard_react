import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

function UserForm({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: 'Support',
    lastName: 'Admin',
    email: 'support@test.com',
    phone: '123244444',
    password: '',
    role: 'Support Admin',
    status: 'Active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[600px] p-6 relative ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Edit User</h2>
          <button onClick={onClose}><RxCross2 size={24} /></button>
        </div>

        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role Type</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option>Support Admin</option>
              <option>Manager</option>
              <option>Technician</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="flex justify-start mt-4 gap-4">
            <button type="submit" className="bg-sky-500 text-white px-6 py-2 rounded hover:bg-sky-600">
              Update
            </button>
            <button type="button" onClick={onClose} className="text-gray-600 hover:underline">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
