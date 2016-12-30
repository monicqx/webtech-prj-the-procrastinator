
module.exports = function(sequelize, DataTypes) {
    // define entity
   var TvShow = sequelize.define('TvShow', {
      name: {
        type: DataTypes.STRING,
        field: 'name',
        allowNull:false
      },
      rating: {
        type: DataTypes.STRING,
        field: 'rating',
        allowNull:false,
        validate: {
          isFloat:true, 
          min: 0, 
          max: 10
        }
      },
      review: {
        type: DataTypes.STRING,
        field: 'review'
      }
    },{
    timestamps: false,
    tableName: 'tvshows',
    classMethods: {
      associate: function(models) {
        TvShow.belongsTo(models.Genre, {  //autogenerates foreignKey using Camel Case
          onDelete: "CASCADE",
          //foreignKey:'genre_id'
        });
      }
    }
  });
    
    return TvShow;
}