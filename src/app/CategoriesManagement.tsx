import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { categoriesColumns, categoriesData } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import CustomButton from "../component/shared/CustomButton";
import { useState } from "react";
import AddCategorie from "../component/partial/AddCategorie";
import { useRequest } from "../hooks/useRequest";
import { categories, categoriesDelete } from "../repositories";
const CategoriesManagement = () => {
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any | undefined>(null);

  const { data, setData } = useRequest(categories.url, categories.method, {
    type: "mount",
  });

  const { execute } = useRequest(
    categoriesDelete.url,
    categoriesDelete.method,
    {
      type: "delay",
    }
  );

  const handleDelete = (id: string) => {
    execute({
      routeParams: id,
      cbSuccess: () => {
        setData((p: any) => p.filter((item: any) => item._id !== id));
      },
    });
  };

  return (
    <HomeLayout>
      <div className="flex items-center justify-between">
        <p className="text-[#171717] text-[32px] red-bold">
          Categories Management
        </p>
        <CustomButton title="Add" onClick={() => setOpen(true)} />
      </div>

      <TableData
        title="View List of categories"
        columns={categoriesColumns({
          setOpen,
          setSelectedRecord,
          handleDelete,
        })}
        data={categoriesData}
        // loading={loading}
        // pagination={pagination}
        // onPaginationChange={onPaginationChange}
      />
      {open && (
        <AddCategorie
          record={selectedRecord}
          isModalOpen={open}
          handleCancel={() => setOpen(false)}
          setData={setData}
          categories={data}
          setSelectedRecord={setSelectedRecord}
        />
      )}
    </HomeLayout>
  );
};

export default withAuthGuard(CategoriesManagement);
