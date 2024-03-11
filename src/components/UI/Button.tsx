import Link from "next/link";

interface Props {
  text: string;
  link: string;
  styleClass?: string;
  theme?: string;
}

const themes: { [key: string]: string } = {
  line: "border border-solid border-code-purple bg-transparent text-code-purple font-bold hover:bg-code-purple hover:text-white py-4 px-8",
  bg: "border border-solid border-code-purple bg-code-purple text-white font-bold hover:bg-code-purple hover:bg-transparent hover:text-code-purple py-4 px-8",
  hash: "border border-solid rounded-full px-4 py-2",
};

const basicStyle = "";
const Button = ({ text, styleClass, link, theme = "line" }: Props) => {
  return (
    <button
      type="button"
      className={`${themes[theme]} ${styleClass} transition rounded m-2`}
    >
      <Link href={link}> {text}</Link>
    </button>
  );
};

export default Button;
