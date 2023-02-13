from User import User
import DeviceHandler


class HomeAssistant:

    def __init__(self):
        self.owner: User = None
        self.deviceHandler: DeviceHandler

    def setowner(self, owner: User) -> None:
        self.owner = owner

    def testowner(self) -> None:
        if self.owner is not None:
            print(f"Hello {self.owner}")
        else:
            print("There's no owner")

    def maintest(self):
        usertest = User()
        usertest.setusername("Pepitogrillo")
        self.setowner(usertest)
        self.testowner()


ha_test = HomeAssistant()
ha_test.maintest()
