// import InheritanceMatchReader from './inheritance/MatchReader';
import CompositionMatchReader from './MatchReader';
import CsvFileReader from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReports';

// // BY INHERITANCE
// const inheritanceMatchReader = new InheritanceMatchReader('football.csv');
// inheritanceMatchReader.read();

// BY COMPOSITION
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const compositionMatchReader = new CompositionMatchReader(csvFileReader);
compositionMatchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

// console.log('matches by inheritance:', inheritanceMatchReader.data);
console.log('matches by composition:', compositionMatchReader.matches);

summary.buildAndPrintReport(compositionMatchReader.matches);
