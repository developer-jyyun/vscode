import CodeBlock from "@/components/UI/CodeBlock";
import KeyValueCode from "@/components/UI/KeyValueCode";
import React from "react";
import { TITLE_CLASS } from "../constants";
import ContactInfo from "../about/_components/ContactInfo";
import EmailForm from "./_components/EmailForm";

export default function ContactPage() {
  return (
    <section className=" flex gap-4 w-full items-center justify-evenly max-lg:flex-col   max-lg:pb-10 ">
      <article>
        <h2 className={`${TITLE_CLASS} max-lg:mb-5`}>Please contact me!💖</h2>
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
