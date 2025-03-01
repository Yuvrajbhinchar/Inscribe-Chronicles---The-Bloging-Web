import React from 'react';

const ResponsesSection = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Responses (3)</h2>

      {/* Comment Input Area */}
      <div className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
          rows="4"
          placeholder="What are your thoughts?"
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="publishToProfile"
            className="form-checkbox h-4 w-4 text-blue-600 rounded "
          />
          <label htmlFor="publishToProfile" className="text-sm text-gray-600">
            Also publish to my profile
          </label>
        </div>

        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Cancel
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Respond
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsesSection;