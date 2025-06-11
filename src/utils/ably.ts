
import Ably from "ably";
import Push from "ably/push";


const clientID = Date.now().toString();

// pass in the push plugin via client options, along with the URL of your service worker
const client = new Ably.Realtime({
    key: "CtgqHw.hG694A:KrC9gf0LMS7xkfnQtYUDmXhIyPESDjTUAUeoogMWYRw",
    clientId: clientID,
    pushServiceWorkerUrl: '/sw.js',
    plugins: { Push }
})

export { client };

