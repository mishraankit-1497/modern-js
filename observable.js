// Observables
import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});
observable.subscribe({
  next(x) {
    console.log(`Got value of ${x}`);
  },
  error(error) {
    console.log(error);
  },
  complete() {
    console.log("Completed");
  },
});
