import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { translate } from "~/lib/translator/translate";

export async function loader({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");

  const result = await translate(
    text || "Please enter text to translate",
    "Belgian Dutch"
  );

  return { result };
}

export default function Index() {
  const { result } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const text = searchParams.get("text") || "";

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full p-5 bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-gray-800">
        Flemish Translator
      </h1>
      <form method="get" action="" className="w-full max-w-lg">
        <textarea
          name="text"
          placeholder="Enter text to translate"
          defaultValue={text}
          className="mb-5 p-4 w-full min-h-[150px] rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-blue-500 text-white rounded-md text-base cursor-pointer hover:bg-blue-600 transition-colors"
        >
          Translate to Flemish
        </button>
      </form>
      {result && (
        <div className="mt-10 w-full max-w-lg">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Translation:
          </h2>
          <p className="p-5 bg-white rounded-lg border border-gray-300 text-lg text-gray-700">
            {result}
          </p>
        </div>
      )}
    </div>
  );
}
