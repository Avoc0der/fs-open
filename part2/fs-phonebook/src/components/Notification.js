const Notification = ({ message, error }) => {
  if (message === null) {
    return null;
  }

  const classnames = `message ${error ? 'error' : ''}`
  return <div className={classnames}>{message}</div>;
};

export default Notification;
