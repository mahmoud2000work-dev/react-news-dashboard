    interface CategoryFilterProps {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    }

    const CATEGORIES = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
    ];

    export default function CategoryFilter({
    category,
    setCategory,
    }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map((cat) => (
            <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                category === cat
                ? "bg-blue-500 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            >
            {cat}
            </button>
        ))}
        </div>
    );
    }
