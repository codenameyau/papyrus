exports.getDate = () => {
  const date = new Date();
  return date.toJSON().split('T')[0];
};
