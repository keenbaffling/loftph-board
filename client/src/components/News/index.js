import React from 'react';

export default ({ news }) => {
  return (
    <div>
      <h1>News</h1>

      {!!news && !!news.length ? (
        <React.Fragment>
          <ul>
            {news.map((item, index) => (
              <li key={index}>
                {item.title} - {item.date} - {item.location}
              </li>
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
