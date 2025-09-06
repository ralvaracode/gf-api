import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity(process.env.DB_TABLE_NAME)
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: true })
  Name: string;

  @Column({ name: "Card Type", type: "varchar", length: 7, nullable: true })
  CardType: string;

  @Column({
    name: "Card Sub Type",
    type: "varchar",
    length: 10,
    nullable: true,
  })
  CardSubType: string;

  @Column({ type: "varchar", length: 5, nullable: true })
  Attribute: string;

  @Column({ type: "varchar", length: 13, nullable: true })
  MonsterType: string;

  @Column({ type: "varchar", length: 6, nullable: true })
  Class: string;

  @Column({ type: "varchar", length: 2, nullable: true })
  Level: string;

  @Column({ type: "varchar", length: 4, nullable: true })
  ATK: string;

  @Column({ type: "varchar", length: 4, nullable: true })
  DEF: string;

  @Column({ type: "varchar", length: 643, nullable: true })
  CardText: string;
}
