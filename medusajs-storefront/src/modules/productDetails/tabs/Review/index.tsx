import React from "react"
import Comment from "../ReviewCard"
import ReviewForm from "../ReviewForm"

export const Review = () => {
  const comments = [
    {
      avatarUrl:
        "https://secure.gravatar.com/avatar/c7514e49cd13a1ab855bc49108d12921?s=60&d=mm&r=g",
      rating: 5,
      author: "Thu",
      date: "2024-09-06T09:13:59+00:00",
      description: "Smells extremely good. Recommended 🥳",
    },
    {
      avatarUrl:
        "https://secure.gravatar.com/avatar/c7514e49cd13a1ab855bc49108d12921?s=60&d=mm&r=g",
      rating: 4,
      author: "John",
      date: "2024-09-05T12:45:30+00:00",
      description: "Good quality, but a bit expensive.",
    },
  ]
  const isLoggedIn = true;
  return (
    <div>
      <h3 className=""></h3>
      <div className="space-y-4 mb-8">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            avatarUrl={comment.avatarUrl}
            rating={comment.rating}
            author={comment.author}
            date={comment.date}
            description={comment.description}
          />
        ))}
      </div>
      <ReviewForm isLoggedIn={isLoggedIn} />
    </div>
  )
}
