/* global SOCKET_HOST */
import io from "socket.io-client";
import config from "../core/config";

const socket = io(config.chatApiBaseUrl, {
  autoConnect: false,
});
export default socket;
