import React, { useState } from 'react';
import axios from 'axios';

const CreateListing = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
  });
  const [imageUploadError, setImageUploadError] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleImageSubmit = async () => {
    if (files.length > 0 && files.length + formData.imageUrls.length <= 6) {
      setUploading(true);
      setImageUploadError('');
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
        setImageUploadError('Image upload failed (2 MB max per image).');
      } finally {
        setUploading(false);
      }
    } else {
      setImageUploadError('You can only upload up to 6 images.');
    }
  };

  const storeImage = async (file) => {
    const cloudName = 'mernrealestate'; // change this
    const uploadPreset = 'mern_upload_preset'; // change this

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('cloud_name', cloudName);

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );
    return res.data.secure_url;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 py-10 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-slate-900 shadow-xl rounded-3xl p-6 md:p-10 border border-slate-700">
        <h1 className="text-4xl font-bold text-center text-[#d1b989] mb-10">Create a Listing</h1>

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
              {['sale', 'rent', 'parking', 'furnished', 'offer'].map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <input type="checkbox" id={item} className="w-4 h-4 accent-[#d1b989]" />
                  <label htmlFor={item} className="text-sm capitalize">
                    {item === 'sale' ? 'Sell' : item === 'rent' ? 'Rent' : item}
                  </label>
                </div>
              ))}
            </div>

            {/* Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: 'bedrooms', label: 'Beds' },
                { id: 'bathrooms', label: 'Bath' },
                { id: 'regularPrice', label: 'Regular Price', suffix: '($ / month)' },
                { id: 'discountPrice', label: 'Discounted Price', suffix: '($ / month)' },
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
                  ${uploading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}
                  text-white border-green-600`}
              >
                {uploading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Uploading...
                  </span>
                ) : (
                  'Upload'
                )}
              </button>
            </div>

            {imageUploadError && (
              <p className="text-red-500 text-sm">{imageUploadError}</p>
            )}

            {/* Uploaded Previews */}
            {formData.imageUrls.length > 0 &&
              formData.imageUrls.map((url, index) => (
                <div
                  key={index}
                  className="flex justify-between p-3 border border-slate-700 rounded-lg"
                >
                  <img
                    src={url}
                    alt="Listing Preview"
                    className="w-32 h-14 object-cover rounded-lg"
                  />
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
