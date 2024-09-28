import React from 'react';

interface CommentProps {
  avatarUrl: string;
  rating: number;
  author: string;
  date: string;
  description: string;
}

const Comment: React.FC<CommentProps> = ({ avatarUrl, rating, author, date, description }) => {
  return (
    <div className="flex items-start space-x-4 py-4 lg:px-4 border-b border-gray-200 rounded-lg">
      <img
        alt="Avatar"
        src={avatarUrl}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.25l3.09 6.26 6.91.98-5 4.86 1.18 6.88L12 17.77 6.82 21l1.18-6.88-5-4.86 6.91-.98L12 2.25z" />
              </svg>
            ))}
          </div>
          {/* <span className="ml-2 text-gray-600 text-sm lg:text-base">
            Rated <strong>{rating}</strong> out of 5
          </span> */}
        </div>
        <p className="mt-2 text-gray-800 text-sm lg:text-base">
          <strong className="font-semibold">{author}</strong>
          <span className="mx-2 text-gray-500">–</span>
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
        </p>
        <p className="mt-2 text-gray-700 text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Comment;
