const env = process.env;
export default {
  env: env.NODE_ENV || 'development',
  port: env.PORT || 8000,
  host: env.HOST || '0.0.0.0',
  get hostUrl() {
    return `http://${this.host}:${this.port}`
  }
};
