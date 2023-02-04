import { showNotification } from "@mantine/notifications";

import { IoCheckmarkSharp, IoClose } from "react-icons/io5";

type DefaultNotificationProps = {
  message?: string;
  title?: string;
};

export const Notification = {
  success: (args: DefaultNotificationProps) =>
    showNotification({
      message: args.message || "Sukces",
      title: args.title,
      color: "green",
      icon: <IoCheckmarkSharp size={20} color="ffffff" />,
    }),

  error: (args: DefaultNotificationProps) =>
    showNotification({
      message: args.message || "Wystąpił błąd. Spróbój ponownie później",
      title: args.title,
      color: "red",
      icon: <IoClose size={20} color="ffffff" />,
    }),

  default: (args: DefaultNotificationProps) =>
    showNotification({
      message: args.message,
      title: args.title,
      color: "violet",
    }),
};
