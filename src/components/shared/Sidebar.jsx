import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { BsXDiamond } from 'react-icons/bs';
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-slate-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
	const navigate = useNavigate();

	return (
		<div className="bg-slate-900 w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3">
				<BsXDiamond fontSize={24} className="text-white" />
				<span className="text-neutral-200 text-xl font-semibold">Dashboard</span>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div
				className="bg-slate-700 rounded-md flex justify-center items-center py-2"
				onClick={() => navigate('/profile')}
			>
						<div className="flex justify-center items-center space-x-2 cursor-pointer">
							<div className="w-10 h-10 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
								<img src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" className="w-full h-full object-cover" />
							</div>
							<div className="font-semibold dark:text-white text-gray-900">
								<div className="cursor-pointer">
									<div className="mb-1">
										<h1 className='text-sm inline-flex'>Evano</h1>
									</div>
									<p className='text-xs text-gray-300'>Project Manager</p>
								</div>
							</div>
							<IoIosArrowForward className='text-white' />
						</div>

			</div>
		</div>
	);
}

function SidebarLink({ link }) {
	const { pathname } = useLocation();

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-slate-700 text-white' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	);
}
