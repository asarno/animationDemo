import Rx from 'rxjs/Rx';

export const nextTick = (superstream) => {
  return Rx.Observable.interval(5)
    .map((integer) => {
      return { type: 'SET_NEXT_ANIMATION_STEP', progress: integer }
    })
    .take(500);
}
