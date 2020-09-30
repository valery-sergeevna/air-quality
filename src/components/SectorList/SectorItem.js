import React, { useState } from 'react';
import MediaQuery from 'react-responsive';


const SectorItem = ({ sector, number }) => {
	const [isToolTipShowing, setToolTipShowing] = useState(false);
	const [isDirectionSwitched, setDirectionSwitched] = useState(false);
	const toggleToolTip = (newValue) => {
		setDirectionSwitched((number % 3 === 0));
		setToolTipShowing(newValue);
	};

	const toggleToolTipOnMobile = () => {
		setToolTipShowing(!isToolTipShowing);
	};

	return (
		//using mediaQueries for desktop and tablet/mobile(hover/click on tooltips)
		<>
			<MediaQuery minDeviceWidth={991}>
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
					{isToolTipShowing && <p className={`sectors-item__tooltip ${isDirectionSwitched
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
			</MediaQuery>

			<MediaQuery maxDeviceWidth={990}>
				<div className="sectors-list__item" onClick={toggleToolTipOnMobile}

					style={{
						background: `url(${sector.imgUrl}) center no-repeat`,
						backgroundSize: 'cover'
					}}>
					<p className="sectors-item__name">
						{sector.name}
					</p>
					{isToolTipShowing && <div className="sectors-item__tooltip">
						<span className="close" onClick={toggleToolTipOnMobile}></span>
						<span className="sectors-item__name sectors-item__name-top">
							{sector.name}
						</span>
						{sector.decs}
					</div>
					}
				</div>
			</MediaQuery>
		</>
	);
};

export default SectorItem;