import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer,Tooltip} from 'recharts';

const data = [
  { name: "Samuel", value: 400 },
  { name: "Kohli", value: 300 },
  { name: "Rashid", value: 150 },
];
const COLORS = ["#E5E4E2", "#354584", "#E14A93"];
const STROKE_WIDTHS = [1, 6, 12]; 
export default function CustomerProfilePieChart() {
  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 text-xl">Customers</strong>
      <h1 className="text-gray-500 text-sm">Customers that buy products</h1>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke={COLORS[index % COLORS.length]}
                  strokeWidth={STROKE_WIDTHS[index % STROKE_WIDTHS.length]}
                />
              ))}
            </Pie>
            <text x="50%" y="35%" textAnchor="middle" dominantBaseline="middle" className="text-xl font-bold">
              65%
            </text>
            <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" className="text-xs text-gray-400">
              Total New
            </text>
            <text x="50%" y="53%" textAnchor="middle" dominantBaseline="middle" className="text-xs text-gray-400">
              Customers
            </text>
			<Tooltip/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
