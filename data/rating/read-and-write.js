import firebase from 'firebase/app';
import 'firebase/database';
import RatingInfo from '../rating-info';

export default function getRating() {
  return firebase
    .database()
    .ref('/ratings')
    .once('value')
    .then((snapshot) => {
      var stars = (snapshot.val() && snapshot.val().stars) || 0;
      var counter = (snapshot.val() && snapshot.val().counter) || 0;
      return new RatingInfo(stars, counter);
    });
}
