import * as fs from "fs";
import * as PDFDocument from "pdfkit";

export default class PdfService {
  generate(sales) {
    function generatePDF(sales: any[], filePath: string) {
      const doc = new PDFDocument();

      // Pipe the PDF output to a writable stream
      const writeStream = fs.createWriteStream(filePath);
      doc.pipe(writeStream);

      // Add content to the PDF
      doc.fontSize(12);
      doc.text("Sales List", { underline: true }).moveDown();

      sales.forEach((item) => {
        doc.text(`CustomerId: ${item.customerId}`);
        doc.text(`ProductId: ${item.productId}`);
        doc.text(`Amount: ${item.amount}`);
        doc.text(`Date: ${item.createdAt}`);
        doc.moveDown();
      });

      // Finalize the PDF
      doc.end();
    }

    // Usage
    const outputFile = "output.pdf"; // Change this to the desired output file path
    generatePDF(sales, outputFile);
  }
}
