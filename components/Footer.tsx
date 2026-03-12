import { SquareTerminal } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-primary border-t border-white/50 py-8 flex flex-col gap-4 items-center justify-center">
      <div className="flex gap-2 items-center text-lg font-bold tracking-wider uppercase text-white">
        <span className="bg-blue-500 rounded-lg p-2">
          <SquareTerminal size={14} strokeWidth={2.5} />
        </span>
        Diamond
      </div>
      <p className="text-white/60 text-xs">© {new Date().getFullYear()} CodeKitten. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
