import PubSub from 'pubsub-js';
declare function useSubscribe(event: string, handle: (event: string, data: any) => void): void;
export { useSubscribe, PubSub };
