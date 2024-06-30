import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <section className={s.transactionHistory}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.char}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={item.id} className={i % 2 === 1 ? s.tRow : s.tRowGrey}>
              <td className={s.type}>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TransactionHistory;
