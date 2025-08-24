import Link from "next/link";

export default function Feedback() {
  return (
    <section className="py-8 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-gray-600">
          We're constantly improving our product.
          <Link
            href="/feedback"
            className="text-primary-700 font-medium hover:underline ml-1"
          >
            Share your feedback
          </Link>
        </p>
      </div>
    </section>
  );
}
