import React from 'react';
import anime from 'animejs';

export default ({ users: items }) => {
  let animate = anime({

  });

  return (
    <div className="avatar">
      {!!items && !!items.length ? (
        <React.Fragment>
          {items.map((item, index) => (
            <div className="avatar__item" key={index}>
              <img className="img avatar__item-img" src={item} alt="" />
            </div>
          ))}
        </React.Fragment>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
