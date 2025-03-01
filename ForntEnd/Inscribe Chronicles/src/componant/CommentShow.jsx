import React from 'react';
import { ThumbUp, ChatBubbleOutline, Reply } from '@mui/icons-material';

const Comment = ({ comment }) => {

  console.log("comment console " + comment)
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {(
            <img
              src="dfjd"
              alt={comment.authorName}
              className="h-10 w-10 rounded-full object-cover"
            />
          )}
          <h3 className="font-semibold text-gray-800">{comment.authorName}</h3>
        </div>
        <span className="text-sm text-gray-500">2day</span>
      </div>
      <p className="mt-2 text-gray-600">{comment.content}</p>
      <div className="mt-4 flex items-center space-x-4 text-gray-500">
        <button className="flex items-center space-x-1 hover:text-gray-700">
          <ThumbUp className="h-5 w-5" />
          <span>{comment.likesCount}</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-gray-700">
          <ChatBubbleOutline className="h-5 w-5" />
          <span> Replies</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-gray-700">
          <Reply className="h-5 w-5" />
          <span>Reply</span>
        </button>
      </div>
    </div>
  );
};

export default Comment;