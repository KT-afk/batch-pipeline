import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { v4 } from "uuid";
@Table({
  tableName: "SUBTITLE_BATCH_JOB",
  timestamps: true,
  createdAt: "CREATEDAT",
  updatedAt: "UPDATEDAT",
  indexes: [{ name: "IDX_BATCH_JOB_STATUS", fields: ["STATUS"] }],
})
export default class SubtitleBatchJob extends Model<
  InferAttributes<SubtitleBatchJob>,
  InferCreationAttributes<SubtitleBatchJob>
> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    field: "ID",
  })
  declare id: CreationOptional<string>;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
    field: "FILENAME",
  })
  declare fileName: string;

  @Column({
    type: DataType.STRING(50),
    defaultValue: "PENDING",
    allowNull: false,
    field: "STATUS",
  })
  declare status: string;

  @Column({
    type: DataType.TEXT,
    defaultValue: "",
    allowNull: false,
    field: "ERRORLOG",
  })
  declare errorLog: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    allowNull: false,
    field: "ERRORCOUNT",
  })
  declare errorCount: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
    field: "S3KEY",
  })
  declare s3key: string;

  @Column({
    type: "timestamp without time zone",
    defaultValue: null,
    field: "COMPLETEDAT",
  })
  declare completedAt: Date | null;
}
