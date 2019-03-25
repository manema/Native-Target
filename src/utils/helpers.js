import queryString from 'query-string';

export const applyQueryParams = (url, params) => {
  const queryParams = queryString.stringify(params);
  return `${url}?${queryParams}`;
};

export const normalizeError = (errors) => {
  if (errors.length === 1) return errors[0];
  let error = '';
  errors.forEach((currentError) => {
    error = `${error}, ${currentError}`;
  });
  return error;
};
