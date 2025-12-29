export default function Skeleton({ count = 1 }) {
    return (
        <>
        {Array.from({ length: count }).map((_, i) => (
            <div
            key={i}
            className="animate-pulse bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col"
            >
            <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>

            <div className="p-4 flex flex-col flex-1">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-4"></div>

                <div className="mt-auto flex justify-between items-center pt-2">
                <div className="h-3 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="h-6 w-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>
            </div>
            </div>
        ))}
        </>
    );
}
