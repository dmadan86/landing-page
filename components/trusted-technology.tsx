import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function TrustedTechnology() {
  return (
    <section className="py-16 bg-primary-700 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">
              Trusted Technology
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-white">
            Powered by generative AI, trained on real job data, backed by
            ethical hiring principles and measurable outcomes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-5">
            <Link href="/">
              <Button
                size="lg"
                className="rounded-full shadow-sm bg-white text-primary-700 hover:bg-gray-100"
              >
                Explore Technology
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white bg-black text-white hover:bg-white hover:text-black"
              >
                View Industries
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
