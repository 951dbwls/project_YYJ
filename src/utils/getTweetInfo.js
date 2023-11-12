import { LIKES_COLLECTION, RETWEET_COLLECTION, USER_COLLECTION } from '../firebase'

export default async function getTweetInfo(tweet, currentUser) {
  // Adding user info
  const userDoc = await USER_COLLECTION.doc(tweet.uid).get();
  const user = userDoc.data() || {};

  tweet.profile_image_url = user.profile_image_url || '';
  tweet.email = user.email || '';
  tweet.username = user.username || '';

  // Adding retweet info
  const retweetSnapshot = await RETWEET_COLLECTION
    .where('from_tweet_id', '==', tweet.id)
    .where('uid', '==', currentUser.uid)
    .get();

    tweet.isRetweeted = !retweetSnapshot.empty;

  // Adding likes info
  const likeSnapshot = await LIKES_COLLECTION
    .where('from_tweet_id', '==', tweet.id)
    .where('uid', '==', currentUser.uid)
    .get();

    tweet.isLiked = !likeSnapshot.empty;

  return tweet;
}




// import { LIKES_COLLECTION, RETWEET_COLLECTION, USER_COLLECTION } from '../firebase'

// export default async (tweet, currentUser) => {
//   // Adding user info
//   const doc = await USER_COLLECTION.doc(tweet.uid).get()
//   tweet.profile_image_url = doc.data().profile_image_url
//   tweet.email = doc.data().email
//   tweet.username = doc.data().username

//   // Adding retweet info
//   const retweetSnapshot = await RETWEET_COLLECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', currentUser.uid).get()
//   if (retweetSnapshot.empty) {
//     tweet.isRetweeted = false
//   } else {
//     tweet.isRetweeted = true
//   }

//   // Adding likes info
//   const likeSnapshot = await LIKES_COLLECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', currentUser.uid).get()
//   if (likeSnapshot.empty) {
//     tweet.isLiked = false
//   } else {
//     tweet.isLiked = true
//   }

//   return tweet
// }