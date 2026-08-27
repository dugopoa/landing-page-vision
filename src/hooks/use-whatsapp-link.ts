import { useEffect, useState } from "react";
import { whatsappDesktopLink, whatsappMobileLink } from "@/lib/whatsapp";

const MOBILE_BREAKPOINT = 768;

function detectMobile(): boolean {
  if (typeof window === "undefined") return false;
  const uaMobile =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      navigator.userAgent
    );
  return uaMobile || window.innerWidth < MOBILE_BREAKPOINT;
}

export function useWhatsAppLink(message?: string) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(detectMobile());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return {
    href: isMobile ? whatsappMobileLink(message) : whatsappDesktopLink(message),
    isMobile,
  };
}

