import { Driver } from "tgrid";

import { ICalcConfig } from "../interfaces/ICalcConfig";
import { ICalcEventListener } from "../interfaces/ICalcEventListener";
import { ICompositeCalculator } from "../interfaces/ICompositeCalculator";
import { CalculatorBase } from "./CalculatorBase";
import { ScientificCalculator } from "./ScientificCalculator";
import { StatisticsCalculator } from "./StatisticsCalculator";

export class CompositeCalculator
  extends CalculatorBase
  implements ICompositeCalculator
{
  public readonly scientific: ScientificCalculator;
  public readonly statistics: StatisticsCalculator;

  public constructor(
    config: ICalcConfig,
    listener: Driver<ICalcEventListener>,
  ) {
    super(config, listener);
    this.scientific = new ScientificCalculator(config, listener);
    this.statistics = new StatisticsCalculator(config, listener);
  }

  public plus(x: number, y: number): number {
    return this.compute("plus", [x, y], x + y);
  }
  public minus(x: number, y: number): number {
    return this.compute("minus", [x, y], x - y);
  }
  public multiplies(x: number, y: number): number {
    return this.compute("multiplies", [x, y], x * y);
  }
  public divides(x: number, y: number): number {
    return this.compute("divides", [x, y], x / y);
  }
}
