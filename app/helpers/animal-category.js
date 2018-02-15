import { helper } from '@ember/component/helper';

const upFeeling = [
  'happy',
  'light'
];

const downFeeling = [
  'sad',
  'dark'
];

export function animalCategory([feeling]) {
  if (upFeeling.includes(feeling)) {
    return '@.o';
  } else if (downFeeling.includes(feeling)) {
    return 'ToT';
  }
}

export default helper(animalCategory);
