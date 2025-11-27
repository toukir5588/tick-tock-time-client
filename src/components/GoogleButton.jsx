import { FaGoogle } from "react-icons/fa";

export default function GoogleButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 py-2 mt-3 border rounded-xl hover:bg-gray-100 transition"
    >
      <FaGoogle className="text-red-500" />
      <span className="font-medium">Sign in with Google</span>
    </button>
  );
}
