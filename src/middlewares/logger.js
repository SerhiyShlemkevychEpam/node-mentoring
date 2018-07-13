export default ({ app }) => {
  app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()}::parsedCookies = ${JSON.stringify(req.parsedCookies)}; parsedQuery = ${JSON.stringify(req.parsedQuery)}`);
    next();
  });
};
