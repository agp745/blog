import { Button } from "~/@/components/ui/button";
import { EditState } from "~/@/components/client/editState";
import { TagSelect } from "~/@/components/client/tagSelect";
import { Textarea } from "~/@/components/ui/textarea";

export default function NewPost() {
  return (
    <main className="min-w-screen flex min-h-screen items-center justify-center bg-gray-300">
      <section className="relative h-[85vh] w-3/4 rounded bg-white pt-10">
        <EditState className="absolute -top-10 right-0 flex gap-2" />
        <Button
          type="submit"
          className="absolute -bottom-12 left-0 bg-blue-600 hover:bg-blue-800"
        >
          publish
        </Button>

        <div className="flex h-full flex-col gap-5 px-20">
          <input
            placeholder="New Title Here..."
            className="w-full text-4xl font-extrabold focus:outline-none"
          />
          <TagSelect />

          <div className="h-[2px] w-full bg-neutral-500" />

          <textarea
            placeholder="Write content here..."
            className="h-full resize-none text-lg focus:outline-none"
          />
        </div>
      </section>
    </main>
  );
}
