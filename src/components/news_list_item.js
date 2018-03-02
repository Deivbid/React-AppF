import React from 'react';


const newsItem = ({item}) => {
	return (
		<div key={item.id}>
			<h3>{item.title}</h3>
			<div>
				{item.feed}
			</div>
		</div>	
	)
}

export default newsItem;