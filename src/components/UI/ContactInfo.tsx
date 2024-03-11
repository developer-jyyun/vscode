import CodeBlock from "./CodeBlock";
import KeyValueCode from "./KeyValueCode";

export default function ContactInfo() {
  return (
    <>
      <KeyValueCode keyName="phone" value="010-5705-6142" />
      <KeyValueCode
        keyName="email"
        value="developer.jyyun@gmail.com"
        link="mailto:developer.jyyun@gmail.com"
      />
      <KeyValueCode
        keyName="kakao"
        value="open chat"
        link="https://open.kakao.com/o/swsqMofg"
      />
      <KeyValueCode
        keyName="github"
        value="developer-jyyun"
        link="https://github.com/developer-jyyun"
      />
      <KeyValueCode
        keyName="blog"
        value="developer-jyyun.log"
        link="https://velog.io/@developer-jyyun/posts"
      />
    </>
  );
}
