import React from 'react';

export default ({ users }) => {
  return (
    <div>
      <h1>In Space</h1>

      {!!users && !!users.length ? (
        <React.Fragment>
          {/* {console.log(users)} */}
          <ul>{users.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </React.Fragment>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
