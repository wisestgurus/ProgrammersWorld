import * as express from 'express';
import { ComputationalThinkingController } from './computational-thinking-controller';

export function computationalThinkingRoutes() {

    const computationalThinkingStartingPath = '/computational_thinking';

    const { computationalThinkingIntroduction, computationalThinkingDecomposition } = ComputationalThinkingController;

    const computationalThinkingRoutes = express.Router();

    computationalThinkingRoutes.route(`${computationalThinkingStartingPath}/introduction`).get(computationalThinkingIntroduction);
    computationalThinkingRoutes.route(`${computationalThinkingStartingPath}/decomposition`).get(computationalThinkingDecomposition);

    return computationalThinkingRoutes;
}