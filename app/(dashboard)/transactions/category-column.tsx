import { TriangleAlert } from "lucide-react";

import { useOpenCategory } from "@/features/categories/hooks/use-open-category";

import { useOpenTransaction } from "@/features/transactions/hooks/use-open-transaction";

import { cn } from "@/lib/utils";

type Props = {
  id: string;
  category: string | null;
  categoryId: string | null;
};

export const CategoryColumn = ({ id, category, categoryId }: Props) => {
  const { onOpen: openCategory } = useOpenCategory();
  const { onOpen: openTransaction } = useOpenTransaction();

  const onClick = () => {
    if (categoryId) {
      openCategory(categoryId);
    } else {
      openTransaction(id);
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center cursor-pointer hover:underline",
        !category && "text-rose-500"
      )}
    >
      {!category && <TriangleAlert />}
      {category || "Uncategorized"}
    </div>
  );
};
