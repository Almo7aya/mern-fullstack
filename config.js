const env = process.env;
export default {
  env: env.NODE_ENV || 'development',
  port: env.PORT || 8000
};
