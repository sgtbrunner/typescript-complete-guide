import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

interface DataReader {
  read(): void;
  data: string[][];
}

class MatchReader {
  reader: DataReader;
  matches: MatchData[] = [];

  constructor(reader: DataReader) {
    this.reader = reader;
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      ([
        stringDate,
        homeTeam,
        awayTeam,
        homeScore,
        awayScore,
        matchResult,
        referee,
      ]: string[]): MatchData => [
        dateStringToDate(stringDate),
        homeTeam,
        awayTeam,
        parseInt(homeScore),
        parseInt(awayScore),
        matchResult as MatchResult,
        referee,
      ]
    );
  }
}

export default MatchReader;
