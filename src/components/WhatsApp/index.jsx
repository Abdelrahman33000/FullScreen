import { WhatsAppSvg } from "../Svg";

export const WhatsApp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=966114090010"
      target="_blank"
      className="inline-block  p-3 bg-primary rounded-full transition-all hover:-translate-y-2 hover:scale-105 delay-100 ease-linear fixed bottom-2 left-2 z-50   "
    >
      <WhatsAppSvg className="text-white" />
    </a>
  );
};
