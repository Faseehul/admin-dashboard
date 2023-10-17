import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi'
const recentProductData = [
	{
		id: '1',
		order_total: '$435.50',
		total_sales: '20',
		stock: '32',
		product_image: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		product_title: 'Abstract 3D',
		product_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, amet?'
	},
	{
		id: '2',
		order_total: '$320.75',
		total_sales: '15',
		stock: '25',
		product_image: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		product_title: 'Beautiful Sunset',
		product_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, amet?'
	},
	{
		id: '3',
		order_total: '$99.99',
		total_sales: '5',
		stock: '10',
		product_image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		product_title: 'Mountain Adventure',
		product_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, amet?'
	},
	{
		id: '4',
		order_total: '$199.95',
		total_sales: '12',
		stock: '18',
		product_image: 'https://images.pexels.com/photos/5555555/pexels-photo-5555555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		product_title: 'Floral Beauty',
		product_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, amet?'
	},
	{
		id: '5',
		order_total: '$799.00',
		total_sales: '50',
		stock: '60',
		product_image: 'https://images.pexels.com/photos/775294/pexels-photo-775294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		product_title: 'Luxury Cruise',
		product_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, amet?'
	}
];
const options = ["Last 30 days", "Last 60 days", "Last 90 days"];

export default function ProductSell() {
	const [selectedOption, setSelectedOption] = useState(options[0]);

	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm flex-1">
			<strong className="text-gray-700 text-xl">Product Sell</strong>

			<div className="px-4 flex items-center justify-end space-x-4">
				<div className="relative">
					<HiOutlineSearch fontSize={16} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
					<input
						type="text"
						placeholder="Search"
						className="text-sm bg-gray-100 w-48 h-10 pl-11 pr-4 rounded-md"
					/>
				</div>

				<div className="relative z-10">
					<Listbox as="div" className="space-x-1" value={selectedOption} onChange={setSelectedOption}>
						{({ open }) => (
							<>
								<Listbox.Button className="py-1 px-4 border rounded-lg shadow-md text-gray-700 bg-white flex items-center space-x-1">
									{selectedOption}
									<IoIosArrowDown className={`w-5 h-5 ${open ? 'transform rotate-180' : ''}`} />
								</Listbox.Button>

								<Listbox.Options as="ul" className={`absolute mt-2 py-2 px-0 w-36 border rounded-lg shadow-lg bg-white ${open ? '' : 'hidden'}`}>
									{options.map((option) => (
										<Listbox.Option key={option} value={option}>
											{({ active, selected }) => (
												<li
													className={`cursor-pointer select-none relative px-4 py-2 ${active ? 'bg-blue-100' : ''} ${selected ? 'font-semibold' : 'text-gray-700'}`}
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

			<div className="rounded-sm mt-3">
				<table className="w-full">
					<thead className='text-gray-400 bg-white'>
						<tr className="border-b">
							<th className="pb-2">Product Name</th>
							<th className="pb-2">Stock</th>
							<th className="pb-2">Price</th>
							<th className="pb-2">Total Sales</th>
						</tr>
					</thead>
					<tbody>
						{recentProductData.map((order) => (
							<tr key={order.id}>
								<td className="flex items-center">
									<img
										src={order.product_image}
										alt="Product"
										className="w-24 h-16 mr-4 rounded-lg"
									/>
									<div>
										<strong className='text-base'>{order.product_title}</strong>
										<p className="text-gray-500">{order.product_description}</p>
									</div>
								</td>
								<td className="border-b-0">{order.stock} in Stock</td>
								<td className="border-b-0 font-bold">{order.order_total}</td>
								<td className="border-b-0">{order.total_sales}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}