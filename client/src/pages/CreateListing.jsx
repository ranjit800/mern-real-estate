// import { useState } from "react";

// const CreateListing = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     address: "",
//     type: "rent",
//     parking: false,
//     furnished: false,
//     offer: false,
//     bedrooms: 1,
//     bathrooms: 1,
//     regularPrice: 0,
//     discountPrice: 0,
//     imageUrls: [],
//   });

//   const handleChange = (e) => {
//     const { id, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [id]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleTypeChange = (value) => {
//     setFormData((prev) => ({ ...prev, type: value }));
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-10 text-white bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8">Create a Listing</h1>

//       <form className="bg-slate-900 border border-slate-700 p-6 rounded-xl shadow-md space-y-6">
//         <div>
//           <label className="block text-slate-300 mb-1">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full bg-slate-700 bg-opacity-80 border-none rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//             placeholder="Listing name"
//           />
//         </div>

//         <div>
//           <label className="block text-slate-300 mb-1">Description</label>
//           <textarea
//             id="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full bg-slate-700 bg-opacity-80 border-none rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//             rows="3"
//             placeholder="Description"
//           ></textarea>
//         </div>

//         <div>
//           <label className="block text-slate-300 mb-1">Address</label>
//           <input
//             type="text"
//             id="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full bg-slate-700 bg-opacity-80 border-none rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//             placeholder="Address"
//           />
//         </div>

//         <div className="flex flex-wrap gap-6 text-slate-300">
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={formData.type === "sell"}
//               onChange={() => handleTypeChange("sell")}
//             />
//             Sell
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={formData.type === "rent"}
//               onChange={() => handleTypeChange("rent")}
//             />
//             Rent
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               id="parking"
//               checked={formData.parking}
//               onChange={handleChange}
//             />
//             Parking spot
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               id="furnished"
//               checked={formData.furnished}
//               onChange={handleChange}
//             />
//             Furnished
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               id="offer"
//               checked={formData.offer}
//               onChange={handleChange}
//             />
//             Offer
//           </label>
//         </div>

//         <div className="flex gap-6">
//           <div>
//             <label className="block text-slate-300 mb-1">Beds</label>
//             <input
//               type="number"
//               id="bedrooms"
//               min="1"
//               value={formData.bedrooms}
//               onChange={handleChange}
//               className="w-20 bg-slate-700 bg-opacity-80 border-none rounded-lg px-3 py-2 text-white text-center focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//             />
//           </div>
//           <div>
//             <label className="block text-slate-300 mb-1">Baths</label>
//             <input
//               type="number"
//               id="bathrooms"
//               min="1"
//               value={formData.bathrooms}
//               onChange={handleChange}
//               className="w-20 bg-slate-700 bg-opacity-80 border-none rounded-lg px-3 py-2 text-white text-center focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//             />
//           </div>
//         </div>

//         <div className="flex gap-6">
//           <div className="w-full">
//             <label className="block text-slate-300 mb-1">Regular price ($/month)</label>
//             <input
//               type="number"
//               id="regularPrice"
//               value={formData.regularPrice}
//               onChange={handleChange}
//               className="w-full bg-slate-700 bg-opacity-80 border-none rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//             />
//           </div>
//           <div className="w-full">
//             <label className="block text-slate-300 mb-1">Discount price ($/month)</label>
//             <input
//               type="number"
//               id="discountPrice"
//               value={formData.discountPrice}
//               onChange={handleChange}
//               className="w-full bg-slate-700 bg-opacity-80 border-none rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-slate-300 mb-2">Images <span className="text-slate-500">(max 6)</span></label>
//           <div className="flex items-center gap-4">
//             <input type="file" multiple accept="image/*" className="text-slate-300" />
//             <button type="button" className="px-4 py-2 border border-green-600 rounded-lg text-sm bg-green-600 text-white hover:bg-green-700 transition">
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="pt-4">
//           <button
//             type="submit"
//             className="w-full bg-[#d1b989] hover:bg-[#b79e6a] text-black font-semibold py-3 rounded-xl shadow-md transition"
//           >
//             Create Listing
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateListing;

// import { useState } from "react";
// import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
// import { app } from "../firebase";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// export default function CreateListing() {
//   const { currentUser } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const [files, setFiles] = useState([]);
//   const [formData, setFormData] = useState({
//     imageUrls: [],
//     name: "",
//     description: "",
//     address: "",
//     type: "rent",
//     bedrooms: 1,
//     bathrooms: 1,
//     regularPrice: 50,
//     discountPrice: 0,
//     offer: false,
//     parking: false,
//     furnished: false,
//   });

