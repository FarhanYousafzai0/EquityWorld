import Header from "@/components/ui/Header";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Header/>
      <div className="container p-10 text-gray-400">
        {children}
      </div>
       
      </body>
    </html>
  );
}
