/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function CommentCard({ author, authorImg, text, time }) {
  return (
    <section className="border-b border-light-200 flex gap-4 py-8">
      <img
        className="w-12 h-12 rounded-full"
        src={authorImg}
        alt="author image"
      />
      <div className="w-full flex flex-col gap-2">
        <p className="font-bold">@{author.replace(" ", "")}</p>
        <p>{text}</p>
        <p>{dayjs(time).fromNow()}</p>
      </div>
    </section>
  );
}
