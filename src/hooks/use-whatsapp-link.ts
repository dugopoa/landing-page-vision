import { useIsMobile } from "@/hooks/use-mobile";
import {
  whatsappDesktopLink,
  whatsappMobileLink,
} from "@/lib/whatsapp";

function isMobileUserAgent(): boolean {
  if (typeof navigator === "undefined") return false;
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent
  );
}

export function useWhatsAppLink(message?: string) {
  const isMobileViewport = useIsMobile();
  const isMobile = isMobileViewport ?? isMobileUserAgent();

  return {
    href: isMobile ? whatsappMobileLink(message) : whatsappDesktopLink(message),
    isMobile,
  };
}
