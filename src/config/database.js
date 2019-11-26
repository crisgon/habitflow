module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'habitflow',
  database: 'habitflow',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
