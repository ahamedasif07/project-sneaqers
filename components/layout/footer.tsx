import Image from "next/image";
import Container from "../ui/container";

export function FooterSection() {
  return (
    <footer className="mt-20">
      {/* Footer Links */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-black italic mb-6">
              SNEA<span className="text-[#f58220]">Q</span>ERS
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Menu</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>Men</li>
              <li>Women</li>
              <li>Order Tracking</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 opacity-0">.</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Term Of Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-800">Payment Method</h4>
            <div className="flex flex-wrap gap-2">
              {["Paypal", "ApplePay", "Mastercard", "Visa"].map((pay) => (
                <div
                  key={pay}
                  className="px-4 py-2 border border-gray-100 rounded-lg text-[10px] font-bold uppercase"
                >
                  {pay}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center py-10 border-t border-gray-100 text-gray-400 text-xs">
          © 2026 Company Name Inc.
        </div>
      </Container>
    </footer>
  );
}
