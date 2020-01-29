module.exports = function (sequelize, DataTypes) {
    var Schedule = sequelize.define("schedule", {
        topic: DataTypes.STRING
    });
    return Schedule;
};

