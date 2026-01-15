const Logo = ({ className = "h-10 w-10" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon frame */}
      <path
        d="M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        className="text-primary-600"
      />
      
      {/* Inner checkmark with modern twist */}
      <path
        d="M35 50 L45 60 L70 35"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="text-primary-500"
      />
      
      {/* Decorative dots */}
      <circle cx="30" cy="30" r="3" fill="currentColor" className="text-primary-400" />
      <circle cx="70" cy="70" r="3" fill="currentColor" className="text-primary-400" />
      
      {/* Accent lines for "task" theme */}
      <line x1="20" y1="45" x2="30" y2="45" stroke="currentColor" strokeWidth="2" className="text-primary-300" />
      <line x1="70" y1="55" x2="80" y2="55" stroke="currentColor" strokeWidth="2" className="text-primary-300" />
    </svg>
  );
};

export default Logo;