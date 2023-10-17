import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,
	HiOutlineQuestionMarkCircle,
} from 'react-icons/hi'
import {RiCoinsLine} from 'react-icons/ri'
import {TbDiscount2} from 'react-icons/tb'
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'income',
		label: 'Income',
		path: '/income',
		icon: <RiCoinsLine />
	},
	{
		key: 'promote',
		label: 'Promote',
		path: '/promote',
		icon: <TbDiscount2 />
	},
	{
		key: 'help',
		label: 'Help',
		path: '/help',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

