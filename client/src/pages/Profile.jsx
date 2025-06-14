// implement cloudinary

// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { useRef, useState } from "react";

// const Profile = () => {
//   const fileRef = useRef(null);
//   const { currentUser } = useSelector((state) => state.user);
//   const [avatarUrl, setAvatarUrl] = useState(currentUser.avatar);
//   const [uploading, setUploading] = useState(false);

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "mern_upload_preset"); // Your preset name

//     try {
//       const res = await fetch("https://api.cloudinary.com/v1_1/mernrealestate/image/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       setAvatarUrl(data.secure_url); // Set uploaded image URL
//       console.log("Uploaded image URL:", data.secure_url);
//     } catch (err) {
//       console.error("Upload failed", err);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // 👉 You can now send `avatarUrl` along with other updated profile info to your backend
//     console.log("Profile updated with:", avatarUrl);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white flex items-center justify-center">
//       <div className="w-full max-w-4xl bg-slate-900 shadow-xl rounded-3xl p-8 md:p-12 border border-slate-700">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold text-[#d1b989]">My Profile</h1>
//           <p className="text-slate-400 mt-2">Manage your account details and listings</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-10">
//           <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
//             <input type="file" ref={fileRef} hidden accept="image/*" onChange={handleFileChange} />

//             <div
//               onClick={() => fileRef.current.click()}
//               className="relative w-32 h-32 shrink-0 cursor-pointer"
//             >
//               <img
//                 src={avatarUrl}
//                 alt="Profile"
//                 className="w-full h-full object-cover rounded-full border-4 border-[#d1b989] shadow-lg"
//               />
//               <div className="absolute bottom-0 right-0 bg-[#d1b989] text-black text-xs px-2 py-1 rounded-full font-semibold shadow-md">
//                 {uploading ? "Uploading..." : "Edit"}
//               </div>
//             </div>

//             <div className="w-full space-y-6">
//               <div>
//                 <label className="block mb-1 text-sm text-slate-300">Username</label>
//                 <input
//                   type="text"
//                   defaultValue={currentUser?.username || ""}
//                   className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//                   id="username"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm text-slate-300">Email</label>
//                 <input
//                   type="email"
//                   defaultValue={currentUser?.email || ""}
//                   className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//                   id="email"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm text-slate-300">Password</label>
//                 <input
//                   type="password"
//                   placeholder="••••••••"
//                   className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//                   id="password"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <button
//               type="submit"
//               className="w-full bg-[#d1b989] hover:bg-[#b79e6a] text-black font-semibold py-3 rounded-xl shadow-md transition"
//               disabled={uploading}
//             >
//               {uploading ? "Updating..." : "Update Profile"}
//             </button>
//             <Link
//               to="/create-listing"
//               className="w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
//             >
//               Create Listing
//             </Link>
//           </div>
//         </form>

//         <div className="border-t border-slate-700 my-8" />

//         <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-center">
//           <button className="text-red-500 hover:text-red-400 transition">Delete Account</button>
//           <button className="hover:text-cyan-400 transition">Sign Out</button>
//           <Link to="/my-listings" className="text-cyan-400 hover:text-cyan-300 transition">
//             Show My Listings
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

//--------------------------------------------------

// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { useRef } from "react";

// const Profile = () => {
//   const fileRef = useRef(null);
//   const { currentUser } = useSelector((state) => state.user);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your update logic here
//     console.log("Profile updated");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white flex items-center justify-center">
//       <div className="w-full max-w-4xl bg-slate-900 shadow-xl rounded-3xl p-8 md:p-12 border border-slate-700">
//         {/* Top Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold text-[#d1b989]">My Profile</h1>
//           <p className="text-slate-400 mt-2">Manage your account details and listings</p>
//         </div>

//         {/* Start Form */}
//         <form onSubmit={handleSubmit} className="space-y-10">
//           {/* Profile Avatar + Fields */}
//           <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
//             <input type="file" ref={fileRef} hidden accept="image/*" />
//             {/* Avatar */}
//             <div onClick={() => fileRef.current.click()} className="relative w-32 h-32 shrink-0">
//               <img src={currentUser.avatar} alt="Profile" className="w-full h-full object-cover rounded-full border-4 border-[#d1b989] shadow-lg cursor-pointer" />
//               <div className="absolute bottom-0 right-0 bg-[#d1b989] text-black text-xs px-2 py-1 rounded-full font-semibold shadow-md cursor-pointer">Edit</div>
//             </div>

