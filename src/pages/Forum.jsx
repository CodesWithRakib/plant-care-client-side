import React from "react";
import { Search, MessageSquarePlus, User, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import useTitle from "../hooks/useTitle";

const forumPosts = [
  {
    id: 1,
    title: "How often should I water my Aloe Vera?",
    author: "GreenGuru",
    date: "June 25, 2025",
    replies: 5,
  },
  {
    id: 2,
    title: "Best soil mix for succulents?",
    author: "PlantLover22",
    date: "June 24, 2025",
    replies: 3,
  },
  {
    id: 3,
    title: "Yellow leaves on my fern – help!",
    author: "NatureNerd",
    date: "June 23, 2025",
    replies: 7,
  },
];

const Forum = () => {
  useTitle("GreenNest Dashboard - Community Forum");
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-green-600 dark:text-green-400">
            🌿 Community Forum
          </h1>
          <Link
            to="/forum/new-topic"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            <MessageSquarePlus size={18} /> New Topic
          </Link>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search topics..."
            className="w-full px-4 py-2 pl-10 rounded-lg border dark:border-zinc-700 dark:bg-zinc-800 bg-white text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search
            className="absolute top-2.5 left-3 text-gray-500 dark:text-gray-400"
            size={18}
          />
        </div>

        {/* Forum Posts */}
        <div className="bg-white dark:bg-zinc-800 shadow rounded-lg divide-y dark:divide-zinc-700">
          {forumPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col sm:flex-row justify-between p-4 hover:bg-green-50 dark:hover:bg-zinc-700 transition"
            >
              <div>
                <Link
                  to={`/forum/${post.id}`}
                  className="text-lg font-semibold text-green-700 dark:text-green-300 hover:underline"
                >
                  {post.title}
                </Link>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                  <User size={14} /> {post.author} · {post.date}
                </div>
              </div>
              <div className="mt-2 sm:mt-0 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MessageCircle size={16} className="mr-1" />
                {post.replies} replies
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
