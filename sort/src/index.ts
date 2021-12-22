import CharactersCollection from './CharactersCollection';
import LinkedList from './LinkedList';
import NumbersCollection from './NumbersCollection';

// CHARACTERS
const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log('Characters:', charactersCollection.data);

// LINKED LIST
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.print();

// NUMBERS
const numbersCollection = new NumbersCollection([10, 0, -5, 3]);
numbersCollection.sort();
console.log('Numbers:', numbersCollection.data);
