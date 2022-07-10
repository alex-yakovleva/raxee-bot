import { PokerCombination } from '../classes/pokerCombination';

export const getPokerTwoPairs = (onePair: PokerCombination[]): PokerCombination[] => {
  const combinations: PokerCombination[] = [];

  for (let i = 0; i < onePair.length - 1; i += 1) {
    for (let j = i + 1; j < onePair.length; j += 1) {
      const subset = [...onePair[i].cards, ...onePair[j].cards];

      if (subset.filter((item, index, array) => array.indexOf(item) === index).length === 4) {
        combinations.push(new PokerCombination(2, subset));
      }
    }
  }

  return combinations;
};