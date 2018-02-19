
module.exports = (sequelize, DataTypes) => {
  const Notes = sequelize.define('Notes', {
    title: DataTypes.STRING,
    note: DataTypes.STRING,
    userid: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return Notes;
};
