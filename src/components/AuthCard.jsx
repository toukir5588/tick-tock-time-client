import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function AuthCard({ title, subtitle, children, linkText, linkHref }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl bg-white">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-2 text-center">{title}</h2>
          <p className="text-gray-600 mb-6 text-center">{subtitle}</p>

          {children}

          <p className="text-center mt-6 text-sm text-gray-500">
            {linkText}{" "}
            <Link className="text-black font-semibold" href={linkHref}>
              Click here
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
