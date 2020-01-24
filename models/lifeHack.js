// #### Sets up the lifeHack_db table in mysql
// #### table name = hacks
// #### column 1 = imageHacks
// #### column 2 = text (explanation of the hack)
// ==============================================================================

module.exports = function (sequelize, DataTypes) {
  var Hacks = sequelize.define("hacks", {
    imageHacks: DataTypes.STRING,
    text: DataTypes.STRING
  });
  return Hacks;
};
