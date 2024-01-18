import { BOOLEAN, INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Users from './users';

class Tasks extends Model {
  id!: number;
  title!: string;
  description!: string;
  isFavorite!: boolean;
  color!: string;
  userId!: number;
}

Tasks.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: STRING,
      allowNull: false,
    },
    isFavorite: {
      type: BOOLEAN,
      allowNull: false,
      field: 'is_favorite',
    },
    color: {
      type: STRING,
      allowNull: false,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
      field: 'user_id',
    },
  },
  {
    sequelize: db,
    modelName: 'tasks',
    timestamps: false,
  }
);

Tasks.belongsTo(Users, { foreignKey: 'userId', as: 'id' });

export default Tasks;
