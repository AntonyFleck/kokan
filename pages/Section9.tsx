import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { phoneNumber,handleSendMessage } from "@/components/Faqleft";

export default function Section9() {
  return (
    <div>
      <footer className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <svg
                  className=" h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
                </svg>
                <span className="text-xl underline inline-block font-bold">
                  Konkanbhoomi Developers
                </span>
              </div>

              <div className="flex space-x-4 pl-5">
                <Link
                  href="https://www.facebook.com/konkanbhoomidevelopers"
                  className="hover:text-gray-200 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-200 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.youtube.com/@konkanbhoomidevelopers6550"
                  className="hover:text-gray-200 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.instagram.com/konkanbhoomi_developers/profilecard/?igsh=OTF1dzQ1eTNxdjFv"
                  className="hover:text-gray-200 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
              <div className=" pl-5">
                <Button
                 onClick={handleSendMessage}
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-green-800">
                  Contact Us
                </Button>
              </div>
            </div>

          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-200">
              Copyright © 2024. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
