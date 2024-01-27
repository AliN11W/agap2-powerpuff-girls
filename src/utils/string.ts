export const limitText = (str: string, limit: number) => {
  if (str.length <= limit) return str;

  return str.substring(0, limit) + "...";
};
