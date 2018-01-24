import React from 'react';

import ListItem from './ListItem';

export default props => {
  const { items } = props;

  return (
    <React.Fragment>
      {!!items && !!items.length ? (
        <div className="news news--wrap mb-0">
          <div className="news__overlay" />
          {items.map((item, index) => (
            <ListItem
              index={index}
              date={item.date}
              title={item.title}
              location={item.location}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </React.Fragment>
  );
};
