import { FEATURES } from "@/lib/constants";
import { Backpack, FileAudio, Database, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function KeyFeatures() {
  const mapIconToComponent = (iconName: string) => {
    const icons = {
      backpack: <Backpack className="h-6 w-6" />,
      databasezap: <Database className="h-6 w-6" />,
      audiolines: <FileAudio className="h-6 w-6" />,
    };
    return (
      icons[iconName as keyof typeof icons] || (
        <CheckCircle2 className="h-6 w-6" />
      )
    );
  };
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to deploy effective AI-powered digital labor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.slice(0, 6).map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 bg-primary-700/10 text-primary-700 rounded-lg flex items-center justify-center mb-4">
                {mapIconToComponent(feature.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/features">
            <Button
              variant="outline"
              className="rounded-full border-primary-700 text-primary-700 hover:bg-primary-50"
            >
              View All Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
