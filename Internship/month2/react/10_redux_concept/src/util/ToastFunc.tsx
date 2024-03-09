import { Bounce, toast } from "react-toastify";

export const toastFuncWarn = (toastContent: string) => {
  toast.dismiss();
  toast.warn(toastContent, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

export const toastFuncSuccess = (toastContent: string) => {
  toast.dismiss();
  toast.success(toastContent, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
