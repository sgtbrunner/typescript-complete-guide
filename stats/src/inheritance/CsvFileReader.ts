// GENERICS APPROACH (INHERITANCE)
import fs from 'fs';

abstract class CsvFileReader<T> {
  data: T[] = [];
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}

export default CsvFileReader;
