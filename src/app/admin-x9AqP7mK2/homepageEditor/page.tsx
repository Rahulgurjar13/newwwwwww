export default function HomePageEditor() {
  return (
    <div className="bg-white/10 rounded-xl p-6 border border-white/10">
      <h2 className="text-lg font-semibold mb-4">Home Page Editor</h2>

      <div className="space-y-4">
        <input
          placeholder="Page Title"
          className="w-full bg-white/10 px-4 py-2 rounded"
        />

        <div>
          <img
            src="/hero.jpg"
            className="rounded-lg mb-2"
          />
          <button className="px-4 py-2 bg-blue-600 rounded">
            Upload Image
          </button>
        </div>

        <input
          placeholder="Heading"
          className="w-full bg-white/10 px-4 py-2 rounded"
        />

        <input
          placeholder="Subheading"
          className="w-full bg-white/10 px-4 py-2 rounded"
        />

        <div className="flex gap-3">
          <button className="bg-blue-600 px-4 py-2 rounded">Save</button>
          <button className="bg-gray-600 px-4 py-2 rounded">Preview</button>
          <button className="bg-green-600 px-4 py-2 rounded">Publish</button>
        </div>
      </div>
    </div>
  );
}
