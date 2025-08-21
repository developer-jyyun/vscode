import CodeBlock from "@/components/UI/CodeBlock";
import ContactInfo from "@/components/UI/ContactInfo";
import KeyValueCode from "@/components/UI/KeyValueCode";
import React from "react";
import { TITLE_CLASS } from "../constants";
import EmailForm from "@/components/EmailForm";

export default function ContactPage() {
  return (
    <section className="bg-contents-navy flex gap-4 w-full items-center justify-evenly max-lg:flex-col max-lg:items-start ">
      <article className="w-[50%]">
        <h2 className={`${TITLE_CLASS}`}>Please contact me!💖</h2>
        <CodeBlock objName="contactInfo " type="obj">
          <ContactInfo />
        </CodeBlock>
      </article>
      <article className="w-[40%] mx-auto max-lg:w-[90%] ">
        <EmailForm />
      </article>
    </section>
  );
}
