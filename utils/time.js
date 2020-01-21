exports.getDate = () => {
  const date = new Date();
  return date.toJSON().split('T')[0];
};

exports.getTimestamp = () => {
  const date = new Date();
  return date.toJSON();
};
