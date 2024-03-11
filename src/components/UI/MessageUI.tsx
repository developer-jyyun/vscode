export interface SendMessage {
  message: string;
  state: "success" | "error";
}

export default function MessageUI({
  message: { message, state },
}: {
  message: SendMessage;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "🙆‍♀️" : "🙅‍♀️";
  return (
    <p
      className={`p-2 text-dark-navy text-center rounded ${
        isSuccess ? "bg-green-400" : "bg-red-300"
      }`}
    >{`${icon} ${message}`}</p>
  );
}
