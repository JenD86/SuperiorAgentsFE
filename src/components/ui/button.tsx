interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, style, ...props }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded text-3xl hover:opacity-90 transition-opacity ${className}`}
      style={{
        fontFamily: 'Glass Antiqua, sans-serif',
        minWidth: '250px',
        ...style
      }}
      {...props}
    >
      {children}
    </button>
  );
} 
