

class User:

    def __init__(self):
        self.username = None
        # TODO -> Hacer las conexiones de usuario - assistant

    def setusername(self, name: str) -> bool:
        if self.username is None:
            self.username = name
            return True
        return False

    def __str__(self) -> str:
        userstr = f"{self.username}"
        return userstr


