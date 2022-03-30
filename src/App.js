import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}

function Stars(props) {
  const htmlStar = props.icon;
  const countStar = props.count;

  let htmlString = '';

  if (props.count < 1 || props.count > 5 || typeof props.count != 'number') {
    throw new Error('I crashed!');
    return null;
  }
  for (let i = 1; i <= countStar; i++) {
    htmlString = htmlString + htmlStar;
  }
  // console.log(out);

  return <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>;
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
          <ErrorBoundary>
            <Stars count={'a'} />
          </ErrorBoundary>
        </li>
      </ul>
    </div>
  );
}
