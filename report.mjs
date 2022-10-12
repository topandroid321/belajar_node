import process from "process";


process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "report-error.json";


function sampleErorr(){
    throw new Error("Ups");
}

sampleErorr();

