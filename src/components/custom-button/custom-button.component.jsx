import classNames from 'classnames';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  const buttonClassNames = classNames('custom-button', {
    inverted,
    'google-sign-in': isGoogleSignIn,
  });

  return (
    <button className={buttonClassNames} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