//             {/* Fields */}
//             <div className="w-full space-y-6">
//               <div>
//                 <label className="block mb-1 text-sm text-slate-300">Username</label>
//                 <input
//                   type="text"
//                   defaultValue={currentUser?.username || ""}
//                   className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//                   id="username"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm text-slate-300">Email</label>
//                 <input
//                   type="email"
//                   defaultValue={currentUser?.email || ""}
//                   className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//                   id="email"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm text-slate-300">Password</label>
//                 <input
//                   type="password"
//                   placeholder="••••••••"
//                   className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//                   id="password"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <button type="submit" className="w-full bg-[#d1b989] hover:bg-[#b79e6a] text-black font-semibold py-3 rounded-xl shadow-md transition">
//               Update Profile
//             </button>
//             <Link to="/create-listing" className="w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-xl shadow-md transition">
//               Create Listing
//             </Link>
//           </div>
//         </form>

//         {/* Divider */}
//         <div className="border-t border-slate-700 my-8" />

//         {/* Bottom Actions */}
//         <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-center">
//           <button className="text-red-500 hover:text-red-400 transition">Delete Account</button>
//           <button className="hover:text-cyan-400 transition">Sign Out</button>
//           <Link to="/my-listings" className="text-cyan-400 hover:text-cyan-300 transition">
//             Show My Listings
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

///////////-----------------------------------

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { useRef } from "react";
// import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
// import { app } from "../firebase";

// const Profile = () => {
//   const fileRef = useRef(null);
//   const { currentUser } = useSelector((state) => state.user);

//   const [file, setFile] = useState(undefined);
//   const [filePerc, setFilePerc] = useState(0);
//   const [fileUploadError, setfileUploadError] = useState(false);
//   const [formData, setFormData] = useState({});

//   // console.log(formData);
//   // console.log(filePerc)
//   // console.log(file)

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your update logic here
//     console.log("Profile updated");
//   };

//   //firebase Storage
//   //allow read;
//   //allow write if
//   //request.resource.size < 2 * 1024 * 1024 &&
//   // request.resource.contentType.matches('image/.*)

//   useEffect(() => {
//     if (file) {
//       handleFileUplode(file);
//     }
//   }, [file]);

//   //for handaling file
//   const handleFileUplode = (file) => {
//     const storage = getStorage(app);
//     const fileName = new Date().getTime() + file.name; // for unique file name
//     const storageRef = ref(storage, fileName);
//     const uploadTask = uploadBytesResumable(storageRef, file);
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         // console.log('Upload is' + progress + '% Done')
//         setFilePerc(Math.round(progress));
//       },
//       (error) => {
//         setfileUploadError(true);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           setFormData({ ...formData, avatar: downloadURL });
//         });
//       }
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white flex items-center justify-center">
//       <div className="w-full max-w-4xl bg-slate-900 shadow-xl rounded-3xl p-8 md:p-12 border border-slate-700">
//         {/* Top Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold text-[#d1b989]">My Profile</h1>
//           <p className="text-slate-400 mt-2">Manage your account details and listings</p>
//         </div>

//         {/* Start Form */}
//         <form onSubmit={handleSubmit} className="space-y-10">
//           {/* Profile Avatar + Fields */}
//           <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
//             {/* Avatar */}
//             <div className="relative w-32 h-32 shrink-0">
//               <input onChange={(e) => setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept="image/*" />

//               <img
//                 onClick={() => fileRef.current.click()}
//                 src={formData.avatar || currentUser?.avatar || "https://via.placeholder.com/100"}
//                 alt="Profile"
//                 className="w-full h-full object-cover rounded-full border-4 border-[#d1b989] shadow-lg cursor-pointer"
//               />
//               <div className="absolute bottom-0 right-0 bg-[#d1b989] text-black text-xs px-2 py-1 rounded-full font-semibold shadow-md cursor-pointer">Edit</div>

