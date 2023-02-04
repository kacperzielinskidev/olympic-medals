import { BiLoaderAlt } from "react-icons/bi";
import { Card } from "../Card";

export const DatatableLoader = () => {
  return (
    <Card className="flex w-full items-center justify-center bg-white p-4 text-center text-gray-500">
      <div className="text-primary-light animate-spin">
        <BiLoaderAlt size={32} />
      </div>
    </Card>
  );
};
