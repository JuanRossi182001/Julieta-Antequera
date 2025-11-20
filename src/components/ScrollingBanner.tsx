interface ScrollingBannerProps {
  text: string
}

const ScrollingBanner = ({ text }: ScrollingBannerProps) => {
  const repeatedText = Array(15).fill(text).join(' • ')

  return (
    <div className="bg-white border-y-2 border-purple-600 py-3 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        <span className="text-purple-600 font-bold text-lg px-4">{repeatedText}</span>
        <span className="text-purple-600 font-bold text-lg px-4">{repeatedText}</span>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default ScrollingBanner
