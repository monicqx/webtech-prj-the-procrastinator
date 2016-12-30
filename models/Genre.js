"use strict";

module.exports = function(sequelize, DataTypes) {
  var Genre = sequelize.define("Genre", {
    name: {
        type: DataTypes.STRING,
        field: 'name',
        allowNull:false
      },
  }, {
    timestamps: false,
    tableName: 'genres',
    classMethods: {
      associate: function(models) {
        Genre.hasMany(models.TvShow)
      }
    }
  }
  );

  return Genre;
};