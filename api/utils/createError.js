// create an error
export const createError = (msg, status) => {
  const err = new Error();
  (err.message = msg), (err.status = status), (err.stack = "");

  return err;
};
