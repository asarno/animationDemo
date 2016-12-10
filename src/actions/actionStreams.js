import { createSuperstream, createStatestream } from 'omnistream';

export const timer = (superstream) => {
  return superstream.filterForActionTypes(['SET_NEXT_ANIMATION_STEP'])
};
