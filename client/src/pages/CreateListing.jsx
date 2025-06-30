import React, { useState } from "react";
import axios from "axios";
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const CreateListing = () => {
  const Navigate =useNavigate()
  const {currentUser} = useSelector(state =>state.user)
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 0,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
  });
  console.log(formData);
  const [imageUploadError, setImageUploadError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleImageSubmit = async () => {
    if (files.length > 0 && files.length + formData.imageUrls.length <= 6) {
      setUploading(true);
      setImageUploadError("");
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }

      try {
        const urls = await Promise.all(promises);
        setFormData({
          ...formData,
          imageUrls: [...formData.imageUrls, ...urls],
        });
      } catch (err) {
        setImageUploadError("Image upload failed (2 MB max per image).");
      } finally {
        setUploading(false);
      }
    } else {
      setImageUploadError("You can only upload up to 6 images.");
    }
  };

  const storeImage = async (file) => {
    const cloudName = "mernrealestate"; // change this
    const uploadPreset = "mern_upload_preset"; // change this

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("cloud_name", cloudName);

    const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData);
    return res.data.secure_url;
  };

  const handleChange = (e) => {
    if (e.target.id === "sale" || e.target.id === "rent") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }

    if (e.target.id === "parking" || e.target.id === "furnished" || e.target.id === "offer") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }

    if (e.target.type === "number" || e.target.type === "text" || e.target.type === "textarea") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1) return setError("You must upload at least one image");
      if (+formData.regularPrice < +formData.discountPrice) return setError("Discount price must be lower than regular price");
      setLoading(true);
      setError(false);
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      Navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 py-10 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-slate-900 shadow-xl rounded-3xl p-6 md:p-10 border border-slate-700">
        <h1 className="text-4xl font-bold text-center text-[#d1b989] mb-10">Create a Listing</h1>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8">
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
              onChange={handleChange}
              value={formData.name}
            />
            <textarea
              placeholder="Description"
              className="w-full px-5 py-3 rounded-lg bg-slate-700 text-white placeholder:text-slate-400"
              id="description"
              required
              onChange={handleChange}
              value={formData.description}
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-5 py-3 rounded-lg bg-slate-700 text-white placeholder:text-slate-400"
              id="address"
              required
              onChange={handleChange}
              value={formData.address}
            />

            <div className="flex gap-6 flex-wrap">
              <div className="flex gap-2">
                <input type="checkbox" id="sale" className="w-5" onChange={handleChange} checked={formData.type === "sale"} />
                <span>Sell</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="rent" className="w-5" onChange={handleChange} checked={formData.type === "rent"} />
                <span>Rent</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="parking" className="w-5" onChange={handleChange} checked={formData.parking} />
                <span>Parking spot</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="furnished" className="w-5" onChange={handleChange} checked={formData.furnished} />
                <span>Furnished</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="offer" className="w-5" onChange={handleChange} checked={formData.offer} />
                <span>Offer</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-black">
              <div className="flex items-center gap-2">
                <input type="number" id="bedrooms" min="1" max="10" required className="p-3 border border-gray-300 rounded-lg" onChange={handleChange} value={formData.bedrooms} />
                <p className="text-[#d1b989]">Beds</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="bathrooms"
                  min="1"
                  max="10"
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                  onChange={handleChange}
                  value={formData.bathrooms}
                />
                <p className="text-[#d1b989]">Baths</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="regularPrice"
                  min="50"
                  max="10000000"
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                  onChange={handleChange}
                  value={formData.regularPrice}
                />
                <div className="flex flex-col items-center">
                  <p className="text-[#d1b989]">Regular price</p>
                  {formData.type === "rent" && <span className="text-xs text-[#d1b989]">($ / month)</span>}
                </div>
              </div>
              {formData.offer && (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    id="discountPrice"
                    min="0"
                    max="10000000"
                    required
                    className="p-3 border border-gray-300 rounded-lg"
                    onChange={handleChange}
                    value={formData.discountPrice}
                  />
                  <div className="flex flex-col items-center">
                    <p className="text-[#d1b989]">Discounted price</p>

                    {formData.type === "rent" && <span className="text-xs text-[#d1b989]">($ / month)</span>}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-5 flex-1 ">
            <p className="text-sm text-slate-300 font-medium">
              Images:
              <span className="ml-2 text-slate-400 font-normal">First image will be cover (Max 6)</span>
            </p>

            {/* Upload Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                onChange={(e) => setFiles(e.target.files)}
                className="p-3 border border-slate-600 bg-slate-800 text-white rounded w-full"
                type="file"
                id="images"
                accept="image/*"
                multiple
              />
              <button
                onClick={handleImageSubmit}
                type="button"
                disabled={uploading}
                className={`px-4 py-2 border rounded-lg text-sm transition w-full sm:w-auto
                  ${uploading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}
                  text-white border-green-600`}
              >
                {uploading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
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
                  "Upload"
                )}
              </button>
            </div>

            {imageUploadError && <p className="text-red-500 text-sm">{imageUploadError}</p>}

            {/* Uploaded Previews */}
            {formData.imageUrls.length > 0 &&
              formData.imageUrls.map((url, index) => (
                <div key={index} className="flex justify-between p-3 border border-slate-700 rounded-lg">
                  <img src={url} alt="Listing Preview" className="w-32 h-14 object-cover rounded-lg" />
                  <button
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        imageUrls: prev.imageUrls.filter((_, i) => i !== index),
                      }))
                    }
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              ))}

            {/* Submit Button */}
            <button disabled={loading || uploading} className="w-full py-3 bg-[#d1b989] text-black rounded-lg font-semibold hover:bg-[#b79e6a] transition" type="submit">
              {loading ? 'creating...' : 'Create Listing'}
            </button>
            {error && <p className="text-red-700 text-sm">{error}</p>}
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateListing;
