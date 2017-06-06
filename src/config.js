const env = process.env.NODE_ENV;
const common = {
  port: 8880
};
const config = {
  develop: {
  },
  production: {
  },
  test: {
  }
};
export default Object.assign(common, config[env]);