//   const [imageUploadError, setImageUploadError] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleImageSubmit = (e) => {
//     if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
//       setUploading(true);
//       setImageUploadError(false);
//       const promises = [];
//       for (let i = 0; i < files.length; i++) {
//         promises.push(storeImage(files[i]));
//       }
//       Promise.all(promises)
//         .then((urls) => {
//           setFormData((prev) => ({
//             ...prev,
//             imageUrls: prev.imageUrls.concat(urls),
//           }));
//           setUploading(false);
//         })
//         .catch(() => {
//           setImageUploadError("Image upload failed (2MB max per image)");
//           setUploading(false);
//         });
//     } else {
//       setImageUploadError("You can only upload 6 images per listing");
//     }
//   };

//   const storeImage = async (file) => {
//     return new Promise((resolve, reject) => {
//       const storage = getStorage(app);
//       const fileName = new Date().getTime() + file.name;
//       const storageRef = ref(storage, fileName);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         "state_changed",
//         null,
//         (error) => reject(error),
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => resolve(downloadURL));
//         }
//       );
//     });
//   };

//   const handleRemoveImage = (index) => {
//     setFormData({
//       ...formData,
//       imageUrls: formData.imageUrls.filter((_, i) => i !== index),
//     });
//   };

//   const handleChange = (e) => {
//     const { id, type, value, checked } = e.target;
//     if (id === "sale" || id === "rent") {
//       setFormData((prev) => ({ ...prev, type: id }));
//     } else if (["parking", "furnished", "offer"].includes(id)) {
//       setFormData((prev) => ({ ...prev, [id]: checked }));
//     } else {
//       setFormData((prev) => ({ ...prev, [id]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.imageUrls.length < 1) return setError("You must upload at least one image");
//       if (+formData.regularPrice < +formData.discountPrice) return setError("Discount price must be lower than regular price");

//       setLoading(true);
//       setError(false);

//       const res = await fetch("/api/listing/create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, userRef: currentUser._id }),
//       });

//       const data = await res.json();
//       setLoading(false);
//       if (data.success === false) return setError(data.message);

//       navigate(`/listing/${data._id}`);
//     } catch (error) {
//       setLoading(false);
//       setError(error.message);
//     }
//   };

//   return (
//     <main className="p-6 max-w-5xl mx-auto text-white">
//       <div className="bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-700">
//         <h1 className="text-3xl font-bold text-center text-[#d1b989] mb-8">Create a Listing</h1>
//         <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-10">
//           {/* Left Column */}
//           <div className="flex-1 space-y-6">
//             <input
//               type="text"
//               placeholder="Name"
//               id="name"
//               minLength="10"
//               maxLength="62"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 bg-slate-800 text-white border border-slate-700 rounded-lg"
//             />
//             <textarea
//               placeholder="Description"
//               id="description"
//               required
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full p-3 bg-slate-800 text-white border border-slate-700 rounded-lg"
//             />
//             <input
//               type="text"
//               placeholder="Address"
//               id="address"
//               required
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full p-3 bg-slate-800 text-white border border-slate-700 rounded-lg"
//             />

