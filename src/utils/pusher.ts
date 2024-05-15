import Pusher from "pusher";
import PusherClient from "pusher-js";
export const pusher = new Pusher({
  appId: "1735722",
  key: "ec99184309c155cb0324",
  secret: "e9389bb8365914587a6a",
  cluster: "eu",
  useTLS: true,
});
export const pusherClient = new PusherClient("ec99184309c155cb0324", {
    cluster: "eu",
})