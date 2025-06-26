const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="space-y-6">
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold">Project Name #1</h2>
          <p className="text-gray-700">
            Short description of the project. What tech you used, what the goal was, and what you learned.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold">Project Name #2</h2>
          <p className="text-gray-700">
            Another project description. You can link to GitHub repos or live demos later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
