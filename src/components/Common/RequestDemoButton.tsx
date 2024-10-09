import Link from 'next/link';

export default function RequestDemoButton() {
  return (
    <a
      href="https://calendly.com/jay_gopal/one-on-one-meeting?month=2024-10"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Request Demo
    </a>
  );
}
