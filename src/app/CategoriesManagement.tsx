import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { categories, categoriesColumns } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import CustomButton from "../component/shared/CustomButton";
import { useState } from "react";
import AddCategorie from "../component/partial/AddCategorie";

const CategoriesManagement = () => {
  const [open, setOpen] = useState(false);
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
        columns={categoriesColumns}
        data={categories}
      />
      {open && (
        <AddCategorie isModalOpen={open} handleCancel={() => setOpen(false)} />
      )}
    </HomeLayout>
  );
};

export default withAuthGuard(CategoriesManagement);
