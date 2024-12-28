export default function TablePage() {
  const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];

  return (
    <table className="table-auto border-collapse border border-gray-200 w-full mt-10">
      <thead>
        <tr>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{row.name}</td>
            <td className="border px-4 py-2">{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
