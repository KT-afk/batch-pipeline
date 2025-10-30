import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { v4 } from "uuid";
@Table({
  tableName: "BATCH_JOB",
  timestamps: false,
  indexes: [
    {
      name: "IDX_NWP_NOTIFICATION_ARCHIVE_ARCHIVEDAT",
      concurrently: false,
      fields: ["ARCHIVEDAT"],
    },
  ],
})
export default class SUBTITLE_BATCH_JOB extends Model<
  InferAttributes<SUBTITLE_BATCH_JOB>,
  InferCreationAttributes<SUBTITLE_BATCH_JOB>
> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: v4,
    allowNull: false,
    field: "id",
  })
  declare id: string;
  declare job_id: string;
  declare status: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare completed_at: Date | null;
  
}
