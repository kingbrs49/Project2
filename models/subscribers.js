module.exports = function (sequelize, DataTypes) {
    var subscribers = sequelize.define("subscribers", {
      name: DataTypes.STRING,
      mail: DataTypes.STRING
    });
    return subscribers;
  };
  