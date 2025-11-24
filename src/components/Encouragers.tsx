interface EncouragesProps {
  text: string;
}

const Encouragers: React.FC<EncouragesProps> = ({ text }) => {
  return (
    <li className="opacity-90 p-3 text-2xl text-center text-black tracking-wider  w-full max-w-4xl mx-auto border-b">
      <strong>{text}</strong>
    </li>
  );
};
export default Encouragers;

//to musi być <li> ze <strong> -iem