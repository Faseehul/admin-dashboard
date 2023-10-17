import React from 'react'
import {HiOutlineSearch} from 'react-icons/hi'

export default function Header() {

	return (
		<div className="h-16 px-4 flex items-center justify-end">
			<div className="relative">
				<HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
				<input
					type="text"
					placeholder="Search..."
					className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-md bg-gray-100"
				/>
			</div>
		</div>
	)
}
