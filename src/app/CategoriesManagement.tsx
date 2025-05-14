import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { categoriesColumns } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import CustomButton from "../component/shared/CustomButton";
import { useState } from "react";
import { useRequest } from "../hooks/useRequest";
import { categories, categoriesDelete } from "../repositories";
import { Category } from "../types";
import AddCategory from "../component/partial/AddCategory";

const CategoriesManagement = () => {
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<Category | null>(null);

  const { data, setData, loading, pagination, onPaginationChange } = useRequest(
    categories.url,
    categories.method,
    {
      type: "mount",
      params: { parent: "all" },
    }
  );

  const { execute, loading: loadingDelete } = useRequest(
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
        setData((p: Category[]) => p.filter((item) => item._id !== id));
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
        data={data as Category[]}
        loading={loading || loadingDelete}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
      />
      {open && (
        <AddCategory
          record={selectedRecord}
          isModalOpen={open}
          handleCancel={() => setOpen(false)}
          setData={setData}
          setSelectedRecord={setSelectedRecord}
        />
      )}
    </HomeLayout>
  );
};

export default withAuthGuard(CategoriesManagement);
