"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./UI/Button";
import { SendMessage } from "./UI/MessageUI";
import MessageUI from "./UI/MessageUI";
import { sendContactEmail } from "@/service/contact";

interface Form {
  from: string;
  subject: string;
  message: string;
}

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};
export default function EmailForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);

  const [message, setMessage] = useState<SendMessage | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    sendContactEmail(form)
      .then(() => {
        setMessage({
          message: "이메일이 성공적으로 전송되었습니다!",
          state: "success",
        });
        setForm(DEFAULT_DATA);
      })
      .catch((err: any) => {
        setMessage({
          message:
            process.env.NODE_ENV !== "production"
              ? `전송 실패: ${err?.message ?? "알 수 없는 오류"}`
              : "전송 실패. 잠시 후 다시 시도해 주세요.",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => setMessage(null), 3000);
      });
  };
  return (
    <div className="send-box bg-gray-c font-dunggeunmo relative">
      <div className="border-2 border-black border-solid bg-gray-c ">
        <h2 className="bg-blue-500 text-center text-white p-2 border-b-2 border-solid border-black">
          Send Email 💌
        </h2>

        {message && <MessageUI message={message} />}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 p-4  text-black z-10"
        >
          <label htmlFor="from">Your Email</label>
          <input
            type="email"
            name="from"
            id="from"
            required
            autoFocus
            value={form.from}
            onChange={onChange}
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            value={form.subject}
            onChange={onChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            value={form.message}
            rows={10}
            onChange={onChange}
          />
          <button className="bg-gray-e p-2">Send</button>
        </form>
      </div>
    </div>
  );
}
