import { useState } from "react";
import FilterTabBtn from "../Filter/FilterTabBtn";
import HomecFilter from "../Filter/HomecFilter";

function HomecHero() {
  const [filter, setFilter] = useState("Rent");
  const handleFilter = (name) => {
    setFilter(name);
  };
  return (
    <section
      id="hero"
      className="homec-hero homec-bg-cover p-relative"
      style={{ backgroundImage: "url('https://placehold.co/1920x950')" }}
    >
      <div className="homec-overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10 offset-md-1 col-12">
            <div className="homec-hero__inner">
              <svg
                className="homec-arrow-left"
                width="106"
                height="193"
                viewBox="0 0 106 193"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.5023 1.15691C14.2375 16.2178 -4.14265 43.6931 1.00245 74.3315C2.53343 83.4634 6.44872 93.3821 13.1666 100.543C11.7779 112.322 13.677 124.712 18.1444 135.489C24.5277 150.884 36.148 165.77 52.4032 172.661C62.4926 176.936 73.8871 178.399 84.5622 176.158C81.5002 179.845 78.8816 183.843 76.9324 188.127C75.3846 191.505 79.9859 194.096 82.2113 190.98C88.4356 182.269 94.8272 174.624 103.821 168.305C107.786 165.523 104.599 160.27 100.073 162.042C93.815 164.474 88.3687 161.589 84.2359 157.234C81.4333 154.285 76.4555 158.045 78.4633 161.415C81.1906 165.977 85.7752 168.631 90.8032 169.577C90.7279 169.648 90.6526 169.72 90.5857 169.783C51.575 182.905 18.7635 141.927 19.4495 105.828C21.1729 106.941 23.0218 107.903 25.0045 108.658C37.6456 113.498 51.8009 109.079 61.7899 101.004C71.8793 92.8337 79.0657 78.9173 71.9295 66.8765C65.3538 55.7815 50.5292 55.7497 39.8375 60.9793C27.1881 67.1785 19.3993 77.5344 15.576 89.3844C12.6563 84.5443 10.7572 79.0206 9.75329 73.9182C4.36558 46.6734 21.1311 20.446 43.7193 4.8685C45.9949 3.29485 44.0539 -0.249828 41.5023 1.15691ZM26.6945 80.5227C32.6678 71.208 44.2714 61.488 56.5946 62.402C63.9818 62.9504 68.6249 68.9032 68.9763 75.6588C69.3109 82.1441 65.5713 88.1287 60.8863 92.5635C53.3151 99.7085 41.0924 104.962 30.3755 101.711C26.5355 100.543 23.2895 98.4448 20.5705 95.7823C21.6916 90.362 23.6911 85.2039 26.6945 80.5227Z"
                  fill="#F2C94C"
                />
              </svg>
              {/* <!-- Hero Content --> */}
              <div className="homec-hero__content">
                <h1 className="homec-hero__title">
                  Let’s Find Your Perfect Home For You.
                </h1>
                {/* <!-- Hero Tabs --> */}
                <div className="homec-hero__tabs">
                  {/* <!-- Features Tab List --> */}
                  <div
                    id="homec-tabs"
                    className="list-group homec-tabs homec-tabs--noborder"
                    role="tablist"
                  >
                    <FilterTabBtn
                      link="#homec-tab1"
                      text="Rent"
                      isActive={filter}
                      handleFilter={handleFilter}
                    />
                    <FilterTabBtn
                      link="#homec-tab2"
                      text="Sell"
                      isActive={filter}
                      handleFilter={handleFilter}
                    />
                    <FilterTabBtn
                      link="#homec-tab3"
                      text="Pre-approval"
                      isActive={filter}
                      handleFilter={handleFilter}
                    />
                  </div>
                </div>
                <div className="homec-hero__tabs--detail">
                  <div className="tab-content" id="nav-tabContent">
                    {filter === "Rent" ? (
                      <HomecFilter />
                    ) : filter === "Sell" ? (
                      <HomecFilter />
                    ) : (
                      filter === "Pre-approval" && <HomecFilter />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomecHero;
