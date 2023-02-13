import socket

HOST = "127.0.0.1"
PORT = 65432


class HomeClient:

    def __init__(self):
        print(f"Starting client on {HOST}:{PORT}")
        self.socketClient = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.socketClient.connect((HOST, PORT))

    def start(self):
        msg = ""
        while msg != "Exit":
            msg = input("> ")
            encodedMsg = msg.encode()
            self.socketClient.sendall(encodedMsg)


hc = HomeClient()
hc.start()
