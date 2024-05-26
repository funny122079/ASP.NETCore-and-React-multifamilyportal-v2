import { useEffect, useState } from "react";
import Header from "../Header";
import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import DownloadApp from "../DownloadApp";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
import DashboardComp from "./DashboardComp";
import MyProperties from "./MyProperties";
import InvoiceTable from "./InvoiceTable";
import PersonalInfo from "./PersonalInfo";
import Saved from "./Saved";
import Reviews from "./Reviews";
import ChangePassword from "./ChangePassword";
import { useNavigate } from "react-router-dom";
import GoTopBtn from "../Button/GoTopBtn";
import Preloader from "../Loader";

function Dashboard() {
  // Inner navigation
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const navigate = useNavigate();

  // navigate to logout
  useEffect(() => {
    if (activeComponent === "Logout") {
      navigate("/");
    }
  }, [activeComponent, navigate]);

  // loading handle

  const [isLoading, setisLoadingg] = useState(true);
  useEffect(() => {
    setisLoadingg(false);
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <>
        <Header />
        <Breadcrumbs
          title={activeComponent}
          titlePosition="bottom"
          overlay={true}
        >
          <HistoryLinks link="/home" text="Home" />
          <HistoryLinks link="/dashboard" text="Dashboard" isActive={true} />
        </Breadcrumbs>
        <section className="homec-dashboard pd-top-100 pd-btm-100 homec-bg-third-color">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="homec-dashboard__middle">
                  <div className="row">
                    <Sidebar
                      activeComponent={activeComponent}
                      setComponent={setActiveComponent}
                    />
                    {activeComponent === "Dashboard" && <DashboardComp />}

                    {activeComponent === "My Properties" && <MyProperties />}
                    {activeComponent === "Invoice" && <InvoiceTable />}
                    {activeComponent === "Personals Info" && <PersonalInfo />}
                    {activeComponent === "Saved" && <Saved />}
                    {activeComponent === "Reviews" && <Reviews />}
                    {activeComponent === "Change Password" && (
                      <ChangePassword />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <DownloadApp />
        <Footer />
        <GoTopBtn />
      </>
    );
  }
  return component;
}

export default Dashboard;
