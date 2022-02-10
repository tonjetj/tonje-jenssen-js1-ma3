function err(errorType = "success", message = "") {
  return `<div class="error ${errorType}">${message}</div>`;
}
