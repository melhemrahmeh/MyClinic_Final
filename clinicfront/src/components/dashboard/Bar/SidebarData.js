import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";


export default function SidebarData(is_dentist, is_admin, is_nurse, is_secretary) { 
	let SidebarData = [];
	if (is_dentist) {
		SidebarData = [
			{
				title: "My Clinic",
				path: "/dashboard",
				icon: <AiIcons.AiFillHome />,
				iconClosed: <RiIcons.RiArrowDownSFill />,
				iconOpened: <RiIcons.RiArrowUpSFill />,

			},
			{
				title: "My Appointments",
				path: "/myappointments",
				icon: <IoIcons.IoIosPaper />,
				iconClosed: <RiIcons.RiArrowDownSFill />,
				iconOpened: <RiIcons.RiArrowUpSFill />,


			},
			{
				title: "Patients",
				path: "",
				icon: <FaIcons.FaPhone />,
				iconClosed: <RiIcons.RiArrowDownSFill />,
				iconOpened: <RiIcons.RiArrowUpSFill />,
				subNav: [
					{
						title: "My Patients",
						path: "/mypatients",
						icon: <IoIcons.IoIosPaper />,
					},
					{
						title: "Add Patient",
						path: "/addpatient",
						icon: <IoIcons.IoIosPaper />,
					},
				],
			},
			{
				title: "Employees",
				path: "",
				icon: <FaIcons.FaEnvelopeOpenText />,

				iconClosed: <RiIcons.RiArrowDownSFill />,
				iconOpened: <RiIcons.RiArrowUpSFill />,

				subNav: [
					{
						title: "My Employees",
						path: "/myemployees",
						icon: <IoIcons.IoIosPaper />,
					},
					{
						title: "Add Employee",
						path: "/addemployee",
						icon: <IoIcons.IoIosPersonAdd />,
					},
				],
			},
			{
				title: "Operations",
				path: "",
			
				icon: <AiIcons.AiFillMedicineBox />,
				iconClosed: <RiIcons.RiArrowDownSFill />,
				iconOpened: <RiIcons.RiArrowUpSFill />,

				subNav: [
					{
						title: "My Operations",
						path: "/myoperations",
						icon: <BsIcons.BsFileMedicalFill />,
					},
					{
						title: "Add Operation",
						path: "/addoperation",
						icon: <FaIcons.FaBookMedical />,
					},
				],
			},
			{
				title: "Rooms",
				path: "",

				icon: <FaIcons.FaDoorOpen />,
				iconClosed: <RiIcons.RiArrowDownSFill />,
				iconOpened: <RiIcons.RiArrowUpSFill />,

				subNav: [
					{
						title: "My Rooms",
						path: "/myrooms",
						icon: <BsIcons.BsFillDoorOpenFill />,
					},
					{
						title: "Add Room",
						path: "/addroom",
						icon: <BiIcons.BiDoorOpen />,
					},
				],
			},
			{
				title: "After Visit Summary",
				path: "/aftervisit",
				icon: <AiIcons.AiOutlineForm />,
			},
			{
				title: "Contact Requests",
				path: "/mycontactrequests",
				icon: <MdIcons.MdContactPhone />,
			},
			{
				title: "Settings",
				path: "/profile",
				icon: <IoIcons.IoMdHelpCircle />,
			},
			{
				title: "Logout",
				path: "/",
				icon: <BiIcons.BiLogOut />,
			},
		];
	}

	else if (is_secretary) {
		SidebarData = [
			{
				title: "My Clinic",
				path: "/dashboard",
				icon: <AiIcons.AiFillHome />,
				iconClosed: <RiIcons.RiArrowDownSFill />,
				iconOpened: <RiIcons.RiArrowUpSFill />,

			},
			{
				title: "Patients",
				path: "",
				icon: <FaIcons.FaPhone />,
				iconClosed: <RiIcons.RiArrowDownSFill />,
				iconOpened: <RiIcons.RiArrowUpSFill />,
				subNav: [
					{
						title: "My Patients",
						path: "/mypatients",
						icon: <IoIcons.IoIosPaper />,
					},
					{
						title: "Add Patient",
						path: "/addpatient",
						icon: <IoIcons.IoIosPaper />,
					},
				],
			},
			{
				title: "Settings",
				path: "/profile",
				icon: <IoIcons.IoMdHelpCircle />,
			},
			{
				title: "Logout",
				path: "/",
				icon: <BiIcons.BiLogOut />,
			},
		];
	}

	else if (is_admin) {
		SidebarData = [
			{
				title: "My Clinic",
				path: "/dashboard",
				icon: <AiIcons.AiFillHome />,
				iconClosed: <RiIcons.RiArrowDownSFill />,
				iconOpened: <RiIcons.RiArrowUpSFill />,

			},
			{
				title: "Employees",
				path: "",
				icon: <FaIcons.FaEnvelopeOpenText />,

				iconClosed: <RiIcons.RiArrowDownSFill />,
				iconOpened: <RiIcons.RiArrowUpSFill />,

				subNav: [
					{
						title: "My Employees",
						path: "/myemployees",
						icon: <IoIcons.IoIosPaper />,
					},
					{
						title: "Add Employee",
						path: "/addemployee",
						icon: <IoIcons.IoIosPersonAdd />,
					},
				],
			},

			{
				title: "Settings",
				path: "/profile",
				icon: <IoIcons.IoMdHelpCircle />,
			},
			{
				title: "Logout",
				path: "/",
				icon: <BiIcons.BiLogOut />,
			},
		];
	}

else if (is_nurse)
	SidebarData = [
		{
			title: "My Clinic",
			path: "/dashboard",
			icon: <AiIcons.AiFillHome />,
			iconClosed: <RiIcons.RiArrowDownSFill />,
			iconOpened: <RiIcons.RiArrowUpSFill />,
		},
		{
			title: "My Appointments",
			path: "/myappointments",
			icon: <IoIcons.IoIosPaper />,
			iconClosed: <RiIcons.RiArrowDownSFill />,
			iconOpened: <RiIcons.RiArrowUpSFill />,
		},
		{
			title: "Patients",
			path: "",
			icon: <FaIcons.FaPhone />,
			iconClosed: <RiIcons.RiArrowDownSFill />,
			iconOpened: <RiIcons.RiArrowUpSFill />,
			subNav: [
				{
					title: "My Patients",
					path: "/mypatients",
					icon: <IoIcons.IoIosPaper />,
				},
				{
					title: "Add Patient",
					path: "/addpatient",
					icon: <IoIcons.IoIosPaper />,
				},
			],
		},

		{
			title: "Operations",
			path: "",

			icon: <AiIcons.AiFillMedicineBox />,
			iconClosed: <RiIcons.RiArrowDownSFill />,
			iconOpened: <RiIcons.RiArrowUpSFill />,

			subNav: [
				{
					title: "My Operations",
					path: "/myoperations",
					icon: <BsIcons.BsFileMedicalFill />,
				},
				{
					title: "Add Operation",
					path: "/addoperation",
					icon: <FaIcons.FaBookMedical />,
				},
			],
		},


		{
			title: "After Visit Summary",
			path: "/aftervisit",
			icon: <AiIcons.AiOutlineForm />,
		},

		{
			title: "Settings",
			path: "/profile",
			icon: <IoIcons.IoMdHelpCircle />,
		},
		{
			title: "Logout",
			path: "/",
			icon: <BiIcons.BiLogOut />,
		},
	];

	return SidebarData;
}