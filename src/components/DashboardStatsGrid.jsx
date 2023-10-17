import React from 'react'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { FaBook } from 'react-icons/fa'
import { MdOutlineAccountBalance } from 'react-icons/md'
import { HiOutlineShoppingBag } from 'react-icons/hi'
export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-6">
			<BoxWrapper>
				<div className="rounded-full h-20 w-20 flex items-center justify-center bg-green-200">
					<HiOutlineCurrencyRupee className="text-4xl text-green-500" />
				</div>
				<div className='pl-4'>
					<span className="text-sm text-gray-500 font-light">Earning</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$198k</strong>
					</div>
					<div className='text-xs'>
						<span className="text-green-500 font-bold">+38.7 %</span> this month
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-20 w-20 flex items-center justify-center bg-purple-300">
					<FaBook className="text-4xl text-purple-700" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Orders</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$2.4k</strong>
					</div>
					<div className='text-xs'>
						<span className="text-red-500 font-bold">-2 %</span> this month
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-20 w-20 flex items-center justify-center bg-cyan-300">
					<MdOutlineAccountBalance className="text-4xl text-cyan-600" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Balance</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$2.4k</strong>
					</div>
					<div className='text-xs'>
						<span className="text-red-500 font-bold">-2 %</span> this month
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-20 w-20 flex items-center justify-center bg-pink-300">
					<HiOutlineShoppingBag className="text-4xl text-pink-600" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Sales</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$89k</strong>
					</div>
					<div className='text-xs'>
						<span className="text-green-500 font-bold">+8 %</span> this month
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-md p-8 flex-wrap flex-1 shadow-sm flex items-center">{children}</div>
}
