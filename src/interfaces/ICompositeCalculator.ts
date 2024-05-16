import { IScientificCalculator } from "./IScientificCalculator";
import { IStatisticsCalculator } from "./IStatisticsCalculator";

export interface ICompositeCalculator {
  plus(x: number, y: number): number;
  minus(x: number, y: number): number;
  multiplies(x: number, y: number): number;
  divides(x: number, y: number): number;

  scientific: IScientificCalculator;
  statistics: IStatisticsCalculator;
}
