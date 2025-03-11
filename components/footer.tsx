import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-t border-dashed border-primary mt-30 py-10">
      <div className="flex w-[60vw] mx-auto py-3 justify-center gap-30">
        <div className="flex flex-col gap-2">
          <h3 className="mb-3 font-semibold text-primary text-lg">
            Quick Links
          </h3>
          <div className="flex gap-10 text-sm">
            <ul className="flex flex-col gap-5">
              <li className="cursor-pointer">
                <Link href={"#home"}>Home</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"#about"}>About Me</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"#services"}>Services</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-5">
              <li className="cursor-pointer">
                <Link href={"#testimonials"}>Testimonials</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"#resources"}>Resources</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"#contact"}>Work with Hamdallah</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="mb-3 font-semibold text-primary text-lg">Legal</h3>

          <ul className="flex flex-col gap-5 text-sm">
            <li className="cursor-pointer">
              <Link href={"policy"}>Policy</Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"complaint"}>Complaint Handling</Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"terms"}>Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="mb-3 font-semibold text-primary text-lg">Contact</h3>

          <ul className="flex flex-col gap-5 text-sm">
            <li className="cursor-pointer flex items-center gap-2">
              <Mail size={"20px"} className="text-primary" />{" "}
              hamdallahrabiu@gmail.com
            </li>
            <li className="cursor-pointer flex items-center gap-2">
              <Mail size={"20px"} className="text-primary" /> Chat on Whatsapp
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
