const PDFViewer = ({ fileUrl }: { fileUrl: string }) => {
  return (
    <embed src={fileUrl} type="application/pdf" width="100%" height="600px" />
  );
};

export default PDFViewer;
