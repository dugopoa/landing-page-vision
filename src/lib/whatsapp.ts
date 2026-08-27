export const WHATSAPP_NUMBER = "+5551999187885";
export const WHATSAPP_NUMBER_DISPLAY = "(51) 99918-7885";

export function whatsappMobileLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function whatsappDesktopLink(message?: string): string {
  const base = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}&text=${encodeURIComponent(message)}`;
}

export function whatsappLink(message?: string): string {
  return whatsappMobileLink(message);
}
