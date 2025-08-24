export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with CoreSight is simple and straightforward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-700/10 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Pick a Role</h3>
            <p className="text-gray-600">Sales, Support, Admin, etc.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-700/10 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Invite Users</h3>
            <p className="text-gray-600">Job seekers or employees</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-700/10 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">They Talk to AI</h3>
            <p className="text-gray-600">
              Simulated practice + real-time feedback
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-700/10 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold mb-2">You Get Reports</h3>
            <p className="text-gray-600">
              Skill scores, confidence, job-readiness
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-gray-600 font-medium">
            Runs on desktop or mobile. No app required.
          </p>
        </div>
      </div>
    </section>
  );
}
