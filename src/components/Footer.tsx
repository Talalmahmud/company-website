import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechCraft Solutions</h3>
            <p>Building digital experiences that matter.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Mobile Apps</li>
              <li>Web Development</li>
              <li>AI Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <div className=" flex flex-col gap-y-2">
              <Link
                href="/careers"
                className=" inline-block hover:border-b-[1px] bg-gray-900  hover:border-blue-700"
              >
                Careers
              </Link>
              <Link
                className=" hover:border-b-[1px] bg-gray-900  hover:border-blue-700"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className=" hover:border-b-[1px] bg-gray-900  hover:border-blue-700"
                href="/terms-and-conditions"
              >
                Terms
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <Input placeholder="Your Email" className="mb-2" />
            <Button variant="outline" className=" text-black dark:text-white">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p>© 2024 TechCraft Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
