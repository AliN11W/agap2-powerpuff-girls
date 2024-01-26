export const handleResponse = (response: Response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response.json();
};