//             <div className="flex flex-wrap gap-5">
//               {["sale", "rent", "parking", "furnished", "offer"].map((opt) => (
//                 <label key={opt} className="flex items-center gap-2 text-sm">
//                   <input
//                     type="checkbox"
//                     id={opt}
//                     checked={opt === "sale" || opt === "rent" ? formData.type === opt : formData[opt]}
//                     onChange={handleChange}
//                     className="accent-[#d1b989]"
//                   />
//                   {opt.charAt(0).toUpperCase() + opt.slice(1)}
//                 </label>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {["bedrooms", "bathrooms", "regularPrice"].map((field) => (
//                 <div key={field} className="flex flex-col">
//                   <label className="text-sm text-slate-400 capitalize">{field}</label>
//                   <input
//                     type="number"
//                     id={field}
//                     min="1"
//                     required
//                     value={formData[field]}
//                     onChange={handleChange}
//                     className="p-3 bg-slate-800 text-white border border-slate-700 rounded-lg"
//                   />
//                 </div>
//               ))}
//               {formData.offer && (
//                 <div className="flex flex-col">
//                   <label className="text-sm text-slate-400">Discount Price</label>
//                   <input
//                     type="number"
//                     id="discountPrice"
//                     min="0"
//                     value={formData.discountPrice}
//                     onChange={handleChange}
//                     className="p-3 bg-slate-800 text-white border border-slate-700 rounded-lg"
//                   />
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Column (Image Upload) */}
//           <div className="flex-1 space-y-4">
//             <label className="text-sm font-medium text-slate-300">
//               Images (max 6):
//               <span className="text-slate-500 ml-2">First image will be the cover</span>
//             </label>
//             <div className="flex flex-col sm:flex-row gap-4 w-full">
//               <input
//                 onChange={(e) => setFiles(e.target.files)}
//                 className="p-3 border border-gray-300 rounded w-full text-sm text-slate-700 bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
//                 type="file"
//                 id="images"
//                 accept="image/*"
//                 multiple
//               />
//               <button
//                 type="button"
//                 disabled={uploading}
//                 onClick={handleImageSubmit}
//                 className="w-full sm:w-auto px-6 py-3 text-sm bg-green-600 text-white font-semibold rounded hover:bg-green-700 disabled:opacity-80 transition"
//               >
//                 {uploading ? "Uploading..." : "Upload"}
//               </button>
//             </div>

//             <button
//               disabled={loading || uploading}
//               className="w-full bg-[#d1b989] text-black font-semibold py-3 rounded-lg uppercase hover:bg-[#bda766] transition disabled:opacity-70"
//             >
//               {loading ? "Creating..." : "Create Listing"}
//             </button>

//             {error && <p className="text-red-600 text-sm">{error}</p>}
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }

import React from "react";

const CreateListing = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 py-10 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-slate-900 shadow-xl rounded-3xl p-6 md:p-10 border border-slate-700">
        <h1 className="text-4xl font-bold text-center text-[#d1b989] mb-10">
          Create a Listing
        </h1>

        <form className="flex flex-col md:flex-row gap-8">
          {/* Left Side */}
          <div className="flex flex-col gap-5 flex-1">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-3 rounded-lg bg-slate-700 text-white placeholder:text-slate-400"
              id="name"
              maxLength="62"
              minLength="10"
              required
            />
            <textarea
              placeholder="Description"
              className="w-full px-5 py-3 rounded-lg bg-slate-700 text-white placeholder:text-slate-400"
              id="description"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-5 py-3 rounded-lg bg-slate-700 text-white placeholder:text-slate-400"
              id="address"
              required
            />

            {/* Checkboxes */}
            <div className="flex flex-wrap gap-4">
              {["sale", "rent", "parking", "furnished", "offer"].map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <input
                    type="checkbox"
                    id={item}
                    className="w-4 h-4 accent-[#d1b989]"
                  />
                  <label htmlFor={item} className="text-sm capitalize">
                    {item === "sale" ? "Sell" : item === "rent" ? "Rent" : item}
                  </label>
                </div>
              ))}
            </div>

            {/* Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {[
                { id: "beadrooms", label: "Beds" },
                { id: "bathrooms", label: "Bath" },
                { id: "regularPrice", label: "Regular Price", suffix: "($ / month)" },
                { id: "discountPrice", label: "Discounted Price", suffix: "($ / month)" },
              ].map(({ id, label, suffix }) => (
                <div className="flex flex-col" key={id}>
                  <input
                    type="number"
                    id={id}
                    min="1"
                    max="10000000"
                    required
                    className="p-3 border border-slate-600 rounded-lg bg-slate-800 text-white"
                  />
                  <div className="text-xs mt-1 text-slate-400">
                    {label} {suffix && <span className="block">{suffix}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-5 flex-1">
            <p className="text-sm text-slate-300 font-medium">
              Images:
              <span className="ml-2 text-slate-400 font-normal">
                First image will be cover (Max 6)
              </span>
            </p>

            {/* Upload Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                className="p-3 border border-slate-600 bg-slate-800 text-white rounded w-full"
                type="file"
                id="images"
                accept="image/*"
                multiple
              />
              <button
                type="button"
                className="px-4 py-2 border border-green-600 rounded-lg text-sm bg-green-600 text-white hover:bg-green-700 transition w-full sm:w-auto"
              >
                Upload
              </button>
            </div>

            {/* Submit Button */}
            <button
              className="w-full py-3 bg-[#d1b989] text-black rounded-lg font-semibold hover:bg-[#b79e6a] transition"
              type="submit"
            >
              Create Listing
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateListing;
