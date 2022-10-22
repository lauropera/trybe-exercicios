const CommentModel = (sequelize, DataTypes) => {
  const CommentsTable = sequelize.define(
    'Comment',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      message: DataTypes.STRING,
      upvoting: DataTypes.INTEGER,
      downvoting: DataTypes.INTEGER,
      accountId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'Comments',
      underscored: true,
    }
  );

  CommentsTable.associate = (models) => {
    CommentsTable.belongsTo(models.Account, {
      as: 'accounts',
      foreignKey: 'accountId',
    });
  };

  return CommentsTable;
};

module.exports = CommentModel;
