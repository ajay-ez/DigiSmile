export function downloadFile(
  fileUrl: string,
  fileName: string = "downloaded-file"
): void {
  const anchor = document.createElement("a");
  anchor.href = fileUrl;

  anchor.download = fileName;

  document.body.appendChild(anchor);

  anchor.click();

  document.body.removeChild(anchor);
}
