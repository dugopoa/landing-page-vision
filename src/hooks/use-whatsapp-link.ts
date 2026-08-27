import { useIsMobile } from "@/hooks/use-mobile";
import {
  whatsappDesktopLink,
  whatsappMobileLink,
} from "@/lib/whatsapp";

export function useWhatsAppLink(message?: string) {
  const isMobile = useIsMobile();

  return {
    href: isMobile ? whatsappMobileLink(message) : whatsappDesktopLink(message),
    isMobile,
  };
}
