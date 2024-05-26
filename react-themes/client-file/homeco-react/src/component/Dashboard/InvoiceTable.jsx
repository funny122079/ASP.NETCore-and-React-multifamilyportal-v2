import { useState } from "react";
import Layout from "./Layout";
import TableData from "./TableData";
import InvoiceView from "../Modal";
import Pagination from "../Pagination";

function InvoiceTable() {
  // open invoice in modal
  const [viewInvoice, setViewInvoice] = useState(false);
  const toggleModal = () => {
    setViewInvoice(!viewInvoice);
  };

  // handle pages
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 24;

  const handelPage = (page) => {
    if (page === "prev") {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } else if (page === "next") {
      if (currentPage < totalPage) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      setCurrentPage(page);
    }
  };
  return (
    <Layout title="Invoice">
      <InvoiceView
        isOpen={viewInvoice}
        handleModal={toggleModal}
        invoice={{
          name: "Abdullah Mamun",
          number: "+0938 4937 23",
          email: "Youremailad@gmail.com",
          location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
          orderId: "Abdullah Mamun",
          amount: 600,
          paymentMethod: "Paypal",
          transactionId: "34344354532",
          packages: "Pro",
          purchaseDate: "2023-02-23",
          expiredDate: "2023-02-23",
        }}
      />
      <div className="homec-invoices">
        <table className="homec-invoice-table">
          <thead className="homec-invoice-table__head">
            <tr>
              <th className="homec-invoice-table__column1">Packages</th>
              <th className="homec-invoice-table__column2">Purchase Date</th>
              <th className="homec-invoice-table__column3">Expired Date</th>
              <th className="homec-invoice-table__column4">Amount</th>
              <th className="homec-invoice-table__column5">View</th>
            </tr>
          </thead>
          <tbody className="homec-invoice-table__body">
            <TableData
              packages="Pro"
              purchaseDate="2023-02-23"
              expiredDate="2023-02-23"
              amount={600}
              openModal={toggleModal}
            />
            <TableData
              packages="Pro"
              purchaseDate="2023-02-23"
              expiredDate="2023-02-23"
              amount={600}
              openModal={toggleModal}
            />
            <TableData
              packages="Pro"
              purchaseDate="2023-02-23"
              expiredDate="2023-02-23"
              amount={600}
              openModal={toggleModal}
            />
            <TableData
              packages="Pro"
              purchaseDate="2023-02-23"
              expiredDate="2023-02-23"
              amount={600}
              openModal={toggleModal}
            />
            <TableData
              packages="Pro"
              purchaseDate="2023-02-23"
              expiredDate="2023-02-23"
              amount={600}
              openModal={toggleModal}
            />
            <TableData
              packages="Pro"
              purchaseDate="2023-02-23"
              expiredDate="2023-02-23"
              amount={600}
              openModal={toggleModal}
            />
            <TableData
              packages="Pro"
              purchaseDate="2023-02-23"
              expiredDate="2023-02-23"
              amount={600}
              openModal={toggleModal}
            />
            <TableData
              packages="Pro"
              purchaseDate="2023-02-23"
              expiredDate="2023-02-23"
              amount={600}
              openModal={toggleModal}
            />
          </tbody>
        </table>
      </div>
      <Pagination
        totalPage={totalPage}
        handlePage={handelPage}
        currentPage={currentPage}
      />
    </Layout>
  );
}

export default InvoiceTable;
