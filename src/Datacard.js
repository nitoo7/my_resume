import React from "react";


const Datacard = (props) => {
	const { heading, content } = props.data;
	return (
		<div className="dataCard">
			<div className="heading">
				{heading}
			</div>
			{content.map(item => (
				<div className="content">
					{ item.img && <div className="img">
						<img src={item.img} />
					</div>}
					<div className="details">
						{
							item.title && <div className="title">
								{item.title}
							</div>
						}
						{
							item.subtitle && <div className="subtitle">
								{item.subtitle}
							</div>
						}
						{
							item.date && <div className="date">
								{item.date}
							</div>
						}
						{
							item.desc && <div className="desc">
								{
									item.desc.map(descItem => (
										<div className="descItem">
											{descItem}
										</div>
									))
								}
							</div>
						}
						{
							item.link && <div className="link">
								<a href={item.link.link}>{item.link.text}</a>
							</div>
						}
					</div>
				</div>
			))}
		</div>
	);
}

export default Datacard;