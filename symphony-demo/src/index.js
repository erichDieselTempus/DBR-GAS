const dynamsoft_javascript_barcode = require('dynamsoft-javascript-barcode');


//const dayjs = require('dayjs');

export { dynamsoft_javascript_barcode }


//export { dayjs }
/*
BarcodeScanner.license = 'DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9';
BarcodeScanner.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode/dist/";



let pScanner = null;

if (document.getElementById('readBarcode')) {
    document.getElementById('readBarcode').onclick = async function() {
        try {
            let scanner = await (pScanner = pScanner || BarcodeScanner.createInstance());
            scanner.onFrameRead = results => {
                console.log("Barcodes on one frame:");
                for (let result of results) {
                    const format = result.barcodeFormat ? result.barcodeFormatString : result.barcodeFormatString_2;
                    console.log(format + ": " + result.barcodeText);
                }
            };
            scanner.onUniqueRead = (txt, result) => {
                alert(txt);
                console.log("Unique Code Found: " + result);
            }
            await scanner.show();
        } catch (ex) {
            alert(ex.message);
            throw ex;
        }
    }
    */