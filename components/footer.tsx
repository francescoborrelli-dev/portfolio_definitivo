export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="mt-16 py-8 border-t">
      <div className="container max-w-5xl mx-auto px-4">
        <p className="text-center text-sm text-gray-600">
          © {currentYear} Francesco Borrelli — All rights reserved.
        </p>
      </div>
    </footer>
  )
}