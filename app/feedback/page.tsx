import { Metadata } from 'next';
import FeedbackForm from '@/components/feedback-form';

export const metadata: Metadata = {
  title: 'Submit Feedback | CoreSight',
  description: 'Share your feedback, report bugs, or request new features.',
};

export default function FeedbackPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Submit Feedback
          </h1>
          <p className="text-lg text-muted-foreground">
            Help us improve by sharing your feedback, reporting bugs, or requesting new features.
          </p>
        </div>
        <FeedbackForm />
      </div>
    </main>
  );
}