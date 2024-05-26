import ProtoTypes from "prop-types";

function TableData({ packages, purchaseDate, expiredDate, amount, openModal }) {
  return (
    <tr>
      <td className="homec-invoice-table__column1">
        <p className="homec-invoice-table__text">{packages}</p>
      </td>
      <td className="homec-invoice-table__column2">
        <p className="homec-invoice-table__text">{purchaseDate}</p>
      </td>
      <td className="homec-invoice-table__column3">
        <p className="homec-invoice-table__text">{expiredDate}</p>
      </td>
      <td className="homec-invoice-table__column4">
        <p className="homec-invoice-table__text">${amount}</p>
      </td>
      <td className="homec-invoice-table__column5">
        <button
          data-bs-toggle="modal"
          data-bs-target="#invoice_view"
          className="homec-invoice-table--btn"
          onClick={() => openModal()}
        >
          View
        </button>
      </td>
    </tr>
  );
}

TableData.propTypes = {
  packages: ProtoTypes.string.isRequired,
  purchaseDate: ProtoTypes.string.isRequired,
  expiredDate: ProtoTypes.string.isRequired,
  amount: ProtoTypes.number.isRequired,
  openModal: ProtoTypes.func.isRequired,
};

export default TableData;
