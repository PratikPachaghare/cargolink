import React, { useState } from "react";
import { FaEdit, FaSave, FaUserCircle, FaBox, FaTruck, FaKey } from "react-icons/fa";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    address: "Pune, Maharashtra, India",
    role: "Customer",
    image: "",
  });

  const [stats] = useState({
    totalShipments: 23,
    activeDeliveries: 2,
    completedDeliveries: 21,
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditMode(false);
    alert("Profile saved successfully!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, image: imageUrl });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">My Profile</h1>

      {/* Profile Card */}
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-3xl">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          {profile.image ? (
            <img
              src={profile.image}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-500"
            />
          ) : (
            <FaUserCircle className="text-7xl text-gray-400" />
          )}
          <label
            htmlFor="profileImage"
            className="mt-3 text-sm text-blue-600 cursor-pointer hover:underline"
          >
            Change Photo
          </label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {["name", "email", "phone", "address", "role"].map((field) => (
            <div key={field}>
              <label className="block text-gray-600 font-medium capitalize mb-1">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={profile[field]}
                disabled={!editMode || field === "role"}
                onChange={handleChange}
                className={`w-full p-2 border rounded-lg focus:outline-none ${
                  editMode ? "border-blue-400 bg-white" : "bg-gray-100"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Edit / Save Buttons */}
        <div className="flex justify-end">
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              <FaEdit className="mr-2" /> Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <FaSave className="mr-2" /> Save Changes
            </button>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-4xl">
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Total Shipments</p>
            <h3 className="text-2xl font-bold text-blue-700">{stats.totalShipments}</h3>
          </div>
          <FaBox className="text-4xl text-blue-500" />
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Active Deliveries</p>
            <h3 className="text-2xl font-bold text-yellow-600">
              {stats.activeDeliveries}
            </h3>
          </div>
          <FaTruck className="text-4xl text-yellow-500" />
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Completed Deliveries</p>
            <h3 className="text-2xl font-bold text-green-600">
              {stats.completedDeliveries}
            </h3>
          </div>
          <FaTruck className="text-4xl text-green-500" />
        </div>
      </div>

      {/* Change Password Section */}
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-3xl mt-10">
        <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
          <FaKey className="mr-2" /> Change Password
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="password"
            placeholder="Old Password"
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="New Password"
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
