function validateCredentials() {
  let id = document.getElementById("email").textContent.toLowerCase();
  let pwd = document.getElementById("pwd").textContent;

  if (id === "admin@admin.com" && pwd == 123456) {
    const successToast = document.getElementById("successToast");
    const toast = new bootstrap.Toast(successToast);
    toast.show();
  }else{
    const unsucsessToast = document.getElementById("unsucsessToast");
    const toast = new bootstrap.Toast(unsucsessToast);
    toast.show();
  }
}
