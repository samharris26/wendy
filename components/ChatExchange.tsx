"use client";

interface ChatExchangeProps {
  userMessage: string;
  wendyResponse: React.ReactNode;
  className?: string;
}

export function ChatExchange({ userMessage, wendyResponse, className = "" }: ChatExchangeProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* User message — right-aligned */}
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-white px-4 py-3 text-sm text-primaryText shadow-sm">
          {userMessage}
        </div>
      </div>

      {/* Wendy response — left-aligned with avatar */}
      <div className="flex items-start gap-2.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white">
          W
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-primaryText px-4 py-3 text-sm text-white shadow-sm">
          {wendyResponse}
        </div>
      </div>
    </div>
  );
}
