<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('close-modal')">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full justify-center sm:p-6 sm:px-4 sm:pb-20 text-center sm:items-center">
        
        <!--contents-->
        <div @click.stop class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full" role="dialog" aira-modal="true">
          <div class="border-b border-gray-100 p-2 flex justify-between">
            <button @click="$emit('close-modal')" class="fas fa-times text-primary text-lg p-2 h-10 w-10 hover:bg-blue-50"></button>
            <!-- tweet button -->
            <div class="text-right sm:hidden mr-2">
              <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
              <button v-else @click="onCommentTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
            </div>
          </div>
          <div>
            <!-- original tweet -->
            <div class="flex px-4 pt-4 pd-3">
              <div class="flex flex-col">
                <img :src="tweet.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" />
                <div class="ml-5 w-0.5 h-full bg-gray-300 mt-2 -mb-1"></div>
              </div>
              <div class="ml-2 flex-1">
                <div class="flex space-x-2">
                  <span class="font-bold text-sm">{{tweet.email}}</span>
                  <span class="text-gray text-sm">@{{tweet.username}}</span>
                  <span class="text-gray text-sm">{{ moment(tweet.created_at).fromNow()}}</span>
                </div>
                <div class="text-sm">{{tweet.tweet_body}}
                <div>
                  <span class="text-primary text-sm">@{{tweet.username}}</span>
                  <span class="text-gray text-sm"> 님에게 보내는 답글</span>
                </div>
              </div>
            </div>
          </div>
          <!-- tweeting section -->
          <div class="flex px-4 pt-4">
            <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" />
            <div class="ml-2 mb-4 flex-1 flex flex-col">
              <textarea v-model="tweetBody" rows="5" placeholder="내 답글을 트윗합니다" class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"></textarea>
              <!-- tweet button -->
              <div class="text-right hidden sm:block">
                <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">답글</button>
                <button v-else @click="onCommentTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">답글</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref, computed } from 'vue'
import store from '../store'
import moment from 'moment'
import { COMMENT_COLLECTION, TWEET_COLLECTION } from '../firebase'
import firebase from 'firebase'

export default {
  props: ['tweet'],
  setup(props, {emit}){
    const tweetBody = ref('')
    const currentUser = computed(()=> store.state.user)

    const onCommentTweet = async () => {
      try {
      const doc = COMMENT_COLLECTION.doc()
      await doc.set({
        id: doc.id,
        from_tweet_id: props.tweet.id,
        comment_tweet_body: tweetBody.value,
        uid: currentUser.value.uid,
        created_at: Date.now(),
      })

      await TWEET_COLLECTION.doc(props.tweet.id).update({
        num_comments: firebase.firestore.FieldValue.increment(1),
      })
      emit('close-modal')
      } catch (e) {
        console.log("on comment tweet error:", e)
      }
    }

    return{
      tweetBody,
      currentUser,
      moment,
      onCommentTweet,
      }
  }
}
</script>

<style></style>