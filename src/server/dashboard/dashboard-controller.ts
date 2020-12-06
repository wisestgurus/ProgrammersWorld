import { dashboardDataInterface } from '../../app/dashboard/dashboard.interface';
import { computationalThinkingButtonsConfig, webDevelopmentButtonsConfig } from '../../app/shared/shared';

export class DashboardController {
    static dashboard(req, res) {

        const dashboardData: dashboardDataInterface[] = [
            {
                name: 'tutorials', items: [
                    {
                        name: computationalThinkingButtonsConfig.main.name,
                        path: computationalThinkingButtonsConfig.main.path,
                        overviews: [
                            'Computational thinking is a problem solving skill',
                            'Whether you are a beginner, an intermediate or an expert in computational thinking, this tutorial is for you',
                            'Computational thinking is very simple and fun to learn - You will enjoy it'

                        ]
                    },

                    {
                        name: webDevelopmentButtonsConfig.main.name,
                        path: webDevelopmentButtonsConfig.main.path,
                        overviews: [
                            'Web development is all about programming (or building) and maintaining the functionality of a website',
                            'A web developer is someone who has web development skills',
                            'Whether you are a beginner, an intermediate or an expert in web development, this tutorial is for you - You will enjoy it'
                        ]
                    }
                ]
            }
        ]

        res.json(dashboardData);
    }
}