module.exports.handler = async (event, context) => {
  const unixTime = Math.floor(Date.now() / 1000);
  return {
    statusCode: 200,
    body: `hihi ----The Unix time is ${unixTime}`,
  };
};
