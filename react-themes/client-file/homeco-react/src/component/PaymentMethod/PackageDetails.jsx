function PackageDetails() {
  const data = {
    title: "Pro",
    price: "99",
    period: "Month",
    date: "2023-07-15",
    features: [
      { name: "Property Submission", value: 5 },
      { name: "Amenity", value: 7 },
      { name: "Nearest Place", value: 5 },
      { name: "Photo", value: 3 },
      { name: "Featured Property", value: 3 },
      { name: "Top Property", value: false },
      { name: "Urgent Property", value: true },
    ],
  };

  return (
    <div className="col-lg-8 col-lg-8 col-12">
      <h3 className="homec-package-detail__heading">PACKAGE DETAILS</h3>
      <div className="homec-package-detail">
        <table className="homec-package-detail__table">
          <tbody>
            <tr>
              <td>
                <h4 className="homec-package-detail__title">Package</h4>
              </td>
              <td>
                <span className="homec-package-detail__value">
                  {data.title}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4 className="homec-package-detail__title">Price</h4>
              </td>
              <td>
                <span className="homec-package-detail__value">
                  ${data.price}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4 className="homec-package-detail__title">Expired</h4>
              </td>
              <td>
                <span className="homec-package-detail__value">
                  Date {data.date}
                </span>
              </td>
            </tr>
            {data.features?.map((feature) => (
              <tr key={feature.name}>
                <td>
                  <h4 className="homec-package-detail__title">
                    {feature.name}
                  </h4>
                </td>
                <td>
                  <span className="homec-package-detail__value">
                    {typeof feature.value === "number"
                      ? feature.value
                      : typeof feature.value === "boolean" && feature.value
                      ? "Available"
                      : "Not Available"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PackageDetails;
