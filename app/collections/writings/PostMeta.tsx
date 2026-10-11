import { normalizeTags } from "./essays";
import { parsePostDate, POST_TIME_ZONE } from "./dates";
import TagList from "./TagList";

const datefmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: POST_TIME_ZONE,
});

export default function PostMeta({ date, tags }: { date?: string; tags?: string }) {
  const validDate = parsePostDate(date);
  const tagList = normalizeTags(tags);

  return (
    <div className="mb-10 gap-x-3 gap-y-2 text-center">
      <div className="mb-2">
        {validDate && (
          <time dateTime={validDate.toISOString()} className="opacity-60">
            {datefmt.format(validDate)}
          </time>
        )}
      </div>
      <TagList tags={tagList} className="justify-center" />
    </div>
  );
}
