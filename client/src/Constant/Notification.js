import { toast } from "react-toastify";

const handleError = (err, position) => {
  toast.error(err, {
    position: position,
  });
};

const handleSuccess = (msg, position) =>
  toast.success(msg, {
    position: position,
  });

export { handleError, handleSuccess };
