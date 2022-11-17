import TableComponent from "../../Component/Table/Main.table";
import MainInput from "../../Component/TextField/Main.textfield";
import PageTitle from "../../Component/Title/Page.title";

const InventoryContainer = () => {
  return (
    <>
      <div className="float-left">
        <PageTitle size={50} title="Inventory" />
      </div>
      <div className="float-right">
        <div className="flex flex-col">
          <div className="flex-row">
            <PageTitle size={20} width="8" title="FILTER BY" />
            <MainInput
              placeholder="placeholder"
              value=""
              handleChange={() => {}}
              errors={{}}
              touched={{}}
              name="place"
              isPassword={false}
            />
            <MainInput
              placeholder="placeholder"
              value=""
              handleChange={() => {}}
              errors={{}}
              touched={{}}
              name="place"
              isPassword={false}
            />
          </div>
        </div>
      </div>
      <TableComponent />
    </>
  );
};

export default InventoryContainer;
