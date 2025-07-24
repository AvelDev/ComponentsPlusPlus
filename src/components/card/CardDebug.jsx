import React from "react";
import Card from "./index";
import { Phone, CloudUpload, Shield, Zap, Heart, Star } from "lucide-react";

export default function CardDebug() {
  return (
    <div className="grid grid-cols-2 gap-4 m-4 sm:grid-cols-3">
      <Card>
        <Card.Icon color="blue">
          <Phone />
        </Card.Icon>
        <Card.Title>Easy Contact</Card.Title>
        <Card.Desc>
          Connect with customers instantly through multiple channels
        </Card.Desc>
      </Card>

      <Card>
        <Card.Icon color="green">
          <CloudUpload />
        </Card.Icon>
        <Card.Title>Cloud Storage</Card.Title>
        <Card.Desc>
          Secure and reliable cloud storage for all your files
        </Card.Desc>
      </Card>

      <Card>
        <Card.Icon color="red">
          <Shield />
        </Card.Icon>
        <Card.Title>Advanced Security</Card.Title>
        <Card.Desc>Enterprise-grade security to protect your data</Card.Desc>
      </Card>

      <Card>
        <Card.Icon color="yellow">
          <Zap />
        </Card.Icon>
        <Card.Title>Lightning Fast</Card.Title>
        <Card.Desc>
          Optimized performance for maximum speed and efficiency
        </Card.Desc>
      </Card>

      <Card>
        <Card.Icon color="purple">
          <Heart />
        </Card.Icon>
        <Card.Title>Customer Care</Card.Title>
        <Card.Desc>24/7 support team ready to help you succeed</Card.Desc>
      </Card>

      <Card>
        <Card.Icon color="orange">
          <Star />
        </Card.Icon>
        <Card.Title>Premium Quality</Card.Title>
        <Card.Desc>Top-tier features designed for professional use</Card.Desc>
      </Card>
    </div>
  );
}
