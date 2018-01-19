import React from 'react';

export default ({ users }) => {
  return (
    <div>
      {!!users && !!users.length ? (
        <React.Fragment>
          {users.map((item, index) => <img className="img img--avatar" key={index} src={item} alt="" />)}
        </React.Fragment>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
