import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-9xl text-primary font-extrabold text-center">
          404
        </h1>
        <h2 className="text-3xl text-primary font-extrabold text-center">
          Page Not Found
        </h2>
        <Link
          href="/planets"
          className="text-primary underline text-center block"
        >
          Back to planets
        </Link>
      </div>
    </div>
  );
}
