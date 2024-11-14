"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

type Form = {
  name: string;
  phone: string;
  email?: string;
  type: string;
  budget: string;
  about: string;
  info: string;
};

export default function Section8() {
  const [message, setMessage] = useState<Form>({
    name: "",
    phone: "",
    email: "",
    type: "",
    budget: "",
    about: "",
    info: "",
  });
  const phoneNumber = "7506205555"; // Replace with the desired WhatsApp number

  const handleSendMessage = () => {
    if (message) {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        `${message}`
      )}`;
      window.open(url, "_blank"); // Opens the WhatsApp message in a new tab
    } else {
      alert("Please enter a message.");
    }
  };
  return (
    <div className="w-full h-[80%] bg-[#E4E5DF] p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
        <Card className="p-6 space-y-6">
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name*</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number*</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                  type="tel"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inquiry">Land Type?*</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="viewing">NA bungalow plot</SelectItem>
                  <SelectItem value="pricing">Agriculture plot</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Budget*</Label>
              <Input
                id="budget"
                placeholder="Enter your budget"
                required
                type="tel"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="inquiry">What is your inquiry about?*</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="viewing">Property Viewing</SelectItem>
                  <SelectItem value="pricing">Pricing Information</SelectItem>

                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional information*</Label>
              <Textarea
                className="min-h-[120px] resize-none"
                id="message"
                placeholder="Your message"
                required
              />
            </div>

            <Button
              onClick={handleSendMessage}
              className="w-full sm:w-auto bg-green-700 hover:bg-green-800">
              Send Message
            </Button>
          </form>
        </Card>

        <div className="space-y-8 lg:p-6 ">
          <div className="text-black">
            <h2 className="text-2xl font-bold mb-4">
              Get in touch to schedule a visit.
            </h2>
            <p className="">
              Kindly fill this form with your details about your inquiries and
              we would respond your inquiry shortly.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 text-[#27563A]" />
              <div>
                <p className="font-medium text-black">Send an email</p>
                <p className="text-gray-600">enquiry@konkanbhoomi.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-[#27563A]" />
              <div>
                <p className="font-medium text-black">Give us a call</p>
                <p className="text-gray-600">
                  Contact: 7506205555 / 8805004034
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-9 h-8 mt-1 text-[#27563A]" />
              <div>
                <p className="font-medium text-black">Office address</p>
                <p className="text-gray-600">
                  Kadam Farm, Amrutsrushti Colony, Korle Road, Kelambe Village,
                  Lanja Taluka, Ratnagiri District - 416 701.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-1 text-[#27563A]" />
              <div>
                <p className="font-medium text-black">Working hours</p>
                <p className="text-gray-600">Mon - Sat: 10am - 7pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
