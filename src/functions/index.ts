export const generateErrorJSON = (messageParam: string) => {
  const message = messageParam ? messageParam : 'Opss... something went wrong';
  ({
    error: true,
    ok: false,
    message,
  });
};
