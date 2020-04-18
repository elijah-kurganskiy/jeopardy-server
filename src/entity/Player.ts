import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GameEntity } from "./Game";
import { User } from "./User";

@ObjectType("Player")
@Entity("player")
export class PlayerEntry extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public userId!: number;

  @Column()
  public gameId!: number;

  @Field()
  @Column()
  public score: number;

  @Field(() => GameEntity)
  @ManyToOne((type) => GameEntity, (game) => game.players)
  @JoinColumn()
  public game!: GameEntity;

  @Field(() => User)
  @ManyToOne((type) => User)
  @JoinColumn()
  public user!: User;
}
