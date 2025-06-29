import PhilosopherCard from "@/components/ui/PhilosopherCard";
import { PHILOSOPHER } from "@/utils/constants";

const Philosopher = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col justify-center mb-16 px-4 md:px-0 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Great Philosophers
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore the thinkers who shaped human thought throughout history
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl">
          {PHILOSOPHER.map((philosopher, index) => (
            <PhilosopherCard key={index} philosopher={philosopher} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosopher;
