import CodeBlock from "@/components/UI/CodeBlock";
import ContactInfo from "@/components/UI/ContactInfo";
import KeyValueCode from "@/components/UI/KeyValueCode";
import React from "react";

export default function ContactPage() {
  return (
    <section>
      <CodeBlock objName="contactInfo " type="obj">
        <ContactInfo />
      </CodeBlock>
    </section>
  );
}
