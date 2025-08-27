import KeyValueCode from "@/components/UI/KeyValueCode";

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
    </>
  );
}
