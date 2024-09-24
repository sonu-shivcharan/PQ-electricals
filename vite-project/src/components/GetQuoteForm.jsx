import React, { useState } from "react";
import { db } from "../firebase";
import { ref, set } from "firebase/database";

function GetQuoteForm({setSubmitted}) {
  const [isSubmitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: "",
    address: "",
    budget: "",
    timeline: "",
    comments: "",
    file: null,
    timestamp: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();

    const quoteRequestData = { ...formData, timestamp: Date.now() };

    const setQuoteRequests = async () => {
      const { serviceType, name, timestamp } = quoteRequestData;
      const quoteRequest = ref(
        db,
        `quoteRequests/${serviceType}/${name.split(" ")[0]}${timestamp}`
      );
      try {
        await set(quoteRequest, quoteRequestData);
        console.log("Quote submitted :", quoteRequestData);
        setSubmitted(true);
      } catch (err) {
        console.log("Something went wrong", err);
        setSubmitted(false);
      }
      setSubmitting(false);
    };
    setTimeout(() => {
      setQuoteRequests();
    }, 1000);
  };
  return (
    <>
      
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-4 focus:outline-orange-300 focus:border-orange-400"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-4 focus:outline-orange-300 focus:border-orange-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-4 focus:outline-orange-300 focus:border-orange-300"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Service Type */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="serviceType">
              Service Type
            </label>
            <select
              name="serviceType"
              id="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-4 focus:outline-orange-300 focus:border-orange-300"
            >
              <option value="">Select Service Type</option>
              <option value="installation">Installation</option>
              <option value="repair">Repair</option>
              <option value="maintenance">Maintenance</option>
              <option value="inspection">Inspection</option>
            </select>
          </div>

          {/* Project Description */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="description">
              Project Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-4 focus:outline-orange-300 focus:border-orange-300"
              placeholder="Provide details of your project"
            ></textarea>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-4 focus:outline-orange-300 focus:border-orange-300"
              placeholder="Enter the project address"
            />
          </div>

          {/* Budget */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="budget">
              Estimated Budget (optional)
            </label>
            <input
              type="number"
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-4 focus:outline-orange-300 focus:border-orange-300"
              placeholder="Enter your budget"
            />
          </div>

          {/* Timeline */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="timeline">
              Project Timeline (optional)
            </label>
            <input
              type="text"
              name="timeline"
              id="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-orange-300"
              placeholder="Preferred timeline"
            />
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="file">
              Upload Project File (optional)
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-4 focus:outline-orange-300 focus:border-orange-300"
            />
          </div>

          {/* Additional Comments */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="comments">
              Additional Comments
            </label>
            <textarea
              name="comments"
              id="comments"
              value={formData.comments}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-4 focus:outline-orange-300 focus:border-orange-300"
              placeholder="Any additional information"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 font-bold text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
    </>
  );
}

export default GetQuoteForm;
