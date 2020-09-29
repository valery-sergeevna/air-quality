import React, { useState } from 'react';

const SectorItem = ({ sector, number }) => {
	const [isToolTipShowing, setToolTipShowing] = useState(false);
	const [isDirectionSwitched, setDirectionSwitched] = useState(false);
	const toggleToolTip = (newValue) => {
		setDirectionSwitched((number % 3 === 0));
		setToolTipShowing(newValue);
	}

	return (
		<div className="sectors-list__item"
			onMouseEnter={() => toggleToolTip(true)}
			onMouseLeave={() => toggleToolTip(false)}
			style={{
				background: `url(${sector.imgUrl}) center no-repeat`,
				backgroundSize: 'cover'
			}}>
			<p className="sectors-item__name">
				{sector.name}
			</p>
			{
				isToolTipShowing && <p className={`sectors-item__tooltip ${isDirectionSwitched
					? "sectors-item__tooltip-switched"
					: ""
					}`}>
					<span className="sectors-item__name sectors-item__name-top">
						{sector.name}
					</span>
					{sector.decs}
				</p>
			}
		</div>
	);
};

export default SectorItem;