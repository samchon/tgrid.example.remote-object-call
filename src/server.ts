import { Driver, WebSocketServer } from "tgrid";

import { ICalcConfig } from "./interfaces/ICalcConfig";
import { ICalcEventListener } from "./interfaces/ICalcEventListener";
import { CompositeCalculator } from "./providers/CompositeCalculator";

export const webSocketServerMain = async () => {
  const server: WebSocketServer<
    ICalcConfig,
    CompositeCalculator,
    ICalcEventListener
  > = new WebSocketServer();
  await server.open(37_000, async (acceptor) => {
    // LIST UP PROPERTIES
    const config: ICalcConfig = acceptor.header;
    const listener: Driver<ICalcEventListener> = acceptor.getDriver();

    // ACCEPT OR REJECT
    await acceptor.accept(new CompositeCalculator(config, listener));
  });
  return server;
};
