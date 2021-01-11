import { useEffect } from 'react';
import PubSub from 'pubsub-js';

function useSubscribe(event, handle) {
  useEffect(function () {
    var token = PubSub.subscribe(event, handle);
    return function () {
      PubSub.unsubscribe(token);
    };
  }, []);
}

export { useSubscribe, PubSub };