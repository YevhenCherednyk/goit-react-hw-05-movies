import { Link } from 'react-router-dom';

const GoBackBtn = ({ to, children }) => {
  return (
    <button type="button">
      <Link to={to}>{children}</Link>;
    </button>
  );
};

export default GoBackBtn;
