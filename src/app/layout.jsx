import CreateTaskButton from "@/components/createTaskButton";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Crud",
  description: "New Project",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CreateTaskButton/>
      </body>
    </html>
  );
}

export default RootLayout;