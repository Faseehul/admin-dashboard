import React, { useState } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { IoIosArrowDown } from 'react-icons/io';
import { Listbox } from '@headlessui/react';

const data = [
  {
    name: 'Jan',
    Income: 2400,
  },
  {
    name: 'Feb',
    Income: 1398,
  },
  {
    name: 'Mar',
    Income: 9900,
  },
  {
    name: 'Apr',
    Income: 3908,
  },
  {
    name: 'May',
    Income: 4800,
  },
  {
    name: 'Jun',
    Income: 3800,
  },
  {
    name: 'July',
    Income: 4300,
  },
  {
    name: 'Aug',
    Income: 9800,
  },
  {
    name: 'Sep',
    Income: 3908,
  },
  {
    name: 'Oct',
    Income: 4800,
  },
  {
    name: 'Nov',
    Income: 3800,
  },
  {
    name: 'Dec',
    Income: 4300,
  },
];

const options = ["Quarterly", "Annually", "Semi-Annually"];

export default function TransactionChart() {
  const maxIncome = Math.max(...data.map(item => item.Income));
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const CustomBar = ({ x, y, width, height, fill }) => {
    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={8}
        ry={8}
        className="shadow-md"
      />
    );
  };

  const bars = data.map(item => ({
    ...item,
    fill: item.Income === maxIncome ? '#50C878' : '#232e5f',
  }));

  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <div className="flex justify-between">
        <div className="left">
          <strong className="text-gray-700 text-xl">Overview</strong>
          <h1 className="text-gray-500 text-sm">Monthly Earning</h1>
        </div>
        <div className="px-4 flex items-center justify-end">
          <div className="relative z-10">
            <Listbox as="div" className="space-x-1" value={selectedOption} onChange={setSelectedOption}>
              {({ open }) => (
                <>
                  <Listbox.Button className="py-2 px-4 border rounded-lg shadow-md text-gray-700 bg-white flex items-center space-x-1">
                    {selectedOption}
                    <IoIosArrowDown className={`w-5 h-5 ${open ? 'transform rotate-180' : ''}`} />
                  </Listbox.Button>
                  <Listbox.Options as="ul" className={`absolute mt-2 py-2 px-0 w-36 border rounded-lg shadow-lg bg-white ${open ? '' : 'hidden'}`}>
                    {options.map((option) => (
                      <Listbox.Option key={option} value={option}>
                        {({ active, selected }) => (
                          <li
                            className={`cursor-pointer select-none relative px-4 py-2 ${
                              active ? 'bg-blue-100' : ''
                            } ${selected ? 'font-semibold' : 'text-gray-700'}`}
                          >
                            {option}
                          </li>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </>
              )}
            </Listbox>
          </div>
        </div>
      </div>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={400}
            height={300}
            data={bars}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="Income" shape={<CustomBar/>} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
