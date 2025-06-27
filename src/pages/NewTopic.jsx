import React, { useState } from "react";
import { useNavigate } from "react-router";
import { PencilLine } from "lucide-react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const NewTopic = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!title.trim() || !content.trim()) {
      toast.error("Title and Content are required");
      setIsSubmitting(false);
      return;
    }

    const newTopic = {
      title,
      content,
      author: user?.displayName || "CurrentUser",
      date: new Date().toLocaleDateString(),
      replies: 0,
    };

    setTimeout(() => {
      toast.success("Topic created successfully!");
      console.log("New Topic Created:", newTopic);
      setIsSubmitting(false);
      setTitle("");
      setContent("");
      navigate("/forum");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-800 rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold text-green-600 dark:text-green-400 flex items-center gap-2 mb-6">
          <PencilLine /> Create New Topic
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Topic Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. How to care for a snake plant?"
              className="w-full px-4 py-2 rounded-lg border dark:border-zinc-600 bg-white dark:bg-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Topic Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Content <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="6"
              placeholder="Describe your question or topic here..."
              className="w-full px-4 py-2 rounded-lg border dark:border-zinc-600 bg-white dark:bg-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition w-full"
          >
            {isSubmitting ? <span>Posting...</span> : "Post Topic"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTopic;
