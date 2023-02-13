#include <iostream>


namespace HelloWorld
{
  void printHello()
  {
    std::cout << "Hello World from a namespace \n";
  }
}


namespace Number
{
  void favNum(int num)
  {
    if (num == 10)
      std::cout << "Really? \n";
    else
      std::cout << "Your fav number is " << num << '\n';
  }
}

int main(int argc, char **argv){
  using namespace HelloWorld;
  using namespace Number;

  int favNumber;

  HelloWorld::printHello();

  std::cout << "Introduce your favorite number: ";
  std::cin >> favNumber;
  Number::favNum(favNumber);

  return 0;  
}
