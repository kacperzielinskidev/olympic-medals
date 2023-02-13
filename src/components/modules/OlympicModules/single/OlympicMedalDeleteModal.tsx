import { Modal } from "@mantine/core";
import { useRouter } from "next/router";
import { IoCloseOutline } from "react-icons/io5";
import { api } from "../../../../utils/api";
import { Button } from "../../../common";
import { Notification } from "../../../common/Notification";

interface IModal {
  open: boolean;
  setOpen: (_val: boolean) => void;
}

export const OlympicMedalDeleteModal = ({ open, setOpen }: IModal) => {
  const router = useRouter();
  const { olympicMedalId } = router.query;

  const deleteOlympicMedalMutation = api.olympicMedals.delete.useMutation({
    onSuccess() {
      Notification.success({ message: "Country deleted successfully" });
      void router.push("/olympic-medals");
    },
    onError(error) {
      Notification.error({ message: error?.message });
    },
  });

  const handleDelete = () => {
    deleteOlympicMedalMutation.mutate({
      olympicMedalId: olympicMedalId as string,
    });
  };

  return (
    <Modal opened={open} onClose={() => setOpen(false)} size={500}>
      <div className="flex flex-col items-center justify-start">
        <div className="-mt-6 rounded-full border-2 border-rose-500 p-2 text-6xl text-rose-500">
          <IoCloseOutline />
        </div>
        <span className="mt-6 text-2xl text-gray-700">Are you sure?</span>
        <span className="mt-4 text-center text-gray-500">
          Do you really want to delete this Country? This process cannot be
          undone.
        </span>
        <div className="mt-8 grid w-full grid-cols-2 gap-4">
          <Button custom="outline" type="button" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button custom="danger" type="button" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};
