import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} from "../redux/user/userSlice";

const Profile = () => {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);

  const [file, setFile] = useState(undefined);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false); // new state for loader
  const [fileUploadError, setfileUploadError] = useState(false); // required!
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteInput, setDeleteInput] = useState("");
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);
  console.log(formData);

  // Cloudinary config
  const cloudName = "mernrealestate"; // 👈 your Cloudinary cloud name
  const uploadPreset = "mern_upload_preset"; // 👈 unsigned upload preset

  useEffect(() => {
    if (file) {
      handleFileUplode(file);
    }
  }, [file]);

  //imgage uplode using cloudinary

  const handleFileUplode = async (file) => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", uploadPreset);

    try {
      setUploading(true);
      setfileUploadError(false);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (data.secure_url) {
        setFormData({ ...formData, avatar: data.secure_url });
      } else {
        throw new Error("Upload failed");
      }
    } catch (err) {
      console.error("Cloudinary Upload Error:", err);
      setfileUploadError(true);
    } finally {
      setUploading(false);
    }
  };

  const handleChnage = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    setShowDeleteConfirm(true); // just show the confirmation box
  };

  const confirmDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess());
      navigate("/");
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    } finally {
      setShowDeleteConfirm(false);
      setDeleteInput("");
    }
  };

  //signout

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (data.success == false) {
        dispatch(signOutUserFailure());
        return;
      }
      dispatch(signOutUserSuccess());
    } catch (error) {
      dispatch(signOutUserFailure());
    }
  };

  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setShowListingsError(true);
        return;
      }

      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };


    const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-20 text-white flex items-center justify-center">
      <div className="w-full max-w-4xl bg-slate-900 shadow-xl rounded-3xl p-8 md:p-12 border border-slate-700">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#d1b989]">My Profile</h1>
          <p className="text-slate-400 mt-2">Manage your account details and listings</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* File input */}
            <input onChange={(e) => setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept="image/*" />

            {/* Avatar */}
            <div className="relative w-32 h-32 shrink-0 group">
              <img
                src={formData.avatar || currentUser?.avatar || "https://via.placeholder.com/100"}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-[#d1b989] shadow-lg cursor-pointer transition-transform group-hover:scale-105"
              />
              <div
                onClick={() => fileRef.current.click()}
                className="absolute bottom-0 right-0 bg-[#d1b989] text-black text-xs px-2 py-1 rounded-full font-semibold shadow-md cursor-pointer hover:bg-[#b79e6a] transition-colors"
              >
                {uploading ? (
                  <span className="flex items-center gap-1">
                    <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Uploading...
                  </span>
                ) : (
                  "Edit"
                )}
              </div>
              {fileUploadError && <div className="absolute -bottom-8 left-0 right-0 text-red-500 text-xs text-center">Error uploading image</div>}

              <div className="text-center mt-5 mb-5">
                <p className="text-red-700 mt-5">{error ? error : ""}</p>
                <p className="text-green-700 mt-5">{updateSuccess ? "User is updated successfully!" : ""}</p>
              </div>
            </div>

            {/* Fields */}
            <div className="w-full space-y-6 mt-5 md:mt-0">
              <div>
                <label className="block mb-1 text-sm text-slate-300">Username</label>
                <input
                  type="text"
                  defaultValue={currentUser?.username || ""}
                  className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80"
                  id="username"
                  onChange={handleChnage}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-slate-300">Email</label>
                <input type="email" defaultValue={currentUser?.email || ""} className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80" id="email" onChange={handleChnage} />
              </div>

              <div>
                <label className="block mb-1 text-sm text-slate-300">Password</label>
                <input type="password" placeholder="••••••••" className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80" id="password" onChange={handleChnage} />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button type="submit" disabled={loading} className="w-full bg-[#d1b989] text-black py-3 rounded-xl font-semibold">
              {loading ? "Loading..." : "Update Profile"}
            </button>

            <Link to="/create-listing" className="w-full text-center bg-cyan-600 text-white py-3 rounded-xl font-semibold">
              Create Listing
            </Link>
          </div>
        </form>

        {showDeleteConfirm && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
            <div className="bg-[#1c1c1e] text-white w-full max-w-md p-6 rounded-2xl shadow-xl relative border border-slate-700">
              {/* Close button */}
              <button onClick={() => setShowDeleteConfirm(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">
                ×
              </button>

              <h2 className="text-2xl font-semibold mb-2">Delete Account</h2>
              <p className="text-sm text-gray-400 mb-4">Are you sure you want to delete your account? This action is irreversible.</p>

              <input
                type="text"
                placeholder="Type 'Delete' to confirm"
                value={deleteInput}
                onChange={(e) => setDeleteInput(e.target.value)}
                className="w-full px-4 py-2 mb-5 bg-[#2c2c2e] text-white rounded-lg border border-slate-600 placeholder-gray-500 focus:outline-none"
              />

              <div className="flex justify-end gap-4">
                <button onClick={() => setShowDeleteConfirm(false)} className="px-5 py-2 rounded-lg border border-slate-600 hover:bg-slate-700 transition">
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (deleteInput === "Delete") confirmDeleteUser();
                  }}
                  disabled={deleteInput !== "Delete"}
                  className={`px-5 py-2 rounded-lg ${
                    deleteInput === "Delete" ? "bg-red-600 hover:bg-red-500 text-white" : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  } transition`}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-slate-700 my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-center">
          <button onClick={() => setShowDeleteConfirm(true)} className="text-red-500 hover:text-red-400 transition">
            Delete Account
          </button>

          <button onClick={handleSignOut} className="hover:text-cyan-400 transition">
            Sign Out
          </button>

          <button onClick={handleShowListings} className="text-green-700 ">
            Show My Listings
          </button>
        </div>
        <p className="text-red-700 mt-5">{showListingsError ? "Error showing listings" : ""}</p>

        {userListings && userListings.length > 0 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-center mt-7 text-2xl font-semibold">Your Listings</h1>
            {userListings.map((listing) => (
              <div key={listing._id} className="border rounded-lg p-3 flex justify-between items-center gap-4">
                <Link to={`/listing/${listing._id}`}>
                  <img src={listing.imageUrls[0]} alt="listing cover" className="h-16 w-16 object-contain" />
                </Link>
                <Link className="text-slate-700 font-semibold  hover:underline truncate flex-1" to={`/listing/${listing._id}`}>
                  <p>{listing.name}</p>
                </Link>

                <div className="flex flex-col item-center">
                  <button onClick={()=>handleListingDelete(listing._id)} className="text-red-700 uppercase">
                    Delete
                  </button>
                  <Link to={`/update-listing/${listing._id}`}>
                    <button className="text-green-700 uppercase">Edit</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