//             </div>
//             <p className="text-sm self-center">
//               {fileUploadError ? (
//                 <span className="text-red-700">Error Image upload (image must be less than 2 mb)</span>
//               ) : filePerc > 0 && filePerc < 100 ? (
//                 <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
//               ) : filePerc === 100 ? (
//                 <span className="text-green-700">Image successfully uploaded!</span>
//               ) : (
//                 ""
//               )}
//             </p>

//             {/* Fields */}
//             <div className="w-full space-y-6">
//               <div>
//                 <label className="block mb-1 text-sm text-slate-300">Username</label>
//                 <input
//                   type="text"
//                   defaultValue={currentUser?.username || ""}
//                   className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//                   id="username"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm text-slate-300">Email</label>
//                 <input
//                   type="email"
//                   defaultValue={currentUser?.email || ""}
//                   className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//                   id="email"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm text-slate-300">Password</label>
//                 <input
//                   type="password"
//                   placeholder="••••••••"
//                   className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//                   id="password"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <button type="submit" className="w-full bg-[#d1b989] hover:bg-[#b79e6a] text-black font-semibold py-3 rounded-xl shadow-md transition">
//               Update Profile
//             </button>
//             <Link to="/create-listing" className="w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-xl shadow-md transition">
//               Create Listing
//             </Link>
//           </div>
//         </form>

//         {/* Divider */}
//         <div className="border-t border-slate-700 my-8" />

//         {/* Bottom Actions */}
//         <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-center">
//           <button className="text-red-500 hover:text-red-400 transition">Delete Account</button>
//           <button className="hover:text-cyan-400 transition">Sign Out</button>
//           <Link to="/my-listings" className="text-cyan-400 hover:text-cyan-300 transition">
//             Show My Listings
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import  { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const fileRef = useRef(null);
const { currentUser } = useSelector((state) => state.user);

const [file, setFile] = useState(undefined);
const [formData, setFormData] = useState({});
const [uploading, setUploading] = useState(false); // new state for loader
const [fileUploadError, setfileUploadError] = useState(false); // required!

  // Cloudinary config
  const cloudName = "mernrealestate"; // 👈 your Cloudinary cloud name
  const uploadPreset = "mern_upload_preset"; // 👈 unsigned upload preset

  useEffect(() => {
    if (file) {
      handleFileUplode(file);
    }
  }, [file]);

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


  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔁 Send `formData.avatar` and other info to backend here
    console.log("Update payload:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white flex items-center justify-center">
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
            <div className="relative w-32 h-32 shrink-0">
              <img
                src={formData.avatar || currentUser?.avatar || "https://via.placeholder.com/100"}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-[#d1b989] shadow-lg cursor-pointer"
              />
              <div
                onClick={() => fileRef.current.click()}
                className="absolute bottom-0 right-0 bg-[#d1b989] text-black text-xs px-2 py-1 rounded-full font-semibold shadow-md cursor-pointer"
              >
                Edit
              </div>
            </div>

            {/* Upload progress */}
            <p className="text-sm self-center">
  {fileUploadError ? (
    <span className="text-red-700">Error uploading image</span>
  ) : uploading ? (
    <span className="text-slate-400">Uploading...</span>
  ) : (
    ""
  )}
</p>

            {/* Fields */}
            <div className="w-full space-y-6">
              <div>
                <label className="block mb-1 text-sm text-slate-300">Username</label>
                <input type="text" defaultValue={currentUser?.username || ""} className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80" id="username" />
              </div>

              <div>
                <label className="block mb-1 text-sm text-slate-300">Email</label>
                <input type="email" defaultValue={currentUser?.email || ""} className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80" id="email" />
              </div>

              <div>
                <label className="block mb-1 text-sm text-slate-300">Password</label>
                <input type="password" placeholder="••••••••" className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80" id="password" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button type="submit" className="w-full bg-[#d1b989] text-black py-3 rounded-xl font-semibold">
              Update Profile
            </button>
            <Link to="/create-listing" className="w-full text-center bg-cyan-600 text-white py-3 rounded-xl font-semibold">
              Create Listing
            </Link>
          </div>
        </form>

        {/* Footer */}
        <div className="border-t border-slate-700 my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-center">
          <button className="text-red-500 hover:text-red-400 transition">Delete Account</button>
          <button className="hover:text-cyan-400 transition">Sign Out</button>
          <Link to="/my-listings" className="text-cyan-400 hover:text-cyan-300 transition">
            Show My Listings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
