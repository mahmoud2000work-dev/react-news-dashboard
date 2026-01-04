    interface Article {
    title: string;
    description?: string;
    url: string;
    urlToImage?: string;
    source?: {
        name?: string;
    };
    }

    interface NewsCardProps {
    article: Article;
    }

    export default function NewsCard({ article }: NewsCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.urlToImage ? (
            <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
            />
            ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image Found
            </div>
            )}
        </a>

        <div className="p-4 flex flex-col flex-1">
            <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            >
            <h2 className="text-lg font-semibold line-clamp-2">
                {article.title}
            </h2>
            </a>

            <p className="text-gray-600 text-sm mt-2 line-clamp-3">
            {article.description || "-"}
            </p>

            <div className="mt-auto py-4 flex items-center justify-between text-sm text-gray-500">
            <span>{article.source?.name || "Unknown"}</span>
            <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 border rounded-full hover:bg-blue-50 text-blue-600"
            >
                Open
            </a>
            </div>
        </div>
        </div>
    );
    }
