import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Stars(props) {
  const icon = props.icon;
  const count = props.count;

  let htmlIcon = '';

  if (props.count < 1 || props.count > 5 || typeof props.count != 'number') {
    // throw new Error('I crashed!');
    return null;
  }
  for (let i = 1; i <= count; i++) {
    htmlIcon = htmlIcon + icon;
  }
  // console.log(out);

  return <div dangerouslySetInnerHTML={{ __html: htmlIcon }}></div>;
}

Stars.defaultProps = {
  count: 0,
  icon: '<svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28"  xmlns="http://www.w3.org/2000/svg"><path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" /><path d="M0 0h18v18H0z" fill="none" /></svg>',
};

Stars.propTypes = {
  count: PropTypes.number,
};

export default function App() {
  return (
    <div>
      <ul class="card-body-stars u-clearfix">
        <li>
          <Stars count={2} />
        </li>
      </ul>
    </div>
  );
}
