const Contact = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-gray-700 mb-4">
        Feel free to reach out if you'd like to connect, collaborate, or ask questions.
      </p>
      <ul className="space-y-2 text-gray-700">
        <li>Email: <a href="mailto:your.email@example.com" className="text-blue-500 underline">your.email@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourname" className="text-blue-500 underline">linkedin.com/in/yourname</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" className="text-blue-500 underline">github.com/yourusername</a></li>
      </ul>
    </div>
  );
};

export default Contact;
