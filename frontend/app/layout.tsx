

export const metadata = {
  title: "Consult General Physicians Online | Apollo Clone",
  description: "Book appointments with internal medicine specialists online.",
  icons:{
    icon:"https://images.apollo247.in/images/icons/apollo247.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        {children}
      </body>
    </html>
  );
}