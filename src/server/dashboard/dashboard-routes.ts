import * as express from 'express';
import { DashboardController } from './dashboard-controller';

export function dashboardRoutes() {
    const { dashboard } = DashboardController;

    const dashboardRoutes = express.Router();

    dashboardRoutes.route('/').get(dashboard);

    return dashboardRoutes;
}
