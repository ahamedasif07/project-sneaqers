import { PrimaryButton } from "./PrimaryButton";

interface BentoCardProps {
  title: string;
  description: string;
  className: string;
  btnText?: string;
  btnClassName?: string;
  textColor?: string;
}

export function BentoTextCard({
  title,
  description,
  className,
  btnText = "Shop now",
  btnClassName,
  textColor = "text-black",
}: BentoCardProps) {
  return (
    <div
      className={`
        p-10 md:p-14 rounded-[32px] flex flex-col justify-end h-full w-full
        ${className} ${textColor}
      `}
    >
      <div className="space-y-6">
        <h3 className="text-2xl md:text-4xl font-bold leading-[1.2] tracking-tight">
          {title}
        </h3>
        <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-[320px]">
          {description}
        </p>

        <div className="pt-4">
          <PrimaryButton text={btnText} className={btnClassName} />
        </div>
      </div>
    </div>
  );
}
