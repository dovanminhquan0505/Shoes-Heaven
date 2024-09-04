import DashboardMenu from "../components/DashboardMenu";

let summary = {};

const DashboardScreen = {
    after_render: () => {
        
    },
    render: async () => {
        summary = await getSummary();
        return `
            <div class="dashboard">
                ${DashboardMenu.render({selected:'dashboard'})}
                <div class="dashboard-content">
                    <h1>Dashboard</h1>
                    <div>
                        <ul class="summary-items">
                            <li>
                                <div class="summary-title color1">
                                    <span><i class="fa fa-users"></i> Users</span>
                                </div>
                                <div class="summary-body">10</div>
                            </li>
                            <li>
                                <div class="summary-title color2">
                                    <span><i class="fa fa-users"></i> Orders</span>
                                </div>
                                <div class="summary-body">15</div>
                            </li>
                            <li>
                                <div class="summary-title color3">
                                    <span><i class="fa fa-users"></i> Sales</span>
                                </div>
                                <div class="summary-body">150</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    },
}

export default DashboardScreen;