import Link from "next/link";

export default function RequestDemoButton() {
  return (
    <a
      href="/contact"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      Request Demo
    </a>
  );
}
