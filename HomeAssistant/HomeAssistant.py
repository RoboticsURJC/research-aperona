

class HomeAssistant:

    def __init__(self):
        self.owner = None

    def setowner(self, owner: str) -> None:
        self.owner = owner

    def testowner(self) -> None:
        if self.owner is not None:
            print(f"Hello {self.owner}")
        else:
            print("There's no owner")


a = HomeAssistant()

a.testowner()

a.setowner("Pepito")

a.testowner()
