import React from "react"
import { useForm, Controller } from "react-hook-form"

type FormValues = {
  rating: number
  comment: string
}

const ReviewForm: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      rating: 0,
      comment: "",
    },
  })

  const onSubmit = (data: FormValues) => {
    // Handle form submission here
    console.log(data)
    reset()
  }

  if (!isLoggedIn) {
    return (
      <div className="mb-10">
        <h3 className="pb-2.5 text-[#222] text-base lg:text-[28px] font-medium leading-[39px]">
          Write a review
        </h3>
        <div className="text-gray-600 text-sm lg:text-base">
          <p>
            You must be{" "}
            <a
              href="https://ovia.no/my-account/"
              className="hover:text-[#DB572E]"
            >
              logged in
            </a>{" "}
            to post a review.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="lg:p-6">
      <h3 className="pb-2.5 text-[#222] text-[28px] leading-[39px]">
        Write a review
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          {[...Array(5)].map((_, index) => (
            <Controller
              key={index}
              name="rating"
              control={control}
              render={({ field: { onChange, value } }) => (
                <svg
                  onClick={() => onChange(index + 1)}
                  className={`w-8 h-8 cursor-pointer ${
                    index < value ? "text-yellow-500" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25l3.09 6.26 6.91.98-5 4.86 1.18 6.88L12 17.77 6.82 21l1.18-6.88-5-4.86 6.91-.98L12 2.25z" />
                </svg>
              )}
            />
          ))}
        </div>
        <div className="mb-4">
          <Controller
            name="comment"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                rows={4}
                placeholder="Write your comment here..."
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            )}
          />
        </div>
        <button
          type="submit"
          className="px-12 py-4 w-full text-white bg-[#222] hover:bg-[#464E3F]"
        >
          Submit Review
        </button>
      </form>
    </div>
  )
}

export default ReviewForm
