export function generateData(count = 5000) {
  const names = ["Abhi", "John", "Sara", "Mira", "Karan", "Arohi", "David", "Anushka", "Ritu", "Keshav"];
  const cities = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Pune", "Kolkata", "Chennai"];
  const statuses = ["Active", "Inactive", "Pending"];

  const result = [];

  for (let i = 1; i <= count; i++) {
    result.push({
      id: i,
      name: names[Math.floor(Math.random() * names.length)] + " " + i,
      email: `user${i}@example.com`,
      age: Math.floor(Math.random() * 40) + 18,
      city: cities[Math.floor(Math.random() * cities.length)],
      salary: Math.floor(Math.random() * 90000) + 20000,
      status: statuses[Math.floor(Math.random() * statuses.length)]
    });
  }

  return result;
}
