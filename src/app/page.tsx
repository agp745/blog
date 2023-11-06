import fs from "fs";

// fs.readdir("./src/posts", (err, files) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(files);
// });

export default function HomePage() {
  const files = fs.readdirSync("./src/posts");
  console.log(files);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-red-200 text-white">
      {files}
    </main>
  );
}
