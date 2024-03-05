import { WhatsAppSvg } from "../Svg";

export const WhatsApp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=966114090010"
      target="_blank"
      className="fixed z-50 inline-block p-3 transition-all ease-linear delay-100 rounded-full bg-primary hover:-translate-y-2 hover:scale-105 bottom-2 left-2 "
    >
      <WhatsAppSvg className="text-white" />
    </a>
  );
};
