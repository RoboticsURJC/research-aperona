import socket

HOST = "127.0.0.1"
PORT = 65432


class HomeServer:

    def __init__(self):
        print(f"Starting server on {HOST}:{PORT}")
        self.socketServer = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.socketServer.bind((HOST, PORT))
        self.socketServer.listen()

    def receivePetitions(self) -> None:
        conn, addr = self.socketServer.accept()
        with conn:
            print(f"Connected by {addr}")
            while True:
                data = conn.recv(1024)
                if data == "exit":
                    break
                decodedMsg = data.decode()
                print(f"Received msg = {decodedMsg}")
                self.handlePetition(decodedMsg)

    def handlePetition(self, petition : str) -> None:
        if petition is not None:
            if petition == "Lights on":
                print("Activating: Lights on")
            elif petition == "Turn on TV":
                print("Activating: Turn on TV")
            else:
                print("ERROR: error in petition")


hs = HomeServer()
hs.receivePetitions()
