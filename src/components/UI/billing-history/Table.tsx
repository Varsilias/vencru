import downloadIcon from "../../../assets/download-icon.svg";
import goodIcon from "../../../assets/good.svg";
import arrowDown from "../../../assets/arrow-down.svg";
import { table_data as data } from "./data";
import "./style.css";

const Table = () => {
  return (
    <section className="table_data block w-full drop-shadow-md md:px-4">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="select_row" id="select_row" />
            </th>
            <th className="flex">
              <span className="mr-1">Invoice</span>{" "}
              <img src={arrowDown} alt="arrow_down" className="pt-[2px]" />
            </th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Users on plan</th>
            <th className="opacity-0">Hey</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>
                <input type="checkbox" name="select_row" id="select_row" />
              </td>
              <td>{item.planType}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td>
              <td>
                <button className="flex text-center py-2 px-4 rounded-2xl font-medium text-xs text-[#027A48] bg-[#ECFDF3]">
                  <img
                    src={goodIcon}
                    alt="good_icon"
                    className="mr-1 pt-1"
                    width="13px"
                  />
                  <span className="pr-1">Paid</span>
                </button>
              </td>
              <td>
                <img src={item.users} alt="users_on_plan" width="100px" />
              </td>
              <td>
                <img
                  src={downloadIcon}
                  width="20px"
                  alt=""
                  className="text-[#667085]"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
