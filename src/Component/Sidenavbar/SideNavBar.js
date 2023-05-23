import React, { useState } from "react";
import styles from "./SideNavBar.module.css";

const SideNavBar = ({user}) => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: "icons/grid.svg",
			link: "/dashboard"
		},
		{
			text: "Profile",
			icon: "icons/user.svg",
			link: "/profile"
		},
		{
			text: "Calendar",
			icon: "icons/message.svg",
			link: "/calendar"
			
		},
		{
			text: "Results",
			icon: "icons/pie-chart.svg",
			link: "#"

		},
		{
			text: "Edit Profile",
			icon: "icons/folder.svg",
			link: "/EditProfile"
		},
		
	];
	if(user.teacher)
	{
		menuItems.push({
			text: "Create Class",
			icon: "icons/createClass.svg",
			link: "/CreateClass"
		})
	}
	if(user.student)
	{
		menuItems.push({
			text: "Join Class",
			icon: "icons/join.svg",
			link: "/JoinClass"
		})
	}
	return (
		<div
			className={
				isExpanded
					? styles.side_nav_container
					: styles.side_nav_container+" "+styles.side_nav_container_NX
			}
		>
			<div className={styles.nav_upper}>
				<div className={styles.nav_heading}>
					{isExpanded && (
						<div className={styles.nav_brand}>
							<img src="icons/Logo.svg" alt="" srcSet="" />
							<h2>Menu</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? styles.hamburger+" "+ styles.hamburger_in : styles.hamburger+" "+ styles.hamburger_out
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className={styles.nav_menu}>
					{menuItems.map(({ text, icon ,link}) => (
						<a
							className={isExpanded ? styles.menu_item : styles.menu_item+" "+ styles.menu_item_NX}
							href={link}
						>
							<img className={styles.menu_item_icon} src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			
		</div>
	);
};

export default SideNavBar;