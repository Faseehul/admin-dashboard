import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import ProductSell from '../components/ProductSell'
import CustomerProfilePieChart from '../components/CustomerProfilePieChart'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<div>
				<h1 className='font-semibold text-xl'>Hello Shahrukh 👋,</h1>
			</div>
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<CustomerProfilePieChart />
			</div>
			<div className="w-full">
				<ProductSell />
			</div>
		</div>
	)
}
