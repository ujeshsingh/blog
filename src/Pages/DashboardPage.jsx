import React from "react";

export default function DashboardPage() {
  return (
    <div>
      {/* DashboardPage */}
      <div>
        <div className="w-8/12 mx-auto border border-gray-400 p-8  mt-24 space-y-4">
          <p className="text-3xl font-semibold text-center">
            Write New Article
          </p>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter News Title"
              className="border border-gray-500 px-2 py-1 outline-none"
            />
          </div>
          <div>
            <label htmlFor="banner">Banner</label>
            <input
              type="file"
              id="banner"
              className="border border-gray-500 px-2 py-1 outline-none"
            />
          </div>
          <div>
            <label htmlFor="title">Description</label>
            <input
              type="text"
              name="Description"
              id="Description"
              placeholder="Enter News Description"
              className="border border-gray-500 px-2 py-1 outline-none h-80"
            />
          </div>

          <button className="bg-blue-600 px-8 py-1.5 text-white hover:bg-pink-500 duration-500">
            Create Article
          </button>
        </div>
      </div>
    </div>
  );
}
