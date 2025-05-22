const CustomerReviews = () => {
  const customerReviews = [
    {
      id: 1,
      name: "Arif Hasan",
      review:
        "This app made plant care so easy! I never forget watering schedules anymore.",
      rating: 5,
      location: "Dhaka, Bangladesh",
      date: "2025-04-10",
      avatarUrl: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Sarah Ahmed",
      review:
        "As a beginner, I found the care tips super helpful. Highly recommended!",
      rating: 4,
      location: "Chittagong, Bangladesh",
      date: "2025-04-12",
      avatarUrl: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Jony Roy",
      review:
        "Love how simple and beautiful the interface is. My plants are thriving!",
      rating: 5,
      location: "Dinajpur, Bangladesh",
      date: "2025-04-15",
      avatarUrl: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <section className="bg-white dark:bg-zinc-800 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-500 mb-8 poppins">
        🌟 What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {customerReviews.map((review) => (
          <div
            key={review.id}
            className="bg-green-50 dark:bg-zinc-900 rounded-xl p-6 shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatarUrl}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-500 poppins">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {review.location}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-400 italic">
              “{review.review}”
            </p>
            <div className="mt-4 text-yellow-500">
              {"⭐".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
