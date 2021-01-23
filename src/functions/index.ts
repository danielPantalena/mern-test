export const generateErrorJSON = (messageParam: string) => {
  const message = messageParam ? messageParam : 'Opss... something went wrong';
  return {
    error: true,
    ok: false,
    message,
  };
};
