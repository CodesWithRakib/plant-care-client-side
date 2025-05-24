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
      name: "Mehjabin Alam",
      review:
        "I love the reminders and the interface is so calming. Perfect for plant lovers.",
      rating: 4,
      location: "Chittagong, Bangladesh",
      date: "2025-04-12",
      avatarUrl: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Ryan Lee",
      review:
        "Green Nest has completely changed how I care for my indoor garden. Highly recommend!",
      rating: 5,
      location: "San Francisco, USA",
      date: "2025-04-14",
      avatarUrl: "https://i.pravatar.cc/100?img=3",
    },
    {
      id: 4,
      name: "Ananya Das",
      review:
        "So helpful and easy to use! Even as a beginner I feel confident caring for my plants.",
      rating: 4,
      location: "Kolkata, India",
      date: "2025-04-15",
      avatarUrl: "https://i.pravatar.cc/100?img=4",
    },
    {
      id: 5,
      name: "Liam Carter",
      review:
        "Great app with a clean UI. I love the calendar view for watering reminders.",
      rating: 5,
      location: "London, UK",
      date: "2025-04-18",
      avatarUrl: "https://i.pravatar.cc/100?img=5",
    },
    {
      id: 6,
      name: "Fatema Nahar",
      review:
        "Thanks to this app, I’ve actually kept my plants alive for more than 3 months!",
      rating: 5,
      location: "Sylhet, Bangladesh",
      date: "2025-04-20",
      avatarUrl: "https://i.pravatar.cc/100?img=6",
    },
    {
      id: 7,
      name: "Carlos Jimenez",
      review:
        "Super helpful for tracking sunlight needs. My balcony garden is thriving!",
      rating: 4,
      location: "Barcelona, Spain",
      date: "2025-04-22",
      avatarUrl: "https://i.pravatar.cc/100?img=7",
    },
    {
      id: 8,
      name: "Sadia Rahman",
      review:
        "I never thought plant care could be this organized. Thank you Green Nest!",
      rating: 5,
      location: "Rajshahi, Bangladesh",
      date: "2025-04-25",
      avatarUrl: "https://i.pravatar.cc/100?img=8",
    },
    {
      id: 9,
      name: "Emily Chen",
      review:
        "Love the simplicity and how I can track multiple plants in one place.",
      rating: 4,
      location: "Singapore",
      date: "2025-04-28",
      avatarUrl: "https://i.pravatar.cc/100?img=9",
    },
    {
      id: 10,
      name: "Abir Hossain",
      review:
        "Green Nest is a game-changer for my plant collection. Highly recommended!",
      rating: 5,
      location: "Khulna, Bangladesh",
      date: "2025-04-30",
      avatarUrl: "https://i.pravatar.cc/100?img=10",
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
