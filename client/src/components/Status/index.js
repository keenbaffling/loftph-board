import React from 'react';

export default ({ status }) => {
  return (
    <div>
      <h1>Status</h1>

      {!!status && !!status.length ? (
        <React.Fragment>
          <ul>
            {status.map((item, index) => (
              <li key={index}>
                {item.title} - {item.total} - {item.occupied}
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
