import CsvFileReader from './CsvFileReader';
import { dateStringToDate } from '../utils';
import { MatchResult } from '../MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

class MatchReader extends CsvFileReader<MatchData> {
  mapRow([
    stringDate,
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    matchResult,
    referee,
  ]: string[]): MatchData {
    return [
      dateStringToDate(stringDate),
      homeTeam,
      awayTeam,
      parseInt(homeScore),
      parseInt(awayScore),
      matchResult as MatchResult,
      referee,
    ];
  }
}

export default MatchReader;
