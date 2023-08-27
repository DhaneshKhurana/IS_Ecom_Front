function validateCredentials() {
  let id = document.getElementById("email").value.toLowerCase();
  let pwd = document.getElementById("pwd").value;
  console.log("id and password", id, pwd);

  if (id === "admin@admin.com" && pwd == 123456) {
    const successToast = document.getElementById("successToast");
    console.log("sucessToast found", successToast);
    const toast = new bootstrap.Toast(successToast);
    toast.show();
  } else {
    const unsuccessToast = document.getElementById("unsuccessToast");
    console.log("unsucessToast found", unsuccessToast);
    const toast = new bootstrap.Toast(unsuccessToast);
    toast.show();
  }
}
