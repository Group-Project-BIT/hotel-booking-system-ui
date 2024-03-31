import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-12">
      <HomePage/>
      </div>
    </main>
  );
}
