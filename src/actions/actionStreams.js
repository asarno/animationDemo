import { Observable } from 'rxjs/Rx';
import { nextTick } from './actions.js';

const timer = (superstream) => nextTick(Rx.Observable.interval(1000));
