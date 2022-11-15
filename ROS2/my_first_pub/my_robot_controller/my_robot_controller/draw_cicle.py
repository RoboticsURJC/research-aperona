#!/usr/bin/env python3

import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist  #-- tipo de mensaje para el pub


class DrawCircleNode(Node):

    def __init__(self):
        super().__init__("draw_circle")
        self.get_logger().info("DrawCircleNode has been started 1")
        self.cmd_vel_pub_ = self.create_publisher(Twist, "/turtle1/cmd_vel", 10)  #-- 10 es el tamaño de cola
        self.timer = self.create_timer(0.5, self.send_velocity_command)
        self.get_logger().info("DrawCircleNode has been started")

    def send_velocity_command(self):
        msg = Twist()
        msg.linear.x = 2.0 #-- velocidad linear
        msg.angular.z =  1.0 #-- velocidad angular
        self.cmd_vel_pub_.publish(msg) #-- publicamos el mensaje


def main (args=None):

    rclpy.init(args=args)

    node = DrawCircleNode()
    rclpy.spin(node)

    rclpy.shutdown()


