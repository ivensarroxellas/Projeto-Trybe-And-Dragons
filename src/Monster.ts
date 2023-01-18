import Archetype from './Archetypes';
import Energy from './Energy';
import { Elf } from './Races';

export default abstract class Race {
  private _race: Race | Elf;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  public _name: string;

  constructor(name : string) {
    this._name = name;
    this._dexterity = Math.floor(Math.random() * 10) + 1;
    this._race = type_ Elf;

  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}