#!/usr/bin/env python3

import rclpy  #-- libreria de ROS2
from rclpy.node import Node #-- Importamos clase Node


class MyNode(Node):

    def __init__(self):
        super().__init__("first_node")
        self.counter_ = 0
        self.create_timer(1.0, self.timer_callback)

    def timer_callback(self):
        self.get_logger().info("Hello " + str(self.counter_))
        self.counter_ += 1
        

def main(args=None):
    rclpy.init(args=args)  #-- Empezamos comunicaciones de ros2

    # nodo
    node = MyNode()
    rclpy.spin(node) #-- spin hace que el nodo siga vivo hasta que decidamos matar el proceso

    rclpy.shutdown() #-- cerramos comunicaciones de ros2


if __name__ == '__main__':
    main()