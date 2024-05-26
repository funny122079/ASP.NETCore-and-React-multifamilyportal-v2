import DashboardCard from "../Cards/DashboardCard";
import Layout from "./Layout";

function DashboardComp() {
  return (
    <Layout title="Your Dashboard">
      <DashboardCard
        image="img/dash-icon1.svg"
        text="Publish Property"
        count={656}
      />
      <DashboardCard
        image="img/dash-icon2.svg"
        text="Expire Property"
        count={45}
      />
      <DashboardCard
        image="img/dash-icon3.svg"
        text="Client Review"
        count={345}
      />
      <DashboardCard image="img/dash-icon4.svg" text="My order" count={34} />
      <DashboardCard image="img/dash-icon5.svg" text="Saved" count={324} />
      <DashboardCard
        image="img/dash-icon6.svg"
        text="Support Ticket"
        count={676}
      />
    </Layout>
  );
}

export default DashboardComp;
