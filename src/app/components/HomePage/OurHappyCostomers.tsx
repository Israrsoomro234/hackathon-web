import React from "react";

type Customer = {
  name: string;
  review: string;
  stars: number;
};

const HappyCustomers: React.FC = () => {
  const customers: Customer[] = [
    { name: "Sarah A.", review: "Amazing quality! Highly recommend.", stars: 5 },
    { name: "Mike T.", review: "Great service and products.", stars: 5 },
    { name: "James D.", review: "Will definitely shop again.", stars: 5 },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Happy Customers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
          >
            <p className="font-bold mb-2">{customer.name}</p>
            <p className="text-gray-600 italic mb-4">"{customer.review}"</p>
            <p className="text-yellow-500">
              {"★".repeat(customer.stars)}{" "}
              {"☆".repeat(5 - customer.stars)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyCustomers;
