import Swal from "sweetalert2";
import { toast } from "vue3-toastify";
import { Inertia } from "@inertiajs/inertia";
const utils = {
  async deleteIndexDialog(route, data, index) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const loading = Swal.fire({
          title: "Deleting...",
          allowOutsideClick: false,
          didOpen: async () => {
            const response = await axios.delete(
              route
            ).then((response2) => {
              if (response2.data.success) {
                toast.success(response2.data.message);
                data.splice(index, 1);
              } else {
                toast.error(response2.data.message);
              }
            }).catch((error) => {
              toast.error(error.message);
            }).finally(() => {
              loading.close();
            });
            return response;
          }
        });
        Swal.showLoading();
      }
    });
  },
  async deleteDataDialog(route, redirect_to = null) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const loading = Swal.fire({
          title: "Deleting...",
          allowOutsideClick: false,
          didOpen: async () => {
            const response = await axios.delete(
              route
            ).then((response2) => {
              if (response2.data.success) {
                toast.success(response2.data.message);
                if (redirect_to) {
                  Inertia.get(
                    redirect_to,
                    {
                      preserveState: true
                    }
                  );
                }
              } else {
                toast.error(response2.data.message);
              }
            }).catch((error) => {
              toast.error(error.message);
            }).finally(() => {
              loading.close();
            });
            return response;
          }
        });
        Swal.showLoading();
      }
    });
  },
  async changeStatus(route, params) {
    await axios.post(route, params).then((response) => {
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    }).catch(function(error) {
      toast.error(error.message);
    });
  },
  async importFile(route, redirect_to = null, e) {
    const file = e.currentTarget.files[0];
    this.selectedFilename = file == null ? void 0 : file.name;
    this.url = URL.createObjectURL(file);
    const config = {
      headers: { "content-type": "multipart/form-data" }
    };
    const formData = new FormData();
    formData.append("file", file);
    return axios.post(route, formData, config).then(function(response) {
      if (response.data.success) {
        toast.success(response.data.message);
        if (redirect_to) {
          Inertia.get(
            redirect_to,
            {
              preserveState: true
            }
          );
        }
      } else {
        toast.error(response.data.message);
      }
    }).catch(function(error) {
      toast.error(error.message);
    });
  },
  successToast(message) {
    toast.success(message);
  },
  errorToast(message) {
    toast.error(message);
  }
};
export {
  utils as u
};
